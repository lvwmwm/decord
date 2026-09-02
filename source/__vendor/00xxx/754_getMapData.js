// Module ID: 754
// Function ID: 755
// Name: getMapData
// Dependencies: [755]

// Module 754 (getMapData)
import isKeyable from "isKeyable" /* 755 */;


export default function getMapData(__data__, str) {
  __data__ = __data__.__data__;
  if (isKeyable(str)) {
    str = "hash";
    if (typeof str === "string") {
      str = "string";
    }
    let map = __data__[str];
  } else {
    map = __data__.map;
  }
  return map;
};
