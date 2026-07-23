// Module ID: 95
// Function ID: 1546
// Name: pickScale
// Dependencies: [96]

// Module 95 (pickScale)
const module = arg2;
const dependencyMap = arg6;
arg5.pickScale = function pickScale(scales, _default) {
  let value = _default;
  if (null == _default) {
    value = module(96).get();
    const obj = module(96);
  }
  let num2 = 0;
  if (0 < scales.length) {
    while (scales[num2] < value) {
      num2 = num2 + 1;
    }
    return scales[num2];
  }
  return scales[scales.length - 1] || 1;
};
arg5.setUrlCacheBreaker = function setUrlCacheBreaker(arg0) {
  let closure_2 = arg0;
};
arg5.getUrlCacheBreaker = function getUrlCacheBreaker() {
  let str = "";
  if (null != closure_2) {
    str = closure_2;
  }
  return str;
};
