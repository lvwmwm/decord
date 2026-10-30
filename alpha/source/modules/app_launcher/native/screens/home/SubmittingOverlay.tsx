// Module ID: 12210
// Function ID: 12211
// Name: SubmittingOverlay
// Dependencies: [21, 5009, 575, 5090, 5632, 5633, 5642, 2]
// Exports: SubmittingOverlay

// Module 12210 (SubmittingOverlay)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let num, tmp3;

let obj2;
let tmp;
const springPresets = tmp(5633);
const jsx = Fragment.jsx;
let obj = { ellipsis: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
let closure_4 = createStyles.createStyles(obj);
const __initData = { code: "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}" };
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export function SubmittingOverlay(submitting) {
  submitting = submitting.submitting;
  const style = submitting.style;
  let tmp = closure_4();
  let obj = submitting(5090);
  const tmp2 = submitting;
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      tmp3 = closure_0(closure_2[4]);
      num = 0;
      withSpring = tmp3.withSpring;
      if (submitting) {
        num = 1;
      }
      obj = { opacity: withSpring(num, tmp(tmp2[5]).SUBTLE_SPRING, "animate-always") };
      return obj;
    }
  }
  S.__closure = { withSpring: submitting(5632).withSpring, submitting, SUBTLE_SPRING: submitting(5633).SUBTLE_SPRING };
  S.__workletHash = 492443733468;
  S.__initData = __initData;
  ({ withSpring: submitting(5632).withSpring, submitting, SUBTLE_SPRING: submitting(5633).SUBTLE_SPRING });
  const animatedStyle = obj.useAnimatedStyle(S);
  const items = [style, tmp.ellipsis, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  if (submitting) {
    submitting = tmp5(tmp2(5642).Ellipsis, { variant: "active", size: "md" });
  }
  return <View style={items}>{submitting}</View>;
}
