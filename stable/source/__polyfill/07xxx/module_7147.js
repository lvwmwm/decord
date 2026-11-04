// Module ID: 7147
// Function ID: 7148
// Dependencies: []
// Exports: getInvertedMultiplier

// Module 7147

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
