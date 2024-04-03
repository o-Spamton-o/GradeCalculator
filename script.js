// CS10 Grade Calculator

document.getElementById("btn").addEventListener("click", calculateGrade);

function calculateGrade() {
  let css1 = +document.getElementById("css1").value;
  let sp1 = +document.getElementById("sp1").value;
  let sp2 = +document.getElementById("sp2").value;
  let css2 = +document.getElementById("css2").value;
  let pa = +document.getElementById("pa").value;

  let average = (css1 + sp1 + sp2 + css2 + pa) / 5;

  document.getElementById("grade").innerHTML = `${average.toFixed(1)}`;
}
