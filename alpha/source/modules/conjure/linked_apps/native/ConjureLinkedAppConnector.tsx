// Module ID: 13253
// Function ID: 13254
// Name: ConjureLinkedAppConnector
// Dependencies: [19, 17, 5307, 21, 575, 5306, 504, 1655, 5548, 5551, 13254, 7963, 2]
// Exports: default

// Module 13253 (ConjureLinkedAppConnector)
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import timingPresets from "timingPresets" /* 5551 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let set;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let rect;
let rect1;
let rect2;
let size;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
const PX_12 = nativeDefault.space.PX_12;
const PX_6 = nativeDefault.space.PX_6;
let closure_8 = PX_40 - PX_6;
let createStyles = createStyles_mod;
let obj = { connector: { width: PX_40, height: PX_12, flexShrink: 0 }, line: rect, headStart: rect1, headEnd: rect2, packet: size };
rect = { position: "absolute", left: 0, right: 0, top: PX_12 / 2, height: 2 * StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.ICON_MUTED };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", top: 0, left: -nativeDefault.space.PX_4 };
rect2 = { position: "absolute", top: 0, right: -nativeDefault.space.PX_4 };
size = { position: "absolute", top: (PX_12 - PX_6) / 2, left: 0, width: PX_6, height: PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_BRAND };
let closure_9 = createStyles(obj);
let closure_10 = { code: "(function ConjureLinkedAppConnectorTsx1(){let[progress,flow,interpolate,TRAVEL]=this.__closure;const value=progress.get();const along=flow==='gets'?1-value:value;return{opacity:interpolate(value,[0,0.2,0.8,1],[0,1,1,0]),transform:[{translateX:along*TRAVEL}]};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppConnector.tsx");

export default function ConjureLinkedAppConnector(flow) {
  let ChevronSmallLeftIcon;
  let ChevronSmallRightIcon;
  let items4;
  let items5;
  let obj6;
  let obj8;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp16Result;
  let tmp16Result3;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  flow = flow.flow;
  let sharedValue;
  let tmp = closure_9();
  let tmp2 = flow;
  let obj = flow(sharedValue[6]);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = flow(sharedValue[7]);
  sharedValue = obj2.useSharedValue(0);
  const items1 = [flow, sharedValue, stateFromStores];
  const effect = react.useEffect(() => {
    let tmp2 = null == flow;
    const tmp = flow;
    if (!tmp2) {
      tmp2 = stateFromStores;
    }
    if (!tmp2) {
      let withSequenceResult;
      const result = sharedValue.set(0);
      set = sharedValue.set;
      if ("both" === tmp) {
        const withSequence = _mod1655.withSequence;
        _mod1655;
        const obj = timing_timing;
        const withTimingResult = obj.withTiming(1, timingPresets.timingSlow);
        const obj2 = timing_timing;
        withSequenceResult = withSequence(withTimingResult, obj2.withTiming(0, timingPresets.timingSlow));
      } else {
        const withSequence2 = _mod1655.withSequence;
        _mod1655;
        const obj3 = timing_timing;
        const withTimingResult1 = obj3.withTiming(1, timingPresets.timingSlow);
        const obj4 = timing_timing;
        const withTimingResult2 = obj4.withTiming(0, timingPresets.timingNone);
        const obj5 = timing_timing;
        withSequenceResult = withSequence2(withTimingResult1, withTimingResult2, obj5.withTiming(1, timingPresets.timingSlow));
      }
      const result1 = set(withSequenceResult);
    }
  }, items1);
  const tmp7 = flow(sharedValue[7]);
  const items2 = [closure_10, sharedValue, flow, , ];
  const useAnimatedStyle = tmp7.useAnimatedStyle;
  items2[3] = flow(sharedValue[7]).interpolate;
  items2[4] = closure_8;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp8, tmp9, tmp10, tmp11, tmp12] = items2;
  class ConjureLinkedAppConnectorTsx1 {
    constructor() {
      let items;
      const value = _undefined.get();
      let diff = value;
      if ("gets" === c1) {
        diff = 1 - value;
      }
      const obj = { opacity: _undefined2(value, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), transform: items };
      items = [];
      const obj2 = { translateX: diff * c3 };
      items[0] = obj2;
      return obj;
    }
  }
  const items3 = [tmp9, tmp10, tmp11, tmp12];
  ConjureLinkedAppConnectorTsx1.__closure = items3;
  ConjureLinkedAppConnectorTsx1.__workletHash = 358024267550;
  ConjureLinkedAppConnectorTsx1.__initData = tmp8;
  let obj3 = { style: tmp.connector, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items4 };
  let obj4 = { style: tmp.line };
  const animatedStyle = useAnimatedStyle(ConjureLinkedAppConnectorTsx1);
  items4 = [closure_6(closure_4, obj4), , , ];
  const tmp14 = closure_7;
  if ("gets" === flow) {
    let obj5 = { style: tmp.headStart, children: tmp16(ChevronSmallLeftIcon, obj6) };
    obj6 = { size: "xxs", color: stateFromStores(sharedValue[4]).colors.ICON_MUTED };
    ChevronSmallLeftIcon = tmp2(tmp3[10]).ChevronSmallLeftIcon;
    tmp16Result = tmp16(tmp15, obj5);
  } else {
    tmp16Result = null;
  }
  items4[1] = tmp16Result;
  if ("sends" === flow) {
    const obj7 = { style: tmp.headEnd, children: closure_6(ChevronSmallRightIcon, obj8) };
    obj8 = { size: "xxs", color: stateFromStores(sharedValue[4]).colors.ICON_MUTED };
    ChevronSmallRightIcon = tmp2(tmp3[11]).ChevronSmallRightIcon;
    tmp16Result3 = tmp16(tmp15, obj7);
  } else {
    tmp16Result3 = null;
  }
  items4[2] = tmp16Result3;
  let tmp16Result4 = null;
  if (null != flow) {
    tmp16Result4 = null;
    if (!stateFromStores) {
      const obj9 = { style: items5 };
      items5 = [tmp.packet, animatedStyle];
      tmp16Result4 = tmp16(stateFromStores(tmp3[7]).View, obj9);
    }
  }
  items4[3] = tmp16Result4;
  return tmp14(closure_4, obj3);
};
