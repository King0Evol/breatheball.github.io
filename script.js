const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime/5)*2
const holdTime = totalTime/5

breatheAnimation()

function breatheAnimation(){
    text.innerHTML= "吸气"
    container.className = 'container grow'

    setTimeout(() =>{
        text.innerText = "屏气"

        setTimeout(()=>{
            text.innerText = "呼气"
            container.className = 'container shrink'
        }, holdTime)
    },breatheTime)
}

setInterval(breatheAnimation, totalTime)