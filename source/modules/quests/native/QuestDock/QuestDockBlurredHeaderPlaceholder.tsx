// Module ID: 13961
// Function ID: 106135
// Name: QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED
// Dependencies: []

// Module 13961 (QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED)
let QUEST_DOCK_EXPANDED_HEIGHT;
let QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
let StyleSheet;
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet, View: closure_4 } = arg1(dependencyMap[1]));
const QuestDockMode = arg1(dependencyMap[2]).QuestDockMode;
const tmp2 = arg1(dependencyMap[1]);
({ QUEST_DOCK_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["height"] = QUEST_DOCK_EXPANDED_HEIGHT;
obj["top"] = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
obj.image = obj;
obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["backgroundColor"] = "rgba(38, 39, 50, 0.3)";
obj1["height"] = QUEST_DOCK_EXPANDED_HEIGHT;
obj.overlay = obj1;
let closure_10 = obj1.createStyles(obj);
let closure_11 = { code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
const tmp4 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function QuestDockBlurredContentBackground(placeholder) {
  let animatedLayout;
  let animatedStyle;
  placeholder = placeholder.placeholder;
  const arg1 = placeholder;
  ({ animatedLayout, animatedStyle } = placeholder);
  const context = importAllResult.useContext(arg1(dependencyMap[6]).QuestDockGestureContext);
  const importDefault = questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  const dependencyMap = activeQuestDockMode;
  const items = [placeholder];
  const memo = importAllResult.useMemo(() => {
    const obj = { uri: placeholder(activeQuestDockMode[7]).thumbHashToDataURL(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0))) };
    return obj;
  }, items);
  const tmp3 = callback3();
  let obj = arg1(dependencyMap[8]);
  class D {
    constructor() {
      obj = {};
      num = 0;
      if (activeQuestDockMode.get() === closure_5.EXPANDED) {
        tmp = closure_6;
        num = -closure_6;
      }
      obj.left = num;
      obj.width = questDockWrapperSpecs.get().width + closure_6;
      return obj;
    }
  }
  obj = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  D.__closure = obj;
  D.__workletHash = 11176778421725;
  D.__initData = closure_11;
  obj = {};
  animatedStyle = obj.useAnimatedStyle(D);
  const items1 = [tmp3.image, animatedStyle, animatedStyle];
  const items2 = [callback(importDefault(dependencyMap[8]).Image, { source: memo, style: items1, layout: animatedLayout }), callback(closure_4, { style: tmp3.overlay })];
  obj.children = items2;
  return callback2(closure_8, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default memoResult;
