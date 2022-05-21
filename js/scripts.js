function select(item){
    return document.querySelector(`${item}`);
}

function selectAll(item){
    return document.querySelectorAll(`${item}`);
}

window.onload = ()=>{

    let menuBtn = select('.menu-btn').addEventListener('click', ()=>{

        if (select('menu').style.display == 'flex'){

            select('menu').style.display = 'none';

        } else {

            select('menu').style.display = 'flex';

        }

    });
    
}