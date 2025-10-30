// Detecta automaticamente se o site está rodando dentro de uma subpasta (como no GitHub Pages)
const basePath = window.location.pathname.includes("E-COMMERCE-Afiliados") 
  ? "/E-COMMERCE-Afiliados" 
  : "";

// Lista de produtos
const produtos = [
  {
    nome: "Curso de Inglês Online",
    descricao: "Aprenda estratégias reais para aumentar suas vendas online.",
    imagem: `${basePath}/assets/img/ingles.png`,
    link: "https://go.hotmart.com/H102652282A",
    tipo: "digital"
  },
  {
    nome: "Samsung Galaxy A05s 128 GB ",
    descricao: "Dual SIM Tela Infinita de 6,7'' Cor Prata 6 GB RAMA05s 4G 128GB 6GB RAM Câmera Traseira Tripla 50MP + 2MP + 2MP + Selfie 13MP ",
    imagem: `${basePath}/assets/img/pratagalaxy.webp`,
    link: "https://mercadolivre.com/sec/18prU7b",
    tipo: "fisico"
  },
  {
    nome: "Smartphone Motorola Moto g05",
    descricao: "128GB 12GB (4GB RAM + 8GB Ram Boost) e Camera 50MP com AI Bateria de 5200 mAh Tela 6.7",
    imagem: `${basePath}/assets/img/celularmotorola.webp`,
    link: "https://mercadolivre.com/sec/2z65osc",
    tipo: "fisico"
  },
  {
    nome: "Apple iPhone 15 (128 GB)",
    descricao: "Memória RAM: 6 GB. A Dynamic Island mostra alertas e atividades ao vivo para você não perder nenhuma informação enquanto faz outras coisas.",
    imagem: `${basePath}/assets/img/iphone.webp`,
    link: "https://mercadolivre.com/sec/2m9ENot",
    tipo: "fisico"
  },
  {
    nome: "Smartphone Motorola Edge 50",
    descricao: "5G - 512GB 24GB (12GB RAM + 12GB RAM Boost) 50MP Sony Camera Moto AI Ultrarresistência Militar - Grey",
    imagem: `${basePath}/assets/img/motorola.webp`,
    link: "https://mercadolivre.com/sec/27vVPZZ",
    tipo: "fisico"
  },
  {
    nome: "Apple iPhone 16",
    descricao: "Memória RAM: 8 GB (128 GB), Maior duração da bateria.",
    imagem: `${basePath}/assets/img/iphone16.webp`,
    link: "https://mercadolivre.com/sec/2j7QTCN",
    tipo: "fisico"
  },
  {
    nome: "Trader Profissional",
    descricao: "Sua jornada para alcançar alta performance e consistência definitiva.",
    imagem: `${basePath}/assets/img/Logo_Hotmart.png`,
    link: "https://go.hotmart.com/H102653517R",
    tipo: "digital"
  },
  {
    nome: "Curso de crescimento pessoal e desenvolvimento cultural",
    descricao: "Vou te ensinar a ultrapassar as barreiras do teu conhecimento e alcançar a vida que tu sempre sonhou. ",
    imagem: `${basePath}/assets/img/Lançamentolivro.png`,
    link: "https://go.hotmart.com/Q102653973F",
    tipo: "digital"
  },
  {
    nome: "NATFLIX fitness",
    descricao: "A maior plataforma fitness do brasil, feita exclusivamente para mulheres.",
    imagem: `${basePath}/assets/img/fitness.png`,
    link: "https://go.hotmart.com/E102654132A",
    tipo: "digital"
  },
  {
    nome: "Tablet Samsung Galaxy Tab S10 FE", 
    descricao: "128GB, 8GB RAM, Tela Imersiva de 10.9\", Câmera Traseira Dupla de 8MP + 5MP, Selfie 5MP, Wi-Fi",
    imagem: `${basePath}/assets/img/tablet.webp`,
    link: "https://mercadolivre.com/sec/1criq6g",
    tipo: "fisico"
  },
  {
    nome: "Notebook Lenovo IdeaPad",
    descricao: "Intel Core i5-13420H 8GB 512GB SSD Windows 11 15.3",
    imagem: `${basePath}/assets/img/notebook.webp`,
    link: "https://mercadolivre.com/sec/1v7v2MQ",
    tipo: "fisico"
  },
  {
    nome: "iPhone 17 Pro Max 512GB",
    descricao:"Distribuidor Autorizado, escolha a sua cor",
    imagem:`${basePath}/assets/img/iphone17.webp`,
    link:"https://mercadolivre.com/sec/2wZhqe5",
    tipo:"fisico"
  },
  {
    nome: "iPhone 17 Pro Max 1TB",
    descricao:"Distribuidor Autorizado, escolha a sua cor",
    imagem:`${basePath}/assets/img/iphone17laranja.webp`,
    link:"https://mercadolivre.com/sec/2wZhqe5",
    tipo:"fisico"
  },
  {
    nome: "Smart Tv 60 Philco",
    descricao: "Aplicativos incorporados: Apple TV, Disney+, GloboPlay, Netflix, Prime Video, Spotify, YouTube, YouTube TV",
    imagem: `${basePath}/assets/img/tv.webp`,
    link: "https://mercadolivre.com/sec/1X1Mviz",
    tipo: "fisico" 
  },
  {
    nome: "Smart Tv LG 50 4k ",
    descricao: " Alexa Embutido, Conta com wi-fi e ponto de rede,Possui 3 portas HDMI, Equipado com conexão USB.Inclui controle remoto, Dimensões: 1.11m de largura, 78cm de altura e 15.2cm de profundidade, Com conectividade via Bluetooth.",
    imagem: `${basePath}/assets/img/tvsmart.webp`,
    link: "https://mercadolivre.com/sec/2TePfk2",
    tipo: "fisico" 
  },
  {
    nome: "Smart TV TCL 40 Polegadas Full HD ",
    descricao: "WiFi Bluetooth Google TV 2 HDMI HDR10 Dolby Audio 40S5K",
    imagem: `${basePath}/assets/img/tv40.webp`,
    link: "https://mercadolivre.com/sec/1bYbd2C",
    tipo: "fisico" 
  },
  {
    nome: "Smart Tv Philips 32 Hd",
    descricao: "Google Assistente Embutido, Inclui controle remoto, Sistema: Google TV, Com conexão Wi-Fi, Com conectividade via Bluetooth 5.0, Tamanho da memória (Flash)*: 8 GB",
    imagem: `${basePath}/assets/img/tv32.webp`,
    link: "https://mercadolivre.com/sec/2vd4uMp",
    tipo: "fisico" 
  },
  {
    nome: "Projetor Smart Portátil Full Hd 4k ",
    descricao: "Bluetooth Wifi Cor Branco Android 11.0 5g TV Cinema em Casa",
    imagem: `${basePath}/assets/img/projetorbranco.webp`,
    link: "https://mercadolivre.com/sec/1uRonfL",
    tipo: "fisico"
  },
  {
    nome: "Projetor Smart Portátil Hy 320 Full Hd 4k ",
    descricao: "Bluetooth Wifi Cor Branco Android 11.0 5g Tv Cinema Em Casa Several Importados",
    imagem: `${basePath}/assets/img/projetorpreto.webp`,
    link: "https://mercadolivre.com/sec/2JxYfr5",
    tipo: "fisico"
  },
  {
    nome: "Monitor Gamer LG UltraGear 24",
    descricao: " Full HD 180Hz, Tipo de painel IPS",
    imagem: `${basePath}/assets/img/monitor.webp`,
    link: "https://mercadolivre.com/sec/32Yy7WG",
    tipo: "fisico"
  },
  {
    nome: "Monitor Gamer 27 27g4/p 180hz tempo de resposta 0,5ms Ips Preto Aoc",
    descricao: " Este painel se destaca por suas cores mais precisas e melhores ângulos de visão graças à tecnologia IPS.",
    imagem: `${basePath}/assets/img/monitorgamer.webp`,
    link: "https://mercadolivre.com/sec/1icAxb9",
    tipo: "fisico"
  },
  {
    nome: "Monitor Led 19 '' Polegadas Hd Hdmi Vga 1440 X 900 Preto",  
    descricao: " Resolução HD+ 1440x900: imagem mais nítida e confortável aos olhos, Entradas HDMI e VGA: conecte notebook, PC, consoles e mais Tela de 19 polegadas: compacta, cabe em qualquer ambiente Frequência de 60Hz: ideal para navegação, trabalho e vídeos Design moderno e discreto: combina com qualquer setup",
    imagem: `${basePath}/assets/img/monitorbasico.webp`,
    link: "https://mercadolivre.com/sec/1MgRdNf",
    tipo: "fisico"
  },
  {
    nome: "Monitor Gamer Samsung 24 FHD,100 Hz, HDMI, VGA,Preto, S3",
    descricao: "Este painel se destaca por suas cores mais precisas e melhores ângulos de visão graças à tecnologia IPS.",
    imagem: `${basePath}/assets/img/monitoraoc.webp`,
    link: "https://mercadolivre.com/sec/33mRjJz",
    tipo: "fisico"
  },
  {
    nome: "Monitor Gamer Haiz 25'' Ips Fhd 144hz 0.5ms Hdmi Dp Vesa",
    descricao: "O monitor gamer HAIZ LM25-B211B foi projetado para quem exige máxima performance em jogos, fluidez em cenas rápidas e fidelidade de cores em qualquer ângulo. Com tela de 24.5” Full HD, taxa de atualização de 144Hz e painel IPS de alto desempenho, é a escolha ideal para elevar sua gameplay ou setup profissional ao próximo nível.",
    imagem: `${basePath}/assets/img/monitorvesa.webp`,
    link: "https://mercadolivre.com/sec/2CXf8QL",
    tipo: "fisico"
  }
];
