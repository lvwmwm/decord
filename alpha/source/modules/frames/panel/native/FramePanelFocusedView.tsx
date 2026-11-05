// Module ID: 19465
// Function ID: 19466
// Name: FramePanelFocusedView
// Dependencies: [19, 6984, 6985, 5793, 21, 504, 19445, 19462, 19466, 11123, 18980, 12459, 12463, 2]

// Module 19465 (FramePanelFocusedView)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5793 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11123 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 12459 */;
import ConjureFrameUpdateBarDefault from "ConjureFrameUpdateBar" /* 18980 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 19445 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19462 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6984 */;
import FramesConstants from "FramesConstants" /* 6985 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp2;
const FrameStackLevel = tmp2(12463);
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
