// Module ID: 13210
// Function ID: 100216
// Name: getReactNativeDimensionsWithDimensions
// Dependencies: []

// Module 13210 (getReactNativeDimensionsWithDimensions)
arg5.getReactNativeDimensionsWithDimensions = function getReactNativeDimensionsWithDimensions(value, value2) {
  let obj = {};
  obj = {};
  if (value) {
    obj = {};
    const _Math = Math;
    obj.screenWidth = Math.ceil(value.width);
    const _Math2 = Math;
    obj.screenHeight = Math.ceil(value.height);
    ({ scale: obj3.screenScale, fontScale: obj3.screenFontScale } = value);
  }
  if (value2) {
    const obj1 = {};
    const _Math3 = Math;
    obj1.windowWidth = Math.ceil(value2.width);
    const _Math4 = Math;
    obj1.windowHeight = Math.ceil(value2.height);
    ({ scale: obj4.windowScale, fontScale: obj4.windowFontScale } = value2);
    obj = obj1;
  }
  return Object.assign({}, obj, obj);
};
