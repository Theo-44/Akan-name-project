const maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleName = ["Akosua", "Adwoa", "Abenaa", "Akuua", "Yaa", "Afua", "Ama"];
const dayofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday", "Sunday"];

letoutputTag = document.getElementById('output');

function getName(event){
    event.preventDefault();

    // validate data
    /**
     * Ensure that the submit button has sent us data
     */
    if (document.getElementById('date').value === '') {
        output.innerHTML = "Please insert a date!";
    } else {
        let bDate = document.getElementById('date').value; // if not empty assign date to avariable

        if (document.getElementById('gender').value === '') {
            output.innerHTML = "Please choose your gender!";
        } else {

            const gender = document.getElementById('gender').value; // if not empty assign gender to avariable

                // If data is present proceed to the next step >>
                if (bDate !== '' && gender != '') {
                    bDate = Date.parse(bDate)
                    let myBirthday = new Date(bDate);
                    let day = myBirthday.getDay(); // use this day to get current day of the week from the date given

                    /**
                     * day is in integer format but the date object provides that 0 is sunday and 6 is saturday
                     * Thus, since the list of names is arranged in the order of the days of the week
                     * then all we need to do is check if the day given is equal to the index of either the male or female list.
                     */

                    let message;
                    if (gender == 'Male') {
                        // use for loop
                        for (let i = 0; i < maleName.length; i++) {
                            if (i == day) {
                                // call message and break
                                echoName(day, gender, femaleName[i])
                                break
                            }                            
                        }
                    } else {
                        // By default this is female
                        // use for loop
                        for (let i = 0; i < maleName.length; i++) {
                            if (i == day) {
                                // call message and break
                                echoName(day, gender, femaleName[i])
                                break
                            }                            
                        }
                    }                    
                   
                    document.getElementById("myForm").reset();
                }
        }
    }

    

   

    //echoName(day, gender, name);
}

function echoName(day, gender, name) {
    let message = `Born on: <b>${weekDay(day)}</b> you are <b>${gender}</b> your name is <b>${name}</b>`;
    output.innerHTML = message;
}


function weekDay(day) {
    /**
     * Use this function to assign the integer day value to the specific day
     */

     let ourDay;
    // use for loop
    for (let i = 0; i < dayofWeek.length; i++) {
        if (i == day) {
            // call message and break
            ourDay = dayofWeek[i];
            break
        }  
    }
    
    return ourDay;

}