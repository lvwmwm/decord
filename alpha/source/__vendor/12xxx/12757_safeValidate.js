// Module ID: 12757
// Function ID: 12758
// Name: safeValidate
// Dependencies: []
// Exports: safeValidate

// Module 12757 (safeValidate)
function nativeTypeMatches(arg0, arg1) {

}

export const safeValidate = (arr, nativeType) => {
  nativeType = nativeType.nativeType;
  return arr.some((item) => {
    if (typeof nativeTypeMatches === "function") {
      let flag = true;
      if (item !== nativeType) {
        flag = true;
        if ("*/*" !== item) {
          flag = false;
          if (null !== nativeType) {
            flag = false;
            if (item.endsWith("/*")) {
              flag = false;
              if (nativeType.startsWith(item.slice(0, -2))) {
                flag = true;
              }
            }
          }
        }
      }
      return flag;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
};
