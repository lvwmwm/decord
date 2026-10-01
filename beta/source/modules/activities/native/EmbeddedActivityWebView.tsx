// Module ID: 8922
// Function ID: 8923
// Name: EmbeddedActivityWebView
// Dependencies: [5, 32, 19, 17, 8320, 2005, 1074, 4739, 21, 4836, 3, 1364, 8923, 1255, 7746, 8924, 8925, 1363, 8927, 8928, 8929, 1241, 1110, 563, 5203, 1115, 8503, 1271, 8930, 1366, 8753, 8766, 7720, 5037, 8765, 2]
// Exports: default, useHasInvalidUrlErrorState

// Module 8922 (EmbeddedActivityWebView)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import v1 from "v1" /* 1255 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import Constants2 from "Constants" /* 4739 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import usePreviousDefault from "usePrevious" /* 7720 */;
import WebView2 from "WebView" /* 7746 */;
import getPostMessageJavaScriptDefault from "getPostMessageJavaScript" /* 8753 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8765 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 8766 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8320 */;
import Constants_mod from "Constants" /* 2005 */;
import Constants_mod2 from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, c3, c4, c5, c6, c8, constants, content_security_policy;

let c10;
let c9;
let closure_12;
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
class BaseActivityWebView {
  constructor(hasInvalidUrlError) {
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
    const applicationId = hasInvalidUrlError.applicationId;
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
    c20 = undefined;
    let rect;
    let closure_22;
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
    let obj2 = applicationId;
    let tmp2 = require;
    let tmp3 = hasInvalidUrlError;
    let tmp = activitySessionId();
    const context = applicationId.useContext(require("WebViewContext").WebViewContext);
    let tmp5 = hadInvalidUrlError;
    const first = hadInvalidUrlError(applicationId.useState(() => require()), 1)[0];
    const first1 = hadInvalidUrlError(applicationId.useState(() => {
      let v4Result;
      if (null != webViewKey) {
        v4Result = importDefault();
      } else {
        const obj = v1;
        v4Result = obj.v4();
      }
      return v4Result;
    }), 1)[0];
    let tmp8 = hadInvalidUrlError(applicationId.useState(null), 2);
    const url = tmp8[0];
    let closure_18 = tmp8[1];
    let items = [webViewKey];
    const memo = applicationId.useMemo(() => {
      let webViewProxy;
      if (null != webViewKey) {
        const obj = WebView2;
        webViewProxy = obj.getWebViewProxy(tmp);
      }
      return webViewProxy;
    }, items);
    [str, c20] = hadInvalidUrlError(applicationId.useState(null), 2);
    let obj = { onIframeMount, onIframeUnmount, isNewIframe: tmp13, isIframeRetiring: null == webViewKey };
    tmp13 = !first;
    const tmp10 = hadInvalidUrlError(applicationId.useState(null), 2);
    const tmp12 = require("useIframeLifecycle");
    if (first) {
      tmp13 = null == webViewKey;
    }
    tmp12(first1, obj);
    rect = tmp11(tmp3[16])();
    let obj4 = releaseIframeId(tmp3[17]);
    let obj3 = { frame_id: first1, platform: referrerPolicy.MOBILE, mobile_app_version: constants.Version };
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
      let obj = function _loadHtml() {
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
              return { value: "HermesInternal", done: null };
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
                  let closure_4 = tmp;
                  closure_0 = undefined;
                  const obj7 = closure_2_0(hasInvalidUrlError[16]);
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
                  const rect1 = { left: closure_2_18(left, c0), right: closure_2_18(right, c1), top: closure_2_18(top, c2), bottom: closure_2_18(bottom, c3) };
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
                  const tmp30 = closure_2_1(tmp42[20]);
                  if (!url) {
                    tmp36 = isPipOrGridMode;
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
                return { value: "HermesInternal", done: null };
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
      first1.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
    }, items2);
    const items4 = [applicationId, channelId, guildId, activitySessionId, first1, releaseIframeId, memo, onActivityCrash];
    const callback1 = obj2.useCallback((nativeEvent) => {
      first1.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
    }, items3);
    const callback2 = obj2.useCallback(() => {
      first1.warn("activity WebView content process terminated for appId " + applicationId);
      const obj = AnalyticsUtilsDefault;
      const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
      obj.track(safeAreasConfig.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj3 = { id: first1 };
      ComponentDispatch.dispatch(unpackModuleId.IFRAME_UNMOUNT, obj3);
      releaseIframeId();
      const obj4 = memo;
      if (null != memo) {
        obj4.releaseWebView();
      }
      onActivityCrash();
    }, items4);
    const items5 = [onLoadError];
    const tmp2Result = tmp2(tmp3[23]);
    stateFromStores = tmp2Result.useStateFromStores(items5, () => onLoadError.getUseActivityUrlOverride());
    const items6 = [combined, stateFromStores, setHasInvalidUrlError];
    const effect1 = obj2.useEffect(function() {
      try {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const uRL = new URL(combined);
        closure_18(uRL);
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
      let tmp30 = url;
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
    closure_28 = url;
    [tmp35, c29] = tmp5(obj2.useState(false), 2);
    tmp5(obj2.useState(false), 2);
    const tmp5Result2 = tmp5(obj2.useState([]), 2);
    first2 = tmp5Result2[0];
    closure_31 = tmp5Result2[1];
    const items8 = [applicationId, url];
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
        let obj = function _fetchAndParseCSP() {
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
                return { value: "HermesInternal", done: null };
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
                      const obj2 = closure_2_0(hasInvalidUrlError[26]);
                      const nonTestModeUrlForApplication = obj2.getNonTestModeUrlForApplication(tmp32);
                      closure_0 = nonTestModeUrlForApplication;
                      const tmp7 = closure_2_0;
                      const tmp8 = hasInvalidUrlError;
                      if (nonTestModeUrlForApplication == null) {
                        const _HermesInternal = HermesInternal;
                        let str = ".discordsays.com";
                        closure_0 = "https://" + tmp32 + ".discordsays.com";
                      }
                      const HTTP = tmp7(tmp8[27]).HTTP;
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
                    const str = closure_1_1(closure_1_3[28])(item);
                    return "^" + str.replace(/\\\*/g, ".*");
                  }));
                  closure_1_29(true);
                }
                c5 = 3;
                return { value: "HermesInternal", done: null };
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
          let obj = function _tryInjectJavaScript() {
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
                  return { value: "HermesInternal", done: null };
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
                        const rect1 = { left: closure_2_18(left, c0), right: closure_2_18(right, c1), top: closure_2_18(top, c2), bottom: closure_2_18(bottom, c3) };
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
                        injectJavaScriptResult = obj8.injectJavaScript(closure_2_1(hasInvalidUrlError[30])(obj4));
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
                      closure_1_34(closure_2_1(hasInvalidUrlError[30])(obj4));
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
                  return { value: "HermesInternal", done: null };
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
        if (url) {
          const tmp2Result2 = tmp2(tmp3[20]);
          injectedJavascriptForIOS = tmp2Result2.createInjectedJavascriptForIOS(rect1);
        }
        let tmp60Result = null;
        if (null != str) {
          let host;
          let obj5 = { style: tmp.webView, ref, source: obj6, androidAssetLoaderConfig: obj7, originWhitelist: ["*"], overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: callback, onContentProcessDidTerminate: callback2, onRenderProcessGone: callback1, webViewKey, temporaryParentNodeTag: context, messagingWithWebViewKeyEnabled: null != webViewKey, onMessage: callback5, allowFileAccess: tmp33, injectedJavaScript: injectedJavascriptForIOS, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: tmp61, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
          obj6 = { uri: tmp29 };
          const WebView = tmp2(tmp3[14]).WebView;
          const tmp60 = guildId;
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
          if (url) {
            tmp61 = callback3;
          }
          tmp60Result = tmp60(WebView, obj5);
        }
        return tmp60Result;
      }
    }
    return null;
  }
}
const Linking = react_native.Linking;
let Constants = Constants_mod2;
({ ActivityPlatform: c9, DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY: c10 } = Constants);
Constants = Constants_mod2;
({ ComponentActions: unpackModuleId, AnalyticEvents: closure_12 } = Constants);
const TransportTypes = Constants2.TransportTypes;
const jsx = Fragment.jsx;
let closure_15 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let tmp4 = new LoggerDefault("EmbeddedActivityWebView");
let closure_16 = tmp4;
let closure_17 = PlatformUtils.isIOS();
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityWebView.tsx");

export default function EmbeddedActivityWebView(channelId) {
  let hasInvalidUrlError;
  let tmp4;
  channelId = channelId.channelId;
  const currentEmbeddedActivity = channelId.currentEmbeddedActivity;
  const applicationId = channelId.applicationId;
  const merged = Object.assign(channelId, Object.assign({ channelId: 0, currentEmbeddedActivity: 0, applicationId: 0 }));
  hasInvalidUrlError = undefined;
  let obj = react;
  [hasInvalidUrlError, tmp4] = react.useState(false);
  const tmp5 = currentEmbeddedActivity(hasInvalidUrlError[32])(hasInvalidUrlError);
  let closure_4 = tmp5;
  let obj2 = {};
  if (null != currentEmbeddedActivity) {
    if (null != currentEmbeddedActivity.customId) {
      obj2.custom_id = currentEmbeddedActivity.customId;
    }
    if (null != currentEmbeddedActivity.referrerId) {
      obj2.referrer_id = currentEmbeddedActivity.referrerId;
    }
  }
  const items = [hasInvalidUrlError, tmp5, channelId, applicationId, currentEmbeddedActivity];
  const effect = obj.useEffect(() => {
    const tmp = !closure_4 && first;
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
  return <BaseActivityWebView hasIframeId={function hasIframeId() {
    const obj = currentEmbeddedActivity(first[34]);
    return obj.hasIframeId();
  }} getOrCreateIframeId={function getOrCreateIframeId() {
    const obj = currentEmbeddedActivity(first[34]);
    return obj.getOrCreateIframeId();
  }} releaseIframeId={function releaseIframeId() {
    const obj = currentEmbeddedActivity(first[34]);
    return obj.releaseIframeId();
  }} hasInvalidUrlError={hasInvalidUrlError} setHasInvalidUrlError={tmp4} hadInvalidUrlError={tmp5} deepLinkQueryParams={obj2} applicationId={applicationId} channelId={channelId} />;
};
export { BaseActivityWebView };
export const useHasInvalidUrlErrorState = function useHasInvalidUrlErrorState() {
  const tmp = _slicedToArray(react.useState(false), 2);
  const first = tmp[0];
  const obj = { hasInvalidUrlError: first, setHasInvalidUrlError: tmp[1], hadInvalidUrlError: usePreviousDefault(first) };
  return obj;
};
