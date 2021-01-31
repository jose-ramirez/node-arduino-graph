var contador = 0;
var ctx = document.getElementById("myChart").getContext("2d");
var dados = {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                lineTension: 0,
                label: "Gráfico Arduino",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: []
            }
        ]
    },

    options: {
        animation: {
            duration: 0
        }
    }

};
var myLineChart = new Chart(ctx, dados);

var socket = io();
socket.on("dadosArduino", function (dado) {
    var dadosArray = myLineChart.data.datasets[0].data;
    var labelsArray = myLineChart.data.labels;

    if (dadosArray.length == 5) {
        labelsArray.splice(0, 1);
        dadosArray.splice(0, 1);
    }

    labelsArray.push(dado.lbl);
    dadosArray.push(dado.valor);

    myLineChart.update();
});
