<div align="center">
  <br />
  <h1>📊 FINALYTIX Dashboard</h1>
  <p>
    <strong>Shaxsiy moliya va xarajatlarni aqlli boshqarish uchun zamonaviy analitik platforma.</strong>
  </p>
  
  [![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Deploy](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
  
  <br />
  
  <h3>
    <a href="https://<USERNAME>.github.io/<REPO-NAME>">🌐 Jonli Ko'rish (Live Demo)</a>
    <span> | </span>
    <a href="#-loyihani-ishga-tushirish">💻 O'rnatish</a>
  </h3>
</div>

<hr />

## 📝 Loyiha Haqida

**FINALYTIX** - bu foydalanuvchilarga o'zlarining kundalik kirim va chiqimlarini hisobga olish, ularni toifalarga ajratish va vizual tarzda tahlil qilish imkonini beruvchi zamonaviy web dastur. Dastur "High Density" (Yuqori zichlikdagi) qora (dark) mavzuli interfeysga ega bo'lib, moliyaviy ma'lumotlarni juda ko'rkam va professional ko'rinishda taqdim etadi.

Loyihaning barcha ma'lumotlari brauzerning **Local Storage** xotirasida saqlanadi, shuning uchun hech qanday backend talab qilinmaydi va ma'lumotlaringiz faqatgina o'zingizning qurilmangizda xavfsiz turadi.

## ✨ Imkoniyatlari (Features)

- 💰 **Daromad va Xarajatlarni kuzatish:** Yangi tranzaksiyalarni oson qo'shish.
- 📊 **Analitika va Grafiklar:** `recharts` yordamida xarajatlar toifalari bo'yicha interaktiv doiraviy (pie) grafik.
- 💾 **Lokal Ma'lumotlar Bazasi:** Custom `useLocalStorage` hook orqali ma'lumotlarni brauzerda avtomatik saqlash.
- 🎨 **Zamonaviy UI:** "High Density" dizayn konsepsiyasi (Tailwind CSS yordamida).
- 🏷 **Filtirlash:** Tranzaksiyalarni faqat daromad yoki xarajat bo'yicha saralash va ajratib ko'rsatish.
- ⚡️ **Optimallashtirilgan:** Oylik hisob-kitoblar `useMemo` yordamida keshlanib tezkor ishlaydi.

## 🛠 Texnologiyalar (Tech Stack)

| Texnologiya | Ta'rifi |
| :--- | :--- |
| **React 19** | UI kutubxona |
| **TypeScript** | Statik tiplangan xavfsiz kod |
| **Vite** | Zamonaviy va tezkor bundler |
| **Tailwind CSS v4** | Utility-first uslubidagi CSS framework |
| **Recharts** | Data visualization va grafiklar uchun |
| **Lucide React** | Vektor icon'lar |

## 🚀 Loyihani ishga tushirish

Loyihani o'zingizning kompyuteringizda ishga tushirish uchun quyidagi qadamlarni bajaring:

### 1️⃣ Repozitoriyni ko'chirib olish (Clone)
```bash
git clone https://github.com/SizningUzeringiz/moliya-dashboard.git
cd moliya-dashboard
```

### 2️⃣ Paketlarni o'rnatish
```bash
npm install
```

### 3️⃣ Dasturni ishga tushirish (Development)
```bash
npm run dev
```

Brauzeringizda `http://localhost:3000` manziliga kiring va loyihadan foydalaning.

## 🌍 GitHub Pages orqali Deploy qilish
Loyiha avtomatik ravishda **GitHub Actions** orqali GitHub Pages'ga joylanishiga (deploy bo'lishiga) moslashtirilgan.
1. Loyihani GitHub'ga yuklang.
2. Repozitoriyning **Settings -> Pages** bo'limidan manba (source) sifatida **GitHub Actions** ni tanlang.
3. Yangi kod (commit) qo'shganingizda, loyiha avtomatik ravishda build qilinib, Pages'ga joylanadi.

*(Yuqoridagi Live Demo havolasidagi <USERNAME> va <REPO-NAME> larni o'zingizning GitHub ma'lumotlaringizga almashtirishni unutmang! Vite config ichida `base: './'` qilib sozlangan).*

---

## 👨‍💻 Muallif

Ushbu dastur **Sanjarbek Otabekov** tomonidan ishlab chiqilgan va tuzilgan.

* Agar loyiha sizga yoqqan bo'lsa, repozitoriyga ⭐️ (star) bosishni unutmang!
* Savol yoki takliflar bo'lsa bog'lanishingiz mumkin.
