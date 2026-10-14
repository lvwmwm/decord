// Module ID: 676
// Function ID: 677
// Name: property
// Dependencies: [597, 677, 600, 678]

// Module 676 (property)
import isKey from "isKey" /* 597 */;
import baseProperty from "baseProperty" /* 677 */;


export default function property(arg0) {
  let tmpResultResult;
  if (isKey(arg0)) {
    const tmpResult = baseProperty;
    tmpResultResult = tmpResult(tmp(600)(arg0));
  } else {
    tmpResultResult = tmp(678)(arg0);
  }
  return tmpResultResult;
};
