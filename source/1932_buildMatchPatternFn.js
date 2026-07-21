// Module ID: 1932
// Function ID: 21801
// Name: buildMatchPatternFn
// Dependencies: []
// Exports: default

// Module 1932 (buildMatchPatternFn)

export default function buildMatchPatternFn(arg0) {
  return (str) => {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let obj = arguments[1];
      }
      const match = str.match(str.matchPattern);
      if (match) {
        const match1 = str.match(str.parsePattern);
        if (match1) {
          if (str.valueCallback) {
            let first = str.valueCallback(match1[0]);
          } else {
            first = match1[0];
          }
          obj = {};
          let valueCallbackResult = first;
          if (obj.valueCallback) {
            valueCallbackResult = obj.valueCallback(first);
          }
          obj.value = valueCallbackResult;
          obj.rest = str.slice(match[0].length);
          return obj;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    obj = {};
  };
};
export default exports.default;
