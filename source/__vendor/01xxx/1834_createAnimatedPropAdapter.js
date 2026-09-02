// Module ID: 1834
// Function ID: 1835
// Name: createAnimatedPropAdapter
// Dependencies: [1751]

// Module 1834 (createAnimatedPropAdapter)
const require = arg1;
const dependencyMap = arg6;
arg5.createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((arg0) => {
      obj[arg0] = true;
    });
  }
  const result = obj(1751).addWhitelistedNativeProps(obj);
  return arg0;
};
