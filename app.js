const mediaData = [
  ["Kompas.com","Kompas Group","General","K"],
  ["Kompas.id","Kompas Group","General","K"],
  ["Kompas TV","Kompas Group","TV","K"],
  ["Kompasiana","Kompas Group","Community","K"],
  ["Kontan","Kontan Group","Business","k"],
  ["Moms Money","Kontan Group","Lifestyle","M"],
  ["Otomania","Kompas Group","Automotive","O"],
  ["Grid Oto","Grid Network","Automotive","G"],
  ["Idea","Grid Network","Property","I"],
  ["Grid Kids","Grid Network","Family","G"],
  ["Hai","Grid Network","Youth","H"],
  ["Nova","Grid Network","Lifestyle","N"],
  ["Nakita","Grid Network","Family","N"],
  ["Stylo","Grid Network","Lifestyle","S"],
  ["Parapuan","Kompas Group","Lifestyle","P"],
  ["Cewek Banget","Grid Network","Youth","C"],
  ["Intisari","Grid Network","Lifestyle","I"],
  ["Bobo","Grid Network","Kids","B"],
  ["Grid Health","Grid Network","Health","G"],
  ["Bolasport","Kompas Group","Sport","B"],
  ["Tribun Jatim","Tribun Network","Regional","T"],
  ["Tribun Medan","Tribun Network","Regional","T"],
  ["Tribun Jogja","Tribun Network","Regional","T"],
  ["Tribun Jabar","Tribun Network","Regional","T"],
  ["Tribun Jakarta","Tribun Network","Regional","T"],
  ["Tribun Bali","Tribun Network","Regional","T"],
  ["Tribun Otomotif","Tribun Network","Automotive","T"],
  ["Tribun Travel","Tribun Network","Travel","T"],
  ["Sonora ID","KG Radio","Radio/Digital","S"]
];

const services = [
  ["✦","Brand & Corporate","Company profile, pencapaian, ekspansi, kepemimpinan, dan reputasi perusahaan."],
  ["◇","Produk & Brand","Peluncuran produk, positioning, program marketing, promo, dan product story."],
  ["⌂","Institusi & Pendidikan","Branding sekolah, universitas, yayasan, program, prestasi, dan penerimaan siswa/mahasiswa."],
  ["◈","Hospitality & Travel","Hotel, resort, villa, travel, event organizer, dan pengalaman pelanggan."],
  ["✚","Healthcare","Klinik, rumah sakit, layanan baru, teknologi, program kesehatan, dan edukasi."],
  ["◎","Franchise & Network","Peluang kemitraan, ekspansi outlet, model bisnis, dan kisah pertumbuhan."],
  ["◌","Event & CSR","Event, festival, kampanye, CSR, kolaborasi, dan kegiatan perusahaan."],
  ["↗","Professional Profile","Founder, executive, expert, thought leadership, dan personal brand profesional."]
];

const cases = [
  ["Property","Kompas.com","HK Bangun RSUD di Kota Tual, Maluku, Usung Konsep Modern Minimalis","https://www.kompas.com/properti/read/2026/05/18/160000521/hk-bangun-rsud-di-kota-tual-maluku-usung-konsep-modern-minimalis"],
  ["Property","Kompas.com","Metland Tebar Dividen Rp 97 per Saham, Sisa Laba Ditahan untuk Ekspansi","https://www.kompas.com/properti/read/2026/05/29/052710321/metland-tebar-dividen-rp-97-per-saham-sisa-laba-ditahan-untuk-ekspansi"],
  ["F&B / Franchise","Kompas.com","Kisah Sukses Burger Aldi Taher yang Viral dari Gimik sampai Buka Franchise","https://www.kompas.com/food/read/2026/03/18/133200775/kisah-sukses-burger-aldi-taher-yang-viral-dari-gimik-sampai-buka-franchise"],
  ["Education","Kompas.com","UPH Festival 2026 Bekali Mahasiswa Baru untuk Menemukan Jati Diri","https://biz.kompas.com/read/2026/08/15/135924728/uph-festival-2026-bekali-mahasiswa-baru-untuk-menemukan-jati-diri-dan-panggilan"],
  ["Education","Kompas.com","UMY Resmi Pisahkan Jalur Karier Dosen, Atasi Beban Kerja Menumpuk","https://www.kompas.com/edu/read/2026/05/19/200010671/umy-resmi-pisahkan-jalur-karier-dosen-atasi-beban-kerja-menumpuk"],
  ["Hospitality","detikTravel","Hotel Baru di Sukabumi Tawarkan Pengalaman Menginap Bernuansa Alam","https://travel.detik.com/fototravel/d-8555292/hotel-baru-di-sukabumi-tawarkan-pengalaman-menginap-bernuansa-alam"],
  ["Hospitality","Kompas.com","Pengalaman Staycation di Mercure Jakarta Grogol, Tarif Rp 780.000-an","https://travel.kompas.com/read/2026/05/10/155137527/pengalaman-staycation-di-mercure-jakarta-grogol-tarif-rp-780000-an"],
  ["Banking","Kompas.com","Bank Aladin Syariah, Bank Maknai Pertumbuhan Bisnis dengan Keberlanjutan","https://money.kompas.com/read/2026/09/19/162700026/bank-aladin-syariah-bank-maknai-pertumbuhan-bisnis-dengan-keberlanjutan"],
  ["Banking","Kompas.com","Bank Jakarta Perkuat Tata Kelola Lewat Fungsi Corporate Secretary","https://money.kompas.com/read/2026/09/04/204302426/bank-jakarta-perkuat-tata-kelola-lewat-fungsi-corporate-secretary"],
  ["Healthcare","Kompas.com","Dentalogy Surabaya Sediakan Layanan Gigi Lengkap Berteknologi Modern","https://health.kompas.com/read/2026/05/15/202117268/dentalogy-surabaya-sediakan-layanan-gigi-lengkap-berteknologi-modern"],
  ["Brand / Product","Kompas.com","Paloma Experience Center Hadir di Surabaya, Bisa Coba Langsung Produk","https://www.kompas.com/homey/read/2026/06/30/190200276/paloma-experience-center-hadir-di-surabaya-bisa-coba-langsung-produk"],
  ["Event","Kompas.com","Telkomsel Digiland Run 2026 Padukan Olahraga, Teknologi dan Hiburan","https://biz.kompas.com/read/2026/05/25/150948428/telkomsel-digiland-run-2026-padukan-olahraga-teknologi-dan-hiburan"],
  ["Travel","Kompas.com","Bangun Kehangatan dan Kebersamaan Antar Jemaah Haji, Jejak Imani Kembali","https://nasional.kompas.com/read/2026/05/20/12560911/bangun-kehangatan-dan-kebersamaan-antar-jemaah-haji-jejak-imani-kembali"],
  ["UMKM","Kompas.com","Perusahaan AI Indonesia Tembus Pasar AS Melalui Kolaborasi dengan Crawford","https://umkm.kompas.com/read/2026/05/04/152358983/perusahaan-ai-indonesia-tembus-pasar-as-melalui-kolaborasi-dengan-crawford"]
];

