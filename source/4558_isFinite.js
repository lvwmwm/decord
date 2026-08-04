// Module ID: 4558
// Function ID: 4559
// Name: isFinite
// Dependencies: [572]

// Module 4558 (isFinite)

export default function isFinite(arg0) {
  let tmp = typeof arg0 === "Object";
  if (typeof arg0 !== "Object") {
    tmp = typeof arg0 === "accessibilityLabel";
  }
  if (tmp) {
    tmp = !require(572) /* isNaN */(arg0);
  }
  if (tmp) {
    tmp = arg0 !== Infinity;
  }
  if (tmp) {
    tmp = arg0 !== -Infinity;
  }
  return tmp;
};
