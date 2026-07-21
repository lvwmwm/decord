// Module ID: 15600
// Function ID: 119035
// Dependencies: []

// Module 15600
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const FrameLayoutModes = arg1(dependencyMap[2]).FrameLayoutModes;
let closure_6 = arg1(dependencyMap[3]).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const jsx = arg1(dependencyMap[4]).jsx;
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const arg1 = transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const importDefault = transitionCleanUp;
  let importAllResult;
  let closure_4;
  let FrameLayoutModes;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => stateFromStores1.getConnectedFrame());
  const dependencyMap = stateFromStores;
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  importAllResult = applicationId;
  const obj = arg1(dependencyMap[5]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = stateFromStores1.getPipOrientationLockStateForApp(applicationId);
    }
    return pipOrientationLockStateForApp;
  });
  closure_4 = stateFromStores1;
  const obj2 = arg1(dependencyMap[5]);
  const landscapeSafeAreasConfig = arg1(dependencyMap[6]).useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  FrameLayoutModes = landscapeSafeAreasConfig;
  const items2 = [stateFromStores, landscapeSafeAreasConfig, stateFromStores1, transitionCleanUp, transitionState];
  return importAllResult.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, pipOrientationLockState: stateFromStores1, hasActivity: null != stateFromStores, context: transitionCleanUp(stateFromStores[7]) };
    obj = { layoutMode: landscapeSafeAreasConfig.PIP, portraitSafeAreasConfig: closure_6, landscapeSafeAreasConfig };
    obj.children = callback(transitionCleanUp(stateFromStores[8]), obj);
    return callback(transitionState(stateFromStores[6]).BaseActivityPanelPIPView, obj);
  }, items2);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default memoResult;
