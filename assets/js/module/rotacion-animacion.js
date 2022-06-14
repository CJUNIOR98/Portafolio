const d = document,
    w = window,
    selector = '[data-softSkill]',
    animation = 'sacudir',
    addAnimation = skill => {
        if (skill instanceof Element) {
            skill.classList.add(animation)
        } else if (skill instanceof Event) {
            skill.target.classList.add(animation);
        }
    },
    removeAnimation = skill => {
        if (skill instanceof Element) {
            skill.classList.remove(animation)
        } else if (skill instanceof Event) {
            skill.target.classList.remove(animation);
        }
    },
    addAnimationClick = e => {
        if (e.target.matches(selector) || e.target.matches(`${selector} *`)) {
            const skill = e.target.closest(selector);
            addAnimation(skill)
            setTimeout(() => {
                removeAnimation(skill)
            }, 1000)
        }
    };

// Función para sacudir los tarjetas de habilidades blandas con la observador, se ejecutará cuando el dispositivo tenga 763px o menos de ancho
export function sacudirObserver() {
    const $softSkills = d.querySelectorAll(selector);

    $softSkills.forEach(skill => {
        skill.removeEventListener('mouseenter', addAnimation);
        skill.removeEventListener('mouseleave', removeAnimation);
    });

    d.removeEventListener('click', addAnimationClick);

    const intersection = entries => {

        entries.forEach(entry => {
            const skill = entry.target;

            if (entry.isIntersecting) {
                addAnimation(skill);
                if (!skill.dataset.sacudir) skill.dataset.sacudir = '1';
            } else {
                removeAnimation(skill);
                if (skill.dataset.sacudir) {
                    observer.unobserve(skill);
                    skill.removeAttribute('data-sacudir');
                };
            }
        })
    }

    let observer = new IntersectionObserver(intersection, {
        threshold: 1
    });

    $softSkills.forEach(el => observer.observe(el));
}

// Función para sacudir los tarjetas de habilidades blandas con poner el mouse encima, se ejecutará el dispositivo tenga 1024px o más de ancho
export function sacudirMouseOver() {
    const $softSkills = d.querySelectorAll(selector);

    d.removeEventListener('click', addAnimationClick);

    $softSkills.forEach(skill => {
        skill.addEventListener('mouseenter', addAnimation);

        skill.addEventListener('mouseleave', removeAnimation);
    });
}

// Función para sacudir los tarjetas de habilidades blandas con click, se ejecutará el dispositivo tenga entre 768px y 1023px de ancho
export function sacudirClick() {
    const $softSkills = d.querySelectorAll(selector);

    $softSkills.forEach(skill => {
        skill.removeEventListener('mouseenter', addAnimation);
        skill.removeEventListener('mouseleave', removeAnimation);
    });

    d.addEventListener('click', addAnimationClick);
}
