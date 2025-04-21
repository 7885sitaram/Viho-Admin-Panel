$(document).ready(function () {
  $(".toggle").click(function () {
    $("aside").toggleClass("toggle-aside");
    $("main").toggleClass("toggle-main");
  });

  // accordian

  $(".accordian-title").click(function () {
    $(this)
      .parent()
      .siblings(".accordian-item")
      .children(".accordian-text")
      .slideUp();
    $(this).siblings().slideToggle();
  });

  $(".accordian-title").click(function () {
    // First, reset all the accordian titles and their .special elements
    $(".accordian-title").css({
      "background-color": "#fff",
      color: "black",
    });

    $(".special").css({
      transform: "rotate(0deg)",
    });

    // Now, apply the styles to the clicked accordian title
    $(this).css({
      "background-color": "#24695c",
      color: "#fff",
    });

    // Apply the rotation only to the .special element inside the clicked title
    $(this).find(".special").css({
      transform: "rotate(90deg)",
    });

    $(this).find(this).css({
      transform: "rotate(0deg)",
    });
  });

  $(".profit").mouseenter(function () {
    $(".profit .round-box svg").css({
      "background-color": "#24695c",
      fill: "#fff",
    });
  });

  $(".profit").mouseleave(function () {
    $(".profit .round-box svg").css({
      "background-color": "#91d0c599",
      fill: "#24695c",
    });
  });

  $(".loss").mouseenter(function () {
    $(".loss .round-box svg").css({
      "background-color": "#ba895d",
      fill: "#fff",
    });
  });

  $(".loss").mouseleave(function () {
    $(".loss .round-box svg").css({
      "background-color": "#e3be9ea8",
      fill: "#ba895d",
    });
  });

  // table-scroll

  $(".toggle").click(function () {
    $("table").toggleClass("table-wide");

    $(".table-scroll").toggleClass("scroll-table-wide");
  });

  // setting

  $(".ctrl-btn i").click(function () {
    $(this).closest(".ctrl-btn").find(".hide-btn i").toggle("show");
  });

  // code

  $(".code").click(function () {
    $(this).closest(".sales-chart").find(".code-page").toggle("show");
  });

  $(".code").click(function () {
    $(this).closest(".growth").find(".code-page").toggle("show");
  });

  $(".code").click(function () {
    $(this).closest(".activity").find(".code-page").toggle("show");
  });

  $(".code").click(function () {
    $(this).closest(".column").find(".code-page").toggle("show");
  });

  $(".code").click(function () {
    $(this).closest(".table").find(".code-page").toggle("show");
  });

  $(".code").click(function () {
    $(this).closest(".transaction").find(".code-page").toggle("show");
  });

  // minimize

  // $(".minimize, .maximize").click(function(){
  //   $("#chart").toggle()
  //   $(".maximize").toggle("not-show")
  //   $(".minimize").toggle("not-show")

  // })

  $(".minimize, .maximize").click(function () {
    $(this).closest(".sales-chart").find("#chart").toggle();
    $(".maximize").toggle("not-show");
    $(".minimize").toggle("not-show");
  });

  $(".minimize1, .maximize1").click(function () {
    $(this).closest(".growth").find("#radial").toggle();
    $(".maximize1").toggle("not-show");
    $(".minimize1").toggle("not-show");
  });

  $(".minimize, .maximize").click(function () {
    $(this).closest(".activity").find(".table-info").toggle();
  });

  $(".minimize, .maximize").click(function () {
    $(this).closest(".table").find(".table-scroll").toggle();
  });

  // blur

  $(".opacity").click(function () {
    $(this).closest(".sales-chart").find("#chart").toggleClass("blur");
  });

  $(".opacity").click(function () {
    $(this).closest(".growth").find("#radial").toggleClass("blur");
  });

  $(".opacity").click(function () {
    $(this).closest(".activity").find(".activity-table").toggleClass("blur");
  });

  $(".opacity").click(function () {
    $(this).closest(".column").find("#column").toggleClass("blur");
  });

  $(".opacity").click(function () {
    $(this).closest(".table").find(".table-scroll").toggleClass("blur");
  });

  $(".opacity").click(function () {
    $(this).closest(".transaction").find("#area").toggleClass("blur");
  });

  // remove

  $(".remove").click(function () {
    $(this).closest(".sales-chart").hide(2000);
  });

  $(".remove").click(function () {
    $(this).closest(".growth").hide(2000);
  });

  $(".remove").click(function () {
    $(this).closest(".activity").hide(2000);
  });

  $(".remove").click(function () {
    $(this).closest(".column").hide(2000);
  });

  $(".remove").click(function () {
    $(this).closest(".table").hide(2000);
  });

  $(".remove").click(function () {
    $(this).closest(".transaction").hide(2000);
  });

  // slider
  // $(".slider").click(function () {
  //   $(".ere").toggle();
  //   $(".ere").css("margin-left", "65vw");
  // });

  $(".toggle").click(function () {
    $(".slider-aside").toggle();
  });
});

// feature js
// radial bar

var options = {
  series: [76, 67, 61, 90],
  chart: {
    height: 390,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: "30%",
        background: "transparent",
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        },
      },
      barLabels: {
        enabled: true,
        useSeriesColors: true,
        offsetX: -8,
        fontSize: "16px",
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
      },
    },
  },
  colors: ["#24695c", "#ba895d", "#24695c", "#ba895d"],
  labels: ["Total order", "Total product", "Quantity", "Page views"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          show: false,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#radial"), options);
chart.render();

// sales chart
var options = {
  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [44, 55, 40, 47, 38, 55, 38, 41, 60, 47, 70],
    },
  ],
  chart: {
    height: 430,
    type: "line",
  },
  stroke: {
    curve: "smooth",
  },
  fill: {
    type: "solid",
    opacity: [0.35],
  },
  colors: ["#24695c"], // Light green for TEAM A
  labels: [
    "Dec 01",
    "Dec 02",
    "Dec 03",
    "Dec 04",
    "Dec 05",
    "Dec 06",
    "Dec 07",
    "Dec 08",
    "Dec 09",
    "Dec 10",
    "Dec 11",
  ],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Series A",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// column chart
var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 70, 57, 30, 86, 45, 70, 85, 66, 50],
    },
    {
      name: "Revenue",
      // data: [0, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      // data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    },
  ],
  chart: {
    type: "bar",
    height: 280,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      endingShape: "rounded",
      distributed: true, // Allows different colors for each bar
    },
  },
  colors: [
    "#24695c",
    "#ba895d",
    "#24695c",
    "#ba895d",
    "#24695c",
    "#ba895d",
    "#24695c",
    "#ba895d",
    "#24695c",
    "#ba895d",
  ], // Custom colors for each column
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    // colors: ['#555']
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    title: {
      text: "Months",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#column"), options);
chart.render();

// area chart
var options = {
  series: [
    {
      name: "series1",
      data: [38, 32, 30, 32, 34, 25, 42],
      color: "#ba895d",
    },
  ],
  chart: {
    height: 380,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: "30/10/2024 HH:mm",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#area"), options);
chart.render();

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 280,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
