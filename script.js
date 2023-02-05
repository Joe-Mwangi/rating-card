const num = document.querySelectorAll('.no')
const btn = document.querySelector('#btn')
const number = document.querySelector('#number')
const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')


num.forEach(no =>{
    no.addEventListener('click', element => {
        element.currentTarget.classList.add("active")
        let = currentNo = no.textContent
          btn.addEventListener('click', () => {
               card1.style.display = "none"
               card2.style.display = "block"
               number.textContent = currentNo
          })
          num.forEach(item => {
            if(item !== no) {
                item.classList.remove('active')
            }
           })
    })
})