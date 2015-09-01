var insertion = function (list, comparator) {
  var i;
  var currentValue;
  var insertIndex;
  // Optional comparator. Comparator returns true for a precedes b in sort
  comparator = comparator || function (a, b) {return a < b;};

  for (i = 1; i < list.length; i++) {
    currentValue = list[i];
    insertIndex = i;


    while (insertIndex > 0 && comparator(currentValue, list[insertIndex - 1])) {
      insertIndex -= 1;
      list[insertIndex + 1] = list[insertIndex];
    }

    list[insertIndex] = currentValue;
  }

  return list;
}

module.exports = insertion;
