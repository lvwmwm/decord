// Module ID: 3995
// Function ID: 33138
// Name: isFabric
// Dependencies: [3996, 477, 2]
// Exports: isIosFabric

// Module 3995 (isFabric)
function isFabric() {
  let isFabricResult;
  if (null != importDefault(3996)) {
    isFabricResult = importDefault(3996).isFabric();
    const obj = importDefault(3996);
  }
  return null != isFabricResult && isFabricResult;
}
const result = require("set").fileFinishedImporting("utils/native/FabricUtils.tsx");

export { isFabric };
export const isIosFabric = function isIosFabric() {
  let isIOSResult = require(477) /* set */.isIOS();
  if (isIOSResult) {
    isIOSResult = isFabric();
  }
  return isIOSResult;
};
export const isBridgeless = true === global.RN$Bridgeless;
