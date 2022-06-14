const d = document;

export function hamburguerMenu(btn,nav,optionNav) {
    const $btn = d.querySelector(btn),
        $menu = d.querySelector(nav);

    d.addEventListener('click', e => {
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
            $btn.classList.toggle('is-active');
            $menu.classList.toggle('menu-active');
        }

        if (e.target.matches(optionNav)) {
            $btn.classList.remove('is-active');
            $menu.classList.remove('menu-active');
        }
    })
}