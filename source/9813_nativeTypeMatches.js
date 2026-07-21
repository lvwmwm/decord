// Module ID: 9813
// Function ID: 76145
// Name: nativeTypeMatches
// Dependencies: []

// Module 9813 (nativeTypeMatches)
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
  const nativeTypeMatches = nextResult.nativeType;
  return type.some((arg0) => nativeType(arg0, nativeType));
};
