// Module ID: 8031
// Function ID: 63772
// Name: parsePercentageRGBColor
// Dependencies: []

// Module 8031 (parsePercentageRGBColor)
function parsePercentageRGBColor(replaced) {
  let _HermesInternal2;
  let concat;
  const match = tmp2.exec(replaced);
  if (match) {
    const tmp5 = percentTo255(match[1]);
    _HermesInternal2 = globalThis;
    const _HermesInternal3 = HermesInternal;
    const combined = "" + tmp5 + ", " + percentTo255(match[3]) + ", " + percentTo255(match[5]);
    if (match[7]) {
      const _parseFloat = parseFloat;
      concat = parseFloat(obj);
      if (endsWithResult) {
        let result = concat / 100;
      } else {
        result = concat;
      }
      ({ HermesInternal: _HermesInternal2, concat } = _HermesInternal2);
      const combined1 = concat(combined, ", ", result, ")");
      const endsWithResult = obj.endsWith("%");
    } else {
      const _HermesInternal4 = HermesInternal;
      return "rgb(" + combined + ")";
    }
    const tmp7 = percentTo255(match[3]);
  } else {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("\"" + replaced + "\" is not a valid percentage rgb/rgba color");
    return replaced;
  }
}
const tmp2 = /^rgba?\(\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*(?:,\s*(1|0(\.\d+)?|100%|\d{1,2}(\.\d+)?%)\s*)?\)$/;
function percentTo255(arg0) {
  return Math.round(2.55 * parseFloat(arg0));
}
arg5.RGB_RGBA_PATTERN = tmp2;
arg5.convertPercentageColor = function convertPercentageColor(str) {
  if ("string" !== typeof str) {
    return str;
  } else {
    const replaced = str.replace(/\s/g, "");
    let tmp3 = str;
    if (tmp2.test(replaced)) {
      tmp3 = parsePercentageRGBColor(replaced);
    }
    return tmp3;
  }
};
