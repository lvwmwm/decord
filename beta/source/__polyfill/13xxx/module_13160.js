// Module ID: 13160
// Function ID: 13161
// Dependencies: []
// Exports: getBreadcrumbLogLevelFromHttpStatusCode

// Module 13160

export const getBreadcrumbLogLevelFromHttpStatusCode = function getBreadcrumbLogLevelFromHttpStatusCode(arg0) {
  let tmp;
  if (undefined !== arg0) {
    if (arg0 < 400) {
      let str2;
      if (arg0 >= 500) {
        str2 = "error";
      }
      let str = str2;
    } else {
      str = "warning";
    }
    tmp = str;
  }
  return tmp;
};
