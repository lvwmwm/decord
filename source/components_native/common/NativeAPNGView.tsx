// Module ID: 9609
// Function ID: 74863
// Dependencies: []

// Module 9609
const _module = require(dependencyMap[1]);
if (_module.isAndroid()) {
  let _default = require(dependencyMap[2]).default;
} else {
  _default = require(dependencyMap[0]).requireNativeComponent("APNGStickerView");
}
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
