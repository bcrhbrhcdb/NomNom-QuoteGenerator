<?php
// Database connection details
$servername = "your-database-host";
$username = "your-database-username";
$password = "your-database-password";
$dbname = "your-database-name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Perform database operations here
// e.g., create a table, insert data, query data, etc.

$conn->close();
?>
