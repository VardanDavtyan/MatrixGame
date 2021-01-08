window.onload = () => {

   const matrixSize = 10
   const images = [
      'https://images.vexels.com/media/users/3/143153/isolated/preview/718dfdb62dfd3c6fcd18b9d6f12ca05d-green-fish-cartoon-by-vexels.png',
      'https://gdlnetwork.co.uk/wp-content/uploads/2014/08/jumping-fish.png',
      'https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/3/3c/Nat_Peterson.png/revision/latest?cb=20160325025523',
      'https://vignette.wikia.nocookie.net/scratchpad/images/f/f2/HaroldBillRfd.png/revision/latest?cb=20170825051515',
   ]

   let getRandomImage = () => images[Math.floor(Math.random() * images.length)]

   let song = new Audio('./sound/music.wav')
   song.volume = 0.1
   song.autoplay = true
   song.loop = true
   song.muted = false

   var backgroundDiv = document.createElement('div')
   backgroundDiv.style.width = window.innerWidth + 'px'
   backgroundDiv.style.height = window.innerHeight + 'px'
   backgroundDiv.style.display = 'flex'
   backgroundDiv.style.justifyContent = 'center'
   backgroundDiv.style.alignItems = 'center'
   backgroundDiv.style.backgroundImage = "url('https://image.freepik.com/free-vector/underwater-seamless-pattern-with-fishes-seamless-pattern-can-be-used-for-wallpapers-web-page-backgrounds_87506-31.jpg')"
   document.body.appendChild(backgroundDiv)

   var startButton = document.createElement("button")
   startButton.setAttribute('class', 'startBtn')
   startButton.style.cssText = `
      outline: none;
      background-color: rgba(255, 255, 255, 0.8);
      color: rgb(0, 133, 209);
      border-radius: 50px;
      font-family: 'Oswald', sans-serif;
      font-size: 50px;
      border: none;
      cursor: pointer;
      padding-left: 20px;
      padding-right: 20px;
      transition: 1s;
   `
   startButton.innerHTML = "Click to Play"
   backgroundDiv.appendChild(startButton)

   startButton.onmouseover = () => {
      startButton.style.cssText = `
         outline: none;
         background-color: rgb(0, 133, 209);
         color: rgba(255, 255, 255, 0.8);
         border-radius: 50px;
         font-family: 'Oswald', sans-serif;
         font-size: 50px;
         border: none;
         cursor: pointer;
         padding-left: 20px;
         padding-right: 20px;
         transition: 1s;
      `
   }

   startButton.onmouseleave = () => {
      startButton.style.cssText = `
         outline: none;
         background-color: rgba(255, 255, 255, 0.8);
         color: rgb(0, 133, 209);
         border-radius: 50px;
         font-family: 'Oswald', sans-serif;
         font-size: 50px;
         border: none;
         cursor: pointer;
         padding-left: 20px;
         padding-right: 20px;
         transition: 1s;
      `
   }

   startButton.onclick = () => {

      startButton.style.cssText = `
         outline: none;
         background-color: rgb(0, 133, 209);
         color: rgba(255, 255, 255, 0.8);
         border-radius: 50px;
         font-family: 'Oswald', sans-serif;
         font-size: 50px;
         border: none;
         cursor: pointer;
         padding-left: 20px;
         padding-right: 20px;
         transition: 1s;
      `

      var btnClick = new Audio('./sound/buttonClick.wav')
      btnClick.volume = 0.1
      btnClick.play()

      song.loop = true
      song.play()

      document.body.removeChild(backgroundDiv)

      var alive = 3, score = 0
      var maxScore, timeDelay = 900

      var UIPanel = document.createElement('div')
      UIPanel.style.cssText = `
         display: flex;
         align-items: center;
         justify-content: space-around;
         flex-direction: row;
         border: 2px dotted black;
         margin-bottom: 10px;
      `
      document.body.appendChild(UIPanel)

      const css = `
         width: 25%;
         height: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         cursor: pointer;
      `

      var panel4 = document.createElement('div')
      panel4.style.cssText = css
      panel4.style.borderRight = '2px dotted black'
      UIPanel.appendChild(panel4)

      var panel1 = document.createElement('div')
      panel1.style.cssText = css
      panel1.style.borderRight = '2px dotted black'
      UIPanel.appendChild(panel1)

      var panel2 = document.createElement('div')
      panel2.style.cssText = css
      panel2.style.borderRight = '2px dotted black'
      UIPanel.appendChild(panel2)

      var panel3 = document.createElement('div')
      panel3.style.cssText = css
      UIPanel.appendChild(panel3)

      var answerLabel = document.createElement('p')
      answerLabel.innerHTML = 'click on the fish'
      answerLabel.style.fontSize = '23px;'
      panel4.appendChild(answerLabel)

      var aliveLabel = document.createElement('p')
      aliveLabel.innerHTML = `❤ lives: ${alive}`
      panel1.appendChild(aliveLabel)

      var scoreLabel = document.createElement('p')
      scoreLabel.innerHTML = `🍤 score: ${score}`
      panel2.appendChild(scoreLabel)

      var maxScoreLabel = document.createElement('p')
      maxScoreLabel.innerHTML = `🚩 high-score: ${localStorage.getItem("MAX_SCORE") ? localStorage.getItem("MAX_SCORE") : 0}`
      panel3.appendChild(maxScoreLabel)

      var cssParagraph = `
         font-size: 23px;
         font-family: 'Roboto', sans-serif;
      `

      answerLabel.style.cssText += cssParagraph + 'font-size: 23px;'
      aliveLabel.style.cssText += cssParagraph + 'color: red;'
      scoreLabel.style.cssText += cssParagraph + 'color: blue;'
      maxScoreLabel.style.cssText += cssParagraph + 'color: orange;'

      function correct() {
         answerLabel.innerHTML = '😄 Correct 😄'
         answerLabel.style.color = 'green'

         setTimeout(() => {
            answerLabel.style.color = 'black'
            answerLabel.innerHTML = 'click on the fish'
         }, 750)
      }

      function wrong() {
         answerLabel.innerHTML = '😱 Wrong 😱'
         answerLabel.style.color = 'red'

         setTimeout(() => {
            answerLabel.style.color = 'black'
            answerLabel.innerHTML = 'click on the fish'
         }, 750)
      }

      var panel = document.createElement("div")
      panel.style.width = 100 + '%'
      panel.style.height = 655 + 'px'
      panel.style.display = 'flex'
      panel.style.justifyContent = 'center'
      panel.style.cssText += ` 
         cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAD////MzMwAAACZZjP/zJlVVVW7u7vA84tnAAAAAXRSTlMAQObYZgAAAKBJREFUKM990DEKAjEQheHAnuARsn0G7eOOYC/ZAywyB7Cx9/6NmTS+RDBdfr6ZYkJQLYHfIq84lAvwjBxuwAomqm+AyZabQeGwYiCLAEAqFLKXB830YkzEw0wSk008OOG9ZjoOGTDsTWaITM5NQJkcAA9d6+4hfkndbSZ2zMQDdN6SfgLN3PsZKIgIstH5pb1a+f7+H8Op/hdLJ4GJj3wAtEwihNsbCogAAAAASUVORK5CYII='), auto;
      `
      panel.style.marginTop = '10px'
      document.body.appendChild(panel)

      var tbl = document.createElement('table')
      tbl.style.border = '2.5px inset black'
      tbl.style.borderCollapse = 'collapse'
      var tBody = document.createElement('tbody')
      tBody.style.borderRadius = '25px'
      tbl.append(tBody)
      panel.appendChild(tbl)

      setInterval(() => {

         setTimeout(() => {
            tBody.innerHTML = ''
         }, timeDelay - 50)

         for (var i = 0; i < matrixSize; i++) {
            let row = document.createElement('tr')
            for (var j = 0; j < matrixSize; j++) {

               let random = Math.floor(Math.random() * 22)
               let color = random == 0 ? "transparent" : "white"
               let backgroundImg = random == 0 ? getRandomImage() : null

               let cell = document.createElement('td')
               cell.style.height = 60 + 'px'
               cell.style.width = 60 + 'px'
               cell.style.border = '1px inset #000000'
               cell.style.backgroundColor = color
               cell.style.backgroundRepeat = 'no-repeat'
               cell.style.backgroundSize = 'cover'
               cell.style.margin = '5px'
               cell.style.borderRadius = '50%'
               cell.style.cssText += ` 
                  cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAD////MzMwAAACZZjP/zJlVVVW7u7vA84tnAAAAAXRSTlMAQObYZgAAAKBJREFUKM990DEKAjEQheHAnuARsn0G7eOOYC/ZAywyB7Cx9/6NmTS+RDBdfr6ZYkJQLYHfIq84lAvwjBxuwAomqm+AyZabQeGwYiCLAEAqFLKXB830YkzEw0wSk008OOG9ZjoOGTDsTWaITM5NQJkcAA9d6+4hfkndbSZ2zMQDdN6SfgLN3PsZKIgIstH5pb1a+f7+H8Op/hdLJ4GJj3wAtEwihNsbCogAAAAASUVORK5CYII='), auto;
               `
               cell.setAttribute('class', 'cell')
               cell.onmouseover = () => {
                  if (random == 0) {
                     cell.style.backgroundColor = 'lightgreen'
                  } else {
                     cell.style.backgroundColor = '#FFF39C'
                  }
               }

               cell.onmouseleave = () => {
                  cell.style.backgroundColor = 'white'
               }

               if (random == 0) {
                  var image = document.createElement('img')
                  image.src = backgroundImg
                  image.style.cssText = `
                     width: 60px;
                     height: 60px; 
                  `
                  cell.appendChild(image)
               }

               cell.onclick = async () => {

                  if (random == 0) {
                     ++score

                     let audio = new Audio('./sound/newScore.mp3')
                     audio.volume = 0.5
                     audio.play()

                     scoreLabel.innerHTML = `🍤 score: ${score}`
                     cell.style.backgroundColor = 'whitegreen'
                     cell.style.cssText += ''
                     cell.innerHTML = ''
                     cell.style.cursor = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png'), auto"
                     correct()
                     random = 1

                  } else if (random > 0) {
                     --alive

                     let audio = new Audio('./sound/wrong.wav')
                     audio.volume = 0.5
                     audio.play()

                     cell.style.cursor = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/meh.png'), auto"
                     aliveLabel.innerHTML = `❤ lives: ${alive}`
                     cell.style.backgroundColor = 'red'
                     wrong()

                     setTimeout(() => {
                        if (alive == 0) {
                           let audio = new Audio('./sound/gameOver.wav')
                           audio.volume = 0.75
                           audio.play()
                           song.pause()

                           maxScore = localStorage.getItem("MAX_SCORE")
                           if (maxScore == null && score != 0) {
                              maxScore = score
                              localStorage.setItem("MAX_SCORE", maxScore)
                           }
                           if (score > localStorage.getItem("MAX_SCORE")) {
                              new Audio('./sound/newScore.mp3').play()
                              maxScore = score
                              localStorage.setItem("MAX_SCORE", maxScore)
                           }
                           setTimeout(() => {
                              alert (
                                 `GAME OVER!\n` +
                                 `Score: ${score},\n` +
                                 `High-Score: ${localStorage.getItem("MAX_SCORE") ? localStorage.getItem("MAX_SCORE") : 0}.`
                              )
                              window.location.reload()
                           }, 200)
                        }
                     }, 100)
                  }
               }
               row.appendChild(cell)
            }
            tBody.appendChild(row)
         }
      }, timeDelay)
   }
} 
