// Module ID: 1926
// Function ID: 21778
// Name: buildFormatLongFn
// Dependencies: []
// Exports: default

// Module 1926 (buildFormatLongFn)

export default function buildFormatLongFn(arg0) {
  return () => {
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        let first = arguments[0];
      }
      if (first.width) {
        const _String = String;
        let defaultWidth = String(first.width);
      } else {
        defaultWidth = arg0.defaultWidth;
      }
      let tmp4 = arg0.formats[defaultWidth];
      if (!tmp4) {
        tmp4 = arg0.formats[closure_0.defaultWidth];
      }
      return tmp4;
    }
    first = {};
  };
};
export default exports.default;
