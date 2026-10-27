// Module ID: 11343
// Function ID: 11344
// Name: BaseEmbeddedAppWebView
// Dependencies: [5, 32, 19, 17, 6311, 1087, 2026, 21, 5191, 3, 1384, 558, 576, 11344, 7788, 11345, 1383, 11332, 11346, 11342, 1267, 573, 5399, 1128, 11347, 6299, 1297, 11348, 1386, 11035, 6178, 2]

// Module 11343 (BaseEmbeddedAppWebView)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl4 from "intl" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import URLUtilsDefault from "URLUtils" /* 1386 */;
import Constants2 from "Constants" /* 2026 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5399 */;
import usePreviousDefault from "usePrevious" /* 6178 */;
import WebView2 from "WebView" /* 7788 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 6311 */;
import createStyles from "createStyles" /* 5191 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, c4, c5, c7, c8, c9, closure_6, constants, content_security_policy;

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
let allowFileAccess = PlatformUtils.isIOS();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseEmbeddedAppWebView(iframeId) {
  let allowPopups;
  let applicationId;
  let closure_14;
  let deepLinkQueryParams;
  let ignoreSilentHardwareSwitch;
  let obj8;
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
  const cResult = obj.c(107);
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
  let tmp6 = closure_16();
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
  closure_16 = tmp15;
  const tmp16 = applicationId;
  tmp7(obj2.useState(null), 2);
  const tmp17 = applicationId(tmp2[15])();
  let closure_17 = tmp17;
  let obj4 = onActivityCrash(tmp2[16]);
  let obj3 = { frame_id: iframeId, platform: tmp(tmp2[17]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj4.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
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
                      function oe(nativeEvent) {
                        hadInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                      }
                      cResult[17] = applicationId;
                      cResult[18] = oe;
                    }
                    if (cResult[19] !== applicationId) {
                      function de(nativeEvent) {
                        hadInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                      }
                      cResult[19] = applicationId;
                      cResult[20] = de;
                      let tmp29 = de;
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
                              function me() {
                                return channelId.getUseActivityUrlOverride();
                              }
                              cResult[27] = items;
                              cResult[28] = me;
                              tmp32 = me;
                              class Se {
                                constructor() {
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
                              }
                            } else {
                              tmp31 = cResult[27];
                              tmp32 = cResult[28];
                            }
                            const tmpResult2 = tmp(tmp2[21]);
                            const stateFromStores = tmpResult2.useStateFromStores(tmp31, tmp32);
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
                                            let tmp41;
                                            let tmp42;
                                            if (cResult[44] === onInvalidUrl) {
                                              tmp41 = cResult[45];
                                              tmp42 = cResult[46];
                                            }
                                            const effect3 = obj2.useEffect(tmp41, tmp42);
                                            if (cResult[47] === tmp9) {
                                              let tmp44;
                                              let combined1;
                                              if (cResult[48] === tmp14) {
                                                tmp44 = cResult[49];
                                              }
                                              let uri;
                                              const tmp47 = cResult[50];
                                              if (tmp44 != null) {
                                                uri = tmp44.uri;
                                              }
                                              if (tmp47 === uri) {
                                                if (cResult[51] === tmp9) {
                                                  let tmp56;
                                                  let tmp60;
                                                  let tmp59;
                                                  if (cResult[52] === tmp14) {
                                                    combined1 = cResult[53];
                                                  }
                                                  let flag = false;
                                                  const tmp7Result3 = tmp7(obj2.useState(false), 2);
                                                  let closure_22 = tmp7Result3[1];
                                                  const _Symbol2 = Symbol;
                                                  const first = tmp7Result3[0];
                                                  if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
                                                    const items1 = [];
                                                    cResult[54] = items1;
                                                    tmp56 = items1;
                                                  } else {
                                                    tmp56 = cResult[54];
                                                  }
                                                  const tmp7Result4 = tmp7(obj2.useState(tmp56), 2);
                                                  class Se {
                                                    constructor() {
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
                                                  }
                                                  let closure_23 = tmp58;
                                                  let closure_24 = tmp7Result4[1];
                                                  if (cResult[55] !== applicationId) {
                                                    class Oe {
                                                      constructor() {
                                                        tmp = closure_14;
                                                        if (tmp) {
                                                          closure_0 = ["'self'"];
                                                          parseCsp = function parseCsp(arg0, str) {
                                                            const match = str.match(arg0);
                                                            if (null !== match) {
                                                              if (match.length >= 2) {
                                                                str = match[1];
                                                                const parts = str.split(" ");
                                                                const found = parts.filter((item) => !closure_1_0.includes(item));
                                                              }
                                                              return [];
                                                            }
                                                          };
                                                          closure_0 = undefined;
                                                          tmp2 = onInvalidUrl;
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
                                                                    const obj6 = closure_0(onLoadError[25]);
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
                                                                    const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                  closure_2_24(items.map((item) => {
                                                                    const str = closure_1_1(closure_1_3[27])(item);
                                                                    return "^" + str.replace(/\\\*/g, ".*");
                                                                  }));
                                                                  closure_2_22(true);
                                                                  c5 = 3;
                                                                  return { value: "IconComponent", done: null };
                                                                }
                                                              } catch (tmp10) {
                                                                c5 = 3;
                                                                throw tmp10;
                                                              }
                                                            }
                                                          });
                                                          tmp3 = (function fetchAndParseCSP() {
                                                            return closure_0(...arguments);
                                                          })();
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    const items2 = [applicationId, tmp10];
                                                    cResult[55] = applicationId;
                                                    cResult[56] = Oe;
                                                    class Se {
                                                      constructor() {
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
                                                    }
                                                    cResult[57] = items2;
                                                    tmp60 = items2;
                                                    tmp59 = Oe;
                                                  } else {
                                                    class Oe {
                                                      constructor() {
                                                        tmp = closure_14;
                                                        if (tmp) {
                                                          closure_0 = ["'self'"];
                                                          parseCsp = function parseCsp(arg0, str) {
                                                            const match = str.match(arg0);
                                                            if (null !== match) {
                                                              if (match.length >= 2) {
                                                                str = match[1];
                                                                const parts = str.split(" ");
                                                                const found = parts.filter((item) => !closure_1_0.includes(item));
                                                              }
                                                              return [];
                                                            }
                                                          };
                                                          closure_0 = undefined;
                                                          tmp2 = onInvalidUrl;
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
                                                                    const obj6 = closure_0(onLoadError[25]);
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
                                                                    const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                  closure_2_24(items.map((item) => {
                                                                    const str = closure_1_1(closure_1_3[27])(item);
                                                                    return "^" + str.replace(/\\\*/g, ".*");
                                                                  }));
                                                                  closure_2_22(true);
                                                                  c5 = 3;
                                                                  return { value: "IconComponent", done: null };
                                                                }
                                                              } catch (tmp10) {
                                                                c5 = 3;
                                                                throw tmp10;
                                                              }
                                                            }
                                                          });
                                                          tmp3 = (function fetchAndParseCSP() {
                                                            return closure_0(...arguments);
                                                          })();
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    tmp60 = cResult[57];
                                                  }
                                                  const effect4 = obj2.useEffect(tmp59, tmp60);
                                                  if (cResult[58] === tmp58) {
                                                    class Oe {
                                                      constructor() {
                                                        tmp = closure_14;
                                                        if (tmp) {
                                                          closure_0 = ["'self'"];
                                                          parseCsp = function parseCsp(arg0, str) {
                                                            const match = str.match(arg0);
                                                            if (null !== match) {
                                                              if (match.length >= 2) {
                                                                str = match[1];
                                                                const parts = str.split(" ");
                                                                const found = parts.filter((item) => !closure_1_0.includes(item));
                                                              }
                                                              return [];
                                                            }
                                                          };
                                                          closure_0 = undefined;
                                                          tmp2 = onInvalidUrl;
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
                                                                    const obj6 = closure_0(onLoadError[25]);
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
                                                                    const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                  closure_2_24(items.map((item) => {
                                                                    const str = closure_1_1(closure_1_3[27])(item);
                                                                    return "^" + str.replace(/\\\*/g, ".*");
                                                                  }));
                                                                  closure_2_22(true);
                                                                  c5 = 3;
                                                                  return { value: "IconComponent", done: null };
                                                                }
                                                              } catch (tmp10) {
                                                                c5 = 3;
                                                                throw tmp10;
                                                              }
                                                            }
                                                          });
                                                          tmp3 = (function fetchAndParseCSP() {
                                                            return closure_0(...arguments);
                                                          })();
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    let closure_25 = tmp64;
                                                    const ref = obj2.useRef(null);
                                                    if (tmp9 != null) {
                                                      class Oe {
                                                        constructor() {
                                                          tmp = closure_14;
                                                          if (tmp) {
                                                            closure_0 = ["'self'"];
                                                            parseCsp = function parseCsp(arg0, str) {
                                                              const match = str.match(arg0);
                                                              if (null !== match) {
                                                                if (match.length >= 2) {
                                                                  str = match[1];
                                                                  const parts = str.split(" ");
                                                                  const found = parts.filter((item) => !closure_1_0.includes(item));
                                                                }
                                                                return [];
                                                              }
                                                            };
                                                            closure_0 = undefined;
                                                            tmp2 = onInvalidUrl;
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
                                                                      const obj6 = closure_0(onLoadError[25]);
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
                                                                      const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                    closure_2_24(items.map((item) => {
                                                                      const str = closure_1_1(closure_1_3[27])(item);
                                                                      return "^" + str.replace(/\\\*/g, ".*");
                                                                    }));
                                                                    closure_2_22(true);
                                                                    c5 = 3;
                                                                    return { value: "IconComponent", done: null };
                                                                  }
                                                                } catch (tmp10) {
                                                                  c5 = 3;
                                                                  throw tmp10;
                                                                }
                                                              }
                                                            });
                                                            tmp3 = (function fetchAndParseCSP() {
                                                              return closure_0(...arguments);
                                                            })();
                                                          }
                                                          return;
                                                        }
                                                      }
                                                    }
                                                    let c27 = tmp66;
                                                    if (cResult[61] === undefined) {
                                                      class Oe {
                                                        constructor() {
                                                          tmp = closure_14;
                                                          if (tmp) {
                                                            closure_0 = ["'self'"];
                                                            parseCsp = function parseCsp(arg0, str) {
                                                              const match = str.match(arg0);
                                                              if (null !== match) {
                                                                if (match.length >= 2) {
                                                                  str = match[1];
                                                                  const parts = str.split(" ");
                                                                  const found = parts.filter((item) => !closure_1_0.includes(item));
                                                                }
                                                                return [];
                                                              }
                                                            };
                                                            closure_0 = undefined;
                                                            tmp2 = onInvalidUrl;
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
                                                                      const obj6 = closure_0(onLoadError[25]);
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
                                                                      const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                    closure_2_24(items.map((item) => {
                                                                      const str = closure_1_1(closure_1_3[27])(item);
                                                                      return "^" + str.replace(/\\\*/g, ".*");
                                                                    }));
                                                                    closure_2_22(true);
                                                                    c5 = 3;
                                                                    return { value: "IconComponent", done: null };
                                                                  }
                                                                } catch (tmp10) {
                                                                  c5 = 3;
                                                                  throw tmp10;
                                                                }
                                                              }
                                                            });
                                                            tmp3 = (function fetchAndParseCSP() {
                                                              return closure_0(...arguments);
                                                            })();
                                                          }
                                                          return;
                                                        }
                                                      }
                                                    }
                                                    class Se {
                                                      constructor() {
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
                                                    }
                                                    cResult[61] = undefined;
                                                    cResult[62] = tmp17;
                                                    cResult[63] = isPipOrGridMode;
                                                    class Le {
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
                                                        const iter = closure_23[Symbol.iterator]();
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
                                                    if (safeAreasConfig != null) {
                                                      class Oe {
                                                        constructor() {
                                                          tmp = closure_14;
                                                          if (tmp) {
                                                            closure_0 = ["'self'"];
                                                            parseCsp = function parseCsp(arg0, str) {
                                                              const match = str.match(arg0);
                                                              if (null !== match) {
                                                                if (match.length >= 2) {
                                                                  str = match[1];
                                                                  const parts = str.split(" ");
                                                                  const found = parts.filter((item) => !closure_1_0.includes(item));
                                                                }
                                                                return [];
                                                              }
                                                            };
                                                            closure_0 = undefined;
                                                            tmp2 = onInvalidUrl;
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
                                                                      const obj6 = closure_0(onLoadError[25]);
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
                                                                      const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                    closure_2_24(items.map((item) => {
                                                                      const str = closure_1_1(closure_1_3[27])(item);
                                                                      return "^" + str.replace(/\\\*/g, ".*");
                                                                    }));
                                                                    closure_2_22(true);
                                                                    c5 = 3;
                                                                    return { value: "IconComponent", done: null };
                                                                  }
                                                                } catch (tmp10) {
                                                                  c5 = 3;
                                                                  throw tmp10;
                                                                }
                                                              }
                                                            });
                                                            tmp3 = (function fetchAndParseCSP() {
                                                              return closure_0(...arguments);
                                                            })();
                                                          }
                                                          return;
                                                        }
                                                      }
                                                    }
                                                    cResult[64] = tmp68;
                                                    if (safeAreasConfig != null) {
                                                      class Oe {
                                                        constructor() {
                                                          tmp = closure_14;
                                                          if (tmp) {
                                                            closure_0 = ["'self'"];
                                                            parseCsp = function parseCsp(arg0, str) {
                                                              const match = str.match(arg0);
                                                              if (null !== match) {
                                                                if (match.length >= 2) {
                                                                  str = match[1];
                                                                  const parts = str.split(" ");
                                                                  const found = parts.filter((item) => !closure_1_0.includes(item));
                                                                }
                                                                return [];
                                                              }
                                                            };
                                                            closure_0 = undefined;
                                                            tmp2 = onInvalidUrl;
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
                                                                      const obj6 = closure_0(onLoadError[25]);
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
                                                                      const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                    closure_2_24(items.map((item) => {
                                                                      const str = closure_1_1(closure_1_3[27])(item);
                                                                      return "^" + str.replace(/\\\*/g, ".*");
                                                                    }));
                                                                    closure_2_22(true);
                                                                    c5 = 3;
                                                                    return { value: "IconComponent", done: null };
                                                                  }
                                                                } catch (tmp10) {
                                                                  c5 = 3;
                                                                  throw tmp10;
                                                                }
                                                              }
                                                            });
                                                            tmp3 = (function fetchAndParseCSP() {
                                                              return closure_0(...arguments);
                                                            })();
                                                          }
                                                          return;
                                                        }
                                                      }
                                                    }
                                                    cResult[65] = undefined;
                                                    if (safeAreasConfig != null) {
                                                      class Oe {
                                                        constructor() {
                                                          tmp = closure_14;
                                                          if (tmp) {
                                                            closure_0 = ["'self'"];
                                                            parseCsp = function parseCsp(arg0, str) {
                                                              const match = str.match(arg0);
                                                              if (null !== match) {
                                                                if (match.length >= 2) {
                                                                  str = match[1];
                                                                  const parts = str.split(" ");
                                                                  const found = parts.filter((item) => !closure_1_0.includes(item));
                                                                }
                                                                return [];
                                                              }
                                                            };
                                                            closure_0 = undefined;
                                                            tmp2 = onInvalidUrl;
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
                                                                      const obj6 = closure_0(onLoadError[25]);
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
                                                                      const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                    closure_2_24(items.map((item) => {
                                                                      const str = closure_1_1(closure_1_3[27])(item);
                                                                      return "^" + str.replace(/\\\*/g, ".*");
                                                                    }));
                                                                    closure_2_22(true);
                                                                    c5 = 3;
                                                                    return { value: "IconComponent", done: null };
                                                                  }
                                                                } catch (tmp10) {
                                                                  c5 = 3;
                                                                  throw tmp10;
                                                                }
                                                              }
                                                            });
                                                            tmp3 = (function fetchAndParseCSP() {
                                                              return closure_0(...arguments);
                                                            })();
                                                          }
                                                          return;
                                                        }
                                                      }
                                                    }
                                                    cResult[66] = undefined;
                                                    if (safeAreasConfig != null) {
                                                      class Oe {
                                                        constructor() {
                                                          tmp = closure_14;
                                                          if (tmp) {
                                                            closure_0 = ["'self'"];
                                                            parseCsp = function parseCsp(arg0, str) {
                                                              const match = str.match(arg0);
                                                              if (null !== match) {
                                                                if (match.length >= 2) {
                                                                  str = match[1];
                                                                  const parts = str.split(" ");
                                                                  const found = parts.filter((item) => !closure_1_0.includes(item));
                                                                }
                                                                return [];
                                                              }
                                                            };
                                                            closure_0 = undefined;
                                                            tmp2 = onInvalidUrl;
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
                                                                      const obj6 = closure_0(onLoadError[25]);
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
                                                                      const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                    closure_2_24(items.map((item) => {
                                                                      const str = closure_1_1(closure_1_3[27])(item);
                                                                      return "^" + str.replace(/\\\*/g, ".*");
                                                                    }));
                                                                    closure_2_22(true);
                                                                    c5 = 3;
                                                                    return { value: "IconComponent", done: null };
                                                                  }
                                                                } catch (tmp10) {
                                                                  c5 = 3;
                                                                  throw tmp10;
                                                                }
                                                              }
                                                            });
                                                            tmp3 = (function fetchAndParseCSP() {
                                                              return closure_0(...arguments);
                                                            })();
                                                          }
                                                          return;
                                                        }
                                                      }
                                                    }
                                                    class Fe {
                                                      constructor() {
                                                        function tryInjectJavaScript() {
                                                          return closure_0(...arguments);
                                                        }
                                                        const tmp = closure_25;
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
                                                                      let closure_4 = tmp4;
                                                                      closure_0 = undefined;
                                                                      const obj8 = closure_1_15;
                                                                      if (null != closure_1_15) {
                                                                        if (null != closure_1_27) {
                                                                          let rect;
                                                                          const tmp14 = closure_6;
                                                                          if (tmp14) {
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
                                                                          const rect1 = { left: closure_2_15(left, c0), right: closure_2_15(right, c1), top: closure_2_15(top, c2), bottom: closure_2_15(bottom, c3) };
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
                                                                          const obj4 = { type: "safeAreaUpdateEvent", data: obj5 };
                                                                          obj5 = { insets: rect1 };
                                                                          const tmp30 = applicationId(onLoadError[29])(obj4, tmp13);
                                                                          closure_0 = tmp30;
                                                                          c7 = 1;
                                                                          c8 = 2;
                                                                          c9 = 1;
                                                                          const obj6 = { value: obj8.injectJavaScript(tmp30), done: false };
                                                                          return obj6;
                                                                        }
                                                                      }
                                                                    }
                                                                  } else if (1 === c8) {
                                                                    c7 = 0;
                                                                    if (null != ref.current) {
                                                                      const current = ref.current;
                                                                      current.injectJavaScript(closure_0);
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
                                                    }
                                                    cResult[67] = undefined;
                                                    cResult[68] = null != tmp49 && null != tmp9 && null != tmp14;
                                                    cResult[69] = tmp11;
                                                    cResult[70] = Fe;
                                                  }
                                                  class Le {
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
                                                      const iter = closure_23[Symbol.iterator]();
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
                                                  cResult[58] = tmp58;
                                                  cResult[59] = tmp49;
                                                  cResult[60] = Le;
                                                }
                                              }
                                              combined1 = null;
                                              let tmp50 = null;
                                              if (null != tmp9) {
                                                class Oe {
                                                  constructor() {
                                                    tmp = closure_14;
                                                    if (tmp) {
                                                      closure_0 = ["'self'"];
                                                      parseCsp = function parseCsp(arg0, str) {
                                                        const match = str.match(arg0);
                                                        if (null !== match) {
                                                          if (match.length >= 2) {
                                                            str = match[1];
                                                            const parts = str.split(" ");
                                                            const found = parts.filter((item) => !closure_1_0.includes(item));
                                                          }
                                                          return [];
                                                        }
                                                      };
                                                      closure_0 = undefined;
                                                      tmp2 = onInvalidUrl;
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
                                                                const obj6 = closure_0(onLoadError[25]);
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
                                                                const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                              closure_2_24(items.map((item) => {
                                                                const str = closure_1_1(closure_1_3[27])(item);
                                                                return "^" + str.replace(/\\\*/g, ".*");
                                                              }));
                                                              closure_2_22(true);
                                                              c5 = 3;
                                                              return { value: "IconComponent", done: null };
                                                            }
                                                          } catch (tmp10) {
                                                            c5 = 3;
                                                            throw tmp10;
                                                          }
                                                        }
                                                      });
                                                      tmp3 = (function fetchAndParseCSP() {
                                                        return closure_0(...arguments);
                                                      })();
                                                    }
                                                    return;
                                                  }
                                                }
                                                if (tmp51) {
                                                  class Oe {
                                                    constructor() {
                                                      tmp = closure_14;
                                                      if (tmp) {
                                                        closure_0 = ["'self'"];
                                                        parseCsp = function parseCsp(arg0, str) {
                                                          const match = str.match(arg0);
                                                          if (null !== match) {
                                                            if (match.length >= 2) {
                                                              str = match[1];
                                                              const parts = str.split(" ");
                                                              const found = parts.filter((item) => !closure_1_0.includes(item));
                                                            }
                                                            return [];
                                                          }
                                                        };
                                                        closure_0 = undefined;
                                                        tmp2 = onInvalidUrl;
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
                                                                  const obj6 = closure_0(onLoadError[25]);
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
                                                                  const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                closure_2_24(items.map((item) => {
                                                                  const str = closure_1_1(closure_1_3[27])(item);
                                                                  return "^" + str.replace(/\\\*/g, ".*");
                                                                }));
                                                                closure_2_22(true);
                                                                c5 = 3;
                                                                return { value: "IconComponent", done: null };
                                                              }
                                                            } catch (tmp10) {
                                                              c5 = 3;
                                                              throw tmp10;
                                                            }
                                                          }
                                                        });
                                                        tmp3 = (function fetchAndParseCSP() {
                                                          return closure_0(...arguments);
                                                        })();
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  combined1 = "file://" + tmp14;
                                                } else {
                                                  class Oe {
                                                    constructor() {
                                                      tmp = closure_14;
                                                      if (tmp) {
                                                        closure_0 = ["'self'"];
                                                        parseCsp = function parseCsp(arg0, str) {
                                                          const match = str.match(arg0);
                                                          if (null !== match) {
                                                            if (match.length >= 2) {
                                                              str = match[1];
                                                              const parts = str.split(" ");
                                                              const found = parts.filter((item) => !closure_1_0.includes(item));
                                                            }
                                                            return [];
                                                          }
                                                        };
                                                        closure_0 = undefined;
                                                        tmp2 = onInvalidUrl;
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
                                                                  const obj6 = closure_0(onLoadError[25]);
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
                                                                  const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                closure_2_24(items.map((item) => {
                                                                  const str = closure_1_1(closure_1_3[27])(item);
                                                                  return "^" + str.replace(/\\\*/g, ".*");
                                                                }));
                                                                closure_2_22(true);
                                                                c5 = 3;
                                                                return { value: "IconComponent", done: null };
                                                              }
                                                            } catch (tmp10) {
                                                              c5 = 3;
                                                              throw tmp10;
                                                            }
                                                          }
                                                        });
                                                        tmp3 = (function fetchAndParseCSP() {
                                                          return closure_0(...arguments);
                                                        })();
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  if (tmp44 != null) {
                                                    class Oe {
                                                      constructor() {
                                                        tmp = closure_14;
                                                        if (tmp) {
                                                          closure_0 = ["'self'"];
                                                          parseCsp = function parseCsp(arg0, str) {
                                                            const match = str.match(arg0);
                                                            if (null !== match) {
                                                              if (match.length >= 2) {
                                                                str = match[1];
                                                                const parts = str.split(" ");
                                                                const found = parts.filter((item) => !closure_1_0.includes(item));
                                                              }
                                                              return [];
                                                            }
                                                          };
                                                          closure_0 = undefined;
                                                          tmp2 = onInvalidUrl;
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
                                                                    const obj6 = closure_0(onLoadError[25]);
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
                                                                    const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                  closure_2_24(items.map((item) => {
                                                                    const str = closure_1_1(closure_1_3[27])(item);
                                                                    return "^" + str.replace(/\\\*/g, ".*");
                                                                  }));
                                                                  closure_2_22(true);
                                                                  c5 = 3;
                                                                  return { value: "IconComponent", done: null };
                                                                }
                                                              } catch (tmp10) {
                                                                c5 = 3;
                                                                throw tmp10;
                                                              }
                                                            }
                                                          });
                                                          tmp3 = (function fetchAndParseCSP() {
                                                            return closure_0(...arguments);
                                                          })();
                                                        }
                                                        return;
                                                      }
                                                    }
                                                  }
                                                  if (combined1 == null) {
                                                    class Oe {
                                                      constructor() {
                                                        tmp = closure_14;
                                                        if (tmp) {
                                                          closure_0 = ["'self'"];
                                                          parseCsp = function parseCsp(arg0, str) {
                                                            const match = str.match(arg0);
                                                            if (null !== match) {
                                                              if (match.length >= 2) {
                                                                str = match[1];
                                                                const parts = str.split(" ");
                                                                const found = parts.filter((item) => !closure_1_0.includes(item));
                                                              }
                                                              return [];
                                                            }
                                                          };
                                                          closure_0 = undefined;
                                                          tmp2 = onInvalidUrl;
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
                                                                    const obj6 = closure_0(onLoadError[25]);
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
                                                                    const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                  closure_2_24(items.map((item) => {
                                                                    const str = closure_1_1(closure_1_3[27])(item);
                                                                    return "^" + str.replace(/\\\*/g, ".*");
                                                                  }));
                                                                  closure_2_22(true);
                                                                  c5 = 3;
                                                                  return { value: "IconComponent", done: null };
                                                                }
                                                              } catch (tmp10) {
                                                                c5 = 3;
                                                                throw tmp10;
                                                              }
                                                            }
                                                          });
                                                          tmp3 = (function fetchAndParseCSP() {
                                                            return closure_0(...arguments);
                                                          })();
                                                        }
                                                        return;
                                                      }
                                                    }
                                                  }
                                                }
                                                tmp50 = combined1;
                                              }
                                              class Se {
                                                constructor() {
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
                                              }
                                              cResult[50] = undefined;
                                              cResult[51] = tmp9;
                                              cResult[53] = tmp50;
                                            }
                                            let androidWebViewShellConfig = null;
                                            if (!tmp10) {
                                              class Oe {
                                                constructor() {
                                                  tmp = closure_14;
                                                  if (tmp) {
                                                    closure_0 = ["'self'"];
                                                    parseCsp = function parseCsp(arg0, str) {
                                                      const match = str.match(arg0);
                                                      if (null !== match) {
                                                        if (match.length >= 2) {
                                                          str = match[1];
                                                          const parts = str.split(" ");
                                                          const found = parts.filter((item) => !closure_1_0.includes(item));
                                                        }
                                                        return [];
                                                      }
                                                    };
                                                    closure_0 = undefined;
                                                    tmp2 = onInvalidUrl;
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
                                                              const obj6 = closure_0(onLoadError[25]);
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
                                                              const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                            closure_2_24(items.map((item) => {
                                                              const str = closure_1_1(closure_1_3[27])(item);
                                                              return "^" + str.replace(/\\\*/g, ".*");
                                                            }));
                                                            closure_2_22(true);
                                                            c5 = 3;
                                                            return { value: "IconComponent", done: null };
                                                          }
                                                        } catch (tmp10) {
                                                          c5 = 3;
                                                          throw tmp10;
                                                        }
                                                      }
                                                    });
                                                    tmp3 = (function fetchAndParseCSP() {
                                                      return closure_0(...arguments);
                                                    })();
                                                  }
                                                  return;
                                                }
                                              }
                                              if (null != tmp9) {
                                                class Oe {
                                                  constructor() {
                                                    tmp = closure_14;
                                                    if (tmp) {
                                                      closure_0 = ["'self'"];
                                                      parseCsp = function parseCsp(arg0, str) {
                                                        const match = str.match(arg0);
                                                        if (null !== match) {
                                                          if (match.length >= 2) {
                                                            str = match[1];
                                                            const parts = str.split(" ");
                                                            const found = parts.filter((item) => !closure_1_0.includes(item));
                                                          }
                                                          return [];
                                                        }
                                                      };
                                                      closure_0 = undefined;
                                                      tmp2 = onInvalidUrl;
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
                                                                const obj6 = closure_0(onLoadError[25]);
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
                                                                const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                              closure_2_24(items.map((item) => {
                                                                const str = closure_1_1(closure_1_3[27])(item);
                                                                return "^" + str.replace(/\\\*/g, ".*");
                                                              }));
                                                              closure_2_22(true);
                                                              c5 = 3;
                                                              return { value: "IconComponent", done: null };
                                                            }
                                                          } catch (tmp10) {
                                                            c5 = 3;
                                                            throw tmp10;
                                                          }
                                                        }
                                                      });
                                                      tmp3 = (function fetchAndParseCSP() {
                                                        return closure_0(...arguments);
                                                      })();
                                                    }
                                                    return;
                                                  }
                                                }
                                                if (null != tmp14) {
                                                  class Oe {
                                                    constructor() {
                                                      tmp = closure_14;
                                                      if (tmp) {
                                                        closure_0 = ["'self'"];
                                                        parseCsp = function parseCsp(arg0, str) {
                                                          const match = str.match(arg0);
                                                          if (null !== match) {
                                                            if (match.length >= 2) {
                                                              str = match[1];
                                                              const parts = str.split(" ");
                                                              const found = parts.filter((item) => !closure_1_0.includes(item));
                                                            }
                                                            return [];
                                                          }
                                                        };
                                                        closure_0 = undefined;
                                                        tmp2 = onInvalidUrl;
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
                                                                  const obj6 = closure_0(onLoadError[25]);
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
                                                                  const HTTP = tmp29(tmp30[26]).HTTP;
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
                                                                closure_2_24(items.map((item) => {
                                                                  const str = closure_1_1(closure_1_3[27])(item);
                                                                  return "^" + str.replace(/\\\*/g, ".*");
                                                                }));
                                                                closure_2_22(true);
                                                                c5 = 3;
                                                                return { value: "IconComponent", done: null };
                                                              }
                                                            } catch (tmp10) {
                                                              c5 = 3;
                                                              throw tmp10;
                                                            }
                                                          }
                                                        });
                                                        tmp3 = (function fetchAndParseCSP() {
                                                          return closure_0(...arguments);
                                                        })();
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  let obj6 = { iframeUrl: tmp9, shellFilePath: tmp14 };
                                                  androidWebViewShellConfig = obj8.getAndroidWebViewShellConfig(obj6);
                                                }
                                              }
                                            }
                                            cResult[47] = tmp9;
                                            class Se {
                                              constructor() {
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
                                            }
                                            cResult[49] = androidWebViewShellConfig;
                                            tmp44 = androidWebViewShellConfig;
                                          }
                                        }
                                        function we() {
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
                                        const items3 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
                                        class Se {
                                          constructor() {
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
                                        }
                                        cResult[43] = hasInvalidUrlError;
                                        cResult[44] = onInvalidUrl;
                                        cResult[46] = items3;
                                        tmp42 = items3;
                                        tmp41 = we;
                                      }
                                      function ye() {
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
                                      }
                                      const items4 = [hadInvalidUrlError, hasInvalidUrlError];
                                      cResult[38] = hadInvalidUrlError;
                                      class Se {
                                        constructor() {
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
                                      }
                                      cResult[39] = hasInvalidUrlError;
                                      cResult[40] = ye;
                                      cResult[41] = items4;
                                      tmp38 = ye;
                                    }
                                  }
                                  const items5 = [combined, stateFromStores, setHasInvalidUrlError];
                                  cResult[34] = combined;
                                  class Se {
                                    constructor() {
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
                                  }
                                  cResult[36] = setHasInvalidUrlError;
                                  cResult[37] = items5;
                                  tmp36 = items5;
                                }
                              }
                            }
                            class Se {
                              constructor() {
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
                            }
                            cResult[29] = combined;
                            cResult[30] = stateFromStores;
                            cResult[32] = tmp10;
                            cResult[33] = Se;
                            tmp35 = Se;
                          }
                        }
                      }
                    }
                    function fe() {
                      hadInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                      const obj = AnalyticsUtilsDefault;
                      const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                      obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                      onActivityCrash();
                    }
                    cResult[21] = activitySessionId;
                    cResult[23] = channelId;
                    cResult[24] = guildId;
                    cResult[26] = fe;
                    tmp30 = fe;
                  }
                }
              }
            }
            const items6 = [combined, tmp21, onLoadError, referrerPolicy, iframeId];
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
  function ne() {
    function loadHtml() {
      return closure_0(...arguments);
    }
    let closure_0 = onInvalidUrl(function*(arg0, value) {
      let v3;
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              iframeId = undefined;
              const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy };
              c2 = 1;
              c3 = 1;
              const obj5 = { value: applicationId(onLoadError[19])(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            iframeId = value;
            if (null != iframeId) {
              closure_1_16(iframeId);
            } else {
              c3();
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
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
  cResult[10] = ne;
  tmp25 = ne;
}) : (function BaseEmbeddedAppWebView(iframeId) {
  let _undefined;
  let activityUrl;
  let allowPopups;
  let assetLoaderConfig;
  let c14;
  let c16;
  let c23;
  let ignoreSilentHardwareSwitch;
  let obj8;
  let onActivityCrash;
  let queryParams;
  let str2;
  let tmp11;
  let tmp31;
  let tmp44;
  let tmp47;
  let tmp50;
  let tmp53;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp8;
  iframeId = iframeId.iframeId;
  let deepLinkQueryParams = iframeId.deepLinkQueryParams;
  if (deepLinkQueryParams === undefined) {
    deepLinkQueryParams = {};
  }
  const applicationId = iframeId.applicationId;
  ({ queryParams, onActivityCrash } = iframeId);
  const onLoadError = iframeId.onLoadError;
  const onInvalidUrl = iframeId.onInvalidUrl;
  const referrerPolicy = iframeId.referrerPolicy;
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
  allowFileAccess = undefined;
  c16 = undefined;
  let combined1;
  let closure_22;
  c23 = undefined;
  let first;
  let closure_25;
  let closure_26;
  let ref;
  let origin;
  let obj2 = isPipOrGridMode;
  let tmp2 = iframeId;
  let tmp3 = onLoadError;
  let tmp = setHasInvalidUrlError();
  const context = isPipOrGridMode.useContext(iframeId(onLoadError[13]).WebViewContext);
  let tmp5 = c16();
  const hasInvalidUrlError = tmp5.hasInvalidUrlError;
  setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp5.hadInvalidUrlError;
  let tmp6 = referrerPolicy;
  const tmp7 = referrerPolicy(isPipOrGridMode.useState(null), 2);
  [tmp8, c14] = tmp7;
  let items = [iframeId];
  const memo = isPipOrGridMode.useMemo(() => {
    const obj = WebView2;
    return obj.getWebViewProxy(iframeId);
  }, items);
  const tmp10 = referrerPolicy(isPipOrGridMode.useState(null), 2);
  [tmp11, c16] = tmp10;
  let rect = applicationId(onLoadError[15])();
  let obj3 = onActivityCrash(onLoadError[16]);
  let obj = { frame_id: iframeId, platform: iframeId(onLoadError[17]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj3.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  const tmp15 = applicationId(onLoadError[18])({ allowPopups });
  let closure_18 = tmp15;
  const uRLSearchParams = new URLSearchParams(obj);
  const combined = "" + activityUrl + "?" + uRLSearchParams;
  const items1 = [combined, tmp15, onLoadError, referrerPolicy, iframeId];
  const effect = isPipOrGridMode.useEffect(() => {
    function loadHtml() {
      return obj(...arguments);
    }
    let obj = function _loadHtml2() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let v3;
        if (c3 === 2) {
          c3 = 3;
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp;
                iframeId = undefined;
                const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy };
                c2 = 1;
                c3 = 1;
                const obj5 = { value: applicationId(onLoadError[19])(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              iframeId = value;
              if (null != iframeId) {
                closure_1_16(iframeId);
              } else {
                c3();
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp16) {
            c3 = 3;
            throw tmp16;
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
  let androidWebViewShellConfig = null;
  if (!allowFileAccess) {
    androidWebViewShellConfig = null;
    if (null != tmp8) {
      androidWebViewShellConfig = null;
      if (null != tmp11) {
        let obj4 = { iframeUrl: tmp8, shellFilePath: tmp11 };
        const tmp2Result = tmp2(tmp3[24]);
        androidWebViewShellConfig = tmp2Result.getAndroidWebViewShellConfig(obj4);
      }
    }
  }
  combined1 = null;
  let tmp28 = null;
  if (null != tmp8) {
    if (allowFileAccess) {
      let _HermesInternal = HermesInternal;
      let str = "file://";
      combined1 = "file://" + tmp11;
    } else {
      combined1 = undefined;
      if (androidWebViewShellConfig != null) {
        combined1 = androidWebViewShellConfig.uri;
      }
      if (combined1 == null) {
        combined1 = null;
      }
    }
    tmp28 = combined1;
  }
  closure_22 = tmp26;
  let tmp6Result = tmp6(obj2.useState(false), 2);
  [tmp31, c23] = tmp6Result;
  const tmp6Result2 = tmp6(obj2.useState([]), 2);
  first = tmp6Result2[0];
  closure_25 = tmp6Result2[1];
  const items9 = [applicationId, tmp26];
  const effect4 = obj2.useEffect(() => {
    function fetchAndParseCSP() {
      return obj(...arguments);
    }
    const tmp = closure_22;
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
                  const obj6 = closure_2_0(onLoadError[25]);
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
                  const HTTP = tmp29(tmp30[26]).HTTP;
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
                closure_1_25(items.map((item) => {
                  const str = closure_1_1(closure_1_3[27])(item);
                  return "^" + str.replace(/\\\*/g, ".*");
                }));
                closure_1_23(true);
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
  const items10 = [tmp28, first];
  let tmp36 = null != tmp28;
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
    tmp36 = null != tmp8;
  }
  if (tmp36) {
    tmp36 = null != tmp11;
  }
  closure_26 = tmp36;
  ref = obj2.useRef(null);
  origin = undefined;
  if (tmp8 != null) {
    origin = tmp8.origin;
  }
  const items11 = [rect, isPipOrGridMode, tmp36, memo, origin, safeAreasConfig];
  const effect5 = obj2.useEffect(() => {
    function tryInjectJavaScript() {
      return obj(...arguments);
    }
    const tmp = closure_26;
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
                let closure_0;
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
                    let closure_4 = tmp4;
                    closure_0 = undefined;
                    const obj8 = closure_1_15;
                    if (null != closure_1_15) {
                      if (null != closure_1_28) {
                        const tmp14 = closure_6;
                        if (tmp14) {
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
                        const rect1 = { left: memo(left, c0), right: memo(right, c1), top: memo(top, c2), bottom: memo(bottom, c3) };
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
                        const obj4 = { type: "safeAreaUpdateEvent", data: obj5 };
                        obj5 = { insets: rect1 };
                        const tmp30 = applicationId(onLoadError[29])(obj4, tmp13);
                        closure_0 = tmp30;
                        c7 = 1;
                        c8 = 2;
                        c9 = 1;
                        const obj6 = { value: obj8.injectJavaScript(tmp30), done: false };
                        return obj6;
                      }
                    }
                  }
                } else if (1 === c8) {
                  c7 = 0;
                  if (null != ref.current) {
                    const current = ref.current;
                    current.injectJavaScript(closure_0);
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
  if (null != tmp28) {
    if (null != tmp8) {
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
      let obj6 = { insets: rect1, messageForDisallowedNavigationError: tmp53 };
      tmp53 = undefined;
      const createActivityFrameInjectedJavaScript = tmp2(tmp3[19]).createActivityFrameInjectedJavaScript;
      tmp2(tmp3[19]);
      if (!allowFileAccess) {
        tmp53 = activitySessionId;
      }
      const activityFrameInjectedJavaScript = createActivityFrameInjectedJavaScript(obj6);
      let tmp56Result = null;
      if (null != tmp11) {
        const obj7 = { style: tmp.webView, ref, source: obj8, androidAssetLoaderConfig: assetLoaderConfig, mixedContentMode: str2, androidInjectedJavaScriptForOrigins: tmp59, originWhitelist: ["*"], overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: callback, onContentProcessDidTerminate: callback2, onRenderProcessGone: callback1, webViewKey: iframeId, temporaryParentNodeTag: context, messagingWithWebViewKeyEnabled: true, allowFileAccess, injectedJavaScript: tmp60, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: tmp61, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
        obj8 = { uri: tmp28 };
        assetLoaderConfig = undefined;
        const WebView = tmp2(tmp3[14]).WebView;
        const tmp56 = hasInvalidUrlError;
        if (androidWebViewShellConfig != null) {
          assetLoaderConfig = androidWebViewShellConfig.assetLoaderConfig;
        }
        let allowMixedContent;
        if (androidWebViewShellConfig != null) {
          allowMixedContent = androidWebViewShellConfig.allowMixedContent;
        }
        str2 = "never";
        let flag = true;
        if (true === allowMixedContent) {
          str2 = "always";
        }
        tmp59 = undefined;
        if (null != androidWebViewShellConfig) {
          tmp59 = { script: activityFrameInjectedJavaScript, allowedOriginRules: androidWebViewShellConfig.documentStartOriginRules };
          const obj9 = { script: activityFrameInjectedJavaScript, allowedOriginRules: androidWebViewShellConfig.documentStartOriginRules };
        }
        tmp60 = undefined;
        if (allowFileAccess) {
          tmp60 = activityFrameInjectedJavaScript;
        }
        tmp61 = undefined;
        if (allowFileAccess) {
          tmp61 = callback3;
        }
        tmp56Result = tmp56(WebView, obj7);
      }
      return tmp56Result;
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasInvalidUrlErrorState() {
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
