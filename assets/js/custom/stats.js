google.charts.load('current', {
  'packages': ['corechart']
});

google.charts.setOnLoadCallback(drawDiagChart);

function drawDiagChart() {

  function getDataTable(url) {
    return $.getJSON(url).then(function(json) {
      var datatable = new google.visualization.DataTable(json);
      var dt_view_mf = new google.visualization.DataView(datatable);
      var dt_view_total = new google.visualization.DataView(datatable);
      dt_view_mf.setColumns([0, 2, 3]);
      dt_view_total.setColumns([0, 1]);
      return [dt_view_mf.toDataTable(), dt_view_total.toDataTable()];
    });
  }

  // Set chart options
  var DiagCountoptions = {
    backgroundColor: 'transparent',
    'dataOpacity': 0.5,
    'legend': {
      'position': 'in',
      'alignment': 'end'
    },
    'bar': {
      'groupWidth': "70%"
    },
    'animation': {
      'duration': 1000,
      'startup': true
    },
    'titleTextStyle': {
      'fontSize': 18
    },
    'hAxis': {
      'title': 'Number of Patients'
    },
    'vAxis': {
      'title': 'Diagnosis Category'
    }
  };
  var DiagCountoptions_pie = {
    backgroundColor: 'transparent',
    // 'legend': {
    //   'position': 'right',
    //   textStyle: {
    //     fontSize: 11
    //   }
    // },
    'legend': 'none', 
    pieSliceText: 'label',
    'animation': {
      'duration': 1000,
      'startup': true
    },
    'titleTextStyle': {
      'fontSize': 18
    },
  };
  getDataTable('https://filecabinet-ca.tnl-mcgill.com/_get_diagcat_counts_datatable').then(function(datatables) {
    var chart = new google.visualization.BarChart(document.getElementById('diag_count_chart_div'));
    chart.draw(datatables[0], DiagCountoptions);
    var piechart = new google.visualization.PieChart(document.getElementById('pie_diag_count_chart_div'));
    piechart.draw(datatables[1], DiagCountoptions_pie);
  });

}
