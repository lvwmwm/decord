// Module ID: 11236
// Function ID: 11237
// Name: SubmittingOverlay
// Dependencies: [21, 4661, 712, 4115, 4744, 4748, 4760, 2]
// Exports: SubmittingOverlay

// Module 11236 (SubmittingOverlay)
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { ellipsis: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
let closure_5 = { code: "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}" };
const result = require("Themes").fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export const SubmittingOverlay = function SubmittingOverlay(submitting) {
  submitting = submitting.submitting;
  let obj = submitting(4115);
  class S {
    constructor() {
      tmp = submitting;
      tmp2 = outer1_2;
      obj = submitting(outer1_2[4]);
      num = 0;
      if (submitting) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, tmp(tmp2[5]).SUBTLE_SPRING, "animate-always") };
      return obj;
    }
  }
  obj = { withSpring: submitting(4744).withSpring, submitting, SUBTLE_SPRING: submitting(4748).SUBTLE_SPRING };
  S.__closure = obj;
  S.__workletHash = 492443733468;
  S.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: items, children: null };
  items = [submitting.style, callback().ellipsis, animatedStyle];
  if (submitting) {
    submitting = tmp5(submitting(4760).Ellipsis, { variant: "active", size: "md" });
  }
  obj[1] = submitting;
  return jsx(importDefault(4115).View, { style: items, children: null });
};
