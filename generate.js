const fs = require('fs');
const path = require('path');

const games = [
  {
    name: "Dispatch",
    slug: "dispatch",
    score: 8.5,
    playtime: "7.9 hours",
    date: "Dec 30, 2025",
    genre: "Adventure / Choices",
    summary: `Great story with a captivating pace. The choices truly have a significant impact on the plot, and the minigames add a lot to the gameplay experience. It is definitely worth replaying to see the different endings.\n\nHowever, I still feel it could use more dialogue options; sometimes the choices aren't distinct enough, which can lead to an unintended selection.\n\nOverall, it's a solid game that is well worth the experience.`,
    resumo: `História boa e com ritmo cativante. As escolhas realmente têm um impacto significativo no decorrer da trama e os minigames adicionam bastante à gameplay. Vale muito a pena jogar e rejogar para ver os diferentes finais.\n\nPorém, ainda acho que poderia ter mais opções de diálogos; por vezes as opções não se diferenciam tanto, o que acaba levando a uma escolha indesejada.\n\nNo geral, é um jogo sólido que vale muito a experiência.`,
    tags: ["Dispatch", "Gaming", "BPDPlays", "Finished", "GameReview"]
  },
  {
    name: "Resident Evil: Revelations",
    slug: "resident-evil-revelations",
    score: 7.7,
    playtime: "8.2 hours",
    date: "Jan 01, 2026",
    genre: "Survival Horror",
    summary: `Honestly, I'm not a big Resident Evil fan, so I'll admit I got a bit lost in the story, but it's a fun game nonetheless. It has its limitations, which is understandable considering it was originally a 3DS exclusive — though the frequent loading screens and minor stuttering during area transitions are still a bit annoying.\n\nOverall, it's a decent and good-looking game with a great soundtrack, responsive controls, and a fair length.`,
    resumo: `Honestamente, não sou um grande fã de Resident Evil, então confesso que fiquei um pouco perdido na história, mas é um jogo divertido. Ele possui suas limitações, o que é justificável por ter sido originalmente um exclusivo de 3DS — embora o excesso de telas de carregamento e os pequenos stutterings durante a transição de cenários ainda incomodem um pouco.\n\nNo mais, é um jogo decente, bonito, com uma boa trilha sonora, comandos responsivos e uma duração justa.`,
    tags: ["ResidentEvil", "BPDPlays", "GameReview", "Gaming", "SurvivalHorror"]
  },
  {
    name: "Tomb Raider I Remastered",
    slug: "tomb-raider-i-remastered",
    score: 8.9,
    playtime: "15.5 hours",
    date: "Jan 04, 2026",
    genre: "Action-Adventure",
    summary: `An extremely faithful remaster that introduces modern controls—a great addition for newcomers, even if it feels a bit different for veterans. Although the level design is dated by today's standards, the exploration and challenges remain deeply satisfying. The game truly puts you in control; there is no hand-holding, it's just you against the environment!\n\nI noticed two odd artistic choices: the 30 FPS lock when using original graphics (a toggle would have been better) and the inconsistent visibility of collectible items. I found myself constantly switching between original and remastered modes to spot items, which also caused the framerate to jump between 120 and 30 FPS.\n\nDespite these subjective points, this is undoubtedly the definitive way to play the first Tomb Raider!`,
    resumo: `Um remaster extremamente fiel ao original que oferece a opção de controles modernos — um facilitador para novos jogadores, embora possa soar estranho para veteranos. Apesar do level design ser datado para os padrões atuais, a exploração e os desafios ainda são muito satisfatórios. Você realmente sente que está no controle, já que o jogo não te mostra o caminho; é você por conta própria!\n\nNotei apenas dois pontos estranhos na escolha artística: a trava de 30 FPS nos gráficos originais (uma opção nas configurações cairia bem) e o brilho dos itens coletáveis. Constantemente eu alternava entre o visual original e o remasterizado para enxergar melhor os itens, o que também alterava o framerate entre 120 e 30 FPS.\n\nPorém contudo todavia, desconsiderando esses pontos subjetivos, este remaster é a forma definitiva de jogar o primeiro Tomb Raider!`,
    tags: ["TombRaider", "LaraCroft", "BPDPlays", "GameReview", "Gaming"]
  },
  {
    name: "Tomb Raider: The Prophecy",
    slug: "tomb-raider-the-prophecy",
    score: 7.1,
    playtime: "4.7 hours",
    date: "Jan 10, 2026",
    genre: "Action-Adventure",
    summary: `Tomb Raider: The Prophecy is an honest attempt to condense the franchise's core formula into a handheld format. Given the GBA's hardware limitations, the title performs well, mainly thanks to the isometric perspective that competently simulates a 3D environment.\n\nHowever, the experience doesn't go much deeper than that. It is a solid pastime for a quick session, but ultimately not very memorable.`,
    resumo: `Tomb Raider: The Prophecy é uma tentativa honesta de condensar a fórmula da franquia em um portátil. Dadas as limitações de hardware do GBA, o título se sai bem, principalmente pela escolha da visão isométrica que simula um ambiente 3D de forma competente.\n\nNo entanto, o jogo não vai muito além disso. É um bom passatempo para uma experiência curta, mas acaba sendo pouco memorável no longo prazo.`,
    tags: ["TombRaider", "GBA", "LaraCroft", "BPDPlays", "RetroGaming"]
  },
  {
    name: "Tomb Raider: Anniversary",
    slug: "tomb-raider-anniversary",
    score: 7.9,
    playtime: "12 hours",
    date: "Jan 19, 2026",
    genre: "Action-Adventure",
    summary: `Tomb Raider: Anniversary is a worthy remake of the original classic, adding fresh areas, mechanics, and narrative layers to the franchise.\n\nHowever, it feels like there was some lost potential: certain iconic areas were removed, challenges were simplified, and combat was largely reduced to Quick Time Events (QTEs). I also encountered some performance stutters—only about 4 or 5 instances, but they were noticeable enough to mention.\n\nOverall, it's a solid reimagining, even if it sacrifices some of the original's complexity.`,
    resumo: `Tomb Raider: Anniversary é um remake digno do título original, trazendo novas áreas, mecânicas e camadas à franquia.\n\nPor outro lado, há um sentimento de potencial desperdiçado: algumas áreas foram removidas, desafios foram simplificados e as batalhas acabaram resumidas a Quick Time Events (QTEs). Notei também alguns engasgos de performance; foram poucos (uns 4 ou 5 trechos no máximo), mas pontuais o suficiente para serem citados.\n\nNo geral, é uma releitura sólida, apesar de sacrificar parte da complexidade do clássico.`,
    tags: ["TombRaider", "LaraCroft", "BPDPlays", "GameReview", "RetroGaming"]
  },
  {
    name: "ULTRAKILL",
    slug: "ultrakill",
    score: 8.6,
    playtime: "6.8 hours",
    date: "Jan 21, 2026",
    genre: "FPS / Boomer Shooter",
    summary: `ULTRAKILL is a masterclass in revitalizing the "boomer shooter" genre. The immersion begins right at the calibration screen and only grows with its stunning art direction, which is easily one of the best for this graphical style. The gameplay loop is extremely satisfying, keeping the adrenaline high at all times. Additionally, the level of polish in accessibility is impressive, featuring a HUD, controller vibration, and interface that are 100% customizable. Combined with a hard-hitting soundtrack, the game delivers a visceral and flawless experience.\n\nWhile the game is not yet finished — with Chapter 8 still in development — there is nothing to complain about regarding what has been delivered so far!`,
    resumo: `ULTRAKILL é uma aula de como revitalizar o gênero "boomer shooter". A imersão começa logo na tela de calibração e só aumenta com a direção de arte belíssima, que, para mim, é facilmente uma das melhores para esse estilo gráfico. O loop de gameplay é extremamente satisfatório, mantendo a adrenaline alta a todo momento. Além disso, o nível de polimento em acessibilidade é impressionante, com um HUD, vibração de controle e interface 100% customizáveis. Somado a uma trilha sonora "pauleira", o jogo entrega uma experiência visceral e impecável.\n\nO jogo ainda não foi finalizado, o capítulo 8 ainda está em desenvolvimento, mas não há o que reclamar sobre o que já foi entregue!`,
    tags: ["Ultrakill", "BPDPlays", "GameReview", "IndieGames", "FPS"]
  },
  {
    name: "Resident Evil: Revelations 2",
    slug: "resident-evil-revelations-2",
    score: 6.8,
    playtime: "10.6 hours",
    date: "Jan 27, 2026",
    genre: "Survival Horror",
    summary: `Resident Evil: Revelations 2 is a rollercoaster of highs and lows. While the story delivers great revelations and intense battles in its final act, the experience is marred by technical issues. Throughout the journey, I faced stutters, texture pop-ins, and even a near-crash in the last episode. The gameplay feels designed for co-op, making the solo experience frustrating at times due to poor ally AI and clunky character-switching mechanics. Barry and Natalia's segments were the highlight, offering a much better pace than Claire's chapters. It's a solid entry for fans, but one that requires patience with its lack of polish.`,
    resumo: `Resident Evil: Revelations 2 é uma montanha-russa de altos e baixos. Embora a história entregue ótimas revelações e batalhas intensas no ato final, a experiência é prejudicada por problemas técnicos. Durante a jornada, enfrentei travamentos, pop-ins de textura e até um quase crash no último episódio. O gameplay parece ter sido pensado para co-op, tornando a experiência solo frustrante em vários momentos devido à IA aliada ruim e à mecânica travada de troca de personagens. Os segmentos de Barry e Natalia foram o ponto alto, oferecendo um ritmo muito melhor que os capítulos da Claire. É um título sólido para fãs, mas que exige paciência com a falta de polimento.`,
    tags: ["ResidentEvil", "RER2", "BPDPlays", "GameReview", "SurvivalHorror"]
  },
  {
    name: "Halo: Combat Evolved Anniversary (MCC)",
    slug: "halo-combat-evolved-anniversary",
    score: 9.0,
    playtime: "6.8 hours",
    date: "Feb 04, 2026",
    genre: "FPS",
    summary: `Halo: Combat Evolved Anniversary (MCC) is a masterpiece of gameplay that shows why the franchise became a legend. If I were to judge based solely on the remastered visuals, the score would be lower, as the new art direction often ruins the original atmosphere — with the exception of the final mission, which looks great. However, because you can switch to the original graphics at any time and most bugs have been patched, this is the definitive way to play the game.\n\nDespite a few flaws, it has aged incredibly well and still delivers a top-tier experience!`,
    resumo: `Halo: Combat Evolved Anniversary (MCC) é uma obra-prima de gameplay que mostra por que a franquia se tornou uma lenda. Se eu fosse considerar apenas a versão remasterizada, a nota seria menor, pois o novo estilo arruína a direção de arte original na maior parte do tempo — com exceção da última fase, que faz bom proveito das melhorias. Contudo, como é possível alternar para os gráficos originais e a maioria dos bugs foi corrigida, esta acaba sendo a maneira definitiva de se jogar o primeiro título.\n\nMesmo não estando isento de erros, o jogo envelheceu muito bem e ainda entrega uma ótima experiência!`,
    tags: ["Halo", "MasterChief", "BPDPlays", "Xbox", "GameReview"]
  },
  {
    name: "Control: Ultimate Edition",
    slug: "control-ultimate-edition",
    score: 9.2,
    playtime: "24.4 hours",
    date: "Feb 15, 2026",
    genre: "Action / Adventure",
    summary: `I'm glad I gave Control a second chance. During my first attempt, I didn't finish the game because the Metroidvania mechanics felt a bit repetitive, but the experience was far more engaging this time. This shift might be due to a newfound appreciation for the genre, better combat combinations, or the deeper lore connection after playing Alan Wake 1 and 2.\n\nThe story is fascinating, the art direction is top-notch, and the music is excellent. Furthermore, the post-game content and DLCs add significant value; they feel like complete expansions with their own unique mechanics and enemies rather than just a set of generic missions.`,
    resumo: `Fico feliz de ter dado uma segunda chance ao Control. Na primeira vez que joguei, não cheguei a terminar por achar a mecânica de metroidvania um pouco repetitiva, mas a experiência foi bem mais envolvente agora. Talvez por eu ter me acostumado com o gênero, pelas combinações de elementos de combate, ou por ter jogado Alan Wake 1 e 2 nesse meio tempo, o que me fez mergulhar mais fundo na história.\n\nO enredo é muito interessante, a direção de arte é impecável e a trilha sonora é excelente. Além disso, o pós-game e as DLCs acrescentam muito ao jogo, sendo bastante completas e adicionando mecânicas e inimigos próprios em vez de serem apenas um conjunto de missões genéricas.`,
    tags: ["ControlGame", "RemedyEntertainment", "BPDPlays", "AlanWake", "Gaming"]
  },
  {
    name: "Resident Evil 2 (2019)",
    slug: "resident-evil-2-2019",
    score: 8.7,
    playtime: "14.6 hours",
    date: "Feb 19, 2026",
    genre: "Survival Horror",
    summary: `I'm glad I also gave this game a second chance! The gameplay is fluid, the graphics are top-tier, and the atmosphere is excellent, despite some odd sound mixing with low dialogue volume.\n\nHowever, the "2nd Run" is where the game falters. The stories don't sync well, and the repetition of paths and enemies breaks the immersion. Seeing environments that were destroyed in the first campaign reappear intact just to be destroyed again feels a bit lazy.\n\nIt's still an excellent game, but these inconsistencies prevent it from reaching true perfection. It leaves a "great taste", but falls just short of its full potential.`,
    resumo: `Fico feliz de também ter dado uma segunda chance a este jogo! A gameplay é fluida, os gráficos são de ponta e a atmosfera é excelente, apesar de uma mixagem de som estranha com diálogos baixos.\n\nContudo, na "2ª Jornada", o jogo se perde um pouco. As histórias não se conectam perfeitamente e a repetição de caminhos e inimigos quebra a imersão. Ver cenários que foram destruídos na primeira campanha reaparecerem intactos para serem destruídos novamente soa como uma escolha preguiçosa.\n\nAinda é um excelente jogo, mas esses problemas de consistência impedem que ele atinja a perfeição absoluta. O jogo entrega um "sabor excelente", mas não chega a ser perfeito de fato.`,
    tags: ["ResidentEvil2", "RE2Remake", "BPDPlays", "SurvivalHorror", "Gaming"]
  },
  {
    name: "God of War III",
    slug: "god-of-war-iii",
    score: 9.1,
    playtime: "13.8 hours",
    date: "Mar 05, 2026",
    genre: "Action / Hack and Slash",
    summary: `God of War III concludes the original trilogy with a flourish, delivering a solid and well-crafted experience that showcases the franchise at its best. While the story might not be the most developed, it works effectively and provides several memorable dialogues.\n\nDespite some nerfs to iconic weapons like the Blade of Olympus, the gameplay remains absolutely satisfying. The true highlights are the graphics and the soundtrack. The music perfectly captures the essence of Kratos and the intensity of the battles.\n\nVisually, it's impressive how beautiful and optimized this game is. Running on the PS3, it delivers lighting and reflection effects that surpass many modern titles. It proves that strong art direction and optimization work better than simply enabling Ray Tracing without a cohesive environmental design. For those who followed Kratos' journey from the start, this is an excellent conclusion.`,
    resumo: `God of War III fecha a trilogia original com chave de ouro, trazendo o que a franquia tem de melhor em um jogo sólido e bem trabalhado. Embora a história não seja a mais bem desenvolvida, ela funciona e traz diversos diálogos marcantes.\n\nApesar de alguns nerfs em armas icônicas, como a Blade of Olympus, a gameplay é absolutamente satisfatória. O ponto alto fica por conta dos gráficos e da trilha sonora. As músicas capturam perfeitamente a essência de God of War e o clima das batalhas.\n\nVisualmente, é impressionante o quão lindo e otimizado este jogo consegue ser. Rodando no PS3, ele apresenta efeitos de luz e reflexos que superam muitos títulos atuais. É um jogo que prova que otimização e direção de arte funcionam melhor do que apenas habilitar o Ray Tracing sem trabalhar o cenário como um todo. No fim, a experiência é excelente, especialmente para quem acompanhou toda a cronologia de Kratos.`,
    tags: ["GodOfWar", "Kratos", "BPDPlays", "PlayStation", "RetroGaming"]
  },
  {
    name: "Viewfinder",
    slug: "viewfinder",
    score: 9.3,
    playtime: "3.7 hours",
    date: "Mar 06, 2026",
    genre: "Puzzle",
    summary: `Viewfinder is a brilliant, short, and highly creative puzzle game!\n\nIts innovative use of perspective and environment manipulation creates a truly unique gameplay experience. Combined with beautiful art direction and a relaxing soundtrack, it's the perfect way to unwind. While the story isn't overly complex, it provides enough context to keep you engaged.\n\nI highly recommend it—it's a game that everyone should at least try!`,
    resumo: `Viewfinder é um excelente jogo de puzzle, curto e criativo!\n\nO uso de perspectiva e a manipulação do cenário conferem ao jogo um estilo único. Somado à bela direção de arte e à trilha sonora relaxante, ele também se torna uma ótima forma de passar o tempo. A história não é complexa ou supertrabalhada, mas está lá.\n\nFica a recomendação: é um jogo que vale, no mínimo, ser testado!`,
    tags: ["Viewfinder", "PuzzleGames", "IndieGames", "BPDPlays", "GamingReview"]
  },
  {
    name: "Mafia: The Old Country",
    slug: "mafia-the-old-country",
    score: 7.3,
    playtime: "10.8 hours",
    date: "Mar 09, 2026",
    genre: "Action / Adventure",
    summary: `Mafia: The Old Country is a "good-average" title. While the game boasts high points like excellent voice acting, graphics, and a decent soundtrack, it also falls short in significant ways...\n\nHangar 13 made the right call by avoiding the open-world pitfalls of Mafia III and following the mold of Mafia: Definitive Edition, but they followed it a bit too strictly. In many sections, the game lacks gameplay depth and is plagued by frequent loading screens and Unreal Engine 5 stutters, making FPS limiting and frame generation almost mandatory (despite the resulting visual artifacts).\n\nThe story is good, though predictable; the gameplay is simple yet decent, and its short length keeps it from becoming tedious. However, abandoning the Fusion Engine remains a questionable choice.\n\nUltimately, the score could be higher if it were better optimized and priced, but I'd still recommend Mafia: Definitive Edition as a superior entry point for the franchise.`,
    resumo: `Mafia: The Old Country é um "bom-mediano". Apesar do jogo ter pontos altíssimos, como a dublagem, gráficos e uma trilha sonora decente, ele tem pontos que deixam a desejar, e muito...\n\nA Hangar 13 acertou em não tornar um jogo de mundo aberto, como o Mafia III, e seguir o mesmo molde do Mafia I Remake, porém seguiram a risca até demais. Em muitas partes o jogo carece de gameplay e é seguido por muitas telas de loading, além dos stutters da Unreal Engine 5, tornando quase obrigatório limitar o FPS e habilitar o gerador de quadros (apesar de resultar em artefatos).\n\nA história é boa, embora previsível; a jogabilidade é simples, mas decente, e sua curta duração impede que se torne tediosa. No entanto, abandonar a Fusion Engine continua sendo uma escolha questionável.\n\nA nota seria maior se fosse mais barato e otimizado, mas eu ainda recomendaria o Mafia: Definitive Edition como sendo uma porta de entrada melhor para a franquia.`,
    tags: ["MafiaTheOldCountry", "BPDPlays", "MafiaGame", "PCGaming", "Review"]
  },
  {
    name: "Tomb Raider (2013)",
    slug: "tomb-raider-2013",
    score: 8.6,
    playtime: "10.9 hours",
    date: "Mar 14, 2026",
    genre: "Action-Adventure",
    summary: `Tomb Raider is another 7th-generation title that, despite being simple by today's standards, remains graphically impressive. The reboot took a more cinematic approach—which caused controversy among fans—but successfully revitalized the franchise.\n\nIt has its downsides, such as the excessive "shaky cam" for cinematic effect and a ludonarrative dissonance that, while not a dealbreaker, is quite funny.\n\nOverall, the experience is very positive: a great soundtrack, decent story, excellent pacing, and a highly satisfying 100% completion (even if the tombs are a bit too simple). It remains a great starting point for new players!\n\nTechnical Note: I strongly recommend using the "Disable Camera Wobble" mod and downgrading to version 743.0. The mod reduces the shake enough to prevent headaches (though it persists in cutscenes), and the older build is necessary because the latest update bugged the HUD, making UI elements unreadable.`,
    resumo: `Tomb Raider é mais um título da 7ª geração que, apesar de ser simples para os padrões atuais, continua impressionante graficamente. Este reboot seguiu por um caminho mais cinematográfico, o que gerou controvérsias entre os fãs, mas também revitalizou a franquia.\n\nTem seus lados negativos, como o tremor excessivo da câmera para criar um "efeito cinematográfico" e uma dissonância ludonarrativa que, embora não atrapalhe, chega a ser engraçada.\n\nNo geral, a experiência é muito positiva: ótima trilha sonora, história decente, excelente ritmo de jogo e uma conclusão de 100% extremamente satisfatória (mesmo que as tumbas sejam um pouco fáceis demais). Continua sendo um ótimo ponto de partida para novos jogadores!\n\nNota técnica: Recomendo fortemente o uso do mod "Disable Camera Wobble" e o downgrade para a versão 743.0. O mod reduz o tremor o suficiente para evitar dores de cabeça (infelizmente nas cutscenes a trepidação continua), e a versão antiga é necessária porque a última atualização causou um bug no HUD, tornando impossível ler alguns elementos da interface.`,
    tags: ["TombRaider", "BPDPlays", "LaraCroft", "Yamatai"]
  },
  {
    name: "Titanfall 2",
    slug: "titanfall-2",
    score: 8.0,
    playtime: "4.6 hours",
    date: "Mar 15, 2026",
    genre: "FPS",
    summary: `Titanfall 2 is a masterclass in FPS pacing and level design. Although short, the campaign is incredibly dense and creative, introducing brilliant mechanics that keep the gameplay fresh. A standout is the time-shifting segment, which is so well-executed it leaves you wishing it were utilized more throughout the game. Technically, it remains impressive; the Source Engine is exceptionally well-optimized, delivering a fluid experience on modern hardware. For its current price, the single-player journey alone is worthwhile and offers decent replayability.`,
    resumo: `Titanfall 2 é uma aula de ritmo e design de níveis para o gênero FPS. Embora a campanha seja curta, ela é extremamente densa e criativa, introduzindo mecânicas que renovam o interesse a cada capítulo. O destaque vai para o trecho de manipulação temporal, que é tão bem executado que deixa um "gosto de quero mais" por não ser explorado em outros momentos. Tecnicamente, o jogo continua impecável; a Source Engine é muito bem otimizada, entregando uma fluidez admirável em hardware atual. Pelo preço de uma coxinha, a jornada single-player é compensatória e oferece um fator replay decente.`,
    tags: ["Titanfall2", "BT7274", "BPDPlays", "PCGaming", "GamingReview"]
  },
  {
    name: "Resident Evil 3 (2020)",
    slug: "resident-evil-3-2020",
    score: 7.5,
    playtime: "5.8 hours",
    date: "Mar 20, 2026",
    genre: "Survival Horror",
    summary: `Resident Evil 3 Remake is often unfairly judged. As a standalone action-horror experience, it is solid and highly entertaining, but as a remake, its shortcomings are clear. The removal and simplification of iconic locations from the original made the journey feel too short, leaving fans wanting more. Nevertheless, newcomers to the franchise won't feel the weight of the missing content as much.\n\nIt might have fallen below the high expectations set by its predecessor, but it is far from a despicable game.`,
    resumo: `Como jogo, o Resident Evil 3 Remake é bastante injustiçado. Ele oferece uma experiência sólida e divertida, mas, como remake, as falhas são evidentes. O corte e a simplificação de diversos cenários icônicos do original tornaram a jornada consideravelmente curta, deixando um gosto de "quero mais". Ainda assim, para quem não jogou o título clássico, o impacto das ausências é menor e a diversão é garantida.\n\nPode ter ficado aquém das altas expectativas criadas por seu antecessor, mas está longe de ser um jogo desprezível.`,
    tags: ["ResidentEvil3", "RE3Remake", "BPDPlays", "JillValentine", "GamingReview"]
  },
  {
    name: "Grand Theft Auto: Chinatown Wars",
    slug: "gta-chinatown-wars",
    score: 9.0,
    playtime: "11.9 hours",
    date: "Mar 23, 2026",
    genre: "Action / Open World",
    summary: `GTA: Chinatown Wars is by far the most underrated entry in the franchise. Despite being a highly polished product for its scope, it often goes unnoticed. In a general gaming context, it might be a 6 or 7, but considering it was built for the Nintendo DS and masterfully adapted the series' mechanics for a handheld, the result is impressive. The way the game fits both the franchise's identity and the portable format is nothing short of a masterclass in design. While it might not be the best entry point for newcomers, it's a title that definitely deserves a chance, especially on mobile!`,
    resumo: `GTA: Chinatown Wars é, de longe, o título mais subestimado da franquia. Mesmo sendo um produto extremamente polido para sua proposta, ele é frequentemente esquecido. Em um contexto geral, seria uma nota 6 ou 7, mas considerando que foi moldado para o Nintendo DS e adaptou magistralmente as mecânicas da série para um portátil, o resultado é impressionante. A forma como o jogo se encaixa na identidade da franquia e nas limitações do hardware é uma aula de design. Talvez não seja a melhor porta de entrada para novos fãs, mas é um título que merece ser jogado, especialmente em sua versão mobile!`,
    tags: ["GTA", "ChinatownWars", "BPDPlays", "RockstarGames", "PortableGaming"]
  },
  {
    name: "Sleeping Dogs: Definitive Edition",
    slug: "sleeping-dogs-definitive-edition",
    score: 8.0,
    playtime: "15.3 hours",
    date: "Mar 29, 2026",
    genre: "Action / Open World",
    summary: `I admit I was biased against this game, expecting just another generic open-world "Ubi-like," but it pleasantly surprised me. While cutscenes outside main missions are simple, the game offers a great variety of activities that fill the small but dense map without feeling repetitive.\n\nIf I had to complain about something, it would be the vehicle physics and camera — especially for bikes, boats, and reversing. It feels like the game was designed strictly for controllers and didn't transition well to mouse and keyboard.\n\nAside from that, it's a compelling experience for fans of the genre and the Hong Kong triad theme.`,
    resumo: `Admito que eu tinha um certo preconceito com o jogo por parecer apenas mais um "Ubi-like" tentando surfar na onda do mundo aberto, mas ele me surpreendeu positivamente. Apesar das cutscenes fora das missões principais serem simples, o jogo oferece uma variedade considerável de atividades que preenchem o mapa (que é pequeno, mas denso) sem parecer repetitivo.\n\nSe fosse para reclamar de algo, seria apenas da física e da câmera dos veículos — especialmente motos, barcos e a ré. Parece que o jogo foi pensado puramente para controles e não foi bem adaptado para mouse e teclado.\n\nFora isso, é uma experiência muito interessante para quem curte o gênero e a temática de tríades.`,
    tags: ["SleepingDogs", "WeiShen", "BPDPlays", "PCGaming", "GamingReview"]
  },
  {
    name: "Simple 2000 Series Vol.105: The Maid-Fuku to Kikanjuu",
    slug: "simple-2000-vol105",
    score: 6.0,
    playtime: "2.5 hours",
    date: "Apr 02, 2026",
    genre: "Action / Shooter",
    summary: `The game kicks off with an interesting premise, offering decent gameplay variety for its short length, backed by great voice acting and charismatic characters. However, the difficulty balancing is a mess—the entire experience is incredibly easy until a final boss fight that takes longer than the rest of the game combined. Along with repetitive enemy encounters, it leaves a lingering taste of wasted potential.\n\nIt's a unique curiosity for those looking to kill time or test niche "hidden gems," but it's far from essential.`,
    resumo: `O jogo começa de forma interessante, com uma variedade de gameplay honesta para sua curta duração, além de uma ótima dublagem e personagens carismáticos. No entanto, o balanceamento da dificuldade é um desastre: a experiência inteira é extremamente fácil até chegar a uma batalha final que consome mais tempo que todo o resto do jogo. Somado à repetição de inimigos, fica aquele gosto de potencial desperdiçado.\n\nÉ uma curiosidade válida para quem quer apenas passar o tempo ou testar "pérolas perdidas", mas passa longe de ser indispensável.`,
    tags: ["Simple2000", "PS2Gaming", "BPDPlays", "HiddenGems", "RetroGaming"]
  },
  {
    name: "NieR Replicant ver.1.22474487139...",
    slug: "nier-replicant",
    score: 9.0,
    playtime: "20.4 hours",
    date: "Apr 25, 2026",
    genre: "Action / RPG",
    summary: `NieR Replicant wasn't exactly what I expected, but it was just as good. The writing for both the main and side quests is excellent, perfectly complemented by a soundtrack that fits the narrative flawlessly. The only downside is the repetitive task design — constantly backtracking between cities feels slow and tedious, especially with the frequent loading screens, stretching the game longer than necessary.\n\nAside from that, the experience is stellar: the combat is solid, and there's a good variety of enemies and environments. But the absolute highlight is the soundtrack — completely immersive!`,
    resumo: `NieR Replicant não foi exatamente o que eu esperava, mas foi tão bom quanto. A escrita, tanto da história principal quanto das secundárias, é excelente e a trilha sonora se encaixa perfeitamente ao enredo. O único ponto negativo foi a repetição das tarefas, ficar indo e voltando entre as cidades é lento e maçante, especialmente com as várias telas de loading, o que estende o jogo além do necessário.\n\nFora isso, não há do que reclamar: o combate é bom e existe uma variedade decente de inimigos e cenários. Mas o que mais se destaca, com certeza, é a trilha sonora — totalmente imersiva!`,
    tags: ["NieRReplicant", "YokoTaro", "BPDPlays", "OST", "GamingReview"]
  },
  {
    name: "Super Mario World",
    slug: "super-mario-world",
    score: 9.9,
    playtime: "0.4 hours",
    date: "May 2, 2026",
    genre: "Platformer",
    summary: `There's not much to say about Super Mario World other than it remains the gold standard for platformers. I replayed it for the thousandth time while testing the "SUPERZSNES" emulator and ended up finishing it along the way. The level design, music, and gameplay flow are still flawless — a timeless masterpiece.`,
    resumo: `Não há muito o que comentar sobre Super Mario World: ele continua sendo o padrão ouro dos jogos de plataforma. Rejoguei pela milésima vez enquanto testava o emulador "SUPERZSNES" e acabei zerando no caminho. O design de níveis, a trilha sonora e o fluxo do gameplay continuam impecáveis — uma obra-prima atemporal.`,
    tags: ["SuperMarioWorld", "Nintendo", "Snes", "RetroGaming", "BPDPlays"]
  },
  {
    name: "Dumb Ways to Draw",
    slug: "dumb-ways-to-draw",
    score: 6.5,
    playtime: "4.2 hours",
    date: "May 7, 2026",
    genre: "Casual / Mobile",
    summary: `It is a simple mobile game, perhaps even too simple at certain points. While it's a decent way to pass the time, this spin-off falls short compared to the main Dumb Ways to Die titles. The core charm is there, but the gameplay loop doesn't hit the same highs as its predecessors.`,
    resumo: `É um jogo mobile simples, em certos pontos até demais. Legalzinho para passar o tempo, mas este spin-off está abaixo dos jogos principais de Dumb Ways to Die. O charme da série ainda está presente, mas o loop de gameplay não alcança o mesmo nível de entretenimento dos títulos antecessores.`,
    tags: ["DumbWaysToDraw", "MobileGaming", "BPDPlays", "SpinOff", "GamingReview"]
  },
  {
    name: "Resident Evil Requiem",
    slug: "resident-evil-requiem",
    score: 9.0,
    playtime: "13.9 hours",
    date: "May 8, 2026",
    genre: "Survival Horror",
    summary: `Simply wonderful! The game delivers exactly what it promises: plenty of fan service, fluid gameplay, and stunning graphics. The character balance was a highlight — Grace's segments offer a great mix of RE2 and RE7, while Leon's parts feel like a blend of RE4 and The Evil Within.\n\nHowever, the semi-open Raccoon City map felt a bit forced, and Leon's constant jokes every five minutes were slightly over the top. Technically, the RE Engine still struggles with open areas, resulting in minor stutters.\n\nMy biggest gripe is the lack of a New Game+ or a way to start a fresh save from scratch, which hurts the franchise's signature replay value. Still, it's easily one of the best in the series.`,
    resumo: `Simplesmente maravilhoso! O jogo entrega o que promete: muito fan-service, gameplay fluida e gráficos estonteantes. O equilíbrio entre os personagens foi o ponto alto — as partes da Grace misturam o melhor de RE2 e RE7, enquanto o Leon traz uma vibe de RE4 com The Evil Within.\n\nPor outro lado, achei o mapa semi-aberto de Raccoon City meio exagerado e as piadas constantes do Leon um pouco cansativas. Tecnicamente, a RE Engine ainda sofre em áreas abertas, causando leves travamentos.\n\nO maior ponto negativo é a ausência de um New Game+ ou de uma opção para resetar o progresso, o que prejudica o fator replay clássico da franquia. Mesmo assim, é um dos melhores títulos da série.`,
    tags: ["ResidentEvilRequiem", "LeonKennedy", "BPDPlays", "SurvivalHorror", "GamingReview"]
  },
  {
    name: "A Little To The Left: Cupboards & Drawers",
    slug: "a-little-to-the-left-cupboards-drawers",
    score: 8.0,
    playtime: "2.5 hours",
    date: "May 9, 2026",
    genre: "Puzzle / Organization",
    summary: `A very pleasant game to pass the time or play during idle moments. It is especially rewarding for those who enjoy organization or have that "OCD" urge to put everything in its perfect place. The DLC expands on the core mechanics with clever puzzles focused on hidden spaces and drawers, providing a relaxing and satisfying experience.`,
    resumo: `Joguinho legal para passar o tempo ou jogar naquele momento que está ocioso. É especialmente recompensador para quem gosta de organização ou para aqueles que têm aquela "necessidade" de deixar tudo no seu devido lugar. A DLC expande bem as mecânicas com puzzles criativos focados em armários e gavetas, entregando uma experiência relaxante e satisfatória.`,
    tags: ["ALittleToTheLeft", "IndieGames", "BPDPlays", "PuzzleGame", "RelaxingGames"]
  },
  {
    name: "The Unfinished Swan",
    slug: "the-unfinished-swan",
    score: 8.5,
    playtime: "1.8 hours",
    date: "May 10, 2026",
    genre: "Exploration / Artistic",
    summary: `The Unfinished Swan is a deceptively simple yet profound exploration game where you chase an unfinished swan into the unknown. Despite its short length, the art direction is exceptional, and the soundtrack provides a deeply relaxing atmosphere.\n\nIt's another title I highly recommend for anyone seeking a unique and "differentiated" gaming experience that plays with perception and curiosity.`,
    resumo: `The Unfinished Swan é um jogo de exploração enganosamente simples, porém profundo, onde você percorre o desconhecido atrás de um ganso inacabado. Apesar de sua curta duração, a direção de arte é primorosa e a trilha sonora é extremamente relaxante.\n\nÉ outro título que recomendo fortemente para quem busca uma experiência artística de jogo diferenciada que brinca com a percepção e a curiosidade.`,
    tags: ["TheUnfinishedSwan", "IndieGames", "BPDPlays", "ArtisticGaming", "TheWhiteKingdom"]
  },
  {
    name: "Resident Evil 7: Biohazard",
    slug: "resident-evil-7-biohazard",
    score: 9.1,
    playtime: "12.8 hours",
    date: "May 12, 2026",
    genre: "Survival Horror",
    summary: `Resident Evil 7 wasn't a new game to me, as I already knew its story and everything it had to offer. However, it was my first time actually playing it through, and it is an exceptional title!\n\nIt's not perfect, but it is deeply satisfying in everything it delivers: atmosphere, gameplay, narrative, and combat.\n\nPlus, the DLCs are also of high quality, making the final experience even more complete!`,
    resumo: `Resident Evil 7 não foi um jogo novo para mim, já que conhecia sua história e tudo o que ele oferecia. Porém, foi minha primeira vez de fato jogando-o do início ao fim, e é um título excepcional!\n\nNão é perfeito, contudo é satisfatório em tudo que entrega: atmosfera, gameplay, narrativa e combate.\n\nAlém disso, as DLCs também são de boa qualidade, deixando a experiência ainda mais completa!`,
    tags: ["ResidentEvil7", "RE7", "Biohazard", "SurvivalHorror", "Capcom"]
  },
  {
    name: "MOUSE: P.I. For Hire",
    slug: "mouse-pi-for-hire",
    score: 8.5,
    playtime: "12.6 hours",
    date: "May 22, 2026",
    genre: "FPS / Boomer Shooter",
    summary: `MOUSE: P.I. For Hire is a fundamentally brieliant game. The gameplay is as smooth as Gouda, the soundtrack is as sharp and memorable as Roquefort, and while the references aren't quite as mature as fine Cheddar, they beautifully buttery up the game's universe.\n\nPerhaps the only weak link is the story, which feels a bit too simple — tasting like cheese without salt at times. However, this title is a pure homage to the Boomer Shooter genre. As John Carmack, the creator of Doom, once famously said: "Story in a game is like a story in a porn movie. It's expected to be there, but it's not that important."\n\nOverall, it's an incredible title that brilliantly explores a style rarely touched by other games.`,
    resumo: `MOUSE: P.I. For Hire é um jogo brielante. A gameplay é suave como Gouda, a trilha sonora é marcante como Roquefort, e embora as referências não sejam tão maturadas quanto Cheddar, elas amanteigam o universo do jogo.\n\nTalvez o único ponto fraco seja a história, que é bem simples e por vezes parece um queijo sem sal. Entretanto, o título é uma clara homenagem aos Boomer Shooters e, tal como John Carmack (criador de Doom) uma vez disse: "História em um jogo é como história em um filme pornô. É esperado que esteja lá, mas não é tão importante."\n\nNo mais, é um jogo muito interessante e que explora um estilo visual pouco abordado por outros títulos.`,
    tags: ["MousePIForHire", "BoomerShooter", "IndieGames", "BPDPlays", "GamingReview"]
  },
  {
    name: "Pragmata",
    slug: "pragmata",
    score: 8.3,
    playtime: "14.9 hours",
    date: "May 29, 2026",
    genre: "Action / Adventure",
    summary: `Pragmata delivers a highly compelling experience, blending a solid narrative with engaging, inventive gameplay loops.\n\nVisually, the title is stunning, leveraging top-tier art direction to craft its eerie, futuristic atmosphere. While it isn't flawless — suffering from the occasional invisible wall and slightly repetitive dialogue sequences — these minor structural flaws never truly derail the core experience.\n\nUltimately, it stands out as a beautiful game with a uniquely distinct identity that makes it well worth the journey.`,
    resumo: `Pragmata entrega uma experiência altamente envolvente, combinando uma narrativa sólida com loops de gameplay criativos e inventivos.\n\nVisualmente, o título é deslumbrante, utilizando uma direção de arte de ponta para construir sua atmosfera futurista e misteriosa. Embora não seja perfeito, sofrendo com eventuais paredes invisíveis e diálogos um pouco repetitivos, esses pequenos problemas estruturais nunca chegam a comprometer a experiência principal.\n\nNo geral, destaca-se como um jogo lindo, dono de uma identidade única que faz a jornada valer muito a pena.`,
    tags: ["Pragmata", "Capcom", "SciFiGaming", "BPDPlays", "GamingReview"]
  },
  {
    name: "Resident Evil Code: Veronica X",
    slug: "resident-evil-code-veronica-x",
    score: 7.6,
    playtime: "15.3 hours",
    date: "June 20, 2026",
    genre: "Survival Horror",
    summary: `I can clearly see all the positive aspects that made this game so beloved by fans, and it definitely gets me excited for what the upcoming remake will do.\n\nHowever, it is a highly punishing title for first-time players, especially those not accustomed to older gaming design. The story is excellent, carrying a more serious tone despite the occasional cheesy dialogue. The soundtrack and sound effects are also great, heavily contributing to the overall atmosphere. But the gameplay... it is what it is, a relic of a bygone era.\n\nOverall, it's a good game that is well worth it, but I wouldn't recommend it as someone's first entry into the franchise. Let's see how the remake fares.`,
    resumo: `Consigo enxergar todos os pontos positivos que fizeram este jogo ser tão amado pelos fãs, além de me empolgar pelo que o futuro remake irá fazer.\n\nPorém, é um título altamente punitivo para quem está jogando pela primeira vez, principalmente para quem não está acostumado com o design de jogos mais antigos. A história é muito boa, carregando um tom mais sério apesar dos eventuais diálogos pastelões. A trilha e os efeitos sonoros também são ótimos, colaborando muito com a ambientação. Mas a gameplay... é o que tem, são resquícios de outra época.\n\nNo geral, é um jogo bom e que vale muito a pena, mas não recomendaria como o primeiro título da franquia. Veremos como o remake irá se classificar.`,
    tags: ["ResidentEvilCodeVeronicaX", "CodeVeronica", "SurvivalHorror", "Capcom", "BPDPlays"]
  },
  {
    name: "Gears of War: Reloaded",
    slug: "gears-of-war-reloaded",
    score: 6.6,
    playtime: "5.4 hours",
    date: "June 21, 2026",
    genre: "Third-Person Shooter",
    summary: `This is definitively the best version of the game, bringing clear improvements over the original while keeping an art direction that isn't as jarring as the first remaster.\n\nHowever, since it's just a remaster, it fails to fix dated level design and persistent legacy bugs. This is the third release of the game, yet long-standing issues remain: ambient occlusion that doesn't affect dynamic objects, shadows popping in and out near light sources, culling issues when moving the camera, clipping into geometry, glitched execution animations, and so on... These small details should have been ironed out for a two-decade-old title.\n\nThat said, it's still worth playing, offering the best graphics and gameplay available — provided you disable the screen shake, which somehow managed to get worse here.`,
    resumo: `Definitivamente a melhor versão do jogo, trazendo melhorias em relação à versão original e uma direção de arte que não é tão destoante quanto a do primeiro remaster.\n\nPorém, por ser um remaster, ele não corrige o level design que ficou datado, além de arrastar problemas de versões anteriores. Esta já é a terceira versão do jogo e os erros continuam lá: oclusão de ambiente que não afeta objetos dinâmicos, sombras que somem e aparecem ao se aproximar de fontes de luz, objetos que desaparecem ao mexer a câmera, personagem preso na geometria, animações de finalização bugadas, etc., etc.... São pequenos detalhes que já deveriam ter sido corrigidos em um terceiro lançamento de um jogo de duas décadas atrás.\n\nFora isso, vale a pena ser jogado e oferece os melhores gráficos e jogabilidade — desde que você desative o tremor de câmera, que conseguiram piorar (felizmente, basta desligar).`,
    tags: ["GearsOfWar", "ThirdPersonShooter", "Xbox", "BPDPlays", "GamingReview"]
  }
];

