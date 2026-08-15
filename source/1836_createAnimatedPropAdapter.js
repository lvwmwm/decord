// Module ID: 1836
// Function ID: 1837
// Name: createAnimatedPropAdapter
// Dependencies: [1753]

// Module 1836 (createAnimatedPropAdapter)
const require = arg1;
const dependencyMap = arg6;
arg5.createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((arg0) => {
      obj[arg0] = true;
    });
  }
  const result = obj(1753).addWhitelistedNativeProps(obj);
  return arg0;
};
