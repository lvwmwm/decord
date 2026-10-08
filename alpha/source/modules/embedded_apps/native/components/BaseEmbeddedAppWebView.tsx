// Module ID: 10739
// Function ID: 10740
// Name: BaseEmbeddedAppWebView
// Dependencies: [5, 32, 19, 17, 9031, 1085, 2023, 21, 5090, 3, 1381, 558, 576, 10740, 7511, 10741, 1380, 10742, 10743, 10744, 1264, 573, 5297, 1126, 10614, 1294, 10745, 1383, 10746, 5928, 2]

// Module 10739 (BaseEmbeddedAppWebView)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import URLUtilsDefault from "URLUtils" /* 1383 */;
import Constants2 from "Constants" /* 2023 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5297 */;
import usePreviousDefault from "usePrevious" /* 5928 */;
import WebView2 from "WebView" /* 7511 */;
import getPostMessageJavaScriptDefault from "getPostMessageJavaScript" /* 10746 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 9031 */;
import createStyles from "createStyles" /* 5090 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, c4, c5, c6, c7, c8, c9, closure_6, constants, content_security_policy;

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
const Linking = react_native.Linking;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_10 = Constants2.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const jsx = Fragment.jsx;
let closure_12 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let tmp2 = new LoggerDefault("BaseEmbeddedAppWebView");
let closure_13 = tmp2;
let closure_14 = PlatformUtils.isIOS();
let c15 = "discord-webview-shell";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseEmbeddedAppWebView(iframeId) {
  let allowPopups;
  let applicationId;
  let closure_16;
  let deepLinkQueryParams;
  let ignoreSilentHardwareSwitch;
  let onActivityCrash;
  let onLoadError;
  let queryParams;
  let referrerPolicy;
  let safeAreasConfig;
  let setHasInvalidUrlError;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp21;
  let tmp9;
  let tmp = iframeId;
  let tmp2 = onLoadError;
  let obj = iframeId(onLoadError[12]);
  const cResult = obj.c(106);
  iframeId = iframeId.iframeId;
  ({ deepLinkQueryParams, applicationId } = iframeId);
  ({ queryParams, onActivityCrash } = iframeId);
  onLoadError = iframeId.onLoadError;
  const onInvalidUrl = iframeId.onInvalidUrl;
  ({ allowPopups, referrerPolicy } = iframeId);
  const isPipOrGridMode = iframeId.isPipOrGridMode;
  ({ ignoreSilentHardwareSwitch, safeAreasConfig } = iframeId);
  const channelId = iframeId.channelId;
  const guildId = iframeId.guildId;
  const activitySessionId = iframeId.activitySessionId;
  const activityUrl = iframeId.activityUrl;
  if (undefined === deepLinkQueryParams) {
    deepLinkQueryParams = {};
  }
  let tmp4 = setHasInvalidUrlError();
  let obj2 = isPipOrGridMode;
  const context = isPipOrGridMode.useContext(tmp(tmp2[13]).WebViewContext);
  let tmp6 = closure_17();
  const hasInvalidUrlError = tmp6.hasInvalidUrlError;
  setHasInvalidUrlError = tmp6.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp6.hadInvalidUrlError;
  const tmp7 = referrerPolicy;
  let tmp8 = referrerPolicy(isPipOrGridMode.useState(null), 2);
  [tmp9, tmp10] = tmp8;
  if (cResult[0] !== iframeId) {
    const tmpResult = tmp(tmp2[14]);
    const webViewProxy = tmpResult.getWebViewProxy(iframeId);
    cResult[0] = iframeId;
    cResult[1] = webViewProxy;
    tmp11 = webViewProxy;
  } else {
    tmp11 = cResult[1];
  }
  let closure_15 = tmp11;
  [tmp14, tmp15] = tmp7(obj2.useState(null), 2);
  getSafeArea = tmp15;
  tmp7(obj2.useState(null), 2);
  const tmp17 = applicationId(tmp2[15])();
  closure_17 = tmp17;
  let obj4 = onActivityCrash(tmp2[16]);
  let obj3 = { frame_id: iframeId, platform: tmp(tmp2[17]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj4.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  const tmp16 = applicationId;
  if (cResult[2] !== allowPopups) {
    let obj5 = { allowPopups };
    const tmp22 = tmp16(tmp2[18])(obj5);
    cResult[2] = allowPopups;
    cResult[3] = tmp22;
    tmp21 = tmp22;
  } else {
    tmp21 = cResult[3];
  }
  let closure_18 = tmp21;
  const uRLSearchParams = new URLSearchParams(obj3);
  const combined = "" + activityUrl + "?" + uRLSearchParams;
  let closure_20 = obj2.useRef(safeAreasConfig);
  if (cResult[4] === iframeId) {
    if (cResult[5] === tmp21) {
      if (cResult[6] === combined) {
        if (cResult[7] === onLoadError) {
          if (cResult[8] === referrerPolicy) {
            let tmp25;
            if (cResult[9] === tmp15) {
              tmp25 = cResult[10];
            }
            if (cResult[11] === iframeId) {
              if (cResult[12] === tmp21) {
                if (cResult[13] === combined) {
                  if (cResult[14] === onLoadError) {
                    let tmp26;
                    if (cResult[15] === referrerPolicy) {
                      tmp26 = cResult[16];
                    }
                    const effect = obj2.useEffect(tmp25, tmp26);
                    if (cResult[17] !== applicationId) {
                      function se(nativeEvent) {
                        hadInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                      }
                      cResult[17] = applicationId;
                      cResult[18] = se;
                    }
                    if (cResult[19] !== applicationId) {
                      function ue(nativeEvent) {
                        hadInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                      }
                      cResult[19] = applicationId;
                      cResult[20] = ue;
                      let tmp29 = ue;
                    } else {
                      tmp29 = cResult[20];
                    }
                    if (cResult[21] === activitySessionId) {
                      if (cResult[22] === applicationId) {
                        if (cResult[23] === channelId) {
                          if (cResult[24] === guildId) {
                            let tmp32;
                            let tmp31;
                            if (cResult[25] === onActivityCrash) {
                              let tmp30 = cResult[26];
                            }
                            const _Symbol = Symbol;
                            let str = "react.memo_cache_sentinel";
                            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                              let items = [channelId];
                              function he() {
                                return channelId.getUseActivityUrlOverride();
                              }
                              cResult[27] = items;
                              cResult[28] = he;
                              tmp32 = he;
                              tmp31 = items;
                            } else {
                              tmp31 = cResult[27];
                              tmp32 = cResult[28];
                            }
                            const tmpResult3 = tmp(tmp2[21]);
                            const stateFromStores = tmpResult3.useStateFromStores(tmp31, tmp32);
                            if (cResult[29] === combined) {
                              if (cResult[30] === stateFromStores) {
                                if (cResult[31] === setHasInvalidUrlError) {
                                  let tmp35;
                                  if (cResult[32] === tmp10) {
                                    tmp35 = cResult[33];
                                  }
                                  if (cResult[34] === combined) {
                                    if (cResult[35] === stateFromStores) {
                                      let tmp36;
                                      if (cResult[36] === setHasInvalidUrlError) {
                                        tmp36 = cResult[37];
                                      }
                                      const effect1 = obj2.useEffect(tmp35, tmp36);
                                      if (cResult[38] === hadInvalidUrlError) {
                                        let tmp38;
                                        let tmp39;
                                        if (cResult[39] === hasInvalidUrlError) {
                                          tmp38 = cResult[40];
                                          tmp39 = cResult[41];
                                        }
                                        const effect2 = obj2.useEffect(tmp38, tmp39);
                                        if (cResult[42] === hadInvalidUrlError) {
                                          if (cResult[43] === hasInvalidUrlError) {
                                            let tmp42;
                                            let tmp43;
                                            if (cResult[44] === onInvalidUrl) {
                                              tmp42 = cResult[45];
                                              tmp43 = cResult[46];
                                            }
                                            const effect3 = obj2.useEffect(tmp42, tmp43);
                                            if (cResult[47] === iframeId) {
                                              if (cResult[48] === tmp9) {
                                                let tmp54;
                                                let tmp58;
                                                let tmp57;
                                                if (cResult[49] === tmp14) {
                                                  let combined1 = cResult[50];
                                                }
                                                let flag = false;
                                                const tmp7Result3 = tmp7(obj2.useState(false), 2);
                                                class Ee {
                                                  constructor() {
                                                    let tmp2 = null != onInvalidUrl;
                                                    const tmp = onInvalidUrl;
                                                    if (tmp2) {
                                                      tmp2 = !hadInvalidUrlError;
                                                    }
                                                    if (tmp2) {
                                                      tmp2 = hasInvalidUrlError;
                                                    }
                                                    if (tmp2) {
                                                      tmp();
                                                    }
                                                  }
                                                }
                                                const _Symbol2 = Symbol;
                                                const first = tmp7Result3[0];
                                                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                                                  const items1 = [];
                                                  cResult[51] = items1;
                                                  class Ee {
                                                    constructor() {
                                                      let tmp2 = null != onInvalidUrl;
                                                      const tmp = onInvalidUrl;
                                                      if (tmp2) {
                                                        tmp2 = !hadInvalidUrlError;
                                                      }
                                                      if (tmp2) {
                                                        tmp2 = hasInvalidUrlError;
                                                      }
                                                      if (tmp2) {
                                                        tmp();
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  tmp54 = cResult[51];
                                                }
                                                const tmp7Result4 = tmp7(obj2.useState(tmp54), 2);
                                                const first1 = tmp7Result4[0];
                                                let closure_25 = tmp7Result4[1];
                                                if (cResult[52] !== applicationId) {
                                                  function $e() {
                                                    function fetchAndParseCSP() {
                                                      return closure_0(...arguments);
                                                    }
                                                    const tmp = closure_14;
                                                    if (tmp) {
                                                      let closure_0 = ["'self'"];
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
                                                      const tmp2 = onInvalidUrl;
                                                      closure_0 = onInvalidUrl(function*(arg0, value) {
                                                        if (c5 === 2) {
                                                          c5 = 3;
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
                                                            let items;
                                                            c5 = 2;
                                                            if (0 === c4) {
                                                              if (arg0 === 1) {
                                                                c5 = 3;
                                                                throw value;
                                                              } else if (arg0 === 2) {
                                                                c5 = 3;
                                                                const obj3 = { value, done: true };
                                                                return obj3;
                                                              } else {
                                                                let closure_3 = tmp2;
                                                                let closure_2 = tmp;
                                                                closure_0 = undefined;
                                                                content_security_policy = undefined;
                                                                items = undefined;
                                                                const obj6 = closure_0(onLoadError[24]);
                                                                const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(parseCsp);
                                                                const tmp29 = closure_0;
                                                                closure_0 = nonTestModeUrlForApplication;
                                                                const tmp30 = onLoadError;
                                                                const tmp31 = parseCsp;
                                                                if (nonTestModeUrlForApplication == null) {
                                                                  const _HermesInternal = HermesInternal;
                                                                  let str = ".discordsays.com";
                                                                  closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                }
                                                                const HTTP = tmp29(tmp30[25]).HTTP;
                                                                const obj4 = { url: "" + closure_0 + "/.discord/csp", rejectWithError: false };
                                                                const _HermesInternal2 = HermesInternal;
                                                                const get = HTTP.get;
                                                                c4 = 1;
                                                                c5 = 1;
                                                                const obj5 = { value: get(obj4), done: false };
                                                                return obj5;
                                                              }
                                                            } else if (arg0 === 1) {
                                                              c5 = 3;
                                                              throw value;
                                                            } else if (arg0 === 2) {
                                                              c5 = 3;
                                                              const obj = { value, done: true };
                                                              return obj;
                                                            } else {
                                                              content_security_policy = value.headers["content-security-policy"];
                                                              items = ["about:blank", "file://*", closure_0];
                                                              let closure_1 = 3;
                                                              closure_1 = HermesBuiltin.arraySpread(items, closure_1(/frame-src (.*?);/, content_security_policy), closure_1);
                                                              closure_1 = HermesBuiltin.arraySpread(items, closure_1(/child-src (.*?);/, content_security_policy), closure_1);
                                                              closure_2_25(items.map((item) => {
                                                                const str = closure_1_1(closure_1_3[26])(item);
                                                                return "^" + str.replace(/\\\*/g, ".*");
                                                              }));
                                                              closure_2_23(true);
                                                              c5 = 3;
                                                              return { value: "IconComponent", done: null };
                                                            }
                                                          } catch (tmp10) {
                                                            c5 = 3;
                                                            throw tmp10;
                                                          }
                                                        }
                                                      });
                                                      fetchAndParseCSP();
                                                    }
                                                  }
                                                  const items2 = [applicationId, ];
                                                  class Ee {
                                                    constructor() {
                                                      let tmp2 = null != onInvalidUrl;
                                                      const tmp = onInvalidUrl;
                                                      if (tmp2) {
                                                        tmp2 = !hadInvalidUrlError;
                                                      }
                                                      if (tmp2) {
                                                        tmp2 = hasInvalidUrlError;
                                                      }
                                                      if (tmp2) {
                                                        tmp();
                                                      }
                                                    }
                                                  }
                                                  items2[1] = tmp10;
                                                  cResult[52] = applicationId;
                                                  cResult[53] = $e;
                                                  cResult[54] = items2;
                                                  tmp58 = items2;
                                                  tmp57 = $e;
                                                } else {
                                                  tmp57 = cResult[53];
                                                  tmp58 = cResult[54];
                                                }
                                                const effect4 = obj2.useEffect(tmp57, tmp58);
                                                if (cResult[55] === first1) {
                                                  let closure_26 = tmp61;
                                                  class Ee {
                                                    constructor() {
                                                      let tmp2 = null != onInvalidUrl;
                                                      const tmp = onInvalidUrl;
                                                      if (tmp2) {
                                                        tmp2 = !hadInvalidUrlError;
                                                      }
                                                      if (tmp2) {
                                                        tmp2 = hasInvalidUrlError;
                                                      }
                                                      if (tmp2) {
                                                        tmp();
                                                      }
                                                    }
                                                  }
                                                  const ref = tmp62;
                                                  const _Symbol3 = Symbol;
                                                  if (cResult[58] === Symbol.for("react.memo_cache_sentinel")) {
                                                    class Ne {
                                                      constructor(arg0) {
                                                        const current = ref.current;
                                                        if (current != null) {
                                                          current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
                                                        }
                                                      }
                                                    }
                                                    cResult[58] = Ne;
                                                    class Ee {
                                                      constructor() {
                                                        let tmp2 = null != onInvalidUrl;
                                                        const tmp = onInvalidUrl;
                                                        if (tmp2) {
                                                          tmp2 = !hadInvalidUrlError;
                                                        }
                                                        if (tmp2) {
                                                          tmp2 = hasInvalidUrlError;
                                                        }
                                                        if (tmp2) {
                                                          tmp();
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    class Ne {
                                                      constructor(arg0) {
                                                        const current = ref.current;
                                                        if (current != null) {
                                                          current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
                                                        }
                                                      }
                                                    }
                                                  }
                                                  let closure_28 = tmp63;
                                                  if (cResult[59] === tmp17) {
                                                    class Ne {
                                                      constructor(arg0) {
                                                        const current = ref.current;
                                                        if (current != null) {
                                                          current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
                                                        }
                                                      }
                                                    }
                                                  }
                                                  cResult[59] = tmp17;
                                                  cResult[60] = isPipOrGridMode;
                                                  class Oe {
                                                    constructor(mainDocumentURL) {
                                                      mainDocumentURL = mainDocumentURL.mainDocumentURL;
                                                      if (null != combined1) {
                                                        if (null != mainDocumentURL) {
                                                          if (mainDocumentURL !== combined1) {
                                                            Linking.openURL(mainDocumentURL.url);
                                                            return false;
                                                          }
                                                        }
                                                      }
                                                      const iter = first1[Symbol.iterator]();
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
                                                    }
                                                  }
                                                  cResult[61] = undefined;
                                                  if (safeAreasConfig != null) {
                                                    class Ne {
                                                      constructor(arg0) {
                                                        const current = ref.current;
                                                        if (current != null) {
                                                          current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
                                                        }
                                                      }
                                                    }
                                                  }
                                                  cResult[62] = undefined;
                                                  if (safeAreasConfig != null) {
                                                    class Ne {
                                                      constructor(arg0) {
                                                        const current = ref.current;
                                                        if (current != null) {
                                                          current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
                                                        }
                                                      }
                                                    }
                                                  }
                                                  cResult[63] = undefined;
                                                  if (safeAreasConfig != null) {
                                                    class Ne {
                                                      constructor(arg0) {
                                                        const current = ref.current;
                                                        if (current != null) {
                                                          current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
                                                        }
                                                      }
                                                    }
                                                  }
                                                  function ke() {
                                                    function tryInjectJavaScript() {
                                                      return closure_0(...arguments);
                                                    }
                                                    const tmp = closure_26;
                                                    if (tmp) {
                                                      const tmp3 = null;
                                                      if (null != closure_15) {
                                                        const tmp4 = onInvalidUrl;
                                                        let closure_0 = onInvalidUrl(function*(arg0, value) {
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
                                                                  const obj8 = closure_1_15;
                                                                  if (null != closure_1_15) {
                                                                    let rect;
                                                                    const tmp15 = closure_6;
                                                                    if (tmp15) {
                                                                      rect = { top: 0, bottom: 0, left: 0, right: 0 };
                                                                    } else {
                                                                      rect = closure_1_17;
                                                                    }
                                                                    const rect2 = c7;
                                                                    let left;
                                                                    if (c7 != null) {
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
                                                                    const rect1 = { left: tmp15(left, c0), right: tmp15(right, c1), top: tmp15(top, c2), bottom: tmp15(bottom, c3) };
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
                                                                    injectJavaScriptResult = obj8.injectJavaScript(applicationId(onLoadError[28])(obj4));
                                                                    c8 = 2;
                                                                    c9 = 1;
                                                                    const obj6 = { value: injectJavaScriptResult, done: false };
                                                                    return obj6;
                                                                  }
                                                                }
                                                              } else if (1 === tmp4) {
                                                                c7 = 0;
                                                                if (null != ref.current) {
                                                                  injectJavaScriptResult = closure_1_28;
                                                                  closure_1_28(applicationId(onLoadError[28])(obj4));
                                                                }
                                                              } else if (arg0 === 1) {
                                                                c9 = 3;
                                                                throw value;
                                                              } else if (arg0 === 2) {
                                                                c7 = 0;
                                                                c9 = 3;
                                                                const obj = { value, done: true };
                                                                return obj;
                                                              } else {
                                                                c7 = 0;
                                                              }
                                                              c9 = 3;
                                                              return { value: "IconComponent", done: null };
                                                            } catch (tmp31) {
                                                              closure_6 = tmp31;
                                                              if (0 === c7) {
                                                                c9 = 3;
                                                                throw tmp31;
                                                              } else {
                                                                c8 = 1;
                                                              }
                                                            }
                                                          }
                                                        });
                                                        tryInjectJavaScript();
                                                      }
                                                    }
                                                  }
                                                  cResult[64] = undefined;
                                                  cResult[65] = null != tmp45 && null != tmp9 && null != tmp14;
                                                  cResult[66] = tmp11;
                                                  cResult[67] = ke;
                                                }
                                                class Oe {
                                                  constructor(mainDocumentURL) {
                                                    mainDocumentURL = mainDocumentURL.mainDocumentURL;
                                                    if (null != combined1) {
                                                      if (null != mainDocumentURL) {
                                                        if (mainDocumentURL !== combined1) {
                                                          Linking.openURL(mainDocumentURL.url);
                                                          return false;
                                                        }
                                                      }
                                                    }
                                                    const iter = first1[Symbol.iterator]();
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
                                                  }
                                                }
                                                cResult[55] = first1;
                                                cResult[56] = tmp45;
                                                cResult[57] = Oe;
                                              }
                                            }
                                            class Ee {
                                              constructor() {
                                                let tmp2 = null != onInvalidUrl;
                                                const tmp = onInvalidUrl;
                                                if (tmp2) {
                                                  tmp2 = !hadInvalidUrlError;
                                                }
                                                if (tmp2) {
                                                  tmp2 = hasInvalidUrlError;
                                                }
                                                if (tmp2) {
                                                  tmp();
                                                }
                                              }
                                            }
                                            if (null != tmp9) {
                                              class Ne {
                                                constructor(arg0) {
                                                  const current = ref.current;
                                                  if (current != null) {
                                                    current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
                                                  }
                                                }
                                              }
                                              if (tmp47) {
                                                class Ne {
                                                  constructor(arg0) {
                                                    const current = ref.current;
                                                    if (current != null) {
                                                      current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
                                                    }
                                                  }
                                                }
                                                combined1 = "file://" + tmp14;
                                              } else {
                                                class Ne {
                                                  constructor(arg0) {
                                                    const current = ref.current;
                                                    if (current != null) {
                                                      current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
                                                    }
                                                  }
                                                }
                                                const tmpResult4 = tmp(tmp2[19]);
                                                class Ee {
                                                  constructor() {
                                                    let tmp2 = null != onInvalidUrl;
                                                    const tmp = onInvalidUrl;
                                                    if (tmp2) {
                                                      tmp2 = !hadInvalidUrlError;
                                                    }
                                                    if (tmp2) {
                                                      tmp2 = hasInvalidUrlError;
                                                    }
                                                    if (tmp2) {
                                                      tmp();
                                                    }
                                                  }
                                                }
                                                combined1 = "" + tmp48 + "/" + closure_15 + "/" + tmpResult4.webViewShellFileName(iframeId);
                                              }
                                              class Ee {
                                                constructor() {
                                                  let tmp2 = null != onInvalidUrl;
                                                  const tmp = onInvalidUrl;
                                                  if (tmp2) {
                                                    tmp2 = !hadInvalidUrlError;
                                                  }
                                                  if (tmp2) {
                                                    tmp2 = hasInvalidUrlError;
                                                  }
                                                  if (tmp2) {
                                                    tmp();
                                                  }
                                                }
                                              }
                                            }
                                            cResult[47] = iframeId;
                                            cResult[48] = tmp9;
                                            cResult[49] = tmp14;
                                            cResult[50] = null;
                                          }
                                        }
                                        class Ee {
                                          constructor() {
                                            let tmp2 = null != onInvalidUrl;
                                            const tmp = onInvalidUrl;
                                            if (tmp2) {
                                              tmp2 = !hadInvalidUrlError;
                                            }
                                            if (tmp2) {
                                              tmp2 = hasInvalidUrlError;
                                            }
                                            if (tmp2) {
                                              tmp();
                                            }
                                          }
                                        }
                                        const items3 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
                                        cResult[42] = hadInvalidUrlError;
                                        cResult[43] = hasInvalidUrlError;
                                        cResult[44] = onInvalidUrl;
                                        cResult[46] = items3;
                                        tmp43 = items3;
                                        tmp42 = Ee;
                                      }
                                      const items4 = [hadInvalidUrlError, hasInvalidUrlError];
                                      cResult[38] = hadInvalidUrlError;
                                      cResult[39] = hasInvalidUrlError;
                                      cResult[40] = tmp40;
                                      cResult[41] = items4;
                                      tmp38 = tmp40;
                                    }
                                  }
                                  const items5 = [, stateFromStores, setHasInvalidUrlError];
                                  cResult[34] = combined;
                                  cResult[35] = stateFromStores;
                                  cResult[36] = setHasInvalidUrlError;
                                  cResult[37] = items5;
                                  tmp36 = items5;
                                }
                              }
                            }
                            function be() {
                              let tmp10;
                              try {
                                const _URL = URL;
                                const self = this;
                                const self2 = this;
                                const uRL = new URL(combined);
                                tmp10(uRL);
                              } catch (tmp7) {
                                const tmp8 = stateFromStores;
                                if (tmp8) {
                                  tmp10 = setHasInvalidUrlError(true);
                                } else {
                                  throw tmp7;
                                }
                              }
                            }
                            cResult[29] = combined;
                            cResult[30] = stateFromStores;
                            cResult[32] = tmp10;
                            cResult[33] = be;
                            tmp35 = be;
                          }
                        }
                      }
                    }
                    function ve() {
                      hadInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                      const obj = AnalyticsUtilsDefault;
                      const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                      obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                      onActivityCrash();
                    }
                    cResult[21] = activitySessionId;
                    cResult[22] = applicationId;
                    cResult[23] = channelId;
                    cResult[24] = guildId;
                    cResult[26] = ve;
                    tmp30 = ve;
                  }
                }
              }
            }
            const items6 = [, tmp21, onLoadError, referrerPolicy, iframeId];
            cResult[11] = iframeId;
            cResult[12] = tmp21;
            cResult[13] = combined;
            cResult[15] = referrerPolicy;
            cResult[16] = items6;
            tmp26 = items6;
          }
        }
      }
    }
  }
  function oe() {
    function loadHtml() {
      return closure_0(...arguments);
    }
    let closure_0 = onInvalidUrl(function*(arg0, value) {
      let bottom;
      let right;
      let tmp36;
      let top;
      let v0;
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
              referrerPolicy = tmp2;
              let closure_4 = tmp;
              iframeId = undefined;
              const obj7 = iframeId(onLoadError[15]);
              const rect = obj7.getStableSafeAreaInsets();
              const current = ref.current;
              let left;
              const tmp42 = onLoadError;
              if (current != null) {
                left = current.left;
              }
              let left1;
              if (rect != null) {
                left1 = rect.left;
              }
              iframeId = left1;
              if (left1 == null) {
                iframeId = 0;
              }
              const rect1 = { left: tmp15(left, iframeId), right: tmp15(right, c1), top: tmp15(top, c2), bottom: tmp15(bottom, v0) };
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
              v0 = bottom1;
              if (bottom1 == null) {
                v0 = 0;
              }
              const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy, insets: rect1, messageForDisallowedNavigationError: tmp36 };
              tmp36 = undefined;
              const tmp30 = applicationId(tmp42[19]);
              if (!closure_2_14) {
                tmp36 = activitySessionId;
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
            iframeId = value;
            if (null != iframeId) {
              closure_1_16(iframeId);
            } else {
              v0();
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
  cResult[4] = iframeId;
  cResult[5] = tmp21;
  cResult[6] = combined;
  cResult[7] = onLoadError;
  cResult[8] = referrerPolicy;
  cResult[9] = tmp15;
  cResult[10] = oe;
  tmp25 = oe;
}) : (function BaseEmbeddedAppWebView(iframeId) {
  let _undefined;
  let activityUrl;
  let allowPopups;
  let c14;
  let c16;
  let c24;
  let ignoreSilentHardwareSwitch;
  let items12;
  let obj6;
  let obj7;
  let onActivityCrash;
  let queryParams;
  let str;
  let tmp31;
  let tmp44;
  let tmp47;
  let tmp50;
  let tmp56;
  let url;
  iframeId = iframeId.iframeId;
  let deepLinkQueryParams = iframeId.deepLinkQueryParams;
  if (deepLinkQueryParams === undefined) {
    deepLinkQueryParams = {};
  }
  const applicationId = iframeId.applicationId;
  ({ queryParams, onActivityCrash } = iframeId);
  const onLoadError = iframeId.onLoadError;
  const onInvalidUrl = iframeId.onInvalidUrl;
  let referrerPolicy = iframeId.referrerPolicy;
  const isPipOrGridMode = iframeId.isPipOrGridMode;
  ({ ignoreSilentHardwareSwitch, activityUrl, allowPopups } = iframeId);
  if (ignoreSilentHardwareSwitch === undefined) {
    ignoreSilentHardwareSwitch = true;
  }
  const safeAreasConfig = iframeId.safeAreasConfig;
  const channelId = iframeId.channelId;
  const guildId = iframeId.guildId;
  const activitySessionId = iframeId.activitySessionId;
  let setHasInvalidUrlError;
  c14 = undefined;
  c16 = undefined;
  let rect;
  let closure_23;
  c24 = undefined;
  let first;
  let closure_26;
  let closure_27;
  let ref;
  let callback4;
  let obj2 = isPipOrGridMode;
  let tmp2 = iframeId;
  let tmp3 = onLoadError;
  let tmp = setHasInvalidUrlError();
  const context = isPipOrGridMode.useContext(iframeId(onLoadError[13]).WebViewContext);
  let tmp5 = rect();
  const hasInvalidUrlError = tmp5.hasInvalidUrlError;
  setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp5.hadInvalidUrlError;
  let tmp6 = referrerPolicy;
  const tmp7 = referrerPolicy(isPipOrGridMode.useState(null), 2);
  [url, c14] = tmp7;
  let items = [iframeId];
  const memo = isPipOrGridMode.useMemo(() => {
    const obj = WebView2;
    return obj.getWebViewProxy(iframeId);
  }, items);
  [str, c16] = referrerPolicy(isPipOrGridMode.useState(null), 2);
  const tmp9 = referrerPolicy(isPipOrGridMode.useState(null), 2);
  rect = applicationId(onLoadError[15])();
  let obj3 = onActivityCrash(onLoadError[16]);
  let obj = { frame_id: iframeId, platform: iframeId(onLoadError[17]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj3.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  const tmp13 = applicationId(onLoadError[18])({ allowPopups });
  let closure_18 = tmp13;
  const uRLSearchParams = new URLSearchParams(obj);
  const combined = "" + activityUrl + "?" + uRLSearchParams;
  let closure_20 = isPipOrGridMode.useRef(safeAreasConfig);
  const items1 = [combined, tmp13, onLoadError, referrerPolicy, iframeId];
  const effect = isPipOrGridMode.useEffect(() => {
    function loadHtml() {
      return obj(...arguments);
    }
    let obj = function _loadHtml2() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let bottom;
        let right;
        let tmp36;
        let top;
        let v0;
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
                referrerPolicy = tmp2;
                let closure_4 = tmp;
                closure_0 = undefined;
                const obj7 = closure_2_0(onLoadError[15]);
                rect = obj7.getStableSafeAreaInsets();
                const current = ref.current;
                let left;
                const tmp42 = onLoadError;
                if (current != null) {
                  left = current.left;
                }
                let left1;
                if (rect != null) {
                  left1 = rect.left;
                }
                iframeId = left1;
                if (left1 == null) {
                  iframeId = 0;
                }
                const rect1 = { left: closure_2_16(left, iframeId), right: closure_2_16(right, c1), top: closure_2_16(top, c2), bottom: closure_2_16(bottom, v0) };
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
                v0 = bottom1;
                if (bottom1 == null) {
                  v0 = 0;
                }
                const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy, insets: rect1, messageForDisallowedNavigationError: tmp36 };
                tmp36 = undefined;
                const tmp30 = applicationId(tmp42[19]);
                if (!_undefined) {
                  tmp36 = activitySessionId;
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
                closure_1_16(closure_0);
              } else {
                v0();
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
  const callback = isPipOrGridMode.useCallback((nativeEvent) => {
    hadInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items2);
  const items4 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
  const callback1 = isPipOrGridMode.useCallback((nativeEvent) => {
    hadInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items3);
  const callback2 = isPipOrGridMode.useCallback(() => {
    hadInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
    obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
    onActivityCrash();
  }, items4);
  let obj5 = iframeId(onLoadError[21]);
  const items5 = [channelId];
  const stateFromStores = obj5.useStateFromStores(items5, () => channelId.getUseActivityUrlOverride());
  const items6 = [combined, stateFromStores, setHasInvalidUrlError];
  const effect1 = isPipOrGridMode.useEffect(function() {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(combined);
      _undefined(uRL);
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
  const effect2 = isPipOrGridMode.useEffect(() => {
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
  const items8 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
  const effect3 = isPipOrGridMode.useEffect(() => {
    let tmp2 = null != onInvalidUrl;
    const tmp = onInvalidUrl;
    if (tmp2) {
      tmp2 = !hadInvalidUrlError;
    }
    if (tmp2) {
      tmp2 = hasInvalidUrlError;
    }
    if (tmp2) {
      tmp();
    }
  }, items8);
  let combined1 = null;
  let tmp24 = null;
  if (null != url) {
    const tmp25 = c14;
    if (tmp25) {
      let _HermesInternal2 = HermesInternal;
      combined1 = "file://" + str;
    } else {
      const origin = url.origin;
      let _HermesInternal = HermesInternal;
      const tmp2Result = tmp2(tmp3[19]);
      combined1 = "" + origin + "/" + memo + "/" + tmp2Result.webViewShellFileName(iframeId);
    }
    tmp24 = combined1;
  }
  let tmp29 = c14;
  closure_23 = c14;
  let tmp6Result = tmp6(obj2.useState(false), 2);
  [tmp31, c24] = tmp6Result;
  const tmp6Result2 = tmp6(obj2.useState([]), 2);
  first = tmp6Result2[0];
  closure_26 = tmp6Result2[1];
  const items9 = [applicationId, c14];
  const effect4 = obj2.useEffect(() => {
    function fetchAndParseCSP() {
      return obj(...arguments);
    }
    const tmp = closure_23;
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
              const obj2 = { value, done: true };
              return obj2;
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
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_3 = tmp2;
                  let closure_2 = tmp;
                  content_security_policy = undefined;
                  items = undefined;
                  const obj6 = closure_2_0(onLoadError[24]);
                  const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(closure_1);
                  closure_0 = nonTestModeUrlForApplication;
                  const tmp29 = closure_2_0;
                  const tmp30 = onLoadError;
                  const tmp31 = closure_1;
                  if (nonTestModeUrlForApplication == null) {
                    const _HermesInternal = HermesInternal;
                    let str = ".discordsays.com";
                    closure_0 = "https://" + tmp31 + ".discordsays.com";
                  }
                  const HTTP = tmp29(tmp30[25]).HTTP;
                  const obj4 = { url: "" + closure_0 + "/.discord/csp", rejectWithError: false };
                  const _HermesInternal2 = HermesInternal;
                  const get = HTTP.get;
                  c4 = 1;
                  c5 = 1;
                  const obj5 = { value: get(obj4), done: false };
                  return obj5;
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
                closure_1 = 3;
                closure_1 = HermesBuiltin.arraySpread(items, closure_131_1(/frame-src (.*?);/, content_security_policy), closure_1);
                closure_1 = HermesBuiltin.arraySpread(items, closure_131_1(/child-src (.*?);/, content_security_policy), closure_1);
                closure_1_26(items.map((item) => {
                  const str = closure_1_1(closure_1_3[26])(item);
                  return "^" + str.replace(/\\\*/g, ".*");
                }));
                closure_1_24(true);
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp10) {
              c5 = 3;
              throw tmp10;
            }
          }
        });
        return obj(...arguments);
      };
      let closure_0 = ["'self'"];
      const tmp2 = fetchAndParseCSP();
    }
  }, items9);
  const items10 = [tmp24, first];
  let tmp36 = null != tmp24;
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
    const iter = first[Symbol.iterator]();
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
  }, items10);
  if (tmp36) {
    tmp36 = null != url;
  }
  if (tmp36) {
    tmp36 = null != str;
  }
  closure_27 = tmp36;
  ref = obj2.useRef(null);
  callback4 = obj2.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
    }
  }, []);
  const items11 = [rect, isPipOrGridMode, tmp36, memo, callback4, safeAreasConfig];
  const effect5 = obj2.useEffect(() => {
    function tryInjectJavaScript() {
      return obj(...arguments);
    }
    const tmp = closure_27;
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
                    const obj8 = closure_1_15;
                    if (null != closure_1_15) {
                      const tmp15 = closure_6;
                      if (tmp15) {
                        rect = { top: 0, bottom: 0, left: 0, right: 0 };
                      } else {
                        rect = closure_1_17;
                      }
                      const rect2 = c7;
                      let left;
                      if (c7 != null) {
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
                      const rect1 = { left: closure_2_16(left, c0), right: closure_2_16(right, c1), top: closure_2_16(top, c2), bottom: closure_2_16(bottom, c3) };
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
                      injectJavaScriptResult = obj8.injectJavaScript(applicationId(onLoadError[28])(obj4));
                      c8 = 2;
                      c9 = 1;
                      const obj6 = { value: injectJavaScriptResult, done: false };
                      return obj6;
                    }
                  }
                } else if (1 === tmp4) {
                  c7 = 0;
                  if (null != ref.current) {
                    injectJavaScriptResult = closure_1_29;
                    closure_1_29(applicationId(onLoadError[28])(obj4));
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
                closure_6 = tmp31;
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
  if (null != tmp24) {
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
      let tmp41 = num;
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
        tmp41 = num3;
      }
      let rect1 = { left: tmp41, right: tmp44, top: tmp47, bottom: tmp50 };
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
      tmp44 = num4;
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
        tmp44 = num6;
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
      tmp47 = num7;
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
        tmp47 = num9;
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
      tmp50 = num10;
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
        tmp50 = num12;
      }
      if (tmp29) {
        const tmp2Result2 = tmp2(tmp3[19]);
        injectedJavascriptForIOS = tmp2Result2.createInjectedJavascriptForIOS(rect1);
      }
      let tmp54Result = null;
      if (null != str) {
        let host;
        let obj4 = { style: tmp.webView, ref, source: obj6, androidAssetLoaderConfig: obj7, originWhitelist: ["*"], overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: callback, onContentProcessDidTerminate: callback2, onRenderProcessGone: callback1, webViewKey: iframeId, temporaryParentNodeTag: context, messagingWithWebViewKeyEnabled: true, allowFileAccess: tmp29, injectedJavaScript: injectedJavascriptForIOS, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: tmp56, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
        obj6 = { uri: tmp24 };
        const WebView = tmp2(tmp3[14]).WebView;
        const tmp54 = hasInvalidUrlError;
        if ("" === url.port) {
          host = url.host;
        } else {
          const _HermesInternal3 = HermesInternal;
          host = "" + url.hostname + ":" + url.port;
        }
        obj7 = { domain: host, httpAllowed: "http:" === url.protocol, pathHandlers: items12 };
        let obj8 = { type: "internal", path: "/" + memo + "/", directory: str.substring(0, str.lastIndexOf("/")) };
        const _HermesInternal4 = HermesInternal;
        items12 = [obj8];
        tmp56 = undefined;
        if (tmp29) {
          tmp56 = callback3;
        }
        tmp54Result = tmp54(WebView, obj4);
      }
      return tmp54Result;
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasInvalidUrlErrorState() {
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
const result = size.fileFinishedImporting("modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx");

export const BaseEmbeddedAppWebView = tmp3;
