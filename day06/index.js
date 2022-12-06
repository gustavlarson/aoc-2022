function inputDataLines(filename = "input.txt") {
  return require("fs").readFileSync(filename).toString().trim().split("\n");
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function firstMarker(line, n) {
  const arr = line.split("");
  for (i = n; i < arr.length; i++) {
    if (arr.slice(i - n, i).filter(onlyUnique).length === n) {
      return i;
    }
  }
}

function getSolutionPart1() {
  return inputDataLines().map((l) => firstMarker(l, 4)).reduce((x, y) => x + y);
}

function getSolutionPart2() {
  return inputDataLines().map((l) => firstMarker(l, 14)).reduce((x, y) => x + y);
}

if ((process.env.part || "part1") === "part1") console.log(getSolutionPart1());
else console.log(getSolutionPart2());
