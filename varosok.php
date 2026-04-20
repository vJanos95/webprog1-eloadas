<?php
header("Content-Type: application/json");
require "db.php";

$stmt = $pdo->query("SELECT id, nev FROM varos LIMIT 20");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
