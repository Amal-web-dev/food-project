const slides = document.querySelectorAll('.offer__slide')
const offer__slider_prev = document.querySelector('.offer__slider-prev')
const offer__slider_next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')

let slideIndex = 0

let totalOne = 0

showSlides(slideIndex)

function showSlides(n) {
  if (slideIndex > slides.length - 1) {
    slideIndex = 0
    totalOne = 0
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1
    totalOne = slides.length - 1
  }

  current.innerHTML = (slideIndex + 1).toString().padStart(2, '0')
  total.innerHTML = slides.length

  slides.forEach(el => el.style.display = "none")
  slides[slideIndex].style.display = "block"
  slides[slideIndex].classList.add('fade')
}

offer__slider_next.onclick = () => {
  slideIndex++
  showSlides(slideIndex)
}

offer__slider_prev.onclick = () => {
  slideIndex--
  showSlides(slideIndex)
}



  let tabcontent = document.querySelectorAll('.tabcontent')
let tabheaderItem = document.querySelectorAll('.tabheader__item')

tabcontent.forEach((tab, index) => {
        if (index === 0) {
          tab.style.display = 'block'
        } else {
          tab.style.display = 'none'
        }
      })

tabheaderItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    tabcontent.forEach(tab => {
      tab.style.display = 'none'
    })

    tabcontent[index].style.display = 'block'

    item.style.fontSize = '20px'
    item.style.fontWeight = '600'
    item.style.color = 'black'

    tabheaderItem.forEach((tab, i) => {
      if (i !== index) {
        tab.style.fontSize = '16px'
        tab.style.fontWeight = 'normal'

      }
    })
  })
})

let modal = document.querySelector('.modal-window')
let modalBg = document.querySelector('.modal-back')
let modalOpen = document.querySelectorAll('.btn')
let modalClose = document.querySelectorAll('.modal-close')

modalOpen.forEach(btn => {
  btn.onclick = (event) => {
    let right = event.clientX
    let top = event.clientY

    modal.style.top = `${top}px`
    modal.style.right = `${right}px` - 10

    modal.style.display = 'flex'
    modalBg.style.display = 'block'
    document.body.style.overflow = 'hidden';
  }
});

modalClose.forEach(btn => {
  btn.onclick = () => {
    modal.style.display = 'none'
    modalBg.style.display = 'none'
    document.body.style.overflow = 'auto';
  }
});

modalBg.onclick = () => {
  modal.style.display = 'none'
  modalBg.style.display = 'none'
  document.body.style.overflow = 'auto';
}