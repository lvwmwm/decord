// Module ID: 4029
// Function ID: 33240
// Name: isFabric
// Dependencies: [4030, 477, 2]
// Exports: isIosFabric

// Module 4029 (isFabric)
function isFabric() {
  let isFabricResult;
  if (null != importDefault(4030)) {
    isFabricResult = importDefault(4030).isFabric();
    const obj = importDefault(4030);
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
