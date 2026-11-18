// Module ID: 19269
// Function ID: 19270
// Name: FramePanelFocusedView
// Dependencies: [19, 6531, 6532, 5449, 21, 504, 19250, 19266, 19270, 10582, 18757, 18457, 15682, 19272, 2]

// Module 19269 (FramePanelFocusedView)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5449 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10582 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 18457 */;
import ConjureFrameUpdateBarDefault from "ConjureFrameUpdateBar" /* 18757 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 19250 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19266 */;
import PlayableFrameBannerDefault from "PlayableFrameBanner" /* 19272 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6531 */;
import FramesConstants from "FramesConstants" /* 6532 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let tmp2;
const FrameStackLevel = tmp2(15682);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const memoResult = react.memo(function FramePanelFocusedView(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  let obj = transitionState(stateFromStores[5]);
  let items = [landscapeSafeAreasConfig];
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
  const memo = portraitSafeAreasConfig.useMemo(() => closure_1_8(transitionCleanUp(stateFromStores[8]), {}), []);
  const items1 = [stateFromStores];
  const updateActivityPanelModeToPIP = portraitSafeAreasConfig.useCallback(() => {
    if (null != stateFromStores) {
      const obj = FramesActionCreatorsDefault;
      obj.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
    }
  }, items1);
  const items2 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, updateActivityPanelModeToPIP];
  return portraitSafeAreasConfig.useMemo(() => {
    let items;
    let obj4;
    let tmp5;
    const obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, header: memo, children: tmp5 };
    tmp5 = null;
    const BaseActivityPanelFocusedView = ActivityPanelFocusedView.BaseActivityPanelFocusedView;
    if (null != stateFromStores) {
      const obj2 = { frameId: stateFromStores, children: items };
      const obj3 = { frameId: stateFromStores, level: FrameStackLevel.FrameStackLevel.AboveAppContent, presentation: obj4 };
      const tmp6Result = ConjureFrameUpdateBarDefault;
      obj4 = { layoutMode: metroRequire.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
      const tmp6Result2 = FrameRenderTargetDefault;
      items = [metroImportAll(tmp6Result2, obj3), ];
      const obj5 = { frameId: stateFromStores };
      items[1] = metroImportAll(PlayableFrameBannerDefault, obj5, stateFromStores);
      tmp5 = React4(tmp6Result, obj2);
    }
    return metroImportAll(BaseActivityPanelFocusedView, obj);
  }, items2);
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;
