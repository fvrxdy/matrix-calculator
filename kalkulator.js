function parseMatrix(str) {
  return str
    .trim()
    .split("\n")
    .map((row) => row.trim().split(/\s+/).map(Number));
}

function displayResult(result) {
  const resultTextArea = document.getElementById("result");
  if (result.length === 3 && result[0].length === 3) {
    const formattedResult = result.map((row) => row.join("\t")).join("\n");
    resultTextArea.value = formattedResult;
  } else {
    resultTextArea.value = result.map((row) => row.join("\t")).join("\n");
  }
}

function addMatrices() {
  const matrixA = parseMatrix(document.getElementById("matrixA").value);
  const matrixB = parseMatrix(document.getElementById("matrixB").value);

  if (
    matrixA.length !== matrixB.length ||
    matrixA[0].length !== matrixB[0].length
  ) {
    alert("Matrix dimensions must match for addition!");
    return;
  }

  const result = matrixA.map((row, i) =>
    row.map((val, j) => val + matrixB[i][j])
  );
  displayResult(result);
}

function subtractMatrices() {
  const matrixA = parseMatrix(document.getElementById("matrixA").value);
  const matrixB = parseMatrix(document.getElementById("matrixB").value);

  if (
    matrixA.length !== matrixB.length ||
    matrixA[0].length !== matrixB[0].length
  ) {
    alert("Matrix dimensions must match for subtraction!");
    return;
  }

  const result = matrixA.map((row, i) =>
    row.map((val, j) => val - matrixB[i][j])
  );
  displayResult(result);
}

function multiplyMatrices() {
  const matrixA = parseMatrix(document.getElementById("matrixA").value);
  const matrixB = parseMatrix(document.getElementById("matrixB").value);

  if (matrixA[0].length !== matrixB.length) {
    alert(
      "Number of columns in Matrix A must match number of rows in Matrix B for multiplication!"
    );
    return;
  }

  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrixA[0].length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }

  displayResult(result);
}
