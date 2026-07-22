// Module ID: 11105
// Function ID: 86449
// Name: resolveShouldUseFabric
// Dependencies: []
// Exports: shouldUseFabricChatInput, useShouldUseFabricChatInput

// Module 11105 (resolveShouldUseFabric)
function resolveShouldUseFabric(enabled) {
  if (null == tmp4) {
    const tmp3 = !require(dependencyMap[0]).isAndroid();
    let tmp4 = !tmp3;
    if (tmp3) {
      const obj2 = require(dependencyMap[1]);
      tmp4 = require(dependencyMap[1]).isIosFabric() && enabled;
      const tmp7 = require(dependencyMap[1]).isIosFabric() && enabled;
    }
    const obj = require(dependencyMap[0]);
  }
  return tmp4;
}
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/chat_input/native/useShouldUseFabricChatInput.tsx");

export const useShouldUseFabricChatInput = function useShouldUseFabricChatInput() {
  return resolveShouldUseFabric(importDefault(dependencyMap[2]).useConfig({ location: "chat_input" }).enabled);
};
export const shouldUseFabricChatInput = function shouldUseFabricChatInput() {
  if (null != closure_3) {
    let tmpResult = closure_3;
  } else {
    let obj = require(dependencyMap[0]);
    let enabled = !obj.isAndroid();
    if (enabled) {
      obj = { location: "chat_input" };
      enabled = importDefault(dependencyMap[2]).getConfig(obj).enabled;
      const obj2 = importDefault(dependencyMap[2]);
    }
    tmpResult = resolveShouldUseFabric(enabled);
    const tmp = resolveShouldUseFabric;
  }
  return tmpResult;
};
