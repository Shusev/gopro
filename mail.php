<?
$adminemail="r.sadyrga@gmail.com";
$date=date("d.m.y");
$time=date("H:i");

$name = $_POST["name"];
$phone = $_POST["phone"];
//$message = $_POST["text_message"];
$msg = '
                <html>
                    <head>
                        <title></title>
                    </head>
                    <body>
                        <p>Имя: '.$name.'</p>
                        <p>Почта: '.$phone.'</p>
                    </body>
                </html>';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=windows-1251' . "\r\n";

mail("$adminemail", "$date $time Сообщение от $name", "$msg", "$headers");
