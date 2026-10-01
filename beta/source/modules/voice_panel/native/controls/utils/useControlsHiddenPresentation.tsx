// Module ID: 17002
// Function ID: 17003
// Name: useControlsHiddenPresentation
// Dependencies: [11755, 4540, 4566, 5280, 2]
// Exports: default

// Module 17002 (useControlsHiddenPresentation)
import spring from "spring" /* 5280 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, num, tmp2, tmp3;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let obj = { overshootClamping: true };
const merged = Object.assign(VoicePanelConstants.MODE_CHANGE_PHYSICS);
const __initData = { code: "function useControlsHiddenPresentationTsx1(){const{yeeted,mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:yeeted||mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};}" };
const __initData2 = { code: "function useControlsHiddenPresentationTsx2(){const{withSpring,yeeted,wrapperSpecs,HIDDEN_OPACITY_PHYSICS,cleanUp,runOnJS}=this.__closure;return{opacity:withSpring(yeeted||wrapperSpecs.get().hidden?0:1,HIDDEN_OPACITY_PHYSICS,'respect-motion-settings',cleanUp!=null?function(finished){if(finished&&yeeted){runOnJS(cleanUp)();}}:undefined)};}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useControlsHiddenPresentation.tsx");

export default function useControlsHiddenPresentation(mode, wrapperSpecs) {
  let closure_3;
  let fn;
  let obj3;
  let obj5;
  _require = mode;
  dependencyMap = wrapperSpecs;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const cleanUp = obj.cleanUp;
  let tmp = obj.state === require("native").TransitionStates.YEETED;
  HIDDEN_OPACITY_PHYSICS = tmp;
  const obj2 = { hiddenProps: obj3.useAnimatedProps(fn), hiddenStyles: obj5.useAnimatedStyle(S) };
  fn = function _() {
    const tmp = closure_3;
    if (!tmp) {
      let str;
      if (mode.get() === VoicePanelModes.PANEL) {
        str = "auto";
      }
      return { pointerEvents: str };
    }
    str = "none";
  };
  const obj4 = { yeeted: tmp, mode, VoicePanelModes: cleanUp, wrapperSpecs };
  fn.__closure = obj4;
  fn.__workletHash = 2182108251011;
  fn.__initData = __initData;
  obj3 = require("ReanimatedRexport");
  obj5 = require("ReanimatedRexport");
  class S {
    constructor() {
      tmp = closure_0(closure_1[3]);
      withSpring = tmp.withSpring;
      if (closure_3) {
        num = 0;
      } else {
        tmp2 = closure_1;
        num = 1;
      }
      tmp3 = closure_3;
      fn = undefined;
      if (null != cleanUp) {
        fn = (arg0) => {
          const tmp = arg0 && closure_1_3;
          if (tmp) {
            const obj = mode(wrapperSpecs[2]);
            obj.runOnJS(cleanUp)();
          }
        };
      }
      obj = { opacity: withSpring(num, tmp3, "respect-motion-settings", fn) };
      return obj;
    }
  }
  S.__closure = { withSpring: require("spring").withSpring, yeeted: tmp, wrapperSpecs, HIDDEN_OPACITY_PHYSICS, cleanUp, runOnJS: require("ReanimatedRexport").runOnJS };
  S.__workletHash = 13662769817707;
  S.__initData = __initData2;
  ({ withSpring: require("spring").withSpring, yeeted: tmp, wrapperSpecs, HIDDEN_OPACITY_PHYSICS, cleanUp, runOnJS: require("ReanimatedRexport").runOnJS });
  return obj2;
};
