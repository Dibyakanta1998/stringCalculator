module.exports = {
  add: function (numbers) {
    if (numbers === "") {
      return 0;
    }
    const numArray = numbers.split(",");
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  },
};
