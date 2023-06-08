
let userData = [];


const fetchUser = async () => {

 await   fetch("https://randomuser.me/api/?results=24")
    .then((res)=> res.json())
    .then((data)=> userData = data.results)
    //.then(()=> console.log(userData))

   // setTimeout(() => {
    console.log(userData);
 //   }, 1000);
}

const userDisplay = async () => {
  await fetchUser();

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return newDate;

  }

  const dayCalc = (date) => {
        let today = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric", 
            hour: "numeric",
        });
        return today;
        /*let TodayTimestamp = Date.parse(today);
        let timestamp = Date.parse(date);
        return Math.ceil((TodayTimestamp - timestamp) / 86400000);*/

  }

    document.body.innerHTML = userData.map(
        (user) => 
    `
    <div class="card"> 
    <img src="${user.picture.large}" alt="photo de ${user.name.last}">
    <h3>${user.name.first} ${user.name.last}</h3>
    <p>${dateParser(user.dob.date)}</p>
    <h5>${user.location.city}, ${user.location.country}</h5>
    <em>Membre depuis le ${dayCalc(user.registered.date)} </em>
    </div>
    `
    ).join("");
};

userDisplay();