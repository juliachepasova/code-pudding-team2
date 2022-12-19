const averageViewershipBySeason = [
  ["1", 24791666.6666666679],
  ["2", 31720833.3333333321],
  ["3", 26081200.0],
  ["4", 24947916.6666666679],
  ["5", 24747500.0],
  ["6", 23045200.0],
  ["7", 22051666.6666666679],
  ["8", 26720000.0],
  ["9", 23928333.3333333321],
  ["10", 26126666.6666666679],
];

const highestViewedDirectors = [
  ["Michael Lembeck", 52900000.0],
  ["Kevin S. Bright", 52460000.0],
  ["James Burrows", 33600000.0],
];

const lowestViewedDirectors = [
  ["Kevin S. Bright & Gary Halvorson", 17230000.0],
  ["Arlene Sanford", 18200000.0],
  ["Todd Holland", 21880000.0],
];

const viewsPerEpisode = [
  { x: "E1", y: "S1", heat: 21500000.0 },
  { x: "E2", y: "S1", heat: 20200000.0 },
  { x: "E3", y: "S1", heat: 19500000.0 },
  { x: "E4", y: "S1", heat: 19700000.0 },
  { x: "E5", y: "S1", heat: 18600000.0 },
  { x: "E6", y: "S1", heat: 18200000.0 },
  { x: "E7", y: "S1", heat: 23500000.0 },
  { x: "E8", y: "S1", heat: 21100000.0 },
  { x: "E9", y: "S1", heat: 23100000.0 },
  { x: "E10", y: "S1", heat: 19900000.0 },
  { x: "E11", y: "S1", heat: 26600000.0 },
  { x: "E12", y: "S1", heat: 24000000.0 },
  { x: "E13", y: "S1", heat: 25800000.0 },
  { x: "E14", y: "S1", heat: 23800000.0 },
  { x: "E15", y: "S1", heat: 24800000.0 },
  { x: "E16", y: "S1", heat: 26100000.0 },
  { x: "E17", y: "S1", heat: 30500000.0 },
  { x: "E18", y: "S1", heat: 30400000.0 },
  { x: "E19", y: "S1", heat: 29400000.0 },
  { x: "E20", y: "S1", heat: 30000000.0 },
  { x: "E21", y: "S1", heat: 28400000.0 },
  { x: "E22", y: "S1", heat: 29900000.0 },
  { x: "E23", y: "S1", heat: 28700000.0 },
  { x: "E24", y: "S1", heat: 31300000.0 },
  { x: "E1", y: "S2", heat: 32100000.0 },
  { x: "E2", y: "S2", heat: 29800000.0 },
  { x: "E3", y: "S2", heat: 30200000.0 },
  { x: "E4", y: "S2", heat: 28100000.0 },
  { x: "E5", y: "S2", heat: 28300000.0 },
  { x: "E6", y: "S2", heat: 30200000.0 },
  { x: "E7", y: "S2", heat: 30500000.0 },
  { x: "E8", y: "S2", heat: 32900000.0 },
  { x: "E9", y: "S2", heat: 27800000.0 },
  { x: "E10", y: "S2", heat: 32200000.0000000037 },
  { x: "E11", y: "S2", heat: 31600000.0 },
  { x: "E12", y: "S2", heat: 52900000.0 },
  { x: "E13", y: "S2", heat: 52900000.0 },
  { x: "E14", y: "S2", heat: 33600000.0 },
  { x: "E15", y: "S2", heat: 32900000.0 },
  { x: "E16", y: "S2", heat: 31100000.0 },
  { x: "E17", y: "S2", heat: 30200000.0 },
  { x: "E18", y: "S2", heat: 30100000.0 },
  { x: "E19", y: "S2", heat: 31200000.0 },
  { x: "E20", y: "S2", heat: 27400000.0 },
  { x: "E21", y: "S2", heat: 24700000.0 },
  { x: "E22", y: "S2", heat: 25500000.0 },
  { x: "E23", y: "S2", heat: 26100000.0 },
  { x: "E24", y: "S2", heat: 29000000.0 },
  { x: "E1", y: "S3", heat: 26760000.0 },
  { x: "E2", y: "S3", heat: 26730000.0 },
  { x: "E3", y: "S3", heat: 25230000.0 },
  { x: "E4", y: "S3", heat: 26100000.0 },
  { x: "E5", y: "S3", heat: 23250000.0 },
  { x: "E6", y: "S3", heat: 23270000.0 },
  { x: "E7", y: "S3", heat: 27360000.0 },
  { x: "E8", y: "S3", heat: 28690000.0 },
  { x: "E9", y: "S3", heat: 29280000.0 },
  { x: "E10", y: "S3", heat: 25100000.0 },
  { x: "E11", y: "S3", heat: 29800000.0 },
  { x: "E12", y: "S3", heat: 29610000.0 },
  { x: "E13", y: "S3", heat: 28030000.0 },
  { x: "E14", y: "S3", heat: 28910000.0 },
  { x: "E15", y: "S3", heat: 27250000.0 },
  { x: "E16", y: "S3", heat: 28260000.0 },
  { x: "E17", y: "S3", heat: 25840000.0 },
  { x: "E18", y: "S3", heat: 28070000.0 },
  { x: "E19", y: "S3", heat: 23650000.0 },
  { x: "E20", y: "S3", heat: 24360000.0 },
  { x: "E21", y: "S3", heat: 23220000.0 },
  { x: "E22", y: "S3", heat: 22630000.0 },
  { x: "E23", y: "S3", heat: 24170000.0 },
  { x: "E24", y: "S3", heat: 23070000.0 },
  { x: "E25", y: "S3", heat: 23390000.0 },
  { x: "E1", y: "S4", heat: 29430000.0 },
  { x: "E2", y: "S4", heat: 25540000.0 },
  { x: "E3", y: "S4", heat: 23980000.0 },
  { x: "E4", y: "S4", heat: 24310000.0 },
  { x: "E5", y: "S4", heat: 24350000.0 },
  { x: "E6", y: "S4", heat: 25680000.0 },
  { x: "E7", y: "S4", heat: 26350000.0 },
  { x: "E8", y: "S4", heat: 26760000.0 },
  { x: "E9", y: "S4", heat: 23890000.0 },
  { x: "E10", y: "S4", heat: 23220000.0 },
  { x: "E11", y: "S4", heat: 23660000.0 },
  { x: "E12", y: "S4", heat: 27140000.0 },
  { x: "E13", y: "S4", heat: 25270000.0 },
  { x: "E14", y: "S4", heat: 25080000.0 },
  { x: "E15", y: "S4", heat: 24440000.0 },
  { x: "E16", y: "S4", heat: 23130000.0 },
  { x: "E17", y: "S4", heat: 23220000.0 },
  { x: "E18", y: "S4", heat: 21720000.0 },
  { x: "E19", y: "S4", heat: 21760000.0 },
  { x: "E20", y: "S4", heat: 21940000.0 },
  { x: "E21", y: "S4", heat: 21510000.0 },
  { x: "E22", y: "S4", heat: 23150000.0 },
  { x: "E23", y: "S4", heat: 31610000.0 },
  { x: "E24", y: "S4", heat: 31610000.0 },
  { x: "E1", y: "S5", heat: 31120000.0 },
  { x: "E2", y: "S5", heat: 25360000.0 },
  { x: "E3", y: "S5", heat: 26820000.0 },
  { x: "E4", y: "S5", heat: 24090000.0 },
  { x: "E5", y: "S5", heat: 25870000.0 },
  { x: "E6", y: "S5", heat: 24990000.0 },
  { x: "E7", y: "S5", heat: 24440000.0 },
  { x: "E8", y: "S5", heat: 23920000.0 },
  { x: "E9", y: "S5", heat: 23030000.0 },
  { x: "E10", y: "S5", heat: 23670000.0 },
  { x: "E11", y: "S5", heat: 27020000.0 },
  { x: "E12", y: "S5", heat: 24820000.0 },
  { x: "E13", y: "S5", heat: 24920000.0 },
  { x: "E14", y: "S5", heat: 27700000.0 },
  { x: "E15", y: "S5", heat: 29310000.0 },
  { x: "E16", y: "S5", heat: 26020000.0 },
  { x: "E17", y: "S5", heat: 24480000.0 },
  { x: "E18", y: "S5", heat: 21880000.0 },
  { x: "E19", y: "S5", heat: 20850000.0 },
  { x: "E20", y: "S5", heat: 19630000.0 },
  { x: "E21", y: "S5", heat: 20920000.0 },
  { x: "E22", y: "S5", heat: 21280000.0 },
  { x: "E23", y: "S5", heat: 25900000.0 },
  { x: "E24", y: "S5", heat: 25900000.0 },
  { x: "E1", y: "S6", heat: 27740000.0 },
  { x: "E2", y: "S6", heat: 22950000.0 },
  { x: "E3", y: "S6", heat: 21600000.0 },
  { x: "E4", y: "S6", heat: 21070000.0 },
  { x: "E5", y: "S6", heat: 22390000.0 },
  { x: "E6", y: "S6", heat: 23590000.0 },
  { x: "E7", y: "S6", heat: 22750000.0 },
  { x: "E8", y: "S6", heat: 22140000.0 },
  { x: "E9", y: "S6", heat: 19170000.0 },
  { x: "E10", y: "S6", heat: 22430000.0 },
  { x: "E11", y: "S6", heat: 22260000.0 },
  { x: "E12", y: "S6", heat: 22330000.0 },
  { x: "E13", y: "S6", heat: 24140000.0 },
  { x: "E14", y: "S6", heat: 23820000.0 },
  { x: "E15", y: "S6", heat: 25890000.0 },
  { x: "E16", y: "S6", heat: 25890000.0 },
  { x: "E17", y: "S6", heat: 22210000.0 },
  { x: "E18", y: "S6", heat: 20520000.0 },
  { x: "E19", y: "S6", heat: 21460000.0 },
  { x: "E20", y: "S6", heat: 18810000.0 },
  { x: "E21", y: "S6", heat: 20630000.0 },
  { x: "E22", y: "S6", heat: 20010000.0 },
  { x: "E23", y: "S6", heat: 20870000.0 },
  { x: "E24", y: "S6", heat: 30730000.0 },
  { x: "E25", y: "S6", heat: 30730000.0 },
  { x: "E1", y: "S7", heat: 25540000.0 },
  { x: "E2", y: "S7", heat: 27930000.0 },
  { x: "E3", y: "S7", heat: 22720000.0 },
  { x: "E4", y: "S7", heat: 22660000.0 },
  { x: "E5", y: "S7", heat: 24430000.0 },
  { x: "E6", y: "S7", heat: 22010000.0 },
  { x: "E7", y: "S7", heat: 23730000.0 },
  { x: "E8", y: "S7", heat: 16570000.0 },
  { x: "E9", y: "S7", heat: 21080000.0 },
  { x: "E10", y: "S7", heat: 23260000.0 },
  { x: "E11", y: "S7", heat: 24370000.0 },
  { x: "E12", y: "S7", heat: 22860000.0 },
  { x: "E13", y: "S7", heat: 22240000.0 },
  { x: "E14", y: "S7", heat: 22400000.0 },
  { x: "E15", y: "S7", heat: 21750000.0 },
  { x: "E16", y: "S7", heat: 21220000.0 },
  { x: "E17", y: "S7", heat: 20840000.0 },
  { x: "E18", y: "S7", heat: 17810000.0 },
  { x: "E19", y: "S7", heat: 16540000.0 },
  { x: "E20", y: "S7", heat: 16300000.0 },
  { x: "E21", y: "S7", heat: 15650000.0 },
  { x: "E22", y: "S7", heat: 17230000.0 },
  { x: "E23", y: "S7", heat: 30050000.0 },
  { x: "E24", y: "S7", heat: 30050000.0 },
  { x: "E1", y: "S8", heat: 31700000.0 },
  { x: "E2", y: "S8", heat: 30040000.0 },
  { x: "E3", y: "S8", heat: 29200000.0 },
  { x: "E4", y: "S8", heat: 25580000.0 },
  { x: "E5", y: "S8", heat: 25640000.0 },
  { x: "E6", y: "S8", heat: 26960000.0 },
  { x: "E7", y: "S8", heat: 24240000.0 },
  { x: "E8", y: "S8", heat: 26540000.0 },
  { x: "E9", y: "S8", heat: 24240000.0 },
  { x: "E10", y: "S8", heat: 22440000.0 },
  { x: "E11", y: "S8", heat: 23850000.0 },
  { x: "E12", y: "S8", heat: 25530000.0 },
  { x: "E13", y: "S8", heat: 29240000.0 },
  { x: "E14", y: "S8", heat: 28640000.0 },
  { x: "E15", y: "S8", heat: 28640000.0 },
  { x: "E16", y: "S8", heat: 27520000.0 },
  { x: "E17", y: "S8", heat: 26300000.0 },
  { x: "E18", y: "S8", heat: 22050000.0 },
  { x: "E19", y: "S8", heat: 22590000.0 },
  { x: "E20", y: "S8", heat: 22240000.0 },
  { x: "E21", y: "S8", heat: 23970000.0 },
  { x: "E22", y: "S8", heat: 24310000.0 },
  { x: "E23", y: "S8", heat: 34910000.0 },
  { x: "E24", y: "S8", heat: 34910000.0 },
  { x: "E1", y: "S9", heat: 34010000.0 },
  { x: "E2", y: "S9", heat: 28930000.0 },
  { x: "E3", y: "S9", heat: 26620000.0 },
  { x: "E4", y: "S9", heat: 25810000.0 },
  { x: "E5", y: "S9", heat: 24460000.0 },
  { x: "E6", y: "S9", heat: 27510000.0 },
  { x: "E7", y: "S9", heat: 25350000.0 },
  { x: "E8", y: "S9", heat: 26760000.0 },
  { x: "E9", y: "S9", heat: 25420000.0 },
  { x: "E10", y: "S9", heat: 22280000.0 },
  { x: "E11", y: "S9", heat: 23670000.0 },
  { x: "E12", y: "S9", heat: 23660000.0 },
  { x: "E13", y: "S9", heat: 25820000.0 },
  { x: "E14", y: "S9", heat: 23370000.0 },
  { x: "E15", y: "S9", heat: 20850000.0 },
  { x: "E16", y: "S9", heat: 19520000.0 },
  { x: "E17", y: "S9", heat: 21000000.0 },
  { x: "E18", y: "S9", heat: 20790000.0 },
  { x: "E19", y: "S9", heat: 18240000.0 },
  { x: "E20", y: "S9", heat: 20710000.0 },
  { x: "E21", y: "S9", heat: 19030000.0 },
  { x: "E22", y: "S9", heat: 19550000.0 },
  { x: "E23", y: "S9", heat: 25460000.0 },
  { x: "E24", y: "S9", heat: 25460000.0 },
  { x: "E1", y: "S10", heat: 24540000.0 },
  { x: "E2", y: "S10", heat: 22370000.0 },
  { x: "E3", y: "S10", heat: 21870000.0 },
  { x: "E4", y: "S10", heat: 18760000.0 },
  { x: "E5", y: "S10", heat: 19370000.0 },
  { x: "E6", y: "S10", heat: 20370000.0 },
  { x: "E7", y: "S10", heat: 20210000.0 },
  { x: "E8", y: "S10", heat: 20660000.0 },
  { x: "E9", y: "S10", heat: 25480000.0 },
  { x: "E10", y: "S10", heat: 26680000.0 },
  { x: "E11", y: "S10", heat: 24910000.0 },
  { x: "E12", y: "S10", heat: 25900000.0 },
  { x: "E13", y: "S10", heat: 24270000.0 },
  { x: "E14", y: "S10", heat: 22820000.0 },
  { x: "E15", y: "S10", heat: 22640000.0 },
  { x: "E16", y: "S10", heat: 24510000.0 },
  { x: "E17", y: "S10", heat: 52460000.0 },
  { x: "E18", y: "S10", heat: 52460000.0 },
];

