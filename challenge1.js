  // Begin javascript code voor de snelheids diagram (donutchart)//
  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Niveaus', '#'],
          ['Donkergoen',     8.75],
          ['Groen',          8.75],
          ['Geel',             15],
          ['Oranje',         8.75],
          ['Rood',           8.75],
          ['#',                50]
        ]);

        var options = {
          enableInteractivity : false,
          pieHole: 0.5,
          backgroundColor: 'transparent',
          legend: 'none',
          pieSliceText: 'none',
          pieSliceBorderColor: 'transparent',
          pieStartAngle: -90,
          tooltip: { trigger: 'none' },
          slices: {
            0: { color: '#517746' },
            1: { color: '#77D856' },
            2: { color: '#E8E45B' },
            3: { color: '#EFA750' },
            4: { color: '#E26666' },
            5: { color: 'transparent' },
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }

  //Einde code voor donutchart//


  //Begin code voor etens diagram (piechart)//
   google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {

        var data = google.visualization.arrayToDataTable([
          ['Food',    'Quantity'],
          ['Droog fruit',     23],
          ['Noodles',         14],
          ['Noten',            9],
          ['Broodjes',         6],
          ['Repen',           11]
        ]);

        var options = {
          backgroundColor: 'transparent',
          legend: 'none',
          pieSliceBorderColor: 'transparent',
          slices: {
            0: { color: '#E2807A' },
            1: { color: '#8BBF7C' },
            2: { color: '#8096BC' },
            3: { color: '#EFBF6C' },
            4: { color: '#AAD6F2' },
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
  // Einde code voor de piecharts//

  //Begin code voor de line chart (afstand chart)//
   google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart4);

      function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['Time', 'Distance'],
          [ 5,      1],
          [ 14,    16],
          [ 25,    42],
          [ 36,    97],
          [ 47,   130],
          [ 57,   183],
          [ 67,   225],
          [ 76,   270],
          [ 88,   385],
        ]);

        var options = {
          backgroundColor: 'transparent',
          legend: 'none',
          series: {
            0: { color: 'white'},
          },
          pointSize: 5,
          hAxis: {
            gridlines: {color: 'transparent' },
            title: 'Tijd in h',
            baseline: 0,
            textColor: 'white',
            baselineColor: 'white',
            titleTextStyle: { color: 'white' },
          },
          vAxis: {
            gridlines: {color: 'transparent' },
            title: 'Afstand in km (x1000)',
            textColor: 'white',
            baselineColor: 'white',
            titleTextStyle: { color: 'white' },
          },
          crosshair: { trigger: 'both', orientation: 'both' },
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
  //Einde code voor de line charts//





