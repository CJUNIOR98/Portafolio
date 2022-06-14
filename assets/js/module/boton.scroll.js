const d = document,
    w = window;

export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector('.btn--scroll'),
        mq = w.matchMedia('(min-width: 1024px)');
    
    let $scrollElement = w;
    
    if (mq.matches) $scrollElement = d.querySelector('.wrap');

    const btnVisible = e => {
        let scrollTop = $scrollElement.scrollTop || $scrollElement.scrollY;

        if (scrollTop > 600) {
            $scrollBtn.classList.remove('hidden');
        } else {
            $scrollBtn.classList.add('hidden');
        }
    };

    const scrollTop = e => {
        if (e.target === $scrollBtn) {
            $scrollElement.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    };

    $scrollElement.removeEventListener('scroll', btnVisible);

    $scrollElement.addEventListener('scroll', btnVisible);

    d.removeEventListener('click', scrollTop);
    
    d.addEventListener('click', scrollTop);
}