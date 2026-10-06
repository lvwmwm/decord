// Module ID: 16836
// Function ID: 16837
// Name: FramePanelPIPView
// Dependencies: [19, 8496, 8497, 16811, 21, 558, 576, 504, 16810, 16281, 16834, 2]

// Module 16836 (FramePanelPIPView)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import FrameViewDefault from "FrameView" /* 16281 */;
import ActivityPanelPIPView from "ActivityPanelPIPView" /* 16810 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 16811 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 16834 */;
import react_mod from "react" /* 19 */;
import FramesStore from "FramesStore" /* 8496 */;
import FramesConstants from "FramesConstants" /* 8497 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire, getPipOrientationLockStateForFrame: metroImportDefault } = FramesConstants);
const portraitSafeAreasConfig = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let mainFrame;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  let transitionCleanUp;
  let transitionState;
  const obj = react2;
  const cResult = obj.c(12);
  ({ transitionState, transitionCleanUp } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function f() {
      return closure_1_5(mainFrame.getMainFrame());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const tmp10 = metroImportDefault(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult2 = ActivityPanelPIPView;
  const landscapeSafeAreasConfig = tmpResult2.useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  if (cResult[4] !== landscapeSafeAreasConfig) {
    const tmp17 = jsx(FrameViewDefault, { layoutMode: metroRequire.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig });
    cResult[4] = landscapeSafeAreasConfig;
    cResult[5] = tmp17;
    tmp12 = tmp17;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp8) {
    if (cResult[7] === null != stateFromStores) {
      if (cResult[8] === tmp12) {
        if (cResult[9] === transitionCleanUp) {
          let tmp18;
          if (cResult[10] === transitionState) {
            tmp18 = cResult[11];
          }
          return tmp18;
        }
      }
    }
  }
  const BaseActivityPanelPIPView = tmp(16810).BaseActivityPanelPIPView;
  const tmp19 = <BaseActivityPanelPIPView transitionState={transitionState} transitionCleanUp={transitionCleanUp} pipOrientationLockState={tmp8} hasActivity={null != stateFromStores} context={FramePanelStateContextDefault}>{tmp12}</BaseActivityPanelPIPView>;
  cResult[6] = tmp8;
  cResult[7] = null != stateFromStores;
  cResult[8] = tmp12;
  cResult[9] = transitionCleanUp;
  cResult[10] = transitionState;
  cResult[11] = tmp19;
  tmp18 = tmp19;
}) : ((transitionState) => {
  let pipOrientationLockState;
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  const items = [landscapeSafeAreasConfig];
  const obj = transitionState(stateFromStores[7]);
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5(landscapeSafeAreasConfig.getMainFrame()));
  const tmp2 = closure_7(stateFromStores);
  react = tmp2;
  const obj2 = transitionState(stateFromStores[8]);
  landscapeSafeAreasConfig = obj2.useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
  return react.useMemo(() => {
    const BaseActivityPanelPIPView = ActivityPanelPIPView.BaseActivityPanelPIPView;
    return <BaseActivityPanelPIPView transitionState={transitionState} transitionCleanUp={transitionCleanUp} pipOrientationLockState={pipOrientationLockState} hasActivity={null != stateFromStores} context={FramePanelStateContextDefault}>{null}</BaseActivityPanelPIPView>;
  }, items1);
}));
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default memoResult;
