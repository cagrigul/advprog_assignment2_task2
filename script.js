require(["esri/WebScene", "esri/layers/CSVLayer", "esri/views/SceneView"], (
    WebScene,
    CSVLayer,
    SceneView
) => {
    // URL of the STL Crime CSV file
    const url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";

    // Popup template for the CSV layer
    const template = {
        title: "Criminal Event",
        content: "Crime: {Crime}<br>District: {District}<br>Neighborhood: {Neighborhood}<br>Location: {ILEADSStreet}"
    };

    // CSV layer
    const csvLayer = new CSVLayer({
        url: url,
        title: "St. Louis Crime Data",
        popupTemplate: template,
        renderer: {
            type: "simple", // autocasts as new SimpleRenderer()
            symbol: {
                type: "simple-marker", // Use simple-marker for 2D map
                color: "yellow", // Symbol color
                size: "10px", // Symbol size
                outline: {  // autocasts as new SimpleLineSymbol()=
                  width: 1,
                  color: "red"
    }
            }
        },
        latitudeField: "Latitude", // Specify the latitude field
        longitudeField: "Longitude" // Specify the longitude field
    });

    // WebScene
    const map = new WebScene({
        basemap: "dark-gray-vector" // Choose an appropriate basemap
    });

    map.add(csvLayer);

    // SceneView
    const view = new SceneView({
        container: "viewDiv",
        map: map,
        center: [-90.1994, 38.6270], // Center on St. Louis
        zoom: 12 // Adjust zoom level as needed
    });
});
