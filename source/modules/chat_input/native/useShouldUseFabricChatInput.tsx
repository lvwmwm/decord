// Module ID: 11378
// Function ID: 11379
// Name: useShouldUseFabricChatInput
// Dependencies: [500, 4039, 11379, 2]
// Exports: shouldUseFabricChatInput, useShouldUseFabricChatInput

// Module 11378 (useShouldUseFabricChatInput)
const chat_input = "chat_input";
const result = require("apexExperiment").fileFinishedImporting("modules/chat_input/native/useShouldUseFabricChatInput.tsx");

export const useShouldUseFabricChatInput = function useShouldUseFabricChatInput() {
  importDefault(11379);
  if (null != closure_3) {
    let isAndroidResult = closure_3;
  } else {
    isAndroidResult = require(500) /* set */.isAndroid();
    if (!isAndroidResult) {
      const tmp4Result = tmp4(4039);
      isAndroidResult = tmp4(4039).isIosFabric() && tmp3;
      const tmp6 = tmp4(4039).isIosFabric() && tmp3;
    }
    closure_3 = isAndroidResult;
    const obj = require(500) /* set */;
    tmp4 = require;
  }
  return isAndroidResult;
};
export const shouldUseFabricChatInput = function shouldUseFabricChatInput() {
  if (null != closure_3) {
    let isAndroidResult = closure_3;
  } else {
    isAndroidResult = require(500) /* set */.isAndroid();
    let enabled = !isAndroidResult;
    if (!isAndroidResult) {
      let obj = importDefault(11379);
      obj = { location: null };
      obj[0] = chat_input;
      enabled = obj.getConfig(obj).enabled;
    }
    if (null != closure_3) {
      isAndroidResult = closure_3;
    } else {
      let tmp6Result = tmp6(500);
      isAndroidResult = tmp6Result.isAndroid();
      if (!isAndroidResult) {
        tmp6Result = tmp6(4039);
        isAndroidResult = tmp6Result.isIosFabric() && enabled;
        const tmp5 = tmp6Result.isIosFabric() && enabled;
      }
      closure_3 = isAndroidResult;
    }
    const obj5 = require(500) /* set */;
  }
  return isAndroidResult;
};
