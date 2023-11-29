<?php
date_default_timezone_set('America/Sao_Paulo');
return array(
  'version' => '1.0',
  'title' => 'Sistema de Gestão',
  'abspath_root' => 'https://www.camarapantanogrande.rs.gov.br',
  'abspath' => 'https://www.camarapantanogrande.rs.gov.br/admin',
  'realpath_root' => $_SERVER["DOCUMENT_ROOT"],
  'realpath' => $_SERVER["DOCUMENT_ROOT"]."/admin",   
  'database' => array
  (
    'name' => 'camarapantano3',
    'host' => 'camarapantano3.mysql.dbaas.com.br',
    'driver' => 'mysql',
    'username' => 'camarapantano3',
    'password' => 'jgK20ta2',
    'charset' => 'utf8'
  ),
);
/*
return array(
  'version' => '1.0',
  'title' => 'Sistema de GestÃ£o',
  'abspath_root' => 'http://www.camarapantanogrande.rs.gov.br',
  'abspath' => 'http://www.camarapantanogrande.rs.gov.br/novo/admin',
  'realpath_root' => $_SERVER["DOCUMENT_ROOT"]."/novo",
  'realpath' => $_SERVER["DOCUMENT_ROOT"]."/novo/admin",   
  'database' => array
  (
    'name' => 'adm2017',
    'host' => 'adm2017.mysql.dbaas.com.br',
    'driver' => 'mysql',
    'username' => 'adm2017',
    'password' => 'adm2017',
    'charset' => 'utf8'
  ),
);
*/