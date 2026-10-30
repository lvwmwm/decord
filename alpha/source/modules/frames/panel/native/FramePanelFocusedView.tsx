// Module ID: 19102
// Function ID: 19103
// Name: FramePanelFocusedView
// Dependencies: [19, 6840, 6841, 5652, 21, 504, 19082, 19099, 19103, 10903, 12068, 12072, 2]

// Module 19102 (FramePanelFocusedView)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10903 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 19082 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19099 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6840 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp2;
let tmp6;
const FrameRenderTargetDefault = tmp6(12068);
const FrameStackLevel = tmp2(12072);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
const memoResult = react.memo(function FramePanelFocusedView(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  let obj = transitionState(stateFromStores[5]);
  const items = [landscapeSafeAreasConfig];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = memo(landscapeSafeAreasConfig.getMainFrame());
    let id;
    if (tmp != null) {
      id = tmp.id;
    }
    return id;
  });
  let obj2 = transitionState(stateFromStores[6]);
  let obj3 = { context: transitionCleanUp(stateFromStores[7]) };
  const baseActivityPanelFocusedView = obj2.useBaseActivityPanelFocusedView(obj3);
  const portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
  landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
  const memo = portraitSafeAreasConfig.useMemo(() => jsx(transitionCleanUp(stateFromStores[8]), {}), []);
  const items1 = [stateFromStores];
  const updateActivityPanelModeToPIP = portraitSafeAreasConfig.useCallback(() => {
    if (null != stateFromStores) {
      const obj = FramesActionCreatorsDefault;
      obj.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
    }
  }, items1);
  const items2 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, updateActivityPanelModeToPIP];
  return portraitSafeAreasConfig.useMemo(() => {
    let obj3;
    let tmpResult = null;
    const BaseActivityPanelFocusedView = ActivityPanelFocusedView.BaseActivityPanelFocusedView;
    const tmp4 = stateFromStores;
    if (null != stateFromStores) {
      const obj2 = { frameId: tmp4, level: FrameStackLevel.FrameStackLevel.AboveAppContent, presentation: obj3 };
      obj3 = { layoutMode: metroRequire.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
      const tmp6Result = FrameRenderTargetDefault;
      tmpResult = tmp(tmp6Result, obj2);
    }
    return <BaseActivityPanelFocusedView transitionState={transitionState} transitionCleanUp={transitionCleanUp} updateActivityPanelModeToPIP={updateActivityPanelModeToPIP} hasActivity={null != stateFromStores} context={FramePanelStateContextDefault} header={memo}>{tmpResult}</BaseActivityPanelFocusedView>;
  }, items2);
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;
