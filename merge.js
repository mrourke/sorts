var merge = function (list1, list2) {
  var merged = [];
  var index1 = 0;
  var index2 = 0;
  var remaining;

  while (index1 < list1.length && index2 < list2.length) {
    if (list1[index1] < list2[index2]) {
      merged.push(list1[index1]);
      index1 += 1;
    } else {
      merged.push(list2[index2]);
      index2 += 1;
    }
  }
  if (index1 === list1.length) {
    remaining = list2;
    index1 = index2;
  } else {
    remaining = list1;
  }
  for (undefined; index1 < remaining.length; index1 += 1) {
    merged.push(remaining[index1]);
  }
  return merged;
};

var mergeSort = function (list, comparator) {
  var working;
  comparator = comparator || function (a, b) { return a < b; };

};

module.exports = mergeSort;
