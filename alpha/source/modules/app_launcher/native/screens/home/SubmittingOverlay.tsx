// Module ID: 13031
// Function ID: 13032
// Name: SubmittingOverlay
// Dependencies: [21, 5043, 575, 1654, 5644, 5645, 5654, 2]
// Exports: SubmittingOverlay

// Module 13031 (SubmittingOverlay)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1654 from "module_1654" /* 1654 */;
import spring_spring from "spring/spring" /* 5644 */;
import springPresets from "springPresets" /* 5645 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const _modDef1654 = _mod1654;
let num;

let tmp2;
const ButtonEllipsis = tmp2(5654);
const jsx = Fragment.jsx;
let obj = { ellipsis: { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" } };
({ backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" });
let closure_4 = createStyles.createStyles(obj);
let closure_5 = { code: "(function SubmittingOverlayTsx1(){let[withSpring,submitting,SUBTLE_SPRING]=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};})" };
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export function SubmittingOverlay(submitting) {
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  submitting = submitting.submitting;
  const style = submitting.style;
  let tmp = closure_4();
  const items = [closure_5, , , ];
  const useAnimatedStyle = _mod1654.useAnimatedStyle;
  _mod1654;
  items[1] = spring_spring.withSpring;
  items[2] = submitting;
  items[3] = springPresets.SUBTLE_SPRING;
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class SubmittingOverlayTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2, "animate-always") };
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  SubmittingOverlayTsx1.__closure = items1;
  SubmittingOverlayTsx1.__workletHash = 16951680167717;
  SubmittingOverlayTsx1.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(SubmittingOverlayTsx1);
  const items2 = [style, tmp.ellipsis, animatedStyle];
  const View = _modDef1654.View;
  if (submitting) {
    submitting = tmp10(ButtonEllipsis.Ellipsis, { variant: "active", size: "md" });
  }
  return <View style={items2}>{submitting}</View>;
}
