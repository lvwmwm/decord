// Module ID: 11490
// Function ID: 11491
// Name: BaseEmbeddedAppWebView
// Dependencies: [5, 32, 19, 5626, 1084, 21, 4972, 3, 558, 576, 10778, 11491, 7908, 11492, 11493, 1380, 11478, 11494, 11495, 11496, 11497, 1264, 573, 5909, 1125, 11503, 10762, 6661, 2]

// Module 11490 (BaseEmbeddedAppWebView)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1084 */;
import intl4 from "intl" /* 1125 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5909 */;
import usePreviousDefault from "usePrevious" /* 6661 */;
import WebView2 from "WebView" /* 7908 */;
import useEmbeddedAppCSPDefault from "useEmbeddedAppCSP" /* 10778 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5626 */;
import createStyles from "createStyles" /* 4972 */;
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
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseEmbeddedAppWebViewContent(onInvalidUrl) {
  let activityUrl;
  let allowPopups;
  let applicationId;
  let combined;
  let deepLinkQueryParams;
  let framePolicy;
  let hadInvalidUrlError;
  let iframeId;
  let ignoreSilentHardwareSwitch;
  let isPipOrGridMode;
  let onActivityCrash;
  let onLoadEnd;
  let queryParams;
  let referrerPolicy;
  let safeAreasConfig;
  let shellBridgeSecret;
  let tmp10;
  let tmp17;
  let tmp21;
  let tmp8;
  let tmp9;
  let tmp = applicationId;
  let tmp2 = isPipOrGridMode;
  let obj = applicationId(isPipOrGridMode[9]);
  const cResult = obj.c(99);
  ({ framePolicy, iframeId, shellBridgeSecret, deepLinkQueryParams, activityUrl, applicationId } = onInvalidUrl);
  ({ queryParams, onActivityCrash } = onInvalidUrl);
  onInvalidUrl = onInvalidUrl.onInvalidUrl;
  ({ onLoadEnd, allowPopups, referrerPolicy, isPipOrGridMode } = onInvalidUrl);
  ({ ignoreSilentHardwareSwitch, safeAreasConfig } = onInvalidUrl);
  const channelId = onInvalidUrl.channelId;
  const guildId = onInvalidUrl.guildId;
  const activitySessionId = onInvalidUrl.activitySessionId;
  if (undefined === deepLinkQueryParams) {
    deepLinkQueryParams = {};
  }
  let tmp4 = hadInvalidUrlError();
  let obj2 = guildId;
  const context = guildId.useContext(tmp(tmp2[11]).WebViewContext);
  const tmp6 = combined();
  const hasInvalidUrlError = tmp6.hasInvalidUrlError;
  const setHasInvalidUrlError = tmp6.setHasInvalidUrlError;
  hadInvalidUrlError = tmp6.hadInvalidUrlError;
  const tmp7 = channelId(guildId.useState(null), 2);
  [tmp8, tmp9] = tmp7;
  const logger = tmp9;
  if (cResult[0] !== iframeId) {
    const tmpResult = tmp(tmp2[12]);
    const webViewProxy = tmpResult.getWebViewProxy(iframeId);
    cResult[0] = iframeId;
    cResult[1] = webViewProxy;
    tmp10 = webViewProxy;
  } else {
    tmp10 = cResult[1];
  }
  let closure_12 = tmp10;
  let rect = onActivityCrash(tmp2[13])();
  const tmpResult4 = tmp(tmp2[14]);
  const embeddedAppShimVersion = tmpResult4.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj5 = onInvalidUrl(tmp2[15]);
  let obj3 = { frame_id: iframeId, platform: tmp(tmp2[16]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj5.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj3[tmp(tmp2[17]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  if (cResult[2] !== allowPopups) {
    let obj4 = { allowPopups };
    const tmp18 = tmp12(tmp2[18])(obj4);
    cResult[2] = allowPopups;
    cResult[3] = tmp18;
    tmp17 = tmp18;
  } else {
    tmp17 = cResult[3];
  }
  const uRLSearchParams = new URLSearchParams(obj3);
  combined = "" + activityUrl + "?" + uRLSearchParams;
  if (cResult[4] !== framePolicy) {
    let result;
    if (null != framePolicy) {
      const tmpResult5 = tmp(tmp2[19]);
      result = tmpResult5.deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
    }
    cResult[4] = framePolicy;
    cResult[5] = result;
    tmp21 = result;
  } else {
    tmp21 = cResult[5];
  }
  if (cResult[6] === activityUrl) {
    if (cResult[7] === tmp21) {
      if (cResult[8] === tmp17) {
        if (cResult[9] === combined) {
          if (cResult[10] === referrerPolicy) {
            if (cResult[11] === shellBridgeSecret) {
              let tmp23;
              if (cResult[12] === embeddedAppShimVersion) {
                tmp23 = cResult[13];
              }
              const tmp24 = tmp12(tmp2[20])(tmp23);
              if (cResult[14] !== applicationId) {
                function oe(nativeEvent) {
                  logger.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                }
                cResult[14] = applicationId;
                cResult[15] = oe;
              }
              if (cResult[16] !== applicationId) {
                function se(nativeEvent) {
                  logger.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                }
                cResult[16] = applicationId;
                cResult[17] = se;
              }
              if (cResult[18] === activitySessionId) {
                if (cResult[19] === applicationId) {
                  if (cResult[20] === channelId) {
                    if (cResult[21] === guildId) {
                      let tmp29;
                      let tmp28;
                      const _Symbol = Symbol;
                      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                        let tmp30 = activitySessionId;
                        const items = [activitySessionId];
                        function pe() {
                          return activitySessionId.getUseActivityUrlOverride();
                        }
                        cResult[24] = items;
                        cResult[25] = pe;
                        tmp29 = pe;
                        tmp28 = items;
                      } else {
                        tmp28 = cResult[24];
                        tmp29 = cResult[25];
                      }
                      const tmpResult6 = tmp(tmp2[22]);
                      const stateFromStores = tmpResult6.useStateFromStores(tmp28, tmp29);
                      if (cResult[26] === combined) {
                        if (cResult[27] === stateFromStores) {
                          if (cResult[28] === setHasInvalidUrlError) {
                            let tmp32;
                            if (cResult[29] === tmp9) {
                              tmp32 = cResult[30];
                            }
                            if (cResult[31] === combined) {
                              if (cResult[32] === stateFromStores) {
                                let tmp33;
                                if (cResult[33] === setHasInvalidUrlError) {
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
                                      let tmp39;
                                      let tmp40;
                                      if (cResult[41] === onInvalidUrl) {
                                        tmp39 = cResult[42];
                                        tmp40 = cResult[43];
                                      }
                                      const effect2 = obj2.useEffect(tmp39, tmp40);
                                      class Se {
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
                                      let num36;
                                      if (rect != null) {
                                        num36 = rect.left;
                                      }
                                      if (num36 == null) {
                                        num36 = 0;
                                      }
                                      if (cResult[44] === undefined) {
                                        let tmp43;
                                        let num42;
                                        if (cResult[45] === num36) {
                                          tmp43 = cResult[46];
                                        }
                                        let right;
                                        if (safeAreasConfig != null) {
                                          right = safeAreasConfig.right;
                                        }
                                        class Se {
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
                                        if (rect != null) {
                                          num42 = rect.right;
                                        }
                                        if (num42 == null) {
                                          num42 = 0;
                                        }
                                        if (cResult[47] === right) {
                                          let tmp47;
                                          let num48;
                                          if (cResult[48] === num42) {
                                            tmp47 = cResult[49];
                                          }
                                          let top;
                                          if (safeAreasConfig != null) {
                                            top = safeAreasConfig.top;
                                          }
                                          class Se {
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
                                          if (rect != null) {
                                            num48 = rect.top;
                                          }
                                          if (num48 == null) {
                                            num48 = 0;
                                          }
                                          if (cResult[50] === top) {
                                            let tmp51;
                                            let num54;
                                            if (cResult[51] === num48) {
                                              tmp51 = cResult[52];
                                            }
                                            let bottom1;
                                            if (safeAreasConfig != null) {
                                              bottom1 = safeAreasConfig.bottom;
                                            }
                                            class Se {
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
                                            if (rect != null) {
                                              num54 = rect.bottom;
                                            }
                                            if (num54 == null) {
                                              num54 = 0;
                                            }
                                            if (cResult[53] === bottom1) {
                                              let tmp55;
                                              if (cResult[54] === num54) {
                                                tmp55 = cResult[55];
                                              }
                                              if (cResult[56] === tmp43) {
                                                if (cResult[57] === tmp47) {
                                                  if (cResult[58] === tmp51) {
                                                    let tmp58;
                                                    if (cResult[59] === tmp55) {
                                                      tmp58 = cResult[60];
                                                    }
                                                    if (cResult[61] === applicationId) {
                                                      if (cResult[62] === tmp58) {
                                                        if (cResult[63] === framePolicy) {
                                                          if (cResult[64] === tmp8) {
                                                            let tmp59;
                                                            if (cResult[65] === tmp24.url) {
                                                              tmp59 = cResult[66];
                                                            }
                                                            const tmp61 = null != onActivityCrash(tmp2[25])(tmp59);
                                                            class Se {
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
                                                            const ref = obj2.useRef(null);
                                                            let origin;
                                                            if (tmp8 != null) {
                                                              origin = tmp8.origin;
                                                            }
                                                            if (cResult[67] === origin) {
                                                              if (cResult[68] === rect) {
                                                                if (cResult[69] === isPipOrGridMode) {
                                                                  if (safeAreasConfig != null) {
                                                                    let bottom = safeAreasConfig.bottom;
                                                                  }
                                                                  class Se {
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
                                                            let left;
                                                            if (safeAreasConfig != null) {
                                                              left = safeAreasConfig.left;
                                                            }
                                                            cResult[71] = left;
                                                            let right1;
                                                            if (safeAreasConfig != null) {
                                                              right1 = safeAreasConfig.right;
                                                            }
                                                            cResult[72] = right1;
                                                            let top1;
                                                            if (safeAreasConfig != null) {
                                                              top1 = safeAreasConfig.top;
                                                            }
                                                            function xe() {
                                                              function tryInjectJavaScript() {
                                                                return closure_0(...arguments);
                                                              }
                                                              const tmp = closure_16;
                                                              if (tmp) {
                                                                const tmp3 = null;
                                                                if (null != closure_12) {
                                                                  const tmp4 = safeAreasConfig;
                                                                  let closure_0 = safeAreasConfig(function*(arg0, value) {
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
                                                                            const obj8 = closure_1_12;
                                                                            if (null != closure_1_12) {
                                                                              if (null != origin) {
                                                                                const tmp14 = c3;
                                                                                if (tmp14) {
                                                                                  rect = { top: 0, bottom: 0, left: 0, right: 0 };
                                                                                } else {
                                                                                  rect = closure_1_13;
                                                                                }
                                                                                const rect2 = closure_4;
                                                                                let left;
                                                                                if (closure_4 != null) {
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
                                                                                const tmp30 = onActivityCrash(isPipOrGridMode[26])(obj4, tmp13);
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
                                                            cResult[73] = top1;
                                                            cResult[74] = tmp61;
                                                            cResult[75] = tmp10;
                                                            cResult[76] = xe;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    let obj6 = { applicationId: null, shellUrl: tmp24.url, iframeUrl: tmp8, framePolicy, frameInsets: tmp58 };
                                                    class Se {
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
                                                    cResult[61] = applicationId;
                                                    cResult[62] = tmp58;
                                                    cResult[63] = framePolicy;
                                                    cResult[64] = tmp8;
                                                    cResult[65] = tmp24.url;
                                                    cResult[66] = obj6;
                                                    tmp59 = obj6;
                                                  }
                                                }
                                              }
                                              let rect1 = { left: null, right: tmp47, top: tmp51, bottom: tmp55 };
                                              class Se {
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
                                              cResult[56] = tmp43;
                                              cResult[57] = tmp47;
                                              cResult[58] = tmp51;
                                              cResult[59] = tmp55;
                                              cResult[60] = rect1;
                                              tmp58 = rect1;
                                            }
                                            if (null != bottom1) {
                                              if (!bottom1.disable) {
                                                if (null != bottom1.override) {
                                                  const _Math8 = Math;
                                                  let bound = Math.max(0, bottom1.override);
                                                } else {
                                                  bound = num54;
                                                  if (null != bottom1.offset) {
                                                    const _Math7 = Math;
                                                    bound = Math.max(0, num54 + bottom1.offset);
                                                  }
                                                }
                                              }
                                              class Se {
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
                                            cResult[53] = bottom1;
                                            cResult[54] = num54;
                                            cResult[55] = num54;
                                            tmp55 = tmp56;
                                          }
                                          if (null != top) {
                                            if (!top.disable) {
                                              if (null != top.override) {
                                                const _Math6 = Math;
                                                let bound1 = Math.max(0, top.override);
                                              } else {
                                                bound1 = num48;
                                                if (null != top.offset) {
                                                  const _Math5 = Math;
                                                  bound1 = Math.max(0, num48 + top.offset);
                                                }
                                              }
                                            }
                                            class Se {
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
                                          cResult[50] = top;
                                          cResult[51] = num48;
                                          cResult[52] = num48;
                                          tmp51 = tmp52;
                                        }
                                        if (null != right) {
                                          if (!right.disable) {
                                            if (null != right.override) {
                                              const _Math4 = Math;
                                              let bound2 = Math.max(0, right.override);
                                            } else {
                                              bound2 = num42;
                                              if (null != right.offset) {
                                                const _Math3 = Math;
                                                bound2 = Math.max(0, num42 + right.offset);
                                              }
                                            }
                                          }
                                          class Se {
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
                                        cResult[47] = right;
                                        cResult[48] = num42;
                                        cResult[49] = num42;
                                        tmp47 = tmp48;
                                      }
                                      if (null != undefined) {
                                        if (!undefined.disable) {
                                          if (null != undefined.override) {
                                            const _Math2 = Math;
                                            let bound3 = Math.max(0, tmp42.override);
                                          } else {
                                            bound3 = num36;
                                            if (null != undefined.offset) {
                                              const _Math = Math;
                                              bound3 = Math.max(0, num36 + tmp42.offset);
                                            }
                                          }
                                        }
                                        class Se {
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
                                      cResult[44] = undefined;
                                      cResult[45] = num36;
                                      cResult[46] = num36;
                                      tmp43 = tmp44;
                                    }
                                  }
                                  class Se {
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
                                  const items1 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
                                  cResult[39] = hadInvalidUrlError;
                                  cResult[40] = hasInvalidUrlError;
                                  cResult[41] = onInvalidUrl;
                                  cResult[42] = Se;
                                  cResult[43] = items1;
                                  tmp40 = items1;
                                  tmp39 = Se;
                                }
                                const items2 = [hadInvalidUrlError, hasInvalidUrlError];
                                cResult[35] = hadInvalidUrlError;
                                cResult[36] = hasInvalidUrlError;
                                cResult[37] = tmp37;
                                cResult[38] = items2;
                                tmp36 = items2;
                                tmp35 = tmp37;
                              }
                            }
                            const items3 = [, stateFromStores, setHasInvalidUrlError];
                            cResult[31] = combined;
                            cResult[32] = stateFromStores;
                            cResult[33] = setHasInvalidUrlError;
                            cResult[34] = items3;
                            tmp33 = items3;
                          }
                        }
                      }
                      function me() {
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
                      }
                      cResult[26] = combined;
                      cResult[27] = stateFromStores;
                      cResult[28] = setHasInvalidUrlError;
                      cResult[29] = tmp9;
                      cResult[30] = me;
                      tmp32 = me;
                    }
                  }
                }
              }
              function ce() {
                logger.warn("activity WebView content process terminated for appId " + applicationId);
                const obj = AnalyticsUtilsDefault;
                const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
                obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
                onActivityCrash();
              }
              cResult[18] = activitySessionId;
              cResult[19] = applicationId;
              cResult[20] = channelId;
              cResult[21] = guildId;
              cResult[22] = onActivityCrash;
              cResult[23] = ce;
            }
          }
        }
      }
    }
  }
  const obj7 = { embeddedAppUrl: activityUrl, iframeUri: combined, iframeSandboxAttributes: tmp17, iframeCsp: tmp21, referrerPolicy, shimVersion: embeddedAppShimVersion, shellBridgeSecret };
  cResult[6] = activityUrl;
  cResult[7] = tmp21;
  cResult[8] = tmp17;
  cResult[9] = combined;
  cResult[10] = referrerPolicy;
  cResult[11] = shellBridgeSecret;
  cResult[12] = embeddedAppShimVersion;
  cResult[13] = obj7;
  tmp23 = obj7;
}) : (function BaseEmbeddedAppWebViewContent(deepLinkQueryParams) {
  let _undefined;
  let activityUrl;
  let allowPopups;
  let applicationId;
  let c12;
  let framePolicy;
  let iframeId;
  let ignoreSilentHardwareSwitch;
  let obj7;
  let onActivityCrash;
  let onLoadEnd;
  let queryParams;
  let referrerPolicy;
  let tmp30;
  let tmp33;
  let tmp36;
  let tmp7;
  ({ framePolicy, iframeId } = deepLinkQueryParams);
  deepLinkQueryParams = deepLinkQueryParams.deepLinkQueryParams;
  const shellBridgeSecret = deepLinkQueryParams.shellBridgeSecret;
  if (deepLinkQueryParams === undefined) {
    deepLinkQueryParams = {};
  }
  ({ activityUrl, applicationId } = deepLinkQueryParams);
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
  let setHasInvalidUrlError;
  c12 = undefined;
  let rect;
  let stateFromStores;
  let closure_17;
  let ref;
  let origin;
  let obj2 = channelId;
  let tmp2 = iframeId;
  let tmp3 = onInvalidUrl;
  let tmp = setHasInvalidUrlError();
  const context = channelId.useContext(iframeId(onInvalidUrl[11]).WebViewContext);
  const tmp5 = rect();
  const hasInvalidUrlError = tmp5.hasInvalidUrlError;
  setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp5.hadInvalidUrlError;
  [tmp7, c12] = safeAreasConfig(channelId.useState(null), 2);
  const items = [iframeId];
  const tmp6 = safeAreasConfig(channelId.useState(null), 2);
  const memo = channelId.useMemo(() => {
    const obj = WebView2;
    return obj.getWebViewProxy(iframeId);
  }, items);
  rect = applicationId(onInvalidUrl[13])();
  let obj3 = iframeId(onInvalidUrl[14]);
  const embeddedAppShimVersion = obj3.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj4 = onActivityCrash(onInvalidUrl[15]);
  let obj = { frame_id: iframeId, platform: iframeId(onInvalidUrl[16]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj4.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj[iframeId(onInvalidUrl[17]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  let tmp14 = applicationId(onInvalidUrl[18])({ allowPopups });
  const uRLSearchParams = new URLSearchParams(obj);
  const combined = "" + activityUrl + "?" + uRLSearchParams;
  let result;
  if (null != framePolicy) {
    const tmp2Result = tmp2(tmp3[19]);
    result = tmp2Result.deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
  }
  const tmp18 = applicationId(tmp3[20])({ embeddedAppUrl: activityUrl, iframeUri: combined, iframeSandboxAttributes: tmp14, iframeCsp: result, referrerPolicy, shimVersion: embeddedAppShimVersion, shellBridgeSecret });
  const items1 = [applicationId];
  const items2 = [applicationId];
  const callback = obj2.useCallback((nativeEvent) => {
    hadInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items1);
  const items3 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
  const callback1 = obj2.useCallback((nativeEvent) => {
    hadInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items2);
  const callback2 = obj2.useCallback(() => {
    hadInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
    obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
    onActivityCrash();
  }, items3);
  const items4 = [guildId];
  const tmp2Result2 = tmp2(tmp3[22]);
  stateFromStores = tmp2Result2.useStateFromStores(items4, () => guildId.getUseActivityUrlOverride());
  const items5 = [combined, stateFromStores, setHasInvalidUrlError];
  const effect = obj2.useEffect(function() {
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
  }, items5);
  const items6 = [hadInvalidUrlError, hasInvalidUrlError];
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
  }, items6);
  const items7 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
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
  }, items7);
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
  let tmp27 = num;
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
    tmp27 = num3;
  }
  let rect1 = { left: tmp27, right: tmp30, top: tmp33, bottom: tmp36 };
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
  tmp30 = num4;
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
    tmp30 = num6;
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
  tmp33 = num7;
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
    tmp33 = num9;
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
  tmp36 = num10;
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
    tmp36 = num12;
  }
  let obj5 = { applicationId, shellUrl: tmp18.url, iframeUrl: tmp7, framePolicy, frameInsets: rect1 };
  const tmp38 = applicationId(tmp3[25])(obj5);
  closure_17 = tmp39;
  ref = obj2.useRef(null);
  origin = undefined;
  if (tmp7 != null) {
    origin = tmp7.origin;
  }
  const items8 = [rect, isPipOrGridMode, null != tmp38, memo, origin, safeAreasConfig];
  const effect3 = obj2.useEffect(() => {
    function tryInjectJavaScript() {
      return obj(...arguments);
    }
    const tmp = closure_17;
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
                    const obj8 = closure_1_13;
                    if (null != closure_1_13) {
                      if (null != closure_1_19) {
                        const tmp14 = closure_4;
                        if (tmp14) {
                          rect = { top: 0, bottom: 0, left: 0, right: 0 };
                        } else {
                          rect = closure_1_14;
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
                        const tmp30 = applicationId(onInvalidUrl[26])(obj4, tmp13);
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
  }, items8);
  let tmp43 = null;
  if (null != tmp38) {
    let obj6 = { style: tmp.webView, ref, source: obj7, originWhitelist: ["*"], overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: callback, onLoadEnd, onContentProcessDidTerminate: callback2, onRenderProcessGone: callback1, webViewKey: iframeId, temporaryParentNodeTag: context, messagingWithWebViewKeyEnabled: true, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
    obj7 = { html: null, baseUrl: null };
    ({ html: obj11.html, url: obj11.baseUrl } = tmp18);
    const WebView = tmp2(tmp3[12]).WebView;
    const merged2 = Object.assign(tmp38);
    tmp43 = hasInvalidUrlError(WebView, obj6);
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
