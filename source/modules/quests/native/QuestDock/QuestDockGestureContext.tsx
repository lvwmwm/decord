// Module ID: 13995
// Function ID: 107173
// Name: QuestDockMode
// Dependencies: [31, 13992, 4976, 13994, 33, 7590, 1450, 3991, 13996, 13993, 11110, 2]

// Module 13995 (QuestDockMode)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { jsx } from "jsxProd";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";

let closure_6;
let closure_7;
const require = arg1;
({ QUEST_DOCK_COLLAPSED_HEIGHT: closure_6, QUEST_DOCK_EXPANDED_HEIGHT: closure_7 } = QUEST_DOCK_COLLAPSED_HEIGHT);
let obj = {};
obj.questDockWrapperSpecs = createFakeSharedValue.createFakeSharedValue({ width: 0, height: 0, x: 0, y: 0, prevDeltaY: 0 });
obj.windowDimensions = createFakeSharedValue.createFakeSharedValue({ width: 0, height: 0, maxContentHeight: 0, landscape: false });
obj.activeQuestDockMode = createFakeSharedValue.createFakeSharedValue(QuestDockMode.COLLAPSED);
obj.minExpandedContentHeight = require("result");
const context = importAllResult.createContext(obj);
const memoResult = importAllResult.memo(function QuestDockGestureContextProviderInner(children) {
  const size = sharedValue3.useMemo(sharedValue(sharedValue2[6]).getWindowDimensions, []);
  let obj = sharedValue(sharedValue2[7]);
  obj = { width: size.width, height: size.height, landscape: size.width > size.height, maxContentHeight: size.height };
  sharedValue = obj.useSharedValue(obj);
  const youBarHorizontalMargin = sharedValue(sharedValue2[8]).useYouBarHorizontalMargin();
  const obj3 = sharedValue(sharedValue2[8]);
  obj = { width: null, height: null, x: 0, y: -8, prevDeltaY: 0 };
  const obj4 = sharedValue(sharedValue2[7]);
  obj.width = sharedValue(sharedValue2[9]).getQuestDockCollapsedWidth(size.width, youBarHorizontalMargin, youBarHorizontalMargin);
  obj.height = closure_6;
  const sharedValue1 = obj4.useSharedValue(obj);
  const obj6 = sharedValue(sharedValue2[9]);
  const obj7 = sharedValue(sharedValue2[7]);
  sharedValue2 = obj7.useSharedValue(sharedValue(sharedValue2[9]).isSoftDismissed(obj.questDockSoftDismissedAt) ? tmp4.SOFT_DISMISSED : tmp4.COLLAPSED);
  const obj8 = sharedValue(sharedValue2[9]);
  sharedValue3 = sharedValue(sharedValue2[7]).useSharedValue(closure_7);
  const items = [sharedValue];
  const effect = sharedValue3.useEffect(() => sharedValue1(sharedValue2[10])((arg0) => {
    let height;
    let width;
    ({ width, height } = arg0);
    const result = outer1_0.set({ width, height, landscape: width > height, maxContentHeight: height });
  }), items);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const obj9 = sharedValue(sharedValue2[7]);
  return <context.Provider value={sharedValue3.useMemo(() => ({ windowDimensions: sharedValue, questDockWrapperSpecs: sharedValue1, activeQuestDockMode: sharedValue2, minExpandedContentHeight: sharedValue3 }), items1)}>{arg0.children}</context.Provider>;
});
let result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureContext.tsx");

export const QuestDockGestureContext = context;
export const QuestDockGestureContextProvider = memoResult;
