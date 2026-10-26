// Module ID: 16527
// Function ID: 16528
// Name: QuestDockDragHandle
// Dependencies: [19, 17, 6710, 16440, 21, 4971, 558, 576, 16441, 5052, 5247, 1128, 5582, 7168, 16439, 2]

// Module 16527 (QuestDockDragHandle)
import react_native from "react-native" /* 17 */;
import spring from "spring" /* 5247 */;
import QuestConstants from "QuestConstants" /* 6710 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7168 */;
import QuestDockConstants from "QuestDockConstants" /* 16440 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { dragHandleWrapper: obj2, dragHandleOverlay: obj3 };
obj2 = { bottom: undefined, zIndex: 4 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { bottom: undefined };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const __initData = { code: "function QuestDockDragHandleTsx1(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
const __initData2 = { code: "function QuestDockDragHandleTsx2(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData3 = { code: "function QuestDockDragHandleTsx3(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData4 = { code: "function QuestDockDragHandleTsx4(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
const __initData5 = { code: "function QuestDockDragHandleTsx5(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData6 = { code: "function QuestDockDragHandleTsx6(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockDragHandle(isExpanded) {
  let activeQuestDockMode;
  let closure_1;
  let items;
  const tmp = activeQuestDockMode;
  const tmp2 = dependencyMap;
  let obj = activeQuestDockMode(576);
  const cResult = obj.c(23);
  isExpanded = isExpanded.isExpanded;
  const variant = isExpanded.variant;
  const tmp4 = closure_8();
  activeQuestDockMode = react.useContext(activeQuestDockMode(16441).QuestDockGestureContext).activeQuestDockMode;
  importDefault = tmp5;
  let obj2 = activeQuestDockMode(5052);
  const fn = function c() {
    let items;
    let num = 0;
    const obj = activeQuestDockMode;
    if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
      num = 0;
      if (obj.get() !== tmp.SOFT_DISMISSED) {
        num = -4;
      }
    }
    const obj2 = { transform: items };
    items = [{ translateY: num }];
    return obj2;
  };
  const obj3 = { activeQuestDockMode, QuestDockMode };
  fn.__closure = obj3;
  fn.__workletHash = 8792527248223;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = activeQuestDockMode(5052);
  class M {
    constructor() {
      spring;
      const tmp3 = closure_1;
      if (!tmp3) {
        let num;
        if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
          num = 0;
        }
        const obj2 = { opacity: tmp2(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
        return obj2;
      }
      num = 1;
    }
  }
  M.__closure = { withSpring: activeQuestDockMode(5247).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  M.__workletHash = 6896281369829;
  M.__initData = __initData2;
  ({ withSpring: activeQuestDockMode(5247).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle1 = obj4.useAnimatedStyle(M);
  const fn2 = function k() {
    spring;
    const tmp3 = closure_1;
    if (!tmp3) {
      let num;
      if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
        num = 0.5;
      }
      const obj2 = { opacity: tmp2(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
      return obj2;
    }
    num = 0;
  };
  const obj6 = activeQuestDockMode(5052);
  fn2.__closure = { withSpring: activeQuestDockMode(5247).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn2.__workletHash = 7780416831295;
  fn2.__initData = __initData3;
  ({ withSpring: activeQuestDockMode(5247).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle2 = obj6.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle2) {
    let tmp9;
    let tmp10;
    let tmp12;
    if (cResult[1] === tmp4.dragHandleOverlay) {
      tmp9 = cResult[2];
    }
    if (cResult[3] !== isExpanded) {
      let stringResult;
      const intl = tmp(1128).intl;
      const string = intl.string;
      const t = tmp(1128).t;
      if (isExpanded) {
        stringResult = string(t["GQ+4bk"]);
      } else {
        stringResult = string(t.Yplnt6);
      }
      let num = 3;
      cResult[3] = isExpanded;
      cResult[4] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp10) {
      const obj8 = { variant: "overlay", accessibilityLabel: tmp10 };
      const tmp14 = closure_6(tmp(5582).ActionSheetHeaderBar, obj8);
      cResult[5] = tmp10;
      cResult[6] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp9) {
      let tmp15;
      if (cResult[8] === tmp12) {
        tmp15 = cResult[9];
      }
      if (cResult[10] === animatedStyle1) {
        let tmp19;
        let tmp21;
        let tmp24;
        if (cResult[11] === tmp4.dragHandleOverlay) {
          tmp19 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp23 = closure_6(tmp(5582).ActionSheetHeaderBar, { variant: "default" });
          cResult[13] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        if (cResult[14] !== tmp19) {
          const obj9 = { style: tmp19, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp21 };
          const tmp27 = closure_6(ReanimatedNativeViewDefault, obj9);
          cResult[14] = tmp19;
          cResult[15] = tmp27;
          tmp24 = tmp27;
        } else {
          tmp24 = cResult[15];
        }
        if (cResult[16] === animatedStyle) {
          if (cResult[17] === tmp15) {
            let tmp28;
            if (cResult[18] === tmp24) {
              tmp28 = cResult[19];
            }
            if (cResult[20] === tmp4.dragHandleWrapper) {
              let tmp33;
              if (cResult[21] === tmp28) {
                tmp33 = cResult[22];
              }
              return tmp33;
            }
            const obj10 = { style: tmp4.dragHandleWrapper, children: tmp28 };
            const tmp36 = closure_6(ReanimatedNativeViewDefault, obj10);
            cResult[20] = tmp4.dragHandleWrapper;
            cResult[21] = tmp28;
            cResult[22] = tmp36;
            tmp33 = tmp36;
          }
        }
        const obj11 = { style: animatedStyle, layout: tmp(16439).dimensionsLayoutTransition, children: items };
        items = [tmp15, tmp24];
        const tmp31 = ReanimatedNativeViewDefault;
        const tmp32 = closure_7(tmp31, obj11);
        cResult[16] = animatedStyle;
        cResult[17] = tmp15;
        cResult[18] = tmp24;
        cResult[19] = tmp32;
        tmp28 = tmp32;
      }
      const items1 = [tmp4.dragHandleOverlay, animatedStyle1];
      cResult[10] = animatedStyle1;
      cResult[11] = tmp4.dragHandleOverlay;
      cResult[12] = items1;
      tmp19 = items1;
    }
    const obj12 = { style: tmp9, children: tmp12 };
    const tmp18 = closure_6(ReanimatedNativeViewDefault, obj12);
    cResult[7] = tmp9;
    cResult[8] = tmp12;
    cResult[9] = tmp18;
    tmp15 = tmp18;
  }
  const items2 = [tmp4.dragHandleOverlay, animatedStyle2];
  cResult[0] = animatedStyle2;
  cResult[1] = tmp4.dragHandleOverlay;
  cResult[2] = items2;
  tmp9 = items2;
}) : (function QuestDockDragHandle(arg0) {
  let ActionSheetHeaderBar;
  let activeQuestDockMode;
  let closure_1;
  let isExpanded;
  let items;
  let items1;
  let items2;
  let obj8;
  let stringResult;
  let tmp11;
  let tmp12;
  let variant;
  ({ isExpanded, variant } = arg0);
  const tmp = closure_8();
  let tmp3 = dependencyMap;
  const tmp2 = activeQuestDockMode;
  activeQuestDockMode = react.useContext(activeQuestDockMode(16441).QuestDockGestureContext).activeQuestDockMode;
  importDefault = tmp4;
  let obj = activeQuestDockMode(5052);
  const fn = function c() {
    let items;
    let num = 0;
    const obj = activeQuestDockMode;
    if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
      num = 0;
      if (obj.get() !== tmp.SOFT_DISMISSED) {
        num = -4;
      }
    }
    const obj2 = { transform: items };
    items = [{ translateY: num }];
    return obj2;
  };
  let obj2 = { activeQuestDockMode, QuestDockMode };
  fn.__closure = obj2;
  fn.__workletHash = 15319778954170;
  fn.__initData = __initData4;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const fn2 = function l() {
    spring;
    const tmp3 = closure_1;
    if (!tmp3) {
      let num;
      if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
        num = 0;
      }
      const obj2 = { opacity: tmp2(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
      return obj2;
    }
    num = 1;
  };
  const obj3 = activeQuestDockMode(5052);
  fn2.__closure = { withSpring: activeQuestDockMode(5247).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn2.__workletHash = 6699454768642;
  fn2.__initData = __initData5;
  ({ withSpring: activeQuestDockMode(5247).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  const fn3 = function _() {
    spring;
    const tmp3 = closure_1;
    if (!tmp3) {
      let num;
      if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
        num = 0.5;
      }
      const obj2 = { opacity: tmp2(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
      return obj2;
    }
    num = 0;
  };
  const obj5 = activeQuestDockMode(5052);
  fn3.__closure = { withSpring: activeQuestDockMode(5247).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn3.__workletHash = 2024198657306;
  fn3.__initData = __initData6;
  ({ withSpring: activeQuestDockMode(5247).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle2 = obj5.useAnimatedStyle(fn3);
  const obj7 = { style: tmp.dragHandleWrapper, children: tmp11(tmp12, obj8) };
  obj8 = { style: animatedStyle, layout: activeQuestDockMode(16439).dimensionsLayoutTransition, children: items1 };
  const tmp10 = ReanimatedNativeViewDefault;
  tmp12 = ReanimatedNativeViewDefault;
  const obj9 = { style: items, children: closure_6(ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult }) };
  items = [tmp.dragHandleOverlay, animatedStyle2];
  const tmp13 = ReanimatedNativeViewDefault;
  ActionSheetHeaderBar = activeQuestDockMode(5582).ActionSheetHeaderBar;
  const intl = activeQuestDockMode(1128).intl;
  const string = intl.string;
  const t = activeQuestDockMode(1128).t;
  tmp11 = closure_7;
  if (isExpanded) {
    stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  items1 = [closure_6(tmp13, obj9), ];
  const obj10 = { style: items2, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_6(tmp2(5582).ActionSheetHeaderBar, { variant: "default" }) };
  items2 = [tmp.dragHandleOverlay, animatedStyle1];
  const tmp9Result = ReanimatedNativeViewDefault;
  items1[1] = closure_6(tmp9Result, obj10);
  return closure_6(tmp10, obj7);
}));
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default memoResult;
