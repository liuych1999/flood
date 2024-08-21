var myChart = echarts.init(document.getElementById('barchart'));

// 指定图表的配置项和数据
var xData = ['    防洪水工程建设', '    治污水工程建设', '    排水能力提升工程', '    供水工程建设', '    污水处理', '    “三湖三河”流域水环境治理', '    水利设施维护补助']
var lineData = [100, 100, 100, 100, 100, 100, 100]
var lastYearData = [69400, 84179, 19217, 26500, 100704, 0, 0];
var thisYearData = [67438, 45155, 21010, 39065, 116783, 146044, 11224.86];
var timeLineData = [1];
let legend = ['2019', '2020'];
var background = "#0F1423"; //背景 
let textColor = "#fff";
let lineColor = "rgba(255,255,255,0.2)";
let colors = [{
        borderColor: "rgba(195,215,223,1)",
        start: "rgba(195,215,223,0.8)",
        end: "rgba(195,215,223,0.3)"
    },
    {
        borderColor: "rgba(94,97,109,1)",
        start: "rgba(94,97,109,0.3)",
        end: "rgba(94,97,109,0.8)"
    },
];
let borderData = [];
let scale = 2;
borderData = xData.map(item => {
    return scale;
});
var option = {
    baseOption: {
        backgroundColor: background,
        timeline: {
            show: false,
            top: 0,
            data: []
        },
        tooltip: {
            trigger: "axis"
        }, 
        legend: {
            top: '5%',
            right: '5%',
            itemWidth: 20,
            itemHeight: 5,
            // itemGap: 343,
            icon: 'horizontal',
            textStyle: {
                color: '#ffffff',
                fontSize: 20,
            },
            data: legend
        },
        grid: [{
            show: false,
            left: '5%',
            top: '10%',
            bottom: '1%',
            containLabel: true,
            width: '37%'
        }, {
            show: false,
            left: '51%',
            top: '10%',
            bottom: '2.5%',
            width: '0%'
        }, {
            show: false,
            right: '2%',
            top: '10%',
            bottom: '1%',
            containLabel: true,
            width: '37%'
        }],
        xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: true,
                color: textColor
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: lineColor
                }
            },
        }, {
            gridIndex: 1,
            show: false
        }, {
            gridIndex: 2,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: true,
                color: textColor
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: lineColor
                }
            },
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'center',
            axisLine: {
                show: true,
                lineStyle: {
                    color: lineColor
                }
            },

            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: xData
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                padding: [30, 0, 0, 0],
                textStyle: {
                    color: '#ffffff',
                    fontSize: 13
                },
                align: "center"

            },
            data: xData.map(function (value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center'
                    }
                }
            })
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: true,
                lineStyle: {
                    color: lineColor
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false

            },
            data: xData
        }],
        series: []

    },
    options: []
}

option.baseOption.timeline.data.push(timeLineData[0])
option.options.push({
    series: [{
            name: "2019",
            type: "bar",
            barWidth: 25,
            stack: "1",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: colors[0].start
                        },
                        {
                            offset: 1,
                            color: colors[0].end
                        }
                    ]),
                }
            },
            label: {
                normal: {
                    show: true,
                }
            },
            data: lastYearData,
            animationEasing: "elasticOut"
        },
        {
            name: "2020",
            type: "bar",
            stack: "2",
            barWidth: 25,
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: colors[1].start
                        },
                        {
                            offset: 1,
                            color: colors[1].end
                        }
                    ]),
                }
            },
            label: {
                normal: {
                    show: true ,
                }
            },
            data: thisYearData,
            animationEasing: "elasticOut"
        },
    ]
});



// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);