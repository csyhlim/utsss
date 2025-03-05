document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const bookingData = {
                tanggal: document.querySelector("[name='tanggal']").value,
                jenisTiket: document.querySelector("[name='jenis_tiket']").value,
                rentangWaktu: document.getElementById("selected-time-slot").value,
                jamMain: document.getElementById("jamMainSelect").value,
                jumlahLapangan: document.getElementById("courtCount").value,
                catatan: document.querySelector("[name='catatan']").value,
                nomorBooking: "BB" + new Date().getTime()
            };
            localStorage.setItem("bookingData", JSON.stringify(bookingData));
            window.location.href = "proses-booking.html";
        });
    }

    if (document.getElementById("detailBooking")) {
        const bookingData = JSON.parse(localStorage.getItem("bookingData"));
        if (bookingData) {
            document.getElementById("detailBooking").innerText = `
                Tanggal: ${bookingData.tanggal}
                Jenis Tiket: ${bookingData.jenisTiket}
                Rentang Waktu: ${bookingData.rentangWaktu}
                Jam Main: ${bookingData.jamMain}
                Jumlah Lapangan: ${bookingData.jumlahLapangan}
                Catatan: ${bookingData.catatan}
            `;
            document.getElementById("totalHarga").innerText = "Rp 150.000"; // Bisa dihitung dari jumlah lapangan
            document.getElementById("nomorBooking").innerText = bookingData.nomorBooking;
        } else {
            alert("Tidak ada data booking ditemukan!");
        }
    }
});