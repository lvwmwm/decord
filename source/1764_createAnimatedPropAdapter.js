// Module ID: 1764
// Function ID: 19676
// Name: createAnimatedPropAdapter
// Dependencies: []

// Module 1764 (createAnimatedPropAdapter)
arg5.createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  arr = obj;
  if (null != arr) {
    const item = arr.forEach((arg0) => {
      obj[arg0] = true;
    });
  }
  const result = arr(arg6[0]).addWhitelistedNativeProps(obj);
  return arg0;
};
