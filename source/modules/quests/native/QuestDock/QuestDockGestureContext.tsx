// Module ID: 13871
// Function ID: 104945
// Name: QuestDockMode
// Dependencies: []

// Module 13871 (QuestDockMode)
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const QuestDockMode = arg1(dependencyMap[2]).QuestDockMode;
({ QUEST_DOCK_COLLAPSED_HEIGHT: closure_6, QUEST_DOCK_EXPANDED_HEIGHT: closure_7 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const obj = {};
const tmp2 = arg1(dependencyMap[3]);
obj.questDockWrapperSpecs = arg1(dependencyMap[5]).createFakeSharedValue({});
const obj3 = arg1(dependencyMap[5]);
obj.windowDimensions = arg1(dependencyMap[5]).createFakeSharedValue({});
const obj4 = arg1(dependencyMap[5]);
obj.activeQuestDockMode = arg1(dependencyMap[5]).createFakeSharedValue(QuestDockMode.COLLAPSED);
const obj5 = arg1(dependencyMap[5]);
obj.minExpandedContentHeight = require("module_0");
const context = importAllResult.createContext(obj);
const obj6 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function QuestDockGestureContextProviderInner(children) {
  const size = importAllResult.useMemo(arg1(dependencyMap[6]).getWindowDimensions, []);
  let obj = arg1(dependencyMap[7]);
  obj = { width: size.width, height: size.height, landscape: size.width > size.height, maxContentHeight: size.height };
  const sharedValue = obj.useSharedValue(obj);
  const arg1 = sharedValue;
  const youBarHorizontalMargin = arg1(dependencyMap[8]).useYouBarHorizontalMargin();
  const obj3 = arg1(dependencyMap[8]);
  obj = {};
  const obj4 = arg1(dependencyMap[7]);
  obj.width = arg1(dependencyMap[9]).getQuestDockCollapsedWidth(size.width, youBarHorizontalMargin, youBarHorizontalMargin);
  obj.height = closure_6;
  const sharedValue1 = obj4.useSharedValue(obj);
  const importDefault = sharedValue1;
  const obj6 = arg1(dependencyMap[9]);
  const obj7 = arg1(dependencyMap[7]);
  const sharedValue2 = obj7.useSharedValue(arg1(dependencyMap[9]).isSoftDismissed(obj.questDockSoftDismissedAt) ? tmp4.SOFT_DISMISSED : tmp4.COLLAPSED);
  const dependencyMap = sharedValue2;
  const obj8 = arg1(dependencyMap[9]);
  const sharedValue3 = arg1(dependencyMap[7]).useSharedValue(closure_7);
  const items = [sharedValue];
  const effect = importAllResult.useEffect(() => sharedValue1(sharedValue2[10])((arg0) => {
    let height;
    let width;
    ({ width, height } = arg0);
    const result = closure_0.set({ width, height, landscape: width > height, maxContentHeight: height });
  }), items);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const obj9 = arg1(dependencyMap[7]);
  return <context.Provider value={sharedValue3.useMemo(() => ({ windowDimensions: sharedValue, questDockWrapperSpecs: sharedValue1, activeQuestDockMode: sharedValue2, minExpandedContentHeight: sharedValue3 }), items1)}>{arg0.children}</context.Provider>;
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureContext.tsx");

export const QuestDockGestureContext = context;
export const QuestDockGestureContextProvider = memoResult;
