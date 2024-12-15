import {data} from "./data.js";

let data2 = []
let input = document.querySelector(".input")
let form = document.querySelector(".form")
form.addEventListener('input', (event) => {                         //поиск 
    event.preventDefault()
    section.innerHTML =  ''
     for(let n = 0; n <= data.length; n++ ){
        if(data[n].title.toLowerCase().includes(input.value.toLowerCase())){                       //совпадает ли с названием
            data2[0] = data[n]
            let article = document.createElement('article')
            article.classList.add('article')
            article.innerHTML = `
                <div class="article__div">
                    <p class="article__div_img" style='font-size: 48px'>${data2[0].symbol}</p>
                </div>
                <div class="article__info">
                    <p class="article__info_code">${data2[0].title}</p>
                    <p class="article__info_text">${data2[0].keywords}</p>
                </div>
            `
            section.appendChild(article)
        } else {                                                                                 //совпадает ли с ключ. словами
            if(data[n].keywords.toLowerCase().includes(input.value.toLowerCase())){
                data2[0] = data[n]
                let article = document.createElement('article')
                article.classList.add('article')
                article.innerHTML = `
                    <div class="article__div">
                        <p class="article__div_img" style='font-size: 48px'>${data2[0].symbol}</p>
                    </div>
                    <div class="article__info">
                        <p class="article__info_code">${data2[0].title}</p>
                        <p class="article__info_text">${data2[0].keywords}</p>
                    </div>
                `
                section.appendChild(article)
            } else{

            }
        }
    }
})

let section = document.querySelector('.main__articles')

let getNumberAtConsole = (el) => {
    let cardNumber = el.querySelector('p').innerText
    console.log(cardNumber);
}


let makeDes = (info) => {                                          //изменение ключевых слов
    data[info].keywords = data[info].keywords.split(' ')
    data[info].keywords = [... new Set(data[info].keywords)]
    data[info].keywords = data[info].keywords.join(' ')
    return data[info].keywords;
}




let addArticle = (info) => {                                       //база загрузки карточек

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
            <p class="article__info_code">${data[info].title}</p>
            <p class="article__info_text">${data[info].keywords}</p>
        </div>
    `

    section.appendChild(article)
}

for(let i = 0; i <= data.length-1; i++){  // ключ для изменения ключевых слов
    makeDes(i)
}

for(let i = 0; i <= data.length; i++ ){  //ключ для базовой загрузки карточек
    addArticle(i)
}


// let makeArticles = (info) => {
//     let article = document.createElement('article')
//     article.classList.add('article')

//     article.addEventListener('click', () => {
//         getNumberAtConsole(article)
//     })

//     article.innerHTML = `
//         <div class="article__div">
//             <p class="article__div_img" style='font-size: 48px'>${data[info].symbol}</p>
//         </div>
//         <div class="article__info">
//             <p class="article__info_code">${data[info].title}</p>
//             <p class="article__info_text">${data[info].keywords}</p>
//         </div>
//     `

//     section.appendChild(article)
// }

// for(let i = 0; i <= data.length; i++){
//     makeArticles(i)
// }



let arr = ['1', '2', '3', '1', '1', '1', '2']
let test = () => {
    let uniqArr = [... new Set(arr)]
    console.log(uniqArr);
}
test()


