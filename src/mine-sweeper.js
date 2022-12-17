function minesweeper(matrix) {
  let sweeper = [];

  matrix.forEach((el) => sweeper.push(el.slice()));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let element = 0;
      const PREV = matrix[i - 1];
      const NEXT = matrix[i + 1];
      const FLATPREV = matrix[i][j - 1];
      const FLATNEXT = matrix[i][j + 1];

      if (PREV) {
        if (PREV[j - 1] || PREV[j + 1] || PREV[j]) element += 1;
      }

      if (NEXT) {
        if (NEXT[j - 1] || NEXT[j + 1] || NEXT[j]) element += 1;
      }

      if (FLATNEXT || FLATPREV) {
        element += 1;
      }
      sweeper[i][j] = element;
    }
  }

  return sweeper;
}

module.exports = {
  minesweeper,
};
