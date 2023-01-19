// map from https://live.amcharts.com/

var map = AmCharts.makeChart("mapdiv", {
  type: "map",
  theme: "dark",
  projection: "mercator",
  panEventsEnabled: true,
  backgroundColor: "white",
  backgroundAlpha: 1,
  zoomControl: {
    zoomControlEnabled: true,
  },
  dataProvider: {
    map: "worldHigh",
    getAreasFromMap: true,
    areas: [
      {
        id: "AT",
        showAsSelected: true,
      },
      {
        id: "BE",
        showAsSelected: true,
      },
      {
        id: "CZ",
        showAsSelected: true,
      },
      {
        id: "FR",
        showAsSelected: true,
      },
      {
        id: "DE",
        showAsSelected: true,
      },
      {
        id: "HU",
        showAsSelected: true,
      },
      {
        id: "IT",
        showAsSelected: true,
      },
      {
        id: "NL",
        showAsSelected: true,
      },
      {
        id: "PL",
        showAsSelected: true,
      },
      {
        id: "PT",
        showAsSelected: true,
      },
      {
        id: "ES",
        showAsSelected: true,
      },
      {
        id: "CH",
        showAsSelected: true,
      },
      {
        id: "GB",
        showAsSelected: true,
      },
      {
        id: "VA",
        showAsSelected: true,
      },
      {
        id: "BS",
        showAsSelected: true,
      },
      {
        id: "CA",
        showAsSelected: true,
      },
      {
        id: "KY",
        showAsSelected: true,
      },
      {
        id: "CU",
        showAsSelected: true,
      },
      {
        id: "JM",
        showAsSelected: true,
      },
      {
        id: "MX",
        showAsSelected: true,
      },
      {
        id: "US",
        showAsSelected: true,
      },
      {
        id: "PH",
        showAsSelected: true,
      },
      {
        id: "KR",
        showAsSelected: true,
      },
    ],
  },
  areasSettings: {
    autoZoom: true,
    color: "#B4B4B7",
    colorSolid: "#fecacc",
    selectedColor: "#fecacc",
    outlineColor: "#666666",
    rollOverColor: "grey",
    rollOverOutlineColor: "#000000",
  },
});
