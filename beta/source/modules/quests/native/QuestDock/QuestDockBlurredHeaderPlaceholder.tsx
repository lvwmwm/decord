// Module ID: 14722
// Function ID: 14723
// Name: QuestDockBlurredHeaderPlaceholder
// Dependencies: [19, 17, 5756, 14624, 21, 4836, 14625, 14723, 4566, 6494, 2]

// Module 14722 (QuestDockBlurredHeaderPlaceholder)
import react_native from "react-native" /* 17 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import _slicedToArray from "_slicedToArray" /* 14723 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
let QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QuestDockConstants);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { image: obj2, overlay: obj3 };
obj2 = { height: QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, top: -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { backgroundColor: "rgba(38, 39, 50, 0.3)", height: QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
const __initData = { code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
const memoResult = react.memo(function QuestDockBlurredHeaderPlaceholder(arg0) {
  let activeQuestDockMode;
  let items1;
  let items2;
  let items3;
  let layoutAnimatedStyle;
  let layoutAnimation;
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
  const tmp3 = closure_9();
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
  const obj4 = { source: memo, style: items1, layout: layoutAnimation };
  items1 = [tmp3.image, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
  items2 = [closure_6(questDockWrapperSpecs(activeQuestDockMode[8]).Image, obj4), ];
  const obj5 = { style: items3 };
  items3 = [tmp3.overlay, opacityAnimatedStyle];
  items2[1] = closure_6(questDockWrapperSpecs(activeQuestDockMode[9]), obj5);
  return closure_8(closure_7, obj3);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default memoResult;
