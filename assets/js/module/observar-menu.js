const d = document;

let scrollSpy = new IntersectionObserver(markSection, {
    threshold: 0.4
});

function markSection(entries) {
    entries.forEach(entrie => {
        if (entrie.isIntersecting) {
            d.querySelector(`a.menu-link[href="#${entrie.target.id}"]`).classList.add('spy');
        } else {
            d.querySelector(`a.menu-link[href="#${entrie.target.id}"]`).classList.remove('spy');
        }
    })
}

export function observerMenu() {
    const $sections = d.querySelectorAll('[data-menu]');
    
    $sections.forEach(section => {
        scrollSpy.observe(section);
    })
}

export function deleteObserver() {
    scrollSpy.disconnect();
    d.querySelectorAll('a.menu-link[href]').forEach(el => el.classList.remove('spy'));
}