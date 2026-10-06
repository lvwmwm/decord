// Module ID: 677
// Function ID: 678
// Name: property
// Dependencies: [598, 678, 601, 679]

// Module 677 (property)
import isKey from "isKey" /* 598 */;
import baseProperty from "baseProperty" /* 678 */;


export default function property(arg0) {
  let tmpResultResult;
  if (isKey(arg0)) {
    const tmpResult = baseProperty;
    tmpResultResult = tmpResult(tmp(601)(arg0));
  } else {
    tmpResultResult = tmp(679)(arg0);
  }
  return tmpResultResult;
};
