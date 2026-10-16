// Module ID: 18062
// Function ID: 18063
// Name: FrameView
// Dependencies: [32, 19, 10931, 21, 558, 576, 6299, 584, 10960, 18063, 11236, 5363, 1128, 10949, 18064, 11252, 11275, 18067, 2]

// Module 18062 (FrameView)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl3 from "intl" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5363 */;
import FramesConstants from "FramesConstants" /* 10931 */;
import leaveFrame from "leaveFrame" /* 10960 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 18063 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function FrameView(frame) {
  let first;
  let iframeId;
  let landscapeSafeAreasConfig;
  let onActivityCrash;
  let portraitSafeAreasConfig;
  let presentation;
  let obj = frame(576);
  const cResult = obj.c(40);
  frame = frame.frame;
  ({ iframeId, onActivityCrash, presentation } = frame);
  const layoutMode = presentation.layoutMode;
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = presentation);
  let obj2 = frame(6299);
  const data = obj2.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  [first] = react.useState(true);
  const obj3 = react;
  if (cResult[0] === frame.applicationId) {
    if (cResult[1] === frame.id) {
      let tmp5;
      let tmp6;
      if (cResult[2] === layoutMode) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const layoutEffect = obj3.useLayoutEffect(tmp5, tmp6);
      if (cResult[5] !== frame.id) {
        const fn2 = function u() {
          const obj = leaveFrame;
          obj.leaveFrame(frame.id);
        };
        cResult[5] = frame.id;
        cResult[6] = fn2;
      }
      if (cResult[7] !== frame.id) {
        class O {
          constructor(arg0, arg1) {
            const obj = frames_getDefaultOrientationLockState;
            return obj.setOrientationLockState(frame.id, arg0, arg1);
          }
        }
        cResult[7] = frame.id;
        cResult[8] = O;
      } else {
        class O {
          constructor(arg0, arg1) {
            const obj = frames_getDefaultOrientationLockState;
            return obj.setOrientationLockState(frame.id, arg0, arg1);
          }
        }
      }
      if (!first) {
        class O {
          constructor(arg0, arg1) {
            const obj = frames_getDefaultOrientationLockState;
            return obj.setOrientationLockState(frame.id, arg0, arg1);
          }
        }
      }
      if (cResult[9] === data) {
        class O {
          constructor(arg0, arg1) {
            const obj = frames_getDefaultOrientationLockState;
            return obj.setOrientationLockState(frame.id, arg0, arg1);
          }
        }
      }
      const obj4 = { orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp4, application: data, setOrientationLockState: tmp9 };
      cResult[9] = data;
      cResult[10] = orientationLock;
      cResult[11] = tmp9;
      cResult[12] = first;
      cResult[13] = obj4;
    }
  }
  const fn = function c() {
    const obj = DispatcherDefault;
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id };
    obj.dispatch(obj2);
  };
  const items = [layoutMode, , ];
  ({ applicationId: arr[1], id: arr[2] } = frame);
  cResult[0] = frame.applicationId;
  cResult[1] = frame.id;
  cResult[2] = layoutMode;
  cResult[3] = fn;
  cResult[4] = items;
  tmp6 = items;
  tmp5 = fn;
}) : (function FrameView(frame) {
  let first;
  let iframeId;
  let isLandscape;
  let isResetting;
  let obj4;
  let onActivityCrash;
  let tmp12;
  let tmp5;
  let tmpResult2;
  frame = frame.frame;
  const presentation = frame.presentation;
  const layoutMode = presentation.layoutMode;
  let portraitSafeAreasConfig = presentation.portraitSafeAreasConfig;
  ({ iframeId, onActivityCrash } = frame);
  const landscapeSafeAreasConfig = presentation.landscapeSafeAreasConfig;
  let obj = frame(6299);
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
    const obj = leaveFrame;
    obj.leaveFrame(frame.id);
  }, items1);
  const callback1 = react.useCallback((arg0, arg1) => {
    const obj = frames_getDefaultOrientationLockState;
    return obj.setOrientationLockState(frame.id, arg0, arg1);
  }, items2);
  if (!first) {
    first = null == data;
  }
  const tmpResult = frame(11236);
  const baseActivityView = tmpResult.useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp5, application: data, setOrientationLockState: callback1 });
  ({ isResetting, isLandscape } = baseActivityView);
  const BaseActivityView = tmp(11236).BaseActivityView;
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
    queryParams: tmp12(frame, frame(11252).ActivityPlatform.MOBILE),
    onLoadError: callback,
    allowPopups: tmpResult2.allowPopups(data),
    referrerPolicy: "origin",
    isPipOrGridMode: layoutMode === FrameLayoutModes.PIP,
    safeAreasConfig: portraitSafeAreasConfig
  });
  obj4 = { type: frame(10949).EmbeddedContextSourceType.FRAME, frameId: frame.id };
  layoutMode(18067);
  tmp12 = layoutMode(18064);
  tmpResult2 = frame(11275);
  if (isLandscape) {
    portraitSafeAreasConfig = landscapeSafeAreasConfig;
  }
  return <BaseActivityView showLoadingIndicator={first} isResetting={isResetting}>{null}</BaseActivityView>;
});
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default tmp2;
