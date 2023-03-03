let header = document.querySelector("#header-container")

window.addEventListener("scroll", function(event) { 
    event.preventDefault();

    if (window.scrollY >= 400) { 
        header.style.backgroundColor = 'white'
    } else {
        header.style.backgroundColor = "#ffc017";
    }
})

let btn = document.querySelector("#get-started")

window.addEventListener("scroll", function(event) { 
    event.preventDefault();

    if (window.scrollY >= 400) { 
        btn.style.backgroundColor = 'green'
    } else {
        btn.style.backgroundColor = "#191919";
    }
})
