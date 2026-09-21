// Module ID: 9726
// Function ID: 9727
// Name: EmbeddedActivityWebView
// Dependencies: [109, 5, 32, 19, 17, 9132, 2008, 1078, 4663, 21, 4758, 3, 1368, 558, 568, 9727, 1259, 8574, 9728, 9729, 1367, 9731, 9732, 1245, 1114, 565, 5110, 1119, 9314, 1275, 9733, 1370, 9560, 9573, 8548, 4959, 9572, 2]

// Module 9726 (EmbeddedActivityWebView)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 568 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import util from "util" /* 1119 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import v1 from "v1" /* 1259 */;
import URLUtilsDefault from "URLUtils" /* 1370 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4959 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import usePreviousDefault from "usePrevious" /* 8548 */;
import WebView from "WebView" /* 8574 */;
import getPostMessageJavaScriptDefault from "getPostMessageJavaScript" /* 9560 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9572 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9573 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 9132 */;

const require = globalThis.__r;

require = fn;
function getSafeArea(arg0, arg1) {
  let override = arg0;
  let num = arg1;
  if (null != arg0) {
    if (override.disable) {
      num = 0;
    } else if (null != override.override) {
      const _Math2 = Math;
      override = override.override;
      let bound = Math.max(0, override);
    } else {
      bound = arg1;
      if (null != override.offset) {
        const _Math = Math;
        bound = Math.max(0, arg1 + override.offset);
      }
    }
  }
  return num;
}
let closure_4 = ["channelId", "currentEmbeddedActivity", "applicationId"];
const Linking = fn(17).Linking;
let Constants = fn(2008);
({ ActivityPlatform: closure_11, DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY: closure_12 } = Constants);
Constants = fn(1078);
({ ComponentActions: map1, AnalyticEvents: closure_14 } = Constants);
const TransportTypes = fn(4663).TransportTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_17 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let logger = new LoggerDefault("EmbeddedActivityWebView");
const PlatformUtils = fn(1368);
let closure_19 = PlatformUtils.isIOS();
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((hasIframeId) => {
  const cResult = hasIframeId(hasInvalidUrlError[14]).c(119);
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
  const channelId = hasIframeId.channelId;
  const guildId = hasIframeId.guildId;
  const activitySessionId = hasIframeId.activitySessionId;
  if (undefined === deepLinkQueryParams) {
    deepLinkQueryParams = {};
  }
  origin();
  const context = onLoadError.useContext(tmp(tmp2[15]).WebViewContext);
  if (cResult[0] !== hasIframeId) {
    const fn = function n() {
      return hasIframeId();
    };
    cResult[0] = hasIframeId;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const first = onActivityCrash(obj2.useState(tmp6), 1)[0];
  if (cResult[2] === getOrCreateIframeId) {
    if (cResult[3] === webViewKey) {
      let tmp9 = cResult[4];
    }
    const first1 = tmp7(obj2.useState(tmp9), 1)[0];
    const tmp7Result = tmp7(obj2.useState(null), 2);
    origin = tmp7Result[0];
    logger = tmp7Result[1];
    if (cResult[5] !== webViewKey) {
      let webViewProxy;
      if (null != webViewKey) {
        webViewProxy = tmp(tmp2[17]).getWebViewProxy(webViewKey);
        const tmpResult = tmp(tmp2[17]);
      }
      cResult[5] = webViewKey;
      cResult[6] = webViewProxy;
      let tmp13 = webViewProxy;
    } else {
      tmp13 = cResult[6];
    }
    closure_19 = tmp13;
    [r10082, tmp16] = tmp7(obj2.useState(null), 2);
    getSafeArea = tmp16;
    let tmp17 = !first;
    if (first) {
      tmp17 = null == webViewKey;
    }
    if (cResult[7] === onIframeMount) {
      if (cResult[8] === onIframeUnmount) {
        if (cResult[9] === tmp17) {
          if (cResult[10] === tmp18) {
            const tmp19 = cResult[11];
          }
          getOrCreateIframeId(tmp2[18])(first1, tmp19);
          closure_21 = getOrCreateIframeId(tmp2[19])();
          const tmp20 = getOrCreateIframeId;
          const tmp22 = getOrCreateIframeId(tmp2[19])();
          let obj3 = {};
          constants = releaseIframeId(tmp2[20]).getConstants();
          const merged = Object.assign(queryParams);
          const merged1 = Object.assign(deepLinkQueryParams);
          obj3.frame_id = first1;
          obj3.platform = webViewKey.MOBILE;
          obj3.mobile_app_version = constants.Version;
          if (cResult[12] !== allowPopups) {
            let obj4 = { allowPopups };
            const tmp33 = tmp20(tmp2[21])(obj4);
            cResult[12] = allowPopups;
            cResult[13] = tmp33;
            let tmp32 = tmp33;
          } else {
            tmp32 = cResult[13];
          }
          closure_22 = tmp32;
          const _URLSearchParams = URLSearchParams;
          const uRLSearchParams = new URLSearchParams(obj3);
          let _HermesInternal = HermesInternal;
          const combined = "" + hasIframeId.activityUrl + "?" + uRLSearchParams;
          closure_24 = obj2.useRef(safeAreasConfig);
          if (cResult[14] === tmp32) {
            if (cResult[15] === combined) {
              if (cResult[16] === onLoadError) {
                if (cResult[17] === referrerPolicy) {
                  if (cResult[18] === tmp16) {
                    let tmp41 = cResult[19];
                  }
                  if (cResult[20] === tmp32) {
                    if (cResult[21] === combined) {
                      if (cResult[22] === onLoadError) {
                        if (cResult[23] === referrerPolicy) {
                          let tmp42 = cResult[24];
                        }
                        const effect = obj2.useEffect(tmp41, tmp42);
                        if (cResult[25] !== applicationId) {
                          function be(nativeEvent) {
                            logger.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                          }
                          cResult[25] = applicationId;
                          cResult[26] = be;
                          class Pe {
                            constructor() {
                              warnResult = closure_18.warn("activity WebView content process terminated for appId " + applicationId);
                              obj = closure_1(closure_3[23]);
                              obj1 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                              trackResult = obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj1);
                              ComponentDispatch = closure_0(closure_3[24]).ComponentDispatch;
                              obj5 = { id: closure_16 };
                              dispatchResult = ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, obj5);
                              tmp4 = releaseIframeId();
                              obj4 = closure_19;
                              if (null != closure_19) {
                                releaseWebViewResult = obj4.releaseWebView();
                              }
                              tmp6 = onActivityCrash();
                              return;
                            }
                          }
                        }
                        if (cResult[27] !== applicationId) {
                          class Ue {
                            constructor(arg0) {
                              warnResult = closure_18.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(hasIframeId.nativeEvent));
                              return;
                            }
                          }
                          cResult[27] = applicationId;
                          cResult[28] = Ue;
                          class Pe {
                            constructor() {
                              warnResult = closure_18.warn("activity WebView content process terminated for appId " + applicationId);
                              obj = closure_1(closure_3[23]);
                              obj1 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                              trackResult = obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj1);
                              ComponentDispatch = closure_0(closure_3[24]).ComponentDispatch;
                              obj5 = { id: closure_16 };
                              dispatchResult = ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, obj5);
                              tmp4 = releaseIframeId();
                              obj4 = closure_19;
                              if (null != closure_19) {
                                releaseWebViewResult = obj4.releaseWebView();
                              }
                              tmp6 = onActivityCrash();
                              return;
                            }
                          }
                        } else {
                          class Ue {
                            constructor(arg0) {
                              warnResult = closure_18.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(hasIframeId.nativeEvent));
                              return;
                            }
                          }
                        }
                        if (cResult[29] === activitySessionId) {
                          class Ue {
                            constructor(arg0) {
                              warnResult = closure_18.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(hasIframeId.nativeEvent));
                              return;
                            }
                          }
                        }
                        class Pe {
                          constructor() {
                            warnResult = closure_18.warn("activity WebView content process terminated for appId " + applicationId);
                            obj = closure_1(closure_3[23]);
                            obj1 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                            trackResult = obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj1);
                            ComponentDispatch = closure_0(closure_3[24]).ComponentDispatch;
                            obj5 = { id: closure_16 };
                            dispatchResult = ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, obj5);
                            tmp4 = releaseIframeId();
                            obj4 = closure_19;
                            if (null != closure_19) {
                              releaseWebViewResult = obj4.releaseWebView();
                            }
                            tmp6 = onActivityCrash();
                            return;
                          }
                        }
                        cResult[29] = activitySessionId;
                        cResult[30] = applicationId;
                        cResult[31] = channelId;
                        cResult[32] = guildId;
                        cResult[33] = first1;
                        cResult[34] = onActivityCrash;
                        cResult[35] = releaseIframeId;
                        cResult[36] = tmp13;
                        cResult[37] = Pe;
                      }
                    }
                  }
                  let items = [combined, tmp32, , referrerPolicy];
                  cResult[20] = tmp32;
                  cResult[21] = combined;
                  cResult[22] = onLoadError;
                  cResult[23] = referrerPolicy;
                  cResult[24] = items;
                  tmp42 = items;
                }
              }
            }
          }
          class Se {
            constructor() {
              closure_0 = applicationId(function*(arg0, value) {
                if (c7 === 2) {
                  c7 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp5 === 3) {
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
                        closure_5 = tmp3;
                        closure_4 = tmp2;
                        closure_132_0 = undefined;
                        const rect = v0(hasInvalidUrlError[19]).getStableSafeAreaInsets();
                        const current = ref.current;
                        let left;
                        if (current != null) {
                          left = current.left;
                        }
                        let left1;
                        if (rect != null) {
                          left1 = rect.left;
                        }
                        c0 = left1;
                        if (left1 == null) {
                          c0 = 0;
                        }
                        const rect1 = { left: tmp16(left, c0), right: null, top: null, bottom: null };
                        let right;
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
                        rect1.right = tmp16(right, c1);
                        let top;
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
                        rect1.top = tmp16(top, c2);
                        let bottom;
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
                        rect1.bottom = tmp16(bottom, c3);
                        const obj4 = { iFrameUri, iFrameSandboxAttributes, referrerPolicy, insets: rect1, messageForDisallowedNavigationError: null };
                        let tmp36;
                        const obj7 = v0(hasInvalidUrlError[19]);
                        if (!closure_2_19) {
                          tmp36 = safeAreasConfig;
                        }
                        obj4.messageForDisallowedNavigationError = tmp36;
                        c6 = 1;
                        c7 = 1;
                        const obj5 = { value: getOrCreateIframeId(hasInvalidUrlError[22])(obj4), done: false };
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
                      closure_132_0 = value;
                      if (null != closure_132_0) {
                        closure_1_20(closure_132_0);
                      } else {
                        onLoadError();
                      }
                      c7 = 3;
                    }
                  } catch (tmp37) {
                    c7 = tmp;
                    throw tmp37;
                  }
                }
              });
              tmp = (function loadHtml() {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })();
              return;
            }
          }
          cResult[14] = tmp32;
          cResult[15] = combined;
          cResult[16] = onLoadError;
          cResult[17] = referrerPolicy;
          cResult[18] = tmp16;
          cResult[19] = Se;
          tmp41 = Se;
          let obj5 = releaseIframeId(tmp2[20]);
        }
      }
    }
    let obj6 = { onIframeMount, onIframeUnmount, isNewIframe: tmp17, isIframeRetiring: null == webViewKey };
    cResult[7] = onIframeMount;
    cResult[8] = onIframeUnmount;
    cResult[9] = tmp17;
    cResult[10] = null == webViewKey;
    cResult[11] = obj6;
    const tmp7Result2 = tmp7(obj2.useState(null), 2);
  }
  class Y {
    constructor() {
      if (null != webViewKey) {
        tmp4 = getOrCreateIframeId;
        v4Result = getOrCreateIframeId();
      } else {
        tmp = closure_0;
        tmp2 = closure_3;
        obj = closure_0(closure_3[16]);
        v4Result = obj.v4();
      }
      return v4Result;
    }
  }
  cResult[2] = getOrCreateIframeId;
  cResult[3] = webViewKey;
  cResult[4] = Y;
  tmp9 = Y;
}) : ((hasInvalidUrlError) => {
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
  const channelId = hasInvalidUrlError.channelId;
  const guildId = hasInvalidUrlError.guildId;
  const activitySessionId = hasInvalidUrlError.activitySessionId;
  c20 = undefined;
  let rect;
  closure_22 = undefined;
  let combined;
  closure_24 = undefined;
  let stateFromStores;
  let combined1;
  closure_27 = undefined;
  c28 = undefined;
  let first2;
  closure_30 = undefined;
  closure_31 = undefined;
  let ref;
  let callback4;
  const context = onLoadError.useContext(require("WebViewContext").WebViewContext);
  const first = onActivityCrash(onLoadError.useState(() => _require()), 1)[0];
  const first1 = onActivityCrash(onLoadError.useState(() => {
    if (null != webViewKey) {
      let v4Result = importDefault();
    } else {
      v4Result = v1.v4();
    }
    return v4Result;
  }), 1)[0];
  let tmp8 = onActivityCrash(onLoadError.useState(null), 2);
  const url = tmp8[0];
  logger = tmp8[1];
  let items = [webViewKey];
  const memo = onLoadError.useMemo(() => {
    let webViewProxy;
    if (null != webViewKey) {
      webViewProxy = WebView.getWebViewProxy(tmp);
    }
    return webViewProxy;
  }, items);
  let tmp = url();
  [str, c20] = onActivityCrash(onLoadError.useState(null), 2);
  let obj = { onIframeMount, onIframeUnmount, isNewIframe: null, isIframeRetiring: null };
  let tmp13 = !first;
  const tmp10 = onActivityCrash(onLoadError.useState(null), 2);
  if (first) {
    tmp13 = null == webViewKey;
  }
  obj.isNewIframe = tmp13;
  obj.isIframeRetiring = null == webViewKey;
  require("useIframeLifecycle")(first1, obj);
  rect = tmp11(tmp3[19])();
  const tmp12 = require("useIframeLifecycle");
  let obj3 = {};
  constants = releaseIframeId(hasInvalidUrlError[20]).getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj3.frame_id = first1;
  obj3.platform = webViewKey.MOBILE;
  obj3.mobile_app_version = constants.Version;
  const tmp18 = require("getIFrameSandboxAttributes")({ allowPopups });
  closure_22 = tmp18;
  const uRLSearchParams = new URLSearchParams(obj3);
  combined = "" + activityUrl + "?" + uRLSearchParams;
  closure_24 = obj2.useRef(safeAreasConfig);
  const items1 = [combined, tmp18, onLoadError, referrerPolicy];
  const effect = obj2.useEffect(() => {
    closure_0 = async function _loadHtml2(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
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
              closure_5 = tmp3;
              closure_4 = tmp2;
              closure_132_0 = undefined;
              rect = applicationId(hasInvalidUrlError[19]).getStableSafeAreaInsets();
              const current = ref.current;
              let left;
              if (current != null) {
                left = current.left;
              }
              let left1;
              if (rect != null) {
                left1 = rect.left;
              }
              c0 = left1;
              if (left1 == null) {
                c0 = 0;
              }
              const rect1 = { left: _undefined(left, c0), right: null, top: null, bottom: null };
              let right;
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
              rect1.right = _undefined(right, c1);
              let top;
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
              rect1.top = _undefined(top, c2);
              let bottom;
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
              rect1.bottom = _undefined(bottom, c3);
              const obj4 = { iFrameUri, iFrameSandboxAttributes, referrerPolicy, insets: rect1, messageForDisallowedNavigationError: null };
              let tmp36;
              const obj7 = applicationId(hasInvalidUrlError[19]);
              if (!memo) {
                tmp36 = safeAreasConfig;
              }
              obj4.messageForDisallowedNavigationError = tmp36;
              c6 = 1;
              c7 = 1;
              const obj5 = { value: require("createWebviewHtmlFile")(obj4), done: false };
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
            closure_132_0 = value;
            if (null != closure_132_0) {
              closure_1_20(closure_132_0);
            } else {
              onLoadError();
            }
            c7 = 3;
          }
        } catch (tmp37) {
          c7 = tmp;
          throw tmp37;
        }
      }
    };
    !(function loadHtml() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
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
    AnalyticsUtilsDefault.track(constants2.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId });
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(constants.IFRAME_UNMOUNT, { id: first1 });
    releaseIframeId();
    if (null != memo) {
      memo.releaseWebView();
    }
    onActivityCrash();
  }, items4);
  let obj4 = releaseIframeId(hasInvalidUrlError[20]);
  const items5 = [isPipOrGridMode];
  stateFromStores = require("useStateFromStores").useStateFromStores(items5, () => isPipOrGridMode.getUseActivityUrlOverride());
  const items6 = [combined, stateFromStores, setHasInvalidUrlError];
  const effect1 = obj2.useEffect(() => {
    try {
      const _URL = URL;
      const uRL = new URL(combined);
      logger(uRL);
    } catch (tmp9) {
      if (stateFromStores) {
        setHasInvalidUrlError(true);
      } else {
        throw tmp9;
      }
    }
  }, items6);
  const items7 = [hadInvalidUrlError, hasInvalidUrlError];
  const effect2 = obj2.useEffect(() => {
    let tmp = !hadInvalidUrlError;
    if (!hadInvalidUrlError) {
      tmp = hasInvalidUrlError;
    }
    if (tmp) {
      const obj2 = { title: null, body: null, confirmText: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.PtobXW);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t["55iAUT"]);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t.BddRzS);
      AlertActionCreatorsDefault.show(obj2);
    }
  }, items7);
  combined1 = null;
  if (null == url) {
    closure_27 = memo;
    [tmp34, c28] = tmp5(obj2.useState(false), 2);
    const tmp5Result2 = tmp5(obj2.useState([]), 2);
    first2 = tmp5Result2[0];
    closure_30 = tmp5Result2[1];
    const items8 = [applicationId, memo];
    const effect3 = obj2.useEffect(() => {
      if (closure_27) {
        function parseCsp(arg0, str) {
          const match = str.match(arg0);
          if (null !== match) {
            if (match.length >= 2) {
              const parts = match[1].split(" ");
              const found = parts.filter((item) => !closure_1_0.includes(item));
              str = match[1];
            }
            return [];
          }
        }
        closure_2 = async function _fetchAndParseCSP2(arg0, value) {
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
                  closure_3 = tmp2;
                  closure_2 = tmp3;
                  closure_130_0 = undefined;
                  closure_130_1 = undefined;
                  closure_130_2 = undefined;
                  if (null != closure_1_6) {
                    const nonTestModeUrlForApplication = closure_2_0(hasInvalidUrlError[28]).getNonTestModeUrlForApplication(tmp33);
                    closure_0 = nonTestModeUrlForApplication;
                    if (nonTestModeUrlForApplication == null) {
                      const _HermesInternal = HermesInternal;
                      closure_0 = "https://" + tmp33 + ".discordsays.com";
                    }
                    closure_130_0 = closure_0;
                    const HTTP = closure_2_0(hasInvalidUrlError[29]).HTTP;
                    const obj5 = { url: null, rejectWithError: false };
                    const _HermesInternal2 = HermesInternal;
                    obj5.url = "" + closure_0 + "/.discord/csp";
                    c4 = 1;
                    c5 = 1;
                    const obj6 = { value: HTTP.get(obj5), done: false };
                    return obj6;
                  } else {
                    c5 = 3;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_130_1 = value.headers["content-security-policy"];
                const items = ["about:blank", "file://*", closure_130_0];
                closure_1 = 3;
                closure_1 = HermesBuiltin.arraySpread(closure_131_1(/frame-src (.*?);/, closure_130_1), closure_1);
                closure_1 = HermesBuiltin.arraySpread(closure_131_1(/child-src (.*?);/, closure_130_1), closure_1);
                closure_130_2 = items;
                closure_1_30(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[30])(item).replace(/\\\*/g, ".*")));
                closure_1_28(true);
              }
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } catch (tmp13) {
              c5 = tmp;
              throw tmp13;
            }
          }
        };
        closure_0 = ["'self'"];
        (function fetchAndParseCSP() {
          const self = this;
          const apply = closure_2.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
    }, items8);
    const items9 = [null, first2];
    let tmp39 = null != null;
    const callback3 = obj2.useCallback((mainDocumentURL) => {
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
        let tmp3 = new.target;
        let tmp4 = new.target;
        let regExp = new RegExp(nextResult);
        if (regExp.test(mainDocumentURL.url)) {
          iter.return();
          let flag = true;
          return true;
        }
      }
      let str = DeveloperActivityShelfStore.getActivityUrlOverride();
      if (str == null) {
        str = "";
      }
      const toURLSafeResult = URLUtilsDefault.toURLSafe(str);
      const toURLSafeResult1 = URLUtilsDefault.toURLSafe(mainDocumentURL.url);
      return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
    }, items9);
    if (tmp39) {
      tmp39 = null != url;
    }
    if (tmp39) {
      tmp39 = null != str;
    }
    closure_31 = tmp39;
    ref = obj2.useRef(null);
    callback4 = obj2.useCallback((arg0) => {
      const current = ref.current;
      if (current != null) {
        current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
      }
    }, []);
    const items10 = [webViewKey, , , ];
    let origin;
    if (url != null) {
      origin = url.origin;
    }
    items10[1] = origin;
    items10[2] = first1;
    items10[3] = callback4;
    const items11 = [rect, isPipOrGridMode, tmp39, memo, callback4, safeAreasConfig];
    const callback5 = obj2.useCallback((nativeEvent) => {
      if (null == webViewKey) {
        const _JSON = JSON;
        const parsed = JSON.parse(nativeEvent.nativeEvent.data);
        if (url != null) {
          const origin = url.origin;
        }
        let tmp = typeof parsed === "object";
        if (typeof parsed === "object") {
          tmp = null != origin;
        }
        if (tmp) {
          const obj2 = { type: TransportTypes.POST_MESSAGE, origin, iframeId: first1 };
          WebViewPostMessageTransportDefault.handleMessage(parsed, obj2, callback4);
        }
      }
    }, items10);
    const effect4 = obj2.useEffect(() => {
      if (closure_31) {
        if (null != memo) {
          closure_0 = async function _tryInjectJavaScript2(arg0, value) {
            if (c9 === 2) {
              c9 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp7 === 3) {
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
                    closure_5 = tmp3;
                    closure_4 = tmp5;
                    closure_132_0 = undefined;
                    if (null != memo) {
                      if (isPipOrGridMode) {
                        rect = { top: 0, bottom: 0, left: 0, right: 0 };
                      } else {
                        rect = closure_1_21;
                      }
                      const rect2 = safeAreasConfig;
                      let left;
                      if (safeAreasConfig != null) {
                        left = rect2.left;
                      }
                      let left1;
                      if (rect != null) {
                        left1 = rect.left;
                      }
                      c0 = left1;
                      if (left1 == null) {
                        c0 = 0;
                      }
                      const rect1 = { left: _undefined(left, c0), right: null, top: null, bottom: null };
                      let right;
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
                      rect1.right = _undefined(right, c1);
                      let top;
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
                      rect1.top = _undefined(top, c2);
                      let bottom;
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
                      const obj4 = { type: "safeAreaUpdateEvent", data: null };
                      const obj5 = { insets: null };
                      rect1.bottom = _undefined(bottom, c3);
                      obj5.insets = rect1;
                      obj4.data = obj5;
                      closure_132_0 = obj4;
                      c7 = 1;
                      c8 = 2;
                      c9 = 1;
                      const obj6 = { value: obj8.injectJavaScript(getPostMessageJavaScriptDefault(obj4)), done: false };
                      return obj6;
                    }
                    obj8 = memo;
                  }
                } else {
                  if (1 === tmp8) {
                    c7 = 0;
                    if (null != ref.current) {
                      callback4(getPostMessageJavaScriptDefault(closure_132_0));
                    }
                  } else if (arg0 === 1) {
                    c9 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    c7 = 0;
                  }
                  c7 = 0;
                  c9 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                c9 = 3;
              } catch (tmp35) {
                closure_6 = tmp35;
                if (tmp4 === c7) {
                  c9 = tmp2;
                  throw tmp35;
                } else {
                  c8 = tmp;
                }
              }
            }
          };
          (function tryInjectJavaScript() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
      }
    }, items11);
    if (null != null) {
      if (null != url) {
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
        let num2 = num;
        if (null != left) {
          if (left.disable) {
            num2 = 0;
          } else if (null != left.override) {
            const _Math2 = Math;
            left = left.override;
            let bound = Math.max(0, left);
          } else {
            bound = num;
            if (null != left.offset) {
              const _Math = Math;
              bound = Math.max(0, num + left.offset);
            }
          }
        }
        let rect1 = { left: num2, right: null, top: null, bottom: null };
        let right;
        if (safeAreasConfig != null) {
          right = safeAreasConfig.right;
        }
        let num5;
        if (rect != null) {
          num5 = rect.right;
        }
        if (num5 == null) {
          num5 = 0;
        }
        let num6 = num5;
        if (null != right) {
          if (right.disable) {
            num6 = 0;
          } else if (null != right.override) {
            const _Math4 = Math;
            right = right.override;
            let bound1 = Math.max(0, right);
          } else {
            bound1 = num5;
            if (null != right.offset) {
              const _Math3 = Math;
              bound1 = Math.max(0, num5 + right.offset);
            }
          }
        }
        rect1.right = num6;
        let top;
        if (safeAreasConfig != null) {
          top = safeAreasConfig.top;
        }
        let num9;
        if (rect != null) {
          num9 = rect.top;
        }
        if (num9 == null) {
          num9 = 0;
        }
        let num10 = num9;
        if (null != top) {
          if (top.disable) {
            num10 = 0;
          } else if (null != top.override) {
            const _Math6 = Math;
            top = top.override;
            let bound2 = Math.max(0, top);
          } else {
            bound2 = num9;
            if (null != top.offset) {
              const _Math5 = Math;
              bound2 = Math.max(0, num9 + top.offset);
            }
          }
        }
        rect1.top = num10;
        let bottom;
        if (safeAreasConfig != null) {
          bottom = safeAreasConfig.bottom;
        }
        let num13;
        if (rect != null) {
          num13 = rect.bottom;
        }
        if (num13 == null) {
          num13 = 0;
        }
        let num14 = num13;
        if (null != bottom) {
          if (bottom.disable) {
            num14 = 0;
          } else if (null != bottom.override) {
            const _Math8 = Math;
            bottom = bottom.override;
            let bound3 = Math.max(0, bottom);
          } else {
            bound3 = num13;
            if (null != bottom.offset) {
              const _Math7 = Math;
              bound3 = Math.max(0, num13 + bottom.offset);
            }
          }
        }
        rect1.bottom = num14;
        if (tmp32) {
          const injectedJavascriptForIOS = tmp2(tmp3[22]).createInjectedJavascriptForIOS(rect1);
          const tmp2Result2 = tmp2(tmp3[22]);
        }
        let tmp59Result = null;
        if (null != str) {
          let obj5 = { style: tmp.webView, ref, source: null, androidAssetLoaderConfig: null, originWhitelist: null, overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: null, onContentProcessDidTerminate: null, onRenderProcessGone: null, webViewKey: null, temporaryParentNodeTag: null, messagingWithWebViewKeyEnabled: null, onMessage: null, allowFileAccess: null, injectedJavaScript: null, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: null, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch: null, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
          let obj6 = { uri: null };
          obj5.source = obj6;
          if ("" === url.port) {
            let host = url.host;
          } else {
            const _HermesInternal3 = HermesInternal;
            host = "" + url.hostname + ":" + url.port;
          }
          let obj7 = { domain: host, httpAllowed: "http:" === url.protocol, pathHandlers: null };
          let obj8 = { type: "internal", path: null, directory: null };
          const _HermesInternal4 = HermesInternal;
          obj8.path = "/" + first1 + "/";
          obj8.directory = str.substring(0, str.lastIndexOf("/"));
          const items12 = [obj8];
          obj7.pathHandlers = items12;
          obj5.androidAssetLoaderConfig = obj7;
          obj5.originWhitelist = ["*"];
          obj5.onError = callback;
          obj5.onContentProcessDidTerminate = callback2;
          obj5.onRenderProcessGone = callback1;
          obj5.webViewKey = webViewKey;
          obj5.temporaryParentNodeTag = context;
          obj5.messagingWithWebViewKeyEnabled = null != webViewKey;
          obj5.onMessage = callback5;
          obj5.allowFileAccess = tmp32;
          obj5.injectedJavaScript = injectedJavascriptForIOS;
          let tmp60;
          if (tmp32) {
            tmp60 = callback3;
          }
          obj5.onShouldStartLoadWithRequest = tmp60;
          obj5.ignoreSilentHardwareSwitch = ignoreSilentHardwareSwitch;
          tmp59Result = first1(tmp2(tmp3[17]).WebView, obj5);
        }
        return tmp59Result;
      }
    }
    return null;
  } else if (memo) {
    let _HermesInternal2 = HermesInternal;
    combined1 = "file://" + str;
  } else {
    let _HermesInternal = HermesInternal;
    combined1 = "" + url.origin + "/" + first1 + "/activity.html";
  }
});
let closure_21 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasInvalidUrlErrorState() {
  const cResult = c.c(3);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const first = tmp2[0];
  const tmp4 = usePreviousDefault(first);
  if (cResult[0] === tmp4) {
    if (cResult[1] === first) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { hasInvalidUrlError: first, setHasInvalidUrlError: tmp2[1], hadInvalidUrlError: tmp4 };
  cResult[0] = tmp4;
  cResult[1] = first;
  cResult[2] = obj2;
  tmp5 = obj2;
}) : (function useHasInvalidUrlErrorState() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  return { hasInvalidUrlError: first, setHasInvalidUrlError: tmp[1], hadInvalidUrlError: usePreviousDefault(first) };
});
let closure_22 = tmp6;
ReactCompilerGating = fn(558);
let tmp4 = new LoggerDefault("EmbeddedActivityWebView");
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityWebView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EmbeddedActivityWebView(channelId) {
  const cResult = require("c").c(30);
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
    let tmp5 = tmp8;
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
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] === tmp2) {
    if (cResult[8] === tmp3) {
      let _location;
      if (tmp4 != null) {
        _location = tmp4.location;
      }
      if (cResult[9] === _location) {
        if (cResult[10] === hadInvalidUrlError) {
          if (cResult[11] === hasInvalidUrlError) {
            let tmp14 = cResult[12];
          }
          if (cResult[13] === tmp2) {
            if (cResult[14] === tmp3) {
              if (cResult[15] === tmp4) {
                if (cResult[16] === hadInvalidUrlError) {
                  if (cResult[17] === hasInvalidUrlError) {
                    let tmp15 = cResult[18];
                  }
                  const effect = noop.useEffect(tmp14, tmp15);
                  const _Symbol = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    class S {
                      constructor() {
                        obj = closure_1(hasInvalidUrlError[36]);
                        return obj.hasIframeId();
                      }
                    }
                    const fn = function y() {
                      return closure_1(hasInvalidUrlError[36]).getOrCreateIframeId();
                    };
                    class E {
                      constructor() {
                        obj = closure_1(hasInvalidUrlError[36]);
                        return obj.releaseIframeId();
                      }
                    }
                    cResult[19] = S;
                    cResult[20] = fn;
                    cResult[21] = E;
                    let tmp21 = fn;
                    const tmp20 = S;
                    const tmp22 = E;
                  } else {
                    class S {
                      constructor() {
                        obj = closure_1(hasInvalidUrlError[36]);
                        return obj.hasIframeId();
                      }
                    }
                    tmp21 = cResult[20];
                    class E {
                      constructor() {
                        obj = closure_1(hasInvalidUrlError[36]);
                        return obj.releaseIframeId();
                      }
                    }
                  }
                  if (cResult[22] === tmp2) {
                    class S {
                      constructor() {
                        obj = closure_1(hasInvalidUrlError[36]);
                        return obj.hasIframeId();
                      }
                    }
                  }
                  let obj3 = { hasIframeId: tmp20, getOrCreateIframeId: tmp21, releaseIframeId: tmp22, hasInvalidUrlError, setHasInvalidUrlError, hadInvalidUrlError, deepLinkQueryParams: tmp10, applicationId: tmp2, channelId: tmp3 };
                  const merged = Object.assign(tmp5);
                  class I {
                    constructor() {
                      tmp = !hadInvalidUrlError;
                      if (!hadInvalidUrlError) {
                        tmp = hasInvalidUrlError;
                      }
                      if (tmp) {
                        tmp3 = null;
                        if (null != closure_1) {
                          tmp4 = closure_1;
                          tmp5 = closure_3;
                          obj = closure_1(closure_3[35]);
                          participant = obj.selectParticipant(tmp2, null);
                        }
                        tmp7 = closure_1;
                        tmp8 = closure_3;
                        obj2 = closure_1(closure_3[36]);
                        _location = undefined;
                        if (closure_2 != null) {
                          _location = closure_2.location;
                        }
                        obj1 = { location: null, applicationId: null, showFeedback: false };
                        obj1.location = _location;
                        tmp10 = closure_0;
                        obj1.applicationId = closure_0;
                        leaveActivityResult = obj2.leaveActivity(obj1);
                      }
                      return;
                    }
                  }
                  cResult[22] = tmp2;
                  cResult[23] = tmp3;
                  cResult[24] = tmp10;
                  cResult[25] = hadInvalidUrlError;
                  cResult[26] = hasInvalidUrlError;
                  cResult[27] = tmp5;
                  cResult[28] = setHasInvalidUrlError;
                  cResult[29] = tmp29;
                }
              }
            }
          }
          tmp16[0] = hasInvalidUrlError;
          tmp16[1] = hadInvalidUrlError;
          tmp16[2] = tmp3;
          tmp16[3] = tmp2;
          tmp16[4] = tmp4;
          cResult[13] = tmp2;
          cResult[14] = tmp3;
          cResult[15] = tmp4;
          cResult[16] = hadInvalidUrlError;
          cResult[17] = hasInvalidUrlError;
          cResult[18] = tmp16;
          tmp15 = tmp16;
        }
      }
    }
  }
  cResult[7] = tmp2;
  cResult[8] = tmp3;
  if (tmp4 != null) {
    class S {
      constructor() {
        obj = closure_1(hasInvalidUrlError[36]);
        return obj.hasIframeId();
      }
    }
  }
  class I {
    constructor() {
      tmp = !hadInvalidUrlError;
      if (!hadInvalidUrlError) {
        tmp = hasInvalidUrlError;
      }
      if (tmp) {
        tmp3 = null;
        if (null != closure_1) {
          tmp4 = closure_1;
          tmp5 = closure_3;
          obj = closure_1(closure_3[35]);
          participant = obj.selectParticipant(tmp2, null);
        }
        tmp7 = closure_1;
        tmp8 = closure_3;
        obj2 = closure_1(closure_3[36]);
        _location = undefined;
        if (closure_2 != null) {
          _location = closure_2.location;
        }
        obj1 = { location: null, applicationId: null, showFeedback: false };
        obj1.location = _location;
        tmp10 = closure_0;
        obj1.applicationId = closure_0;
        leaveActivityResult = obj2.leaveActivity(obj1);
      }
      return;
    }
  }
  cResult[9] = undefined;
  cResult[10] = hadInvalidUrlError;
  cResult[11] = hasInvalidUrlError;
  cResult[12] = I;
  tmp14 = I;
}) : (function EmbeddedActivityWebView(channelId) {
  channelId = channelId.channelId;
  const currentEmbeddedActivity = channelId.currentEmbeddedActivity;
  applicationId = channelId.applicationId;
  const merged = Object.assign(channelId, Object.assign({ channelId: 0, currentEmbeddedActivity: 0, applicationId: 0 }));
  const tmp2 = closure_22();
  const hasInvalidUrlError = tmp2.hasInvalidUrlError;
  const hadInvalidUrlError = tmp2.hadInvalidUrlError;
  let obj = {};
  if (null != currentEmbeddedActivity) {
    if (null != currentEmbeddedActivity.customId) {
      obj.custom_id = currentEmbeddedActivity.customId;
    }
    if (null != currentEmbeddedActivity.referrerId) {
      obj.referrer_id = currentEmbeddedActivity.referrerId;
    }
  }
  const items = [hasInvalidUrlError, hadInvalidUrlError, channelId, applicationId, currentEmbeddedActivity];
  const effect = noop.useEffect(() => {
    let tmp = !hadInvalidUrlError;
    if (!hadInvalidUrlError) {
      tmp = hasInvalidUrlError;
    }
    if (tmp) {
      if (null != channelId) {
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(tmp2, null);
      }
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj3 = { location: _location, applicationId, showFeedback: false };
      EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj3);
    }
  }, items);
  const merged1 = Object.assign(merged);
  return <closure_21 hasIframeId={function hasIframeId() {
    return currentEmbeddedActivity(hasInvalidUrlError[36]).hasIframeId();
  }} getOrCreateIframeId={function getOrCreateIframeId() {
    return currentEmbeddedActivity(hasInvalidUrlError[36]).getOrCreateIframeId();
  }} releaseIframeId={function releaseIframeId() {
    return currentEmbeddedActivity(hasInvalidUrlError[36]).releaseIframeId();
  }} hasInvalidUrlError={hasInvalidUrlError} setHasInvalidUrlError={tmp2.setHasInvalidUrlError} hadInvalidUrlError={hadInvalidUrlError} deepLinkQueryParams={obj} applicationId={applicationId} channelId={channelId} />;
});
export const BaseActivityWebView = tmp5;
export const useHasInvalidUrlErrorState = tmp6;
