import {data} from "./data.js";
console.log(data[0].symbol);


let section = document.querySelector('.main__articles')

let getNumberAtConsole = (el) => {
    let cardNumber = el.querySelector('p').innerText
    console.log(cardNumber);
}

let remake = ''


let addArticle = (info) => {
    // console.log(info);
    remake = data[info].keywords.split(' ')
    for(let del = 0; del <= remake.length-1; del++){
        // console.log(remake[del]);
        if(remake[del] === remake[del + 1]){
            delete remake[del + 1]
        } else {
            
        } 
    }
    remake = remake.join(' ')

    let article = document.createElement('article')
    article.classList.add('article')

    article.addEventListener('click', () => {
        getNumberAtConsole(article)
    })

    article.innerHTML = `
        <div class="article__div">
            <p class="article__div_img" style='font-size: 48px'>${data[info].symbol}</p>
        </div>
        <div class="article__info">
            <p class="article__info_code">${info}</p>
            <p class="article__info_text">${remake}</p>
        </div>
    `

    section.appendChild(article)
    remake = ''
}

for(let i = 7; i <= data.length; i++ ){
    addArticle(i)
}




