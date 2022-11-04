 <?php

    if (isset($_POST['email']) && !empty($_POST['email'])) {

        $nome = addslashes($_POST['name']);
        $email = addslashes($_POST['email']);
        $telefone = addslashes($_POST['telefone']);
        $mensagem = addslashes($_POST['mesage']);
    }
    $to = "isabele.alves@estudante.ifms.edu.br";
    $sub = "isabele - estudante";
    $body = "Nome: " . $nome . "\n";
    "Emai" . $email . "\n";
    "Telefone" . $telefone . "\n";
    "Mensagem" . $mensagem . "\n";
    $header = "From: diaryvns@gmail.com" . "\r \n"
        . "Repley-To:" . $email . "\r \n"
        . "X=Mailer:PHP/" . phpversion();
    if (mail($to, $subject, $body, $header)) {

        echo ("Email enviado com sucesso! :)");
    } else {

        echo ("Email não pode ser enviado. :(");
    }

    ?>
