// Module ID: 11169
// Function ID: 86859
// Name: SubmittingOverlay
// Dependencies: []
// Exports: SubmittingOverlay

// Module 11169 (SubmittingOverlay)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[1]);
let obj = {};
obj = { 1660945536: false, 1700178636: false, 1934451533: false, backgroundColor: importDefault(dependencyMap[2]).colors.BACKGROUND_SCRIM };
obj.ellipsis = obj;
let closure_4 = _module.createStyles(obj);
let closure_5 = { code: "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}" };
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export const SubmittingOverlay = function SubmittingOverlay(submitting) {
  submitting = submitting.submitting;
  const require = submitting;
  let obj = require(dependencyMap[3]);
  class S {
    constructor() {
      obj = {};
      obj2 = submitting(closure_2[4]);
      num = 0;
      if (submitting) {
        num = 1;
      }
      obj.opacity = obj2.withSpring(num, submitting(closure_2[5]).SUBTLE_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: require(dependencyMap[4]).withSpring, submitting, SUBTLE_SPRING: require(dependencyMap[5]).SUBTLE_SPRING };
  S.__closure = obj;
  S.__workletHash = 492443733468;
  S.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: items };
  const items = [submitting.style, callback().ellipsis, animatedStyle];
  if (submitting) {
    submitting = jsx(require(dependencyMap[6]).Ellipsis, { 9223372036854775807: true, -9223372036854775808: false });
  }
  obj.children = submitting;
  return jsx(importDefault(dependencyMap[3]).View, obj);
};
