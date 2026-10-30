// Module ID: 19101
// Function ID: 19102
// Name: FramePanelPIPView
// Dependencies: [19, 6840, 6841, 18944, 21, 504, 19077, 19099, 12068, 12072, 2]

// Module 19101 (FramePanelPIPView)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 18944 */;
import ActivityPanelPIPView from "ActivityPanelPIPView" /* 19077 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19099 */;
import react_mod from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6840 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp2;
let tmp6;
const FrameRenderTargetDefault = tmp6(12068);
const FrameStackLevel = tmp2(12072);
let react = react_mod;
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire, getPipOrientationLockStateForFrame: metroImportDefault } = FramesConstants);
let closure_8 = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const jsx = Fragment.jsx;
const memoResult = react.memo(function FramePanelPIPView(transitionState) {
  let pipOrientationLockState;
  let portraitSafeAreasConfig;
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  const items = [landscapeSafeAreasConfig];
  const obj = transitionState(stateFromStores[5]);
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5(landscapeSafeAreasConfig.getMainFrame()));
  let tmp2 = closure_7(stateFromStores);
  react = tmp2;
  let obj2 = transitionState(stateFromStores[6]);
  landscapeSafeAreasConfig = obj2.useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
  return react.useMemo(() => {
    let obj3;
    let tmpResult = null;
    const BaseActivityPanelPIPView = ActivityPanelPIPView.BaseActivityPanelPIPView;
    const tmp4 = stateFromStores;
    if (null != stateFromStores) {
      const obj2 = { frameId: tmp4.id, level: FrameStackLevel.FrameStackLevel.AboveAppContent, presentation: obj3 };
      obj3 = { layoutMode: metroRequire.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig };
      const tmp6Result = FrameRenderTargetDefault;
      tmpResult = tmp(tmp6Result, obj2);
    }
    return <BaseActivityPanelPIPView transitionState={transitionState} transitionCleanUp={transitionCleanUp} pipOrientationLockState={pipOrientationLockState} hasActivity={null != stateFromStores} context={FramePanelStateContextDefault}>{tmpResult}</BaseActivityPanelPIPView>;
  }, items1);
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default memoResult;
