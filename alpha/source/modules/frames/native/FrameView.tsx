// Module ID: 19398
// Function ID: 19399
// Name: FrameView
// Dependencies: [32, 19, 6924, 6927, 21, 6961, 504, 572, 11031, 19399, 11966, 19400, 6117, 1113, 6928, 19401, 11981, 12426, 12012, 2]
// Exports: default

// Module 19398 (FrameView)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl3 from "intl" /* 1113 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6117 */;
import FramesConstants from "FramesConstants" /* 6927 */;
import leaveFrame from "leaveFrame" /* 11031 */;
import FramePoolManagerDefault from "FramePoolManager" /* 12426 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 19399 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6924 */;
import size from "module_2" /* 2 */;

const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default function FrameView(frame) {
  let first;
  let isLandscape;
  let isResetting;
  let obj4;
  let tmp14;
  let tmp7;
  let tmpResult4;
  frame = frame.frame;
  const iframeId = frame.iframeId;
  const presentation = frame.presentation;
  const layoutMode = presentation.layoutMode;
  let portraitSafeAreasConfig = presentation.portraitSafeAreasConfig;
  const tmp2 = layoutMode;
  const onActivityCrash = frame.onActivityCrash;
  const landscapeSafeAreasConfig = presentation.landscapeSafeAreasConfig;
  let obj = frame(layoutMode[5]);
  const data = obj.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const items = [ConjureProjectStore];
  const tmpResult = frame(tmp2[6]);
  let stateFromStores = tmpResult.useStateFromStores(items, () => ConjureProjectStore.isConjureProjectApplication(frame.applicationId));
  if (!stateFromStores) {
    let conjureProjectId;
    if (data != null) {
      conjureProjectId = data.conjureProjectId;
    }
    stateFromStores = null != conjureProjectId;
  }
  [first, tmp7] = react.useState(true);
  const items1 = [layoutMode, , ];
  ({ applicationId: arr2[1], id: arr2[2] } = frame);
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id };
    obj.dispatch(obj2);
  }, items1);
  const items2 = [frame.id];
  const items3 = [frame.id];
  const callback = react.useCallback(() => {
    const obj = leaveFrame;
    obj.leaveFrame(frame.id);
  }, items2);
  const callback1 = react.useCallback((arg0, arg1) => {
    const obj = frames_getDefaultOrientationLockState;
    return obj.setOrientationLockState(frame.id, arg0, arg1);
  }, items3);
  if (!first) {
    first = null == data;
  }
  const tmpResult3 = frame(tmp2[10]);
  const baseActivityView = tmpResult3.useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp7, application: data, setOrientationLockState: callback1 });
  ({ isResetting, isLandscape } = baseActivityView);
  const BaseActivityView = tmp(tmp2[10]).BaseActivityView;
  ({
    onActivityCrash,
    applicationId: frame.applicationId,
    iframeId,
    onDisallowedNavigation() {
      let intl;
      let intl2;
      const obj = leaveFrame;
      obj.leaveFrame(frame.id);
      const obj2 = { body: intl.string(intl3.t.tYBBWz), confirmText: intl2.string(intl3.t.BddRzS) };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl3.intl;
      intl2 = intl3.intl;
      show(obj2);
    },
    onInvalidUrl() {
      const obj = leaveFrame;
      return obj.leaveFrame(frame.id);
    },
    activityUrl: frame.data.url,
    contextSource: obj4,
    queryParams: tmp14(frame, frame(tmp2[16]).ActivityPlatform.MOBILE),
    onLoadError: callback,
    onLoadEnd() {
      const obj = FramePoolManagerDefault;
      return obj.setWebViewLoaded(frame.id, iframeId);
    },
    allowPopups: tmpResult4.allowPopups(data),
    referrerPolicy: "origin",
    isPipOrGridMode: layoutMode === FrameLayoutModes.PIP,
    safeAreasConfig: portraitSafeAreasConfig,
    ignoreSilentHardwareSwitch: !stateFromStores
  });
  obj4 = { type: frame(tmp2[14]).EmbeddedContextSourceType.FRAME, frameId: frame.id };
  iframeId(tmp2[11]);
  tmp14 = iframeId(tmp2[15]);
  tmpResult4 = frame(tmp2[18]);
  if (isLandscape) {
    portraitSafeAreasConfig = landscapeSafeAreasConfig;
  }
  return <BaseActivityView showLoadingIndicator={first} isResetting={isResetting}>{null}</BaseActivityView>;
};
