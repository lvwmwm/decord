// Module ID: 19745
// Function ID: 19746
// Name: useControlsHiddenPresentation
// Dependencies: [11395, 5231, 1652, 5793, 1705, 2]
// Exports: default

// Module 19745 (useControlsHiddenPresentation)
import _mod1652 from "module_1652" /* 1652 */;
import native from "native" /* 5231 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11395 */;
import size from "module_2" /* 2 */;

let tmp;
const _mod1705 = tmp(1705);
const spring_spring = tmp(5793);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let obj = { overshootClamping: true };
const merged = Object.assign(VoicePanelConstants.MODE_CHANGE_PHYSICS);
let closure_4 = { code: "(function useControlsHiddenPresentationTsx1(){let[yeeted,mode,VoicePanelModes,wrapperSpecs]=this.__closure;return{pointerEvents:yeeted||mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};})" };
let closure_5 = { code: "(function useControlsHiddenPresentationTsx2(){let[withSpring,yeeted,wrapperSpecs,HIDDEN_OPACITY_PHYSICS,cleanUp,scheduleOnRN]=this.__closure;return{opacity:withSpring(yeeted||wrapperSpecs.get().hidden?0:1,HIDDEN_OPACITY_PHYSICS,'respect-motion-settings',cleanUp!=null?function(finished){if(finished&&yeeted){scheduleOnRN(cleanUp);}}:undefined)};})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useControlsHiddenPresentation.tsx");

export default function useControlsHiddenPresentation(arg0, arg1) {
  let cleanUp;
  let state;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let tmp = require;
  ({ state, cleanUp } = obj);
  let tmp3 = state === native.TransitionStates.YEETED;
  const items = [closure_4, tmp3, arg0, VoicePanelModes, arg1];
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  function useControlsHiddenPresentationTsx1() {
    const tmp = c0;
    if (!tmp) {
      let str;
      if (_undefined.get() === _undefined2.PANEL) {
        str = "auto";
      }
      return { pointerEvents: str };
    }
    str = "none";
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  useControlsHiddenPresentationTsx1.__closure = items1;
  useControlsHiddenPresentationTsx1.__workletHash = 10191676178362;
  useControlsHiddenPresentationTsx1.__initData = tmp4;
  const obj2 = _mod1652;
  const animatedProps = obj2.useAnimatedProps(useControlsHiddenPresentationTsx1);
  const items2 = [closure_5, , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items2[1] = spring_spring.withSpring;
  items2[2] = tmp3;
  items2[3] = arg1;
  items2[4] = obj;
  items2[5] = cleanUp;
  items2[6] = _mod1705.scheduleOnRN;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  function useControlsHiddenPresentationTsx2() {
    let num;
    let tmp = c0;
    if (c1) {
      num = 0;
    } else {
      num = 1;
    }
    let fn;
    const tmp3 = c3;
    if (null != c4) {
      fn = (arg0) => {
        const tmp = arg0 && closure_1_1;
        if (tmp) {
          closure_1_5(closure_1_4);
        }
      };
    }
    obj = { opacity: tmp(num, tmp3, "respect-motion-settings", fn) };
    return obj;
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  useControlsHiddenPresentationTsx2.__closure = items3;
  useControlsHiddenPresentationTsx2.__workletHash = 14159877281811;
  useControlsHiddenPresentationTsx2.__initData = tmp11;
  const obj3 = { hiddenProps: animatedProps, hiddenStyles: useAnimatedStyle(useControlsHiddenPresentationTsx2) };
  return obj3;
};
