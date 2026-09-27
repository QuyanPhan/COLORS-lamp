<?php

$conn = new mysqli(
    "localhost",
    "YOUR_DATABASE_USERNAME",
    "YOUR_DATABASE_PASSWORD",
    "YOUR_DATABASE_NAME"
);

if ($conn->connect_error) {
    die("Database connection failed");
}
?>

