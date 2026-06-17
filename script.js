function sub() {
    let no = "";

    for (let i = 0; i < 9; i++) {
        no += Math.floor(Math.random() * 10);
    }

    document.getElementById("m").innerHTML =
        `<h3 style="color:green">
            Application Complete!<br>
            Application Number: ${no}
        </h3>`;
}

function previewImage(event) {
    const file = event.target.files[0];

    if (file) {
        const img = document.getElementById("p");
        img.src = URL.createObjectURL(file);
        img.style.display = "block";
    }
}