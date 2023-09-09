const span = document.querySelector('h1 span')
const span2 = document.querySelector('h2 span')

const wordsList = ['Developer.', 'Coder.', 'Teacher.', 'YouTuber.']
const wordsList2 = ['Student.', 'Dancer.', 'Singer.', 'Designer.']

function autoType(wordsList, element, time) {
  let wordIndex = 0
  let characterIndex = 0
  let skipUpdate = 0
  let reverseType = false

  const intervalId = setInterval(() => {
    if (skipUpdate) {
      skipUpdate--
      return
    }

    if (!reverseType) {
      skipUpdate = 2
      element.innerText = element.innerText + wordsList[wordIndex][characterIndex]
      characterIndex++
    } else {
      element.innerText = element.innerText.slice(0, element.innerText.length - 1)
      characterIndex--
    }

    if (characterIndex === wordsList[wordIndex].length) {
      skipUpdate = 6
      reverseType = true
    }

    if (element.innerText.length === 0 && reverseType) {
      reverseType = false
      wordIndex++
    }

    if (wordIndex === wordsList.length) {
      wordIndex = 0
    }
  }, 100)
}

autoType(wordsList2, span)
// autoType(wordsList, span2)