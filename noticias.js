// ==========================================================================
// BANCO DE DADOS E CARREGAMENTO DE NOTÍCIAS DE ANIMES
// Gerencia a exibição da matéria aberta e as recomendações aleatórias.
// ==========================================================================

const listaMaterias = [
  {
    id: "dragon-ball-daima",
    categoria: "Dragon Ball Daima",
    titulo: "Dragon Ball Daima: Nova jornada traz Goku em versão miniatura e mistérios no Reino dos Demônios",
    resumo: "Criado com envolvimento direto de Akira Toriyama, o anime traz animação de ponta, novas conspirações mágicas e combates no estilo clássico de artes marciais.",
    imagem: "img/dragon-ball-daima.jpg",
    alt: "Goku com aura avermelhada e cauda de Saiyajin em Dragon Ball Daima",
    paragrafos: [
      "Dragon Ball Daima é uma das produções mais aguardadas pelos fãs da franquia em todo o mundo. Com a supervisão direta e conceitos desenvolvidos pelo lendário mestre Akira Toriyama antes de sua partida, a nova aventura mergulha em territórios inexplorados do universo criado nos mangás.",
      "Na trama, uma conspiração misteriosa acaba transformando Goku, Vegeta e todos os seus amigos em crianças. Para reverter o feitiço e restabelecer o equilíbrio, Goku viaja até o Reino dos Demônios ao lado de novos companheiros.",
      "A produção surpreende pelo visual primoroso, resgatando a essência do combate corpo a corpo e o uso do bastão mágico (Nyoibo), unindo nostalgia profunda e inovação técnica de tirar o fôlego."
    ]
  },
  {
    id: "dragon-ball-classico",
    categoria: "Dragon Ball Clássico",
    titulo: "Dragon Ball Clássico: O charme inesquecível do início das aventuras de Goku e Bulma",
    resumo: "Relembre as origens da franquia, a busca pelas Esferas do Dragão, os torneios de artes marciais Tenkaichi Budokai e o treinamento com o Mestre Kame.",
    imagem: "img/dragon-ball-classico.jpg",
    alt: "Goku criança, Bulma, Kuririn e Shenlong em Dragon Ball Clássico",
    paragrafos: [
      "Antes das transformações galácticas e batalhas entre deuses, a jornada de Goku começou com um encontro improvável com a jovem Bulma no Monte Paozu, dando início à épica busca pelas sete Esferas do Dragão.",
      "O charme das primeiras sagas reside na simplicidade cativante, nas lendas de artes marciais e no humor característico da obra. Treinamentos árduos com o Mestre Kame e a filosofia do Torneio de Artes Marciais (Tenkaichi Budokai) definiram o padrão do gênero shonen.",
      "Dragon Ball Clássico permanece como uma obra atemporal indispensável para qualquer fã da cultura pop japonesa."
    ]
  },
  {
    id: "dragon-ball-z",
    categoria: "Dragon Ball Z",
    titulo: "Dragon Ball Z: 35 anos da chegada de Raditz e das sagas que revolucionaram os shonens",
    resumo: "As batalhas contra Freeza em Namekusei, Cell e Majin Boo continuam sendo referências globais de impacto cultural e transformação épica em Super Saiyajin.",
    imagem: "img/dragon-ball-z.jpg",
    alt: "Goku Super Saiyajin, Freeza, Piccolo, Vegeta, Gohan e Kuririn em Dragon Ball Z",
    paragrafos: [
      "Com a revelação da herança Saiyajin de Goku e a chegada de Raditz na Terra, Dragon Ball Z mudou a escala da série para sempre, elevando as apostas para batalhas interplanetárias.",
      "A saga de Namekusei e a histórica transformação no lendário Super Saiyajin contra Freeza tornaram-se momentos inesquecíveis da animação mundial, seguidos pelos arcos complexos de viagem no tempo com Trunks e Cell.",
      "Mesmo após mais de três décadas, o impacto de Dragon Ball Z continua evidente em incontáveis obras contemporâneas."
    ]
  },
  {
    id: "dragon-ball-kai",
    categoria: "Dragon Ball Kai",
    titulo: "Dragon Ball Kai: O corte definitivo que aproximou o anime do ritmo do mangá",
    resumo: "Com imagem remasterizada e remoção dos episódios de preenchimento (fillers), Kai consolidou uma experiência dinâmica e fiel aos quadrinhos originais.",
    imagem: "img/dragon-ball-kai.jpg",
    alt: "Goku Super Saiyajin e guerreiros Z no pôster de Dragon Ball Kai",
    paragrafos: [
      "Lançado em comemoração aos 20 anos da saga Z, Dragon Ball Kai trouxe uma proposta ousada: remasterizar o material clássico em alta definição e remover centenas de minutos de fillers.",
      "O resultado foi um ritmo narrativo muito mais acelerado e fiel aos volumes originais desenhados por Akira Toriyama, reduzindo o tempo de lutas prolongadas e focando na ação direta.",
      "Para os novos fãs que desejam maratonar a era de ouro de Dragon Ball com dinamismo, a edição Kai se tornou uma porta de entrada recomendada."
    ]
  },
  {
    id: "dragon-ball-gt",
    categoria: "Dragon Ball GT",
    titulo: "Dragon Ball GT: O valor nostálgico das viagens espaciais e a consagração do Super Saiyajin 4",
    resumo: "Mesmo fora do cânone principal, GT marcou época com vilões como Baby, os Dragões Malignos e uma das trilhas de encerramento mais emocionantes dos animes.",
    imagem: "img/dragon-ball-gt.jpg",
    alt: "Goku Super Saiyajin 4, Baby, Pan e Trunks em Dragon Ball GT",
    paragrafos: [
      "Exibido logo após o encerramento do mangá original, Dragon Ball GT buscou conciliar o espírito de aventura espacial dos primeiros anos com a intensidade das lutas de Dragon Ball Z.",
      "Entre os maiores acertos da série está o design do Super Saiyajin 4, inspirado nas origens primitivas dos Saiyajins e do Oozaru, além de antagonistas marcantes como o parasita Tsufurujin Baby e os Dragões Malignos.",
      "A canção 'Dan Dan Kokoro Hikareteku' e o desfecho emotivo de Goku selaram a série com enorme carinho na memória dos fãs da televisão aberta no Brasil."
    ]
  },
  {
    id: "dragon-ball-super",
    categoria: "Dragon Ball Super",
    titulo: "Dragon Ball Super: O impacto da chegada de Bills e o Torneio do Poder",
    resumo: "A expansão para o multiverso, a introdução de deuses destruidores e o Instinto Superior elevaram Goku a patamares divinos de força.",
    imagem: "img/dragon-ball-super.jpg",
    alt: "Pôster promocional de Dragon Ball Super com Goku, Bills, Whis e guerreiros Z",
    paragrafos: [
      "O retorno oficial da história canônica com Dragon Ball Super expandiu as fronteiras cósmicas, introduzindo deuses da destruição, anjos tutelares e doze universos distintos.",
      "O clímax do Torneio do Poder reuniu guerreiros de múltiplas realidades e culminou no despertar do Instinto Superior por Goku, gerando comoção global e transmissões públicas ao redor do planeta.",
      "A saga provou que o apelo de Dragon Ball permanece tão poderoso e relevante quanto em suas décadas iniciais."
    ]
  },
  {
    id: "dragon-ball-super-remake",
    categoria: "Dragon Ball Super (Remake / Retorno)",
    titulo: "Remake e retorno de Dragon Ball Super: Rumores sobre novas adaptações dos arcos Moro e Granola",
    resumo: "Com os arcos do mangá já consolidados pela Toei Animation, as expectativas dos fãs sobre nova produção de animação com padrão atualizado só aumentam.",
    imagem: "img/dragon-ball-super-remake.jpg",
    alt: "Pôster de Dragon Ball Super Beerus com Goku e Deus da Destruição Bills",
    paragrafos: [
      "Enquanto o mangá de Dragon Ball Super continuou sendo publicado com sagas aclamadas como a do feiticeiro milenar Moro e o sobrevivente Granola, os fãs aguardam ansiosos o retorno da adaptação para anime.",
      "Especulações recentes apontam que novas produções podem adotar padrões técnicos modernos inspirados nos filmes cinematográficos recentes como Broly e Super Hero.",
      "O público aguarda com grande expectativa futuros anúncios oficiais da Toei Animation para dar vida a essas sagas épicas."
    ]
  },
  {
    id: "demon-slayer",
    categoria: "Demon Slayer",
    titulo: "Demon Slayer (Kimetsu no Yaiba): O Castelo Infinito e a trilogia épica nos cinemas",
    resumo: "A Ufotable prepara os filmes que encerrarão a trajetória de Tanjiro e dos Hashiras na batalha definitiva contra Muzan Kibutsuji.",
    imagem: "",
    alt: "",
    paragrafos: [
      "Após o sucesso monumental das temporadas televisivas, Demon Slayer caminha para o encerramento de sua história através de uma trilogia de longas-metragens para os cinemas mundiais.",
      "Produzido pelo renomado estúdio Ufotable, o arco do Castelo Infinito promete elevar os limites da computação gráfica integrada à animação 2D, com coreografias dinâmicas e combates ferozes.",
      "A expectativa é que a conclusão de Tanjiro Kamado e dos Pilares estabeleça novos recordes históricos de bilheteria internacional."
    ]
  },
  {
    id: "jujutsu-kaisen",
    categoria: "Jujutsu Kaisen",
    titulo: "Jujutsu Kaisen: As consequências do Incidente de Shibuya e o início do Jogo do Abate",
    resumo: "O universo de feitiçaria criado por Gege Akutami alcança seu clímax sombrio com confrontos brutais e reviravoltas no destino de Yuji Itadori.",
    imagem: "",
    alt: "",
    paragrafos: [
      "O catastrófico Incidente de Shibuya alterou permanentemente o cenário de Jujutsu Kaisen, desmantelando a estabilidade do Japão e aprisionando Satoru Gojo no Reino da Prisão.",
      "Com a iminência do perigoso Jogo do Abate idealizado por Kenjaku, Yuji Itadori e seus aliados enfrentam feitiçarias ancestrais e regras letais em uma corrida contra o tempo.",
      "A obra conquistou a crítica pela coragem narrativa em impor riscos reais e irreversíveis aos seus personagens centrais."
    ]
  },
  {
    id: "attack-on-titan",
    categoria: "Attack on Titan",
    titulo: "Attack on Titan (Shingeki no Kyojin): A conclusão triunfal que entrou para a história",
    resumo: "A obra-prima de Hajime Isayama continua sendo debatida por seu peso narrativo, debates morais profundos e desfecho avassalador.",
    imagem: "",
    alt: "",
    paragrafos: [
      "Shingeki no Kyojin consolidou seu lugar no panteão dos maiores animes de todos os tempos ao transformar um mistério de sobrevivência contra gigantes em um épico thriller geopolítico e filosófico.",
      "A transformação de Eren Yeager e o evento apocalíptico do Estrondo forçaram escolhas dolorosas entre lealdade, liberdade e o futuro da humanidade.",
      "O desfecho proporcionou uma conclusão profunda e emocional que continua inspirando discussões apaixonadas pela comunidade."
    ]
  },
  {
    id: "dandadan",
    categoria: "Dandadan",
    titulo: "Dandadan: O fenômeno animado pelo estúdio Science SARU conquista o público",
    resumo: "Com uma mistura alucinante de alienígenas, fantasmas japoneses, comédia e romance jovem, Dandadan é a grande surpresa da temporada.",
    imagem: "",
    alt: "",
    paragrafos: [
      "Adaptado a partir da obra de Yukinobu Tatsu pelo prestigiado estúdio Science SARU, Dandadan se destacou imediatamente pela animação fluida, estética psicodélica e ritmo vertiginoso.",
      "A dinâmica entre Momo Ayase, que acredita em espíritos, e Ken Takakura (Okarun), obcecado por extraterrestres, entrega química divertida, momentos eletrizantes e muita criatividade visual.",
      "Com temas musicais marcantes e direção de arte arrojada, Dandadan reafirma a vitalidade da nova safra de produções japonesas."
    ]
  },
  {
    id: "one-piece-novos-arcos",
    categoria: "One Piece",
    titulo: "Novos arcos de One Piece confirmados na Netflix com dublagem em português",
    resumo: "A Netflix confirmou a chegada de mais episódios e novos arcos com dublagem brasileira, dando continuidade à jornada do bando do Chapéu de Palha.",
    imagem: "img/one-piece-novos-arcos.jpg",
    alt: "Cena da reunião do Reverie no Governo Mundial em One Piece",
    paragrafos: [
      "A plataforma de streaming Netflix anunciou oficialmente a expansão contínua do catálogo de One Piece no Brasil, garantindo novos lotes de episódios totalmente dublados em português brasileiro com o elenco de dublagem consagrado.",
      "Os novos arcos trazem acontecimentos cruciais para a geopolítica do mundo dos piratas, com destaque para a cúpula do Reverie, onde líderes das principais nações mundiais se reúnem em Mary Geoise sob a vigília do Governo Mundial.",
      "A iniciativa reforça o compromisso da plataforma em aproximar cada vez mais os fãs brasileiros da transmissão quase simultânea aos arcos contemporâneos da obra de Eiichiro Oda."
    ]
  },
  {
    id: "one-piece-live-action",
    categoria: "One Piece: A Série",
    titulo: "One Piece Live-Action: Sucesso mundial e novidades para a próxima temporada",
    resumo: "A adaptação em live-action da Netflix conquistou fãs no mundo todo ao recriar a jornada de Luffy e sua tripulação pelos mares da Grand Line.",
    imagem: "img/one-piece-live-action.jpg",
    alt: "Pôster promocional da série live-action de One Piece na Netflix",
    paragrafos: [
      "A série live-action de One Piece produzida pela Netflix quebrou a histórica maldição de adaptações ocidentais de animes, recebendo aclamação fervorosa tanto de veteranos da franquia quanto de uma legião de novos espectadores.",
      "Com a liderança carismática de Iñaki Godoy no papel de Monkey D. Luffy e elenco estelar como Zoro, Nami, Usopp e Sanji, a produção honrou o espírito otimista e aventureiro do mangá original com a aprovação rigorosa de Eiichiro Oda.",
      "A produção da segunda temporada já está em andamento a todo vapor, com a aguardada introdução de personagens lendários como Chopper, Crocodile, Nico Robin e os desafios implacáveis da Grand Line."
    ]
  },
  {
    id: "bleach-tybw",
    categoria: "Bleach",
    titulo: "Bleach: Thousand-Year Blood War avança com confrontos decisivos",
    resumo: "O retorno de Ichigo Kurosaki e da Soul Society apresenta cenas de animação consagradas e batalhas épicas contra os Quincies.",
    imagem: "",
    alt: "",
    paragrafos: [
      "O retorno triunfal de Bleach com a adaptação da Guerra Sangrenta dos Mil Anos (Thousand-Year Blood War) revitalizou o anime clássico com visual cinematográfico, direção impecável e lutas de tirar o fôlego.",
      "A invasão dos Quincies liderados pelo imperador Yhwach testou as forças da Soul Society até o limite extremo, forçando capitães e Shinigamis a revelarem suas Bankais mais devastadoras.",
      "Com supervisão do autor Tite Kubo, o anime ainda entrega cenas inéditas e expandidas que enriquecem o cânone da história."
    ]
  },
  {
    id: "black-clover-naruto",
    categoria: "Black Clover & Naruto",
    titulo: "Black Clover e o legado duradouro de Naruto nas novas gerações",
    resumo: "Uma análise sobre como o universo ninja de Masashi Kishimoto influenciou o sonho de Asta e o desenvolvimento dos animes shonen modernos.",
    imagem: "",
    alt: "",
    paragrafos: [
      "A trajetória de superação pessoal, a luta contra o preconceito social e o sonho de alcançar a liderança máxima de uma nação unem de forma inegável as histórias de Naruto Uzumaki e Asta em Black Clover.",
      "Ambos os protagonistas iniciam suas jornadas sem as habilidades convencionais valorizadas por suas sociedades — no caso de Asta, a total ausência de mana mágica —, compensando com perseverança incansável, lealdade e força de vontade.",
      "Essa estrutura clássica de jornada do herói reafirma que as lições de amizade e esforço introduzidas por Naruto continuam inspirando novas gerações de criadores e leitores no Japão e no mundo."
    ]
  }
];

