// Module ID: 18950
// Function ID: 18951
// Name: FrameView
// Dependencies: [32, 19, 6831, 6834, 21, 558, 576, 6868, 504, 584, 10879, 18951, 11555, 5947, 1125, 6835, 18952, 11570, 11874, 11600, 18955, 2]

// Module 18950 (FrameView)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl3 from "intl" /* 1125 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5947 */;
import FramesConstants from "FramesConstants" /* 6834 */;
import leaveFrame from "leaveFrame" /* 10879 */;
import FramePoolManagerDefault from "FramePoolManager" /* 11874 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 18951 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function FrameView(frame) {
  let first;
  let landscapeSafeAreasConfig;
  let layoutMode;
  let onActivityCrash;
  let portraitSafeAreasConfig;
  let presentation;
  let tmp6;
  const tmp2 = layoutMode;
  let obj = frame(layoutMode[6]);
  const cResult = obj.c(48);
  const tmp = frame;
  frame = frame.frame;
  const iframeId = frame.iframeId;
  ({ onActivityCrash, presentation } = frame);
  layoutMode = presentation.layoutMode;
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = presentation);
  let obj2 = frame(layoutMode[7]);
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
  const tmpResult = tmp(tmp2[8]);
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
        class C {
          constructor() {
            const obj = leaveFrame;
            obj.leaveFrame(frame.id);
          }
        }
        cResult[8] = frame.id;
        cResult[9] = C;
      } else {
        class C {
          constructor() {
            const obj = leaveFrame;
            obj.leaveFrame(frame.id);
          }
        }
      }
      if (cResult[10] !== frame.id) {
        class C {
          constructor() {
            const obj = leaveFrame;
            obj.leaveFrame(frame.id);
          }
        }
        cResult[10] = frame.id;
        cResult[11] = tmp17;
      } else {
        class C {
          constructor() {
            const obj = leaveFrame;
            obj.leaveFrame(frame.id);
          }
        }
      }
      if (!first1) {
        class C {
          constructor() {
            const obj = leaveFrame;
            obj.leaveFrame(frame.id);
          }
        }
      }
      if (cResult[12] === data) {
        class C {
          constructor() {
            const obj = leaveFrame;
            obj.leaveFrame(frame.id);
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
  class E {
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
  cResult[6] = E;
  cResult[7] = items1;
  tmp13 = items1;
  tmp12 = E;
}) : (function FrameView(frame) {
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
  let obj = frame(layoutMode[7]);
  const data = obj.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const items = [ConjureProjectStore];
  const tmpResult = frame(tmp2[8]);
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
  const tmpResult3 = frame(tmp2[12]);
  const baseActivityView = tmpResult3.useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp7, application: data, setOrientationLockState: callback1 });
  ({ isResetting, isLandscape } = baseActivityView);
  const BaseActivityView = tmp(tmp2[12]).BaseActivityView;
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
    queryParams: tmp14(frame, frame(tmp2[17]).ActivityPlatform.MOBILE),
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
  obj4 = { type: frame(tmp2[15]).EmbeddedContextSourceType.FRAME, frameId: frame.id };
  iframeId(tmp2[20]);
  tmp14 = iframeId(tmp2[16]);
  tmpResult4 = frame(tmp2[19]);
  if (isLandscape) {
    portraitSafeAreasConfig = landscapeSafeAreasConfig;
  }
  return <BaseActivityView showLoadingIndicator={first} isResetting={isResetting}>{null}</BaseActivityView>;
});
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default tmp2;