//pie chart for episodes per director
anychart.onDocumentLoad(function () {
  const chart = anychart.pie();
  const data = {
    "Ben Weiss": 10,
    "David Schwimmer": 10,
    "Gail Mancuso": 14,
    "Gary Halvorson": 54,
    "James Burrows": 15,
    "Kevin S. Bright": 53,
    "Michael Lembeck": 24,
    Others: 44,
    "Peter Bonerz": 12,
  };
  chart.data([
    {
      x: "Ben Weiss",
      value: 10,
      normal: {
        fill: "#D1C3EA",
        hatchFill: "percent50",
      },
    },
    {
      x: "David Schwimmer",
      value: 10,
      normal: {
        fill: "#695192",
        hatchFill: "percent50",
      },
    },
    {
      x: "Gail Mancuso",
      value: 14,
      normal: {
        fill: "#7F53CB",
        hatchFill: "percent50",
      },
    },
    {
      x: "Gary Halvorson",
      value: 54,
      normal: {
        fill: "#A472FA",
        hatchFill: "percent50",
      },
    },
    {
      x: "James Burrows",
      value: 15,
      normal: {
        fill: "#8350DC",
        hatchfill: "percent50",
      },
    },
    {
      x: "Kevin S. Bright",
      value: 53,
      normal: {
        fill: "#793AE7",
        hatchFill: "percent50",
      },
    },
    {
      x: "Michael Lembeck",
      value: 24,
      normal: {
        fill: "#9C8CD4",
        hatchFill: "percent50",
      },
    },
    {
      x: "Others",
      value: 44,
      normal: {
        fill: "#9C8CD4",
        hatchFill: "percent50",
      },
    },
    {
      x: "Peter Bonerz",
      value: 12,
      normal: {
        fill: "#351C5F",
        hatchFill: "percent50",
      },
    },
  ]);

  chart
    .tooltip()
    .format("Episodes: {%value}{groupsSeparator:\\,, decimalsCount:3}");
  chart.legend().itemsLayout("horizontal-expandable");
  chart.title("");
  chart.container("episodes-by-director__pie-chart");
  chart.background().fill("#f1f0e9");
  chart.draw();
});

