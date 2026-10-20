// Module ID: 11373
// Function ID: 11374
// Name: BaseEmbeddedAppWebView
// Dependencies: [5, 32, 19, 17, 5586, 1087, 2026, 21, 4945, 3, 1384, 558, 576, 11374, 7855, 11375, 11376, 1383, 11360, 11377, 11378, 11370, 1267, 573, 5866, 1128, 11379, 5584, 1297, 11380, 1386, 11061, 6611, 2]

// Module 11373 (BaseEmbeddedAppWebView)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl4 from "intl" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import URLUtilsDefault from "URLUtils" /* 1386 */;
import Constants2 from "Constants" /* 2026 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5866 */;
import usePreviousDefault from "usePrevious" /* 6611 */;
import WebView2 from "WebView" /* 7855 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5586 */;
import createStyles from "createStyles" /* 4945 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, c4, c5, c7, c8, c9, constants, content_security_policy;

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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseEmbeddedAppWebView(iframeId) {
  let allowPopups;
  let applicationId;
  let closure_15;
  let deepLinkQueryParams;
  let hasInvalidUrlError;
  let ignoreSilentHardwareSwitch;
  let onActivityCrash;
  let queryParams;
  let referrerPolicy;
  let safeAreasConfig;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp22;
  let tmp9;
  let tmp = iframeId;
  let tmp2 = onActivityCrash;
  let obj = iframeId(onActivityCrash[12]);
  const cResult = obj.c(111);
  iframeId = iframeId.iframeId;
  let shellBridgeSecret = iframeId.shellBridgeSecret;
  ({ deepLinkQueryParams, applicationId } = iframeId);
  ({ queryParams, onActivityCrash } = iframeId);
  const onLoadError = iframeId.onLoadError;
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
  let tmp4 = hasInvalidUrlError();
  let obj2 = referrerPolicy;
  const context = referrerPolicy.useContext(tmp(tmp2[13]).WebViewContext);
  let tmp6 = closure_16();
  hasInvalidUrlError = tmp6.hasInvalidUrlError;
  const setHasInvalidUrlError = tmp6.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp6.hadInvalidUrlError;
  const tmp7 = onInvalidUrl;
  let tmp8 = onInvalidUrl(referrerPolicy.useState(null), 2);
  [tmp9, tmp10] = tmp8;
  getSafeArea = tmp10;
  if (cResult[0] !== iframeId) {
    const tmpResult = tmp(tmp2[14]);
    const webViewProxy = tmpResult.getWebViewProxy(iframeId);
    cResult[0] = iframeId;
    cResult[1] = webViewProxy;
    tmp11 = webViewProxy;
  } else {
    tmp11 = cResult[1];
  }
  closure_16 = tmp11;
  [tmp14, tmp15] = tmp7(obj2.useState(null), 2);
  let closure_17 = tmp15;
  const tmp16 = shellBridgeSecret;
  tmp7(obj2.useState(null), 2);
  const tmp17 = shellBridgeSecret(tmp2[15])();
  let closure_18 = tmp17;
  const tmpResult3 = tmp(tmp2[16]);
  const embeddedAppShimVersion = tmpResult3.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj5 = applicationId(tmp2[17]);
  let obj3 = { frame_id: iframeId, platform: tmp(tmp2[18]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj5.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj3[tmp(tmp2[19]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  if (cResult[2] !== allowPopups) {
    let obj4 = { allowPopups };
    const tmp23 = tmp16(tmp2[20])(obj4);
    cResult[2] = allowPopups;
    cResult[3] = tmp23;
    tmp22 = tmp23;
  } else {
    tmp22 = cResult[3];
  }
  let closure_20 = tmp22;
  const uRLSearchParams = new URLSearchParams(obj3);
  const combined = "" + activityUrl + "?" + uRLSearchParams;
  if (cResult[4] === iframeId) {
    if (cResult[5] === tmp22) {
      if (cResult[6] === combined) {
        if (cResult[7] === onLoadError) {
          if (cResult[8] === referrerPolicy) {
            if (cResult[9] === tmp15) {
              if (cResult[10] === shellBridgeSecret) {
                let tmp26;
                if (cResult[11] === embeddedAppShimVersion) {
                  tmp26 = cResult[12];
                }
                if (cResult[13] === iframeId) {
                  if (cResult[14] === tmp22) {
                    if (cResult[15] === combined) {
                      if (cResult[16] === onLoadError) {
                        if (cResult[17] === referrerPolicy) {
                          if (cResult[18] === shellBridgeSecret) {
                            let tmp27;
                            if (cResult[19] === embeddedAppShimVersion) {
                              tmp27 = cResult[20];
                            }
                            const effect = obj2.useEffect(tmp26, tmp27);
                            if (cResult[21] !== applicationId) {
                              function ce(nativeEvent) {
                                setHasInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                              }
                              cResult[21] = applicationId;
                              cResult[22] = ce;
                              let tmp29 = ce;
                            } else {
                              tmp29 = cResult[22];
                            }
                            if (cResult[23] !== applicationId) {
                              function fe(nativeEvent) {
                                setHasInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                              }
                              cResult[23] = applicationId;
                              cResult[24] = fe;
                              let tmp30 = fe;
                            } else {
                              tmp30 = cResult[24];
                            }
                            if (cResult[25] === activitySessionId) {
                              if (cResult[26] === applicationId) {
                                if (cResult[27] === channelId) {
                                  if (cResult[28] === guildId) {
                                    let tmp33;
                                    let tmp32;
                                    if (cResult[29] === onActivityCrash) {
                                      let tmp31 = cResult[30];
                                    }
                                    const _Symbol = Symbol;
                                    let str = "react.memo_cache_sentinel";
                                    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                                      let items = [safeAreasConfig];
                                      class Se {
                                        constructor() {
                                          return safeAreasConfig.getUseActivityUrlOverride();
                                        }
                                      }
                                      cResult[31] = items;
                                      cResult[32] = Se;
                                      tmp33 = Se;
                                      tmp32 = items;
                                    } else {
                                      tmp32 = cResult[31];
                                      tmp33 = cResult[32];
                                    }
                                    const tmpResult4 = tmp(tmp2[23]);
                                    const stateFromStores = tmpResult4.useStateFromStores(tmp32, tmp33);
                                    if (cResult[33] === combined) {
                                      if (cResult[34] === stateFromStores) {
                                        if (cResult[35] === setHasInvalidUrlError) {
                                          let tmp36;
                                          if (cResult[36] === tmp10) {
                                            tmp36 = cResult[37];
                                          }
                                          if (cResult[38] === combined) {
                                            if (cResult[39] === stateFromStores) {
                                              let tmp37;
                                              if (cResult[40] === setHasInvalidUrlError) {
                                                tmp37 = cResult[41];
                                              }
                                              const effect1 = obj2.useEffect(tmp36, tmp37);
                                              if (cResult[42] === hadInvalidUrlError) {
                                                let tmp39;
                                                let tmp40;
                                                if (cResult[43] === hasInvalidUrlError) {
                                                  tmp39 = cResult[44];
                                                  tmp40 = cResult[45];
                                                }
                                                const effect2 = obj2.useEffect(tmp39, tmp40);
                                                if (cResult[46] === hadInvalidUrlError) {
                                                  if (cResult[47] === hasInvalidUrlError) {
                                                    let tmp43;
                                                    let tmp44;
                                                    if (cResult[48] === onInvalidUrl) {
                                                      tmp43 = cResult[49];
                                                      tmp44 = cResult[50];
                                                    }
                                                    const effect3 = obj2.useEffect(tmp43, tmp44);
                                                    if (cResult[51] === tmp9) {
                                                      let tmp46;
                                                      let combined1;
                                                      if (cResult[52] === tmp14) {
                                                        tmp46 = cResult[53];
                                                      }
                                                      const tmp48 = cResult[54];
                                                      class Ae {
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
                                                      if (tmp48 === undefined) {
                                                        if (cResult[55] === tmp9) {
                                                          let tmp57;
                                                          let tmp61;
                                                          let tmp60;
                                                          if (cResult[56] === tmp14) {
                                                            combined1 = cResult[57];
                                                          }
                                                          let flag = false;
                                                          const tmp7Result3 = tmp7(obj2.useState(false), 2);
                                                          class Ae {
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
                                                          if (cResult[58] === Symbol.for("react.memo_cache_sentinel")) {
                                                            const items1 = [];
                                                            cResult[58] = items1;
                                                            class Ae {
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
                                                            tmp57 = cResult[58];
                                                          }
                                                          const tmp7Result4 = tmp7(obj2.useState(tmp57), 2);
                                                          const first1 = tmp7Result4[0];
                                                          let closure_26 = tmp7Result4[1];
                                                          if (cResult[59] !== applicationId) {
                                                            class Le {
                                                              constructor() {
                                                                tmp = hadInvalidUrlError;
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
                                                                  tmp2 = onLoadError;
                                                                  closure_0 = onLoadError(function*(arg0, value) {
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
                                                                            const obj6 = closure_0(onActivityCrash[27]);
                                                                            const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                            const tmp29 = closure_0;
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            const tmp30 = onActivityCrash;
                                                                            const tmp31 = applicationId;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              let str = ".discordsays.com";
                                                                              closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                            }
                                                                            const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                          closure_2_26(items.map((item) => {
                                                                            const str = closure_1_1(closure_1_3[29])(item);
                                                                            return "^" + str.replace(/\\\*/g, ".*");
                                                                          }));
                                                                          closure_2_24(true);
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
                                                            const items2 = [applicationId, ];
                                                            class Ae {
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
                                                            items2[1] = hadInvalidUrlError;
                                                            cResult[59] = applicationId;
                                                            cResult[60] = Le;
                                                            cResult[61] = items2;
                                                            tmp61 = items2;
                                                            tmp60 = Le;
                                                          } else {
                                                            class Le {
                                                              constructor() {
                                                                tmp = hadInvalidUrlError;
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
                                                                  tmp2 = onLoadError;
                                                                  closure_0 = onLoadError(function*(arg0, value) {
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
                                                                            const obj6 = closure_0(onActivityCrash[27]);
                                                                            const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                            const tmp29 = closure_0;
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            const tmp30 = onActivityCrash;
                                                                            const tmp31 = applicationId;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              let str = ".discordsays.com";
                                                                              closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                            }
                                                                            const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                          closure_2_26(items.map((item) => {
                                                                            const str = closure_1_1(closure_1_3[29])(item);
                                                                            return "^" + str.replace(/\\\*/g, ".*");
                                                                          }));
                                                                          closure_2_24(true);
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
                                                            tmp61 = cResult[61];
                                                          }
                                                          const effect4 = obj2.useEffect(tmp60, tmp61);
                                                          if (cResult[62] === first1) {
                                                            class Le {
                                                              constructor() {
                                                                tmp = hadInvalidUrlError;
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
                                                                  tmp2 = onLoadError;
                                                                  closure_0 = onLoadError(function*(arg0, value) {
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
                                                                            const obj6 = closure_0(onActivityCrash[27]);
                                                                            const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                            const tmp29 = closure_0;
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            const tmp30 = onActivityCrash;
                                                                            const tmp31 = applicationId;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              let str = ".discordsays.com";
                                                                              closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                            }
                                                                            const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                          closure_2_26(items.map((item) => {
                                                                            const str = closure_1_1(closure_1_3[29])(item);
                                                                            return "^" + str.replace(/\\\*/g, ".*");
                                                                          }));
                                                                          closure_2_24(true);
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
                                                            let closure_27 = tmp64;
                                                            class Ae {
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
                                                            let closure_28 = tmp65;
                                                            if (tmp9 != null) {
                                                              class Le {
                                                                constructor() {
                                                                  tmp = hadInvalidUrlError;
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
                                                                    tmp2 = onLoadError;
                                                                    closure_0 = onLoadError(function*(arg0, value) {
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
                                                                              const obj6 = closure_0(onActivityCrash[27]);
                                                                              const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                              const tmp29 = closure_0;
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              const tmp30 = onActivityCrash;
                                                                              const tmp31 = applicationId;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                let str = ".discordsays.com";
                                                                                closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                              }
                                                                              const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                            closure_2_26(items.map((item) => {
                                                                              const str = closure_1_1(closure_1_3[29])(item);
                                                                              return "^" + str.replace(/\\\*/g, ".*");
                                                                            }));
                                                                            closure_2_24(true);
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
                                                            let c29 = tmp66;
                                                            if (cResult[65] === undefined) {
                                                              class Le {
                                                                constructor() {
                                                                  tmp = hadInvalidUrlError;
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
                                                                    tmp2 = onLoadError;
                                                                    closure_0 = onLoadError(function*(arg0, value) {
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
                                                                              const obj6 = closure_0(onActivityCrash[27]);
                                                                              const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                              const tmp29 = closure_0;
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              const tmp30 = onActivityCrash;
                                                                              const tmp31 = applicationId;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                let str = ".discordsays.com";
                                                                                closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                              }
                                                                              const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                            closure_2_26(items.map((item) => {
                                                                              const str = closure_1_1(closure_1_3[29])(item);
                                                                              return "^" + str.replace(/\\\*/g, ".*");
                                                                            }));
                                                                            closure_2_24(true);
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
                                                            cResult[66] = tmp17;
                                                            cResult[67] = isPipOrGridMode;
                                                            if (safeAreasConfig != null) {
                                                              class Le {
                                                                constructor() {
                                                                  tmp = hadInvalidUrlError;
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
                                                                    tmp2 = onLoadError;
                                                                    closure_0 = onLoadError(function*(arg0, value) {
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
                                                                              const obj6 = closure_0(onActivityCrash[27]);
                                                                              const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                              const tmp29 = closure_0;
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              const tmp30 = onActivityCrash;
                                                                              const tmp31 = applicationId;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                let str = ".discordsays.com";
                                                                                closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                              }
                                                                              const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                            closure_2_26(items.map((item) => {
                                                                              const str = closure_1_1(closure_1_3[29])(item);
                                                                              return "^" + str.replace(/\\\*/g, ".*");
                                                                            }));
                                                                            closure_2_24(true);
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
                                                            cResult[68] = undefined;
                                                            if (safeAreasConfig != null) {
                                                              class Le {
                                                                constructor() {
                                                                  tmp = hadInvalidUrlError;
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
                                                                    tmp2 = onLoadError;
                                                                    closure_0 = onLoadError(function*(arg0, value) {
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
                                                                              const obj6 = closure_0(onActivityCrash[27]);
                                                                              const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                              const tmp29 = closure_0;
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              const tmp30 = onActivityCrash;
                                                                              const tmp31 = applicationId;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                let str = ".discordsays.com";
                                                                                closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                              }
                                                                              const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                            closure_2_26(items.map((item) => {
                                                                              const str = closure_1_1(closure_1_3[29])(item);
                                                                              return "^" + str.replace(/\\\*/g, ".*");
                                                                            }));
                                                                            closure_2_24(true);
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
                                                            cResult[69] = undefined;
                                                            if (safeAreasConfig != null) {
                                                              class Le {
                                                                constructor() {
                                                                  tmp = hadInvalidUrlError;
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
                                                                    tmp2 = onLoadError;
                                                                    closure_0 = onLoadError(function*(arg0, value) {
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
                                                                              const obj6 = closure_0(onActivityCrash[27]);
                                                                              const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                              const tmp29 = closure_0;
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              const tmp30 = onActivityCrash;
                                                                              const tmp31 = applicationId;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                let str = ".discordsays.com";
                                                                                closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                              }
                                                                              const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                            closure_2_26(items.map((item) => {
                                                                              const str = closure_1_1(closure_1_3[29])(item);
                                                                              return "^" + str.replace(/\\\*/g, ".*");
                                                                            }));
                                                                            closure_2_24(true);
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
                                                            cResult[70] = undefined;
                                                            if (safeAreasConfig != null) {
                                                              class Le {
                                                                constructor() {
                                                                  tmp = hadInvalidUrlError;
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
                                                                    tmp2 = onLoadError;
                                                                    closure_0 = onLoadError(function*(arg0, value) {
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
                                                                              const obj6 = closure_0(onActivityCrash[27]);
                                                                              const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                              const tmp29 = closure_0;
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              const tmp30 = onActivityCrash;
                                                                              const tmp31 = applicationId;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                let str = ".discordsays.com";
                                                                                closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                              }
                                                                              const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                            closure_2_26(items.map((item) => {
                                                                              const str = closure_1_1(closure_1_3[29])(item);
                                                                              return "^" + str.replace(/\\\*/g, ".*");
                                                                            }));
                                                                            closure_2_24(true);
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
                                                            class Ne {
                                                              constructor() {
                                                                function tryInjectJavaScript() {
                                                                  return closure_0(...arguments);
                                                                }
                                                                const tmp = closure_27;
                                                                if (tmp) {
                                                                  const tmp3 = null;
                                                                  if (null != closure_16) {
                                                                    const tmp4 = onLoadError;
                                                                    let closure_0 = onLoadError(function*(arg0, value) {
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
                                                                              const obj8 = closure_1_16;
                                                                              if (null != closure_1_16) {
                                                                                if (null != closure_1_29) {
                                                                                  let rect;
                                                                                  const tmp14 = c7;
                                                                                  if (tmp14) {
                                                                                    rect = { top: 0, bottom: 0, left: 0, right: 0 };
                                                                                  } else {
                                                                                    rect = closure_1_18;
                                                                                  }
                                                                                  const rect2 = c8;
                                                                                  let left;
                                                                                  if (c8 != null) {
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
                                                                                  const rect1 = { left: tmp10(left, c0), right: tmp10(right, c1), top: tmp10(top, c2), bottom: tmp10(bottom, c3) };
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
                                                                                  const tmp30 = shellBridgeSecret(onActivityCrash[31])(obj4, tmp13);
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
                                                                    tryInjectJavaScript();
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            cResult[71] = undefined;
                                                            cResult[72] = null != tmp50 && null != tmp9 && null != tmp14;
                                                            cResult[73] = tmp11;
                                                            cResult[74] = Ne;
                                                          }
                                                          function $e(mainDocumentURL) {
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
                                                          cResult[62] = first1;
                                                          cResult[63] = tmp50;
                                                          cResult[64] = $e;
                                                        }
                                                      }
                                                      combined1 = null;
                                                      if (null != tmp9) {
                                                        class Le {
                                                          constructor() {
                                                            tmp = hadInvalidUrlError;
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
                                                              tmp2 = onLoadError;
                                                              closure_0 = onLoadError(function*(arg0, value) {
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
                                                                        const obj6 = closure_0(onActivityCrash[27]);
                                                                        const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                        const tmp29 = closure_0;
                                                                        closure_0 = nonTestModeUrlForApplication;
                                                                        const tmp30 = onActivityCrash;
                                                                        const tmp31 = applicationId;
                                                                        if (nonTestModeUrlForApplication == null) {
                                                                          const _HermesInternal = HermesInternal;
                                                                          let str = ".discordsays.com";
                                                                          closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                        }
                                                                        const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                      closure_2_26(items.map((item) => {
                                                                        const str = closure_1_1(closure_1_3[29])(item);
                                                                        return "^" + str.replace(/\\\*/g, ".*");
                                                                      }));
                                                                      closure_2_24(true);
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
                                                        if (tmp52) {
                                                          class Le {
                                                            constructor() {
                                                              tmp = hadInvalidUrlError;
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
                                                                tmp2 = onLoadError;
                                                                closure_0 = onLoadError(function*(arg0, value) {
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
                                                                          const obj6 = closure_0(onActivityCrash[27]);
                                                                          const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                          const tmp29 = closure_0;
                                                                          closure_0 = nonTestModeUrlForApplication;
                                                                          const tmp30 = onActivityCrash;
                                                                          const tmp31 = applicationId;
                                                                          if (nonTestModeUrlForApplication == null) {
                                                                            const _HermesInternal = HermesInternal;
                                                                            let str = ".discordsays.com";
                                                                            closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                          }
                                                                          const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                        closure_2_26(items.map((item) => {
                                                                          const str = closure_1_1(closure_1_3[29])(item);
                                                                          return "^" + str.replace(/\\\*/g, ".*");
                                                                        }));
                                                                        closure_2_24(true);
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
                                                          class Le {
                                                            constructor() {
                                                              tmp = hadInvalidUrlError;
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
                                                                tmp2 = onLoadError;
                                                                closure_0 = onLoadError(function*(arg0, value) {
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
                                                                          const obj6 = closure_0(onActivityCrash[27]);
                                                                          const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                          const tmp29 = closure_0;
                                                                          closure_0 = nonTestModeUrlForApplication;
                                                                          const tmp30 = onActivityCrash;
                                                                          const tmp31 = applicationId;
                                                                          if (nonTestModeUrlForApplication == null) {
                                                                            const _HermesInternal = HermesInternal;
                                                                            let str = ".discordsays.com";
                                                                            closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                          }
                                                                          const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                        closure_2_26(items.map((item) => {
                                                                          const str = closure_1_1(closure_1_3[29])(item);
                                                                          return "^" + str.replace(/\\\*/g, ".*");
                                                                        }));
                                                                        closure_2_24(true);
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
                                                          if (tmp46 != null) {
                                                            class Le {
                                                              constructor() {
                                                                tmp = hadInvalidUrlError;
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
                                                                  tmp2 = onLoadError;
                                                                  closure_0 = onLoadError(function*(arg0, value) {
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
                                                                            const obj6 = closure_0(onActivityCrash[27]);
                                                                            const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                            const tmp29 = closure_0;
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            const tmp30 = onActivityCrash;
                                                                            const tmp31 = applicationId;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              let str = ".discordsays.com";
                                                                              closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                            }
                                                                            const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                          closure_2_26(items.map((item) => {
                                                                            const str = closure_1_1(closure_1_3[29])(item);
                                                                            return "^" + str.replace(/\\\*/g, ".*");
                                                                          }));
                                                                          closure_2_24(true);
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
                                                            class Le {
                                                              constructor() {
                                                                tmp = hadInvalidUrlError;
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
                                                                  tmp2 = onLoadError;
                                                                  closure_0 = onLoadError(function*(arg0, value) {
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
                                                                            const obj6 = closure_0(onActivityCrash[27]);
                                                                            const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                            const tmp29 = closure_0;
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            const tmp30 = onActivityCrash;
                                                                            const tmp31 = applicationId;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              let str = ".discordsays.com";
                                                                              closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                            }
                                                                            const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                          closure_2_26(items.map((item) => {
                                                                            const str = closure_1_1(closure_1_3[29])(item);
                                                                            return "^" + str.replace(/\\\*/g, ".*");
                                                                          }));
                                                                          closure_2_24(true);
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
                                                        class Ae {
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
                                                      if (tmp46 != null) {
                                                        class Le {
                                                          constructor() {
                                                            tmp = hadInvalidUrlError;
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
                                                              tmp2 = onLoadError;
                                                              closure_0 = onLoadError(function*(arg0, value) {
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
                                                                        const obj6 = closure_0(onActivityCrash[27]);
                                                                        const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                        const tmp29 = closure_0;
                                                                        closure_0 = nonTestModeUrlForApplication;
                                                                        const tmp30 = onActivityCrash;
                                                                        const tmp31 = applicationId;
                                                                        if (nonTestModeUrlForApplication == null) {
                                                                          const _HermesInternal = HermesInternal;
                                                                          let str = ".discordsays.com";
                                                                          closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                        }
                                                                        const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                      closure_2_26(items.map((item) => {
                                                                        const str = closure_1_1(closure_1_3[29])(item);
                                                                        return "^" + str.replace(/\\\*/g, ".*");
                                                                      }));
                                                                      closure_2_24(true);
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
                                                      cResult[54] = undefined;
                                                      cResult[55] = tmp9;
                                                      cResult[56] = tmp14;
                                                      cResult[57] = null;
                                                    }
                                                    class Ae {
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
                                                    let androidWebViewShellConfig = null;
                                                    if (!hadInvalidUrlError) {
                                                      class Le {
                                                        constructor() {
                                                          tmp = hadInvalidUrlError;
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
                                                            tmp2 = onLoadError;
                                                            closure_0 = onLoadError(function*(arg0, value) {
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
                                                                      const obj6 = closure_0(onActivityCrash[27]);
                                                                      const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                      const tmp29 = closure_0;
                                                                      closure_0 = nonTestModeUrlForApplication;
                                                                      const tmp30 = onActivityCrash;
                                                                      const tmp31 = applicationId;
                                                                      if (nonTestModeUrlForApplication == null) {
                                                                        const _HermesInternal = HermesInternal;
                                                                        let str = ".discordsays.com";
                                                                        closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                      }
                                                                      const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                    closure_2_26(items.map((item) => {
                                                                      const str = closure_1_1(closure_1_3[29])(item);
                                                                      return "^" + str.replace(/\\\*/g, ".*");
                                                                    }));
                                                                    closure_2_24(true);
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
                                                        class Le {
                                                          constructor() {
                                                            tmp = hadInvalidUrlError;
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
                                                              tmp2 = onLoadError;
                                                              closure_0 = onLoadError(function*(arg0, value) {
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
                                                                        const obj6 = closure_0(onActivityCrash[27]);
                                                                        const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                        const tmp29 = closure_0;
                                                                        closure_0 = nonTestModeUrlForApplication;
                                                                        const tmp30 = onActivityCrash;
                                                                        const tmp31 = applicationId;
                                                                        if (nonTestModeUrlForApplication == null) {
                                                                          const _HermesInternal = HermesInternal;
                                                                          let str = ".discordsays.com";
                                                                          closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                        }
                                                                        const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                      closure_2_26(items.map((item) => {
                                                                        const str = closure_1_1(closure_1_3[29])(item);
                                                                        return "^" + str.replace(/\\\*/g, ".*");
                                                                      }));
                                                                      closure_2_24(true);
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
                                                          class Le {
                                                            constructor() {
                                                              tmp = hadInvalidUrlError;
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
                                                                tmp2 = onLoadError;
                                                                closure_0 = onLoadError(function*(arg0, value) {
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
                                                                          const obj6 = closure_0(onActivityCrash[27]);
                                                                          const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(applicationId);
                                                                          const tmp29 = closure_0;
                                                                          closure_0 = nonTestModeUrlForApplication;
                                                                          const tmp30 = onActivityCrash;
                                                                          const tmp31 = applicationId;
                                                                          if (nonTestModeUrlForApplication == null) {
                                                                            const _HermesInternal = HermesInternal;
                                                                            let str = ".discordsays.com";
                                                                            closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                          }
                                                                          const HTTP = tmp29(tmp30[28]).HTTP;
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
                                                                        closure_2_26(items.map((item) => {
                                                                          const str = closure_1_1(closure_1_3[29])(item);
                                                                          return "^" + str.replace(/\\\*/g, ".*");
                                                                        }));
                                                                        closure_2_24(true);
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
                                                          let obj6 = { iframeUrl: tmp9, shellFilePath: null };
                                                          class Ae {
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
                                                          androidWebViewShellConfig = obj9.getAndroidWebViewShellConfig(obj6);
                                                        }
                                                      }
                                                    }
                                                    cResult[51] = tmp9;
                                                    cResult[52] = tmp14;
                                                    cResult[53] = androidWebViewShellConfig;
                                                    tmp46 = androidWebViewShellConfig;
                                                  }
                                                }
                                                class Ae {
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
                                                cResult[46] = hadInvalidUrlError;
                                                cResult[47] = hasInvalidUrlError;
                                                cResult[48] = onInvalidUrl;
                                                cResult[49] = Ae;
                                                cResult[50] = items3;
                                                tmp44 = items3;
                                                tmp43 = Ae;
                                              }
                                              class Se {
                                                constructor() {
                                                  return safeAreasConfig.getUseActivityUrlOverride();
                                                }
                                              }
                                              const items4 = [hadInvalidUrlError, hasInvalidUrlError];
                                              cResult[42] = hadInvalidUrlError;
                                              cResult[43] = hasInvalidUrlError;
                                              cResult[44] = tmp41;
                                              cResult[45] = items4;
                                              tmp40 = items4;
                                              tmp39 = tmp41;
                                            }
                                          }
                                          const items5 = [, , ];
                                          class Se {
                                            constructor() {
                                              return safeAreasConfig.getUseActivityUrlOverride();
                                            }
                                          }
                                          items5[1] = stateFromStores;
                                          items5[2] = setHasInvalidUrlError;
                                          cResult[38] = combined;
                                          cResult[39] = stateFromStores;
                                          cResult[40] = setHasInvalidUrlError;
                                          cResult[41] = items5;
                                          tmp37 = items5;
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
                                    cResult[33] = combined;
                                    cResult[34] = stateFromStores;
                                    cResult[35] = setHasInvalidUrlError;
                                    cResult[36] = tmp10;
                                    cResult[37] = be;
                                    tmp36 = be;
                                  }
                                }
                              }
                            }
                            function ve() {
                              setHasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                              const obj = AnalyticsUtilsDefault;
                              const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                              obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                              onActivityCrash();
                            }
                            cResult[25] = activitySessionId;
                            cResult[26] = applicationId;
                            cResult[27] = channelId;
                            cResult[28] = guildId;
                            cResult[29] = onActivityCrash;
                            cResult[30] = ve;
                            tmp31 = ve;
                          }
                        }
                      }
                    }
                  }
                }
                const items6 = [, tmp22, onLoadError, referrerPolicy, iframeId, embeddedAppShimVersion, shellBridgeSecret];
                cResult[13] = iframeId;
                cResult[14] = tmp22;
                cResult[15] = combined;
                cResult[16] = onLoadError;
                cResult[17] = referrerPolicy;
                cResult[18] = shellBridgeSecret;
                cResult[19] = embeddedAppShimVersion;
                cResult[20] = items6;
                tmp27 = items6;
              }
            }
          }
        }
      }
    }
  }
  function oe() {
    function loadHtml() {
      return closure_0(...arguments);
    }
    let closure_0 = onLoadError(function*(arg0, value) {
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
              shellBridgeSecret = tmp;
              iframeId = undefined;
              const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy, shimVersion, shellBridgeSecret };
              c2 = 1;
              c3 = 1;
              const obj5 = { value: shellBridgeSecret(onActivityCrash[21])(obj4), done: false };
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
              closure_1_17(iframeId);
            } else {
              onLoadError();
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
  cResult[5] = tmp22;
  cResult[6] = combined;
  cResult[7] = onLoadError;
  cResult[8] = referrerPolicy;
  cResult[9] = tmp15;
  cResult[10] = shellBridgeSecret;
  cResult[11] = embeddedAppShimVersion;
  cResult[12] = oe;
  tmp26 = oe;
}) : (function BaseEmbeddedAppWebView(iframeId) {
  let _undefined;
  let activityUrl;
  let allowPopups;
  let assetLoaderConfig;
  let c15;
  let c17;
  let c25;
  let ignoreSilentHardwareSwitch;
  let obj9;
  let onActivityCrash;
  let queryParams;
  let str2;
  let tmp11;
  let tmp32;
  let tmp45;
  let tmp48;
  let tmp51;
  let tmp54;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp8;
  iframeId = iframeId.iframeId;
  let shellBridgeSecret = iframeId.shellBridgeSecret;
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
  let hasInvalidUrlError;
  c15 = undefined;
  let memo;
  c17 = undefined;
  let combined1;
  let closure_24;
  c25 = undefined;
  let first;
  let closure_27;
  let closure_28;
  let ref;
  let origin;
  let obj2 = referrerPolicy;
  let tmp2 = iframeId;
  let tmp3 = onActivityCrash;
  let tmp = hasInvalidUrlError();
  const context = referrerPolicy.useContext(iframeId(onActivityCrash[13]).WebViewContext);
  let tmp5 = memo();
  hasInvalidUrlError = tmp5.hasInvalidUrlError;
  const setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp5.hadInvalidUrlError;
  let tmp6 = onInvalidUrl;
  const tmp7 = onInvalidUrl(referrerPolicy.useState(null), 2);
  [tmp8, c15] = tmp7;
  let items = [iframeId];
  memo = referrerPolicy.useMemo(() => {
    const obj = WebView2;
    return obj.getWebViewProxy(iframeId);
  }, items);
  const tmp10 = onInvalidUrl(referrerPolicy.useState(null), 2);
  [tmp11, c17] = tmp10;
  let rect = shellBridgeSecret(onActivityCrash[15])();
  let obj3 = iframeId(onActivityCrash[16]);
  const embeddedAppShimVersion = obj3.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj4 = applicationId(onActivityCrash[17]);
  let obj = { frame_id: iframeId, platform: iframeId(onActivityCrash[18]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj4.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj[iframeId(onActivityCrash[19]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  const tmp16 = shellBridgeSecret(onActivityCrash[20])({ allowPopups });
  let closure_20 = tmp16;
  const uRLSearchParams = new URLSearchParams(obj);
  const combined = "" + activityUrl + "?" + uRLSearchParams;
  const items1 = [combined, tmp16, onLoadError, referrerPolicy, iframeId, embeddedAppShimVersion, shellBridgeSecret];
  const effect = referrerPolicy.useEffect(() => {
    function loadHtml() {
      return obj(...arguments);
    }
    let obj = function _loadHtml2() {
      obj = _asyncToGenerator(async (arg0, value) => {
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
                shellBridgeSecret = tmp;
                iframeId = undefined;
                const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy, shimVersion, shellBridgeSecret };
                c2 = 1;
                c3 = 1;
                const obj5 = { value: closure_2_1(onActivityCrash[21])(obj4), done: false };
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
                closure_1_17(iframeId);
              } else {
                closure_1_4();
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
  const callback = referrerPolicy.useCallback((nativeEvent) => {
    setHasInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items2);
  const items4 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
  const callback1 = referrerPolicy.useCallback((nativeEvent) => {
    setHasInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items3);
  const callback2 = referrerPolicy.useCallback(() => {
    setHasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
    obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
    onActivityCrash();
  }, items4);
  let obj6 = iframeId(onActivityCrash[23]);
  const items5 = [safeAreasConfig];
  const stateFromStores = obj6.useStateFromStores(items5, () => safeAreasConfig.getUseActivityUrlOverride());
  const items6 = [combined, stateFromStores, setHasInvalidUrlError];
  const effect1 = referrerPolicy.useEffect(function() {
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
  const effect2 = referrerPolicy.useEffect(() => {
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
  const effect3 = referrerPolicy.useEffect(() => {
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
  if (!hadInvalidUrlError) {
    androidWebViewShellConfig = null;
    if (null != tmp8) {
      androidWebViewShellConfig = null;
      if (null != tmp11) {
        let obj5 = { iframeUrl: tmp8, shellFilePath: tmp11 };
        const tmp2Result = tmp2(tmp3[26]);
        androidWebViewShellConfig = tmp2Result.getAndroidWebViewShellConfig(obj5);
      }
    }
  }
  combined1 = null;
  let tmp29 = null;
  if (null != tmp8) {
    if (hadInvalidUrlError) {
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
    tmp29 = combined1;
  }
  closure_24 = tmp27;
  let tmp6Result = tmp6(obj2.useState(false), 2);
  [tmp32, c25] = tmp6Result;
  const tmp6Result2 = tmp6(obj2.useState([]), 2);
  first = tmp6Result2[0];
  closure_27 = tmp6Result2[1];
  const items9 = [applicationId, tmp27];
  const effect4 = obj2.useEffect(() => {
    function fetchAndParseCSP() {
      return obj(...arguments);
    }
    const tmp = closure_24;
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
                  const obj6 = closure_2_0(onActivityCrash[27]);
                  const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(closure_2);
                  closure_0 = nonTestModeUrlForApplication;
                  const tmp29 = closure_2_0;
                  const tmp30 = onActivityCrash;
                  const tmp31 = closure_2;
                  if (nonTestModeUrlForApplication == null) {
                    const _HermesInternal = HermesInternal;
                    let str = ".discordsays.com";
                    closure_0 = "https://" + tmp31 + ".discordsays.com";
                  }
                  const HTTP = tmp29(tmp30[28]).HTTP;
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
                let closure_1 = 3;
                closure_1 = HermesBuiltin.arraySpread(items, closure_131_1(/frame-src (.*?);/, content_security_policy), closure_1);
                closure_1 = HermesBuiltin.arraySpread(items, closure_131_1(/child-src (.*?);/, content_security_policy), closure_1);
                closure_1_27(items.map((item) => {
                  const str = closure_1_1(closure_1_3[29])(item);
                  return "^" + str.replace(/\\\*/g, ".*");
                }));
                closure_1_25(true);
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
  const items10 = [tmp29, first];
  let tmp37 = null != tmp29;
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
  if (tmp37) {
    tmp37 = null != tmp8;
  }
  if (tmp37) {
    tmp37 = null != tmp11;
  }
  closure_28 = tmp37;
  ref = obj2.useRef(null);
  origin = undefined;
  if (tmp8 != null) {
    origin = tmp8.origin;
  }
  const items11 = [rect, isPipOrGridMode, tmp37, memo, origin, safeAreasConfig];
  const effect5 = obj2.useEffect(() => {
    function tryInjectJavaScript() {
      return obj(...arguments);
    }
    const tmp = closure_28;
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
                    const obj8 = closure_1_16;
                    if (null != closure_1_16) {
                      if (null != closure_1_30) {
                        const tmp14 = c7;
                        if (tmp14) {
                          rect = { top: 0, bottom: 0, left: 0, right: 0 };
                        } else {
                          rect = closure_1_18;
                        }
                        const rect2 = c8;
                        let left;
                        if (c8 != null) {
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
                        const rect1 = { left: _undefined(left, c0), right: _undefined(right, c1), top: _undefined(top, c2), bottom: _undefined(bottom, c3) };
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
                        const tmp30 = shellBridgeSecret(onActivityCrash[31])(obj4, tmp13);
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
      let tmp42 = num;
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
        tmp42 = num3;
      }
      let rect1 = { left: tmp42, right: tmp45, top: tmp48, bottom: tmp51 };
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
      tmp45 = num4;
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
        tmp45 = num6;
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
      tmp48 = num7;
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
        tmp48 = num9;
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
      tmp51 = num10;
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
        tmp51 = num12;
      }
      const obj7 = { insets: rect1, messageForDisallowedNavigationError: tmp54 };
      tmp54 = undefined;
      const createActivityFrameInjectedJavaScript = tmp2(tmp3[21]).createActivityFrameInjectedJavaScript;
      tmp2(tmp3[21]);
      if (!hadInvalidUrlError) {
        tmp54 = guildId;
      }
      const activityFrameInjectedJavaScript = createActivityFrameInjectedJavaScript(obj7);
      let tmp57Result = null;
      if (null != tmp11) {
        let obj8 = { style: tmp.webView, ref, source: obj9, androidAssetLoaderConfig: assetLoaderConfig, mixedContentMode: str2, androidInjectedJavaScriptForOrigins: tmp60, originWhitelist: ["*"], overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: callback, onContentProcessDidTerminate: callback2, onRenderProcessGone: callback1, webViewKey: iframeId, temporaryParentNodeTag: context, messagingWithWebViewKeyEnabled: true, allowFileAccess: tmp27, injectedJavaScript: tmp61, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: tmp62, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
        assetLoaderConfig = undefined;
        obj9 = { uri: tmp29 };
        const WebView = tmp2(tmp3[14]).WebView;
        const tmp57 = activitySessionId;
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
        tmp60 = undefined;
        if (null != androidWebViewShellConfig) {
          tmp60 = { script: activityFrameInjectedJavaScript, allowedOriginRules: androidWebViewShellConfig.documentStartOriginRules };
          const obj10 = { script: activityFrameInjectedJavaScript, allowedOriginRules: androidWebViewShellConfig.documentStartOriginRules };
        }
        tmp61 = undefined;
        if (hadInvalidUrlError) {
          tmp61 = activityFrameInjectedJavaScript;
        }
        tmp62 = undefined;
        if (hadInvalidUrlError) {
          tmp62 = callback3;
        }
        tmp57Result = tmp57(WebView, obj8);
      }
      return tmp57Result;
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
