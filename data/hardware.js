const KB = [
  {
    premises: [
      { attribute: 'computador liga', value: 'nao' },
      { attribute: 'barulho da ventilacao', value: 'nao' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na fonte de alimentacao' }
  },
  {
    premises: [
      { attribute: 'computador liga', value: 'sim' },
      { attribute: 'tela exibe imagem', value: 'nao' },
      { attribute: 'monitor conectado corretamente', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na placa de vídeo' }
  },
  {
    premises: [
      { attribute: 'computador liga', value: 'sim' },
      { attribute: 'emite sons de bip', value: 'sim' },
      { attribute: 'tela exibe imagem', value: 'nao' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na memória RAM' }
  },
  {
    premises: [
      { attribute: 'computador liga', value: 'sim' },
      { attribute: 'sistema operacional carrega', value: 'nao' },
      { attribute: 'mensagem de erro', value: 'dispositivo de boot nao encontrado' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no disco rígido' }
  },
  {
    premises: [
      { attribute: 'computador superaquecendo', value: 'sim' },
      { attribute: 'ventoinha girando', value: 'sim' },
      { attribute: 'acúmulo de poeira', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'superaquecimento devido a poeira' }
  },
  {
    premises: [
      { attribute: 'computador trava', value: 'sim' },
      { attribute: 'aplicativos fecham inesperadamente', value: 'sim' },
      { attribute: 'tela azul', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no processador (CPU)' }
  },
  {
    premises: [
      { attribute: 'teclado nao funciona', value: 'sim' },
      { attribute: 'teclado conectado', value: 'sim' },
      { attribute: 'teclado funciona em outros computadores', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na porta do teclado' }
  },
  {
    premises: [
      { attribute: 'computador lento', value: 'sim' },
      { attribute: 'uso de disco alto', value: 'sim' },
      { attribute: 'fragmentacao do disco', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'disco fragmentado' }
  },
  {
    premises: [
      { attribute: 'bateria nao carrega', value: 'sim' },
      { attribute: 'carregador conectado', value: 'sim' },
      { attribute: 'bateria antiga', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na bateria' }
  },
  {
    premises: [
      { attribute: 'wifi nao funciona', value: 'sim' },
      { attribute: 'wifi ativado', value: 'sim' },
      { attribute: 'outros dispositivos conectam', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no adaptador Wi-Fi' }
  },
  {
    premises: [
      { attribute: 'sem som', value: 'sim' },
      { attribute: 'alto-falantes conectados', value: 'sim' },
      { attribute: 'volume alto', value: 'sim' },
      { attribute: 'alto-falantes funcionam em outros dispositivos', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na placa de som' }
  },
  {
    premises: [
      { attribute: 'dispositivos USB nao reconhecidos', value: 'sim' },
      { attribute: 'dispositivos funcionam em outros computadores', value: 'sim' },
      { attribute: 'múltiplos dispositivos afetados', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no controlador USB' }
  },
  {
    premises: [
      { attribute: 'data e hora do sistema reiniciam', value: 'sim' },
      { attribute: 'computador desligado da tomada', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na bateria CMOS' }
  },
  {
    premises: [
      { attribute: 'barulho alto da ventoinha', value: 'sim' },
      { attribute: 'computador superaquecendo', value: 'nao' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no rolamento da ventoinha' }
  },
  {
    premises: [
      { attribute: 'disco rígido fazendo barulho de clique', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha iminente do disco rígido' }
  },
  {
    premises: [
      { attribute: 'computador reinicia aleatoriamente', value: 'sim' },
      { attribute: 'fonte de alimentacao adequada', value: 'sim' },
      { attribute: 'RAM testada', value: 'falha' },
    ],
    conclusion: { attribute: 'problema', value: 'RAM defeituosa' }
  },
  {
    premises: [
      { attribute: 'tela piscando', value: 'sim' },
      { attribute: 'cabo conectado corretamente', value: 'sim' },
      { attribute: 'monitor funciona em outros computadores', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'problema na placa de vídeo' }
  },
  {
    premises: [
      { attribute: 'drive óptico nao lê discos', value: 'sim' },
      { attribute: 'discos funcionam em outros dispositivos', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no drive óptico' }
  },
  {
    premises: [
      { attribute: 'computador fazendo ruídos incomuns', value: 'sim' },
      { attribute: 'ruído vem de dentro do gabinete', value: 'sim' },
      { attribute: 'barulho do disco rígido', value: 'nao' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na ventoinha ou componente' }
  },
  {
    premises: [
      { attribute: 'bluetooth nao funciona', value: 'sim' },
      { attribute: 'bluetooth ativado', value: 'sim' },
      { attribute: 'dispositivos nao emparelham', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no adaptador Bluetooth' }
  },
  {
    premises: [
      { attribute: 'touchpad nao funciona', value: 'sim' },
      { attribute: 'mouse externo funciona', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no touchpad' }
  },
  {
    premises: [
      { attribute: 'tela do laptop escurecida', value: 'sim' },
      { attribute: 'brilho ajustado', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na luz de fundo' }
  },
  {
    premises: [
      { attribute: 'computador emite bips ao iniciar', value: 'sim' },
      { attribute: 'código de bip', value: 'padrao específico' },
    ],
    conclusion: { attribute: 'problema', value: 'falha de hardware indicada pelo código de bip' }
  },
  {
    premises: [
      { attribute: 'bateria descarrega rapidamente', value: 'sim' },
      { attribute: 'idade da bateria', value: 'antiga' },
    ],
    conclusion: { attribute: 'problema', value: 'degradacao da bateria' }
  },
  {
    premises: [
      { attribute: 'tela exibe linhas', value: 'sim' },
      { attribute: 'tela externa funciona', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na tela LCD' }
  },
  {
    premises: [
      { attribute: 'computador desliga durante jogos', value: 'sim' },
      { attribute: 'configuracões gráficas altas', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'superaquecimento devido à carga da GPU' }
  },
  {
    premises: [
      { attribute: 'disco externo nao é reconhecido', value: 'sim' },
      { attribute: 'outros dispositivos reconhecem o disco', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na porta USB' }
  },
  {
    premises: [
      { attribute: 'rede desconecta frequentemente', value: 'sim' },
      { attribute: 'driver de rede atualizado', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha intermitente da placa de rede' }
  },
  {
    premises: [
      { attribute: 'webcam nao funciona', value: 'sim' },
      { attribute: 'webcam ativada', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha de hardware da webcam' }
  },
  {
    premises: [
      { attribute: 'impressora nao funciona', value: 'sim' },
      { attribute: 'impressora conectada', value: 'sim' },
      { attribute: 'impressora funciona em outros computadores', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na porta da impressora' }
  },
  {
    premises: [
      { attribute: 'laptop quente e desligando', value: 'sim' },
      { attribute: 'ventilacao barulhenta', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'superaquecimento devido a ventoinhas bloqueadas' }
  },
  {
    premises: [
      { attribute: 'mensagem de erro', value: 'gerenciamento de memória' },
      { attribute: 'tela azul', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no módulo de memória' }
  },
  {
    premises: [
      { attribute: 'ventoinhas funcionam em alta velocidade constantemente', value: 'sim' },
      { attribute: 'uso da CPU baixo', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no sensor térmico' }
  },
  {
    premises: [
      { attribute: 'indicador de caps lock nao funciona', value: 'sim' },
      { attribute: 'teclado funciona', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no LED do teclado' }
  },
  {
    premises: [
      { attribute: 'monitor externo nao detectado', value: 'sim' },
      { attribute: 'cabo conectado', value: 'sim' },
      { attribute: 'monitor funciona com outros dispositivos', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha na porta de vídeo' }
  },
  {
    premises: [
      { attribute: 'erros em aplicativos', value: 'sim' },
      { attribute: 'espaco no disco rígido', value: 'suficiente' },
      { attribute: 'uso de RAM', value: 'alto' },
    ],
    conclusion: { attribute: 'problema', value: 'RAM insuficiente' }
  },
  {
    premises: [
      { attribute: 'computador barulhento', value: 'sim' },
      { attribute: 'barulho aumenta com a atividade', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'disco rígido falhando' }
  },
  {
    premises: [
      { attribute: 'artefatos na tela', value: 'sim' },
      { attribute: 'driver gráfico atualizado', value: 'sim' },
    ],
    conclusion: { attribute: 'problema', value: 'falha no hardware da GPU' }
  },
  {
    premises: [
      { attribute: 'sistema trava na inicializacao', value: 'sim' },
      { attribute: 'modo de seguranca funciona', value: 'nao' },
    ],
    conclusion: { attribute: 'problema', value: 'falha crítica de hardware' }
  },
];

module.exports = KB;
