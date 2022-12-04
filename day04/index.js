const fs = require("fs");

function parseInput(filename = "input.txt") {
  return fs
    .readFileSync(filename)
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.split(",").map((x) => x.split("-").map((x) => parseInt(x))));
}

function fullyContains(arr) {
  if (arr[0][0] >= arr[1][0] && arr[0][1] <= arr[1][1]) {
    return true;
  } else if (arr[1][0] >= arr[0][0] && arr[1][1] <= arr[0][1]) {
    return true;
  }

  return false;
}

function overlaps(arr) {
  if (arr[0][1] >= arr[1][0] && arr[1][1] >= arr[0][0]) {
    return true;
  }
  return false;
}

const part = process.env.part || "part1";

if (part === "part1")
  console.log(parseInput().filter((x) => fullyContains(x)).length);
else console.log(parseInput().filter((x) => overlaps(x)).length);
