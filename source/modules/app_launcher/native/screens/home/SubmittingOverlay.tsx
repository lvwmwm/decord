// Module ID: 11172
// Function ID: 86853
// Name: SubmittingOverlay
// Dependencies: [33, 4131, 689, 3992, 4543, 4547, 4559, 2]
// Exports: SubmittingOverlay

// Module 11172 (SubmittingOverlay)
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
obj.ellipsis = obj;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_5 = { code: "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}" };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export const SubmittingOverlay = function SubmittingOverlay(submitting) {
  submitting = submitting.submitting;
  let obj = submitting(3992);
  class S {
    constructor() {
      obj = {};
      obj2 = submitting(outer1_2[4]);
      num = 0;
      if (submitting) {
        num = 1;
      }
      obj.opacity = obj2.withSpring(num, submitting(outer1_2[5]).SUBTLE_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: submitting(4543).withSpring, submitting, SUBTLE_SPRING: submitting(4547).SUBTLE_SPRING };
  S.__closure = obj;
  S.__workletHash = 492443733468;
  S.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: items };
  items = [submitting.style, callback().ellipsis, animatedStyle];
  if (submitting) {
    submitting = jsx(submitting(4559).Ellipsis, { variant: "active", size: "md" });
  }
  obj.children = submitting;
  return jsx(importDefault(3992).View, { style: items });
};
