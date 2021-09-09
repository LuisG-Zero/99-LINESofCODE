let friends = ["Jon", "Charlie", "Darrell", "Jacob", "Carlos"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i] + ":");

  for (let L = 99; L >= 1; L--) {
    if (L === 2) {
      console.log(
        "2 lines of code in the file, 2 lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, 1 line of code in the file"
      );
    } else if (L === 1) {
      console.log(
        "1 line of code in the file, 1 line of code; " +
          friends[i] +
          " strikes one out, clears it all out, no more lines of code in the file"
      );
    } else {
      console.log(
        L +
          " lines of code in the file, " +
          L +
          " lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, " +
          (L - 1) +
          " lines of code in the file"
      );
    }
  }
}
