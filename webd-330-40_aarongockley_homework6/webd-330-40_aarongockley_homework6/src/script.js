/* 

1. Use either fetch or XMLHttpRequest to pull gallery data from https://starfruit.champlain.edu/webd330/week6/api/ajax/places. 

2. Dynamically render markup similar to the following for each place into the "places" div.

<div class="col">
    <div class="card shadow-sm">
        <img src="IMAGE URL" class="card-img-top">
        <div class="card-body">
            <p class="card-text">IMAGE TAGLINE</p>
            <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">IMAGE LOC</small>
            </div>
        </div>
    </div>
</div>`

*/

(async function() { //async function
    try {
        const response = await fetch('https://starfruit.champlain.edu/webd330/week6/api/ajax/places/index.php'); //fetch request
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); //awaits response
        const info = data.map(function(place) { //calls a function using a map.
          return  `<div class="col">
              <div class="card shadow-sm">
                <img src="${place.image}" class="card=img-top">
                   <div class="card-body">
                      <p class ="card-text">${place.tagline}</p>
                      <div class="d-flex justify-content-between align-items-center">

                <small class="text-muted">${place.loc}</small>

            </div>

        </div>

    </div>

</div>` //generates the html
});
    html = info.join(" "); //removes excess ","
    document.getElementById("places").innerHTML = html; //this loads the html into the places ID
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error); //throws error if something did not work. 
    }
})();