// Module ID: 10179
// Function ID: 10180
// Name: nativeTypeMatches
// Dependencies: []

// Module 10179 (nativeTypeMatches)
function nativeTypeMatches(arg0, arg1) {

}
arg5.safeValidate = (arr, nativeType) => {
  nativeType = nativeType.nativeType;
  return arr.some((str) => {
    if (typeof nativeType !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let flag = true;
    if (str !== nativeType) {
      flag = true;
      if ("*/*" !== str) {
        flag = false;
        if (null !== obj) {
          flag = false;
          if (str.endsWith("/*")) {
            flag = false;
            if (obj.startsWith(str.slice(0, -2))) {
              flag = true;
            }
          }
        }
      }
    }
    return flag;
  });
};
