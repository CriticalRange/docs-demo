if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),b={module:{uri:c},exports:i,require:r};s[c]=Promise.all(f.map((e=>b[e]||r(e)))).then((e=>(d(...e),i)))}}define(["./workbox-ee6ddacc"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Docs Demo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.8fb5d742.js",revision:"da16cd3350cd46bb068d59d22bac4a87"},{url:"assets/404.html.919bdb8f.js",revision:"958adeb4498df4934e12bb5d185dc728"},{url:"assets/app.14cf2a95.js",revision:"104a7fc9a3f8d072a2b5310208564593"},{url:"assets/auto.8c25b651.js",revision:"8fd495ef85ea8266e0efc3145fa2b94a"},{url:"assets/baz.html.4132d67c.js",revision:"08a2a03bd5d9f31d62e1bc5837e8773a"},{url:"assets/baz.html.7c41be2b.js",revision:"4e2330bf87a7884e1def6b1d44c51b69"},{url:"assets/baz.html.a136e7d2.js",revision:"2511f1cf43826e4e09974c5200275395"},{url:"assets/baz.html.e5a65846.js",revision:"b92e5d9131920d735fcc60a8fd9271b4"},{url:"assets/disable.html.069f4dc8.js",revision:"3e42927bce596726391c5d1f791ef714"},{url:"assets/disable.html.4d7128c5.js",revision:"3c971dce6093155d8784be3c67609ea9"},{url:"assets/disable.html.8634bba2.js",revision:"e0738c97b681128f674439cb17ee2907"},{url:"assets/disable.html.e4afacfd.js",revision:"377bde3dc110000642c276174c18071e"},{url:"assets/encrypt.html.22fb2959.js",revision:"b724210def8494858c993fa44a0a9eed"},{url:"assets/encrypt.html.956a2be2.js",revision:"0b9bb830eded38766b20d610a4424c0b"},{url:"assets/encrypt.html.d3db7624.js",revision:"21a1b24e639a96c8ccae8a8b93dc3b32"},{url:"assets/encrypt.html.daa83b82.js",revision:"26bb2bb588e88b8531994770da4bd0be"},{url:"assets/flowchart.parse.d070881f.js",revision:"a3bf05ec1dc83c91d060510bd82032b8"},{url:"assets/highlight.esm.7496658a.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/index.6ebf0376.js",revision:"1fef675066bb95ec3b3edbc16cbab87e"},{url:"assets/index.html.04c40f24.js",revision:"7a58b4b66f6787131e9eabe4c4b25ef6"},{url:"assets/index.html.0a59b518.js",revision:"00ea725443d360a3968033c65689d3a2"},{url:"assets/index.html.24e9b4e7.js",revision:"06601ad642b2828143d812c75b8848b9"},{url:"assets/index.html.2d52fbe4.js",revision:"c16ec9cb1309b78ccd5cadeb0c697305"},{url:"assets/index.html.32af9a69.js",revision:"3645f226ee801514aba88b8f8399c6ca"},{url:"assets/index.html.3357ef3c.js",revision:"13625297d4b580ab755b053e566982f3"},{url:"assets/index.html.3edf905f.js",revision:"68daa6059dd32496af9d168157d3bc0a"},{url:"assets/index.html.4d6af100.js",revision:"d0970cf6827c33ee14eec3a63fa599d3"},{url:"assets/index.html.5016529f.js",revision:"7f24c14bfdceb6ddcf287dfca308b258"},{url:"assets/index.html.7ea1cc54.js",revision:"fdee07523927168a260a1815ce6a1a35"},{url:"assets/index.html.7ed76895.js",revision:"a17dd5b3cbf74329852262373f6fd924"},{url:"assets/index.html.8b093ddf.js",revision:"ee1e2ccf18d888bdbdacd3d3e09257d2"},{url:"assets/index.html.8b83dcba.js",revision:"ed4786f721fbefda0d4f0dc65f023087"},{url:"assets/index.html.910b95d7.js",revision:"c1d9bbb5201df4fa5aefa461fcc7dc62"},{url:"assets/index.html.9e2b5b8f.js",revision:"b2c9f399a96731bfdab3ae4d82e70b98"},{url:"assets/index.html.9fe4e3c4.js",revision:"3129bd25f2fbcc7a40c83b186168e772"},{url:"assets/index.html.c96ca5fd.js",revision:"5b2555db6ba2dab8b533ae37f88e5c57"},{url:"assets/index.html.cc73c701.js",revision:"b48d4cf4b222ef9b25c04d50a28933de"},{url:"assets/index.html.de674a20.js",revision:"fe75128fb4bf27f3e5f9e9dc5f8a447d"},{url:"assets/index.html.e507e732.js",revision:"3ed4bdd8d5adbb6cd92525a33919e587"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.5fe10c36.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markdown.html.38f82b17.js",revision:"270e60f3f33ed627d8e5baa42257a098"},{url:"assets/markdown.html.60697b92.js",revision:"a82f5e3a31287f188bd4ea32f36ac0d2"},{url:"assets/markdown.html.a55cc232.js",revision:"3608446ac59073bd2c5b87cd2330aec3"},{url:"assets/markdown.html.ed038e80.js",revision:"ef77ff5561b0ceebf1a1ad7dd6c74314"},{url:"assets/math.esm.250aa4b5.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.esm.min.7a82b9e2.js",revision:"f745f5587cb1e3ca09799ec4df73c542"},{url:"assets/notes.esm.05950e93.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/page.html.13909bcc.js",revision:"c350771d579ab8f95893262426a3800a"},{url:"assets/page.html.b8487c75.js",revision:"8e8265340b75980b5541e42699fce46d"},{url:"assets/page.html.ce32dcc3.js",revision:"6b5d005f9220b3d6796fe94b3063fa32"},{url:"assets/page.html.d321f363.js",revision:"e06c7b06cae04515345a16dd6160c036"},{url:"assets/photoswipe.esm.5633d443.js",revision:"317c562e1a4f43455c48b2cc085d9520"},{url:"assets/ray.html.0ac2c481.js",revision:"09c7f12cfbf953cf9b5079596ee0a9f5"},{url:"assets/ray.html.a4c084a5.js",revision:"b563cdeff97fd53a2b6b3df2d1cfe399"},{url:"assets/ray.html.c4e7ba16.js",revision:"188b3cb3cd26ad3b4cd794d8acb3d090"},{url:"assets/ray.html.f9e373da.js",revision:"71784cc3435e3b89ab299926e5310144"},{url:"assets/reveal.esm.12942930.js",revision:"2ae13f3f401294fee79646ed1f70afec"},{url:"assets/search.esm.db3c4a8b.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/slides.html.120e4b91.js",revision:"39a62b99b29e03b403b09cb9ed7ffa79"},{url:"assets/slides.html.3adc2abe.js",revision:"228da106a7cff4ef11470dc928046ebc"},{url:"assets/slides.html.4074d185.js",revision:"2d906707e7b87c2cad3192403f333875"},{url:"assets/slides.html.4415f302.js",revision:"dff9c582248c116f38779f721b8777d5"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.d74aab6d.css",revision:"24605b38f4b85431e4ef39b444e3eef3"},{url:"assets/vue-repl.99196bf2.js",revision:"4b63fb3cb469a91c2261148e7523cedc"},{url:"assets/VuePlayground.1d1a4563.js",revision:"10c19c01ff2b96e3a6070f7b833e6d20"},{url:"assets/waline-meta.59d29fb0.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"assets/zoom.esm.5f501201.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"100bdd7e9a69b6fe50acd57811b735cf"},{url:"demo/disable.html",revision:"5f9c2c662f43044500c54e77c86e13c2"},{url:"demo/encrypt.html",revision:"56b4ff18edfa211cf0d3fb3acb6cf977"},{url:"demo/index.html",revision:"65a6dd28ba7ecb6eca11c18eb03c2410"},{url:"demo/markdown.html",revision:"cd0681caa3c037f898c92cdba31bb067"},{url:"demo/page.html",revision:"4c9ef35aa4c9d010adeea016a55070c2"},{url:"guide/bar/baz.html",revision:"fe6dfa34da9788d7229d5ab99b4346b5"},{url:"guide/bar/index.html",revision:"6ffeb0f17b40512496c5a7149fc33ec4"},{url:"guide/foo/index.html",revision:"0163ccc002a2145b59b61583bb215e35"},{url:"guide/foo/ray.html",revision:"3a05e03f0827d81a511c9d252580666e"},{url:"guide/index.html",revision:"e35cde12ebe025471254cae42fb3addc"},{url:"index.html",revision:"c8f4fd1565bcb64328f8fb89dcdaf85b"},{url:"slides.html",revision:"45a7a534f6edf184912b1138c1c7e217"},{url:"zh/demo/disable.html",revision:"7873aaee6f48be91a9514469ef47f1a8"},{url:"zh/demo/encrypt.html",revision:"6c490615417f6014c6dc3b70f8d6cda8"},{url:"zh/demo/index.html",revision:"ba0c6bad527a8c5dbc26c7369a19ee2a"},{url:"zh/demo/markdown.html",revision:"913785a4b44992db28d5496b92eadd06"},{url:"zh/demo/page.html",revision:"870e0da9657340d8ac66dcc69448cafd"},{url:"zh/guide/bar/baz.html",revision:"af104a4cf587a3394ba15d629bc83d66"},{url:"zh/guide/bar/index.html",revision:"71dae20cc0cf9edc22dd66015edf0521"},{url:"zh/guide/foo/index.html",revision:"e298b9b122878d1e18495e6490eb9b01"},{url:"zh/guide/foo/ray.html",revision:"f2b334d6a5cb0886d13658f506e7ef23"},{url:"zh/guide/index.html",revision:"57dc0994cacf29a5206cd7a5dbe0d6c2"},{url:"zh/index.html",revision:"dd0c25fbf5937e584023ec7bb04ea4e8"},{url:"zh/slides.html",revision:"ba11cc948ec0d70977969a805e95723f"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
