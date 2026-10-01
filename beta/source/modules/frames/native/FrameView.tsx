// Module ID: 16279
// Function ID: 16280
// Name: FrameView
// Dependencies: [32, 19, 8499, 8500, 2005, 21, 6584, 573, 8751, 16280, 8915, 16281, 16282, 8931, 504, 16285, 2]
// Exports: InlineFrameView

// Module 16279 (FrameView)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 2005 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 16280 */;
import useInlineFrameOAuthNavigationDefault from "useInlineFrameOAuthNavigation" /* 16285 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 8499 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function FrameViewInner(frame) {
  let first;
  let isLandscape;
  let isResetting;
  let tmp5;
  let tmpResult2;
  frame = frame.frame;
  const layoutMode = frame.layoutMode;
  let portraitSafeAreasConfig = frame.portraitSafeAreasConfig;
  let setIsResetting;
  const landscapeSafeAreasConfig = frame.landscapeSafeAreasConfig;
  let obj = frame(setIsResetting[6]);
  const data = obj.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  [first, tmp5] = react.useState(true);
  const items = [layoutMode, , ];
  ({ applicationId: arr[1], id: arr[2] } = frame);
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id };
    obj.dispatch(obj2);
  }, items);
  const items1 = [frame.id];
  const items2 = [frame.id];
  const callback = react.useCallback(() => {
    const obj = FramesNativeManagerDefault;
    obj.leaveFrame(frame.id);
  }, items1);
  const callback1 = react.useCallback((arg0, arg1) => {
    const obj = frames_getDefaultOrientationLockState;
    return obj.setOrientationLockState(frame.id, arg0, arg1);
  }, items2);
  if (!first) {
    first = null == data;
  }
  const tmpResult = frame(setIsResetting[10]);
  const baseActivityView = tmpResult.useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp5, application: data, setOrientationLockState: callback1 });
  setIsResetting = baseActivityView.setIsResetting;
  ({ isResetting, isLandscape } = baseActivityView);
  const BaseActivityView = tmp(tmp2[10]).BaseActivityView;
  ({
    onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => setIsResetting(false), 0);
    },
    applicationId: frame.applicationId,
    frameId: frame.id,
    activityUrl: frame.data.url,
    queryParams: layoutMode(setIsResetting[12])(frame, ActivityPlatform.MOBILE),
    onLoadError: callback,
    allowPopups: tmpResult2.allowPopups(data),
    referrerPolicy: "origin",
    isPipOrGridMode: layoutMode === constants.PIP,
    webViewKey: frame(setIsResetting[8]).FRAME_WEB_VIEW_KEY,
    safeAreasConfig: portraitSafeAreasConfig
  });
  layoutMode(setIsResetting[11]);
  tmpResult2 = frame(setIsResetting[13]);
  if (isLandscape) {
    portraitSafeAreasConfig = landscapeSafeAreasConfig;
  }
  return <BaseActivityView wakeLockKey="FrameActivities" showLoadingIndicator={first} isResetting={isResetting}>{null}</BaseActivityView>;
}
({ asLaunched: metroRequire, FrameLayoutModes: metroImportDefault } = FramesConstants);
const ActivityPlatform = Constants.ActivityPlatform;
const jsx = Fragment.jsx;
const memoResult = react.memo(function FrameViewGate(arg0) {
  let mainFrame;
  const items = [FramesStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    const merged = Object.assign(arg0);
    tmp2 = <FrameViewInner frame={stateFromStores} />;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default memoResult;
export const InlineFrameView = function InlineFrameView(frameId) {
  frameId = frameId.frameId;
  const merged = Object.assign(frameId, Object.assign({ frameId: 0 }));
  const items = [FramesStore];
  const items1 = [frameId];
  const obj = frameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => metroRequire(FramesStore.getFrame(frameId)), items1);
  let applicationId;
  const tmp3 = useInlineFrameOAuthNavigationDefault;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  if (applicationId == null) {
    applicationId = null;
  }
  tmp3(applicationId);
  let tmp6 = null;
  if (null != stateFromStores) {
    const merged1 = Object.assign(merged);
    tmp6 = <FrameViewInner frame={stateFromStores} />;
  }
  return tmp6;
};
export const FrameView = memoResult;
