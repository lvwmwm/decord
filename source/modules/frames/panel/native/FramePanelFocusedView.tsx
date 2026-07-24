// Module ID: 15776
// Function ID: 121594
// Dependencies: [31, 10508, 10509, 10256, 33, 566, 15752, 15770, 15777, 10512, 15773, 2]

// Module 15776
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FrameLayoutModes } from "FrameLayoutModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let obj = transitionState(stateFromStores[5]);
  const items = [landscapeSafeAreasConfig];
  stateFromStores = obj.useStateFromStores(items, () => null != landscapeSafeAreasConfig.getConnectedFrame());
  obj = { context: transitionCleanUp(stateFromStores[7]) };
  const baseActivityPanelFocusedView = transitionState(stateFromStores[6]).useBaseActivityPanelFocusedView(obj);
  const portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
  landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
  const memo = portraitSafeAreasConfig.useMemo(() => outer1_7(transitionCleanUp(stateFromStores[8]), {}), []);
  const callback = portraitSafeAreasConfig.useCallback(() => {
    transitionCleanUp(stateFromStores[9]).updateFramePanelMode(callback.PIP);
  }, []);
  const items1 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, callback];
  return portraitSafeAreasConfig.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP: callback, hasActivity: stateFromStores, context: transitionCleanUp(stateFromStores[7]), header: memo };
    obj = { layoutMode: memo.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    obj.children = outer1_7(transitionCleanUp(stateFromStores[10]), obj);
    return outer1_7(transitionState(stateFromStores[6]).BaseActivityPanelFocusedView, obj);
  }, items1);
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;
