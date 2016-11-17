<?php
require 'vendor/autoload.php';

// Routing
$page = (isset($_GET['p'])) ? $_GET['p']: 'home';

// Twig template
$loader = new Twig_Loader_Filesystem(__DIR__.'/templates');
$twig = new Twig_Environment($loader, [
    'cache'=> false
]);

$params =[];

switch ($page) {

    case 'home':
        $params = [
            'person' => [
                'fullname'=>'Florent LUQUET',
                'age' => 38
            ]
        ];
        break;

    default:
        header('HTTP/1.0 404 Not Found');
        $page = '404';
        break;
}


echo $twig->render($page.'.twig', $params);

