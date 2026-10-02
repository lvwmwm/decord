// Module ID: 16281
// Function ID: 16282
// Name: FrameView
// Dependencies: [109, 32, 19, 8496, 8497, 2011, 21, 558, 576, 6585, 585, 8746, 16282, 8909, 16283, 8916, 16286, 504, 16287, 2]

// Module 16281 (FrameView)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 2011 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8746 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 16282 */;
import useInlineFrameOAuthNavigationDefault from "useInlineFrameOAuthNavigation" /* 16287 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 8496 */;
import FramesConstants from "FramesConstants" /* 8497 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, frame, frameId;

let c9;
let metroImportAll;
let tmp;
const get_initialized = tmp(504);
let closure_3 = ["frameId"];
({ asLaunched: metroImportAll, FrameLayoutModes: c9 } = FramesConstants);
const ActivityPlatform = Constants.ActivityPlatform;
const jsx = Fragment.jsx;
const FrameActivities = "FrameActivities";
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((frame) => {
  let applicationId;
  let id;
  let isResetting;
  let landscapeSafeAreasConfig;
  let portraitSafeAreasConfig;
  let setIsResetting;
  let obj = frame(setIsResetting[8]);
  const cResult = obj.c(34);
  frame = frame.frame;
  const layoutMode = frame.layoutMode;
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = frame);
  let obj2 = frame(setIsResetting[9]);
  const data = obj2.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  let first = _slicedToArray(react.useState(true), 2)[0];
  _slicedToArray(react.useState(true), 2);
  const obj3 = react;
  if (cResult[0] === frame.applicationId) {
    if (cResult[1] === frame.id) {
      let tmp7;
      let tmp8;
      let tmp10;
      let tmp11;
      if (cResult[2] === layoutMode) {
        tmp7 = cResult[3];
        tmp8 = cResult[4];
      }
      const layoutEffect = obj3.useLayoutEffect(tmp7, tmp8);
      if (cResult[5] !== frame.id) {
        const fn2 = function c() {
          const obj = FramesNativeManagerDefault;
          obj.leaveFrame(frame.id);
        };
        cResult[5] = frame.id;
        cResult[6] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== frame.id) {
        const fn3 = function h(arg0, arg1) {
          const obj = frames_getDefaultOrientationLockState;
          return obj.setOrientationLockState(frame.id, arg0, arg1);
        };
        cResult[7] = frame.id;
        cResult[8] = fn3;
        tmp11 = fn3;
      } else {
        tmp11 = cResult[8];
      }
      if (!first) {
        first = null == data;
      }
      if (cResult[9] === data) {
        if (cResult[10] === orientationLock) {
          if (cResult[11] === tmp11) {
            let tmp12;
            if (cResult[12] === first) {
              tmp12 = cResult[13];
            }
            const tmpResult = frame(setIsResetting[13]);
            const baseActivityView = tmpResult.useBaseActivityView(tmp12);
            ({ isResetting, setIsResetting } = baseActivityView);
            const isLandscape = baseActivityView.isLandscape;
            if (cResult[14] !== setIsResetting) {
              class V {
                constructor() {
                  tmp = setIsResetting(true);
                  timerId = setTimeout(() => setIsResetting(false), 0);
                  return;
                }
              }
              cResult[14] = setIsResetting;
              cResult[15] = V;
            } else {
              class V {
                constructor() {
                  tmp = setIsResetting(true);
                  timerId = setTimeout(() => setIsResetting(false), 0);
                  return;
                }
              }
            }
            ({ applicationId, id } = frame);
            const url = frame.data.url;
            if (cResult[16] !== frame) {
              class V {
                constructor() {
                  tmp = setIsResetting(true);
                  timerId = setTimeout(() => setIsResetting(false), 0);
                  return;
                }
              }
              cResult[16] = frame;
              cResult[17] = layoutMode(setIsResetting[14])(frame, ActivityPlatform.MOBILE);
              const tmp17 = layoutMode(setIsResetting[14])(frame, ActivityPlatform.MOBILE);
            } else {
              class V {
                constructor() {
                  tmp = setIsResetting(true);
                  timerId = setTimeout(() => setIsResetting(false), 0);
                  return;
                }
              }
            }
            if (cResult[18] !== data) {
              class V {
                constructor() {
                  tmp = setIsResetting(true);
                  timerId = setTimeout(() => setIsResetting(false), 0);
                  return;
                }
              }
              cResult[18] = data;
              cResult[19] = obj6.allowPopups(data);
              const allowPopupsResult = obj6.allowPopups(data);
            } else {
              class V {
                constructor() {
                  tmp = setIsResetting(true);
                  timerId = setTimeout(() => setIsResetting(false), 0);
                  return;
                }
              }
            }
            const PIP = constants.PIP;
            if (isLandscape) {
              class V {
                constructor() {
                  tmp = setIsResetting(true);
                  timerId = setTimeout(() => setIsResetting(false), 0);
                  return;
                }
              }
            }
            if (cResult[20] === frame.applicationId) {
              class V {
                constructor() {
                  tmp = setIsResetting(true);
                  timerId = setTimeout(() => setIsResetting(false), 0);
                  return;
                }
              }
            }
            layoutMode(setIsResetting[16]);
            const tmp26 = <tmp25 onActivityCrash={tmp14} applicationId={applicationId} frameId={id} activityUrl={url} queryParams={tmp15} onLoadError={tmp10} allowPopups={tmp18} referrerPolicy="origin" isPipOrGridMode={layoutMode === PIP} webViewKey={frame(setIsResetting[11]).FRAME_WEB_VIEW_KEY} safeAreasConfig={portraitSafeAreasConfig} />;
            cResult[20] = frame.applicationId;
            cResult[21] = frame.data.url;
            cResult[22] = frame.id;
            cResult[23] = tmp10;
            cResult[24] = tmp15;
            cResult[25] = tmp18;
            cResult[26] = layoutMode === PIP;
            cResult[27] = portraitSafeAreasConfig;
            cResult[28] = tmp14;
            cResult[29] = tmp26;
          }
        }
      }
      const obj5 = { orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp6, application: data, setOrientationLockState: tmp11 };
      cResult[9] = data;
      cResult[10] = orientationLock;
      cResult[11] = tmp11;
      cResult[12] = first;
      cResult[13] = obj5;
      tmp12 = obj5;
    }
  }
  const fn = function o() {
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
  tmp8 = items;
  tmp7 = fn;
}) : ((frame) => {
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
  let obj = frame(setIsResetting[9]);
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
  const tmpResult = frame(setIsResetting[13]);
  const baseActivityView = tmpResult.useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp5, application: data, setOrientationLockState: callback1 });
  setIsResetting = baseActivityView.setIsResetting;
  ({ isResetting, isLandscape } = baseActivityView);
  const BaseActivityView = tmp(tmp2[13]).BaseActivityView;
  ({
    onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => setIsResetting(false), 0);
    },
    applicationId: frame.applicationId,
    frameId: frame.id,
    activityUrl: frame.data.url,
    queryParams: layoutMode(setIsResetting[14])(frame, ActivityPlatform.MOBILE),
    onLoadError: callback,
    allowPopups: tmpResult2.allowPopups(data),
    referrerPolicy: "origin",
    isPipOrGridMode: layoutMode === constants.PIP,
    webViewKey: frame(setIsResetting[11]).FRAME_WEB_VIEW_KEY,
    safeAreasConfig: portraitSafeAreasConfig
  });
  layoutMode(setIsResetting[16]);
  tmpResult2 = frame(setIsResetting[15]);
  if (isLandscape) {
    portraitSafeAreasConfig = landscapeSafeAreasConfig;
  }
  return <BaseActivityView wakeLockKey={FrameActivities} showLoadingIndicator={first} isResetting={isResetting}>{null}</BaseActivityView>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let mainFrame;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function n() {
      return closure_1_8(mainFrame.getMainFrame());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp8 = null;
  if (null != stateFromStores) {
    if (cResult[2] === stateFromStores) {
      let tmp10;
      if (cResult[3] === arg0) {
        tmp10 = cResult[4];
      }
      tmp8 = tmp10;
    }
    const merged = Object.assign(arg0);
    const tmp16 = <closure_13 frame={stateFromStores} />;
    cResult[2] = stateFromStores;
    cResult[3] = arg0;
    cResult[4] = tmp16;
    tmp10 = tmp16;
  }
  return tmp8;
}) : ((arg0) => {
  let mainFrame;
  const items = [FramesStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    const merged = Object.assign(arg0);
    tmp2 = <closure_13 frame={stateFromStores} />;
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((frameId) => {
  let closure_0;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(10);
  const tmp = _require;
  if (cResult[0] !== frameId) {
    frameId = frameId.frameId;
    _require = frameId;
    const tmp8 = _objectWithoutProperties(frameId, closure_3);
    cResult[0] = frameId;
    cResult[1] = frameId;
    cResult[2] = tmp8;
    tmp5 = tmp8;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    cResult[3] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const fn = function f() {
      return metroImportAll(FramesStore.getFrame(closure_0));
    };
    const items1 = [tmp4];
    cResult[4] = tmp4;
    cResult[5] = fn;
    cResult[6] = items1;
    tmp12 = items1;
    tmp11 = fn;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11, tmp12);
  let applicationId;
  const tmp14 = useInlineFrameOAuthNavigationDefault;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  if (applicationId == null) {
    applicationId = null;
  }
  tmp14(applicationId);
  let tmp17 = null;
  if (null != stateFromStores) {
    if (cResult[7] === stateFromStores) {
      let tmp18;
      if (cResult[8] === tmp5) {
        tmp18 = cResult[9];
      }
      tmp17 = tmp18;
    }
    const merged = Object.assign(tmp5);
    const tmp24 = <closure_13 frame={stateFromStores} />;
    cResult[7] = stateFromStores;
    cResult[8] = tmp5;
    cResult[9] = tmp24;
    tmp18 = tmp24;
  }
  return tmp17;
}) : ((frameId) => {
  frameId = frameId.frameId;
  const merged = Object.assign(frameId, Object.assign({ frameId: 0 }));
  const items = [FramesStore];
  const items1 = [frameId];
  const obj = frameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => metroImportAll(FramesStore.getFrame(frameId)), items1);
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
    tmp6 = <closure_13 frame={stateFromStores} />;
  }
  return tmp6;
});
const memoResult = react.memo(tmp3);
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default memoResult;
export const InlineFrameView = tmp4;
export const FrameView = memoResult;
