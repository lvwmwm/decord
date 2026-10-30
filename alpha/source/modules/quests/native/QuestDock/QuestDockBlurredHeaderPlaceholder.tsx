// Module ID: 17094
// Function ID: 17095
// Name: QuestDockBlurredHeaderPlaceholder
// Dependencies: [19, 17, 6775, 17001, 21, 5009, 17002, 17095, 5090, 7235, 5712, 2]

// Module 17094 (QuestDockBlurredHeaderPlaceholder)
import react_native from "react-native" /* 17 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import _slicedToArray from "_slicedToArray" /* 17095 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 17001 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
const __initData = { code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
const memoResult = react.memo(function QuestDockBlurredHeaderPlaceholder(arg0) {
  let activeQuestDockMode;
  let items1;
  let items2;
  let items3;
  let layoutAnimatedStyle;
  let layoutAnimation;
  let obj5;
  let opacityAnimatedStyle;
  let placeholder;
  ({ opacityAnimatedStyle, placeholder } = arg0);
  ({ layoutAnimation, layoutAnimatedStyle } = arg0);
  const context = react.useContext(placeholder(activeQuestDockMode[6]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  activeQuestDockMode = context.activeQuestDockMode;
  const items = [placeholder];
  const memo = react.useMemo(() => {
    let obj2;
    const obj = { uri: obj2.thumbHashToDataURL(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0))) };
    obj2 = _slicedToArray;
    return obj;
  }, items);
  const tmp3 = closure_10();
  let obj = placeholder(activeQuestDockMode[8]);
  class E {
    constructor() {
      let num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
      }
      const obj = { left: num, width: questDockWrapperSpecs.get().width + QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED };
      return obj;
    }
  }
  let obj2 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  E.__closure = obj2;
  E.__workletHash = 11176778421725;
  E.__initData = __initData;
  const obj3 = { children: items2 };
  const animatedStyle = obj.useAnimatedStyle(E);
  const obj4 = { style: items1, layout: layoutAnimation, children: closure_7(questDockWrapperSpecs(activeQuestDockMode[10]), obj5) };
  items1 = [tmp3.imageContainer, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
  obj5 = { source: memo, style: StyleSheet.absoluteFill };
  const tmp5 = questDockWrapperSpecs(activeQuestDockMode[9]);
  items2 = [closure_7(tmp5, obj4), ];
  const obj6 = { style: items3 };
  items3 = [tmp3.overlay, opacityAnimatedStyle];
  items2[1] = closure_7(questDockWrapperSpecs(activeQuestDockMode[9]), obj6);
  return closure_9(closure_8, obj3);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default memoResult;
