// Module ID: 11210
// Function ID: 87203
// Name: SubmittingOverlay
// Dependencies: [33, 4130, 689, 3991, 4542, 4546, 4558, 2]
// Exports: SubmittingOverlay

// Module 11210 (SubmittingOverlay)
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
  let obj = submitting(3991);
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
  obj = { withSpring: submitting(4542).withSpring, submitting, SUBTLE_SPRING: submitting(4546).SUBTLE_SPRING };
  S.__closure = obj;
  S.__workletHash = 492443733468;
  S.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: items };
  items = [submitting.style, callback().ellipsis, animatedStyle];
  if (submitting) {
    submitting = jsx(submitting(4558).Ellipsis, { variant: "active", size: "md" });
  }
  obj.children = submitting;
  return jsx(importDefault(3991).View, { style: items });
};
