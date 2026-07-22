// Module ID: 3992
// Function ID: 33120
// Name: isFabric
// Dependencies: []
// Exports: isIosFabric

// Module 3992 (isFabric)
function isFabric() {
  let isFabricResult;
  if (null != importDefault(dependencyMap[0])) {
    isFabricResult = importDefault(dependencyMap[0]).isFabric();
    const obj = importDefault(dependencyMap[0]);
  }
  return null != isFabricResult && isFabricResult;
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("utils/native/FabricUtils.tsx");

export { isFabric };
export const isIosFabric = function isIosFabric() {
  let isIOSResult = require(dependencyMap[1]).isIOS();
  if (isIOSResult) {
    isIOSResult = isFabric();
  }
  return isIOSResult;
};
export const isBridgeless = true === global.RN$Bridgeless;
