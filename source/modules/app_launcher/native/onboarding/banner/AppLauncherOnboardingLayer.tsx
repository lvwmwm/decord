// Module ID: 11197
// Function ID: 87097
// Dependencies: [31, 27, 9349, 33, 4130, 689, 11198, 2]

// Module 11197
import { View } from "get ActivityIndicator";
import { useBestActiveChatInputContainerHeight as closure_3 } from "getChatInputContainerHeight";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let obj = {};
obj = { opacity: 1, width: "100%", position: "absolute", left: 0, top: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM };
obj.container = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo((visibleContent) => {
  let bottomOffset;
  let context;
  visibleContent = visibleContent.visibleContent;
  ({ context, bottomOffset } = visibleContent);
  let tmp3 = null;
  if (null != visibleContent) {
    let obj = {};
    const items = [tmp.container, ];
    obj = { bottom: tmp2 + bottomOffset };
    items[1] = obj;
    obj.style = items;
    obj = { context, visibleContent };
    obj.children = jsx(importDefault(11198), { context, visibleContent });
    tmp3 = <View context={context} visibleContent={visibleContent} />;
  }
  return tmp3;
});
const result = require("getChatInputContainerHeight").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx");

export default memoResult;
