// Module ID: 665
// Function ID: 666
// Name: property
// Dependencies: [586, 666, 589, 667]

// Module 665 (property)
import isKey from "isKey" /* 586 */;
import baseProperty from "baseProperty" /* 666 */;


export default function property(arg0) {
  let tmpResultResult;
  if (isKey(arg0)) {
    const tmpResult = baseProperty;
    tmpResultResult = tmpResult(tmp(589)(arg0));
  } else {
    tmpResultResult = tmp(667)(arg0);
  }
  return tmpResultResult;
};
