// Module ID: 7630
// Function ID: 7631
// Name: getBreadcrumbLogLevelFromHttpStatusCode
// Dependencies: []

// Module 7630 (getBreadcrumbLogLevelFromHttpStatusCode)
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