// Função simples para carregar a matéria atual a partir do parâmetro 'id' da URL
function carregarMateriaAtual() {
  const parametros = new URLSearchParams(window.location.search);
  const idMateria = parametros.get("id");

  // Localiza a matéria pelo id ou seleciona a primeira por padrão
  let materia = listaMaterias.find((item) => item.id === idMateria);
  if (!materia) {
    materia = listaMaterias[0];
  }

  // Preenche cabeçalho da notícia
  const etiquetaCategoria = document.querySelector("#noticia-categoria");
  const tituloNoticia = document.querySelector("#noticia-titulo");
  const containerCapa = document.querySelector("#noticia-capa-container");
  const containerConteudo = document.querySelector("#noticia-conteudo");

  if (etiquetaCategoria) etiquetaCategoria.textContent = materia.categoria;
  if (tituloNoticia) tituloNoticia.textContent = materia.titulo;
  document.title = `${materia.titulo} - Supercine`;

  // Renderiza a imagem de capa se a matéria possuir imagem
  if (containerCapa) {
    containerCapa.innerHTML = "";
    if (materia.imagem && materia.imagem.trim() !== "") {
      const imgCapa = document.createElement("img");
      imgCapa.src = materia.imagem;
      imgCapa.alt = materia.alt || materia.titulo;
      imgCapa.classList.add("imagem-capa-detalhe");
      containerCapa.appendChild(imgCapa);
    }
  }

  // Renderiza os parágrafos do corpo da notícia
  if (containerConteudo) {
    containerConteudo.innerHTML = "";
    materia.paragrafos.forEach((paragrafo) => {
      const p = document.createElement("p");
      p.classList.add("paragrafo-noticia");
      p.textContent = paragrafo;
      containerConteudo.appendChild(p);
    });
  }

  // Carrega as recomendações aleatórias excluindo a matéria atual
  carregarRecomendacoesAleatorias(materia.id);
}

