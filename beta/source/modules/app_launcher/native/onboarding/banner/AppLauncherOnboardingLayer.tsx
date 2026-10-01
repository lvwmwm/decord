// Module ID: 11529
// Function ID: 11530
// Name: AppLauncherOnboardingLayer
// Dependencies: [19, 17, 8843, 21, 4836, 576, 11530, 2]

// Module 11529 (AppLauncherOnboardingLayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 8843 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let visibleContent;

let rect;
const View = react_native.View;
let closure_3 = useChatBottomManagerUIStore.useBestActiveChatInputContainerHeight;
const jsx = Fragment.jsx;
const obj = { container: rect };
rect = { opacity: 1, width: "100%", position: "absolute", left: 0, top: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo((visibleContent) => {
  let bottomOffset;
  let context;
  visibleContent = visibleContent.visibleContent;
  ({ context, bottomOffset } = visibleContent);
  let tmp3 = null;
  const tmp = closure_5();
  if (null != visibleContent) {
    const items = [tmp.container, ];
    const obj2 = { bottom: tmp2 + bottomOffset };
    items[1] = obj2;
    tmp3 = <View style={items}>{null}</View>;
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx");

export default memoResult;
