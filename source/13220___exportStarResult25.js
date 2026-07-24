// Module ID: 13220
// Function ID: 101815
// Name: __exportStarResult25
// Dependencies: [13192, 13218, 13217, 13216, 13205]

// Module 13220 (__exportStarResult25)
const require = arg1;
const dependencyMap = arg6;
arg5.PartitionNumberRangePattern = function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  items(13192).invariant(!isNaN.isNaN() && !isNaN2.isNaN(), "Input must be a number", RangeError);
  const internalSlots = getInternalSlots(arg0);
  const result = items(13218).PartitionNumberPattern(internalSlots, isNaN);
  const result1 = items(13218).PartitionNumberPattern(internalSlots, isNaN2);
  const tmp = !isNaN.isNaN() && !isNaN2.isNaN();
  if (FormatNumericResult === items(13217).FormatNumeric(internalSlots, isNaN2)) {
    const FormatApproximatelyResult = items(13216).FormatApproximately(internalSlots, result);
    const item = FormatApproximatelyResult.forEach((arg0) => {
      arg0.source = "shared";
    });
    return FormatApproximatelyResult;
  } else {
    items = [];
    const item1 = result.forEach((arg0) => {
      arg0.source = "startRange";
      items.push(arg0);
    });
    let obj = { type: "literal", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign, source: "shared" };
    items.push(obj);
    const item2 = result1.forEach((arg0) => {
      arg0.source = "endRange";
      items.push(arg0);
    });
    obj = { getInternalSlots };
    return items(13205).CollapseNumberRange(arg0, items, obj);
  }
  FormatNumericResult = items(13217).FormatNumeric(internalSlots, isNaN);
};
