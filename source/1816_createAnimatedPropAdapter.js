// Module ID: 1816
// Function ID: 1817
// Name: createAnimatedPropAdapter
// Dependencies: [1733]

// Module 1816 (createAnimatedPropAdapter)
const require = arg1;
const dependencyMap = arg6;
arg5.createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((arg0) => {
      obj[arg0] = true;
    });
  }
  const result = obj(1733).addWhitelistedNativeProps(obj);
  return arg0;
};
