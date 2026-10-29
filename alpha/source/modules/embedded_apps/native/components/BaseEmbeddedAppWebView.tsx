// Module ID: 11582
// Function ID: 11583
// Name: BaseEmbeddedAppWebView
// Dependencies: [32, 5, 19, 5663, 1084, 21, 5005, 3, 558, 576, 10888, 11583, 7965, 11584, 11585, 1380, 11570, 11586, 11587, 1383, 11588, 11589, 1264, 573, 5946, 1125, 11595, 10872, 6719, 2]

// Module 11582 (BaseEmbeddedAppWebView)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1084 */;
import intl4 from "intl" /* 1125 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import URLUtilsDefault from "URLUtils" /* 1383 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5946 */;
import usePreviousDefault from "usePrevious" /* 6719 */;
import WebView2 from "WebView" /* 7965 */;
import useEmbeddedAppCSPDefault from "useEmbeddedAppCSP" /* 10888 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5663 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, c8, c9, constants;

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
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let tmp2 = new LoggerDefault("BaseEmbeddedAppWebView");
let closure_11 = tmp2;
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
                const tmp14 = <closure_13 framePolicy={tmp7} />;
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
          const tmp22 = <closure_13 framePolicy={null} />;
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
            return <closure_13 framePolicy={{ policy, routerOrigin }} />;
          }
        }
      }
      const merged1 = Object.assign(onLoadError);
      return <closure_13 framePolicy={null} />;
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseEmbeddedAppWebViewContent(applicationId) {
  let activityUrl;
  let allowPopups;
  let deepLinkQueryParams;
  let framePolicy;
  let iframeId;
  let ignoreSilentHardwareSwitch;
  let isPipOrGridMode;
  let onActivityCrash;
  let onInvalidUrl;
  let onLoadEnd;
  let queryParams;
  let referrerPolicy;
  let safeAreasConfig;
  let setHasInvalidUrlError;
  let shellBridgeSecret;
  let tmp15;
  let tmp8;
  let tmp = activityUrl;
  let tmp2 = onInvalidUrl;
  let obj = activityUrl(onInvalidUrl[9]);
  const cResult = obj.c(99);
  ({ framePolicy, iframeId, shellBridgeSecret, deepLinkQueryParams, activityUrl } = applicationId);
  applicationId = applicationId.applicationId;
  ({ queryParams, onActivityCrash } = applicationId);
  onInvalidUrl = applicationId.onInvalidUrl;
  ({ onLoadEnd, allowPopups, referrerPolicy, isPipOrGridMode } = applicationId);
  ({ ignoreSilentHardwareSwitch, safeAreasConfig } = applicationId);
  const channelId = applicationId.channelId;
  const guildId = applicationId.guildId;
  const activitySessionId = applicationId.activitySessionId;
  if (undefined === deepLinkQueryParams) {
    deepLinkQueryParams = {};
  }
  let tmp4 = undefined === ignoreSilentHardwareSwitch || ignoreSilentHardwareSwitch;
  const tmp5 = setHasInvalidUrlError();
  let obj2 = channelId;
  const context = channelId.useContext(tmp(tmp2[11]).WebViewContext);
  const tmp7 = closure_14();
  const hasInvalidUrlError = tmp7.hasInvalidUrlError;
  setHasInvalidUrlError = tmp7.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp7.hadInvalidUrlError;
  if (cResult[0] !== iframeId) {
    const tmpResult = tmp(tmp2[12]);
    const webViewProxy = tmpResult.getWebViewProxy(iframeId);
    cResult[0] = iframeId;
    cResult[1] = webViewProxy;
    tmp8 = webViewProxy;
  } else {
    tmp8 = cResult[1];
  }
  let closure_12 = tmp8;
  let rect = applicationId(tmp2[13])();
  const tmpResult4 = tmp(tmp2[14]);
  const embeddedAppShimVersion = tmpResult4.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj5 = onActivityCrash(tmp2[15]);
  let obj3 = { frame_id: iframeId, platform: tmp(tmp2[16]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj5.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj3[tmp(tmp2[17]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  if (cResult[2] !== allowPopups) {
    let obj4 = { allowPopups };
    const tmp16 = applicationId(tmp2[18])(obj4);
    cResult[2] = allowPopups;
    cResult[3] = tmp16;
    tmp15 = tmp16;
  } else {
    tmp15 = cResult[3];
  }
  const str = new URLSearchParams(obj3);
  const str1 = str.toString();
  if (cResult[4] === activityUrl) {
    let tmp18;
    let tmp20;
    if (cResult[5] === str1) {
      tmp18 = cResult[6];
    }
    closure_14 = tmp18;
    if (cResult[7] !== framePolicy) {
      let result;
      if (null != framePolicy) {
        const tmpResult5 = tmp(tmp2[20]);
        result = tmpResult5.deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
      }
      cResult[7] = framePolicy;
      cResult[8] = result;
      tmp20 = result;
    } else {
      tmp20 = cResult[8];
    }
    if (cResult[9] === activityUrl) {
      if (cResult[10] === tmp20) {
        if (cResult[11] === tmp15) {
          if (cResult[12] === tmp18) {
            if (cResult[13] === referrerPolicy) {
              if (cResult[14] === shellBridgeSecret) {
                let tmp23;
                let tmp25;
                let tmp26;
                if (cResult[15] === embeddedAppShimVersion) {
                  tmp23 = cResult[16];
                }
                const tmp24 = applicationId(tmp2[21])(tmp23);
                if (cResult[17] !== applicationId) {
                  function ae(nativeEvent) {
                    hadInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                  }
                  cResult[17] = applicationId;
                  cResult[18] = ae;
                  tmp25 = ae;
                } else {
                  tmp25 = cResult[18];
                }
                if (cResult[19] !== applicationId) {
                  function ne(nativeEvent) {
                    hadInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                  }
                  cResult[19] = applicationId;
                  cResult[20] = ne;
                  tmp26 = ne;
                } else {
                  tmp26 = cResult[20];
                }
                if (cResult[21] === activitySessionId) {
                  if (cResult[22] === applicationId) {
                    if (cResult[23] === channelId) {
                      if (cResult[24] === guildId) {
                        let tmp27;
                        let tmp29;
                        let tmp28;
                        if (cResult[25] === onActivityCrash) {
                          tmp27 = cResult[26];
                        }
                        const _Symbol = Symbol;
                        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                          let tmp30 = guildId;
                          const items = [guildId];
                          function ce() {
                            return guildId.getUseActivityUrlOverride();
                          }
                          cResult[27] = items;
                          cResult[28] = ce;
                          tmp29 = ce;
                          tmp28 = items;
                        } else {
                          tmp28 = cResult[27];
                          tmp29 = cResult[28];
                        }
                        const tmpResult6 = tmp(tmp2[23]);
                        const stateFromStores = tmpResult6.useStateFromStores(tmp28, tmp29);
                        if (cResult[29] === activityUrl) {
                          if (cResult[30] === tmp18) {
                            if (cResult[31] === stateFromStores) {
                              let tmp32;
                              let tmp33;
                              if (cResult[32] === setHasInvalidUrlError) {
                                tmp32 = cResult[33];
                                tmp33 = cResult[34];
                              }
                              const effect = obj2.useEffect(tmp32, tmp33);
                              if (cResult[35] === hadInvalidUrlError) {
                                let tmp35;
                                let tmp36;
                                if (cResult[36] === hasInvalidUrlError) {
                                  tmp35 = cResult[37];
                                  tmp36 = cResult[38];
                                }
                                const effect1 = obj2.useEffect(tmp35, tmp36);
                                if (cResult[39] === hadInvalidUrlError) {
                                  if (cResult[40] === hasInvalidUrlError) {
                                    let tmp38;
                                    let tmp39;
                                    if (cResult[41] === onInvalidUrl) {
                                      tmp38 = cResult[42];
                                      tmp39 = cResult[43];
                                    }
                                    const effect2 = obj2.useEffect(tmp38, tmp39);
                                    let left;
                                    if (safeAreasConfig != null) {
                                      left = safeAreasConfig.left;
                                    }
                                    let num42;
                                    if (rect != null) {
                                      num42 = rect.left;
                                    }
                                    if (num42 == null) {
                                      num42 = 0;
                                    }
                                    if (cResult[44] === left) {
                                      let tmp43;
                                      if (cResult[45] === num42) {
                                        tmp43 = cResult[46];
                                      }
                                      let right;
                                      if (safeAreasConfig != null) {
                                        right = safeAreasConfig.right;
                                      }
                                      let num48;
                                      if (rect != null) {
                                        num48 = rect.right;
                                      }
                                      if (num48 == null) {
                                        num48 = 0;
                                      }
                                      if (cResult[47] === right) {
                                        let tmp47;
                                        if (cResult[48] === num48) {
                                          tmp47 = cResult[49];
                                        }
                                        let top;
                                        if (safeAreasConfig != null) {
                                          top = safeAreasConfig.top;
                                        }
                                        let num54;
                                        if (rect != null) {
                                          num54 = rect.top;
                                        }
                                        if (num54 == null) {
                                          num54 = 0;
                                        }
                                        if (cResult[50] === top) {
                                          let tmp51;
                                          if (cResult[51] === num54) {
                                            tmp51 = cResult[52];
                                          }
                                          let bottom;
                                          if (safeAreasConfig != null) {
                                            bottom = safeAreasConfig.bottom;
                                          }
                                          let num60;
                                          if (rect != null) {
                                            num60 = rect.bottom;
                                          }
                                          if (num60 == null) {
                                            num60 = 0;
                                          }
                                          if (cResult[53] === bottom) {
                                            let tmp55;
                                            if (cResult[54] === num60) {
                                              tmp55 = cResult[55];
                                            }
                                            if (cResult[56] === tmp43) {
                                              if (cResult[57] === tmp47) {
                                                if (cResult[58] === tmp51) {
                                                  let tmp58;
                                                  if (cResult[59] === tmp55) {
                                                    tmp58 = cResult[60];
                                                  }
                                                  let url;
                                                  if (tmp24 != null) {
                                                    url = tmp24.url;
                                                  }
                                                  if (url == null) {
                                                    url = null;
                                                  }
                                                  if (cResult[61] === applicationId) {
                                                    if (cResult[62] === tmp58) {
                                                      if (cResult[63] === framePolicy) {
                                                        if (cResult[64] === tmp18) {
                                                          let tmp60;
                                                          if (cResult[65] === url) {
                                                            tmp60 = cResult[66];
                                                          }
                                                          const tmp61 = applicationId(tmp2[26])(tmp60);
                                                          let closure_16 = tmp62;
                                                          const ref = obj2.useRef(null);
                                                          let origin;
                                                          if (tmp18 != null) {
                                                            origin = tmp18.origin;
                                                          }
                                                          if (cResult[67] === origin) {
                                                            if (cResult[68] === rect) {
                                                              if (cResult[69] === isPipOrGridMode) {
                                                                let bottom1;
                                                                const tmp65 = cResult[70];
                                                                if (safeAreasConfig != null) {
                                                                  bottom1 = safeAreasConfig.bottom;
                                                                }
                                                                if (tmp65 === bottom1) {
                                                                  let left1;
                                                                  const tmp67 = cResult[71];
                                                                  if (safeAreasConfig != null) {
                                                                    left1 = safeAreasConfig.left;
                                                                  }
                                                                  if (tmp67 === left1) {
                                                                    let right1;
                                                                    const tmp69 = cResult[72];
                                                                    if (safeAreasConfig != null) {
                                                                      right1 = safeAreasConfig.right;
                                                                    }
                                                                    if (tmp69 === right1) {
                                                                      let top1;
                                                                      const tmp71 = cResult[73];
                                                                      if (safeAreasConfig != null) {
                                                                        top1 = safeAreasConfig.top;
                                                                      }
                                                                      if (tmp71 === top1) {
                                                                        if (cResult[74] === null != tmp61) {
                                                                          let tmp73;
                                                                          if (cResult[75] === tmp8) {
                                                                            tmp73 = cResult[76];
                                                                          }
                                                                          if (cResult[77] === origin) {
                                                                            if (cResult[78] === rect) {
                                                                              if (cResult[79] === isPipOrGridMode) {
                                                                                if (cResult[80] === safeAreasConfig) {
                                                                                  if (cResult[81] === null != tmp61) {
                                                                                    let tmp78;
                                                                                    if (cResult[82] === tmp8) {
                                                                                      tmp78 = cResult[83];
                                                                                    }
                                                                                    const effect3 = obj2.useEffect(tmp73, tmp78);
                                                                                    let tmp80 = null;
                                                                                    if (null != tmp61) {
                                                                                      tmp80 = null;
                                                                                      if (null != tmp24) {
                                                                                        if (cResult[84] === tmp24.html) {
                                                                                          let tmp81;
                                                                                          let tmp82;
                                                                                          if (cResult[85] === tmp24.url) {
                                                                                            tmp81 = cResult[86];
                                                                                          }
                                                                                          const _Symbol2 = Symbol;
                                                                                          if (cResult[87] === Symbol.for("react.memo_cache_sentinel")) {
                                                                                            const items1 = ["*"];
                                                                                            cResult[87] = items1;
                                                                                            tmp82 = items1;
                                                                                          } else {
                                                                                            tmp82 = cResult[87];
                                                                                          }
                                                                                          if (cResult[88] === iframeId) {
                                                                                            if (cResult[89] === tmp4) {
                                                                                              if (cResult[90] === context) {
                                                                                                if (cResult[91] === tmp27) {
                                                                                                  if (cResult[92] === tmp25) {
                                                                                                    if (cResult[93] === onLoadEnd) {
                                                                                                      if (cResult[94] === tmp26) {
                                                                                                        if (cResult[95] === tmp61) {
                                                                                                          if (cResult[96] === tmp5.webView) {
                                                                                                            let tmp83;
                                                                                                            if (cResult[97] === tmp81) {
                                                                                                              tmp83 = cResult[98];
                                                                                                            }
                                                                                                            tmp80 = tmp83;
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                          let obj6 = { style: tmp5.webView, ref, source: tmp81, originWhitelist: tmp82, overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: tmp25, onLoadEnd, onContentProcessDidTerminate: tmp27, onRenderProcessGone: tmp26, webViewKey: iframeId, temporaryParentNodeTag: context, messagingWithWebViewKeyEnabled: true, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch: tmp4, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
                                                                                          const WebView = tmp(tmp2[12]).WebView;
                                                                                          const merged2 = Object.assign(tmp61);
                                                                                          class Be {
                                                                                            constructor() {
                                                                                              tmp = closure_16;
                                                                                              if (tmp) {
                                                                                                tmp2 = closure_12;
                                                                                                tmp3 = null;
                                                                                                if (null != closure_12) {
                                                                                                  tmp4 = safeAreasConfig;
                                                                                                  closure_0 = safeAreasConfig(function*(arg0, value) {
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
                                                                                                        return { value: "IconComponent", done: "IconComponent" };
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
                                                                                                            const obj8 = closure_1_12;
                                                                                                            if (null != closure_1_12) {
                                                                                                              if (null != origin) {
                                                                                                                const tmp14 = closure_4;
                                                                                                                if (tmp14) {
                                                                                                                  rect = { top: 0, bottom: 0, left: 0, right: 0 };
                                                                                                                } else {
                                                                                                                  rect = closure_1_13;
                                                                                                                }
                                                                                                                const rect2 = closure_5;
                                                                                                                let left;
                                                                                                                if (closure_5 != null) {
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
                                                                                                                const rect1 = { left: closure_2_12(left, c0), right: closure_2_12(right, c1), top: closure_2_12(top, c2), bottom: closure_2_12(bottom, c3) };
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
                                                                                                                const tmp30 = applicationId(onInvalidUrl[27])(obj4, tmp13);
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
                                                                                                        return { value: "IconComponent", done: "IconComponent" };
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
                                                                                                  tmp5 = (function tryInjectJavaScript() {
                                                                                                    return closure_0(...arguments);
                                                                                                  })();
                                                                                                }
                                                                                              }
                                                                                              return;
                                                                                            }
                                                                                          }
                                                                                          const tmp88 = hasInvalidUrlError(WebView, obj6);
                                                                                          cResult[88] = iframeId;
                                                                                          cResult[89] = tmp4;
                                                                                          cResult[90] = context;
                                                                                          cResult[91] = tmp27;
                                                                                          cResult[92] = tmp25;
                                                                                          cResult[93] = onLoadEnd;
                                                                                          cResult[94] = tmp26;
                                                                                          cResult[95] = tmp61;
                                                                                          cResult[96] = tmp5.webView;
                                                                                          cResult[97] = tmp81;
                                                                                          cResult[98] = tmp88;
                                                                                          tmp83 = tmp88;
                                                                                        }
                                                                                        const obj7 = { html: null, baseUrl: null };
                                                                                        ({ html: obj14.html, url: obj14.baseUrl } = tmp24);
                                                                                        cResult[84] = tmp24.html;
                                                                                        cResult[85] = tmp24.url;
                                                                                        cResult[86] = obj7;
                                                                                        tmp81 = obj7;
                                                                                      }
                                                                                    }
                                                                                    return tmp80;
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                          const items2 = [rect, isPipOrGridMode, null != tmp61, tmp8, origin, safeAreasConfig];
                                                                          cResult[77] = origin;
                                                                          cResult[78] = rect;
                                                                          cResult[79] = isPipOrGridMode;
                                                                          cResult[80] = safeAreasConfig;
                                                                          cResult[81] = null != tmp61;
                                                                          cResult[82] = tmp8;
                                                                          cResult[83] = items2;
                                                                          tmp78 = items2;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          cResult[67] = origin;
                                                          cResult[68] = rect;
                                                          cResult[69] = isPipOrGridMode;
                                                          let bottom2;
                                                          if (safeAreasConfig != null) {
                                                            bottom2 = safeAreasConfig.bottom;
                                                          }
                                                          cResult[70] = bottom2;
                                                          let left2;
                                                          if (safeAreasConfig != null) {
                                                            left2 = safeAreasConfig.left;
                                                          }
                                                          cResult[71] = left2;
                                                          let right2;
                                                          if (safeAreasConfig != null) {
                                                            right2 = safeAreasConfig.right;
                                                          }
                                                          cResult[72] = right2;
                                                          let top2;
                                                          if (safeAreasConfig != null) {
                                                            top2 = safeAreasConfig.top;
                                                          }
                                                          class Be {
                                                            constructor() {
                                                              tmp = closure_16;
                                                              if (tmp) {
                                                                tmp2 = closure_12;
                                                                tmp3 = null;
                                                                if (null != closure_12) {
                                                                  tmp4 = safeAreasConfig;
                                                                  closure_0 = safeAreasConfig(function*(arg0, value) {
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
                                                                        return { value: "IconComponent", done: "IconComponent" };
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
                                                                            const obj8 = closure_1_12;
                                                                            if (null != closure_1_12) {
                                                                              if (null != origin) {
                                                                                const tmp14 = closure_4;
                                                                                if (tmp14) {
                                                                                  rect = { top: 0, bottom: 0, left: 0, right: 0 };
                                                                                } else {
                                                                                  rect = closure_1_13;
                                                                                }
                                                                                const rect2 = closure_5;
                                                                                let left;
                                                                                if (closure_5 != null) {
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
                                                                                const rect1 = { left: closure_2_12(left, c0), right: closure_2_12(right, c1), top: closure_2_12(top, c2), bottom: closure_2_12(bottom, c3) };
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
                                                                                const tmp30 = applicationId(onInvalidUrl[27])(obj4, tmp13);
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
                                                                        return { value: "IconComponent", done: "IconComponent" };
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
                                                                  tmp5 = (function tryInjectJavaScript() {
                                                                    return closure_0(...arguments);
                                                                  })();
                                                                }
                                                              }
                                                              return;
                                                            }
                                                          }
                                                          cResult[73] = top2;
                                                          cResult[74] = null != tmp61;
                                                          cResult[75] = tmp8;
                                                          cResult[76] = Be;
                                                          tmp73 = Be;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  let obj8 = { applicationId, shellUrl: url, iframeUrl: tmp18, framePolicy, frameInsets: tmp58 };
                                                  cResult[61] = applicationId;
                                                  cResult[62] = tmp58;
                                                  cResult[63] = framePolicy;
                                                  cResult[64] = tmp18;
                                                  cResult[65] = url;
                                                  cResult[66] = obj8;
                                                  tmp60 = obj8;
                                                }
                                              }
                                            }
                                            let rect1 = { left: tmp43, right: tmp47, top: tmp51, bottom: tmp55 };
                                            cResult[56] = tmp43;
                                            cResult[57] = tmp47;
                                            cResult[58] = tmp51;
                                            cResult[59] = tmp55;
                                            cResult[60] = rect1;
                                            tmp58 = rect1;
                                          }
                                          let tmp56 = num60;
                                          if (null != bottom) {
                                            let num62 = 0;
                                            if (!bottom.disable) {
                                              let bound;
                                              if (null != bottom.override) {
                                                const _Math8 = Math;
                                                bound = Math.max(0, bottom.override);
                                              } else {
                                                bound = num60;
                                                if (null != bottom.offset) {
                                                  const _Math7 = Math;
                                                  bound = Math.max(0, num60 + bottom.offset);
                                                }
                                              }
                                              num62 = bound;
                                            }
                                            tmp56 = num62;
                                          }
                                          cResult[53] = bottom;
                                          cResult[54] = num60;
                                          cResult[55] = tmp56;
                                          tmp55 = tmp56;
                                        }
                                        let tmp52 = num54;
                                        if (null != top) {
                                          let num56 = 0;
                                          if (!top.disable) {
                                            let bound1;
                                            if (null != top.override) {
                                              const _Math6 = Math;
                                              bound1 = Math.max(0, top.override);
                                            } else {
                                              bound1 = num54;
                                              if (null != top.offset) {
                                                const _Math5 = Math;
                                                bound1 = Math.max(0, num54 + top.offset);
                                              }
                                            }
                                            num56 = bound1;
                                          }
                                          tmp52 = num56;
                                        }
                                        cResult[50] = top;
                                        cResult[51] = num54;
                                        cResult[52] = tmp52;
                                        tmp51 = tmp52;
                                      }
                                      let tmp48 = num48;
                                      if (null != right) {
                                        let num50 = 0;
                                        if (!right.disable) {
                                          let bound2;
                                          if (null != right.override) {
                                            const _Math4 = Math;
                                            bound2 = Math.max(0, right.override);
                                          } else {
                                            bound2 = num48;
                                            if (null != right.offset) {
                                              const _Math3 = Math;
                                              bound2 = Math.max(0, num48 + right.offset);
                                            }
                                          }
                                          num50 = bound2;
                                        }
                                        tmp48 = num50;
                                      }
                                      cResult[47] = right;
                                      cResult[48] = num48;
                                      cResult[49] = tmp48;
                                      tmp47 = tmp48;
                                    }
                                    let tmp44 = num42;
                                    if (null != left) {
                                      let num44 = 0;
                                      if (!left.disable) {
                                        let bound3;
                                        if (null != left.override) {
                                          const _Math2 = Math;
                                          bound3 = Math.max(0, left.override);
                                        } else {
                                          bound3 = num42;
                                          if (null != left.offset) {
                                            const _Math = Math;
                                            bound3 = Math.max(0, num42 + left.offset);
                                          }
                                        }
                                        num44 = bound3;
                                      }
                                      tmp44 = num44;
                                    }
                                    cResult[44] = left;
                                    cResult[45] = num42;
                                    cResult[46] = tmp44;
                                    tmp43 = tmp44;
                                  }
                                }
                                function be() {
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
                                cResult[39] = hadInvalidUrlError;
                                cResult[40] = hasInvalidUrlError;
                                cResult[41] = onInvalidUrl;
                                cResult[42] = be;
                                cResult[43] = items3;
                                tmp39 = items3;
                                tmp38 = be;
                              }
                              function me() {
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
                              cResult[35] = hadInvalidUrlError;
                              cResult[36] = hasInvalidUrlError;
                              cResult[37] = me;
                              cResult[38] = items4;
                              tmp36 = items4;
                              tmp35 = me;
                            }
                          }
                        }
                        function ue() {
                          if (null == closure_14) {
                            const tmp = stateFromStores;
                            if (tmp) {
                              setHasInvalidUrlError(true);
                            } else {
                              const _TypeError = TypeError;
                              const _HermesInternal = HermesInternal;
                              const self = this;
                              const self2 = this;
                              const typeError = new TypeError("Invalid embedded app URL: " + activityUrl);
                              throw typeError;
                            }
                          }
                        }
                        const items5 = [tmp18, activityUrl, stateFromStores, setHasInvalidUrlError];
                        cResult[29] = activityUrl;
                        cResult[30] = tmp18;
                        cResult[31] = stateFromStores;
                        cResult[32] = setHasInvalidUrlError;
                        cResult[33] = ue;
                        cResult[34] = items5;
                        tmp33 = items5;
                        tmp32 = ue;
                      }
                    }
                  }
                }
                function le() {
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
                cResult[25] = onActivityCrash;
                cResult[26] = le;
                tmp27 = le;
              }
            }
          }
        }
      }
    }
    const obj9 = { embeddedAppUrl: activityUrl, iframeUrl: tmp18, iframeSandboxAttributes: tmp15, iframeCsp: tmp20, referrerPolicy, shimVersion: embeddedAppShimVersion, shellBridgeSecret };
    cResult[9] = activityUrl;
    cResult[10] = tmp20;
    cResult[11] = tmp15;
    cResult[12] = tmp18;
    cResult[13] = referrerPolicy;
    cResult[14] = shellBridgeSecret;
    cResult[15] = embeddedAppShimVersion;
    cResult[16] = obj9;
    tmp23 = obj9;
  }
  const tmp10Result = applicationId(tmp2[19]);
  const toURLSafeResult = tmp10Result.toURLSafe("" + activityUrl + "?" + str1);
  cResult[4] = activityUrl;
  cResult[5] = str1;
  cResult[6] = toURLSafeResult;
  tmp18 = toURLSafeResult;
}) : (function BaseEmbeddedAppWebViewContent(deepLinkQueryParams) {
  let allowPopups;
  let framePolicy;
  let iframeId;
  let ignoreSilentHardwareSwitch;
  let obj7;
  let onActivityCrash;
  let onLoadEnd;
  let queryParams;
  let referrerPolicy;
  let tmp28;
  let tmp31;
  let tmp34;
  let url;
  ({ framePolicy, iframeId } = deepLinkQueryParams);
  deepLinkQueryParams = deepLinkQueryParams.deepLinkQueryParams;
  const shellBridgeSecret = deepLinkQueryParams.shellBridgeSecret;
  if (deepLinkQueryParams === undefined) {
    deepLinkQueryParams = {};
  }
  const activityUrl = deepLinkQueryParams.activityUrl;
  const applicationId = deepLinkQueryParams.applicationId;
  ({ queryParams, onActivityCrash } = deepLinkQueryParams);
  const onInvalidUrl = deepLinkQueryParams.onInvalidUrl;
  const isPipOrGridMode = deepLinkQueryParams.isPipOrGridMode;
  ({ ignoreSilentHardwareSwitch, onLoadEnd, allowPopups, referrerPolicy } = deepLinkQueryParams);
  if (ignoreSilentHardwareSwitch === undefined) {
    ignoreSilentHardwareSwitch = true;
  }
  const safeAreasConfig = deepLinkQueryParams.safeAreasConfig;
  const channelId = deepLinkQueryParams.channelId;
  const guildId = deepLinkQueryParams.guildId;
  const activitySessionId = deepLinkQueryParams.activitySessionId;
  let hasInvalidUrlError;
  let rect;
  let stateFromStores;
  let closure_18;
  let ref;
  let origin;
  let obj2 = safeAreasConfig;
  let tmp2 = iframeId;
  let tmp3 = onActivityCrash;
  let tmp = hasInvalidUrlError();
  const context = safeAreasConfig.useContext(iframeId(onActivityCrash[11]).WebViewContext);
  const tmp5 = rect();
  hasInvalidUrlError = tmp5.hasInvalidUrlError;
  const setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp5.hadInvalidUrlError;
  const items = [iframeId];
  const memo = safeAreasConfig.useMemo(() => {
    const obj = WebView2;
    return obj.getWebViewProxy(iframeId);
  }, items);
  rect = activityUrl(onActivityCrash[13])();
  let obj3 = iframeId(onActivityCrash[14]);
  const embeddedAppShimVersion = obj3.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj4 = applicationId(onActivityCrash[15]);
  let obj = { frame_id: iframeId, platform: iframeId(onActivityCrash[16]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj4.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj[iframeId(onActivityCrash[17]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  const tmp12 = activityUrl(onActivityCrash[18])({ allowPopups });
  const str = new URLSearchParams(obj);
  const str1 = str.toString();
  const items1 = [activityUrl, str1];
  const memo1 = safeAreasConfig.useMemo(() => {
    const obj = URLUtilsDefault;
    return obj.toURLSafe("" + activityUrl + "?" + str1);
  }, items1);
  let result;
  if (null != framePolicy) {
    const tmp2Result = tmp2(tmp3[20]);
    result = tmp2Result.deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
  }
  const tmp16 = activityUrl(tmp3[21])({ embeddedAppUrl: activityUrl, iframeUrl: memo1, iframeSandboxAttributes: tmp12, iframeCsp: result, referrerPolicy, shimVersion: embeddedAppShimVersion, shellBridgeSecret });
  const items2 = [applicationId];
  const items3 = [applicationId];
  const callback = obj2.useCallback((nativeEvent) => {
    setHasInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items2);
  const items4 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
  const callback1 = obj2.useCallback((nativeEvent) => {
    setHasInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items3);
  const callback2 = obj2.useCallback(() => {
    setHasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
    obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
    onActivityCrash();
  }, items4);
  const items5 = [channelId];
  const tmp2Result2 = tmp2(tmp3[23]);
  stateFromStores = tmp2Result2.useStateFromStores(items5, () => channelId.getUseActivityUrlOverride());
  const items6 = [memo1, activityUrl, stateFromStores, setHasInvalidUrlError];
  const effect = obj2.useEffect(function() {
    if (null == memo1) {
      const tmp = stateFromStores;
      if (tmp) {
        setHasInvalidUrlError(true);
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("Invalid embedded app URL: " + activityUrl);
        throw typeError;
      }
    }
  }, items6);
  const items7 = [hadInvalidUrlError, hasInvalidUrlError];
  const effect1 = obj2.useEffect(() => {
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
  const effect2 = obj2.useEffect(() => {
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
  let tmp25 = num;
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
    tmp25 = num3;
  }
  let rect1 = { left: tmp25, right: tmp28, top: tmp31, bottom: tmp34 };
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
  tmp28 = num4;
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
    tmp28 = num6;
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
  tmp31 = num7;
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
    tmp31 = num9;
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
  tmp34 = num10;
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
    tmp34 = num12;
  }
  let obj5 = { applicationId, shellUrl: url, iframeUrl: memo1, framePolicy, frameInsets: rect1 };
  url = undefined;
  const tmp7Result = activityUrl(tmp3[26]);
  if (tmp16 != null) {
    url = tmp16.url;
  }
  if (url == null) {
    url = null;
  }
  const tmp7ResultResult = tmp7Result(obj5);
  closure_18 = tmp39;
  ref = obj2.useRef(null);
  origin = undefined;
  if (memo1 != null) {
    origin = memo1.origin;
  }
  const items9 = [rect, isPipOrGridMode, null != tmp7ResultResult, memo, origin, safeAreasConfig];
  const effect3 = obj2.useEffect(() => {
    function tryInjectJavaScript() {
      return obj(...arguments);
    }
    const tmp = closure_18;
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
                return { value: "IconComponent", done: "IconComponent" };
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
                    const obj8 = closure_1_13;
                    if (null != closure_1_13) {
                      if (null != closure_1_20) {
                        const tmp14 = closure_5;
                        if (tmp14) {
                          rect = { top: 0, bottom: 0, left: 0, right: 0 };
                        } else {
                          rect = closure_1_14;
                        }
                        const rect2 = closure_6;
                        let left;
                        if (closure_6 != null) {
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
                        const tmp30 = activityUrl(onActivityCrash[27])(obj4, tmp13);
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
                return { value: "IconComponent", done: "IconComponent" };
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
  }, items9);
  let tmp43 = null;
  if (null != tmp7ResultResult) {
    tmp43 = null;
    if (null != tmp16) {
      let obj6 = { style: tmp.webView, ref, source: obj7, originWhitelist: ["*"], overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: callback, onLoadEnd, onContentProcessDidTerminate: callback2, onRenderProcessGone: callback1, webViewKey: iframeId, temporaryParentNodeTag: context, messagingWithWebViewKeyEnabled: true, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
      obj7 = { html: null, baseUrl: null };
      ({ html: obj11.html, url: obj11.baseUrl } = tmp16);
      const WebView = tmp2(tmp3[12]).WebView;
      const merged2 = Object.assign(tmp7ResultResult);
      tmp43 = activitySessionId(WebView, obj6);
    }
  }
  return tmp43;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasInvalidUrlErrorState() {
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
