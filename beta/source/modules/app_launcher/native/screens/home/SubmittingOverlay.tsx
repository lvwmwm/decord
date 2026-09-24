// Module ID: 12226
// Function ID: 12227
// Name: SubmittingOverlay
// Dependencies: [21, 4790, 580, 558, 568, 4529, 5219, 5223, 5234, 2]

// Module 12226 (SubmittingOverlay)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 580 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4529 */;
import spring from "spring" /* 5219 */;
import springPresets from "springPresets" /* 5223 */;
import createStyles from "createStyles" /* 4790 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let obj = { ellipsis: { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" } };
let closure_4 = createStyles.createStyles(obj);
const __initData = { code: "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,\"animate-always\")};}" };
const __initData2 = { code: "function SubmittingOverlayTsx2(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}" };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export const SubmittingOverlay = ReactCompilerGating.isReactCompilerEnabled() ? ((submitting) => {
  const cResult = submitting(568).c(9);
  submitting = submitting.submitting;
  const style = submitting.style;
  const tmp4 = closure_4();
  let obj = submitting(568);
  let tmp = submitting;
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[6]);
      num = 0;
      if (submitting) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, tmp(tmp2[7]).SUBTLE_SPRING, "animate-always") };
      return obj1;
    }
  }
  const obj2 = submitting(4529);
  S.__closure = { withSpring: submitting(5219).withSpring, submitting, SUBTLE_SPRING: submitting(5223).SUBTLE_SPRING };
  S.__workletHash = 17050905766844;
  S.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(S);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === style) {
      if (cResult[2] === tmp4.ellipsis) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] !== submitting) {
        let tmp8 = submitting;
        if (submitting) {
          tmp8 = jsx(tmp(5234).Ellipsis, { variant: "active", size: "md" });
        }
        cResult[4] = submitting;
        cResult[5] = tmp8;
        let tmp7 = tmp8;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp7) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
      const obj4 = { style: tmp6, children: tmp7 };
      const tmp13 = jsx(ReanimatedRexportDefault.View, { style: tmp6, children: tmp7 });
      cResult[6] = tmp6;
      cResult[7] = tmp7;
      class S {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[6]);
          num = 0;
          if (submitting) {
            num = 1;
          }
          obj1 = { opacity: obj.withSpring(num, tmp(tmp2[7]).SUBTLE_SPRING, "animate-always") };
          return obj1;
        }
      }
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
  }
  const items = [style, tmp4.ellipsis, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = style;
  cResult[2] = tmp4.ellipsis;
  cResult[3] = items;
  tmp6 = items;
}) : ((submitting) => {
  submitting = submitting.submitting;
  let tmp = closure_4();
  const tmp2 = submitting;
  const fn = function u() {
    let num = 0;
    if (submitting) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always") };
  };
  let obj = submitting(4529);
  fn.__closure = { withSpring: submitting(5219).withSpring, submitting, SUBTLE_SPRING: submitting(5223).SUBTLE_SPRING };
  fn.__workletHash = 15672049349439;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items = [submitting.style, tmp.ellipsis, animatedStyle];
  obj3.style = items;
  if (submitting) {
    submitting = tmp5(tmp2(5234).Ellipsis, { variant: "active", size: "md" });
  }
  obj3.children = submitting;
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
});
