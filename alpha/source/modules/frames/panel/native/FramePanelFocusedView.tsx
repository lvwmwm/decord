// Module ID: 19747
// Function ID: 19748
// Name: FramePanelFocusedView
// Dependencies: [19, 6956, 6957, 5896, 21, 504, 19727, 19744, 19748, 12653, 19247, 13256, 13260, 2]

// Module 19747 (FramePanelFocusedView)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5896 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 12653 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 13256 */;
import ConjureFrameUpdateBarDefault from "ConjureFrameUpdateBar" /* 19247 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 19727 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19744 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6956 */;
import FramesConstants from "FramesConstants" /* 6957 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp2;
const FrameStackLevel = tmp2(13260);
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
  const obj3 = { context: transitionCleanUp(stateFromStores[7]) };
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
    let obj4;
    let tmpResult = null;
    const BaseActivityPanelFocusedView = ActivityPanelFocusedView.BaseActivityPanelFocusedView;
    if (null != stateFromStores) {
      const obj2 = { frameId: stateFromStores, children: null };
      ({ frameId: stateFromStores, level: FrameStackLevel.FrameStackLevel.AboveAppContent, presentation: obj4 });
      const tmp6Result = ConjureFrameUpdateBarDefault;
      FrameRenderTargetDefault;
      obj4 = { layoutMode: metroRequire.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
      tmpResult = tmp(tmp6Result, obj2);
    }
    return <BaseActivityPanelFocusedView transitionState={transitionState} transitionCleanUp={transitionCleanUp} updateActivityPanelModeToPIP={updateActivityPanelModeToPIP} hasActivity={null != stateFromStores} context={FramePanelStateContextDefault} header={memo}>{tmpResult}</BaseActivityPanelFocusedView>;
  }, items2);
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;
