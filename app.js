lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "https://assets1.lottiefiles.com/packages/lf20_kyu7xb1v.json"
});

function submitForm() {
    document.getElementById("form-box").style.display = "none";
    document.getElementById("success-box").style.display = "block";
    lottie.loadAnimation({
        container: document.getElementById("success-animation"),
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "https://assets10.lottiefiles.com/packages/lf20_touohxv0.json"
    });
}