//bar chart for average views per season
anychart.onDocumentLoad(function () {
  const chart = anychart.column();
  const column = chart.column(averageViewershipBySeason);

  column.name("Avg. Views");
  chart.title("Average Viewers Per Season");
  chart.container("avg-viewers-season");
  chart.xAxis().title("Season");
  chart.yAxis().title("Viewers");
  chart.background().fill("#f1f0e9");
  chart.draw();
});

//heat map chart for total views per episode
anychart.onDocumentLoad(function () {
  const chart = anychart.heatMap();
  const customColorScale = anychart.scales.linearColor();

  // customColorScale.colors(["#FFFFFF", "FF0000"]);
  customColorScale.colors(["0074FF", "#FF0000"]);

  chart.tooltip().titleFormat("{%y} {%x}");
  chart
    .tooltip()
    .format("Views: {%heat}{groupsSeparator:\\,, decimalsCount:3}");
  chart.colorScale(customColorScale);
  chart.data(viewsPerEpisode);
  chart.title("Views Per Episode");
  chart.container("views-per-episode");
  chart.background().fill("#f1f0e9");
  chart.draw();
});

//chart for three highest and three lowest total views by directors
anychart.onDocumentLoad(function () {
  const chart = anychart.column();
  const column = chart.column(highestViewedDirectors);

  chart
    .xAxis()
    .labels()
    .format(function () {
      const value = this.value;
      if (typeof value === "number") {
        return "";
      } else {
        return value;
      }
    });
  // chart.xAxis().labels().width(100);
  column.name("Total Views");
  chart.container("highest-director-views__bar-chart");
  chart.title("Most Viewed Directors");
  chart.xAxis().title("Director");
  chart.yAxis().title("Total Views");
  chart.xAxis().labels().rotation(-75);
  chart.background().fill("#f1f0e9");
  chart.draw();
});

