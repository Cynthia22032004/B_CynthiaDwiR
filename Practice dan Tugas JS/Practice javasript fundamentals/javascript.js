// Array 
let catBreeds = ["Persian", "Siamese", "Bengal", "Sphynx", "Maine Coon"];

// Object 
let catDetails = {
    name: "British Shorthair",
    origin: "UK",
    age: 3, 
    isFriendly: true, 
    vaccinated: true 
};

function showCatBreeds() {
    let breedDiv = document.getElementById("catBreeds");
    breedDiv.innerHTML = "<h2>List of Cat Breeds</h2>"; 

    catBreeds.forEach(breed => {
        breedDiv.innerHTML += `<p>${breed}</p>`; 
    });

    console.log("Displayed list of cat breeds.");
}

function showCatDetails() {
    let detailsDiv = document.getElementById("catDetails");
    detailsDiv.innerHTML = "<h2>Cat Details</h2>";

    
    detailsDiv.innerHTML += `
        <p>Name: ${catDetails.name}</p>
        <p>Origin: ${catDetails.origin}</p>
        <p>Age: ${catDetails.age} years</p>
        <p>Is Friendly: ${catDetails.isFriendly ? "Yes" : "No"}</p>
        <p>Vaccinated: ${catDetails.vaccinated ? "Yes" : "No"}</p>
    `;

    
    if (catDetails.origin === "UK" && catDetails.vaccinated) {
        detailsDiv.innerHTML += `<p>This cat is from the UK and is vaccinated.</p>`;
    } else if (!catDetails.isFriendly) {
        detailsDiv.innerHTML += `<p>This cat might be less friendly.</p>`;
    }

    console.log("Displayed details of a specific cat.");
}
