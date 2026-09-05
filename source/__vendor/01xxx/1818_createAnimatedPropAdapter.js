// Module ID: 1818
// Function ID: 1819
// Name: createAnimatedPropAdapter
// Dependencies: [1735]

// Module 1818 (createAnimatedPropAdapter)
const require = arg1;
const dependencyMap = arg6;
arg5.createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((arg0) => {
      obj[arg0] = true;
    });
  }
  const result = obj(1735).addWhitelistedNativeProps(obj);
  return arg0;
};
