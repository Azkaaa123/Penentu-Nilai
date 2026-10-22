function cekNilai() {
    let input = document.getElementById("nilai").value;
    let nilai = Number(input);
    let hasil = document.getElementById("hasil");

    // Tugas 1: Jika kosong atau di luar 0-100 (pakai ||)
    if (input === "" || nilai < 0 || nilai > 100) {
        hasil.innerHTML = "Masukkan nilai antara 0 sampai 100!";
        hasil.style.color = "red";
        return;
    }

    hasil.style.color = "black";
    let grade;

    if (nilai >= 90) {
        grade = "A";
    } else if (nilai >= 80) {
        grade = "B";
    } else if (nilai >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    // Tugas 2: Keterangan pakai switch
    let keterangan;
    switch (grade) {
        case "A":
            keterangan = "Sangat Baik";
            break;
        case "B":
            keterangan = "Baik";
            break;
        case "C":
            keterangan = "Cukup";
            break;
        case "D":
            keterangan = "Perlu belajar lagi";
            break;
    }

    hasil.innerHTML = "Nilai kamu: " + grade + " - " + keterangan;
}