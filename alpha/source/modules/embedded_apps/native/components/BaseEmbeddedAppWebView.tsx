// Module ID: 11783
// Function ID: 11784
// Name: BaseEmbeddedAppWebView
// Dependencies: [32, 5, 19, 5669, 1072, 21, 5009, 3, 10911, 11784, 7971, 11785, 11786, 1375, 11771, 11787, 11788, 1378, 11789, 11790, 1253, 563, 5953, 1114, 11796, 10895, 6726, 2]
// Exports: BaseEmbeddedAppWebView

// Module 11783 (BaseEmbeddedAppWebView)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import URLUtilsDefault from "URLUtils" /* 1378 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5953 */;
import WebView2 from "WebView" /* 7971 */;
import useEmbeddedAppCSPDefault from "useEmbeddedAppCSP" /* 10911 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5669 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, c8, c9, closure_6, constants;

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
function BaseEmbeddedAppWebViewContent(deepLinkQueryParams) {
  let _undefined;
  let allowPopups;
  let framePolicy;
  let iframeId;
  let ignoreSilentHardwareSwitch;
  let obj7;
  let onActivityCrash;
  let onLoadEnd;
  let queryParams;
  let referrerPolicy;
  let tmp31;
  let tmp34;
  let tmp37;
  let tmp6;
  let tmp7;
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
  let c10;
  let stateFromStores;
  let closure_18;
  let ref;
  let origin;
  let obj2 = safeAreasConfig;
  let tmp2 = iframeId;
  let tmp3 = onActivityCrash;
  let tmp = c10();
  const context = safeAreasConfig.useContext(iframeId(onActivityCrash[9]).WebViewContext);
  [tmp6, tmp7] = onInvalidUrl(safeAreasConfig.useState(false), 2);
  const tmp5 = onInvalidUrl(safeAreasConfig.useState(false), 2);
  const tmp9 = activityUrl(onActivityCrash[26])(tmp6);
  c10 = tmp6;
  let c11 = tmp7;
  let closure_12 = tmp9;
  const items = [iframeId];
  const memo = safeAreasConfig.useMemo(() => {
    const obj = WebView2;
    return obj.getWebViewProxy(iframeId);
  }, items);
  let rect = activityUrl(onActivityCrash[11])();
  let obj3 = iframeId(onActivityCrash[12]);
  const embeddedAppShimVersion = obj3.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj4 = applicationId(onActivityCrash[13]);
  let obj = { frame_id: iframeId, platform: iframeId(onActivityCrash[14]).ActivityPlatform.MOBILE, mobile_app_version: constants.Version };
  constants = obj4.getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj[iframeId(onActivityCrash[15]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  const tmp15 = activityUrl(onActivityCrash[16])({ allowPopups });
  const str = new URLSearchParams(obj);
  const str1 = str.toString();
  const items1 = [activityUrl, str1];
  const memo1 = safeAreasConfig.useMemo(() => {
    const obj = URLUtilsDefault;
    return obj.toURLSafe("" + activityUrl + "?" + str1);
  }, items1);
  let result;
  if (null != framePolicy) {
    const tmp2Result = tmp2(tmp3[18]);
    result = tmp2Result.deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
  }
  const tmp19 = activityUrl(tmp3[19])({ embeddedAppUrl: activityUrl, iframeUrl: memo1, iframeSandboxAttributes: tmp15, iframeCsp: result, referrerPolicy, shimVersion: embeddedAppShimVersion, shellBridgeSecret });
  const items2 = [applicationId];
  const items3 = [applicationId];
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items2);
  const items4 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
  const callback1 = obj2.useCallback((nativeEvent) => {
    _undefined.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items3);
  const callback2 = obj2.useCallback(() => {
    _undefined.warn("activity WebView content process terminated for appId " + applicationId);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
    obj.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj2);
    onActivityCrash();
  }, items4);
  const items5 = [channelId];
  const tmp2Result2 = tmp2(tmp3[21]);
  stateFromStores = tmp2Result2.useStateFromStores(items5, () => channelId.getUseActivityUrlOverride());
  const items6 = [memo1, activityUrl, stateFromStores, tmp7];
  const effect = obj2.useEffect(function() {
    if (null == memo1) {
      const tmp = stateFromStores;
      if (tmp) {
        _undefined(true);
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
  const items7 = [tmp9, tmp6];
  const effect1 = obj2.useEffect(() => {
    let intl;
    let intl2;
    let intl3;
    const tmp = !closure_12 && c10;
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
  const items8 = [tmp6, tmp9, onInvalidUrl];
  const effect2 = obj2.useEffect(() => {
    let tmp2 = null != onInvalidUrl;
    const tmp = onInvalidUrl;
    if (tmp2) {
      tmp2 = !closure_12;
    }
    if (tmp2) {
      tmp2 = c10;
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
  let tmp28 = num;
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
    tmp28 = num3;
  }
  let rect1 = { left: tmp28, right: tmp31, top: tmp34, bottom: tmp37 };
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
  tmp31 = num4;
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
    tmp31 = num6;
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
  tmp34 = num7;
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
    tmp34 = num9;
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
  tmp37 = num10;
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
    tmp37 = num12;
  }
  let obj5 = { applicationId, shellUrl: url, iframeUrl: memo1, framePolicy, frameInsets: rect1 };
  url = undefined;
  const tmp8Result = activityUrl(tmp3[24]);
  if (tmp19 != null) {
    url = tmp19.url;
  }
  if (url == null) {
    url = null;
  }
  const tmp8ResultResult = tmp8Result(obj5);
  closure_18 = tmp42;
  ref = obj2.useRef(null);
  origin = undefined;
  if (memo1 != null) {
    origin = memo1.origin;
  }
  const items9 = [rect, isPipOrGridMode, null != tmp8ResultResult, memo, origin, safeAreasConfig];
  const effect3 = obj2.useEffect(() => {
    function tryInjectJavaScript() {
      return obj(...arguments);
    }
    const tmp = closure_18;
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
                        const tmp30 = activityUrl(onActivityCrash[25])(obj4, tmp13);
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
                return { value: "HermesInternal", done: null };
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
  let tmp46 = null;
  if (null != tmp8ResultResult) {
    tmp46 = null;
    if (null != tmp19) {
      let obj6 = { style: tmp.webView, ref, source: obj7, originWhitelist: ["*"], overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: callback, onLoadEnd, onContentProcessDidTerminate: callback2, onRenderProcessGone: callback1, webViewKey: iframeId, temporaryParentNodeTag: context, messagingWithWebViewKeyEnabled: true, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
      obj7 = { html: null, baseUrl: null };
      ({ html: obj11.html, url: obj11.baseUrl } = tmp19);
      const WebView = tmp2(tmp3[10]).WebView;
      const merged2 = Object.assign(tmp8ResultResult);
      tmp46 = activitySessionId(WebView, obj6);
    }
  }
  return tmp46;
}
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let tmp2 = new LoggerDefault("BaseEmbeddedAppWebView");
let closure_11 = tmp2;
let result = size.fileFinishedImporting("modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx");

export function BaseEmbeddedAppWebView(onLoadError) {
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
            return <BaseEmbeddedAppWebViewContent framePolicy={{ policy, routerOrigin }} />;
          }
        }
      }
      const merged1 = Object.assign(onLoadError);
      return <BaseEmbeddedAppWebViewContent framePolicy={null} />;
    }
  }
  return null;
}
