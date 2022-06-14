const d = document;

export function slideServices() {
    const $container = d.querySelector('[data-slices-container]'),
        $left = d.querySelector('[data-left]'),
        $right = d.querySelector('[data-right]');
    
    const scroll = ind => {
        $container.scroll({
            left: $container.scrollLeft + ind * (($container.clientWidth / 2) + 1),
            behavior: 'smooth'
        })
    };
    
    d.addEventListener('click', e => {
        if (e.target === $left) scroll(-1);
            

        if (e.target === $right) scroll(1);
    });
}