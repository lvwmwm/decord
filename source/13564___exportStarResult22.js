// Module ID: 13564
// Function ID: 13565
// Name: __exportStarResult22
// Dependencies: []

// Module 13564 (__exportStarResult22)
arg5.GetUnsignedRoundingMode = function GetUnsignedRoundingMode(roundingMode, arg1) {
  if (arg1) {
    return table[roundingMode];
  } else {
    return table2[roundingMode];
  }
};
let closure_0 = { ceil: "zero", floor: "infinity", expand: "infinity", trunc: "zero", halfCeil: "half-zero", halfFloor: "half-infinity", halfExpand: "half-infinity", halfTrunc: "half-zero", halfEven: "half-even" };
let closure_1 = { ceil: "infinity", floor: "zero", expand: "infinity", trunc: "zero", halfCeil: "half-infinity", halfFloor: "half-zero", halfExpand: "half-infinity", halfTrunc: "half-zero", halfEven: "half-even" };
