// Module ID: 15772
// Function ID: 121573
// Dependencies: [31, 10508, 10509, 15747, 33, 566, 15746, 15770, 15773, 2]

// Module 15772
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FrameLayoutModes } from "FrameLayoutModes";
import { DEFAULT_PORTRAIT_LETTERBOX_CONFIG as closure_6 } from "DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let applicationId;
  let stateFromStores1;
  let landscapeSafeAreasConfig;
  const items = [stateFromStores1];
  stateFromStores = transitionState(stateFromStores[5]).useStateFromStores(items, () => stateFromStores1.getConnectedFrame());
  applicationId = undefined;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  let obj = transitionState(stateFromStores[5]);
  const items1 = [stateFromStores1];
  stateFromStores1 = transitionState(stateFromStores[5]).useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = stateFromStores1.getPipOrientationLockStateForApp(applicationId);
    }
    return pipOrientationLockStateForApp;
  });
  const obj2 = transitionState(stateFromStores[5]);
  landscapeSafeAreasConfig = transitionState(stateFromStores[6]).useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items2 = [stateFromStores, landscapeSafeAreasConfig, stateFromStores1, transitionCleanUp, transitionState];
  return applicationId.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, pipOrientationLockState: stateFromStores1, hasActivity: null != stateFromStores, context: transitionCleanUp(stateFromStores[7]) };
    obj = { layoutMode: landscapeSafeAreasConfig.PIP, portraitSafeAreasConfig: outer1_6, landscapeSafeAreasConfig };
    obj.children = outer1_7(transitionCleanUp(stateFromStores[8]), obj);
    return outer1_7(transitionState(stateFromStores[6]).BaseActivityPanelPIPView, obj);
  }, items2);
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default memoResult;
