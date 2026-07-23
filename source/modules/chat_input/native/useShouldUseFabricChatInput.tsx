// Module ID: 11115
// Function ID: 86499
// Name: resolveShouldUseFabric
// Dependencies: [477, 3994, 11116, 2]
// Exports: shouldUseFabricChatInput, useShouldUseFabricChatInput

// Module 11115 (resolveShouldUseFabric)
function resolveShouldUseFabric(enabled) {
  if (null != closure_3) {
    let tmp4 = closure_3;
  } else {
    const tmp3 = !require(477) /* set */.isAndroid();
    tmp4 = !tmp3;
    if (tmp3) {
      const obj2 = require(3994) /* isFabric */;
      tmp4 = require(3994) /* isFabric */.isIosFabric() && enabled;
      const tmp7 = require(3994) /* isFabric */.isIosFabric() && enabled;
    }
    closure_3 = tmp4;
    const obj = require(477) /* set */;
  }
  return tmp4;
}
const result = require("apexExperiment").fileFinishedImporting("modules/chat_input/native/useShouldUseFabricChatInput.tsx");

export const useShouldUseFabricChatInput = function useShouldUseFabricChatInput() {
  return resolveShouldUseFabric(importDefault(11116).useConfig({ location: "chat_input" }).enabled);
};
export const shouldUseFabricChatInput = function shouldUseFabricChatInput() {
  if (null != closure_3) {
    let tmpResult = closure_3;
  } else {
    let obj = require(477) /* set */;
    let enabled = !obj.isAndroid();
    if (enabled) {
      obj = { location: "chat_input" };
      enabled = importDefault(11116).getConfig(obj).enabled;
      const obj2 = importDefault(11116);
    }
    tmpResult = resolveShouldUseFabric(enabled);
    const tmp = resolveShouldUseFabric;
  }
  return tmpResult;
};
