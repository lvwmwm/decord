// Module ID: 17089
// Function ID: 17090
// Name: QuestDockDragHandle
// Dependencies: [19, 17, 6775, 17001, 21, 5009, 17002, 5090, 5632, 7235, 17000, 5590, 1114, 2]

// Module 17089 (QuestDockDragHandle)
import react_native from "react-native" /* 17 */;
import spring from "spring" /* 5632 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7235 */;
import QuestDockConstants from "QuestDockConstants" /* 17001 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
const memoResult = react.memo(function QuestDockDragHandle(arg0) {
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
  activeQuestDockMode = react.useContext(activeQuestDockMode(17002).QuestDockGestureContext).activeQuestDockMode;
  importDefault = tmp4;
  let obj = activeQuestDockMode(5090);
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
  fn.__workletHash = 8792527248223;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = activeQuestDockMode(5090);
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
  M.__closure = { withSpring: activeQuestDockMode(5632).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  M.__workletHash = 6896281369829;
  M.__initData = __initData2;
  ({ withSpring: activeQuestDockMode(5632).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle1 = obj3.useAnimatedStyle(M);
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
  const obj5 = activeQuestDockMode(5090);
  fn2.__closure = { withSpring: activeQuestDockMode(5632).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn2.__workletHash = 7780416831295;
  fn2.__initData = __initData3;
  ({ withSpring: activeQuestDockMode(5632).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle2 = obj5.useAnimatedStyle(fn2);
  const obj7 = { style: tmp.dragHandleWrapper, children: tmp11(tmp12, obj8) };
  obj8 = { style: animatedStyle, layout: activeQuestDockMode(17000).dimensionsLayoutTransition, children: items1 };
  const tmp10 = ReanimatedNativeViewDefault;
  tmp12 = ReanimatedNativeViewDefault;
  const obj9 = { style: items, children: closure_6(ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult }) };
  items = [tmp.dragHandleOverlay, animatedStyle2];
  const tmp13 = ReanimatedNativeViewDefault;
  ActionSheetHeaderBar = activeQuestDockMode(5590).ActionSheetHeaderBar;
  const intl = activeQuestDockMode(1114).intl;
  const string = intl.string;
  const t = activeQuestDockMode(1114).t;
  tmp11 = closure_7;
  if (isExpanded) {
    stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  items1 = [closure_6(tmp13, obj9), ];
  const obj10 = { style: items2, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_6(tmp2(5590).ActionSheetHeaderBar, { variant: "default" }) };
  items2 = [tmp.dragHandleOverlay, animatedStyle1];
  const tmp9Result = ReanimatedNativeViewDefault;
  items1[1] = closure_6(tmp9Result, obj10);
  return closure_6(tmp10, obj7);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default memoResult;
