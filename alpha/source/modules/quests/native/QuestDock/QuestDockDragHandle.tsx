// Module ID: 17433
// Function ID: 17434
// Name: QuestDockDragHandle
// Dependencies: [19, 17, 6919, 17345, 21, 5143, 17346, 1652, 5773, 17344, 5733, 1113, 2]

// Module 17433 (QuestDockDragHandle)
import _mod1652 from "module_1652" /* 1652 */;
import QuestConstants from "QuestConstants" /* 6919 */;
import QuestDockConstants from "QuestDockConstants" /* 17345 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17346 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let num, obj1, tmp4;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp2;
const intl2 = tmp2(1113);
const ActionSheetHeaderBar2 = tmp2(5733);
const spring_spring = tmp2(5773);
const QuestDockUtils = tmp2(17344);
({ StyleSheet, View: closure_4 } = react_native);
const QuestDockMode = QuestConstants.QuestDockMode;
let closure_6 = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { dragHandleWrapper: obj2, dragHandleOverlay: obj3 };
obj2 = { bottom: undefined, zIndex: 4 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { bottom: undefined };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
let closure_10 = { code: "(function QuestDockDragHandleTsx1(){let[activeQuestDockMode,QuestDockMode]=this.__closure;return{transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};})" };
let closure_11 = { code: "(function QuestDockDragHandleTsx2(){let[withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};})" };
let closure_12 = { code: "(function QuestDockDragHandleTsx3(){let[withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};})" };
const memoResult = react.memo(function QuestDockDragHandle(arg0) {
  let ActionSheetHeaderBar;
  let View;
  let isExpanded;
  let items6;
  let items7;
  let items8;
  let obj3;
  let stringResult;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp29;
  let tmp5;
  let tmp6;
  let tmp7;
  let variant;
  ({ isExpanded, variant } = arg0);
  const tmp = closure_9();
  let tmp2 = require;
  const activeQuestDockMode = react.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  let obj = _mod1652;
  let items = [closure_10, activeQuestDockMode, ];
  items[2] = QuestDockMode;
  let c0;
  let c1;
  [tmp5, tmp6, tmp7] = items;
  class QuestDockDragHandleTsx1 {
    constructor() {
      obj = closure_0;
      num = 0;
      if (closure_0.get() !== closure_1.CLOSED) {
        num = 0;
        if (obj.get() !== tmp.SOFT_DISMISSED) {
          num = -4;
        }
      }
      obj1 = { transform: null };
      items = [];
      items[0] = { translateY: num };
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp6, tmp7];
  QuestDockDragHandleTsx1.__closure = items1;
  QuestDockDragHandleTsx1.__workletHash = 17506228702630;
  QuestDockDragHandleTsx1.__initData = tmp5;
  const animatedStyle = obj.useAnimatedStyle(QuestDockDragHandleTsx1);
  const items2 = [closure_11, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items2[1] = spring_spring.withSpring;
  items2[2] = "default" === variant;
  items2[3] = activeQuestDockMode;
  items2[4] = QuestDockMode;
  items2[5] = closure_6;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class QuestDockDragHandleTsx2 {
    constructor() {
      tmp2 = closure_1;
      if (!tmp2) {
        obj = closure_2;
        if (closure_2.get() !== closure_3.CLOSED) {
          num = 0;
        }
        obj1 = { opacity: null };
        tmp4 = closure_4;
        obj1.opacity = tmp(num, closure_4);
        return obj1;
      }
      num = 1;
      return;
    }
  }
  const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17];
  QuestDockDragHandleTsx2.__closure = items3;
  QuestDockDragHandleTsx2.__workletHash = 5329516175324;
  QuestDockDragHandleTsx2.__initData = tmp12;
  const animatedStyle1 = useAnimatedStyle(QuestDockDragHandleTsx2);
  const items4 = [closure_12, , , , , ];
  const useAnimatedStyle2 = _mod1652.useAnimatedStyle;
  _mod1652;
  items4[1] = spring_spring.withSpring;
  items4[2] = "default" === variant;
  items4[3] = activeQuestDockMode;
  items4[4] = QuestDockMode;
  items4[5] = closure_6;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items4;
  class QuestDockDragHandleTsx3 {
    constructor() {
      tmp2 = closure_1;
      if (!tmp2) {
        obj = closure_2;
        if (closure_2.get() !== closure_3.CLOSED) {
          num = 0.5;
        }
        obj1 = { opacity: null };
        tmp4 = closure_4;
        obj1.opacity = tmp(num, closure_4);
        return obj1;
      }
      num = 0;
      return;
    }
  }
  const items5 = [tmp21, tmp22, tmp23, tmp24, tmp25];
  QuestDockDragHandleTsx3.__closure = items5;
  QuestDockDragHandleTsx3.__workletHash = 1737041725862;
  QuestDockDragHandleTsx3.__initData = tmp20;
  let obj2 = { style: tmp.dragHandleWrapper, children: tmp29(View, obj3) };
  const animatedStyle2 = useAnimatedStyle2(QuestDockDragHandleTsx3);
  obj3 = { style: animatedStyle, layout: QuestDockUtils.dimensionsLayoutTransition, children: items7 };
  View = _modDef1652.View;
  const obj4 = { style: items6, children: metroImportDefault(ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult }) };
  items6 = [tmp.dragHandleOverlay, animatedStyle2];
  const View2 = _modDef1652.View;
  ActionSheetHeaderBar = ActionSheetHeaderBar2.ActionSheetHeaderBar;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  const tmp28 = React3;
  tmp29 = metroImportAll;
  if (isExpanded) {
    stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  items7 = [metroImportDefault(View2, obj4), ];
  const obj5 = { style: items8, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: metroImportDefault(ActionSheetHeaderBar2.ActionSheetHeaderBar, { variant: "default" }) };
  items8 = [tmp.dragHandleOverlay, animatedStyle1];
  const View3 = _modDef1652.View;
  items7[1] = metroImportDefault(View3, obj5);
  return metroImportDefault(tmp28, obj2);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default memoResult;
