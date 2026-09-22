// Module ID: 17477
// Function ID: 17478
// Name: FramePanelPIPView
// Dependencies: [19, 9311, 9312, 17452, 21, 558, 568, 504, 17451, 16971, 17475, 2]

// Module 17477 (FramePanelPIPView)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import FrameViewDefault from "FrameView" /* 16971 */;
import ActivityPanelPIPView from "ActivityPanelPIPView" /* 17451 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17475 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9311 */;

require = fn;
const FramesConstants = fn(9312);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire, getPipOrientationLockStateForFrame: closure_7 } = FramesConstants);
const portraitSafeAreasConfig = fn(17452).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const tmp10 = React5(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult = initialize;
  const landscapeSafeAreasConfig = ActivityPanelPIPView.useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  if (cResult[4] !== landscapeSafeAreasConfig) {
    const obj2 = { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    const tmp17 = jsx(FrameViewDefault, { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig });
    cResult[4] = landscapeSafeAreasConfig;
    cResult[5] = tmp17;
    let tmp12 = tmp17;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp8) {
    if (cResult[7] === tmp11) {
      if (cResult[8] === tmp12) {
        if (cResult[9] === transitionCleanUp) {
          if (cResult[10] === transitionState) {
            let tmp18 = cResult[11];
          }
          return tmp18;
        }
      }
    }
  }
  const tmpResult2 = ActivityPanelPIPView;
  const tmp19 = jsx(ActivityPanelPIPView.BaseActivityPanelPIPView, { transitionState, transitionCleanUp, pipOrientationLockState: tmp8, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, children: tmp12 });
  cResult[6] = tmp8;
  cResult[7] = null != stateFromStores;
  cResult[8] = tmp12;
  cResult[9] = transitionCleanUp;
  cResult[10] = transitionState;
  cResult[11] = tmp19;
  tmp18 = tmp19;
}) : ((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  const items = [landscapeSafeAreasConfig];
  stateFromStores = transitionState(stateFromStores[7]).useStateFromStores(items, () => closure_1_5(landscapeSafeAreasConfig.getMainFrame()));
  const tmp2 = closure_7(stateFromStores);
  noop = tmp2;
  let obj = transitionState(stateFromStores[7]);
  landscapeSafeAreasConfig = transitionState(stateFromStores[8]).useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
  return noop.useMemo(() => {
    const obj = { transitionState, transitionCleanUp, pipOrientationLockState, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, children: jsx(FrameViewDefault, { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig }) };
    return jsx(ActivityPanelPIPView.BaseActivityPanelPIPView, { transitionState, transitionCleanUp, pipOrientationLockState, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, children: jsx(FrameViewDefault, { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig }) });
  }, items1);
}));
