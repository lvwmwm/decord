// Module ID: 15594
// Function ID: 118993
// Dependencies: []

// Module 15594
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const FrameLayoutModes = arg1(dependencyMap[2]).FrameLayoutModes;
const ActivityPanelModes = arg1(dependencyMap[3]).ActivityPanelModes;
const jsx = arg1(dependencyMap[4]).jsx;
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const arg1 = transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const importDefault = transitionCleanUp;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => null != landscapeSafeAreasConfig.getConnectedFrame());
  const dependencyMap = stateFromStores;
  obj = { context: importDefault(dependencyMap[7]) };
  const baseActivityPanelFocusedView = arg1(dependencyMap[6]).useBaseActivityPanelFocusedView(obj);
  const portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
  const landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
  closure_4 = landscapeSafeAreasConfig;
  const memo = importAllResult.useMemo(() => callback(transitionCleanUp(stateFromStores[8]), {}), []);
  const FrameLayoutModes = memo;
  const callback = importAllResult.useCallback(() => {
    transitionCleanUp(stateFromStores[9]).updateFramePanelMode(callback.PIP);
  }, []);
  const ActivityPanelModes = callback;
  const items1 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, callback];
  return portraitSafeAreasConfig.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP: callback, hasActivity: stateFromStores, context: transitionCleanUp(stateFromStores[7]), header: memo };
    obj = { layoutMode: memo.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    obj.children = callback(transitionCleanUp(stateFromStores[10]), obj);
    return callback(transitionState(stateFromStores[6]).BaseActivityPanelFocusedView, obj);
  }, items1);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;
