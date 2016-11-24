<?php
require 'vendor/autoload.php';

// Routing
$page = (isset($_GET['p'])) ? $_GET['p']: 'home';

// Twig template
$loader = new Twig_Loader_Filesystem(__DIR__.'/templates');
$twig = new Twig_Environment($loader, [
    'cache'=> false // __DIR__.'/tmp'
]);

$params =[];

switch ($page) {

    case 'home':
        $params = [
            'css' =>[
                'opacity'=> 0.85
            ],
            'header' => [
                'title'=>'Les Programmes d’Action de Prévention contre les Inondations (PAPI)'
            ]
        ];
        break;

    default:
        header('HTTP/1.0 404 Not Found');
        $page = '404';
        break;
}

echo $twig->render($page.'.twig', $params);

