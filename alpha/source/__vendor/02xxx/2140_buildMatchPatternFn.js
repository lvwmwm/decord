// Module ID: 2140
// Function ID: 2141
// Name: buildMatchPatternFn
// Dependencies: []
// Exports: default

// Module 2140 (buildMatchPatternFn)

export default function buildMatchPatternFn(arg0) {
  const matchPattern = arg0;
  return function(str) {
    if (arguments.length > 1) {
      let obj;
      if (undefined !== arguments[1]) {
        obj = arguments[1];
      }
      const match = str.match(matchPattern.matchPattern);
      if (match) {
        const first = match[0];
        const match1 = str.match(obj2.parsePattern);
        if (match1) {
          let first1;
          if (matchPattern.valueCallback) {
            first1 = obj2.valueCallback(match1[0]);
          } else {
            first1 = match1[0];
          }
          let valueCallbackResult2 = first1;
          if (obj.valueCallback) {
            valueCallbackResult2 = obj.valueCallback(first1);
          }
          const obj3 = { value: valueCallbackResult2, rest: str.slice(first.length) };
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
