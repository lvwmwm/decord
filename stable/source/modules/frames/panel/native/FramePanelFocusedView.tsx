// Module ID: 16837
// Function ID: 16838
// Name: FramePanelFocusedView
// Dependencies: [19, 8496, 8497, 8499, 21, 558, 576, 504, 16834, 16816, 16838, 8755, 16281, 2]

// Module 16837 (FramePanelFocusedView)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8499 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8755 */;
import FrameViewDefault from "FrameView" /* 16281 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 16816 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 16834 */;
import FramePanelHeaderDefault from "FramePanelHeader" /* 16838 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 8496 */;
import FramesConstants from "FramesConstants" /* 8497 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let landscapeSafeAreasConfig;
  let mainFrame;
  let portraitSafeAreasConfig;
  let stateFromStores;
  let tmp11;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp8;
  let transitionCleanUp;
  let transitionState;
  let tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(15);
  ({ transitionState, transitionCleanUp } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function f() {
      const tmp = closure_1_5(mainFrame.getMainFrame());
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      return id;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { context: FramePanelStateContextDefault };
    cResult[2] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult2 = tmp(16816);
  const baseActivityPanelFocusedView = tmpResult2.useBaseActivityPanelFocusedView(tmp8);
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = baseActivityPanelFocusedView);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = jsx(FramePanelHeaderDefault, {});
    cResult[3] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function h() {
      if (null != stateFromStores) {
        const obj = FramesActionCreatorsDefault;
        obj.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
      }
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === landscapeSafeAreasConfig) {
    let tmp17;
    if (cResult[7] === portraitSafeAreasConfig) {
      tmp17 = cResult[8];
    }
    if (cResult[9] === null != stateFromStores) {
      if (cResult[10] === tmp17) {
        if (cResult[11] === transitionCleanUp) {
          if (cResult[12] === transitionState) {
            let tmp19;
            if (cResult[13] === tmp15) {
              tmp19 = cResult[14];
            }
            return tmp19;
          }
        }
      }
    }
    const BaseActivityPanelFocusedView = tmp(16816).BaseActivityPanelFocusedView;
    const tmp22 = <BaseActivityPanelFocusedView transitionState={transitionState} transitionCleanUp={transitionCleanUp} updateActivityPanelModeToPIP={tmp15} hasActivity={null != stateFromStores} context={FramePanelStateContextDefault} header={tmp11}>{tmp17}</BaseActivityPanelFocusedView>;
    cResult[9] = null != stateFromStores;
    cResult[10] = tmp17;
    cResult[11] = transitionCleanUp;
    cResult[12] = transitionState;
    cResult[13] = tmp15;
    cResult[14] = tmp22;
    tmp19 = tmp22;
  }
  const tmp18 = jsx(FrameViewDefault, { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig });
  cResult[6] = landscapeSafeAreasConfig;
  cResult[7] = portraitSafeAreasConfig;
  cResult[8] = tmp18;
  tmp17 = tmp18;
}) : ((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  let obj = transitionState(stateFromStores[7]);
  const items = [landscapeSafeAreasConfig];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = memo(landscapeSafeAreasConfig.getMainFrame());
    let id;
    if (tmp != null) {
      id = tmp.id;
    }
    return id;
  });
  const obj2 = transitionState(stateFromStores[9]);
  const obj3 = { context: transitionCleanUp(stateFromStores[8]) };
  const baseActivityPanelFocusedView = obj2.useBaseActivityPanelFocusedView(obj3);
  const portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
  landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
  const memo = portraitSafeAreasConfig.useMemo(() => jsx(transitionCleanUp(stateFromStores[10]), {}), []);
  const items1 = [stateFromStores];
  const updateActivityPanelModeToPIP = portraitSafeAreasConfig.useCallback(() => {
    if (null != stateFromStores) {
      const obj = FramesActionCreatorsDefault;
      obj.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
    }
  }, items1);
  const items2 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, updateActivityPanelModeToPIP];
  return portraitSafeAreasConfig.useMemo(() => {
    const BaseActivityPanelFocusedView = ActivityPanelFocusedView.BaseActivityPanelFocusedView;
    return <BaseActivityPanelFocusedView transitionState={transitionState} transitionCleanUp={transitionCleanUp} updateActivityPanelModeToPIP={updateActivityPanelModeToPIP} hasActivity={null != stateFromStores} context={FramePanelStateContextDefault} header={memo}>{null}</BaseActivityPanelFocusedView>;
  }, items2);
}));
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;