const BASE = 'C:\\Users\\blend\\OneDrive\\Área de Trabalho\\BPD - Plays';
const JOGOS = 'C:\\Users\\blend\\OneDrive\\Área de Trabalho\\BPD - Plays\\jogos';

function getScreenshotsFromJogos(slug) {
  const ssDir = path.join(JOGOS, slug, 'Screenshots');
  const files = [];
  try {
    const entries = fs.readdirSync(ssDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && /\.(png|jpg|jpeg|mp4|webm)$/i.test(entry.name)) {
        files.push(entry.name);
      }
    }
  } catch (e) { return files; }
  return files.sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)/)?.[1] || 0);
    const numB = parseInt(b.match(/(\d+)/)?.[1] || 0);
    if (numA !== numB) return numA - numB;
    return a.localeCompare(b);
  });
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function scoreColor(score) {
  if (score >= 9.0) return '#4caf50';
  if (score >= 8.0) return '#8bc34a';
  if (score >= 7.0) return '#ff9800';
  if (score >= 6.0) return '#f44336';
  return '#9e9e9e';
}

function scoreEmoji(score) {
  if (score >= 9.0) return ' Outstanding';
  if (score >= 8.0) return ' Great';
  if (score >= 7.0) return ' Good';
  if (score >= 6.0) return ' Okay';
  return ' Meh';
}

