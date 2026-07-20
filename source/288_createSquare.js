// Module ID: 288
// Function ID: 4468
// Name: createSquare
// Dependencies: []

// Module 288 (createSquare)
function createSquare(bottom) {
  return { bottom, left: bottom, right: bottom, top: bottom };
}
arg5.createSquare = createSquare;
arg5.normalizeRect = function normalizeRect(hitSlop) {
  let tmp = hitSlop;
  if ("number" === typeof hitSlop) {
    tmp = createSquare(hitSlop);
  }
  return tmp;
};
