// Module ID: 1932
// Function ID: 21803
// Name: result
// Dependencies: []
// Exports: default

// Module 1932 (result)

export default function buildMatchPatternFn(arg0) {
  let closure_0 = arg0;
  return (str) => {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let obj = arguments[1];
      }
      const match = str.match(closure_0.matchPattern);
      if (match) {
        const match1 = str.match(closure_0.parsePattern);
        if (match1) {
          if (closure_0.valueCallback) {
            let first = closure_0.valueCallback(match1[0]);
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