// ---------- SCREENSHOT DATA ----------
console.log('Scanning jogos folder...');
const slugToScreenshots = {};
for (const g of games) {
  const files = getScreenshotsFromJogos(g.slug);
  if (files.length > 0) {
    slugToScreenshots[g.slug] = files;
  }
}
console.log(`Found ${Object.keys(slugToScreenshots).length} games with screenshots`);

// ---------- CSS ----------
const css = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: #0f0f1a url('../images/background.jpg') center/cover fixed no-repeat;
  color: #e0e0e0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(15, 15, 26, 0.85);
  border-radius: 12px;
}

.header {
  text-align: center;
  padding: 40px 0;
  border-bottom: 2px solid #2a2a3e;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header p {
  color: #888;
  margin-top: 8px;
  font-size: 1.1rem;
}

.site-logo {
  cursor: pointer;
  animation: spin-horizontal 2.4s linear infinite;
}

@keyframes spin-horizontal {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

/* Filters */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background: #1a1a2e;
  border-radius: 12px;
  margin-bottom: 30px;
  align-items: center;
}

.filters label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.85rem;
  color: #aaa;
}

.filters input, .filters select {
  background: #2a2a3e;
  border: 1px solid #3a3a5e;
  color: #e0e0e0;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  min-width: 150px;
}

