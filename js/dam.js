var myChart = echarts.init(document.getElementById('damchart'));

// 指定图表的配置项和数据

var data = {
    year: ['2000年', '2001年', '2002年', '2003年', '2004年', '2005年', '2006年', '2007年', '2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年'],
    legend: ['小型水库', '中型水库', '大型水库'],
    data: [
            [81996, 81967, 82062, 81873, 81831, 81704, 82367, 81809, 82643, 83348, 84052, 84692, 85268, 93260, 93239, 93437, 93850, 94129, 94132],
            [2704, 2736, 2781, 2827, 2869, 2934, 3000, 3110, 3181, 3259, 3269, 3346, 3379, 3774, 3799, 3844, 3890, 3934, 3954],
            [420, 433, 445, 453, 460, 470, 482, 493, 529, 544, 552, 567, 573, 687, 697, 707, 721, 732, 736],
        ]
    };
var cs = ['#C3D7DF', '#74787A', '#5E7987']
var option = {
    title: {
        text: '2000年至2018年水库数变化图（单位：座）',
        left: 10,
        top: 5,
        textStyle: {
            color: '#fff'
        }
    },
    color: cs,
    legend: {
        top: 10,
        left: 550,
        itemWidth: 10,
        itemHeight: 10,
        // padding: [5, 10],
        textStyle: {
            fontSize: 14,
            color: '#fff',
            padding: [3, 0, 0, 0]
        },
        data: data.legend
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        containLabel: true
    },
    tooltip: {}, // 悬停标签
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#CDD1D3'
        },
        axisLine: {
            lineStyle: {
                color: '#CDD1D3'
            },
            width: 5
        },
        axisTick: {
            show: false,
        },
        data: data.year
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#CDD1D3'
        },
        axisLine: {
            lineStyle: {
                color: '#CDD1D3'
            },
            width: 5
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(150, 164, 244, 0.3)'
            }
        },
    },
    series: []

};

for (var i = 0; i < data.legend.length; i++) {
    option.series.push({
        name: data.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: '45%',
        label: {
            show: false,
            position: 'insideRight'
        },
        data: data.data[i]
    })
}

myChart.setOption(option);