anychart.onDocumentLoad(function () {
  const chart = anychart.column();
  const column = chart.column(lowestViewedDirectors);

  chart
    .xAxis()
    .labels()
    .format(function () {
      const value = this.value;
      if (typeof value === "number") {
        return "";
      } else {
        return value;
      }
    });
  chart.xAxis().labels().width(100);
  chart.yScale().maximum(60000000);
  column.name("Total Views");
  chart.container("lowest-director-views__bar-chart");
  chart.title("Least Viewed Directors");
  chart.xAxis().title("Director");
  chart.yAxis().title("Total Views");
  chart.xAxis().labels().rotation(-75);
  chart.background().fill("#f1f0e9");
  chart.draw();
});

//column chart for best average view
const data = [
  ["Michael Lembeck", 29587916.6666666679],
  ["Kevin S. Bright", 27333584.905660376],
  ["Gail Mancuso", 25520000.0],
  ["Peter Bonerz", 25005833.3333333321],
  ["James Burrows", 24776666.6666666679],
  ["David Schwimmer", 24433000.0],
  ["Ben Weiss", 23780000.0],
  ["Gary Halvorson", 22361296.2962962948],
];
chart = anychart.column();
const series = chart.column(data);

chart.xAxis().title("Director");
chart.yAxis().title("Average Episode Views");
chart.yAxis().labels().rotation(-90);
chart.xAxis().labels().rotation(-75);

series.name("Avg. Views/episode");
chart.container("highest-average-per-views__column-chart");
chart.background().fill("#f1f0e9");
chart.draw();