.filters input:focus, .filters select:focus {
  outline: none;
  border-color: #667eea;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  justify-content: center;
  max-width: 100%;
}

.filter-btn {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid #3a3a5e;
  background: transparent;
  color: #aaa;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;
}

.filter-btn:hover, .filter-btn.active {
  background: #667eea;
  color: #fff;
  border-color: #667eea;
}

.filter-toggle,
.filter-close,
.filter-backdrop {
  display: none;
}

/* Game Grid */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.game-card {
  background: #1a1a2e;
  border-radius: 12px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
  border: 1px solid #2a2a3e;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.game-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.15);
}

.game-card .score-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
}

.game-card h2 {
  font-size: 1.1rem;
  margin: 8px 0 12px;
  padding-right: 56px;
  line-height: 1.3;
}

.game-card .genre-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  background: #2a2a3e;
  color: #aaa;
  font-size: 0.75rem;
  margin-bottom: 10px;
}

.game-card .meta {
  display: flex;
  gap: 16px;
  font-size: 0.8rem;
  color: #888;
  margin-top: auto;
}

.game-card .meta span {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Game Detail Page */
.game-detail {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #888;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: #667eea;
}

.detail-header {
  text-align: center;
  margin-bottom: 30px;
}

.detail-header h1 {
  font-size: 2rem;
  margin-bottom: 16px;
}

.detail-stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.detail-stat {
  text-align: center;
}

.detail-stat .value {
  font-size: 1.5rem;
  font-weight: 700;
  display: block;
}

.detail-stat .label {
  font-size: 0.8rem;
  color: #888;
}

.detail-score {
  font-size: 2.5rem;
  font-weight: 800;
}

.review-section {
  background: #1a1a2e;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  border: 1px solid #2a2a3e;
}

.review-section h2 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: #667eea;
}

