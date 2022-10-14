const btnSubmit = document.querySelector('#submit')
const inputJawab = document.querySelector('#input-jawab')
const selectSoal = document.querySelector('#select-soal')

// Mendatar
const D2 = document.querySelectorAll('.d2')
const D4 = document.querySelectorAll('.d4')
const D5 = document.querySelectorAll('.d5')
const D6 = document.querySelectorAll('.d6')
// Menurun
const M1 = document.querySelectorAll('.m1')
const M2 = document.querySelectorAll('.m2')
const M3 = document.querySelectorAll('.m3')

btnSubmit.addEventListener('click', function () {    
    // Pengecekan Soal dan Jawaban
    let jawab = inputJawab.value.toLowerCase();
    let soal = selectSoal.value

    if (jawab === '') {
        alert('Mohon isi terlebih dahulu!')
    }
    else if (soal === '1-menurun' && jawab === 'takjil') {
        alert('jawaban benar');
        for (let i = 0; i < M1.length; i++) {
            M1[i].innerHTML = jawab[i]
            M1[i].style.backgroundColor = 'rgb(15, 202, 15)'
        }
    }
    else if (soal === '2-mendatar' && jawab === 'tarawih') {
        alert('jawaban benar');
        for (let i = 0; i < D2.length; i++) {
            D2[i].innerHTML = jawab[i]
            D2[i].style.backgroundColor = 'rgb(15, 202, 15)'
        }
    }
    else if (soal === '2-menurun' && jawab === 'tadarus') {
        alert('jawaban benar');
        for (let i = 0; i < M2.length; i++) {
            M2[i].innerHTML = jawab[i]
            M2[i].style.backgroundColor = 'rgb(15, 202, 15)'
        }
    }
    else if (soal === '3-menurun' && jawab === 'idulfitri') {
        alert('jawaban benar');
        for (let i = 0; i < M3.length; i++) {
            M3[i].innerHTML = jawab[i]
            M3[i].style.backgroundColor = 'rgb(15, 202, 15)'
        }
    }
    else if (soal === '4-mendatar' && jawab === 'ramadan') {
        alert('jawaban benar');
        for (let i = 0; i < D4.length; i++) {
            D4[i].innerHTML = jawab[i]
            D4[i].style.backgroundColor = 'rgb(15, 202, 15)'
        }
    }
    else if (soal === '5-mendatar' && jawab === 'haus') {
        alert('jawaban benar');
        for (let i = 0; i < D5.length; i++) {
            D5[i].innerHTML = jawab[i]
            D5[i].style.backgroundColor = 'rgb(15, 202, 15)'
        }
    }
    else if (soal === '6-mendatar' && jawab === 'ngabuburit') {
        alert('jawaban benar');
        for (let i = 0; i < D6.length; i++) {
            D6[i].innerHTML = jawab[i]
            D6[i].style.backgroundColor = 'rgb(15, 202, 15)'
        }
    }
    else {
        alert('jawaban salah');
    }

})
