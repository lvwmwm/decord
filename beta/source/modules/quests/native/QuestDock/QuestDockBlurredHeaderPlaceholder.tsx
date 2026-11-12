// Module ID: 17521
// Function ID: 17522
// Name: QuestDockBlurredHeaderPlaceholder
// Dependencies: [19, 17, 6869, 17427, 21, 5170, 17428, 17522, 1652, 5874, 2]

// Module 17521 (QuestDockBlurredHeaderPlaceholder)
import react_native from "react-native" /* 17 */;
import _modDef1652 from "module_1652" /* 1652 */;
import FastImageDefault from "FastImage" /* 5874 */;
import QuestConstants from "QuestConstants" /* 6869 */;
import _slicedToArray from "_slicedToArray" /* 17522 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 17427 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
let QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QuestDockConstants);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { imageContainer: obj2, overlay: obj3 };
obj2 = { overflow: "hidden", height: QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, top: -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { backgroundColor: "rgba(38, 39, 50, 0.3)", height: QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
let closure_11 = { code: "(function QuestDockBlurredHeaderPlaceholderTsx1(){let[activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs]=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};})" };
const memoResult = react.memo(function QuestDockBlurredHeaderPlaceholder(arg0) {
  let activeQuestDockMode;
  let items3;
  let items4;
  let items5;
  let layoutAnimatedStyle;
  let layoutAnimation;
  let obj4;
  let opacityAnimatedStyle;
  let placeholder;
  let questDockWrapperSpecs;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ opacityAnimatedStyle, placeholder } = arg0);
  ({ layoutAnimation, layoutAnimatedStyle } = arg0);
  const context = react.useContext(placeholder(17428).QuestDockGestureContext);
  const items = [placeholder];
  ({ questDockWrapperSpecs, activeQuestDockMode } = context);
  const memo = react.useMemo(() => {
    let obj2;
    const obj = { uri: obj2.thumbHashToDataURL(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0))) };
    obj2 = _slicedToArray;
    return obj;
  }, items);
  const tmp4 = closure_10();
  let obj = placeholder(1652);
  const items1 = [closure_11, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items1;
  class QuestDockBlurredHeaderPlaceholderTsx1 {
    constructor() {
      let num = 0;
      if (_undefined.get() === _undefined2.EXPANDED) {
        num = -c2;
      }
      const obj = { left: num, width: _undefined3.get().width + c2 };
      return obj;
    }
  }
  const items2 = [tmp6, tmp7, tmp8, tmp9];
  QuestDockBlurredHeaderPlaceholderTsx1.__closure = items2;
  QuestDockBlurredHeaderPlaceholderTsx1.__workletHash = 16240509940580;
  QuestDockBlurredHeaderPlaceholderTsx1.__initData = tmp5;
  let obj2 = { children: items4 };
  const animatedStyle = obj.useAnimatedStyle(QuestDockBlurredHeaderPlaceholderTsx1);
  const obj3 = { style: items3, layout: layoutAnimation, children: closure_7(FastImageDefault, obj4) };
  items3 = [tmp4.imageContainer, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
  const View = _modDef1652.View;
  obj4 = { source: memo, style: StyleSheet.absoluteFill };
  items4 = [closure_7(View, obj3), ];
  const obj5 = { style: items5 };
  items5 = [tmp4.overlay, opacityAnimatedStyle];
  items4[1] = closure_7(_modDef1652.View, obj5);
  return closure_9(closure_8, obj2);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default memoResult;
