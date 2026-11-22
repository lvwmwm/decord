// Module ID: 15462
// Function ID: 15463
// Name: GetUnsignedRoundingMode
// Dependencies: []
// Exports: GetUnsignedRoundingMode

// Module 15462 (GetUnsignedRoundingMode)
let closure_0 = { ceil: "zero", floor: "infinity", expand: "infinity", trunc: "zero", halfCeil: "half-zero", halfFloor: "half-infinity", halfExpand: "half-infinity", halfTrunc: "half-zero", halfEven: "half-even" };
let closure_1 = { ceil: "infinity", floor: "zero", expand: "infinity", trunc: "zero", halfCeil: "half-infinity", halfFloor: "half-zero", halfExpand: "half-infinity", halfTrunc: "half-zero", halfEven: "half-even" };

export function GetUnsignedRoundingMode(roundingMode, arg1) {
  const tmp = arg1;
  if (tmp) {
    return closure_0[roundingMode];
  } else {
    return closure_1[roundingMode];
  }
}
