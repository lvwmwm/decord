// Module ID: 11434
// Function ID: 11435
// Name: BaseEmbeddedAppWebView
// Dependencies: [5, 32, 19, 17, 5611, 1087, 2026, 21, 4969, 3, 1384, 558, 576, 10744, 11435, 7891, 11436, 11437, 1383, 11420, 11438, 11439, 11440, 11431, 1267, 573, 5895, 1128, 11441, 5609, 1297, 11442, 11443, 1386, 10728, 6646, 2]

// Module 11434 (BaseEmbeddedAppWebView)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl4 from "intl" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import URLUtilsDefault from "URLUtils" /* 1386 */;
import Constants2 from "Constants" /* 2026 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5895 */;
import usePreviousDefault from "usePrevious" /* 6646 */;
import WebView2 from "WebView" /* 7891 */;
import useEmbeddedAppCSPDefault from "useEmbeddedAppCSP" /* 10744 */;
import isAllowedFrameNavigation from "isAllowedFrameNavigation" /* 11443 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5611 */;
import createStyles from "createStyles" /* 4969 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, c4, c5, c8, c9, constants, content_security_policy;

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
const logger = tmp2;
let closure_14 = PlatformUtils.isIOS();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseEmbeddedAppWebView(onLoadError) {
  let policy;
  let routerOrigin;
  const obj = react2;
  const cResult = obj.c(12);
  onLoadError = onLoadError.onLoadError;
  const tmp2 = useEmbeddedAppCSPDefault(onLoadError.activityUrl);
  let closure_1 = tmp2;
  if (cResult[0] === tmp2.status) {
    let tmp3;
    let tmp4;
    if (cResult[1] === onLoadError) {
      tmp3 = cResult[2];
      tmp4 = cResult[3];
    }
    const effect = react.useEffect(tmp3, tmp4);
    const status = tmp2.status;
    if ("loading" !== status) {
      if ("failed" !== status) {
        let tmp15;
        if ("not-enforced" !== status) {
          if ("developer-served" !== status) {
            if ("ready" === status) {
              ({ policy, routerOrigin } = tmp2);
              if (cResult[6] === policy) {
                let tmp7;
                if (cResult[7] === routerOrigin) {
                  tmp7 = cResult[8];
                }
                if (cResult[9] === onLoadError) {
                  let tmp8;
                  if (cResult[10] === tmp7) {
                    tmp8 = cResult[11];
                  }
                  return tmp8;
                }
                const merged = Object.assign(onLoadError);
                const tmp14 = <closure_16 framePolicy={tmp7} />;
                cResult[9] = onLoadError;
                cResult[10] = tmp7;
                cResult[11] = tmp14;
                tmp8 = tmp14;
              }
              const obj3 = { policy, routerOrigin };
              cResult[6] = policy;
              cResult[7] = routerOrigin;
              cResult[8] = obj3;
              tmp7 = obj3;
            }
          }
        }
        if (cResult[4] !== onLoadError) {
          const merged1 = Object.assign(onLoadError);
          const tmp22 = <closure_16 framePolicy={null} />;
          cResult[4] = onLoadError;
          cResult[5] = tmp22;
          tmp15 = tmp22;
        } else {
          tmp15 = cResult[5];
        }
        return tmp15;
      }
    }
    return null;
  }
  const fn = function n() {
    if ("failed" === status.status) {
      onLoadError();
    }
  };
  const items = [tmp2.status, onLoadError];
  cResult[0] = tmp2.status;
  cResult[1] = onLoadError;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : (function BaseEmbeddedAppWebView(onLoadError) {
  let policy;
  let routerOrigin;
  onLoadError = onLoadError.onLoadError;
  const tmp = useEmbeddedAppCSPDefault(onLoadError.activityUrl);
  let closure_1 = tmp;
  const items = [tmp.status, onLoadError];
  const effect = react.useEffect(() => {
    if ("failed" === status.status) {
      onLoadError();
    }
  }, items);
  const status = tmp.status;
  if ("loading" !== status) {
    if ("failed" !== status) {
      if ("not-enforced" !== status) {
        if ("developer-served" !== status) {
          if ("ready" === status) {
            ({ policy, routerOrigin } = tmp);
            const merged = Object.assign(onLoadError);
            return <closure_16 framePolicy={{ policy, routerOrigin }} />;
          }
        }
      }
      const merged1 = Object.assign(onLoadError);
      return <closure_16 framePolicy={null} />;
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseEmbeddedAppWebViewContent(framePolicy) {
  let allowPopups;
  let applicationId;
  let deepLinkQueryParams;
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
  let tmp26;
  let tmp9;
  let tmp = framePolicy;
  let tmp2 = applicationId;
  let obj = framePolicy(applicationId[12]);
  const cResult = obj.c(117);
  framePolicy = framePolicy.framePolicy;
  let iframeId = framePolicy.iframeId;
  let shellBridgeSecret = framePolicy.shellBridgeSecret;
  ({ deepLinkQueryParams, applicationId } = framePolicy);
  ({ queryParams, onActivityCrash } = framePolicy);
  const onLoadError = framePolicy.onLoadError;
  const onInvalidUrl = framePolicy.onInvalidUrl;
  ({ allowPopups, referrerPolicy } = framePolicy);
  const isPipOrGridMode = framePolicy.isPipOrGridMode;
  ({ ignoreSilentHardwareSwitch, safeAreasConfig } = framePolicy);
  const channelId = framePolicy.channelId;
  const guildId = framePolicy.guildId;
  const activitySessionId = framePolicy.activitySessionId;
  const activityUrl = framePolicy.activityUrl;
  if (undefined === deepLinkQueryParams) {
    deepLinkQueryParams = {};
  }
  let tmp4 = activitySessionId();
  let obj2 = onInvalidUrl;
  const context = onInvalidUrl.useContext(tmp(tmp2[14]).WebViewContext);
  const tmp6 = closure_17();
  const hasInvalidUrlError = tmp6.hasInvalidUrlError;
  const setHasInvalidUrlError = tmp6.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp6.hadInvalidUrlError;
  const tmp7 = onLoadError;
  let tmp8 = onLoadError(onInvalidUrl.useState(null), 2);
  [tmp9, tmp10] = tmp8;
  if (cResult[0] !== iframeId) {
    const tmpResult = tmp(tmp2[15]);
    const webViewProxy = tmpResult.getWebViewProxy(iframeId);
    cResult[0] = iframeId;
    cResult[1] = webViewProxy;
    tmp11 = webViewProxy;
  } else {
    tmp11 = cResult[1];
  }
  closure_17 = tmp11;
  [tmp14, tmp15] = tmp7(obj2.useState(null), 2);
  let closure_18 = tmp15;
  const tmp16 = iframeId;
  tmp7(obj2.useState(null), 2);
  const tmp17 = iframeId(tmp2[16])();
  let closure_19 = tmp17;
  const tmpResult3 = tmp(tmp2[17]);
  const embeddedAppShimVersion = tmpResult3.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj5 = shellBridgeSecret(tmp2[18]);
  let obj3 = { frame_id: iframeId, platform: tmp(tmp2[19]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj5.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj3[tmp(tmp2[20]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  if (cResult[2] !== allowPopups) {
    let obj4 = { allowPopups };
    const tmp23 = tmp16(tmp2[21])(obj4);
    cResult[2] = allowPopups;
    cResult[3] = tmp23;
    tmp22 = tmp23;
  } else {
    tmp22 = cResult[3];
  }
  let closure_21 = tmp22;
  const uRLSearchParams = new URLSearchParams(obj3);
  const combined = "" + activityUrl + "?" + uRLSearchParams;
  if (cResult[4] !== framePolicy) {
    let result;
    if (null != framePolicy) {
      const tmpResult4 = tmp(tmp2[22]);
      result = tmpResult4.deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
    }
    cResult[4] = framePolicy;
    cResult[5] = result;
    tmp26 = result;
  } else {
    tmp26 = cResult[5];
  }
  let closure_23 = tmp26;
  if (cResult[6] === tmp26) {
    if (cResult[7] === iframeId) {
      if (cResult[8] === tmp22) {
        if (cResult[9] === combined) {
          if (cResult[10] === onLoadError) {
            if (cResult[11] === referrerPolicy) {
              if (cResult[12] === tmp15) {
                if (cResult[13] === shellBridgeSecret) {
                  let tmp28;
                  if (cResult[14] === embeddedAppShimVersion) {
                    tmp28 = cResult[15];
                  }
                  if (cResult[16] === tmp26) {
                    if (cResult[17] === iframeId) {
                      if (cResult[18] === tmp22) {
                        if (cResult[19] === combined) {
                          if (cResult[20] === onLoadError) {
                            if (cResult[21] === referrerPolicy) {
                              if (cResult[22] === shellBridgeSecret) {
                                let tmp29;
                                if (cResult[23] === embeddedAppShimVersion) {
                                  tmp29 = cResult[24];
                                }
                                const effect = obj2.useEffect(tmp28, tmp29);
                                if (cResult[25] !== applicationId) {
                                  function pe(nativeEvent) {
                                    hasInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                                  }
                                  cResult[25] = applicationId;
                                  cResult[26] = pe;
                                  class Se {
                                    constructor() {
                                      hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                      const obj = AnalyticsUtilsDefault;
                                      const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                      obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                      onActivityCrash();
                                    }
                                  }
                                } else {
                                  let tmp31 = cResult[26];
                                }
                                if (cResult[27] !== applicationId) {
                                  function me(nativeEvent) {
                                    hasInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                                  }
                                  cResult[27] = applicationId;
                                  cResult[28] = me;
                                  class Se {
                                    constructor() {
                                      hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                      const obj = AnalyticsUtilsDefault;
                                      const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                      obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                      onActivityCrash();
                                    }
                                  }
                                }
                                if (cResult[29] === activitySessionId) {
                                  if (cResult[30] === applicationId) {
                                    if (cResult[31] === channelId) {
                                      if (cResult[32] === guildId) {
                                        let tmp35;
                                        let tmp34;
                                        const _Symbol = Symbol;
                                        let str = "react.memo_cache_sentinel";
                                        if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                                          let items = [isPipOrGridMode];
                                          function be() {
                                            return isPipOrGridMode.getUseActivityUrlOverride();
                                          }
                                          class Se {
                                            constructor() {
                                              hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                              const obj = AnalyticsUtilsDefault;
                                              const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                              obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                              onActivityCrash();
                                            }
                                          }
                                          cResult[36] = be;
                                          tmp35 = be;
                                          class Ee {
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
                                          tmp35 = cResult[36];
                                          tmp34 = cResult[35];
                                        }
                                        class Se {
                                          constructor() {
                                            hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                            const obj = AnalyticsUtilsDefault;
                                            const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                            obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                            onActivityCrash();
                                          }
                                        }
                                        const stateFromStores = obj9.useStateFromStores(tmp34, tmp35);
                                        if (cResult[37] === combined) {
                                          if (cResult[38] === stateFromStores) {
                                            if (cResult[39] === setHasInvalidUrlError) {
                                              let tmp38;
                                              if (cResult[40] === tmp10) {
                                                tmp38 = cResult[41];
                                              }
                                              if (cResult[42] === combined) {
                                                if (cResult[43] === stateFromStores) {
                                                  let tmp39;
                                                  if (cResult[44] === setHasInvalidUrlError) {
                                                    tmp39 = cResult[45];
                                                  }
                                                  const effect1 = obj2.useEffect(tmp38, tmp39);
                                                  if (cResult[46] === hadInvalidUrlError) {
                                                    let tmp41;
                                                    let tmp42;
                                                    if (cResult[47] === hasInvalidUrlError) {
                                                      tmp41 = cResult[48];
                                                      tmp42 = cResult[49];
                                                    }
                                                    const effect2 = obj2.useEffect(tmp41, tmp42);
                                                    if (cResult[50] === hadInvalidUrlError) {
                                                      if (cResult[51] === hasInvalidUrlError) {
                                                        let tmp44;
                                                        let tmp45;
                                                        if (cResult[52] === onInvalidUrl) {
                                                          tmp44 = cResult[53];
                                                          tmp45 = cResult[54];
                                                        }
                                                        const effect3 = obj2.useEffect(tmp44, tmp45);
                                                        if (cResult[55] === tmp9) {
                                                          let tmp47;
                                                          let combined1;
                                                          if (cResult[56] === tmp14) {
                                                            tmp47 = cResult[57];
                                                          }
                                                          const tmp49 = cResult[58];
                                                          class Ce {
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
                                                          if (tmp49 === undefined) {
                                                            if (cResult[59] === tmp9) {
                                                              let tmp61;
                                                              if (cResult[60] === tmp14) {
                                                                combined1 = cResult[61];
                                                              }
                                                              class Ce {
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
                                                              let flag = false;
                                                              class Se {
                                                                constructor() {
                                                                  hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                                                  const obj = AnalyticsUtilsDefault;
                                                                  const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                                                  obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                                                  onActivityCrash();
                                                                }
                                                              }
                                                              let closure_27 = tmp58[1];
                                                              const _Symbol2 = Symbol;
                                                              const first = tmp58[0];
                                                              class Ee {
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
                                                              if (tmp60 === Symbol.for("react.memo_cache_sentinel")) {
                                                                const items1 = [];
                                                                cResult[62] = items1;
                                                                class Ce {
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
                                                                tmp61 = cResult[62];
                                                              }
                                                              const tmp7Result2 = tmp7(obj2.useState(tmp61), 2);
                                                              const first1 = tmp7Result2[0];
                                                              let closure_29 = tmp7Result2[1];
                                                              if (cResult[63] === applicationId) {
                                                                let tmp65;
                                                                let tmp64;
                                                                if (cResult[64] === (setHasInvalidUrlError && null == framePolicy)) {
                                                                  tmp65 = cResult[66];
                                                                  tmp64 = cResult[65];
                                                                }
                                                                const effect4 = obj2.useEffect(tmp64, tmp65);
                                                                if (cResult[67] === first1) {
                                                                  if (cResult[68] === framePolicy) {
                                                                    let origin;
                                                                    let closure_30 = tmp68;
                                                                    class Ne {
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
                                                                        if (null != framePolicy) {
                                                                          const obj2 = isAllowedFrameNavigation;
                                                                          if (obj2.isAllowedFrameNavigation(mainDocumentURL.url, framePolicy.routerOrigin, framePolicy.policy)) {
                                                                            return true;
                                                                          }
                                                                        } else {
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
                                                                        }
                                                                        const toURLSafe = URLUtilsDefault.toURLSafe;
                                                                        URLUtilsDefault;
                                                                        let str = DeveloperActivityShelfStore.getActivityUrlOverride();
                                                                        if (str == null) {
                                                                          str = "";
                                                                        }
                                                                        const toURLSafeResult = toURLSafe(str);
                                                                        const tmp13Result = URLUtilsDefault;
                                                                        const toURLSafeResult1 = tmp13Result.toURLSafe(mainDocumentURL.url);
                                                                        return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
                                                                      }
                                                                    }
                                                                    let closure_31 = tmp69;
                                                                    class Se {
                                                                      constructor() {
                                                                        hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                                                        const obj = AnalyticsUtilsDefault;
                                                                        const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                                                        obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                                                        onActivityCrash();
                                                                      }
                                                                    }
                                                                    if (tmp9 != null) {
                                                                      origin = tmp9.origin;
                                                                    }
                                                                    if (cResult[71] === origin) {
                                                                      if (cResult[72] === tmp17) {
                                                                        if (cResult[73] === isPipOrGridMode) {
                                                                          if (safeAreasConfig != null) {
                                                                            let bottom = safeAreasConfig.bottom;
                                                                          }
                                                                          class Ne {
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
                                                                              if (null != framePolicy) {
                                                                                const obj2 = isAllowedFrameNavigation;
                                                                                if (obj2.isAllowedFrameNavigation(mainDocumentURL.url, framePolicy.routerOrigin, framePolicy.policy)) {
                                                                                  return true;
                                                                                }
                                                                              } else {
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
                                                                              }
                                                                              const toURLSafe = URLUtilsDefault.toURLSafe;
                                                                              URLUtilsDefault;
                                                                              let str = DeveloperActivityShelfStore.getActivityUrlOverride();
                                                                              if (str == null) {
                                                                                str = "";
                                                                              }
                                                                              const toURLSafeResult = toURLSafe(str);
                                                                              const tmp13Result = URLUtilsDefault;
                                                                              const toURLSafeResult1 = tmp13Result.toURLSafe(mainDocumentURL.url);
                                                                              return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    class Ee {
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
                                                                    cResult[71] = origin;
                                                                    cResult[72] = tmp17;
                                                                    cResult[73] = isPipOrGridMode;
                                                                    let bottom1;
                                                                    if (safeAreasConfig != null) {
                                                                      bottom1 = safeAreasConfig.bottom;
                                                                    }
                                                                    cResult[74] = bottom1;
                                                                    let left;
                                                                    if (safeAreasConfig != null) {
                                                                      left = safeAreasConfig.left;
                                                                    }
                                                                    cResult[75] = left;
                                                                    let right;
                                                                    if (safeAreasConfig != null) {
                                                                      right = safeAreasConfig.right;
                                                                    }
                                                                    cResult[76] = right;
                                                                    let top;
                                                                    if (safeAreasConfig != null) {
                                                                      top = safeAreasConfig.top;
                                                                    }
                                                                    class De {
                                                                      constructor() {
                                                                        function tryInjectJavaScript() {
                                                                          return closure_0(...arguments);
                                                                        }
                                                                        const tmp = closure_30;
                                                                        if (tmp) {
                                                                          const tmp3 = null;
                                                                          if (null != closure_17) {
                                                                            const tmp4 = onActivityCrash;
                                                                            let closure_0 = onActivityCrash(function*(arg0, value) {
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
                                                                                      const obj8 = closure_1_17;
                                                                                      if (null != closure_1_17) {
                                                                                        if (null != origin) {
                                                                                          let rect;
                                                                                          const tmp14 = c8;
                                                                                          if (tmp14) {
                                                                                            rect = { top: 0, bottom: 0, left: 0, right: 0 };
                                                                                          } else {
                                                                                            rect = closure_1_19;
                                                                                          }
                                                                                          const rect2 = c9;
                                                                                          let left;
                                                                                          if (c9 != null) {
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
                                                                                          const rect1 = { left: hadInvalidUrlError(left, c0), right: hadInvalidUrlError(right, c1), top: hadInvalidUrlError(top, c2), bottom: hadInvalidUrlError(bottom, c3) };
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
                                                                                          const tmp30 = iframeId(applicationId[34])(obj4, tmp13);
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
                                                                    cResult[77] = top;
                                                                    cResult[78] = null != tmp51 && null != tmp9 && null != tmp14;
                                                                    cResult[79] = tmp11;
                                                                    cResult[80] = De;
                                                                  }
                                                                }
                                                                class Ne {
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
                                                                    if (null != framePolicy) {
                                                                      const obj2 = isAllowedFrameNavigation;
                                                                      if (obj2.isAllowedFrameNavigation(mainDocumentURL.url, framePolicy.routerOrigin, framePolicy.policy)) {
                                                                        return true;
                                                                      }
                                                                    } else {
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
                                                                    }
                                                                    const toURLSafe = URLUtilsDefault.toURLSafe;
                                                                    URLUtilsDefault;
                                                                    let str = DeveloperActivityShelfStore.getActivityUrlOverride();
                                                                    if (str == null) {
                                                                      str = "";
                                                                    }
                                                                    const toURLSafeResult = toURLSafe(str);
                                                                    const tmp13Result = URLUtilsDefault;
                                                                    const toURLSafeResult1 = tmp13Result.toURLSafe(mainDocumentURL.url);
                                                                    return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
                                                                  }
                                                                }
                                                                class Se {
                                                                  constructor() {
                                                                    hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                                                    const obj = AnalyticsUtilsDefault;
                                                                    const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                                                    obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                                                    onActivityCrash();
                                                                  }
                                                                }
                                                                cResult[68] = framePolicy;
                                                                class Ee {
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
                                                                cResult[70] = Ne;
                                                              }
                                                              function je() {
                                                                function fetchAndParseCSP() {
                                                                  return closure_0(...arguments);
                                                                }
                                                                const tmp = closure_26;
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
                                                                  const tmp2 = onActivityCrash;
                                                                  closure_0 = onActivityCrash(function*(arg0, value) {
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
                                                                            const obj6 = closure_0(applicationId[29]);
                                                                            const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(closure_2_3);
                                                                            const tmp29 = closure_0;
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            const tmp30 = applicationId;
                                                                            const tmp31 = closure_2_3;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              let str = ".discordsays.com";
                                                                              closure_0 = "https://" + tmp31 + ".discordsays.com";
                                                                            }
                                                                            const HTTP = tmp29(tmp30[30]).HTTP;
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
                                                                          closure_2_29(items.map((item) => {
                                                                            const str = closure_1_1(closure_1_3[31])(item);
                                                                            return "^" + str.replace(/\\\*/g, ".*");
                                                                          }));
                                                                          closure_2_27(true);
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
                                                              const items2 = [applicationId, setHasInvalidUrlError && null == framePolicy];
                                                              cResult[63] = applicationId;
                                                              cResult[64] = setHasInvalidUrlError && null == framePolicy;
                                                              cResult[65] = je;
                                                              cResult[66] = items2;
                                                              tmp65 = items2;
                                                            }
                                                          }
                                                          class Se {
                                                            constructor() {
                                                              hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                                              const obj = AnalyticsUtilsDefault;
                                                              const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                                              obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                                              onActivityCrash();
                                                            }
                                                          }
                                                          if (null != tmp9) {
                                                            const tmp53 = setHasInvalidUrlError;
                                                            if (tmp53) {
                                                              let _HermesInternal = HermesInternal;
                                                              combined1 = "file://" + tmp14;
                                                            } else {
                                                              combined1 = undefined;
                                                              if (tmp47 != null) {
                                                                combined1 = tmp47.uri;
                                                              }
                                                              if (combined1 == null) {
                                                                combined1 = null;
                                                              }
                                                            }
                                                            class Ne {
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
                                                                if (null != framePolicy) {
                                                                  const obj2 = isAllowedFrameNavigation;
                                                                  if (obj2.isAllowedFrameNavigation(mainDocumentURL.url, framePolicy.routerOrigin, framePolicy.policy)) {
                                                                    return true;
                                                                  }
                                                                } else {
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
                                                                }
                                                                const toURLSafe = URLUtilsDefault.toURLSafe;
                                                                URLUtilsDefault;
                                                                let str = DeveloperActivityShelfStore.getActivityUrlOverride();
                                                                if (str == null) {
                                                                  str = "";
                                                                }
                                                                const toURLSafeResult = toURLSafe(str);
                                                                const tmp13Result = URLUtilsDefault;
                                                                const toURLSafeResult1 = tmp13Result.toURLSafe(mainDocumentURL.url);
                                                                return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
                                                              }
                                                            }
                                                          }
                                                          class Ee {
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
                                                          cResult[58] = undefined;
                                                          cResult[59] = tmp9;
                                                          cResult[60] = tmp14;
                                                          cResult[61] = null;
                                                        }
                                                        class Ce {
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
                                                        class Se {
                                                          constructor() {
                                                            hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                                            const obj = AnalyticsUtilsDefault;
                                                            const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                                            obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                                            onActivityCrash();
                                                          }
                                                        }
                                                        cResult[55] = tmp9;
                                                        class Ee {
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
                                                        cResult[57] = null;
                                                        tmp47 = tmp48;
                                                      }
                                                    }
                                                    class Ce {
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
                                                    const items3 = [, , ];
                                                    class Se {
                                                      constructor() {
                                                        hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                                        const obj = AnalyticsUtilsDefault;
                                                        const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                                        obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                                        onActivityCrash();
                                                      }
                                                    }
                                                    items3[1] = hadInvalidUrlError;
                                                    items3[2] = onInvalidUrl;
                                                    class Ee {
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
                                                    cResult[51] = hasInvalidUrlError;
                                                    cResult[52] = onInvalidUrl;
                                                    cResult[53] = Ce;
                                                    cResult[54] = items3;
                                                    tmp45 = items3;
                                                    tmp44 = Ce;
                                                  }
                                                  class Ie {
                                                    constructor() {
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
                                                  }
                                                  const items4 = [, ];
                                                  class Se {
                                                    constructor() {
                                                      hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                                      const obj = AnalyticsUtilsDefault;
                                                      const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                                      obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                                      onActivityCrash();
                                                    }
                                                  }
                                                  items4[1] = hasInvalidUrlError;
                                                  cResult[46] = hadInvalidUrlError;
                                                  class Ee {
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
                                                  cResult[47] = hasInvalidUrlError;
                                                  cResult[48] = Ie;
                                                  cResult[49] = items4;
                                                  tmp42 = items4;
                                                  tmp41 = Ie;
                                                }
                                              }
                                              const items5 = [, stateFromStores, ];
                                              class Se {
                                                constructor() {
                                                  hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                                  const obj = AnalyticsUtilsDefault;
                                                  const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                                  obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                                  onActivityCrash();
                                                }
                                              }
                                              cResult[42] = combined;
                                              class Ee {
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
                                              cResult[44] = setHasInvalidUrlError;
                                              cResult[45] = items5;
                                              tmp39 = items5;
                                            }
                                          }
                                        }
                                        class Ee {
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
                                        cResult[37] = combined;
                                        cResult[38] = stateFromStores;
                                        cResult[39] = setHasInvalidUrlError;
                                        cResult[40] = tmp10;
                                        cResult[41] = Ee;
                                        tmp38 = Ee;
                                      }
                                    }
                                  }
                                }
                                class Se {
                                  constructor() {
                                    hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                    const obj = AnalyticsUtilsDefault;
                                    const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                                    obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                                    onActivityCrash();
                                  }
                                }
                                cResult[29] = activitySessionId;
                                cResult[31] = channelId;
                                cResult[32] = guildId;
                                cResult[33] = onActivityCrash;
                                cResult[34] = Se;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const items6 = [, tmp22, , referrerPolicy, iframeId, embeddedAppShimVersion, , tmp26];
                  cResult[16] = tmp26;
                  cResult[17] = iframeId;
                  cResult[18] = tmp22;
                  cResult[19] = combined;
                  cResult[20] = onLoadError;
                  cResult[21] = referrerPolicy;
                  cResult[22] = shellBridgeSecret;
                  cResult[23] = embeddedAppShimVersion;
                  cResult[24] = items6;
                }
              }
            }
          }
        }
      }
    }
  }
  function ue() {
    function loadHtml() {
      return closure_0(...arguments);
    }
    let closure_0 = onActivityCrash(function*(arg0, value) {
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
          if (0 === shellBridgeSecret) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              iframeId = tmp;
              closure_0 = undefined;
              const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy, shimVersion, shellBridgeSecret, iframeCsp };
              shellBridgeSecret = 1;
              c3 = 1;
              const obj5 = { value: iframeId(applicationId[23])(obj4), done: false };
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
            closure_0 = value;
            if (null != closure_0) {
              closure_1_18(closure_0);
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
  cResult[6] = tmp26;
  cResult[7] = iframeId;
  cResult[8] = tmp22;
  cResult[9] = combined;
  cResult[10] = onLoadError;
  cResult[11] = referrerPolicy;
  cResult[12] = tmp15;
  cResult[13] = shellBridgeSecret;
  cResult[14] = embeddedAppShimVersion;
  cResult[15] = ue;
  tmp28 = ue;
}) : (function BaseEmbeddedAppWebViewContent(framePolicy) {
  let _undefined;
  let activityUrl;
  let allowPopups;
  let assetLoaderConfig;
  let c16;
  let c18;
  let c27;
  let ignoreSilentHardwareSwitch;
  let obj8;
  let onActivityCrash;
  let queryParams;
  let str2;
  let tmp11;
  let tmp34;
  let tmp47;
  let tmp50;
  let tmp53;
  let tmp56;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp8;
  framePolicy = framePolicy.framePolicy;
  let iframeId = framePolicy.iframeId;
  let shellBridgeSecret = framePolicy.shellBridgeSecret;
  let deepLinkQueryParams = framePolicy.deepLinkQueryParams;
  if (deepLinkQueryParams === undefined) {
    deepLinkQueryParams = {};
  }
  const applicationId = framePolicy.applicationId;
  ({ queryParams, onActivityCrash } = framePolicy);
  const onLoadError = framePolicy.onLoadError;
  const onInvalidUrl = framePolicy.onInvalidUrl;
  const referrerPolicy = framePolicy.referrerPolicy;
  const isPipOrGridMode = framePolicy.isPipOrGridMode;
  ({ ignoreSilentHardwareSwitch, activityUrl, allowPopups } = framePolicy);
  if (ignoreSilentHardwareSwitch === undefined) {
    ignoreSilentHardwareSwitch = true;
  }
  const safeAreasConfig = framePolicy.safeAreasConfig;
  const channelId = framePolicy.channelId;
  const guildId = framePolicy.guildId;
  const activitySessionId = framePolicy.activitySessionId;
  c16 = undefined;
  let memo;
  c18 = undefined;
  let c23;
  let stateFromStores;
  let combined1;
  let closure_26;
  c27 = undefined;
  let first;
  let closure_29;
  let closure_30;
  let ref;
  let origin;
  let obj2 = onInvalidUrl;
  let tmp2 = framePolicy;
  let tmp3 = applicationId;
  let tmp = activitySessionId();
  const context = onInvalidUrl.useContext(framePolicy(applicationId[14]).WebViewContext);
  const tmp5 = memo();
  const hasInvalidUrlError = tmp5.hasInvalidUrlError;
  const setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp5.hadInvalidUrlError;
  const tmp7 = onLoadError(onInvalidUrl.useState(null), 2);
  [tmp8, c16] = tmp7;
  let items = [iframeId];
  memo = onInvalidUrl.useMemo(() => {
    const obj = WebView2;
    return obj.getWebViewProxy(iframeId);
  }, items);
  let tmp10 = onLoadError(onInvalidUrl.useState(null), 2);
  [tmp11, c18] = tmp10;
  let rect = iframeId(applicationId[16])();
  let obj3 = framePolicy(applicationId[17]);
  const embeddedAppShimVersion = obj3.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj4 = shellBridgeSecret(applicationId[18]);
  let obj = { frame_id: iframeId, platform: framePolicy(applicationId[19]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj4.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj[framePolicy(applicationId[20]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  const tmp16 = iframeId(applicationId[21])({ allowPopups });
  let closure_21 = tmp16;
  const uRLSearchParams = new URLSearchParams(obj);
  const combined = "" + activityUrl + "?" + uRLSearchParams;
  let result;
  if (null != framePolicy) {
    const tmp2Result = tmp2(tmp3[22]);
    result = tmp2Result.deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
  }
  c23 = result;
  const items1 = [combined, tmp16, onLoadError, referrerPolicy, iframeId, embeddedAppShimVersion, shellBridgeSecret, result];
  const effect = obj2.useEffect(() => {
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
            let closure_0;
            c3 = 2;
            if (0 === shellBridgeSecret) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                iframeId = tmp;
                closure_0 = undefined;
                const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy, shimVersion, shellBridgeSecret, iframeCsp };
                shellBridgeSecret = 1;
                c3 = 1;
                const obj5 = { value: closure_2_1(applicationId[23])(obj4), done: false };
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
              closure_0 = value;
              if (null != closure_0) {
                closure_1_18(closure_0);
              } else {
                closure_1_5();
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
  const callback = obj2.useCallback((nativeEvent) => {
    hasInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items2);
  const items4 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
  const callback1 = obj2.useCallback((nativeEvent) => {
    hasInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items3);
  const callback2 = obj2.useCallback(() => {
    hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
    obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
    onActivityCrash();
  }, items4);
  const items5 = [isPipOrGridMode];
  const tmp2Result4 = tmp2(tmp3[25]);
  stateFromStores = tmp2Result4.useStateFromStores(items5, () => isPipOrGridMode.getUseActivityUrlOverride());
  const items6 = [combined, stateFromStores, setHasInvalidUrlError];
  const effect1 = obj2.useEffect(function() {
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
  const items8 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
  const effect3 = obj2.useEffect(() => {
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
  if (!setHasInvalidUrlError) {
    androidWebViewShellConfig = null;
    if (null != tmp8) {
      androidWebViewShellConfig = null;
      if (null != tmp11) {
        let obj5 = { iframeUrl: tmp8, shellFilePath: tmp11 };
        const tmp2Result5 = tmp2(tmp3[28]);
        androidWebViewShellConfig = tmp2Result5.getAndroidWebViewShellConfig(obj5);
      }
    }
  }
  combined1 = null;
  let tmp30 = null;
  if (null != tmp8) {
    if (setHasInvalidUrlError) {
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
    tmp30 = combined1;
  }
  closure_26 = tmp32;
  [tmp34, c27] = onLoadError(obj2.useState(false), 2);
  onLoadError(obj2.useState(false), 2);
  const tmp6Result2 = onLoadError(obj2.useState([]), 2);
  first = tmp6Result2[0];
  closure_29 = tmp6Result2[1];
  const items9 = [applicationId, tmp32];
  const effect4 = obj2.useEffect(() => {
    function fetchAndParseCSP() {
      return obj(...arguments);
    }
    const tmp = closure_26;
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
                  const obj6 = closure_2_0(applicationId[29]);
                  const nonTestModeUrlForApplication = obj6.getNonTestModeUrlForApplication(closure_3);
                  closure_0 = nonTestModeUrlForApplication;
                  const tmp29 = closure_2_0;
                  const tmp30 = applicationId;
                  const tmp31 = closure_3;
                  if (nonTestModeUrlForApplication == null) {
                    const _HermesInternal = HermesInternal;
                    let str = ".discordsays.com";
                    closure_0 = "https://" + tmp31 + ".discordsays.com";
                  }
                  const HTTP = tmp29(tmp30[30]).HTTP;
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
                closure_1_29(items.map((item) => {
                  const str = closure_1_1(closure_1_3[31])(item);
                  return "^" + str.replace(/\\\*/g, ".*");
                }));
                closure_1_27(true);
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
  const items10 = [tmp30, first, framePolicy];
  let tmp39 = null != tmp30;
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
    if (null != framePolicy) {
      const obj2 = isAllowedFrameNavigation;
      if (obj2.isAllowedFrameNavigation(mainDocumentURL.url, framePolicy.routerOrigin, framePolicy.policy)) {
        return true;
      }
    } else {
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
    }
    const toURLSafe = URLUtilsDefault.toURLSafe;
    URLUtilsDefault;
    let str = DeveloperActivityShelfStore.getActivityUrlOverride();
    if (str == null) {
      str = "";
    }
    const toURLSafeResult = toURLSafe(str);
    const tmp13Result = URLUtilsDefault;
    const toURLSafeResult1 = tmp13Result.toURLSafe(mainDocumentURL.url);
    return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
  }, items10);
  if (tmp39) {
    tmp39 = null != tmp8;
  }
  if (tmp39) {
    tmp39 = null != tmp11;
  }
  closure_30 = tmp39;
  ref = obj2.useRef(null);
  origin = undefined;
  if (tmp8 != null) {
    origin = tmp8.origin;
  }
  const items11 = [rect, isPipOrGridMode, tmp39, memo, origin, safeAreasConfig];
  const effect5 = obj2.useEffect(() => {
    function tryInjectJavaScript() {
      return obj(...arguments);
    }
    const tmp = closure_30;
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
                    const obj8 = closure_1_17;
                    if (null != closure_1_17) {
                      if (null != closure_1_32) {
                        const tmp14 = c8;
                        if (tmp14) {
                          rect = { top: 0, bottom: 0, left: 0, right: 0 };
                        } else {
                          rect = closure_1_19;
                        }
                        const rect2 = c9;
                        let left;
                        if (c9 != null) {
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
                        const rect1 = { left: hadInvalidUrlError(left, c0), right: hadInvalidUrlError(right, c1), top: hadInvalidUrlError(top, c2), bottom: hadInvalidUrlError(bottom, c3) };
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
                        const tmp30 = iframeId(applicationId[34])(obj4, tmp13);
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
  if (null != tmp30) {
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
      let tmp44 = num;
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
        tmp44 = num3;
      }
      let rect1 = { left: tmp44, right: tmp47, top: tmp50, bottom: tmp53 };
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
      tmp47 = num4;
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
        tmp47 = num6;
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
      tmp50 = num7;
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
        tmp50 = num9;
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
      tmp53 = num10;
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
        tmp53 = num12;
      }
      let obj6 = { insets: rect1, messageForDisallowedNavigationError: tmp56 };
      tmp56 = undefined;
      const createActivityFrameInjectedJavaScript = tmp2(tmp3[23]).createActivityFrameInjectedJavaScript;
      tmp2(tmp3[23]);
      if (!setHasInvalidUrlError) {
        tmp56 = channelId;
      }
      const activityFrameInjectedJavaScript = createActivityFrameInjectedJavaScript(obj6);
      let tmp59Result = null;
      if (null != tmp11) {
        const obj7 = { style: tmp.webView, ref, source: obj8, androidAssetLoaderConfig: assetLoaderConfig, mixedContentMode: str2, androidInjectedJavaScriptForOrigins: tmp62, originWhitelist: ["*"], overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: callback, onContentProcessDidTerminate: callback2, onRenderProcessGone: callback1, webViewKey: iframeId, temporaryParentNodeTag: context, messagingWithWebViewKeyEnabled: true, allowFileAccess: setHasInvalidUrlError, injectedJavaScript: tmp63, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: tmp64, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
        obj8 = { uri: tmp30 };
        assetLoaderConfig = undefined;
        const WebView = tmp2(tmp3[15]).WebView;
        const tmp59 = guildId;
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
        tmp62 = undefined;
        if (null != androidWebViewShellConfig) {
          tmp62 = { script: activityFrameInjectedJavaScript, allowedOriginRules: androidWebViewShellConfig.documentStartOriginRules };
          const obj9 = { script: activityFrameInjectedJavaScript, allowedOriginRules: androidWebViewShellConfig.documentStartOriginRules };
        }
        tmp63 = undefined;
        if (setHasInvalidUrlError) {
          tmp63 = activityFrameInjectedJavaScript;
        }
        tmp64 = undefined;
        if (setHasInvalidUrlError) {
          tmp64 = callback3;
        }
        tmp59Result = tmp59(WebView, obj7);
      }
      return tmp59Result;
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
let result = size.fileFinishedImporting("modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx");

export const BaseEmbeddedAppWebView = tmp3;
