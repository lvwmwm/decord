// Module ID: 3994
// Function ID: 33125
// Name: isFabric
// Dependencies: [3995, 477, 2]
// Exports: isIosFabric

// Module 3994 (isFabric)
function isFabric() {
  let isFabricResult;
  if (null != importDefault(3995)) {
    isFabricResult = importDefault(3995).isFabric();
    const obj = importDefault(3995);
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
