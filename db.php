<?php
$pdo = new PDO(
  "mysql:host=localhost;dbname=vargaszabo1;charset=utf8",
  "vargaszabo1",
  "vargaszabo1",
  [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
  ]
);
