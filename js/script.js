// The names listed below are ordered by days from Sunday
const maleName = ["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

femaleName[day]
letoutputTag = document.getElementById('output')


function getName(event){
    event.preventDefault()
    let date = document.getElementById('date').value
    let gender = document.getElementById('gender').value
    let myBirthday = new Date(date).toDateString()
    let day = myBirthday.split(' ')[0]
}


}

    let message = `Born on:  ${day} you are ${gender} your name is ${name}`
    outputTag.innerHTML = message
}

