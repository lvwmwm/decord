// Module ID: 734
// Function ID: 8773
// Name: getMapData
// Dependencies: [735]

// Module 734 (getMapData)

export default function getMapData(__data__) {
  __data__ = __data__.__data__;
  if (require(735) /* isKeyable */(arg1)) {
    let str = "hash";
    if ("string" === typeof arg1) {
      str = "string";
    }
    let map = __data__[str];
  } else {
    map = __data__.map;
  }
  return map;
};
