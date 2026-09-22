// Module ID: 17478
// Function ID: 17479
// Name: FramePanelFocusedView
// Dependencies: [19, 9311, 9312, 9313, 21, 558, 568, 504, 17475, 17457, 17479, 9567, 16971, 2]

// Module 17478 (FramePanelFocusedView)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9567 */;
import FrameViewDefault from "FrameView" /* 16971 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 17457 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17475 */;
import FramePanelHeaderDefault from "FramePanelHeader" /* 17479 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9311 */;

require = fn;
const FramesConstants = fn(9312);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
const ActivityPanelModes = fn(9313).ActivityPanelModes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = stateFromStores(568).c(15);
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
  let obj = stateFromStores(568);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { context: FramePanelStateContextDefault };
    cResult[2] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = stateFromStores(504);
  const baseActivityPanelFocusedView = stateFromStores(17457).useBaseActivityPanelFocusedView(tmp8);
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = baseActivityPanelFocusedView);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = jsx(FramePanelHeaderDefault, {});
    cResult[3] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function h() {
      if (null != stateFromStores) {
        FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
      }
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === landscapeSafeAreasConfig) {
    if (cResult[7] === portraitSafeAreasConfig) {
      let tmp17 = cResult[8];
    }
    if (cResult[9] === tmp16) {
      if (cResult[10] === tmp17) {
        if (cResult[11] === transitionCleanUp) {
          if (cResult[12] === transitionState) {
            if (cResult[13] === tmp15) {
              let tmp19 = cResult[14];
            }
            return tmp19;
          }
        }
      }
    }
    const obj3 = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP: tmp15, hasActivity: tmp16, context: FramePanelStateContextDefault, header: tmp11, children: tmp17 };
    const tmp22 = jsx(tmp(17457).BaseActivityPanelFocusedView, { transitionState, transitionCleanUp, updateActivityPanelModeToPIP: tmp15, hasActivity: tmp16, context: FramePanelStateContextDefault, header: tmp11, children: tmp17 });
    cResult[9] = tmp16;
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
  const items = [landscapeSafeAreasConfig];
  stateFromStores = transitionState(stateFromStores[7]).useStateFromStores(items, () => {
    const tmp = memo(landscapeSafeAreasConfig.getMainFrame());
    let id;
    if (tmp != null) {
      id = tmp.id;
    }
    return id;
  });
  let obj = transitionState(stateFromStores[7]);
  const obj2 = transitionState(stateFromStores[9]);
  const baseActivityPanelFocusedView = obj2.useBaseActivityPanelFocusedView({ context: transitionCleanUp(stateFromStores[8]) });
  const portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
  landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
  const memo = portraitSafeAreasConfig.useMemo(() => jsx(transitionCleanUp(stateFromStores[10]), {}), []);
  const items1 = [stateFromStores];
  const updateActivityPanelModeToPIP = portraitSafeAreasConfig.useCallback(() => {
    if (null != stateFromStores) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
    }
  }, items1);
  const items2 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, updateActivityPanelModeToPIP];
  return portraitSafeAreasConfig.useMemo(() => {
    const obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, header: memo, children: jsx(FrameViewDefault, { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig }) };
    return jsx(ActivityPanelFocusedView.BaseActivityPanelFocusedView, { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, header: memo, children: jsx(FrameViewDefault, { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig }) });
  }, items2);
}));
