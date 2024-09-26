<?php
// Función para obtener los primeros nombres
function obtener_primeros_nombres($nombre_completo) {
    // Dividimos el nombre completo en palabras
    $palabras = explode(' ', $nombre_completo);

    // Iniciar una lista para acumular los nombres seleccionados
    $nombres_seleccionados = [];

    // Acumular palabras hasta que tengamos al menos dos nombres
    foreach ($palabras as $palabra) {
        // Evitamos agregar palabras como "de" o "del" a menos que haya más de 3 caracteres
        if (strlen(implode(' ', array_merge($nombres_seleccionados, [$palabra]))) > 3) {
            $nombres_seleccionados[] = $palabra;
        }

        // Si ya hemos acumulado dos nombres, paramos
        if (count($nombres_seleccionados) >= 2) {
            break;
        }
    }

    // Devolver los nombres seleccionados con la primera letra en mayúscula
    return ucwords(strtolower(implode(' ', $nombres_seleccionados)));
}

// Verificar si la solicitud es GET
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405); // Método no permitido
    echo json_encode(['error' => 'Solo se permiten solicitudes GET']);
    exit();
}

// Obtener el parámetro 'endpoint' de la solicitud
$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';

if ($endpoint === 'consultar') {
    try {
        // Conectar a la base de datos SQLite
        $db = new SQLite3('../2.0/app.db');

        // Obtener el parámetro 'Local' de la solicitud (si no existe, se usa un valor por defecto)
        $local = isset($_GET['Local']) ? $_GET['Local'] : '';

        // Si el parámetro Local está vacío, devolver todos los registros
        if ($local) {
            $stmt = $db->prepare('SELECT ID, Nombre FROM data WHERE Area = "SALON" AND Estado = "Presente" AND Local = ?');
            $stmt->bindValue(1, $local, SQLITE3_TEXT);
        } else {
            $stmt = $db->prepare('SELECT ID, Nombre FROM data WHERE Area = "SALON" AND Estado = "Presente"');
        }

        $result = $stmt->execute();

        // Inicializar un array para almacenar los resultados
        $respuesta = [];

        // Recorrer los resultados y aplicar la lógica para obtener los primeros nombres
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $respuesta[] = [
                'ID' => $row['ID'],
                'Nombre' => obtener_primeros_nombres($row['Nombre'])
            ];
        }

        // Cerrar la conexión a la base de datos
        $db->close();

        // Devolver los resultados en formato JSON
        echo json_encode($respuesta);
    } catch (Exception $e) {
        // Enviar respuesta de error si algo falla
        http_response_code(500); // Error interno del servidor
        echo json_encode(['error' => 'Error al obtener los datos', 'details' => $e->getMessage()]);
        exit();
    }
} else {
    // Si el endpoint no es 'consultar', devolver un error
    http_response_code(400); // Solicitud incorrecta
    echo json_encode(['error' => 'Endpoint no válido']);
}
?>
