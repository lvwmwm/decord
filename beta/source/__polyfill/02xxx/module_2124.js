// Module ID: 2124
// Function ID: 2125
// Dependencies: []
// Exports: default

// Module 2124

export default function buildMatchPatternFn(arg0) {
  const matchPattern = arg0;
  return (str) => {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let obj = arguments[1];
      }
      const match = str.match(matchPattern.matchPattern);
      if (match) {
        const match1 = str.match(obj2.parsePattern);
        if (match1) {
          if (obj2.valueCallback) {
            let first = obj2.valueCallback(match1[0]);
          } else {
            first = match1[0];
          }
          let valueCallbackResult2 = first;
          if (obj.valueCallback) {
            valueCallbackResult2 = obj.valueCallback(first);
          }
          const obj3 = { value: valueCallbackResult2, rest: str.slice(match[0].length) };
          return obj3;
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
