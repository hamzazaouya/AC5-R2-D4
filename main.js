let print = document.getElementById('demo');
let output = '';
let size = 30;

for (let i = 1; i <= size; i++) {
  for (let j = 1; j < size; j++) {
    if (i <= j) {
      output += "<span style='opacity:0'>*</span>";
    }
  }
  for (let j = 1; j <= size; j++) {
    if(i >= j) {
      output += "*";
    }
  }
  for (let j = 1; j <= (size - 1); j++) {
    if(i > j) {
      output += "*";
    }
  }
  output += "<br/>"
}

print.innerHTML = output;
