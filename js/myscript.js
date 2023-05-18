const submit = document.getElementById('clickMe')

submit.addEventListener('click',()=>{
let umur        = document.getElementById("umur").value,
    tinggiBadan = document.getElementById("height").value,
    beratBadan  = document.getElementById("weight").value,
	hasil       = document.getElementById('hasil')

	hasilPria   = 66.5 + (13.75*beratBadan) + (5.003*tinggiBadan) - (6.75*umur)
	hasilWanita = 655 + (9.563*beratBadan) + (9.5*tinggiBadan) - (4.6*umur)
	
	hasil.innerHTML = `${Math.floor(hasilPria)} kkal`
})
