<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['userName']);

    $to = "Taimor_m@hotmail.com";
    $subject = "New Visitor Entered the Site";
    $message = "The following person entered their name on your site: " . $name;
    $headers = "From: no-reply@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: newsUpdate.html");
        exit();
    } else {
        echo "Email sending failed.";
    }
}
?>