.review-section p {
  line-height: 1.7;
  color: #ccc;
  white-space: pre-wrap;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  justify-content: center;
}

.tag {
  padding: 4px 12px;
  border-radius: 16px;
  background: #2a2a3e;
  color: #888;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.2s;
}

.tag:hover {
  background: #667eea;
  color: #fff;
}

.game-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  gap: 12px;
}

.game-nav-link {
  color: #667eea;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 8px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  transition: all 0.2s;
  text-transform: capitalize;
}

.game-nav-link:hover {
  background: #667eea;
  color: #fff;
  border-color: #667eea;
}

.game-nav-disabled {
  color: #555;
  pointer-events: none;
  opacity: 0.5;
}

/* Responsive */
@media (max-width: 768px) {
  .container { padding: 16px; }
  .header { padding: 24px 0; }
  .header h1 { font-size: 1.6rem; }
  .detail-header h1 { font-size: 1.5rem; }
  .filters { gap: 16px; padding: 16px; }
  .screenshot-grid > * { width: calc(50% - 6px); }
  .game-nav { gap: 8px; }
}

@media (max-width: 480px) {
  .container { padding: 10px; border-radius: 8px; }
  .header { padding: 16px 0; margin-bottom: 20px; }
  .header h1 { font-size: 1.3rem; }
  .header p { font-size: 0.9rem; }
  .site-logo { height: 32px !important; }

  .filter-toggle {
    display: flex;
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 100;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #667eea;
    color: #fff;
    border: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
  }

  .filter-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 199;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .filter-backdrop.open {
    opacity: 1;
    pointer-events: auto;
  }

  .filter-close {
    display: flex;
    position: absolute;
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #2a2a3e;
    color: #e0e0e0;
    border: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    z-index: 1;
  }

  .filters {
    position: fixed;
    top: 0;
    right: 0;
    width: 85%;
    max-width: 320px;
    height: 100%;
    z-index: 200;
    gap: 16px;
    padding: 60px 20px 20px;
    margin: 0;
    border-radius: 0;
    border-left: 1px solid #2a2a3e;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
    overflow-x: hidden;
    align-items: stretch;
  }
  .filters.open {
    transform: translateX(0);
  }
  .filters label { width: 100%; flex-shrink: 0; }
  .filters input, .filters select { min-width: 100%; width: 100%; }
  .filters input[type="range"] { min-width: 100%; }
  .filter-btn { padding: 6px 12px; font-size: 0.85rem; white-space: normal; word-break: break-word; }

  .games-grid { grid-template-columns: 1fr; gap: 14px; }
  .game-card { padding: 14px; }
  .game-card .score-badge { width: 40px; height: 40px; font-size: 0.85rem; top: 10px; right: 10px; }
  .game-card h2 { font-size: 1rem; padding-right: 46px; }
  .game-card .meta { flex-direction: column; gap: 4px; }

  .detail-score { font-size: 2rem; }
  .detail-header { margin-bottom: 20px; }
  .detail-header h1 { font-size: 1.2rem; }
  .detail-stats { flex-direction: column; gap: 8px; align-items: center; }
  .detail-stat .value { font-size: 1.2rem; }

  .review-section { padding: 16px; }
  .review-section h2 { font-size: 1rem; }
  .review-section p { font-size: 0.9rem; }

  .screenshot-grid { gap: 8px; }
  .screenshot-grid > * { width: 100%; }

  .game-nav { flex-direction: column; align-items: stretch; gap: 8px; margin-top: 24px; }
  .game-nav-link { text-align: center; }

  .lightbox-close { top: 10px; right: 12px; font-size: 2rem; }
  .lightbox-prev, .lightbox-next { font-size: 2rem; padding: 10px; top: 45%; }
  .lightbox-prev { left: 4px; }
  .lightbox-next { right: 4px; }
  .lightbox-counter { font-size: 0.75rem; padding: 4px 12px; bottom: 16px; }
}

