module.exports = {
  add: function (numbers) {
    if (numbers === "") {
      return 0;
    }
    let numArray;
    if (numbers.startsWith("//")) {
      const endOfDelimiter = numbers.indexOf("\n");
      if (endOfDelimiter === -1) {
        throw new Error("Invalid input");
      }
      const delimiter = numbers.substring(2, endOfDelimiter);
      const numberString = numbers.substring(endOfDelimiter + 1);
      numArray = numberString.split(delimiter);
    } else {
      numArray = numbers.split(/,|\n/);
    }
    const parsedNumbers = numArray.map((num) => parseInt(num));
    const negatives = parsedNumbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error("negative numbers not allowed " + negatives.join(", "));
    }
    return parsedNumbers.reduce((sum, num) => sum + num, 0);
  },
};
