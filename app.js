const center = document.querySelector(".center");
const btns = document.querySelectorAll(".btn");
const arts = document.querySelectorAll(".art");

center.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    if (id) {
        //remove active from buttons
        btns.forEach(function(btn) {
            btn.classList.remove("active");
            //add active to current active button
            e.target.classList.add("active")
        });
        // remobe active from the articles
        arts.forEach(function (art) {
            art.classList.remove("active");
        })
        //add active to current active article
        const elem = document.getElementById(id);
        elem.classList.add("active");
    }
});