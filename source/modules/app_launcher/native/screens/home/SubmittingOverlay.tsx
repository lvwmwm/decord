// Module ID: 11170
// Function ID: 86884
// Name: SubmittingOverlay
// Dependencies: [37093376, 535691264, 732626944, 732758016, 131072, 108658688, 117440512, 251658240]
// Exports: SubmittingOverlay

// Module 11170 (SubmittingOverlay)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[1]);
let obj = {};
obj = { __v_isVNode: "string", _$esjava$I_x: "string", EmbeddedActivitiesStore: "color", backgroundColor: importDefault(dependencyMap[2]).colors.BACKGROUND_SCRIM };
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
    submitting = jsx(require(dependencyMap[6]).Ellipsis, {});
  }
  obj.children = submitting;
  return jsx(importDefault(dependencyMap[3]).View, obj);
};
