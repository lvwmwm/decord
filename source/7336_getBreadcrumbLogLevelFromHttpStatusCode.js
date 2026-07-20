// Module ID: 7336
// Function ID: 59171
// Name: getBreadcrumbLogLevelFromHttpStatusCode
// Dependencies: []

// Module 7336 (getBreadcrumbLogLevelFromHttpStatusCode)
arg5.getBreadcrumbLogLevelFromHttpStatusCode = function getBreadcrumbLogLevelFromHttpStatusCode(arg0) {
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
