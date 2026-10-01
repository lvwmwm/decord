// Module ID: 16867
// Function ID: 16868
// Name: FramePanelPIPView
// Dependencies: [19, 8499, 8500, 16842, 21, 504, 16841, 16865, 16279, 2]

// Module 16867 (FramePanelPIPView)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelPIPView from "ActivityPanelPIPView" /* 16841 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 16842 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 16865 */;
import react_mod from "react" /* 19 */;
import FramesStore from "FramesStore" /* 8499 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import size from "module_2" /* 2 */;

let transitionState;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire, getPipOrientationLockStateForFrame: metroImportDefault } = FramesConstants);
let closure_8 = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const jsx = Fragment.jsx;
const memoResult = react.memo((transitionState) => {
  let pipOrientationLockState;
  let portraitSafeAreasConfig;
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  const items = [landscapeSafeAreasConfig];
  const obj = transitionState(stateFromStores[5]);
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5(landscapeSafeAreasConfig.getMainFrame()));
  const tmp2 = closure_7(stateFromStores);
  react = tmp2;
  const obj2 = transitionState(stateFromStores[6]);
  landscapeSafeAreasConfig = obj2.useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
  return react.useMemo(() => {
    const BaseActivityPanelPIPView = ActivityPanelPIPView.BaseActivityPanelPIPView;
    return <BaseActivityPanelPIPView transitionState={transitionState} transitionCleanUp={transitionCleanUp} pipOrientationLockState={pipOrientationLockState} hasActivity={null != stateFromStores} context={FramePanelStateContextDefault}>{null}</BaseActivityPanelPIPView>;
  }, items1);
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default memoResult;
