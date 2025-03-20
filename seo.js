(function() {
  const head = document.getElementsByTagName('head')[0];

  // Meta Básicas
  const metaCharset = document.createElement('meta');
  metaCharset.setAttribute('charset', 'utf-8');
  head.appendChild(metaCharset);

  const metaViewport = document.createElement('meta');
  metaViewport.setAttribute('name', 'viewport');
  metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
  head.appendChild(metaViewport);

  // Cor do tema
  const metaThemeColor = document.createElement('meta');
  metaThemeColor.setAttribute('name', 'theme-color');
  metaThemeColor.setAttribute('content', '#ffffff');
  head.appendChild(metaThemeColor);

  // Link canônico
  const linkCanonical = document.createElement('link');
  linkCanonical.setAttribute('rel', 'canonical');
  linkCanonical.setAttribute('href', 'https://brasilware.github.io/');
  head.appendChild(linkCanonical);

  // Título e Meta Title/Description
  document.title = "BrasilWare - Plataforma de Análise de Malware";

  const metaTitle = document.createElement('meta');
  metaTitle.setAttribute('name', 'title');
  metaTitle.setAttribute('content', 'BrasilWare - Plataforma de Análise de Malware');
  head.appendChild(metaTitle);

  const metaDescription = document.createElement('meta');
  metaDescription.setAttribute('name', 'description');
  metaDescription.setAttribute('content', 'Plataforma de cybersegurança, plataforma de cyber security, segurança da informação, SaaS');
  head.appendChild(metaDescription);

  // Open Graph / Facebook
  const ogTags = [
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://brasilware.github.io/' },
    { property: 'og:title', content: 'BrasilWare - Plataforma de Análise de Malware' },
    { property: 'og:description', content: 'Plataforma de cybersegurança, plataforma de cyber security, segurança da informação, SaaS' },
    { property: 'og:image', content: 'https://metatags.io/images/meta-tags.png' }
  ];
  ogTags.forEach(tag => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', tag.property);
    meta.setAttribute('content', tag.content);
    head.appendChild(meta);
  });

  // Twitter
  const twitterTags = [
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://brasilware.github.io/' },
    { property: 'twitter:title', content: 'BrasilWare - Plataforma de Análise de Malware' },
    { property: 'twitter:description', content: 'Plataforma de cybersegurança, plataforma de cyber security, segurança da informação, SaaS' },
    { property: 'twitter:image', content: 'https://metatags.io/images/meta-tags.png' }
  ];
  twitterTags.forEach(tag => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', tag.property);
    meta.setAttribute('content', tag.content);
    head.appendChild(meta);
  });

  // Ícones e Manifesto
  const icons = [
    { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
    { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
    { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
    { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
    { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
    { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
    { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
    { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },
    { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "manifest", href: "/manifest.json" }
  ];
  icons.forEach(icon => {
    const link = document.createElement('link');
    Object.keys(icon).forEach(attr => link.setAttribute(attr, icon[attr]));
    head.appendChild(link);
  });

  // Meta para Microsoft
  const msTileColor = document.createElement('meta');
  msTileColor.setAttribute('name', 'msapplication-TileColor');
  msTileColor.setAttribute('content', '#ffffff');
  head.appendChild(msTileColor);

  const msTileImage = document.createElement('meta');
  msTileImage.setAttribute('name', 'msapplication-TileImage');
  msTileImage.setAttribute('content', '/ms-icon-144x144.png');
  head.appendChild(msTileImage);

  // Meta Keywords
  const metaKeywords = document.createElement('meta');
  metaKeywords.setAttribute('name', 'keywords');
  metaKeywords.setAttribute('content', 'segurança cibernética, cyber security, entry level cyber security jobs, google cyber security certificate, social engineering in cyber security, what is phishing in cyber security, cyber security jobs, cyber security salary, types of cyber security, cyber security certifications, cyber security analyst, cibersegurança, centro nacional de cibersegurança, curso de cibersegurança, pós graduação cibersegurança, estagio cibersegurança, o que é cibersegurança, mestrado cibersegurança, cibersegurança angola, cibersegurança brasil, blog cibersegurança, segurança da informação, pilares da segurança da informação, curso de segurança da informação, política de segurança da informação, segurança da informação alura, segurança da informação, auditoria e conformidade, segurança da informação, áreas de atuação, analista de segurança da informação jr, malware, tipos de malware, anti malware, o que é malware em computador, remoção gratuita de malware, análise de malware, hacker, virus, vírus, troljan, cavalo de tróia, blueteam, redteam, purpleteam, whiterat, grayrat');
  head.appendChild(metaKeywords);

  // Meta Robots
  const metaRobots = document.createElement('meta');
  metaRobots.setAttribute('name', 'robots');
  metaRobots.setAttribute('content', 'index, follow');
  head.appendChild(metaRobots);

  // JSON-LD Structured Data (Organization)
  const jsonLdScript = document.createElement('script');
  jsonLdScript.setAttribute('type', 'application/ld+json');
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "brasilware",
    "alternateName": "Brasilware",
    "url": "https://brasilware.github.io/",
    "logo": "https://brasilware.github.io/brasilwarelogo.jpg",
    "description": "Imagem de um logotipo com um design tecnológico. No centro, há um escudo com a cabeça de uma onça estilizada, composta por linhas que lembram circuitos eletrônicos. O olho da onça contém a bandeira do Brasil. Ao redor do escudo, há um padrão de circuitos em verde e azul. Abaixo do escudo, está escrito 'BRASILWARE' em letras grandes e brancas, e logo abaixo, em letras menores, 'CYBER SECURITY'. No canto inferior direito, há uma pequena bandeira do Brasil. O fundo é escuro, destacando as cores vibrantes do design.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "https://github.com/azurejoga/",
      "contactType": "technical support",
      "contactOption": "HearingImpairedSupported",
      "areaServed": ["GB","CA","AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BV","BR","IO","VG","BN","BG","BF","BI","KH","CM","CV","KY","CF","TD","CL","CN","CX","CC","HR","CR","CK","KM","CO","CU","CW","CY","CZ","CD","DK","DJ","DM","DO","TL","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GL","GD","GN","GG","GW","GY","HT","HM","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","CI","JM","JP","JE","JO","KZ","KE","KI","XK","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","KP","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","CG","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS","KR","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TG","TK","TO","TT","TN","TR","TM","TC","TV","VI","UG","UA","AE","UM","UY","UZ","VU","VA","VE","VN","WF","EH","YE","ZM","ZW","002","015","419","142","143","030","035","034","145","150","151","154","039","155"],
      "availableLanguage": ["es","en","Japanese","Korean","Panjabi"]
    },
    "sameAs": "https://github.com/azurejoga/brasilware"
  };
  jsonLdScript.text = JSON.stringify(jsonLd, null, 2);
  head.appendChild(jsonLdScript);

  // Observação: Caso necessário, você pode incluir comentários permanentes ou links adicionais aqui.
})();
