// Module ID: 9777
// Function ID: 75988
// Name: nativeTypeMatches
// Dependencies: []

// Module 9777 (nativeTypeMatches)
function nativeTypeMatches(str, str2) {
  if (str !== str2) {
    if ("*/*" !== str) {
      if (null === str2) {
        return false;
      } else {
        if (str.endsWith("/*")) {
          if (str2.startsWith(str.slice(0, -2))) {
            return true;
          }
        }
        return false;
      }
    }
  }
  return true;
}
arg5.safeValidate = function safeValidate(type, nextResult) {
  const nativeType = nextResult.nativeType;
  return type.some((arg0) => nativeType(arg0, nativeType));
};
