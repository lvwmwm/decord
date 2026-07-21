// Module ID: 11156
// Function ID: 86753
// Dependencies: []

// Module 11156
const View = arg1(dependencyMap[1]).View;
let closure_3 = arg1(dependencyMap[2]).useBestActiveChatInputContainerHeight;
const jsx = arg1(dependencyMap[3]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = { lastUsedCommandId: 1916923741, lastUsedTimeMs: 16777215, _formatAuthResponse: 2147472639, rive: -536870861, getChatLayout: -299892737, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SCRIM };
obj.container = obj;
let closure_5 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((visibleContent) => {
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
    obj.children = jsx(importDefault(dependencyMap[6]), obj);
    tmp3 = <View {...obj} />;
  }
  return tmp3;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx");

export default memoResult;
