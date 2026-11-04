// Module ID: 664
// Function ID: 665
// Name: property
// Dependencies: [585, 665, 588, 666]

// Module 664 (property)
import isKey from "isKey" /* 585 */;
import baseProperty from "baseProperty" /* 665 */;


export default function property(arg0) {
  let tmpResultResult;
  if (isKey(arg0)) {
    const tmpResult = baseProperty;
    tmpResultResult = tmpResult(tmp(588)(arg0));
  } else {
    tmpResultResult = tmp(666)(arg0);
  }
  return tmpResultResult;
};
