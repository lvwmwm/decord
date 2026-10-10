// Module ID: 15449
// Function ID: 15450
// Name: QuestDockBlurredHeaderPlaceholder
// Dependencies: [19, 17, 5972, 15347, 21, 5092, 558, 576, 15348, 15450, 4850, 6156, 6761, 2]

// Module 15449 (QuestDockBlurredHeaderPlaceholder)
import react_native from "react-native" /* 17 */;
import QuestConstants from "QuestConstants" /* 5972 */;
import _slicedToArray from "_slicedToArray" /* 15450 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 15347 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const __initData2 = { code: "function QuestDockBlurredHeaderPlaceholderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockBlurredHeaderPlaceholder(arg0) {
  let items;
  let items1;
  let layoutAnimatedStyle;
  let layoutAnimation;
  let opacityAnimatedStyle;
  let placeholder;
  let questDockWrapperSpecs;
  let tmp5;
  let tmp9;
  let obj = questDockWrapperSpecs(576);
  const cResult = obj.c(22);
  ({ layoutAnimation, layoutAnimatedStyle, opacityAnimatedStyle, placeholder } = arg0);
  const context = react.useContext(questDockWrapperSpecs(15348).QuestDockGestureContext);
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  if (cResult[0] !== placeholder) {
    let tmp7;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(str) {
        return str.charCodeAt(0);
      };
      let num = 2;
      cResult[2] = fn;
      tmp7 = fn;
    } else {
      tmp7 = cResult[2];
    }
    const _Uint8Array = Uint8Array;
    const _atob = atob;
    const tmpResult = questDockWrapperSpecs(15450);
    const thumbHashToDataURLResult = tmpResult.thumbHashToDataURL(Uint8Array.from(atob(placeholder), tmp7));
    cResult[0] = placeholder;
    cResult[1] = thumbHashToDataURLResult;
    tmp5 = thumbHashToDataURLResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[3] !== tmp5) {
    const obj2 = { uri: tmp5 };
    cResult[3] = tmp5;
    cResult[4] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  const tmp10 = closure_10();
  const tmpResult2 = questDockWrapperSpecs(4850);
  class O {
    constructor() {
      let num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
      }
      const obj = { left: num, width: questDockWrapperSpecs.get().width + QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED };
      return obj;
    }
  }
  const obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  O.__closure = obj3;
  O.__workletHash = 11176778421725;
  O.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(O);
  if (cResult[5] === animatedStyle) {
    if (cResult[6] === layoutAnimatedStyle) {
      if (cResult[7] === opacityAnimatedStyle) {
        let tmp12;
        let tmp13;
        if (cResult[8] === tmp10.imageContainer) {
          tmp12 = cResult[9];
        }
        if (cResult[10] !== tmp9) {
          const obj4 = { source: tmp9, style: StyleSheet.absoluteFill };
          const tmp17 = closure_7(activeQuestDockMode(6156), obj4);
          cResult[10] = tmp9;
          cResult[11] = tmp17;
          tmp13 = tmp17;
        } else {
          tmp13 = cResult[11];
        }
        if (cResult[12] === layoutAnimation) {
          if (cResult[13] === tmp12) {
            let tmp18;
            if (cResult[14] === tmp13) {
              tmp18 = cResult[15];
            }
            if (cResult[16] === opacityAnimatedStyle) {
              let tmp22;
              if (cResult[17] === tmp10.overlay) {
                tmp22 = cResult[18];
              }
              if (cResult[19] === tmp18) {
                let tmp26;
                if (cResult[20] === tmp22) {
                  tmp26 = cResult[21];
                }
                return tmp26;
              }
              const obj5 = { children: items };
              items = [tmp18, tmp22];
              const tmp29 = closure_9(closure_8, obj5);
              cResult[19] = tmp18;
              cResult[20] = tmp22;
              cResult[21] = tmp29;
              tmp26 = tmp29;
            }
            const obj6 = { style: items1 };
            items1 = [tmp10.overlay, opacityAnimatedStyle];
            const tmp25 = closure_7(activeQuestDockMode(6761), obj6);
            cResult[16] = opacityAnimatedStyle;
            cResult[17] = tmp10.overlay;
            cResult[18] = tmp25;
            tmp22 = tmp25;
          }
        }
        const obj7 = { style: tmp12, layout: layoutAnimation, children: tmp13 };
        const tmp21 = closure_7(activeQuestDockMode(6761), obj7);
        cResult[12] = layoutAnimation;
        cResult[13] = tmp12;
        cResult[14] = tmp13;
        cResult[15] = tmp21;
        tmp18 = tmp21;
      }
    }
  }
  const items2 = [tmp10.imageContainer, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
  cResult[5] = animatedStyle;
  cResult[6] = layoutAnimatedStyle;
  cResult[7] = opacityAnimatedStyle;
  cResult[8] = tmp10.imageContainer;
  cResult[9] = items2;
  tmp12 = items2;
}) : (function QuestDockBlurredHeaderPlaceholder(arg0) {
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
  const context = react.useContext(placeholder(activeQuestDockMode[8]).QuestDockGestureContext);
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
  let obj = placeholder(activeQuestDockMode[10]);
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
  E.__workletHash = 4145600612350;
  E.__initData = __initData2;
  const obj3 = { children: items2 };
  const animatedStyle = obj.useAnimatedStyle(E);
  const obj4 = { style: items1, layout: layoutAnimation, children: closure_7(questDockWrapperSpecs(activeQuestDockMode[11]), obj5) };
  items1 = [tmp3.imageContainer, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
  obj5 = { source: memo, style: StyleSheet.absoluteFill };
  const tmp5 = questDockWrapperSpecs(activeQuestDockMode[12]);
  items2 = [closure_7(tmp5, obj4), ];
  const obj6 = { style: items3 };
  items3 = [tmp3.overlay, opacityAnimatedStyle];
  items2[1] = closure_7(questDockWrapperSpecs(activeQuestDockMode[12]), obj6);
  return closure_9(closure_8, obj3);
}));
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default memoResult;