const packages = [
  {
    name:"Brand Visibility", price:"Mulai Rp25 jutaan", desc:"Untuk membangun exposure awal dan menghadirkan brand Anda dalam konteks media nasional.",
    features:["1 publikasi di 1 media nasional","Pemilihan media berdasarkan kebutuhan","Penyusunan naskah profesional","Link artikel tayang + laporan"]
  },
  {
    name:"Authority Growth", price:"Rp75 jutaan", featured:true, tag:"PALING STRATEGIS",
    desc:"Untuk membangun narasi yang lebih dalam melalui beberapa publikasi dengan materi berbeda.",
    features:["4–5 media nasional","Materi publikasi berbeda","Penyusunan naskah profesional","FREE 100% SEO Optimization","Link artikel tayang + laporan"]
  },
  {
    name:"Market Domination", price:"Rp85 jutaan", desc:"Untuk kebutuhan publikasi berskala besar dengan beberapa materi pada 1 media utama.",
    features:["3–5 publikasi berbeda","1 media utama pilihan","FREE SEM di Google / Google Partnership / YouTube","FREE SMM Meta Network","Link artikel tayang + laporan"]
  }
];

const serviceGrid = document.querySelector("#serviceGrid");
services.forEach(([icon,title,desc])=>{
  serviceGrid.insertAdjacentHTML("beforeend",`<article class="service-card"><div class="icon-box">${icon}</div><h3>${title}</h3><p>${desc}</p></article>`);
});

const mediaGrid = document.querySelector("#mediaGrid");
const mediaFilter = document.querySelector("#mediaFilter");
const categories = ["Semua",...new Set(mediaData.map(x=>x[2]))];

categories.forEach((cat,i)=>{
  const b=document.createElement("button");
  b.className="filter-btn"+(i===0?" active":"");
  b.textContent=cat;
  b.addEventListener("click",()=>{
    document.querySelectorAll(".filter-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    renderMedia(cat);
  });
  mediaFilter.appendChild(b);
});

function renderMedia(category="Semua"){
  mediaGrid.innerHTML="";
  mediaData.filter(x=>category==="Semua"||x[2]===category).forEach(([name,group,cat,mark])=>{
    mediaGrid.insertAdjacentHTML("beforeend",`<div class="media-tile"><div class="media-mark">${mark}</div><div class="media-name">${name}</div><div class="media-cat">${group} · ${cat}</div></div>`);
  });
}
renderMedia();

const caseGrid=document.querySelector("#caseGrid");
let caseLimit=6;
function renderCases(){
  caseGrid.innerHTML="";
  cases.slice(0,caseLimit).forEach(([cat,media,title,url])=>{
    caseGrid.insertAdjacentHTML("beforeend",`<article class="case-card"><div class="case-meta"><span>${cat}</span><span>${media}</span></div><h3>${title}</h3><p>Contoh publikasi yang tercantum dalam materi referensi AMERTA.</p><a class="case-link" href="${url}" target="_blank" rel="noopener">Buka artikel ↗</a></article>`);
  });
  document.querySelector("#loadMoreCases").style.display=caseLimit>=cases.length?"none":"inline-block";
}
renderCases();
document.querySelector("#loadMoreCases").addEventListener("click",()=>{caseLimit+=6;renderCases()});

const packageGrid=document.querySelector("#packageGrid");
packages.forEach(p=>{
  packageGrid.insertAdjacentHTML("beforeend",`<article class="package-card ${p.featured?"featured":""}">${p.tag?`<div class="package-tag">${p.tag}</div>`:""}<h3>${p.name}</h3><div class="package-price">${p.price}</div><p>${p.desc}</p><ul>${p.features.map(f=>`<li>${f}</li>`).join("")}</ul></article>`);
});

document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".mobile-nav").classList.toggle("open");
});
document.querySelectorAll(".mobile-nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".mobile-nav").classList.remove("open")));
document.querySelector("#year").textContent=new Date().getFullYear();
