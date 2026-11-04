// Module ID: 13384
// Function ID: 13385
// Dependencies: []
// Exports: getBreadcrumbLogLevelFromHttpStatusCode

// Module 13384

export function getBreadcrumbLogLevelFromHttpStatusCode(arg0) {
  let tmp;
  if (undefined !== arg0) {
    let str;
    if (arg0 < 400) {
      let str2;
      if (arg0 >= 500) {
        str2 = "error";
      }
      str = str2;
    } else {
      str = "warning";
    }
    tmp = str;
  }
  return tmp;
}
