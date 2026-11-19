// Module ID: 19261
// Function ID: 19262
// Name: FramePanelFocusedView
// Dependencies: [19, 6502, 6503, 5418, 21, 504, 19242, 19258, 19262, 19263, 19265, 10560, 18749, 18450, 15669, 19267, 19268, 2]

// Module 19261 (FramePanelFocusedView)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5418 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10560 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 18450 */;
import ConjureFrameUpdateBarDefault from "ConjureFrameUpdateBar" /* 18749 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 19242 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19258 */;
import PlayableActivityFrameHeaderDefault from "PlayableActivityFrameHeader" /* 19263 */;
import FramePanelHeaderDefault from "FramePanelHeader" /* 19265 */;
import PlayableFrameImpressionTrackerDefault from "PlayableFrameImpressionTracker" /* 19267 */;
import PlayableFrameBannerDefault from "PlayableFrameBanner" /* 19268 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6502 */;
import FramesConstants from "FramesConstants" /* 6503 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let tmp2;
const FrameStackLevel = tmp2(15669);
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
    const tmp = closure_5(landscapeSafeAreasConfig.getMainFrame());
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
  const tmp3 = transitionCleanUp(stateFromStores[8])();
  let closure_5 = tmp3;
  const items1 = [tmp3];
  const memo = portraitSafeAreasConfig.useMemo(() => {
    let tmp5;
    if (null != closure_5) {
      const obj = { frameId: null, playable: null };
      ({ frameId: obj.frameId, playable: obj.playable } = closure_5);
      tmp5 = metroImportAll(PlayableActivityFrameHeaderDefault, obj, tmp.playable.id);
    } else {
      tmp5 = metroImportAll(FramePanelHeaderDefault, {});
    }
    return tmp5;
  }, items1);
  const items2 = [stateFromStores];
  const updateActivityPanelModeToPIP = portraitSafeAreasConfig.useCallback(() => {
    if (null != stateFromStores) {
      const obj = FramesActionCreatorsDefault;
      obj.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
    }
  }, items2);
  const items3 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, updateActivityPanelModeToPIP];
  return portraitSafeAreasConfig.useMemo(() => {
    let items;
    let obj4;
    let obj6;
    let tmp5;
    const obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, header: memo, children: tmp5 };
    tmp5 = null;
    const BaseActivityPanelFocusedView = ActivityPanelFocusedView.BaseActivityPanelFocusedView;
    if (null != stateFromStores) {
      const obj2 = { frameId: stateFromStores, children: items };
      const obj3 = { frameId: stateFromStores, level: FrameStackLevel.FrameStackLevel.AboveAppContent, presentation: obj4 };
      const tmp6Result = ConjureFrameUpdateBarDefault;
      obj4 = { layoutMode: metroRequire.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
      const tmp6Result3 = FrameRenderTargetDefault;
      items = [metroImportAll(tmp6Result3, obj3), ];
      const obj5 = { frameId: stateFromStores, children: metroImportAll(PlayableFrameBannerDefault, obj6) };
      obj6 = { frameId: stateFromStores };
      const tmp6Result4 = PlayableFrameImpressionTrackerDefault;
      items[1] = metroImportAll(tmp6Result4, obj5, stateFromStores);
      tmp5 = React4(tmp6Result, obj2);
    }
    return metroImportAll(BaseActivityPanelFocusedView, obj);
  }, items3);
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;