.game-card.hidden {
  display: none;
}

/* Screenshot Grid */
.screenshot-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
}

.screenshot-grid > * {
  width: calc(33.333% - 8px);
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
  border: 2px solid transparent;
  background: #1a1a2e;
}

.screenshot-grid > *:hover {
  transform: scale(1.02);
  border-color: #667eea;
}

/* Lightbox */
.lightbox-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.92);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.lightbox-overlay.active {
  display: flex;
}

.lightbox-content {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: transform 0.15s ease;
}

.lightbox-img,
.lightbox-video {
  max-width: 75vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 20px;
  cursor: default;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 1001;
  line-height: 1;
}

.lightbox-close:hover {
  color: #667eea;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 20px;
  transition: color 0.2s, background 0.2s;
  z-index: 1001;
  user-select: none;
  border-radius: 8px;
  line-height: 1;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  color: #667eea;
  background: rgba(255,255,255,0.05);
}

.lightbox-prev { left: 10px; }
.lightbox-next { right: 10px; }

.lightbox-counter {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: #888;
  font-size: 0.9rem;
  z-index: 1001;
  background: rgba(0,0,0,0.6);
  padding: 6px 16px;
  border-radius: 20px;
}`;

// ---------- JS ----------
const jsGames = [...games].sort((a, b) => {
  const months = { 'Jan':0,'Feb':1,'Mar':2,'Apr':3,'May':4,'Jun':5,'Jul':6,'Aug':7,'Sep':8,'Oct':9,'Nov':10,'Dec':11 };
  const parse = (s) => { const x = s.split(/[\s,]+/); return new Date(+x[2], months[x[0].slice(0,3)], +x[1]); };
  return parse(b.date) - parse(a.date);
});
const js = `const games = [
  ${jsGames.map(g => JSON.stringify({
    name: g.name,
    slug: g.slug,
    score: g.score,
    playtime: g.playtime,
    date: g.date,
    genre: g.genre,
    tags: g.tags
  })).join(',\n  ')}
];

