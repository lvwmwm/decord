// Module ID: 16481
// Function ID: 16482
// Name: QuestDockGestureContext
// Dependencies: [19, 16478, 6711, 16480, 21, 7171, 1496, 5053, 16482, 1630, 16479, 12527, 2]

// Module 16481 (QuestDockGestureContext)
import Fragment from "Fragment" /* 21 */;
import QuestConstants from "QuestConstants" /* 6711 */;
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 12527 */;
import QuestDockConstants from "QuestDockConstants" /* 16480 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16478 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7171 */;
import size_mod from "module_2" /* 2 */;

let ReanimatedHelperTypes;
const QuestDockMode = QuestConstants.QuestDockMode;
const height = QuestDockConstants.QUEST_DOCK_COLLAPSED_HEIGHT;
const jsx = Fragment.jsx;
const obj = { questDockWrapperSpecs: ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, x: 0, y: 0, prevDeltaY: 0 }), windowDimensions: ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, maxContentHeight: 0, landscape: false }), activeQuestDockMode: ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED), minExpandedContentHeight: ReanimatedHelperTypes.createFakeSharedValue(0) };
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = createContext(obj);
const memoResult = react.memo(function QuestDockGestureContextProviderInner(children) {
  let left;
  let obj7;
  let right;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  const expandedHeight = children.expandedHeight;
  size = sharedValue3.useMemo(sharedValue(sharedValue2[6]).getWindowDimensions, []);
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height, maxContentHeight: size.height };
  const obj2 = sharedValue(sharedValue2[7]);
  const tmp = sharedValue;
  sharedValue = obj2.useSharedValue(size1);
  const obj4 = sharedValue(sharedValue2[8]);
  const youBarHorizontalMargin = obj4.useYouBarHorizontalMargin();
  const obj5 = sharedValue(sharedValue2[9]);
  const safeAreaInsets = obj5.getSafeAreaInsets();
  ({ left, right } = safeAreaInsets);
  const size2 = { width: obj7.getQuestDockCollapsedWidth(size.width, left, right, youBarHorizontalMargin), height, x: 0, y: -8, prevDeltaY: 0 };
  const useSharedValue = sharedValue(sharedValue2[7]).useSharedValue;
  sharedValue(sharedValue2[7]);
  obj7 = sharedValue(sharedValue2[10]);
  const sharedValue1 = useSharedValue(size2);
  const useSharedValue2 = sharedValue(sharedValue2[7]).useSharedValue;
  sharedValue(sharedValue2[7]);
  const obj8 = sharedValue(sharedValue2[10]);
  const tmp2 = sharedValue2;
  sharedValue2 = useSharedValue2(obj8.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt) ? tmp9.SOFT_DISMISSED : tmp9.COLLAPSED);
  const tmpResult = tmp(tmp2[7]);
  sharedValue3 = tmpResult.useSharedValue(expandedHeight);
  const items = [sharedValue];
  const effect = obj.useEffect(() => subscribeToWindowDimensionsDefault((arg0) => {
    let width;
    ({ width, height } = arg0);
    size = { width, height, landscape: width > height, maxContentHeight: height };
    const result = sharedValue.set(size);
  }), items);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  return <context.Provider value={sharedValue3.useMemo(() => ({ windowDimensions: sharedValue, questDockWrapperSpecs: sharedValue1, activeQuestDockMode: sharedValue2, minExpandedContentHeight: sharedValue3 }), items1)}>{arg0.children}</context.Provider>;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureContext.tsx");

export const QuestDockGestureContext = context;
export const QuestDockGestureContextProvider = memoResult;
