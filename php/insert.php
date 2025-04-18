<?php
include('config.php');
session_start();

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("location: index.php");
    exit;
}

if (isset($_POST['add'])) {
  $pid = $_POST['proid'];
    $fname = $_SESSION['username'];
    $quantity = isset($_POST['quantity']) ? $_POST['quantity'] : null;
    $price = isset($_POST['price']) ? $_POST['price'] : null;

    if ($quantity === null || $price === null) {
        die("Quantity or price not provided.");
    }

    $sql2 = mysqli_query($conn, "SELECT * FROM farmer WHERE username='$fname'");
    $row = mysqli_fetch_array($sql2);
    $fid = $row["farmerid"];

    // Check if product exists
    $checkProduct = mysqli_query($conn, "SELECT * FROM product WHERE prodid='$pid'");
    if (mysqli_num_rows($checkProduct) == 0) {
        die("Error: Product ID does not exist.");
    }

    $sql1 = "INSERT INTO myshop VALUES('$pid','$fid','$quantity','$price')";
    mysqli_query($conn, $sql1);

    if (mysqli_error($conn)) {
        echo("Errorcode: " . mysqli_errno($conn) . " - " . mysqli_error($conn));
    } else {
        header("Location: welcomefarmer.php");
        exit;
    }
}
?>
