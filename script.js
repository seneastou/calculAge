
 function calcAge() {

    const birth = document.getElementById("date").value;
    const birthDate = new Date(birth);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age === 0) {

        document.getElementById("result").innerText = "Vous avez 0 an.";
    } else {

        document.getElementById("result").innerText = "Vous avez " + age + " an(s).";
    }
}
   

