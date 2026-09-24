// Module ID: 9750
// Function ID: 9751
// Name: EmbeddedActivityView
// Dependencies: [109, 32, 19, 17, 2044, 2008, 1353, 21, 4790, 558, 568, 9749, 1482, 577, 9751, 9752, 9754, 9747, 504, 9756, 9604, 9757, 9758, 2]

// Module 9750 (EmbeddedActivityView)
import c from "c" /* 568 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9604 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 9751 */;
import DiscordEnvironment from "DiscordEnvironment" /* 9752 */;
import WakeLockDefault from "WakeLock" /* 9754 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;

require = fn;
function useQueryParams(arg0) {
  ({ currentEmbeddedActivity, channel } = arg0);
  if (null == currentEmbeddedActivity) {
    return { instance_id: "" };
  } else {
    const discordEnvQueryParams = DiscordEnvironment.getDiscordEnvQueryParams();
    const ui_density = discordEnvQueryParams.ui_density;
    const tmp15 = _objectWithoutProperties(discordEnvQueryParams, closure_3);
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    if (launchId == null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    const obj = { instance_id: launchId, location_id: null, launch_id: null };
    const _location = currentEmbeddedActivity.location;
    let id;
    if (_location != null) {
      id = _location.id;
    }
    obj.location_id = id;
    obj.launch_id = currentEmbeddedActivity.launchId;
    const merged = Object.assign(tmp15);
    if (null != currentEmbeddedActivity.proxyTicket) {
      obj.discord_proxy_ticket = currentEmbeddedActivity.proxyTicket;
    }
    let tmp5 = null != channel && null != channel.id;
    if (tmp5) {
      tmp5 = "" !== channel.id;
    }
    if (tmp5) {
      obj.channel_id = channel.id;
    }
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let tmp7 = null != guild_id;
    if (tmp7) {
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      tmp7 = "" !== guild_id1;
    }
    if (tmp7) {
      let guild_id2;
      if (channel != null) {
        guild_id2 = channel.guild_id;
      }
      obj.guild_id = guild_id2;
    }
    return obj;
  }
}
let closure_3 = ["ui_density"];
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(2008);
({ ActivityLayoutMode: c10, ActivityScreenOrientation: closure_11 } = Constants);
fn(1353).OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4790);
let closure_16 = createStyles.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const EmbeddedActivities = "EmbeddedActivities";
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((orientationLockState) => {
  const cResult = orientationLockState(setShowLoadingStateForLockingOrientation[10]).c(29);
  orientationLockState = orientationLockState.orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  const obj = orientationLockState(setShowLoadingStateForLockingOrientation[10]);
  let tmp = orientationLockState;
  const tmp4 = _slicedToArray;
  _slicedToArray = _slicedToArray(noop.useState(false), 2)[0];
  if (cResult[0] !== application) {
    const defaultOrientationLockState = tmp(tmp2[11]).getDefaultOrientationLockState(application);
    cResult[0] = application;
    cResult[1] = defaultOrientationLockState;
    let tmp6 = defaultOrientationLockState;
    const tmpResult = tmp(tmp2[11]);
  } else {
    tmp6 = cResult[1];
  }
  noop = tmp6;
  let id;
  if (application != null) {
    id = application.id;
  }
  const tmp4Result = tmp4(noop.useState(false), 2);
  const first = tmp4Result[0];
  closure_8 = tmp4Result[1];
  const size = showLoadingIndicator(tmp2[12])();
  closure_9 = tmp11;
  if (cResult[2] !== size.width > size.height) {
    const fn = function h() {
      DispatcherDefault.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: closure_9 ? constants.LANDSCAPE : constants.PORTRAIT });
    };
    const items = [tmp11];
    cResult[2] = tmp11;
    cResult[3] = fn;
    cResult[4] = items;
    let tmp13 = items;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp12, tmp13);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        tmp = closure_8(false);
        return;
      }
    }
    cResult[5] = A;
    const tmp15 = A;
  } else {
    class A {
      constructor() {
        tmp = closure_8(false);
        return;
      }
    }
  }
  if (cResult[6] !== id) {
    class A {
      constructor() {
        tmp = closure_8(false);
        return;
      }
    }
    tmp17[0] = id;
    cResult[6] = id;
    cResult[7] = tmp17;
    const tmp16 = tmp17;
  } else {
    class A {
      constructor() {
        tmp = closure_8(false);
        return;
      }
    }
  }
  const layoutEffect1 = obj2.useLayoutEffect(tmp15, tmp16);
  if (cResult[8] === tmp6) {
    class A {
      constructor() {
        tmp = closure_8(false);
        return;
      }
    }
  }
  const fn2 = function k() {
    if (!first) {
      if (null == orientationLockState) {
        if (!doesOrientationMatchLockStateDefault(closure_9, closure_6)) {
          setShowLoadingStateForLockingOrientation(true);
        }
        if (null != application) {
          setOrientationLockState(tmp10, orientationLockState);
        }
      }
    }
    setShowLoadingStateForLockingOrientation(false);
  };
  const items1 = [tmp6, application, orientationLockState, size.width > size.height, first, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  cResult[8] = tmp6;
  cResult[9] = application;
  cResult[10] = first;
  cResult[11] = size.width > size.height;
  cResult[12] = orientationLockState;
  cResult[13] = setOrientationLockState;
  cResult[14] = setShowLoadingStateForLockingOrientation;
  cResult[15] = fn2;
  cResult[16] = items1;
}) : ((orientationLockState) => {
  orientationLockState = orientationLockState.orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  const setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  let isResetting;
  let defaultOrientationLockState;
  let first1;
  closure_8 = undefined;
  let isLandscape;
  const setIsResetting = isResetting(defaultOrientationLockState.useState(false), 2);
  isResetting = setIsResetting[0];
  defaultOrientationLockState = orientationLockState(setShowLoadingStateForLockingOrientation[11]).getDefaultOrientationLockState(application);
  let id;
  if (application != null) {
    id = application.id;
  }
  const tmpResult = isResetting(defaultOrientationLockState.useState(false), 2);
  first1 = tmpResult[0];
  closure_8 = tmpResult[1];
  const size = showLoadingIndicator(setShowLoadingStateForLockingOrientation[12])();
  isLandscape = size.width > size.height;
  const items = [isLandscape];
  const layoutEffect = obj.useLayoutEffect(() => {
    DispatcherDefault.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: isLandscape ? constants.LANDSCAPE : constants.PORTRAIT });
  }, items);
  const items1 = [id];
  const layoutEffect1 = obj.useLayoutEffect(() => {
    closure_8(false);
  }, items1);
  const items2 = [defaultOrientationLockState, application, orientationLockState, isLandscape, first1, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    if (!first1) {
      if (null == orientationLockState) {
        if (!doesOrientationMatchLockStateDefault(isLandscape, defaultOrientationLockState)) {
          setShowLoadingStateForLockingOrientation(true);
        }
        if (null != application) {
          setOrientationLockState(tmp10, orientationLockState);
        }
      }
    }
    setShowLoadingStateForLockingOrientation(false);
  }, items2);
  const items3 = [orientationLockState, isLandscape, setShowLoadingStateForLockingOrientation];
  const layoutEffect3 = obj.useLayoutEffect(() => {
    if (doesOrientationMatchLockStateDefault(isLandscape, orientationLockState)) {
      setShowLoadingStateForLockingOrientation(false);
    }
  }, items3);
  const items4 = [showLoadingIndicator, isResetting];
  const layoutEffect4 = obj.useLayoutEffect(() => {
    let tmp = showLoadingIndicator;
    if (!showLoadingIndicator) {
      tmp = isResetting;
    }
    if (!tmp) {
      closure_8(true);
    }
  }, items4);
  return { isResetting, setIsResetting: setIsResetting[1], isLandscape };
});
let closure_18 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp2 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = __initData2(React5, { size: "large" });
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp2.loadingContainer) {
    const obj2 = { style: tmp2.loadingContainer, children: first };
    const tmp10 = __initData2(closure_1_8, obj2);
    cResult[1] = tmp2.loadingContainer;
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (() => __initData2(closure_1_8, { style: closure_16().loadingContainer, children: __initData2(React5, { size: "large" }) }));
let closure_20 = tmp6;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((showLoadingIndicator) => {
  const cResult = c.c(6);
  ({ children, wakeLockKey } = showLoadingIndicator);
  if (showLoadingIndicator.showLoadingIndicator) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp18 = __initData2(closure_20, {});
      cResult[0] = tmp18;
      let first = tmp18;
    } else {
      first = cResult[0];
    }
  } else if (tmp3) {
    return null;
  } else {
    if (cResult[1] !== wakeLockKey) {
      const obj2 = { wakeLockKey };
      const tmp8 = __initData2(WakeLockDefault, obj2);
      cResult[1] = wakeLockKey;
      cResult[2] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
    }
    const obj3 = { children: null };
    const items = [tmp5, children];
    obj3.children = items;
    const tmp12 = closure_1_15(state, obj3);
    cResult[3] = tmp5;
    cResult[4] = children;
    cResult[5] = tmp12;
  }
}) : ((showLoadingIndicator) => {
  if (showLoadingIndicator.showLoadingIndicator) {
    let tmp4 = __initData2(closure_20, {});
  } else {
    tmp4 = null;
    if (!tmp3) {
      const obj = { children: null };
      const obj2 = { wakeLockKey: tmp2 };
      const items = [__initData2(WakeLockDefault, obj2), tmp];
      obj.children = items;
      tmp4 = closure_1_15(state, obj);
    }
  }
  return tmp4;
});
let closure_21 = tmp7;
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = layoutMode(568).c(38);
  ({ channel, layoutMode } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    cResult[0] = currentEmbeddedActivity;
    let first = currentEmbeddedActivity;
  } else {
    first = cResult[0];
  }
  const tmp8 = first(9747)();
  dependencyMap = tmp8;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    cResult[1] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp8) {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_2) {
          tmp3 = closure_9;
          orientationLockStateForApp = closure_9.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    const items1 = [tmp8];
    cResult[2] = tmp8;
    cResult[3] = S;
    cResult[4] = items1;
    let tmp12 = items1;
    const tmp11 = S;
  } else {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_2) {
          tmp3 = closure_9;
          orientationLockStateForApp = closure_9.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    tmp12 = cResult[4];
  }
  let obj = layoutMode(568);
  const tmp7 = first;
  const stateFromStores = layoutMode(504).useStateFromStores(tmp9, tmp11, tmp12);
  const obj3 = noop;
  const tmpResult = layoutMode(504);
  [r10055, tmp15] = noop.useState(true);
  if (cResult[5] !== channel) {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_2) {
          tmp3 = closure_9;
          orientationLockStateForApp = closure_9.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    tmp17[0] = first;
    tmp17[1] = channel;
    cResult[5] = channel;
    cResult[6] = tmp17;
    const tmp16 = tmp17;
  } else {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_2) {
          tmp3 = closure_9;
          orientationLockStateForApp = closure_9.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
  }
  useQueryParams(tmp16);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_2) {
          tmp3 = closure_9;
          orientationLockStateForApp = closure_9.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    tmp20[0] = first;
    cResult[7] = tmp20;
    const tmp19 = tmp20;
  } else {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_2) {
          tmp3 = closure_9;
          orientationLockStateForApp = closure_9.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
  }
  tmp7(9756)(tmp19);
  if (cResult[8] !== layoutMode) {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
    const items2 = [layoutMode, first];
    cResult[8] = layoutMode;
    cResult[9] = M;
    cResult[10] = items2;
    let tmp23 = items2;
    const tmp22 = M;
  } else {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
    tmp23 = cResult[10];
  }
  const layoutEffect = obj3.useLayoutEffect(tmp22, tmp23);
  if (tmp8 != null) {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (cResult[11] !== undefined) {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
    if (tmp8 != null) {
      class M {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
            tmp4 = layoutMode;
            obj1.layoutMode = layoutMode;
            obj1.applicationId = tmp.applicationId;
            dispatchResult = obj.dispatch(obj1);
          }
          return;
        }
      }
    }
    class F {
      constructor() {
        obj = closure_1(closure_2[20]);
        _location = undefined;
        if (closure_1 != null) {
          _location = closure_1.location;
        }
        obj1 = { location: _location, applicationId: null };
        id = undefined;
        if (closure_2 != null) {
          id = closure_2.id;
        }
        obj1.applicationId = id;
        leaveActivityResult = obj.leaveActivity(obj1);
        return;
      }
    }
    cResult[11] = tmp26;
    cResult[12] = F;
  } else {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (tmp8 != null) {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (null != first) {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
    if (first != null) {
      class M {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
            tmp4 = layoutMode;
            obj1.layoutMode = layoutMode;
            obj1.applicationId = tmp.applicationId;
            dispatchResult = obj.dispatch(obj1);
          }
          return;
        }
      }
    }
    class F {
      constructor() {
        obj = closure_1(closure_2[20]);
        _location = undefined;
        if (closure_1 != null) {
          _location = closure_1.location;
        }
        obj1 = { location: _location, applicationId: null };
        id = undefined;
        if (closure_2 != null) {
          id = closure_2.id;
        }
        obj1.applicationId = id;
        leaveActivityResult = obj.leaveActivity(obj1);
        return;
      }
    }
  }
  if (null != first) {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (null != first) {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (null != first) {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (cResult[13] === tmp8) {
    class M {
      constructor() {
        if (null != closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  const tmp14 = _slicedToArray(noop.useState(true), 2);
  cResult[13] = tmp8;
  cResult[14] = stateFromStores;
  cResult[15] = null == first;
  cResult[16] = { orientationLockState: stateFromStores, showLoadingIndicator: null == first, setShowLoadingStateForLockingOrientation: tmp15, application: tmp8, setOrientationLockState: layoutMode(9749).setOrientationLockState };
}) : ((portraitSafeAreasConfig) => {
  ({ channel, layoutMode } = portraitSafeAreasConfig);
  let landscapeSafeAreasConfig = portraitSafeAreasConfig.portraitSafeAreasConfig;
  let setIsResetting;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const tmp4 = currentEmbeddedActivity(9747)();
  dependencyMap = tmp4;
  const items = [EmbeddedActivitiesStore];
  const items1 = [tmp4];
  const stateFromStores = layoutMode(504).useStateFromStores(items, () => {
    let orientationLockStateForApp;
    if (null != closure_2) {
      orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(tmp.id);
    }
    return orientationLockStateForApp;
  }, items1);
  let obj = layoutMode(504);
  const tmp2 = currentEmbeddedActivity;
  [tmp8, tmp9] = noop.useState(true);
  const tmp7 = _slicedToArray(noop.useState(true), 2);
  currentEmbeddedActivity(9756)({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      const obj2 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: tmp.applicationId };
      DispatcherDefault.dispatch(obj2);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  const callback = noop.useCallback(() => {
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj2 = { location: _location, applicationId: null };
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    obj2.applicationId = id;
    EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
  }, items3);
  if (tmp4 != null) {
    let id = tmp4.id;
  }
  let tmp14 = null == currentEmbeddedActivity;
  if (!tmp14) {
    let launchId;
    if (currentEmbeddedActivity != null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    tmp14 = null == launchId;
  }
  if (!tmp14) {
    tmp14 = tmp8;
  }
  if (!tmp14) {
    tmp14 = null == id;
  }
  if (!tmp14) {
    tmp14 = null == tmp4;
  }
  const tmp10 = useQueryParams({ currentEmbeddedActivity, channel });
  let obj2 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp14, setShowLoadingStateForLockingOrientation: tmp9, application: tmp4, setOrientationLockState: layoutMode(9749).setOrientationLockState };
  setIsResetting = closure_18({ orientationLockState: stateFromStores, showLoadingIndicator: tmp14, setShowLoadingStateForLockingOrientation: tmp9, application: tmp4, setOrientationLockState: layoutMode(9749).setOrientationLockState }).setIsResetting;
  let tmp20Result = null;
  if (null != currentEmbeddedActivity) {
    tmp20Result = null;
    if (null != id) {
      const obj3 = { wakeLockKey: EmbeddedActivities, showLoadingIndicator: tmp14, isResetting: tmp17, children: null };
      const obj4 = {
        onActivityCrash() {
              setIsResetting(true);
              const timerId = setTimeout(() => setIsResetting(false), 0);
            },
        applicationId: id,
        channelId: null,
        guildId: null,
        activityUrl: null,
        currentEmbeddedActivity: null,
        activitySessionId: null,
        queryParams: null,
        onLoadError: null,
        allowPopups: null,
        referrerPolicy: "origin",
        isPipOrGridMode: null,
        webViewKey: null,
        safeAreasConfig: null,
        ignoreSilentHardwareSwitch: null
      };
      let id1;
      if (channel != null) {
        id1 = channel.id;
      }
      obj4.channelId = id1;
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj4.guildId = guild_id;
      obj4.activityUrl = currentEmbeddedActivity.url;
      obj4.currentEmbeddedActivity = currentEmbeddedActivity;
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj4.activitySessionId = compositeInstanceId;
      obj4.queryParams = tmp10;
      obj4.onLoadError = callback;
      const tmp21 = closure_21;
      const tmp2Result = tmp2(9758);
      obj4.allowPopups = tmp5(9757).allowPopups(tmp4);
      obj4.isPipOrGridMode = layoutMode === constants.PIP || layoutMode === constants.GRID;
      obj4.webViewKey = tmp5(9604).EMBEDDED_ACTIVITY_WEB_VIEW_KEY;
      if (tmp18) {
        landscapeSafeAreasConfig = portraitSafeAreasConfig.landscapeSafeAreasConfig;
      }
      obj4.safeAreasConfig = landscapeSafeAreasConfig;
      obj4.ignoreSilentHardwareSwitch = !set.has(id);
      obj3.children = closure_13(tmp2Result, obj4);
      tmp20Result = tmp20(tmp21, obj3);
      const tmp5Result = tmp5(9757);
    }
  }
  return tmp20Result;
}));
let size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export const useBaseActivityView = tmp5;
export const ActivityViewLoadingIndicator = tmp6;
export const BaseActivityView = tmp7;
export const EmbeddedActivityView = memoResult;
