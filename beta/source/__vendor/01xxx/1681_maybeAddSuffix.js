// Module ID: 1681
// Function ID: 1682
// Name: maybeAddSuffix
// Dependencies: []
// Exports: hasSuffix, maybeAddSuffix

// Module 1681 (maybeAddSuffix)

export function hasSuffix(str) {
  let isNaNResult = typeof str === "string";
  if (typeof str === "string") {
    const _isNaN = isNaN;
    const _parseInt = parseInt;
    isNaNResult = isNaN(parseInt(str[str.length - 1]));
  }
  return isNaNResult;
}
export function maybeAddSuffix(str, arg1) {
  let isNaNResult = typeof str === "string";
  if (typeof str === "string") {
    const _isNaN = isNaN;
    const _parseInt = parseInt;
    isNaNResult = isNaN(parseInt(str[str.length - 1]));
  }
  let combined = str;
  if (!isNaNResult) {
    const _String = String;
    const _HermesInternal = HermesInternal;
    combined = "" + String(str) + arg1;
  }
  return combined;
}
