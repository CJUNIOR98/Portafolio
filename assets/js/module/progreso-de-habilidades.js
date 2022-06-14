const d = document;

export function cargar() {
    const $skills = d.querySelector('.skills-list'),
        rows = getComputedStyle($skills).gridTemplateRows.match(/px/ig).length,
        columns = getComputedStyle($skills).gridTemplateColumns.match(/px/ig).length;
    
    for (let i = 0; i < $skills.children.length; i++){
        $skills.children[i].dataset.row = `${Math.ceil((i + 1) / columns)}`;
        $skills.children[i].dataset.column = (i + 1) < columns
            ? i + 1
            : (i + 1) % columns || columns
    }

    d.addEventListener('click', e => {
        if (e.target.matches('[data-skill]') || e.target.matches('[data-skill] *')) {
            const $skill = e.target.closest('[data-skill]'),
                $progressBar = $skill.querySelector('.progress-bar'),
                $counter = $skill.querySelector('.counter'),
                $progress = $skill.querySelector('.progress'),
                $aviso = $skill.querySelector('.skill-aviso'),
                $list = $skill.querySelector('.skill-list'),
                $figure = $skill.querySelector('.skill-figure');
            
            $figure.classList.add('none');
            $aviso.classList.add('none');
            $progressBar.classList.remove('none');
            $progressBar.classList.add('visible');
            $progress.classList.add('cargando');

            const $delta = parseInt(getComputedStyle($progress).animationDuration, 10) * 10;
            
            let progress = 0,
                reloj;
            
            reloj = setInterval(() => {
                progress++;
                $counter.textContent = `${progress}%`;
                if (progress >= 100) {
                    clearInterval(reloj);
                    $progress.classList.remove('cargando');

                    if (+$skill.dataset.row % 2 && !(+$skill.dataset.column % 2) || !(+$skill.dataset.row % 2) && +$skill.dataset.column % 2) $skill.classList.add('skill-loaded');

                    $progressBar.classList.add('none');
                    $progressBar.classList.remove('visible');
                    $list.classList.remove('none');
                    $list.classList.add('visible');
                    $skill.removeAttribute('data-skill');
                };
            }, $delta)
        }
    })
}