// Função simples para embaralhar uma lista (Fisher-Yates)
function embaralharLista(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Função simples para carregar recomendações aleatórias
function carregarRecomendacoesAleatorias(idAtual) {
  const gradeRecomendacoes = document.querySelector("#grade-recomendacoes");
  if (!gradeRecomendacoes) return;

  gradeRecomendacoes.innerHTML = "";

  // Filtra para remover a matéria atual
  const outrasMaterias = listaMaterias.filter((item) => item.id !== idAtual);

  // Embaralha e pega 3 recomendações
  const recomendadas = embaralharLista(outrasMaterias).slice(0, 3);

  recomendadas.forEach((item) => {
    const cartao = document.createElement("article");
    cartao.classList.add("cartao-materia", "cartao-recomendado");

    // Adiciona imagem se existir
    if (item.imagem && item.imagem.trim() !== "") {
      const img = document.createElement("img");
      img.src = item.imagem;
      img.alt = item.alt || item.titulo;
      img.classList.add("imagem-materia");
      cartao.appendChild(img);
    }

    const tag = document.createElement("span");
    tag.classList.add("etiqueta-categoria");
    tag.textContent = item.categoria;
    cartao.appendChild(tag);

    const titulo = document.createElement("h3");
    titulo.classList.add("titulo-materia");
    titulo.textContent = item.titulo;
    cartao.appendChild(titulo);

    const resumo = document.createElement("p");
    resumo.classList.add("resumo-materia");
    resumo.textContent = item.resumo;
    cartao.appendChild(resumo);

    const link = document.createElement("a");
    link.href = `noticias_animes.html?id=${item.id}`;
    link.classList.add("botao-secundario", "botao-ler-mais");
    link.textContent = "Ler matéria completa";
    cartao.appendChild(link);

    gradeRecomendacoes.appendChild(cartao);
  });
}

// Executa o carregamento quando a página for aberta
if (document.querySelector(".secao-noticia-detalhe")) {
  carregarMateriaAtual();
}
