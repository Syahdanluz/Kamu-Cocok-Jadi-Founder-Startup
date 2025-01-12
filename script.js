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

];

document.getElementById("generate-btn").addEventListener("click", function () {
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  const ideaContainer = document.getElementById("startup-idea");
  ideaContainer.textContent = randomIdea;
  ideaContainer.classList.remove("d-none");
});