function renderCards(filtered) {
  const grid = document.getElementById('gamesGrid');
  grid.innerHTML = filtered.map(g => {
    const color = g.score >= 9 ? '#4caf50' : g.score >= 8 ? '#8bc34a' : g.score >= 7 ? '#ff9800' : g.score >= 6 ? '#f44336' : '#9e9e9e';
    return \`<a href="games/\${g.slug}.html" class="game-card">
      <div class="score-badge" style="background:\${color}">\${g.score}</div>
      <h2>\${g.name}</h2>
      <span class="genre-tag">\${g.genre}</span>
      <div class="meta">
        <span>\u23f1 \${g.playtime}</span>
        <span>\u{1F4C5} \${g.date}</span>
      </div>
    </a>\`;
  }).join('');
}

let activeGenre = '';

function getYear(dateStr) {
  return parseInt(dateStr.split(', ')[1]);
}

function applyFilters() {
  const search = document.getElementById('search').value.toLowerCase();
  const rawMin = parseFloat(document.getElementById('minScore').value);
  const minScore = Number.isFinite(rawMin) ? rawMin : 0;
  const rawMax = parseFloat(document.getElementById('maxScore').value);
  const maxScore = Number.isFinite(rawMax) ? rawMax : 10;
  const sort = document.getElementById('sortFilter').value;
  const year = document.getElementById('yearFilter').value;

  let filtered = games.filter(g => {
    if (search && !g.name.toLowerCase().includes(search) && !g.genre.toLowerCase().includes(search)) return false;
    if (g.score < minScore) return false;
    if (g.score > maxScore) return false;
    if (activeGenre && g.genre !== activeGenre) return false;
    if (year && getYear(g.date) !== parseInt(year)) return false;
    return true;
  });

  if (sort === 'score-desc') filtered.sort((a, b) => b.score - a.score);
  else if (sort === 'score-asc') filtered.sort((a, b) => a.score - b.score);
  else if (sort === 'date') filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  else if (sort === 'date-asc') filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'name-desc') filtered.sort((a, b) => b.name.localeCompare(a.name));

  renderCards(filtered);
}

// Genre buttons
function initGenreButtons() {
  const genres = [...new Set(games.map(g => g.genre))].sort();
  const container = document.getElementById('genreButtons');
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.textContent = 'All';
  allBtn.onclick = () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    activeGenre = '';
    applyFilters();
  };
  container.appendChild(allBtn);

  genres.forEach(genre => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = genre;
    btn.onclick = () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeGenre = genre;
      applyFilters();
    };
    container.appendChild(btn);
  });
}

function toggleFilters(open) {
  document.getElementById('filterPanel').classList.toggle('open', open);
  document.getElementById('filterBackdrop').classList.toggle('open', open);
}

document.addEventListener('DOMContentLoaded', () => {
  initGenreButtons();
  applyFilters();
  document.getElementById('search').addEventListener('input', applyFilters);
  document.getElementById('minScore').addEventListener('input', () => {
    document.getElementById('scoreValue').textContent = document.getElementById('minScore').value;
    applyFilters();
  });
  document.getElementById('maxScore').addEventListener('input', () => {
    document.getElementById('maxScoreValue').textContent = document.getElementById('maxScore').value;
    applyFilters();
  });
  document.getElementById('sortFilter').addEventListener('change', applyFilters);
  document.getElementById('yearFilter').addEventListener('change', applyFilters);

  document.getElementById('filterToggle').addEventListener('click', () => toggleFilters(true));
  document.getElementById('filterClose').addEventListener('click', () => toggleFilters(false));
  document.getElementById('filterBackdrop').addEventListener('click', () => toggleFilters(false));
});`;

// ---------- GENRE LIST ----------
const allGenres = [...new Set(games.map(g => g.genre))].sort();

// ---------- GAME PAGE GENERATOR ----------
function gamePageHTML(g, prevSlug, nextSlug) {
  const color = scoreColor(g.score);

  const prevLabel = prevSlug ? prevSlug.replace(/-/g, ' ') : '';
  const nextLabel = nextSlug ? nextSlug.replace(/-/g, ' ') : '';

  const prevBtn = prevSlug
    ? `<a href="${prevSlug}.html" class="game-nav-link game-nav-prev">&larr; ${prevLabel}</a>`
    : `<span class="game-nav-link game-nav-prev game-nav-disabled">&larr; Previous</span>`;

  const nextBtn = nextSlug
    ? `<a href="${nextSlug}.html" class="game-nav-link game-nav-next">${nextLabel} &rarr;</a>`
    : `<span class="game-nav-link game-nav-next game-nav-disabled">Next &rarr;</span>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${g.name} — BPD | Quest Log</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <div class="container">
    <div class="game-detail">
      <a href="../index.html" class="back-link">&larr; Back to all games</a>

      <div class="detail-header">
        <div class="detail-score" style="color:${color}">${g.score}${scoreEmoji(g.score)}</div>
        <h1>${g.name}</h1>
        <div class="detail-stats">
          <div class="detail-stat">
            <span class="value">${g.playtime}</span>
            <span class="label">Playtime</span>
          </div>
          <div class="detail-stat">
            <span class="value">${g.date}</span>
            <span class="label">Completed</span>
          </div>
          <div class="detail-stat">
            <span class="value" style="color:${color}">${g.genre}</span>
            <span class="label">Genre</span>
          </div>
        </div>
      </div>

      <div class="review-section">
        <h2>Summary</h2>
        <p>${g.summary}</p>
      </div>

      <div class="review-section">
        <h2>Resumo</h2>
        <p>${g.resumo}</p>
      </div>

      ${(() => {
        const ss = slugToScreenshots[g.slug];
        if (!ss || ss.length === 0) return '';
        const items = ss.map((f, i) => {
          const isVideo = /\.(mp4|webm)$/i.test(f);
          const src = `../jogos/${g.slug}/Screenshots/${f.split('/').map(encodeURIComponent).join('/')}`;
          if (isVideo) {
            return `          <video src="${src}" muted loop playsinline preload="metadata"></video>`;
          }
          return `          <img src="${src}" alt="${g.name} screenshot ${i + 1}" loading="lazy">`;
        }).join('\n');
        return `<div class="review-section">
        <h2>Screenshots</h2>
        <div class="screenshot-grid">
${items}
        </div>
      </div>

      <div class="lightbox-overlay" id="lightbox">
        <span class="lightbox-close">&times;</span>
        <span class="lightbox-prev">&#10094;</span>
        <span class="lightbox-next">&#10095;</span>
        <div class="lightbox-content" id="lightboxContent"></div>
        <div class="lightbox-counter" id="lightboxCounter"></div>
      </div>`;
      })()}

      <div class="tags">
        ${g.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
      </div>

      <div class="game-nav">
        ${prevBtn}
        ${nextBtn}
      </div>
    </div>
  </div>

  <script>
    document.addEventListener('keydown', function(e) {
      if (document.getElementById('lightbox') && document.getElementById('lightbox').classList.contains('active')) return;
      if (e.key === 'ArrowLeft') {
        var prev = document.querySelector('.game-nav-prev');
        if (prev && prev.tagName === 'A') prev.click();
      }
      if (e.key === 'ArrowRight') {
        var next = document.querySelector('.game-nav-next');
        if (next && next.tagName === 'A') next.click();
      }
    });
    (function() {
      var tsX = 0, tsY = 0;
      document.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1) { tsX = e.touches[0].clientX; tsY = e.touches[0].clientY; }
      }, { passive: true });
      document.addEventListener('touchend', function(e) {
        if (document.getElementById('lightbox') && document.getElementById('lightbox').classList.contains('active')) return;
        var dx = e.changedTouches[0].clientX - tsX;
        var dy = e.changedTouches[0].clientY - tsY;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          if (dx < 0) { var n = document.querySelector('.game-nav-next'); if (n && n.tagName === 'A') n.click(); }
          else { var p = document.querySelector('.game-nav-prev'); if (p && p.tagName === 'A') p.click(); }
        }
      }, { passive: true });
    })();
  </script>
  <script>
    (function() {
      var items = document.querySelectorAll('.screenshot-grid > *');
      var lightbox = document.getElementById('lightbox');
      var content = document.getElementById('lightboxContent');
      var counter = document.getElementById('lightboxCounter');
      var idx = 0;
      var zoom = 1;
      if (!lightbox || items.length === 0) return;
      items.forEach(function(item, i) {
        item.addEventListener('click', function() { idx = i; open(); });
      });
      function open() { zoom = 1; content.style.transform = 'scale(1)'; lightbox.classList.add('active'); update(); }
      function close() { lightbox.classList.remove('active'); stopVideo(); }
      function stopVideo() {
        var vid = content.querySelector('video');
        if (vid) { vid.pause(); vid.src = ''; content.innerHTML = ''; }
      }
      function update() {
        stopVideo();
        var item = items[idx];
        var isVideo = item.tagName === 'VIDEO';
        if (isVideo) {
          content.innerHTML = '<video src="' + item.src + '" class="lightbox-video" autoplay muted loop playsinline></video>';
        } else {
          content.innerHTML = '<img src="' + item.src + '" alt="' + item.alt + '" class="lightbox-img">';
        }
        counter.textContent = (idx + 1) + ' / ' + items.length;
      }
      function prev() { idx = (idx - 1 + items.length) % items.length; update(); zoom = 1; content.style.transform = 'scale(1)'; }
      function next() { idx = (idx + 1) % items.length; update(); zoom = 1; content.style.transform = 'scale(1)'; }
      document.querySelector('.lightbox-close').addEventListener('click', function() { close(); });
      document.querySelector('.lightbox-prev').addEventListener('click', function(e) { e.stopPropagation(); prev(); });
      document.querySelector('.lightbox-next').addEventListener('click', function(e) { e.stopPropagation(); next(); });
      lightbox.addEventListener('click', function(e) { if (e.target === lightbox) close(); });
      content.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (e.deltaY < 0) {
          zoom = Math.min(zoom + 0.2, 5);
        } else {
          zoom = Math.max(zoom - 0.2, 0.5);
        }
        content.style.transform = 'scale(' + zoom + ')';
      }, { passive: false });
      document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
      });
      var lx = 0, ly = 0;
      lightbox.addEventListener('touchstart', function(e) {
        lx = e.touches[0].clientX; ly = e.touches[0].clientY;
      }, { passive: true });
      lightbox.addEventListener('touchend', function(e) {
        var dx = e.changedTouches[0].clientX - lx;
        var dy = e.changedTouches[0].clientY - ly;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          if (dx < 0) next(); else prev();
        }
      }, { passive: true });
    })();
  </script>
</body>
</html>`;
}

// ---------- WRITE FILES ----------
// Create output directories
fs.mkdirSync(path.join(BASE, 'css'), { recursive: true });
fs.mkdirSync(path.join(BASE, 'js'), { recursive: true });
fs.mkdirSync(path.join(BASE, 'games'), { recursive: true });

// CSS
fs.writeFileSync(path.join(BASE, 'css', 'style.css'), css, 'utf8');

// JS
fs.writeFileSync(path.join(BASE, 'js', 'main.js'), js, 'utf8');

// Game pages
const navOrder = [...games].sort((a, b) => {
  const months = { 'Jan':0,'Feb':1,'Mar':2,'Apr':3,'May':4,'Jun':5,'Jul':6,'Aug':7,'Sep':8,'Oct':9,'Nov':10,'Dec':11 };
  const parse = (s) => { const x = s.split(/[\s,]+/); return new Date(+x[2], months[x[0].slice(0,3)], +x[1]); };
  return parse(b.date) - parse(a.date);
});
const slugToNav = {};
navOrder.forEach((g, i) => {
  slugToNav[g.slug] = {
    prevSlug: i > 0 ? navOrder[i - 1].slug : null,
    nextSlug: i < navOrder.length - 1 ? navOrder[i + 1].slug : null
  };
});
games.forEach(g => {
  const { prevSlug, nextSlug } = slugToNav[g.slug];
  fs.writeFileSync(path.join(BASE, 'games', `${g.slug}.html`), gamePageHTML(g, prevSlug, nextSlug), 'utf8');
});

// Index page
const indexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BPD | Quest Log — Game Reviews</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="filter-backdrop" id="filterBackdrop"></div>
  <button class="filter-toggle" id="filterToggle">☰</button>
  <div class="container">
    <div class="header">
      <div style="display:flex;align-items:center;justify-content:center;gap:12px">
        <img src="images/logo.png" class="site-logo" alt="BPD" style="height:40px">
        <h1>BPD | Quest Log</h1>
      </div>
      <p>Game reviews by Blendhon_PD &mdash; ${games.length} games completed</p>
    </div>

    <div class="filters" id="filterPanel">
      <button class="filter-close" id="filterClose">&times;</button>
      <label>
        Search
        <input type="text" id="search" placeholder="Search games...">
      </label>
      <label>
        Min Score
        <div style="display:flex;align-items:center;gap:8px">
          <input type="range" id="minScore" min="0" max="10" step="0.1" value="0" style="min-width:120px">
          <span id="scoreValue" style="font-weight:700">0</span>
        </div>
      </label>
      <label>
        Max Score
        <div style="display:flex;align-items:center;gap:8px">
          <input type="range" id="maxScore" min="0" max="10" step="0.1" value="10" style="min-width:120px">
          <span id="maxScoreValue" style="font-weight:700">10</span>
        </div>
      </label>
      <label>
        Sort
        <select id="sortFilter">
        <option value="date">Date (Newest)</option>
        <option value="date-asc">Date (Oldest)</option>
        <option value="name">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="score-desc">Score (High to Low)</option>
        <option value="score-asc">Score (Low to High)</option>
      </select>
      </label>
      <label>
        Year
        <select id="yearFilter">
          <option value="">All Years</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </label>
      <label style="flex:1;min-width:100%">
        Genre Quick Filter
        <div class="filter-buttons" id="genreButtons"></div>
      </label>
    </div>
    <div class="games-grid" id="gamesGrid"></div>
  </div>

  <script src="js/main.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(BASE, 'index.html'), indexHTML, 'utf8');

console.log('Done! Generated:');
console.log(`  - index.html`);
console.log(`  - css/style.css`);
console.log(`  - js/main.js`);
console.log(`  - games/ (${games.length} pages)`);
