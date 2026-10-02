// Module ID: 633
// Function ID: 634
// Name: getMapData
// Dependencies: [634]

// Module 633 (getMapData)
import isKeyable from "isKeyable" /* 634 */;

let map;


export default function getMapData(__data__, str) {
  __data__ = __data__.__data__;
  if (isKeyable(str)) {
    str = "hash";
    if (typeof str === "string") {
      str = "string";
    }
    map = __data__[str];
  } else {
    map = __data__.map;
  }
  return map;
};
