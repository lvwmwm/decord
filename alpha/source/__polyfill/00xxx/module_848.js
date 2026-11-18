// Module ID: 848
// Function ID: 849
// Dependencies: []
// Exports: getBreadcrumbLogLevelFromHttpStatusCode

// Module 848
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function getBreadcrumbLogLevelFromHttpStatusCode(status_code) {
  let tmp;
  if (undefined !== status_code) {
    let str;
    if (status_code < 400) {
      let str2;
      if (status_code >= 500) {
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
