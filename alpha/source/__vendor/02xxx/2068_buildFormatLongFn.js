// Module ID: 2068
// Function ID: 2069
// Name: buildFormatLongFn
// Dependencies: []
// Exports: default

// Module 2068 (buildFormatLongFn)

export default function buildFormatLongFn(arg0) {
  let closure_0 = arg0;
  return function() {
    if (arguments.length > 0) {
      let first;
      let defaultWidth;
      if (undefined !== arguments[0]) {
        first = arguments[0];
      }
      if (first.width) {
        const _String = String;
        defaultWidth = String(first.width);
      } else {
        defaultWidth = closure_0.defaultWidth;
      }
      return closure_0.formats[defaultWidth] || closure_0.formats[closure_0.defaultWidth];
    }
    first = {};
  };
};
