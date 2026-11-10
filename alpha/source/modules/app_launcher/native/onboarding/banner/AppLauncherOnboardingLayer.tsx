// Module ID: 12591
// Function ID: 12592
// Name: AppLauncherOnboardingLayer
// Dependencies: [19, 17, 10023, 21, 5142, 575, 12592, 2]

// Module 12591 (AppLauncherOnboardingLayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 10023 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let rect;
const View = react_native.View;
let closure_3 = useChatBottomManagerUIStore.useBestActiveChatInputContainerHeight;
const jsx = Fragment.jsx;
const obj = { container: rect };
rect = { opacity: 1, width: "100%", position: "absolute", left: 0, top: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(function AppLauncherOnboardingLayer(visibleContent) {
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
