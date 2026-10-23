// Module ID: 18395
// Function ID: 18396
// Name: FrameView
// Dependencies: [32, 19, 6771, 6774, 21, 558, 576, 6807, 504, 584, 10764, 18396, 11436, 5907, 1128, 6775, 18397, 11451, 11482, 18400, 2]

// Module 18395 (FrameView)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl3 from "intl" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5907 */;
import FramesConstants from "FramesConstants" /* 6774 */;
import leaveFrame from "leaveFrame" /* 10764 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 18396 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6771 */;
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
  let tmp6;
  let obj = frame(576);
  const cResult = obj.c(44);
  const tmp = frame;
  frame = frame.frame;
  ({ iframeId, onActivityCrash, presentation } = frame);
  const layoutMode = presentation.layoutMode;
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = presentation);
  let obj2 = frame(6807);
  const data = obj2.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== frame.applicationId) {
    const fn = function u() {
      return ConjureProjectStore.isConjureProjectApplication(frame.applicationId);
    };
    cResult[1] = frame.applicationId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  let stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (!stateFromStores) {
    let conjureProjectId;
    if (data != null) {
      conjureProjectId = data.conjureProjectId;
    }
    stateFromStores = null != conjureProjectId;
  }
  const first1 = _slicedToArray(react.useState(true), 2)[0];
  _slicedToArray(react.useState(true), 2);
  const obj4 = react;
  if (cResult[3] === frame.applicationId) {
    if (cResult[4] === frame.id) {
      let tmp12;
      let tmp13;
      if (cResult[5] === layoutMode) {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const layoutEffect = obj4.useLayoutEffect(tmp12, tmp13);
      if (cResult[8] !== frame.id) {
        class E {
          constructor() {
            const obj = leaveFrame;
            obj.leaveFrame(frame.id);
          }
        }
        cResult[8] = frame.id;
        cResult[9] = E;
      } else {
        class E {
          constructor() {
            const obj = leaveFrame;
            obj.leaveFrame(frame.id);
          }
        }
      }
      if (cResult[10] !== frame.id) {
        class R {
          constructor(arg0, arg1) {
            const obj = frames_getDefaultOrientationLockState;
            return obj.setOrientationLockState(frame.id, arg0, arg1);
          }
        }
        cResult[10] = frame.id;
        cResult[11] = R;
      } else {
        class R {
          constructor(arg0, arg1) {
            const obj = frames_getDefaultOrientationLockState;
            return obj.setOrientationLockState(frame.id, arg0, arg1);
          }
        }
      }
      if (!first1) {
        class R {
          constructor(arg0, arg1) {
            const obj = frames_getDefaultOrientationLockState;
            return obj.setOrientationLockState(frame.id, arg0, arg1);
          }
        }
      }
      if (cResult[12] === data) {
        class R {
          constructor(arg0, arg1) {
            const obj = frames_getDefaultOrientationLockState;
            return obj.setOrientationLockState(frame.id, arg0, arg1);
          }
        }
      }
      const obj3 = { orientationLockState: orientationLock, showLoadingIndicator: first1, setShowLoadingStateForLockingOrientation: tmp11, application: data, setOrientationLockState: tmp16 };
      cResult[12] = data;
      cResult[13] = orientationLock;
      cResult[14] = tmp16;
      cResult[15] = first1;
      cResult[16] = obj3;
    }
  }
  class F {
    constructor() {
      const obj = DispatcherDefault;
      const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id };
      obj.dispatch(obj2);
    }
  }
  const items1 = [layoutMode, , ];
  ({ applicationId: arr2[1], id: arr2[2] } = frame);
  cResult[3] = frame.applicationId;
  cResult[4] = frame.id;
  cResult[5] = layoutMode;
  cResult[6] = F;
  cResult[7] = items1;
  tmp13 = items1;
  tmp12 = F;
}) : (function FrameView(frame) {
  let first;
  let iframeId;
  let isLandscape;
  let isResetting;
  let obj4;
  let onActivityCrash;
  let tmp14;
  let tmp7;
  let tmpResult4;
  frame = frame.frame;
  const presentation = frame.presentation;
  const layoutMode = presentation.layoutMode;
  let portraitSafeAreasConfig = presentation.portraitSafeAreasConfig;
  ({ iframeId, onActivityCrash } = frame);
  const landscapeSafeAreasConfig = presentation.landscapeSafeAreasConfig;
  let obj = frame(6807);
  const data = obj.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const items = [ConjureProjectStore];
  const tmpResult = frame(504);
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
  const tmpResult3 = frame(11436);
  const baseActivityView = tmpResult3.useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp7, application: data, setOrientationLockState: callback1 });
  ({ isResetting, isLandscape } = baseActivityView);
  const BaseActivityView = tmp(11436).BaseActivityView;
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
    queryParams: tmp14(frame, frame(11451).ActivityPlatform.MOBILE),
    onLoadError: callback,
    allowPopups: tmpResult4.allowPopups(data),
    referrerPolicy: "origin",
    isPipOrGridMode: layoutMode === FrameLayoutModes.PIP,
    safeAreasConfig: portraitSafeAreasConfig,
    ignoreSilentHardwareSwitch: !stateFromStores
  });
  obj4 = { type: frame(6775).EmbeddedContextSourceType.FRAME, frameId: frame.id };
  layoutMode(18400);
  tmp14 = layoutMode(18397);
  tmpResult4 = frame(11482);
  if (isLandscape) {
    portraitSafeAreasConfig = landscapeSafeAreasConfig;
  }
  return <BaseActivityView showLoadingIndicator={first} isResetting={isResetting}>{null}</BaseActivityView>;
});
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default tmp2;
