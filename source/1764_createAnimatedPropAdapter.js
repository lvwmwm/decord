// Module ID: 1764
// Function ID: 19682
// Name: createAnimatedPropAdapter
// Dependencies: [1681]

// Module 1764 (createAnimatedPropAdapter)
const require = arg1;
const dependencyMap = arg6;
arg5.createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (null != arr) {
    const item = arr.forEach((arg0) => {
      obj[arg0] = true;
    });
  }
  const result = obj(1681).addWhitelistedNativeProps(obj);
  return arg0;
};
