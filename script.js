// Write your JavaScript code here!
window.addEventListener("load", function (){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
    
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" 
      || cargoMass.value === "") {
         alert ("All fields are required!");
        

         event.preventDefault();
      
      }
      if (isNaN(cargoMass.value) || isNaN(fuelLevel.value)) {
         alert ("Please provide a ## for Cargo Mass and Fuel Level");

         event.preventDefault();
      };

      if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
            alert ("Please provide text for Pilot and Co-Pilot names");

         event.preventDefault();
      };


      let launchStatus = document.getElementById('launchStatus')
      let faultyItems = document.getElementById('faultyItems')
      let pilotStatus = document.getElementById(`${pilotName}`)
      let copilotStatus = document.getElementById(`${copilotName}`)
      let fuelStatus = document.getElementById('fuelStatus')
      let cargoStatus = document.getElementById('cargoStatus')
      
      if (fuelLevel.value === 890) {
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = 'red';
      
         event.preventDefault();
      };
      
      if (cargoMass.value === 0) {
         launchStatus.innerHTML = "All fields required"
         launchStatus.style.color = 'red';
      
         event.preventDefault();
      };


      function lowLevels () {
         faultyItems.style.visibility = 'visible';
      if (fuelLevel.value < 10000) {
         fuelStatus.innerHTML = "There is not enough fuel for the journey."
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = 'red';
                              } 
      else {  launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = 'green';
            } 
         }
      
      lowLevels();


      function highLevels () {   
         if (cargoStatus > 10000) {
            faultyItems.getElementById().visibility = "visible";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
            launchStatus.getElementById().innerHTML = "Shuttle not ready for launch"
            launchStatus.getElementById().style.color = 'red';
                                 }
         else {launchStatus.innerHTML= "Shuttle is ready for launch";
               launchStatus.style.color = 'green';
               }
            }
         highLevels();
   })

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
  
   const div = document.getElementById("missionTarget");
   div.innerHTML =
   `<h2>Mission Destination</h2>
   <ol>
   <li>Name: ${json[0].name}</li>
     <li>Diameter: ${json[0].diameter} </li>
     <li>Star: ${json[0].star}</li>
     <li>Distance from Earth: ${json[0].distance}</li>
    <li>Number of Moons: ${json[0].moons}</li>
   </ol>
   <img src="${json[0].image}">`;


})

   
});


});