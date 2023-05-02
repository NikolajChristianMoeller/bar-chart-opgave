"use strict";

const data = [20, 10, 30, 25, 15];
const labels = ["A", "B", "C", "D", "E"];

const canvas = document.getElementById("myChart");
const ctx = canvas.getContext("2d");

const chartHeight = 400;
const barWidth = 50;
const barGap = 10;
const chartBottomMargin = 50;

// Determine the max value in the data array
const maxDataValue = Math.max(...data);

// Set the canvas dimensions
canvas.width = (barWidth + barGap) * data.length - barGap;
canvas.height = chartHeight;

// Draw the bars
for (let i = 0; i < data.length; i++) {
  const barHeight = (data[i] / maxDataValue) * (chartHeight - chartBottomMargin);
  const x = i * (barWidth + barGap);
  const y = chartHeight - barHeight;

  ctx.fillStyle = "rgb(100, 149, 237)";
  ctx.fillRect(x, y, barWidth, barHeight);

  // Draw the label below the bar
  ctx.fillStyle = "black";
  ctx.font = "14px Arial";
  ctx.textAlign = "center";
  ctx.fillText(labels[i], x + barWidth / 2, chartHeight - 10);
}








// function getNumberOfCustomers() {
//     return Math.floor(Math.random() * 32);
// }

// const queueSize = getNumberOfCustomers();



// window.addEventListener("load", start);

// const liste = [];

// function start(params) {
//   firstCustomers();
//   for (let i = 0; i < 40; i++) {
//     setHeight(liste[i]);
//   }
//   setInterval(generateCustomers, 1000);
// }

// function firstCustomers() {
//   for (let i = 0; i < 40; i++) {
//     let tal = Math.floor(Math.random() * 32);
//     liste.push(tal);
//   }
// }

// function setHeight(number) {
//   const data = /*html*/ `<article id="pillar" class="pillar" style="height:${number * 15}px"></article>`;
//   document.querySelector("#grid_container").insertAdjacentHTML("beforeend", data);
// }

// function generateCustomers(params) {
//   let tal = Math.floor(Math.random() * 32);
//   console.log(tal);
//   updateCustomers(tal);
// }

// function updateCustomers(tal) {
//   liste.push(tal);
//   liste.shift();

//   document.querySelectorAll(".pillar").forEach((thingy) => thingy.remove());
//   liste.forEach(setHeight);
// }