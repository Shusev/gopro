<?
$adminemail="rentgoprocheb@gmail.com";
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
                        <p>Поступила заявка на аренду GoPro камеры:</p>
                        <span><b>Имя:</b> '.$name.'</span><br>
                        <span><b>Телефон:</b> '.$phone.'</span><br>
                    </body>
                </html>';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

mail("$adminemail", "Уведомление о заявке", "$msg", "$headers");
