const ideas = [
  "Startup bikin kursi kantor yang auto dorong ke pantry pas jam makan siang.",
  "Platform subscription buat itungin THR yang dikasih ke sodara diliat dari tingkat kedekatannya.",
  "Aplikasi matching buat mahasiswa yang nyari temen buat tugas kelompok dadakan.",
  "Startup bikin alarm jam 4 pagi yang cuma bunyi kalau hape kamu nyolok charger, tapi ga dicolok stopkontak",
  "Bot di WhatsApp untuk summarized dalam satu hari, grup WA udah bahas apa aja, biar ga capek baca 1-1.",
  "Startup bikin helm ojol yang auto ngasih tau kalo si customer ga kedengeran apa yang diomongin rider-nya",
  "Jasa minta maaf ke tukang laundry karena kamu lupa ambil baju 2 minggu lebih.",
  "Startup asuransi untuk serangan alien, tiap bulan bayar untuk dapet akses ke pesawat antariksa buat kabur nanti",
  "Jasa buat ngingetin temen yang suka lupa bayar patungan.",
  "Kursi bioskop yang otomatis mundur kalau ada orang lewat di depan kamu.",
  "App untuk bikin foto papan tulis hasil kelas kuliah kamu dimasukin ke AI untuk dibikin jadi catetan yang proper",
  "Aplikasi buat nemuin temen yang sama-sama ketinggalan kereta dan terjebak di stasiun bareng.",
  "Platform buat ngitungin seberapa banyak waktu kamu buang nonton video TikTok yang gak jelas dan bikin komparasi kalau waktu itu kamu pake buat kerjain hobi dan cita-cita kamu, beneifitnya seberapa",
  "Platform rental temen buat dateng ke acara atau komunitas baru, biar ga malu-malu",
  "App yang bakal consume semua data message, media, etc kamu untuk mereka bikin 'daftar hal yang harus kamu syukuri selama ini'. Count yo blessing~",
  "Sistem aplikasi yang ngasih kamu ide barang lain yang bisa DIY atau gratis saat kamu cek barang di marketplace, biar kamu bisa hemat",
  "App untuk bikinin trek jalan pagi/sore terbaik di rumah kamu, yang jalanannya manusiawi dan aman",
  "Reminder di smart watch kamu untuk mindful breathing kalau stress level dan/atau blood pressure kamu di atas threshold",
  "Renaissance pocket edition, app buat kamu riset ide-ide dalam disiplin ilmu apapun, biar kamu jadi polymath a la tokoh renaisans",
  "Platform untuk bikin mahasiswa bisa lihat dosen mana yang paling banyak bikin mahasiswanya telat makan",
  "WIFI management system untuk kafe biar bisa mutusin akses ke wifi buat customernya kalau dalam 4 jam dia cuma beli menu under 25K IDR",
  "Update Google Maps biar user bisa saling chat sama kendaraan lain dalam range 50m",
  



];

document.getElementById("generate-btn").addEventListener("click", function () {
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  const ideaContainer = document.getElementById("startup-idea");
  ideaContainer.textContent = randomIdea;
  ideaContainer.classList.remove("d-none");
});
