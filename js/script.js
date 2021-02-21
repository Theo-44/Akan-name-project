// The names listed below are ordered by days from Sunday
const mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function getName(event) {
    event.preventDefault()
    let date = document.getElementById('date').value
    let gender = document.getElementById('gender').value
    let myBirthday = new Date(date).toDateString()
    let day = myBirthday.split(' ')[0]
    let name;
    console.log(gender, date, myBirthday)


    if (gender === null && day === "") {
        alert (`Please input a date and select your gender`)
    }else if (gender === 'female' && day === "Sun") {
        name = fNames[0]
        alert(`Your Akan name is: ${fNames[0]}`)
    } else if (gender === 'female' && day === "Mon") {
        name = fNames[1]
        alert(`Your Akan name is: ${fNames[1]}`)
    } else if (gender === 'female' && day === "Tue") {
        name = fNames[2]
        alert(`Your Akan name is: ${fNames[2]}`)
    } else if (gender === 'female' && day === "Wed") {
        name = fNames[3]
        alert(`Your Akan name is: ${fNames[3]}`)
    } else if (gender === 'female' && day === "Thu") {
        name = fNames[4]
        alert(`Your Akan name is: ${fNames[4]}`)
    } else if (gender === 'female' && day === "Fri") {
        name = fNames[5]
        alert(`Your Akan name is: ${fNames[5]}`)
    } else if (gender === 'female' && day === "Sat") {
        name = fNames[6]
        alert(`Your Akan name is: ${fNames[6]}`)
    }
    else if (gender === 'male' && day === "Sun") {
        name = mNames[0]
        alert(`Your Akan name is: ${mNames[0]}`)
    } else if (gender === 'male' && day === "Mon") {
        name = mNames[1]
        alert(`Your Akan name is: ${mNames[1]}`)
    } else if (gender === 'male' && day === "Tue") {
        name = mNames[2]
        alert(`Your Akan name is: ${mNames[2]}`)
    } else if (gender === 'male' && day === "Wed") {
        name = mNames[3]
        alert(`Your Akan name is: ${mNames[3]}`)
    } else if (gender === 'male' && day === "Thu") {
        name = mNames[4]
        alert(`Your Akan name is: ${mNames[4]}`)
    } else if (gender === 'male' && day === "Fri") {
        name = mNames[5]
        alert(`Your Akan name is: ${mNames[5]}`)
    } else if (gender === 'male' && day === "Sat") {
        name = mNames[6]
        alert(`Your Akan name is: ${mNames[6]}`)
    }
    let outputTag = document.getElementById("output")
    let message = name
    outputTag.innerHTML = message
}