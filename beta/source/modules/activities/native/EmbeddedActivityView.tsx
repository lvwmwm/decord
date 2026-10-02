// Module ID: 8909
// Function ID: 8910
// Name: EmbeddedActivityView
// Dependencies: [109, 32, 19, 17, 2050, 2011, 1361, 21, 4837, 558, 576, 8908, 1485, 585, 8910, 8911, 8913, 8906, 504, 8915, 8760, 8916, 8917, 2]

// Module 8909 (EmbeddedActivityView)
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import ApplicationConstants from "ApplicationConstants" /* 1361 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8760 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 8910 */;
import DiscordEnvironment from "DiscordEnvironment" /* 8911 */;
import WakeLockDefault from "WakeLock" /* 8913 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import Constants from "Constants" /* 2011 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, dispatchResult, leaveActivityResult, obj1, orientationLockState, portraitSafeAreasConfig, tmp3;

let c10;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function useQueryParams(arg0) {
  let channel;
  let currentEmbeddedActivity;
  let id;
  ({ currentEmbeddedActivity, channel } = arg0);
  if (null == currentEmbeddedActivity) {
    return { instance_id: "" };
  } else {
    const obj2 = DiscordEnvironment;
    const discordEnvQueryParams = obj2.getDiscordEnvQueryParams();
    const ui_density = discordEnvQueryParams.ui_density;
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    const tmp15 = _objectWithoutProperties(discordEnvQueryParams, closure_3);
    if (launchId == null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    const obj = { instance_id: launchId, location_id: id, launch_id: currentEmbeddedActivity.launchId };
    const _location = currentEmbeddedActivity.location;
    id = undefined;
    if (_location != null) {
      id = _location.id;
    }
    const merged = Object.assign(tmp15);
    if (null != currentEmbeddedActivity.proxyTicket) {
      obj.discord_proxy_ticket = currentEmbeddedActivity.proxyTicket;
    }
    const tmp5 = null != channel && null != channel.id && "" !== channel.id;
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
let react = react_mod;
({ ActivityIndicator: metroImportDefault, View: metroImportAll } = react_native);
({ ActivityLayoutMode: c10, ActivityScreenOrientation: unpackModuleId } = Constants);
const set = ApplicationConstants.OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = createStyles.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const EmbeddedActivities = "EmbeddedActivities";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((orientationLockState) => {
  let closure_5;
  let closure_6;
  let setShowLoadingStateForLockingOrientation;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp6;
  let tmp2 = setShowLoadingStateForLockingOrientation;
  let tmp = orientationLockState;
  let obj = orientationLockState(setShowLoadingStateForLockingOrientation[10]);
  const cResult = obj.c(29);
  orientationLockState = orientationLockState.orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  const tmp4 = _slicedToArray;
  [_slicedToArray] = react.useState(false);
  if (cResult[0] !== application) {
    const tmpResult = tmp(tmp2[11]);
    const defaultOrientationLockState = tmpResult.getDefaultOrientationLockState(application);
    cResult[0] = application;
    cResult[1] = defaultOrientationLockState;
    tmp6 = defaultOrientationLockState;
  } else {
    tmp6 = cResult[1];
  }
  react = tmp6;
  let id;
  if (application != null) {
    id = application.id;
  }
  const tmp4Result = tmp4(react.useState(false), 2);
  const first = tmp4Result[0];
  let closure_8 = tmp4Result[1];
  size = showLoadingIndicator(tmp2[12])();
  const tmp11 = size.width > size.height;
  let closure_9 = tmp11;
  if (cResult[2] !== tmp11) {
    const fn = function h() {
      const tmp2 = closure_9 ? unpackModuleId.LANDSCAPE : unpackModuleId.PORTRAIT;
      const obj = DispatcherDefault;
      obj.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: tmp2 });
    };
    const items = [tmp11];
    cResult[2] = tmp11;
    cResult[3] = fn;
    cResult[4] = items;
    tmp13 = items;
    tmp12 = fn;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp12, tmp13);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        closure_8(false);
      }
    }
    cResult[5] = A;
    tmp15 = A;
  } else {
    class A {
      constructor() {
        closure_8(false);
      }
    }
  }
  if (cResult[6] !== id) {
    class A {
      constructor() {
        closure_8(false);
      }
    }
    tmp17[0] = id;
    cResult[6] = id;
    cResult[7] = tmp17;
    tmp16 = tmp17;
  } else {
    class A {
      constructor() {
        closure_8(false);
      }
    }
  }
  const layoutEffect1 = obj2.useLayoutEffect(tmp15, tmp16);
  if (cResult[8] === tmp6) {
    class A {
      constructor() {
        closure_8(false);
      }
    }
  }
  const fn2 = function k() {
    const tmp = first;
    if (!tmp) {
      if (null == orientationLockState) {
        if (!doesOrientationMatchLockStateDefault(closure_9, closure_6)) {
          setShowLoadingStateForLockingOrientation(true);
        }
        if (null != application) {
          setOrientationLockState(tmp11, orientationLockState);
        }
      }
    }
    setShowLoadingStateForLockingOrientation(false);
  };
  const items1 = [tmp6, application, orientationLockState, tmp11, first, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  cResult[8] = tmp6;
  cResult[9] = application;
  cResult[10] = first;
  cResult[11] = tmp11;
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
  let closure_8;
  let isLandscape;
  let obj = defaultOrientationLockState;
  let tmp = isResetting;
  let tmp2 = isResetting(defaultOrientationLockState.useState(false), 2);
  isResetting = tmp2[0];
  const setIsResetting = tmp2[1];
  const obj2 = orientationLockState(setShowLoadingStateForLockingOrientation[11]);
  defaultOrientationLockState = obj2.getDefaultOrientationLockState(application);
  let id;
  const tmp5 = setShowLoadingStateForLockingOrientation;
  if (application != null) {
    id = application.id;
  }
  const tmpResult = tmp(obj.useState(false), 2);
  first1 = tmpResult[0];
  closure_8 = tmpResult[1];
  size = showLoadingIndicator(tmp5[12])();
  isLandscape = size.width > size.height;
  const items = [isLandscape];
  const layoutEffect = obj.useLayoutEffect(() => {
    const tmp2 = isLandscape ? unpackModuleId.LANDSCAPE : unpackModuleId.PORTRAIT;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: tmp2 });
  }, items);
  const items1 = [id];
  const layoutEffect1 = obj.useLayoutEffect(() => {
    closure_8(false);
  }, items1);
  const items2 = [defaultOrientationLockState, application, orientationLockState, isLandscape, first1, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    const tmp = first1;
    if (!tmp) {
      if (null == orientationLockState) {
        if (!doesOrientationMatchLockStateDefault(isLandscape, defaultOrientationLockState)) {
          setShowLoadingStateForLockingOrientation(true);
        }
        if (null != application) {
          setOrientationLockState(tmp11, orientationLockState);
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
    const tmp = showLoadingIndicator || isResetting;
    if (!tmp) {
      closure_8(true);
    }
  }, items4);
  return { isResetting, setIsResetting, isLandscape };
});
let closure_18 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp2 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = map1(metroImportDefault, { size: "large" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp2.loadingContainer) {
    const obj2 = { style: tmp2.loadingContainer, children: first };
    const tmp10 = map1(metroImportAll, obj2);
    cResult[1] = tmp2.loadingContainer;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (() => {
  const obj = { style: closure_16().loadingContainer, children: map1(metroImportDefault, { size: "large" }) };
  return map1(metroImportAll, obj);
});
let closure_20 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((showLoadingIndicator) => {
  let children;
  let items;
  let tmp4;
  let wakeLockKey;
  const obj = react2;
  const cResult = obj.c(6);
  ({ children, wakeLockKey } = showLoadingIndicator);
  if (showLoadingIndicator.showLoadingIndicator) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = map1(closure_20, {});
      cResult[0] = tmp17;
      first = tmp17;
    } else {
      first = cResult[0];
    }
    tmp4 = first;
  } else {
    tmp4 = null;
    if (!tmp3) {
      let tmp5;
      if (cResult[1] !== wakeLockKey) {
        const obj2 = { wakeLockKey };
        const tmp8 = map1(WakeLockDefault, obj2);
        cResult[1] = wakeLockKey;
        cResult[2] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] === tmp5) {
        let tmp9;
        if (cResult[4] === children) {
          tmp9 = cResult[5];
        }
        tmp4 = tmp9;
      }
      const obj3 = { children: items };
      items = [tmp5, children];
      const tmp12 = closure_15(authStore2, obj3);
      cResult[3] = tmp5;
      cResult[4] = children;
      cResult[5] = tmp12;
      tmp9 = tmp12;
    }
  }
  return tmp4;
}) : ((showLoadingIndicator) => {
  let items;
  let tmp4;
  if (showLoadingIndicator.showLoadingIndicator) {
    tmp4 = map1(closure_20, {});
  } else {
    tmp4 = null;
    if (!tmp3) {
      const obj = { children: items };
      const obj2 = { wakeLockKey: tmp2 };
      items = [map1(WakeLockDefault, obj2), tmp];
      tmp4 = closure_15(authStore2, obj);
    }
  }
  return tmp4;
});
let closure_21 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let first;
  let layoutMode;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp22;
  let tmp23;
  let tmp9;
  const tmp = layoutMode;
  let obj = layoutMode(576);
  const cResult = obj.c(38);
  ({ channel, layoutMode } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    cResult[0] = currentEmbeddedActivity;
    first = currentEmbeddedActivity;
  } else {
    first = cResult[0];
  }
  const tmp8 = first(8906)();
  dependencyMap = tmp8;
  const tmp7 = first;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    cResult[1] = items;
    tmp9 = items;
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
    tmp12 = items1;
    tmp11 = S;
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
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11, tmp12);
  [r10055, tmp15] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  const obj3 = react;
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
    tmp16 = tmp17;
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
    tmp19 = tmp20;
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
  tmp7(8915)(tmp19);
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
    tmp23 = items2;
    tmp22 = M;
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
  const tmp25 = cResult[11];
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
  if (tmp25 !== undefined) {
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
        tmp = closure_1(closure_2[20]);
        _location = undefined;
        leaveActivity = tmp.leaveActivity;
        if (closure_1 != null) {
          _location = closure_1.location;
        }
        obj = { location: _location, applicationId: null };
        id = undefined;
        if (closure_2 != null) {
          id = closure_2.id;
        }
        obj.applicationId = id;
        leaveActivityResult = leaveActivity(obj);
        return;
      }
    }
    cResult[11] = tmp27;
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
        tmp = closure_1(closure_2[20]);
        _location = undefined;
        leaveActivity = tmp.leaveActivity;
        if (closure_1 != null) {
          _location = closure_1.location;
        }
        obj = { location: _location, applicationId: null };
        id = undefined;
        if (closure_2 != null) {
          id = closure_2.id;
        }
        obj.applicationId = id;
        leaveActivityResult = leaveActivity(obj);
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
  let obj2 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp28, setShowLoadingStateForLockingOrientation: tmp15, application: tmp8, setOrientationLockState: tmp(8908).setOrientationLockState };
  cResult[13] = tmp8;
  cResult[14] = stateFromStores;
  cResult[15] = null == first;
  cResult[16] = obj2;
}) : ((portraitSafeAreasConfig) => {
  let channel;
  let compositeInstanceId;
  let guild_id;
  let id;
  let id1;
  let layoutMode;
  let obj4;
  let tmp2Result;
  let tmp5Result;
  let tmp8;
  let tmp9;
  ({ channel, layoutMode } = portraitSafeAreasConfig);
  portraitSafeAreasConfig = portraitSafeAreasConfig.portraitSafeAreasConfig;
  let setIsResetting;
  const landscapeSafeAreasConfig = portraitSafeAreasConfig.landscapeSafeAreasConfig;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const tmp4 = currentEmbeddedActivity(8906)();
  dependencyMap = tmp4;
  let obj = layoutMode(504);
  const items = [EmbeddedActivitiesStore];
  const items1 = [tmp4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let orientationLockStateForApp;
    if (null != id) {
      orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(tmp.id);
    }
    return orientationLockStateForApp;
  }, items1);
  [tmp8, tmp9] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  const tmp10 = useQueryParams({ currentEmbeddedActivity, channel });
  currentEmbeddedActivity(8915)({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = react.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      const obj2 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: tmp.applicationId };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  const callback = react.useCallback(() => {
    let _location;
    const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
    EmbeddedActivitiesNativeManagerDefault;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj = { location: _location, applicationId: id };
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    leaveActivity(obj);
  }, items3);
  const tmp2 = currentEmbeddedActivity;
  if (tmp4 != null) {
    id = tmp4.id;
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
  let obj2 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp14, setShowLoadingStateForLockingOrientation: tmp9, application: tmp4, setOrientationLockState: tmp5(8908).setOrientationLockState };
  setIsResetting = closure_18(obj2).setIsResetting;
  let tmp20Result = null;
  closure_18(obj2);
  if (null != currentEmbeddedActivity) {
    tmp20Result = null;
    if (null != id) {
      const obj3 = { wakeLockKey: EmbeddedActivities, showLoadingIndicator: tmp14, isResetting: tmp17, children: closure_13(tmp2Result, obj4) };
      obj4 = {
        onActivityCrash() {
              setIsResetting(true);
              const timerId = setTimeout(() => setIsResetting(false), 0);
            },
        applicationId: id,
        channelId: id1,
        guildId: guild_id,
        activityUrl: currentEmbeddedActivity.url,
        currentEmbeddedActivity,
        activitySessionId: compositeInstanceId,
        queryParams: tmp10,
        onLoadError: callback,
        allowPopups: tmp5Result.allowPopups(tmp4),
        referrerPolicy: "origin",
        isPipOrGridMode: layoutMode === constants.PIP || layoutMode === constants.GRID,
        webViewKey: layoutMode(8760).EMBEDDED_ACTIVITY_WEB_VIEW_KEY,
        safeAreasConfig: portraitSafeAreasConfig,
        ignoreSilentHardwareSwitch: !set.has(id)
      };
      id1 = undefined;
      const tmp21 = closure_21;
      tmp2Result = tmp2(8917);
      if (channel != null) {
        id1 = channel.id;
      }
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      compositeInstanceId = undefined;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp5Result = layoutMode(8916);
      if (tmp18) {
        portraitSafeAreasConfig = landscapeSafeAreasConfig;
      }
      tmp20Result = tmp20(tmp21, obj3);
    }
  }
  return tmp20Result;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export const useBaseActivityView = tmp5;
export const ActivityViewLoadingIndicator = tmp6;
export const BaseActivityView = tmp7;
export const EmbeddedActivityView = memoResult;
