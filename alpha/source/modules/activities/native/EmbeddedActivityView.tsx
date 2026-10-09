// Module ID: 10884
// Function ID: 10885
// Name: EmbeddedActivityView
// Dependencies: [109, 32, 19, 17, 2063, 2024, 1373, 21, 5091, 558, 576, 10882, 1497, 584, 10885, 10886, 10888, 10912, 10878, 504, 10917, 10777, 10918, 5105, 10920, 2]

// Module 10884 (EmbeddedActivityView)
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ApplicationConstants from "ApplicationConstants" /* 1373 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5105 */;
import leaveEmbeddedActivity2 from "leaveEmbeddedActivity" /* 10777 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 10885 */;
import DiscordEnvironment from "DiscordEnvironment" /* 10886 */;
import activityWebViewController from "activityWebViewController" /* 10888 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import Constants from "Constants" /* 2024 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dispatchResult, obj1;

let c9;
let closure_12;
let closure_14;
let closure_15;
let metroImportAll;
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
    const tmp15 = _objectWithoutProperties(discordEnvQueryParams, user);
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
let user = ["ui_density"];
let closure_4 = ["deepLinkQueryParams", "applicationId"];
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: metroImportAll, View: c9 } = react_native);
({ ActivityLayoutMode: unpackModuleId, ActivityScreenOrientation: closure_12 } = Constants);
const set = ApplicationConstants.OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = createStyles.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const EmbeddedActivities = "EmbeddedActivities";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBaseActivityView(orientationLockState) {
  let closure_6;
  let first;
  let first1;
  let setShowLoadingStateForLockingOrientation;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp7;
  let tmp8;
  let tmp2 = setShowLoadingStateForLockingOrientation;
  let tmp = orientationLockState;
  let obj = orientationLockState(setShowLoadingStateForLockingOrientation[10]);
  const cResult = obj.c(29);
  orientationLockState = orientationLockState.orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  [first, tmp7] = first1.useState(false);
  const tmp4 = _slicedToArray;
  if (cResult[0] !== application) {
    const tmpResult = tmp(tmp2[11]);
    const defaultOrientationLockState = tmpResult.getDefaultOrientationLockState(application);
    cResult[0] = application;
    cResult[1] = defaultOrientationLockState;
    tmp8 = defaultOrientationLockState;
  } else {
    tmp8 = cResult[1];
  }
  _slicedToArray = tmp8;
  let id;
  if (application != null) {
    id = application.id;
  }
  const tmp4Result = tmp4(first1.useState(false), 2);
  first1 = tmp4Result[0];
  let closure_8 = tmp4Result[1];
  size = showLoadingIndicator(tmp2[12])();
  let closure_9 = tmp13;
  if (cResult[2] !== size.width > size.height) {
    const fn = function h() {
      const tmp2 = closure_9 ? authStore2.LANDSCAPE : authStore2.PORTRAIT;
      const obj = DispatcherDefault;
      obj.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: tmp2 });
    };
    const items = [tmp13];
    cResult[2] = size.width > size.height;
    cResult[3] = fn;
    cResult[4] = items;
    tmp15 = items;
    tmp14 = fn;
  } else {
    tmp14 = cResult[3];
    tmp15 = cResult[4];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp14, tmp15);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _() {
      closure_8(false);
    };
    cResult[5] = fn2;
    tmp17 = fn2;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] !== id) {
    const items1 = [id];
    cResult[6] = id;
    cResult[7] = items1;
    tmp18 = items1;
  } else {
    tmp18 = cResult[7];
  }
  const layoutEffect1 = obj2.useLayoutEffect(tmp17, tmp18);
  if (cResult[8] === tmp8) {
    if (cResult[9] === application) {
      if (cResult[10] === first1) {
        if (cResult[11] === size.width > size.height) {
          if (cResult[12] === orientationLockState) {
            if (cResult[13] === setOrientationLockState) {
              let tmp20;
              let tmp21;
              if (cResult[14] === setShowLoadingStateForLockingOrientation) {
                tmp20 = cResult[15];
                tmp21 = cResult[16];
              }
              const layoutEffect2 = obj2.useLayoutEffect(tmp20, tmp21);
              if (cResult[17] === size.width > size.height) {
                if (cResult[18] === orientationLockState) {
                  let tmp23;
                  let tmp24;
                  if (cResult[19] === setShowLoadingStateForLockingOrientation) {
                    tmp23 = cResult[20];
                    tmp24 = cResult[21];
                  }
                  const layoutEffect3 = obj2.useLayoutEffect(tmp23, tmp24);
                  if (cResult[22] === first) {
                    let tmp27;
                    let tmp28;
                    if (cResult[23] === showLoadingIndicator) {
                      tmp27 = cResult[24];
                      tmp28 = cResult[25];
                    }
                    const layoutEffect4 = obj2.useLayoutEffect(tmp27, tmp28);
                    if (cResult[26] === size.width > size.height) {
                      let tmp30;
                      if (cResult[27] === first) {
                        tmp30 = cResult[28];
                      }
                      return tmp30;
                    }
                    class O {
                      constructor() {
                        const tmp = showLoadingIndicator || first;
                        if (!tmp) {
                          closure_8(true);
                        }
                      }
                    }
                    tmp31[0] = first;
                    tmp31[1] = tmp7;
                    tmp31[2] = size.width > size.height;
                    cResult[26] = size.width > size.height;
                    cResult[27] = first;
                    cResult[28] = tmp31;
                    tmp30 = tmp31;
                  }
                  class O {
                    constructor() {
                      const tmp = showLoadingIndicator || first;
                      if (!tmp) {
                        closure_8(true);
                      }
                    }
                  }
                  const items2 = [showLoadingIndicator, first];
                  cResult[22] = first;
                  cResult[23] = showLoadingIndicator;
                  cResult[24] = O;
                  cResult[25] = items2;
                  tmp28 = items2;
                  tmp27 = O;
                }
              }
              const items3 = [orientationLockState, tmp13, setShowLoadingStateForLockingOrientation];
              cResult[17] = size.width > size.height;
              cResult[18] = orientationLockState;
              cResult[19] = setShowLoadingStateForLockingOrientation;
              cResult[20] = tmp25;
              cResult[21] = items3;
              tmp24 = items3;
              tmp23 = tmp25;
            }
          }
        }
      }
    }
  }
  const fn3 = function b() {
    const tmp = first1;
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
  const items4 = [tmp8, application, orientationLockState, tmp13, first1, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  cResult[8] = tmp8;
  cResult[9] = application;
  cResult[10] = first1;
  cResult[11] = size.width > size.height;
  cResult[12] = orientationLockState;
  cResult[13] = setOrientationLockState;
  cResult[14] = setShowLoadingStateForLockingOrientation;
  cResult[15] = fn3;
  cResult[16] = items4;
  tmp21 = items4;
  tmp20 = fn3;
}) : (function useBaseActivityView(orientationLockState) {
  orientationLockState = orientationLockState.orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  const setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  let defaultOrientationLockState;
  let first1;
  let closure_8;
  let isLandscape;
  let obj = first1;
  let tmp = defaultOrientationLockState;
  let tmp2 = defaultOrientationLockState(first1.useState(false), 2);
  const isResetting = tmp2[0];
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
    const tmp2 = isLandscape ? authStore2.LANDSCAPE : authStore2.PORTRAIT;
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
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityViewLoadingIndicator() {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp2 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = authStore3(metroImportAll, { size: "large" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp2.loadingContainer) {
    const obj2 = { style: tmp2.loadingContainer, children: first };
    const tmp10 = authStore3(React4, obj2);
    cResult[1] = tmp2.loadingContainer;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (function ActivityViewLoadingIndicator() {
  const obj = { style: closure_16().loadingContainer, children: authStore3(metroImportAll, { size: "large" }) };
  return authStore3(React4, obj);
});
let closure_20 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseActivityView(showLoadingIndicator) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(1);
  if (showLoadingIndicator.showLoadingIndicator) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp9 = authStore3(closure_20, {});
      cResult[0] = tmp9;
      first = tmp9;
    } else {
      first = cResult[0];
    }
    tmp4 = first;
  } else {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = tmp2;
    }
  }
  return tmp4;
}) : (function BaseActivityView(showLoadingIndicator) {
  let tmp3;
  if (showLoadingIndicator.showLoadingIndicator) {
    tmp3 = authStore3(closure_20, {});
  } else {
    tmp3 = null;
    if (!tmp2) {
      tmp3 = tmp;
    }
  }
  return tmp3;
});
let closure_21 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmbeddedActivityWebView(arg0) {
  let applicationId;
  let closure_0;
  let deepLinkQueryParams;
  let tmp10;
  let tmp5;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(11);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    ({ deepLinkQueryParams, applicationId } = arg0);
    _require = applicationId;
    const tmp9 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = applicationId;
    cResult[2] = deepLinkQueryParams;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp5 = deepLinkQueryParams;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const fn = function p() {
      const obj = activityWebViewController;
      return obj.getOrCreateActivityWebViewController(closure_0);
    };
    cResult[4] = tmp4;
    cResult[5] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  const first = _slicedToArray(react.useState(tmp10), 1)[0];
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp5) {
      if (cResult[8] === first) {
        let tmp12;
        if (cResult[9] === tmp6) {
          tmp12 = cResult[10];
        }
        return tmp12;
      }
    }
  }
  const obj2 = { iframeId: first, deepLinkQueryParams: tmp5, applicationId: tmp4 };
  const BaseEmbeddedAppWebView = tmp(10912).BaseEmbeddedAppWebView;
  const merged = Object.assign(tmp6);
  const tmp14 = closure_14(BaseEmbeddedAppWebView, obj2);
  cResult[6] = tmp4;
  cResult[7] = tmp5;
  cResult[8] = first;
  cResult[9] = tmp6;
  cResult[10] = tmp14;
  tmp12 = tmp14;
}) : (function EmbeddedActivityWebView(applicationId) {
  applicationId = applicationId.applicationId;
  const deepLinkQueryParams = applicationId.deepLinkQueryParams;
  const merged = Object.assign(applicationId, Object.assign({ deepLinkQueryParams: 0, applicationId: 0 }));
  let obj = {
    iframeId: _slicedToArray(react.useState(() => {
      const obj = activityWebViewController;
      return obj.getOrCreateActivityWebViewController(applicationId);
    }), 1)[0],
    deepLinkQueryParams,
    applicationId
  };
  const BaseEmbeddedAppWebView = applicationId(10912).BaseEmbeddedAppWebView;
  const merged1 = Object.assign(merged);
  return closure_14(BaseEmbeddedAppWebView, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmbeddedActivityViewInner(channel) {
  let applicationId;
  let first;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp22;
  let tmp23;
  let tmp9;
  const tmp = channel;
  let obj = channel(first[10]);
  const cResult = obj.c(45);
  channel = channel.channel;
  const layoutMode = channel.layoutMode;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    cResult[0] = currentEmbeddedActivity;
    first = currentEmbeddedActivity;
  } else {
    first = cResult[0];
  }
  const tmp8 = layoutMode(first[18])();
  user = tmp8;
  const tmp7 = layoutMode;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    cResult[1] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp8) {
    class L {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    const items1 = [tmp8];
    cResult[2] = tmp8;
    cResult[3] = L;
    cResult[4] = items1;
    tmp12 = items1;
    tmp11 = L;
  } else {
    class L {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    tmp12 = cResult[4];
  }
  const tmpResult = tmp(first[19]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11, tmp12);
  let obj3 = react;
  [r10055, tmp15] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  if (cResult[5] !== channel) {
    class L {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
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
    class L {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
  }
  useQueryParams(tmp16);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    tmp20[0] = first;
    cResult[7] = tmp20;
    tmp19 = tmp20;
  } else {
    class L {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
  }
  tmp7(first[20])(tmp19);
  if (cResult[8] !== layoutMode) {
    class M {
      constructor() {
        if (null != closure_2) {
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
        if (null != closure_2) {
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
        if (null != closure_2) {
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
        if (null != closure_2) {
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
          if (null != closure_2) {
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
    class W {
      constructor() {
        tmp = closure_0(closure_2[21]);
        _location = undefined;
        leaveEmbeddedActivity = tmp.leaveEmbeddedActivity;
        if (closure_2 != null) {
          _location = closure_2.location;
        }
        obj = { location: _location, applicationId: null };
        id = undefined;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        obj.applicationId = id;
        result = leaveEmbeddedActivity(obj);
        return;
      }
    }
    cResult[11] = tmp27;
    cResult[12] = W;
  } else {
    class M {
      constructor() {
        if (null != closure_2) {
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
        if (null != closure_2) {
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
  let c4;
  if (null != first) {
    class M {
      constructor() {
        if (null != closure_2) {
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
          if (null != closure_2) {
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
    class W {
      constructor() {
        tmp = closure_0(closure_2[21]);
        _location = undefined;
        leaveEmbeddedActivity = tmp.leaveEmbeddedActivity;
        if (closure_2 != null) {
          _location = closure_2.location;
        }
        obj = { location: _location, applicationId: null };
        id = undefined;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        obj.applicationId = id;
        result = leaveEmbeddedActivity(obj);
        return;
      }
    }
  }
  if (null != first) {
    class M {
      constructor() {
        if (null != closure_2) {
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
        if (null != closure_2) {
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
        if (null != closure_2) {
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
        if (null != closure_2) {
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
  let obj2 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp28, setShowLoadingStateForLockingOrientation: tmp15, application: tmp8, setOrientationLockState: tmp(tmp2[11]).setOrientationLockState };
  cResult[13] = tmp8;
  cResult[14] = stateFromStores;
  cResult[15] = null == first;
  cResult[16] = obj2;
}) : (function EmbeddedActivityViewInner(channel) {
  let compositeInstanceId;
  let guild_id;
  let id1;
  let items4;
  let tmp5Result;
  let tmp8;
  let tmp9;
  channel = channel.channel;
  const layoutMode = channel.layoutMode;
  let portraitSafeAreasConfig = channel.portraitSafeAreasConfig;
  let setIsResetting;
  const landscapeSafeAreasConfig = channel.landscapeSafeAreasConfig;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const tmp4 = layoutMode(currentEmbeddedActivity[18])();
  let obj = channel(currentEmbeddedActivity[19]);
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
  layoutMode(currentEmbeddedActivity[20])({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = react.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      const obj2 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: tmp.applicationId };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  let id;
  const callback = react.useCallback(() => {
    let _location;
    const leaveEmbeddedActivity = leaveEmbeddedActivity2.leaveEmbeddedActivity;
    leaveEmbeddedActivity2;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj = { location: _location, applicationId: id };
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    const result = leaveEmbeddedActivity(obj);
  }, items3);
  const tmp2 = layoutMode;
  if (tmp4 != null) {
    id = tmp4.id;
  }
  let tmp15 = null == currentEmbeddedActivity;
  if (!tmp15) {
    let launchId;
    if (currentEmbeddedActivity != null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    tmp15 = null == launchId;
  }
  if (!tmp15) {
    tmp15 = tmp8;
  }
  if (!tmp15) {
    tmp15 = null == id;
  }
  if (!tmp15) {
    tmp15 = null == tmp4;
  }
  let obj2 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp15, setShowLoadingStateForLockingOrientation: tmp9, application: tmp4, setOrientationLockState: tmp5(tmp3[11]).setOrientationLockState };
  setIsResetting = closure_18(obj2).setIsResetting;
  closure_18(obj2);
  if (null != currentEmbeddedActivity) {
    if (null != id) {
      let obj3 = {};
      if (null != currentEmbeddedActivity.customId) {
        obj3.custom_id = currentEmbeddedActivity.customId;
      }
      if (null != currentEmbeddedActivity.referrerId) {
        obj3.referrer_id = currentEmbeddedActivity.referrerId;
      }
      const obj4 = { showLoadingIndicator: tmp15, isResetting: tmp18, children: items4 };
      const obj5 = { wakeLockKey: EmbeddedActivities };
      items4 = [closure_14(tmp2(tmp3[22]), obj5), ];
      const obj6 = {
        deepLinkQueryParams: obj3,
        onInvalidUrl() {
              id = undefined;
              if (channel != null) {
                id = tmp.id;
              }
              if (null != id) {
                const obj = ChannelRTCActionCreatorsDefault;
                const participant = obj.selectParticipant(tmp.id, null);
              }
              const obj2 = leaveEmbeddedActivity2;
              const obj3 = { location: currentEmbeddedActivity.location, applicationId: id, showFeedback: false };
              const result = obj2.leaveEmbeddedActivity(obj3);
            },
        onActivityCrash() {
              const obj = activityWebViewController;
              const result = obj.releaseActivityWebView();
              setIsResetting(true);
              const timerId = setTimeout(() => setIsResetting(false), 0);
            },
        applicationId: id,
        channelId: id1,
        guildId: guild_id,
        activityUrl: currentEmbeddedActivity.url,
        activitySessionId: compositeInstanceId,
        queryParams: tmp10,
        onLoadError: callback,
        allowPopups: tmp5Result.allowPopups(tmp4),
        referrerPolicy: "origin",
        isPipOrGridMode: layoutMode === constants.PIP || layoutMode === constants.GRID,
        safeAreasConfig: portraitSafeAreasConfig,
        ignoreSilentHardwareSwitch: !set.has(id)
      };
      id1 = undefined;
      const tmp20 = closure_15;
      const tmp21 = closure_21;
      const tmp22 = closure_14;
      const tmp24 = closure_22;
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
      tmp5Result = channel(currentEmbeddedActivity[24]);
      if (tmp19) {
        portraitSafeAreasConfig = landscapeSafeAreasConfig;
      }
      items4[1] = tmp22(tmp24, obj6);
      return tmp20(tmp21, obj4);
    }
  }
  return null;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export const useBaseActivityView = tmp5;
export const ActivityViewLoadingIndicator = tmp6;
export const BaseActivityView = tmp7;
export const EmbeddedActivityView = memoResult;
