const menuItens = document.querySelectorAll('.nav a[href^="#"]');

menuItens.forEach(item => {
item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
     event.preventDefault();
     
     const to = getScrollTopByHref(event.target) - 150;
     scroolToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}
