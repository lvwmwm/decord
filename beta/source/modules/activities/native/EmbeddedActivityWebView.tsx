// Module ID: 8917
// Function ID: 8918
// Name: EmbeddedActivityWebView
// Dependencies: [109, 5, 32, 19, 17, 8317, 2011, 1086, 4741, 21, 4837, 3, 1370, 558, 576, 8918, 1267, 7750, 8919, 8920, 1369, 8922, 8923, 8924, 1253, 1122, 573, 5204, 1127, 8500, 1283, 8925, 1372, 8748, 8761, 7724, 5038, 8760, 2]

// Module 8917 (EmbeddedActivityWebView)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1122 */;
import intl4 from "intl" /* 1127 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import v1 from "v1" /* 1267 */;
import URLUtilsDefault from "URLUtils" /* 1372 */;
import Constants2 from "Constants" /* 4741 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5038 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5204 */;
import usePreviousDefault from "usePrevious" /* 7724 */;
import WebView2 from "WebView" /* 7750 */;
import getPostMessageJavaScriptDefault from "getPostMessageJavaScript" /* 8748 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8760 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 8761 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8317 */;
import Constants_mod from "Constants" /* 2011 */;
import Constants_mod2 from "Constants" /* 1086 */;
import createStyles from "createStyles" /* 4837 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let applicationId, c1, c2, c3, c4, c5, c6, c8, c9, constants, content_security_policy, importAll, importDefault;

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
function getSafeArea(disable, arg1) {
  let tmp = arg1;
  if (null != disable) {
    let num2 = 0;
    if (!disable.disable) {
      let bound;
      if (null != disable.override) {
        const _Math2 = Math;
        bound = Math.max(0, disable.override);
      } else {
        bound = arg1;
        if (null != disable.offset) {
          const _Math = Math;
          bound = Math.max(0, arg1 + disable.offset);
        }
      }
      num2 = bound;
    }
    tmp = num2;
  }
  return tmp;
}
let closure_4 = ["channelId", "currentEmbeddedActivity", "applicationId"];
const Linking = react_native.Linking;
let Constants = Constants_mod2;
({ ActivityPlatform: unpackModuleId, DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY: closure_12 } = Constants);
Constants = Constants_mod2;
({ ComponentActions: map1, AnalyticEvents: closure_14 } = Constants);
const TransportTypes = Constants2.TransportTypes;
const jsx = Fragment.jsx;
let closure_17 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let tmp4 = new LoggerDefault("EmbeddedActivityWebView");
let logger = tmp4;
let closure_19 = PlatformUtils.isIOS();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function(hasIframeId) {
  let allowMotionSensors;
  let allowPopups;
  let channelId;
  let closure_20;
  let deepLinkQueryParams;
  let hasInvalidUrlError;
  let ignoreSilentHardwareSwitch;
  let onActivityCrash;
  let onIframeMount;
  let onIframeUnmount;
  let origin;
  let queryParams;
  let ref;
  let referrerPolicy;
  let safeAreasConfig;
  let tmp17;
  let tmp7;
  let tmp = hasIframeId;
  let tmp2 = hasInvalidUrlError;
  let obj = hasIframeId(hasInvalidUrlError[14]);
  const cResult = obj.c(123);
  hasIframeId = hasIframeId.hasIframeId;
  const getOrCreateIframeId = hasIframeId.getOrCreateIframeId;
  const releaseIframeId = hasIframeId.releaseIframeId;
  ({ onIframeMount, onIframeUnmount, hasInvalidUrlError } = hasIframeId);
  const setHasInvalidUrlError = hasIframeId.setHasInvalidUrlError;
  const hadInvalidUrlError = hasIframeId.hadInvalidUrlError;
  ({ deepLinkQueryParams, applicationId } = hasIframeId);
  ({ queryParams, onActivityCrash } = hasIframeId);
  const onLoadError = hasIframeId.onLoadError;
  ({ allowPopups, referrerPolicy } = hasIframeId);
  const isPipOrGridMode = hasIframeId.isPipOrGridMode;
  const webViewKey = hasIframeId.webViewKey;
  ({ ignoreSilentHardwareSwitch, safeAreasConfig } = hasIframeId);
  ({ allowMotionSensors, channelId } = hasIframeId);
  const guildId = hasIframeId.guildId;
  const activitySessionId = hasIframeId.activitySessionId;
  const activityUrl = hasIframeId.activityUrl;
  if (undefined === deepLinkQueryParams) {
    deepLinkQueryParams = {};
  }
  let tmp4 = undefined !== allowMotionSensors && allowMotionSensors;
  let tmp5 = origin();
  let obj2 = onLoadError;
  const context = onLoadError.useContext(tmp(tmp2[15]).WebViewContext);
  if (cResult[0] !== hasIframeId) {
    const fn = function n() {
      return hasIframeId();
    };
    cResult[0] = hasIframeId;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  let tmp8 = onActivityCrash;
  const first = onActivityCrash(obj2.useState(tmp7), 1)[0];
  if (cResult[2] === getOrCreateIframeId) {
    let tmp10;
    let tmp14;
    if (cResult[3] === webViewKey) {
      tmp10 = cResult[4];
    }
    const first1 = tmp8(obj2.useState(tmp10), 1)[0];
    const tmp8Result = tmp8(obj2.useState(null), 2);
    origin = tmp8Result[0];
    logger = tmp8Result[1];
    if (cResult[5] !== webViewKey) {
      let webViewProxy;
      if (null != webViewKey) {
        const tmpResult = tmp(tmp2[17]);
        webViewProxy = tmpResult.getWebViewProxy(webViewKey);
      }
      cResult[5] = webViewKey;
      cResult[6] = webViewProxy;
      tmp14 = webViewProxy;
    } else {
      tmp14 = cResult[6];
    }
    closure_19 = tmp14;
    [r10084, tmp17] = tmp8(obj2.useState(null), 2);
    getSafeArea = tmp17;
    let tmp18 = !first;
    tmp8(obj2.useState(null), 2);
    if (first) {
      tmp18 = null == webViewKey;
    }
    if (cResult[7] === onIframeMount) {
      if (cResult[8] === onIframeUnmount) {
        if (cResult[9] === tmp18) {
          let tmp20;
          let tmp33;
          let tmp35;
          if (cResult[10] === null == webViewKey) {
            tmp20 = cResult[11];
          }
          getOrCreateIframeId(tmp2[18])(first1, tmp20);
          closure_21 = getOrCreateIframeId(tmp2[19])();
          const tmp23 = getOrCreateIframeId(tmp2[19])();
          let obj5 = releaseIframeId(tmp2[20]);
          let obj3 = { frame_id: first1, platform: webViewKey.MOBILE, mobile_app_version: constants.Version };
          constants = obj5.getConstants();
          const merged = Object.assign(queryParams);
          let tmp30 = deepLinkQueryParams;
          const merged1 = Object.assign(deepLinkQueryParams);
          const tmp32 = webViewKey;
          if (cResult[12] !== tmp4) {
            let obj4 = { allowMotionSensors: tmp4 };
            const tmp34 = getOrCreateIframeId(tmp2[21])(obj4);
            cResult[12] = tmp4;
            cResult[13] = tmp34;
            tmp33 = tmp34;
          } else {
            tmp33 = cResult[13];
          }
          closure_22 = tmp33;
          if (cResult[14] !== allowPopups) {
            let obj6 = { allowPopups };
            let tmp36 = tmp21(tmp2[22])(obj6);
            cResult[14] = allowPopups;
            cResult[15] = tmp36;
            tmp35 = tmp36;
          } else {
            tmp35 = cResult[15];
          }
          let closure_23 = tmp35;
          const tmp37 = globalThis;
          const _URLSearchParams = URLSearchParams;
          let self = this;
          let self2 = this;
          const uRLSearchParams = new URLSearchParams(obj3);
          let _HermesInternal = HermesInternal;
          let str = "?";
          const combined = "" + activityUrl + "?" + uRLSearchParams;
          let closure_25 = obj2.useRef(safeAreasConfig);
          if (cResult[16] === tmp33) {
            if (cResult[17] === tmp35) {
              if (cResult[18] === combined) {
                if (cResult[19] === onLoadError) {
                  if (cResult[20] === referrerPolicy) {
                    let tmp42;
                    if (cResult[21] === tmp17) {
                      tmp42 = cResult[22];
                    }
                    if (cResult[23] === tmp33) {
                      if (cResult[24] === tmp35) {
                        if (cResult[25] === combined) {
                          if (cResult[26] === onLoadError) {
                            let tmp43;
                            if (cResult[27] === referrerPolicy) {
                              tmp43 = cResult[28];
                            }
                            const effect = obj2.useEffect(tmp42, tmp43);
                            if (cResult[29] !== applicationId) {
                              class Ue {
                                constructor(nativeEvent) {
                                  logger.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                                }
                              }
                              cResult[29] = applicationId;
                              cResult[30] = Ue;
                              class Me {
                                constructor() {
                                  logger.warn("activity WebView content process terminated for appId " + applicationId);
                                  const obj = AnalyticsUtilsDefault;
                                  const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                  obj.track(guildId.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                                  const obj3 = { id: first1 };
                                  ComponentDispatch.dispatch(map1.IFRAME_UNMOUNT, obj3);
                                  releaseIframeId();
                                  const obj4 = closure_19;
                                  if (null != closure_19) {
                                    obj4.releaseWebView();
                                  }
                                  onActivityCrash();
                                }
                              }
                            } else {
                              class Ue {
                                constructor(nativeEvent) {
                                  logger.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                                }
                              }
                            }
                            if (cResult[31] !== applicationId) {
                              class Oe {
                                constructor(nativeEvent) {
                                  logger.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                                }
                              }
                              cResult[31] = applicationId;
                              cResult[32] = Oe;
                              class Me {
                                constructor() {
                                  logger.warn("activity WebView content process terminated for appId " + applicationId);
                                  const obj = AnalyticsUtilsDefault;
                                  const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                  obj.track(guildId.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                                  const obj3 = { id: first1 };
                                  ComponentDispatch.dispatch(map1.IFRAME_UNMOUNT, obj3);
                                  releaseIframeId();
                                  const obj4 = closure_19;
                                  if (null != closure_19) {
                                    obj4.releaseWebView();
                                  }
                                  onActivityCrash();
                                }
                              }
                            } else {
                              class Oe {
                                constructor(nativeEvent) {
                                  logger.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                                }
                              }
                            }
                            if (cResult[33] === activitySessionId) {
                              class Oe {
                                constructor(nativeEvent) {
                                  logger.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                                }
                              }
                            }
                            class Me {
                              constructor() {
                                logger.warn("activity WebView content process terminated for appId " + applicationId);
                                const obj = AnalyticsUtilsDefault;
                                const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                obj.track(guildId.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                                const obj3 = { id: first1 };
                                ComponentDispatch.dispatch(map1.IFRAME_UNMOUNT, obj3);
                                releaseIframeId();
                                const obj4 = closure_19;
                                if (null != closure_19) {
                                  obj4.releaseWebView();
                                }
                                onActivityCrash();
                              }
                            }
                            cResult[33] = activitySessionId;
                            cResult[34] = applicationId;
                            cResult[35] = channelId;
                            cResult[36] = guildId;
                            cResult[37] = first1;
                            cResult[38] = onActivityCrash;
                            cResult[39] = releaseIframeId;
                            cResult[40] = tmp14;
                            cResult[41] = Me;
                          }
                        }
                      }
                    }
                    let items = [combined, tmp33, , onLoadError, referrerPolicy];
                    cResult[23] = tmp33;
                    cResult[24] = tmp35;
                    cResult[25] = combined;
                    cResult[26] = onLoadError;
                    cResult[27] = referrerPolicy;
                    cResult[28] = items;
                    tmp43 = items;
                  }
                }
              }
            }
          }
          function we() {
            function loadHtml() {
              return closure_0(...arguments);
            }
            let closure_0 = applicationId(function*(arg0, value) {
              let bottom;
              let right;
              let tmp36;
              let top;
              if (c7 === 2) {
                c7 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  let v0;
                  c7 = 2;
                  if (0 === c6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      let closure_5 = tmp2;
                      closure_4 = tmp;
                      v0 = undefined;
                      const obj7 = v0(hasInvalidUrlError[19]);
                      const rect = obj7.getStableSafeAreaInsets();
                      const current = ref.current;
                      let left;
                      const tmp42 = hasInvalidUrlError;
                      if (current != null) {
                        left = current.left;
                      }
                      let left1;
                      if (rect != null) {
                        left1 = rect.left;
                      }
                      let c0 = left1;
                      if (left1 == null) {
                        c0 = 0;
                      }
                      const rect1 = { left: tmp17(left, c0), right: tmp17(right, c1), top: tmp17(top, c2), bottom: tmp17(bottom, c3) };
                      right = undefined;
                      if (current != null) {
                        right = current.right;
                      }
                      let right1;
                      if (rect != null) {
                        right1 = rect.right;
                      }
                      c1 = right1;
                      if (right1 == null) {
                        c1 = 0;
                      }
                      top = undefined;
                      if (current != null) {
                        top = current.top;
                      }
                      let top1;
                      if (rect != null) {
                        top1 = rect.top;
                      }
                      c2 = top1;
                      if (top1 == null) {
                        c2 = 0;
                      }
                      bottom = undefined;
                      if (current != null) {
                        bottom = current.bottom;
                      }
                      let bottom1;
                      if (rect != null) {
                        bottom1 = rect.bottom;
                      }
                      c3 = bottom1;
                      if (bottom1 == null) {
                        c3 = 0;
                      }
                      const obj4 = { iFrameUri, iFrameAllowAttributes, iFrameSandboxAttributes, referrerPolicy, insets: rect1, messageForDisallowedNavigationError: tmp36 };
                      tmp36 = undefined;
                      const tmp30 = getOrCreateIframeId(tmp42[23]);
                      if (!closure_2_19) {
                        tmp36 = safeAreasConfig;
                      }
                      c6 = 1;
                      c7 = 1;
                      const obj5 = { value: tmp30(obj4), done: false };
                      return obj5;
                    }
                  } else if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    v0 = value;
                    if (null != v0) {
                      closure_1_20(v0);
                    } else {
                      onLoadError();
                    }
                    c7 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp37) {
                  c7 = 3;
                  throw tmp37;
                }
              }
            });
            const tmp = loadHtml();
          }
          cResult[16] = tmp33;
          cResult[17] = tmp35;
          cResult[18] = combined;
          cResult[19] = onLoadError;
          cResult[20] = referrerPolicy;
          cResult[21] = tmp17;
          cResult[22] = we;
          tmp42 = we;
        }
      }
    }
    let obj7 = { onIframeMount, onIframeUnmount, isNewIframe: tmp18, isIframeRetiring: tmp19 };
    cResult[7] = onIframeMount;
    cResult[8] = onIframeUnmount;
    cResult[9] = tmp18;
    cResult[10] = null == webViewKey;
    cResult[11] = obj7;
    tmp20 = obj7;
  }
  class Z {
    constructor() {
      let v4Result;
      if (null != webViewKey) {
        v4Result = getOrCreateIframeId();
      } else {
        const obj = v1;
        v4Result = obj.v4();
      }
      return v4Result;
    }
  }
  cResult[2] = getOrCreateIframeId;
  cResult[3] = webViewKey;
  cResult[4] = Z;
  tmp10 = Z;
}) : ((hasInvalidUrlError) => {
  let activityUrl;
  let allowPopups;
  let c20;
  let c29;
  let ignoreSilentHardwareSwitch;
  let items12;
  let obj6;
  let obj7;
  let onActivityCrash;
  let onIframeMount;
  let onIframeUnmount;
  let queryParams;
  let releaseIframeId;
  let require;
  let str;
  let tmp13;
  let tmp35;
  let tmp50;
  let tmp53;
  let tmp56;
  let tmp61;
  ({ hasIframeId: require, getOrCreateIframeId: importDefault, releaseIframeId } = hasInvalidUrlError);
  hasInvalidUrlError = hasInvalidUrlError.hasInvalidUrlError;
  const setHasInvalidUrlError = hasInvalidUrlError.setHasInvalidUrlError;
  const hadInvalidUrlError = hasInvalidUrlError.hadInvalidUrlError;
  let deepLinkQueryParams = hasInvalidUrlError.deepLinkQueryParams;
  ({ onIframeMount, onIframeUnmount } = hasInvalidUrlError);
  if (deepLinkQueryParams === undefined) {
    deepLinkQueryParams = {};
  }
  applicationId = hasInvalidUrlError.applicationId;
  ({ queryParams, onActivityCrash } = hasInvalidUrlError);
  const onLoadError = hasInvalidUrlError.onLoadError;
  const referrerPolicy = hasInvalidUrlError.referrerPolicy;
  const isPipOrGridMode = hasInvalidUrlError.isPipOrGridMode;
  const webViewKey = hasInvalidUrlError.webViewKey;
  ({ ignoreSilentHardwareSwitch, activityUrl, allowPopups } = hasInvalidUrlError);
  if (ignoreSilentHardwareSwitch === undefined) {
    ignoreSilentHardwareSwitch = true;
  }
  const safeAreasConfig = hasInvalidUrlError.safeAreasConfig;
  let flag = hasInvalidUrlError.allowMotionSensors;
  if (flag === undefined) {
    flag = false;
  }
  const channelId = hasInvalidUrlError.channelId;
  const guildId = hasInvalidUrlError.guildId;
  const activitySessionId = hasInvalidUrlError.activitySessionId;
  let url;
  c20 = undefined;
  let rect;
  closure_22 = undefined;
  let closure_23;
  let combined;
  let closure_25;
  let stateFromStores;
  let combined1;
  let closure_28;
  c29 = undefined;
  let first2;
  let closure_31;
  let closure_32;
  let ref;
  let callback4;
  let obj2 = onLoadError;
  let tmp2 = require;
  let tmp3 = hasInvalidUrlError;
  let tmp = url();
  const context = onLoadError.useContext(require("WebViewContext").WebViewContext);
  let tmp5 = onActivityCrash;
  const first = onActivityCrash(onLoadError.useState(() => _require()), 1)[0];
  const first1 = onActivityCrash(onLoadError.useState(() => {
    let v4Result;
    if (null != webViewKey) {
      v4Result = importDefault();
    } else {
      const obj = v1;
      v4Result = obj.v4();
    }
    return v4Result;
  }), 1)[0];
  let tmp8 = onActivityCrash(onLoadError.useState(null), 2);
  url = tmp8[0];
  logger = tmp8[1];
  let items = [webViewKey];
  const memo = onLoadError.useMemo(() => {
    let webViewProxy;
    if (null != webViewKey) {
      const obj = WebView2;
      webViewProxy = obj.getWebViewProxy(tmp);
    }
    return webViewProxy;
  }, items);
  [str, c20] = onActivityCrash(onLoadError.useState(null), 2);
  let obj = { onIframeMount, onIframeUnmount, isNewIframe: tmp13, isIframeRetiring: null == webViewKey };
  tmp13 = !first;
  const tmp10 = onActivityCrash(onLoadError.useState(null), 2);
  const tmp12 = require("useIframeLifecycle");
  if (first) {
    tmp13 = null == webViewKey;
  }
  tmp12(first1, obj);
  rect = tmp11(tmp3[19])();
  let obj4 = releaseIframeId(tmp3[20]);
  let obj3 = { frame_id: first1, platform: webViewKey.MOBILE, mobile_app_version: constants.Version };
  constants = obj4.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  const tmp18 = require("getIFrameAllowAttributes")({ allowMotionSensors: flag });
  closure_22 = tmp18;
  const tmp19 = require("getIFrameSandboxAttributes")({ allowPopups });
  closure_23 = tmp19;
  const uRLSearchParams = new URLSearchParams(obj3);
  combined = "" + activityUrl + "?" + uRLSearchParams;
  closure_25 = obj2.useRef(safeAreasConfig);
  const items1 = [combined, tmp18, tmp19, onLoadError, referrerPolicy];
  const effect = obj2.useEffect(() => {
    function loadHtml() {
      return obj(...arguments);
    }
    let obj = function _loadHtml2() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let bottom;
        let right;
        let tmp36;
        let top;
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let closure_0;
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_5 = tmp2;
                closure_4 = tmp;
                closure_0 = undefined;
                const obj7 = closure_2_0(hasInvalidUrlError[19]);
                rect = obj7.getStableSafeAreaInsets();
                const current = ref.current;
                let left;
                const tmp42 = hasInvalidUrlError;
                if (current != null) {
                  left = current.left;
                }
                let left1;
                if (rect != null) {
                  left1 = rect.left;
                }
                let c0 = left1;
                if (left1 == null) {
                  c0 = 0;
                }
                const rect1 = { left: closure_2_20(left, c0), right: closure_2_20(right, c1), top: closure_2_20(top, c2), bottom: closure_2_20(bottom, c3) };
                right = undefined;
                if (current != null) {
                  right = current.right;
                }
                let right1;
                if (rect != null) {
                  right1 = rect.right;
                }
                c1 = right1;
                if (right1 == null) {
                  c1 = 0;
                }
                top = undefined;
                if (current != null) {
                  top = current.top;
                }
                let top1;
                if (rect != null) {
                  top1 = rect.top;
                }
                c2 = top1;
                if (top1 == null) {
                  c2 = 0;
                }
                bottom = undefined;
                if (current != null) {
                  bottom = current.bottom;
                }
                let bottom1;
                if (rect != null) {
                  bottom1 = rect.bottom;
                }
                c3 = bottom1;
                if (bottom1 == null) {
                  c3 = 0;
                }
                const obj4 = { iFrameUri, iFrameAllowAttributes, iFrameSandboxAttributes, referrerPolicy, insets: rect1, messageForDisallowedNavigationError: tmp36 };
                tmp36 = undefined;
                const tmp30 = closure_2_1(tmp42[23]);
                if (!memo) {
                  tmp36 = safeAreasConfig;
                }
                c6 = 1;
                c7 = 1;
                const obj5 = { value: tmp30(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              if (null != closure_0) {
                closure_1_20(closure_0);
              } else {
                closure_1_8();
              }
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp37) {
            c7 = 3;
            throw tmp37;
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !loadHtml();
  }, items1);
  const items2 = [applicationId];
  const items3 = [applicationId];
  const callback = obj2.useCallback((nativeEvent) => {
    logger.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items2);
  const items4 = [applicationId, channelId, guildId, activitySessionId, first1, releaseIframeId, memo, onActivityCrash];
  const callback1 = obj2.useCallback((nativeEvent) => {
    logger.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items3);
  const callback2 = obj2.useCallback(() => {
    logger.warn("activity WebView content process terminated for appId " + applicationId);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
    obj.track(guildId.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const obj3 = { id: first1 };
    ComponentDispatch.dispatch(map1.IFRAME_UNMOUNT, obj3);
    releaseIframeId();
    const obj4 = memo;
    if (null != memo) {
      obj4.releaseWebView();
    }
    onActivityCrash();
  }, items4);
  const items5 = [isPipOrGridMode];
  const tmp2Result = tmp2(tmp3[26]);
  stateFromStores = tmp2Result.useStateFromStores(items5, () => isPipOrGridMode.getUseActivityUrlOverride());
  const items6 = [combined, stateFromStores, setHasInvalidUrlError];
  const effect1 = obj2.useEffect(function() {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(combined);
      logger(uRL);
    } catch (tmp7) {
      const tmp8 = stateFromStores;
      if (tmp8) {
        setHasInvalidUrlError(true);
      } else {
        throw tmp7;
      }
    }
  }, items6);
  const items7 = [hadInvalidUrlError, hasInvalidUrlError];
  const effect2 = obj2.useEffect(() => {
    let intl;
    let intl2;
    let intl3;
    const tmp = !hadInvalidUrlError && hasInvalidUrlError;
    if (tmp) {
      const obj = { title: intl.string(intl4.t.PtobXW), body: intl2.string(intl4.t["55iAUT"]), confirmText: intl3.string(intl4.t.BddRzS) };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = intl4.intl;
      intl2 = intl4.intl;
      intl3 = intl4.intl;
      show(obj);
    }
  }, items7);
  combined1 = null;
  let tmp29 = null;
  if (null != url) {
    let tmp30 = memo;
    if (tmp30) {
      let _HermesInternal2 = HermesInternal;
      combined1 = "file://" + str;
    } else {
      let _HermesInternal = HermesInternal;
      const tmp31 = first1;
      combined1 = "" + url.origin + "/" + first1 + "/activity.html";
    }
    tmp29 = combined1;
  }
  closure_28 = memo;
  [tmp35, c29] = tmp5(obj2.useState(false), 2);
  tmp5(obj2.useState(false), 2);
  const tmp5Result2 = tmp5(obj2.useState([]), 2);
  first2 = tmp5Result2[0];
  closure_31 = tmp5Result2[1];
  const items8 = [applicationId, memo];
  const effect3 = obj2.useEffect(() => {
    function fetchAndParseCSP() {
      return obj(...arguments);
    }
    const tmp = closure_28;
    if (tmp) {
      function parseCsp(arg0, str) {
        const match = str.match(arg0);
        if (null !== match) {
          if (match.length >= 2) {
            str = match[1];
            const parts = str.split(" ");
            const found = parts.filter((item) => !closure_1_0.includes(item));
          }
          return [];
        }
      }
      let obj = function _fetchAndParseCSP2() {
        obj = _asyncToGenerator(async (arg0, value) => {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp5 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let items;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let closure_3 = tmp;
                  let closure_2 = tmp2;
                  closure_0 = undefined;
                  content_security_policy = undefined;
                  items = undefined;
                  if (null != closure_1_6) {
                    const obj2 = closure_2_0(hasInvalidUrlError[29]);
                    const nonTestModeUrlForApplication = obj2.getNonTestModeUrlForApplication(tmp32);
                    closure_0 = nonTestModeUrlForApplication;
                    const tmp7 = closure_2_0;
                    const tmp8 = hasInvalidUrlError;
                    if (nonTestModeUrlForApplication == null) {
                      const _HermesInternal = HermesInternal;
                      let str = ".discordsays.com";
                      closure_0 = "https://" + tmp32 + ".discordsays.com";
                    }
                    const HTTP = tmp7(tmp8[30]).HTTP;
                    const obj5 = { url: "" + closure_0 + "/.discord/csp", rejectWithError: false };
                    const _HermesInternal2 = HermesInternal;
                    const get = HTTP.get;
                    c4 = 1;
                    c5 = 1;
                    const obj6 = { value: get(obj5), done: false };
                    return obj6;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                content_security_policy = value.headers["content-security-policy"];
                items = ["about:blank", "file://*", closure_0];
                let closure_1 = 3;
                closure_1 = HermesBuiltin.arraySpread(items, closure_131_1(/frame-src (.*?);/, content_security_policy), closure_1);
                closure_1 = HermesBuiltin.arraySpread(items, closure_131_1(/child-src (.*?);/, content_security_policy), closure_1);
                closure_1_31(items.map((item) => {
                  const str = closure_1_1(closure_1_3[31])(item);
                  return "^" + str.replace(/\\\*/g, ".*");
                }));
                closure_1_29(true);
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp13) {
              c5 = 3;
              throw tmp13;
            }
          }
        });
        return obj(...arguments);
      };
      let closure_0 = ["'self'"];
      const tmp2 = fetchAndParseCSP();
    }
  }, items8);
  const items9 = [tmp29, first2];
  let tmp40 = null != tmp29;
  const callback3 = obj2.useCallback(function(mainDocumentURL) {
    mainDocumentURL = mainDocumentURL.mainDocumentURL;
    if (null != combined1) {
      if (null != mainDocumentURL) {
        if (mainDocumentURL !== combined1) {
          Linking.openURL(mainDocumentURL.url);
          return false;
        }
      }
    }
    const iter = first2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let _RegExp = RegExp;
      let self = this;
      let self2 = this;
      let regExp = new RegExp(nextResult);
      if (regExp.test(mainDocumentURL.url)) {
        iter.return();
        let flag = true;
        return true;
      }
    }
    const toURLSafe = URLUtilsDefault.toURLSafe;
    URLUtilsDefault;
    let str = DeveloperActivityShelfStore.getActivityUrlOverride();
    if (str == null) {
      str = "";
    }
    const toURLSafeResult = toURLSafe(str);
    const tmp6Result = URLUtilsDefault;
    const toURLSafeResult1 = tmp6Result.toURLSafe(mainDocumentURL.url);
    return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
  }, items9);
  if (tmp40) {
    tmp40 = null != url;
  }
  if (tmp40) {
    tmp40 = null != str;
  }
  closure_32 = tmp40;
  ref = obj2.useRef(null);
  callback4 = obj2.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
    }
  }, []);
  const items10 = [webViewKey, , , ];
  let origin;
  const useCallback = obj2.useCallback;
  if (url != null) {
    origin = url.origin;
  }
  items10[1] = origin;
  items10[2] = first1;
  items10[3] = callback4;
  const items11 = [rect, isPipOrGridMode, tmp40, memo, callback4, safeAreasConfig];
  const callback5 = useCallback((nativeEvent) => {
    if (null == webViewKey) {
      let origin;
      const _JSON = JSON;
      const parsed = JSON.parse(nativeEvent.nativeEvent.data);
      if (url != null) {
        origin = url.origin;
      }
      let tmp = typeof parsed === "object";
      if (typeof parsed === "object") {
        tmp = null != origin;
      }
      if (tmp) {
        const obj2 = { type: TransportTypes.POST_MESSAGE, origin, iframeId: first1 };
        const obj = WebViewPostMessageTransportDefault;
        obj.handleMessage(parsed, obj2, callback4);
      }
    }
  }, items10);
  const effect4 = obj2.useEffect(() => {
    function tryInjectJavaScript() {
      return obj(...arguments);
    }
    const tmp = closure_32;
    if (tmp) {
      const tmp3 = null;
      if (null != memo) {
        let obj = function _tryInjectJavaScript2() {
          obj = _asyncToGenerator(async (arg0, value) => {
            let bottom;
            let obj5;
            let right;
            let top;
            if (c9 === 2) {
              c9 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              let c7;
              try {
                let obj4;
                let injectJavaScriptResult;
                c9 = 2;
                if (0 === c8) {
                  if (arg0 === 1) {
                    c9 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c9 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_5 = tmp;
                    obj4 = undefined;
                    const obj8 = closure_1_19;
                    if (null != closure_1_19) {
                      const tmp15 = closure_1_10;
                      if (tmp15) {
                        rect = { top: 0, bottom: 0, left: 0, right: 0 };
                      } else {
                        rect = closure_1_21;
                      }
                      const rect2 = closure_1_12;
                      let left;
                      if (closure_1_12 != null) {
                        left = rect2.left;
                      }
                      let left1;
                      if (rect != null) {
                        left1 = rect.left;
                      }
                      let c0 = left1;
                      if (left1 == null) {
                        c0 = 0;
                      }
                      const rect1 = { left: closure_2_20(left, c0), right: closure_2_20(right, c1), top: closure_2_20(top, c2), bottom: closure_2_20(bottom, c3) };
                      right = undefined;
                      if (rect2 != null) {
                        right = rect2.right;
                      }
                      let right1;
                      if (rect != null) {
                        right1 = rect.right;
                      }
                      c1 = right1;
                      if (right1 == null) {
                        c1 = 0;
                      }
                      top = undefined;
                      if (rect2 != null) {
                        top = rect2.top;
                      }
                      let top1;
                      if (rect != null) {
                        top1 = rect.top;
                      }
                      c2 = top1;
                      if (top1 == null) {
                        c2 = 0;
                      }
                      bottom = undefined;
                      if (rect2 != null) {
                        bottom = rect2.bottom;
                      }
                      let bottom1;
                      if (rect != null) {
                        bottom1 = rect.bottom;
                      }
                      c3 = bottom1;
                      if (bottom1 == null) {
                        c3 = 0;
                      }
                      obj4 = { type: "safeAreaUpdateEvent", data: obj5 };
                      obj5 = { insets: rect1 };
                      c7 = 1;
                      injectJavaScriptResult = obj8.injectJavaScript(closure_2_1(hasInvalidUrlError[33])(obj4));
                      c8 = 2;
                      c9 = 1;
                      const obj6 = { value: injectJavaScriptResult, done: false };
                      return obj6;
                    }
                  }
                } else if (1 === tmp4) {
                  c7 = 0;
                  if (null != ref.current) {
                    injectJavaScriptResult = closure_1_34;
                    closure_1_34(closure_2_1(hasInvalidUrlError[33])(obj4));
                  }
                } else if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 0;
                  c9 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  c7 = 0;
                }
                c9 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp31) {
                let closure_6 = tmp31;
                if (0 === c7) {
                  c9 = 3;
                  throw tmp31;
                } else {
                  c8 = 1;
                }
              }
            }
          });
          return obj(...arguments);
        };
        const tmp4 = tryInjectJavaScript();
      }
    }
  }, items11);
  if (null != tmp29) {
    if (null != url) {
      let injectedJavascriptForIOS;
      let left;
      if (safeAreasConfig != null) {
        left = safeAreasConfig.left;
      }
      let num;
      if (rect != null) {
        num = rect.left;
      }
      if (num == null) {
        num = 0;
      }
      let tmp47 = num;
      if (null != left) {
        let num3 = 0;
        if (!left.disable) {
          let bound;
          if (null != left.override) {
            const _Math2 = Math;
            bound = Math.max(0, left.override);
          } else {
            bound = num;
            if (null != left.offset) {
              const _Math = Math;
              bound = Math.max(0, num + left.offset);
            }
          }
          num3 = bound;
        }
        tmp47 = num3;
      }
      let rect1 = { left: tmp47, right: tmp50, top: tmp53, bottom: tmp56 };
      let right;
      if (safeAreasConfig != null) {
        right = safeAreasConfig.right;
      }
      let num4;
      if (rect != null) {
        num4 = rect.right;
      }
      if (num4 == null) {
        num4 = 0;
      }
      tmp50 = num4;
      if (null != right) {
        let num6 = 0;
        if (!right.disable) {
          let bound1;
          if (null != right.override) {
            const _Math4 = Math;
            bound1 = Math.max(0, right.override);
          } else {
            bound1 = num4;
            if (null != right.offset) {
              const _Math3 = Math;
              bound1 = Math.max(0, num4 + right.offset);
            }
          }
          num6 = bound1;
        }
        tmp50 = num6;
      }
      let top;
      if (safeAreasConfig != null) {
        top = safeAreasConfig.top;
      }
      let num7;
      if (rect != null) {
        num7 = rect.top;
      }
      if (num7 == null) {
        num7 = 0;
      }
      tmp53 = num7;
      if (null != top) {
        let num9 = 0;
        if (!top.disable) {
          let bound2;
          if (null != top.override) {
            const _Math6 = Math;
            bound2 = Math.max(0, top.override);
          } else {
            bound2 = num7;
            if (null != top.offset) {
              const _Math5 = Math;
              bound2 = Math.max(0, num7 + top.offset);
            }
          }
          num9 = bound2;
        }
        tmp53 = num9;
      }
      let bottom;
      if (safeAreasConfig != null) {
        bottom = safeAreasConfig.bottom;
      }
      let num10;
      if (rect != null) {
        num10 = rect.bottom;
      }
      if (num10 == null) {
        num10 = 0;
      }
      tmp56 = num10;
      if (null != bottom) {
        let num12 = 0;
        if (!bottom.disable) {
          let bound3;
          if (null != bottom.override) {
            const _Math8 = Math;
            bound3 = Math.max(0, bottom.override);
          } else {
            bound3 = num10;
            if (null != bottom.offset) {
              const _Math7 = Math;
              bound3 = Math.max(0, num10 + bottom.offset);
            }
          }
          num12 = bound3;
        }
        tmp56 = num12;
      }
      if (memo) {
        const tmp2Result2 = tmp2(tmp3[23]);
        injectedJavascriptForIOS = tmp2Result2.createInjectedJavascriptForIOS(rect1);
      }
      let tmp60Result = null;
      if (null != str) {
        let host;
        let obj5 = { style: tmp.webView, ref, source: obj6, androidAssetLoaderConfig: obj7, originWhitelist: ["*"], overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: callback, onContentProcessDidTerminate: callback2, onRenderProcessGone: callback1, webViewKey, temporaryParentNodeTag: context, messagingWithWebViewKeyEnabled: null != webViewKey, onMessage: callback5, allowFileAccess: tmp33, injectedJavaScript: injectedJavascriptForIOS, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: tmp61, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
        obj6 = { uri: tmp29 };
        const WebView = tmp2(tmp3[17]).WebView;
        const tmp60 = first1;
        if ("" === url.port) {
          host = url.host;
        } else {
          const _HermesInternal3 = HermesInternal;
          host = "" + url.hostname + ":" + url.port;
        }
        obj7 = { domain: host, httpAllowed: "http:" === url.protocol, pathHandlers: items12 };
        let obj8 = { type: "internal", path: "/" + first1 + "/", directory: str.substring(0, str.lastIndexOf("/")) };
        const _HermesInternal4 = HermesInternal;
        items12 = [obj8];
        tmp61 = undefined;
        if (memo) {
          tmp61 = callback3;
        }
        tmp60Result = tmp60(WebView, obj5);
      }
      return tmp60Result;
    }
  }
  return null;
});
let closure_21 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasInvalidUrlErrorState() {
  let first;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(3);
  [first, tmp4] = react.useState(false);
  const tmp5 = usePreviousDefault(first);
  if (cResult[0] === tmp5) {
    let tmp6;
    if (cResult[1] === first) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  const obj2 = { hasInvalidUrlError: first, setHasInvalidUrlError: tmp4, hadInvalidUrlError: tmp5 };
  cResult[0] = tmp5;
  cResult[1] = first;
  cResult[2] = obj2;
  tmp6 = obj2;
}) : (function useHasInvalidUrlErrorState() {
  const tmp = _slicedToArray(react.useState(false), 2);
  const first = tmp[0];
  const obj = { hasInvalidUrlError: first, setHasInvalidUrlError: tmp[1], hadInvalidUrlError: usePreviousDefault(first) };
  return obj;
});
let closure_22 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmbeddedActivityWebView(channelId) {
  let _require;
  let closure_1;
  let hadInvalidUrlError;
  let hasInvalidUrlError;
  let setHasInvalidUrlError;
  let tmp10;
  let tmp2;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(30);
  if (cResult[0] !== channelId) {
    channelId = channelId.channelId;
    importDefault = channelId;
    const currentEmbeddedActivity = channelId.currentEmbeddedActivity;
    importAll = currentEmbeddedActivity;
    applicationId = channelId.applicationId;
    _require = applicationId;
    const tmp8 = _objectWithoutProperties(channelId, hadInvalidUrlError);
    cResult[0] = channelId;
    cResult[1] = applicationId;
    cResult[2] = channelId;
    cResult[3] = currentEmbeddedActivity;
    cResult[4] = tmp8;
    tmp5 = tmp8;
    tmp2 = applicationId;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    importAll = cResult[3];
    tmp5 = cResult[4];
  }
  const tmp9 = closure_22();
  hasInvalidUrlError = tmp9.hasInvalidUrlError;
  ({ setHasInvalidUrlError, hadInvalidUrlError } = tmp9);
  if (cResult[5] !== tmp4) {
    let obj2 = {};
    if (null != tmp4) {
      if (null != tmp4.customId) {
        obj2.custom_id = tmp4.customId;
      }
      if (null != tmp4.referrerId) {
        obj2.referrer_id = tmp4.referrerId;
      }
    }
    cResult[5] = tmp4;
    cResult[6] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] === tmp2) {
    if (cResult[8] === tmp3) {
      let _location;
      const tmp12 = cResult[9];
      if (tmp4 != null) {
        _location = tmp4.location;
      }
      if (tmp12 === _location) {
        if (cResult[10] === hadInvalidUrlError) {
          let tmp15;
          if (cResult[11] === hasInvalidUrlError) {
            tmp15 = cResult[12];
          }
          if (cResult[13] === tmp2) {
            if (cResult[14] === tmp3) {
              if (cResult[15] === tmp4) {
                if (cResult[16] === hadInvalidUrlError) {
                  let tmp16;
                  if (cResult[17] === hasInvalidUrlError) {
                    tmp16 = cResult[18];
                  }
                  const effect = react.useEffect(tmp15, tmp16);
                  const _Symbol = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    class S {
                      constructor() {
                        const obj = closure_1(hasInvalidUrlError[37]);
                        return obj.hasIframeId();
                      }
                    }
                    const fn = function b() {
                      const obj = closure_1(hasInvalidUrlError[37]);
                      return obj.getOrCreateIframeId();
                    };
                    class E {
                      constructor() {
                        const obj = closure_1(hasInvalidUrlError[37]);
                        return obj.releaseIframeId();
                      }
                    }
                    cResult[19] = S;
                    cResult[20] = fn;
                    cResult[21] = E;
                  } else {
                    class S {
                      constructor() {
                        const obj = closure_1(hasInvalidUrlError[37]);
                        return obj.hasIframeId();
                      }
                    }
                    class E {
                      constructor() {
                        const obj = closure_1(hasInvalidUrlError[37]);
                        return obj.releaseIframeId();
                      }
                    }
                  }
                  if (cResult[22] === tmp2) {
                    class S {
                      constructor() {
                        const obj = closure_1(hasInvalidUrlError[37]);
                        return obj.hasIframeId();
                      }
                    }
                  }
                  const merged = Object.assign(tmp5);
                  class I {
                    constructor() {
                      const tmp = !hadInvalidUrlError && hasInvalidUrlError;
                      if (tmp) {
                        if (null != closure_1) {
                          const obj = ChannelRTCActionCreatorsDefault;
                          const participant = obj.selectParticipant(tmp2, null);
                        }
                        _location = undefined;
                        const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
                        EmbeddedActivitiesNativeManagerDefault;
                        if (_location != null) {
                          _location = _location.location;
                        }
                        const obj2 = { location: _location, applicationId, showFeedback: false };
                        leaveActivity(obj2);
                      }
                    }
                  }
                  cResult[22] = tmp2;
                  cResult[23] = tmp3;
                  cResult[24] = tmp10;
                  cResult[25] = hadInvalidUrlError;
                  cResult[26] = hasInvalidUrlError;
                  cResult[27] = tmp5;
                  cResult[28] = setHasInvalidUrlError;
                  cResult[29] = tmp30;
                }
              }
            }
          }
          tmp17[0] = hasInvalidUrlError;
          tmp17[1] = hadInvalidUrlError;
          tmp17[2] = tmp3;
          tmp17[3] = tmp2;
          tmp17[4] = tmp4;
          cResult[13] = tmp2;
          cResult[14] = tmp3;
          cResult[15] = tmp4;
          cResult[16] = hadInvalidUrlError;
          cResult[17] = hasInvalidUrlError;
          cResult[18] = tmp17;
          tmp16 = tmp17;
        }
      }
    }
  }
  cResult[7] = tmp2;
  cResult[8] = tmp3;
  if (tmp4 != null) {
    class S {
      constructor() {
        const obj = closure_1(hasInvalidUrlError[37]);
        return obj.hasIframeId();
      }
    }
  }
  class I {
    constructor() {
      const tmp = !hadInvalidUrlError && hasInvalidUrlError;
      if (tmp) {
        if (null != closure_1) {
          const obj = ChannelRTCActionCreatorsDefault;
          const participant = obj.selectParticipant(tmp2, null);
        }
        _location = undefined;
        const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
        EmbeddedActivitiesNativeManagerDefault;
        if (_location != null) {
          _location = _location.location;
        }
        const obj2 = { location: _location, applicationId, showFeedback: false };
        leaveActivity(obj2);
      }
    }
  }
  cResult[9] = undefined;
  cResult[10] = hadInvalidUrlError;
  cResult[11] = hasInvalidUrlError;
  cResult[12] = I;
  tmp15 = I;
}) : (function EmbeddedActivityWebView(channelId) {
  channelId = channelId.channelId;
  const currentEmbeddedActivity = channelId.currentEmbeddedActivity;
  applicationId = channelId.applicationId;
  const merged = Object.assign(channelId, Object.assign({ channelId: 0, currentEmbeddedActivity: 0, applicationId: 0 }));
  const tmp2 = closure_22();
  const hasInvalidUrlError = tmp2.hasInvalidUrlError;
  const hadInvalidUrlError = tmp2.hadInvalidUrlError;
  let obj = {};
  const setHasInvalidUrlError = tmp2.setHasInvalidUrlError;
  if (null != currentEmbeddedActivity) {
    if (null != currentEmbeddedActivity.customId) {
      obj.custom_id = currentEmbeddedActivity.customId;
    }
    if (null != currentEmbeddedActivity.referrerId) {
      obj.referrer_id = currentEmbeddedActivity.referrerId;
    }
  }
  const items = [hasInvalidUrlError, hadInvalidUrlError, channelId, applicationId, currentEmbeddedActivity];
  const effect = react.useEffect(() => {
    const tmp = !hadInvalidUrlError && hasInvalidUrlError;
    if (tmp) {
      if (null != channelId) {
        const obj = ChannelRTCActionCreatorsDefault;
        const participant = obj.selectParticipant(tmp2, null);
      }
      let _location;
      const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
      EmbeddedActivitiesNativeManagerDefault;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId, showFeedback: false };
      leaveActivity(obj2);
    }
  }, items);
  const merged1 = Object.assign(merged);
  return <closure_21 hasIframeId={function hasIframeId() {
    const obj = currentEmbeddedActivity(hasInvalidUrlError[37]);
    return obj.hasIframeId();
  }} getOrCreateIframeId={function getOrCreateIframeId() {
    const obj = currentEmbeddedActivity(hasInvalidUrlError[37]);
    return obj.getOrCreateIframeId();
  }} releaseIframeId={function releaseIframeId() {
    const obj = currentEmbeddedActivity(hasInvalidUrlError[37]);
    return obj.releaseIframeId();
  }} hasInvalidUrlError={hasInvalidUrlError} setHasInvalidUrlError={setHasInvalidUrlError} hadInvalidUrlError={hadInvalidUrlError} deepLinkQueryParams={obj} applicationId={applicationId} channelId={channelId} />;
});
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityWebView.tsx");

export default tmp7;
export const BaseActivityWebView = tmp5;
export const useHasInvalidUrlErrorState = tmp6;
