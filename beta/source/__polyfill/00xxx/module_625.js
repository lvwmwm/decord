// Module ID: 625
// Function ID: 626
// Dependencies: [626]

// Module 625
import _mod626 from "module_626" /* 626 */;


export default function getMapData(__data__, str) {
  __data__ = __data__.__data__;
  if (_mod626(str)) {
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
