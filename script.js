document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const bookingData = {
                tanggal: document.querySelector("[name='tanggal']").value,
                jenisTiket: document.querySelector("[name='jenis_tiket']").value,
                catatan: document.querySelector("[name='catatan']").value
            };
            localStorage.setItem("bookingData", JSON.stringify(bookingData));
            window.location.href = "konfirmasi-pembayaran.html";
        });
    }
});