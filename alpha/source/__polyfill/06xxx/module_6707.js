// Module ID: 6707
// Function ID: 6708
// Dependencies: []
// Exports: getInvertedMultiplier

// Module 6707

export function getInvertedMultiplier(gestureDirection, arg1) {
  if ("vertical" === gestureDirection) {
    return 1;
  } else if ("vertical-inverted" === gestureDirection) {
    return -1;
  } else if ("horizontal" === gestureDirection) {
    let num2 = 1;
    if (arg1) {
      num2 = -1;
    }
    return num2;
  } else if ("horizontal-inverted" === gestureDirection) {
    let num = -1;
    if (arg1) {
      num = 1;
    }
    return num;
  }
}
