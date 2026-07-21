// Module ID: 721
// Function ID: 8746
// Name: hashGet
// Dependencies: []

// Module 721 (hashGet)

export default function hashGet(arg0) {
  const __data__ = this.__data__;
  if (require(dependencyMap[0])) {
    let tmp4;
    if ("__lodash_hash_undefined__" !== __data__[arg0]) {
      tmp4 = tmp3;
    }
    return tmp4;
  } else {
    let tmp2;
    if (hasOwnProperty.call(__data__, arg0)) {
      tmp2 = __data__[arg0];
    }
    return tmp2;
  }
};
