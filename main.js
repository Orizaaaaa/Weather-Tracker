let InputKyword = document.querySelector('.input-kyword')
let buttonSearch = document.querySelector('.button-search')
buttonSearch.addEventListener('click', function () {
    fetch(' https://api.openweathermap.org/data/2.5/weather?q=' + InputKyword.value + '&appid=705a6deb5cbd0a027f801d77faf8af73&units=matric ')
        .then(response => response.json())
        .then((response) =>
            function () {
                let result = document.querySelector('.result')
                result.innerHTML = ` `
            })
})