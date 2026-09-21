// Module ID: 16970
// Function ID: 16971
// Name: FrameView
// Dependencies: [109, 32, 19, 9311, 9312, 2008, 21, 558, 568, 7410, 577, 9558, 16971, 9718, 16972, 9725, 16975, 504, 16976, 2]

// Module 16970 (FrameView)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9558 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 16971 */;
import useInlineFrameOAuthNavigationDefault from "useInlineFrameOAuthNavigation" /* 16976 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9311 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["frameId"];
const FramesConstants = fn(9312);
({ asLaunched: closure_8, FrameLayoutModes: closure_9 } = FramesConstants);
const ActivityPlatform = fn(2008).ActivityPlatform;
const jsx = fn(21).jsx;
const FrameActivities = "FrameActivities";
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((frame) => {
  const cResult = frame(setIsResetting[8]).c(34);
  frame = frame.frame;
  const layoutMode = frame.layoutMode;
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = frame);
  const obj = frame(setIsResetting[8]);
  const data = frame(setIsResetting[9]).useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const obj2 = frame(setIsResetting[9]);
  const obj3 = noop;
  let first = _slicedToArray(noop.useState(true), 2)[0];
  if (cResult[0] === frame.applicationId) {
    if (cResult[1] === frame.id) {
      if (cResult[2] === layoutMode) {
        let tmp7 = cResult[3];
        let tmp8 = cResult[4];
      }
      const layoutEffect = obj3.useLayoutEffect(tmp7, tmp8);
      if (cResult[5] !== frame.id) {
        const fn2 = function c() {
          FramesNativeManagerDefault.leaveFrame(frame.id);
        };
        cResult[5] = frame.id;
        cResult[6] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== frame.id) {
        const fn3 = function h(arg0, arg1) {
          return frames_getDefaultOrientationLockState.setOrientationLockState(frame.id, arg0, arg1);
        };
        cResult[7] = frame.id;
        cResult[8] = fn3;
        let tmp11 = fn3;
      } else {
        tmp11 = cResult[8];
      }
      if (!first) {
        first = null == data;
      }
      if (cResult[9] === data) {
        if (cResult[10] === orientationLock) {
          if (cResult[11] === tmp11) {
            if (cResult[12] === first) {
              let tmp12 = cResult[13];
            }
            const baseActivityView = tmp(tmp2[13]).useBaseActivityView(tmp12);
            ({ isResetting, setIsResetting } = baseActivityView);
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
            if (cResult[16] !== frame) {
              class V {
                constructor() {
                  tmp = setIsResetting(true);
                  timerId = setTimeout(() => setIsResetting(false), 0);
                  return;
                }
              }
              const tmp17 = layoutMode(tmp2[14])(frame, ActivityPlatform.MOBILE);
              cResult[16] = frame;
              cResult[17] = tmp17;
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
              const allowPopupsResult = obj6.allowPopups(data);
              cResult[18] = data;
              cResult[19] = allowPopupsResult;
            } else {
              class V {
                constructor() {
                  tmp = setIsResetting(true);
                  timerId = setTimeout(() => setIsResetting(false), 0);
                  return;
                }
              }
            }
            if (baseActivityView.isLandscape) {
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
            const obj4 = { onActivityCrash: tmp14, applicationId, frameId: id, activityUrl: frame.data.url, queryParams: tmp15, onLoadError: tmp10, allowPopups: tmp18, referrerPolicy: "origin", isPipOrGridMode: layoutMode === constants.PIP, webViewKey: null, safeAreasConfig: null };
            const tmpResult = tmp(tmp2[13]);
            obj4.webViewKey = tmp(tmp2[11]).FRAME_WEB_VIEW_KEY;
            obj4.safeAreasConfig = portraitSafeAreasConfig;
            const tmp26 = jsx(layoutMode(tmp2[16]), { onActivityCrash: tmp14, applicationId, frameId: id, activityUrl: frame.data.url, queryParams: tmp15, onLoadError: tmp10, allowPopups: tmp18, referrerPolicy: "origin", isPipOrGridMode: layoutMode === constants.PIP, webViewKey: null, safeAreasConfig: null });
            cResult[20] = frame.applicationId;
            cResult[21] = frame.data.url;
            cResult[22] = frame.id;
            cResult[23] = tmp10;
            cResult[24] = tmp15;
            cResult[25] = tmp18;
            cResult[26] = layoutMode === constants.PIP;
            cResult[27] = portraitSafeAreasConfig;
            cResult[28] = tmp14;
            cResult[29] = tmp26;
            const tmp25 = layoutMode(tmp2[16]);
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
    DispatcherDefault.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id });
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
  frame = frame.frame;
  const layoutMode = frame.layoutMode;
  let landscapeSafeAreasConfig = frame.portraitSafeAreasConfig;
  let setIsResetting;
  const data = frame(setIsResetting[9]).useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  let first = tmp3[0];
  const items = [layoutMode, , ];
  ({ applicationId: arr[1], id: arr[2] } = frame);
  const layoutEffect = noop.useLayoutEffect(() => {
    DispatcherDefault.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id });
  }, items);
  const items1 = [frame.id];
  const items2 = [frame.id];
  const callback = noop.useCallback(() => {
    FramesNativeManagerDefault.leaveFrame(frame.id);
  }, items1);
  const callback1 = noop.useCallback((arg0, arg1) => frames_getDefaultOrientationLockState.setOrientationLockState(frame.id, arg0, arg1), items2);
  if (!first) {
    first = null == data;
  }
  const obj = frame(setIsResetting[9]);
  const baseActivityView = frame(setIsResetting[13]).useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp3[1], application: data, setOrientationLockState: callback1 });
  setIsResetting = baseActivityView.setIsResetting;
  ({ isResetting, isLandscape } = baseActivityView);
  const obj2 = { wakeLockKey: FrameActivities, showLoadingIndicator: first, isResetting, children: null };
  const obj3 = {
    onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => setIsResetting(false), 0);
    },
    applicationId: frame.applicationId,
    frameId: frame.id,
    activityUrl: frame.data.url,
    queryParams: null,
    onLoadError: null,
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: null,
    webViewKey: null,
    safeAreasConfig: null
  };
  const tmpResult = frame(setIsResetting[13]);
  obj3.queryParams = layoutMode(setIsResetting[14])(frame, ActivityPlatform.MOBILE);
  obj3.onLoadError = callback;
  const tmp10 = layoutMode(setIsResetting[16]);
  obj3.allowPopups = frame(setIsResetting[15]).allowPopups(data);
  obj3.isPipOrGridMode = layoutMode === constants.PIP;
  obj3.webViewKey = frame(setIsResetting[11]).FRAME_WEB_VIEW_KEY;
  if (isLandscape) {
    landscapeSafeAreasConfig = frame.landscapeSafeAreasConfig;
  }
  obj3.safeAreasConfig = landscapeSafeAreasConfig;
  obj2.children = <tmp10 onActivityCrash={function onActivityCrash() {
    setIsResetting(true);
    const timerId = setTimeout(() => setIsResetting(false), 0);
  }} applicationId={frame.applicationId} frameId={frame.id} activityUrl={frame.data.url} queryParams={null} onLoadError={null} allowPopups={null} referrerPolicy="origin" isPipOrGridMode={null} webViewKey={null} safeAreasConfig={null} />;
  return jsx(frame(setIsResetting[13]).BaseActivityView, { wakeLockKey: FrameActivities, showLoadingIndicator: first, isResetting, children: null });
});
fn(558);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[2] === stateFromStores) {
    }
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    const tmp15 = <closure_13 frame={stateFromStores} />;
    cResult[2] = stateFromStores;
    cResult[3] = arg0;
    cResult[4] = tmp15;
  }
}) : ((arg0) => {
  const items = [FramesStore];
  const stateFromStores = initialize.useStateFromStores(items, () => closure_1_8(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = <closure_13 frame={stateFromStores} />;
  }
  return tmp2;
});
const memoResult = noop.memo(tmp3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default memoResult;
export const InlineFrameView = ReactCompilerGating.isReactCompilerEnabled() ? ((frameId) => {
  const cResult = require("c").c(10);
  if (cResult[0] !== frameId) {
    frameId = frameId.frameId;
    _require = frameId;
    const tmp8 = _objectWithoutProperties(frameId, closure_3);
    cResult[0] = frameId;
    cResult[1] = frameId;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    cResult[3] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const fn = function f() {
      return closure_2_8(FramesStore.getFrame(closure_0));
    };
    const items1 = [tmp4];
    cResult[4] = tmp4;
    cResult[5] = fn;
    cResult[6] = items1;
    let tmp12 = items1;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp11, tmp12);
  let applicationId;
  const tmpResult = require("initialize");
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  if (applicationId == null) {
    applicationId = null;
  }
  useInlineFrameOAuthNavigationDefault(applicationId);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[7] === stateFromStores) {
    }
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(tmp5);
    const tmp23 = <closure_13 frame={stateFromStores} />;
    cResult[7] = stateFromStores;
    cResult[8] = tmp5;
    cResult[9] = tmp23;
  }
}) : ((frameId) => {
  frameId = frameId.frameId;
  const merged = Object.assign(frameId, Object.assign({ frameId: 0 }));
  const items = [FramesStore];
  const items1 = [frameId];
  const stateFromStores = frameId(504).useStateFromStores(items, () => closure_2_8(FramesStore.getFrame(frameId)), items1);
  let applicationId;
  const obj = frameId(504);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  if (applicationId == null) {
    applicationId = null;
  }
  useInlineFrameOAuthNavigationDefault(applicationId);
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
    const merged1 = Object.assign(merged);
    tmp6 = <closure_13 frame={stateFromStores} />;
  }
  return tmp6;
});
export const FrameView = memoResult;
