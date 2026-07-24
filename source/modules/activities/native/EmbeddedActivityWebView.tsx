// Module ID: 10635
// Function ID: 82913
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 27, 7370, 4155, 653, 33, 4130, 3, 477, 10636, 491, 7592, 1207, 10637, 1554, 10638, 10639, 675, 624, 4470, 1212, 507, 10640, 1443, 10520, 10521, 8328, 4323, 10554, 2]
// Exports: default

// Module 10635 (_createForOfIteratorHelperLoose)
import closure_4 from "items3";
import _slicedToArray from "_slicedToArray";
import closure_6 from "set";
import { Linking } from "importDefaultResult1";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items3 from "items3";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "get ActivityIndicator";
import set from "set";
import set from "result";

let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
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
class BaseActivityWebView {
  constructor(arg0) {
    ({ hasFrameId, getOrCreateFrameId, releaseFrameId } = global);
    hasInvalidUrlError = global.hasInvalidUrlError;
    setHasInvalidUrlError = global.setHasInvalidUrlError;
    hadInvalidUrlError = global.hadInvalidUrlError;
    deepLinkQueryParams = global.deepLinkQueryParams;
    if (deepLinkQueryParams === undefined) {
      deepLinkQueryParams = {};
    }
    applicationId = global.applicationId;
    ({ queryParams, onActivityCrash } = global);
    onLoadError = global.onLoadError;
    referrerPolicy = global.referrerPolicy;
    isPipOrGridMode = global.isPipOrGridMode;
    webViewKey = global.webViewKey;
    ({ ignoreSilentHardwareSwitch, activityUrl, allowPopups } = global);
    if (ignoreSilentHardwareSwitch === undefined) {
      ignoreSilentHardwareSwitch = true;
    }
    safeAreasConfig = global.safeAreasConfig;
    channelId = global.channelId;
    guildId = global.guildId;
    activitySessionId = global.activitySessionId;
    useState = undefined;
    c17 = undefined;
    c18 = undefined;
    useState = undefined;
    c20 = undefined;
    useState = undefined;
    c22 = undefined;
    MOBILE = undefined;
    activityUrl = undefined;
    useRef = undefined;
    useCallback = undefined;
    HermesInternal = undefined;
    closure_28 = undefined;
    useEffect = undefined;
    useEffect = undefined;
    useState = undefined;
    releaseFrameId = undefined;
    useRef = undefined;
    onLoadError = undefined;
    tmp = guildId();
    context = applicationId.useContext(require("context").WebViewContext);
    first = hadInvalidUrlError(applicationId.useState(() => callback()), 1)[0];
    useState = first;
    first1 = hadInvalidUrlError(applicationId.useState(() => {
      if (null != webViewKey) {
        let v4Result = callback2();
      } else {
        v4Result = outer1_0(hasInvalidUrlError[12]).v4();
        const obj = outer1_0(hasInvalidUrlError[12]);
      }
      return v4Result;
    }), 1)[0];
    c17 = first1;
    tmp5 = hadInvalidUrlError(applicationId.useState(null), 2);
    url = tmp5[0];
    c18 = url;
    useState = tmp5[1];
    items = [];
    items[0] = webViewKey;
    memo = applicationId.useMemo(() => {
      let webViewProxy;
      if (null != webViewKey) {
        webViewProxy = outer1_0(hasInvalidUrlError[13]).getWebViewProxy(webViewKey);
        const obj = outer1_0(hasInvalidUrlError[13]);
      }
      return webViewProxy;
    }, items);
    c20 = memo;
    tmp7 = hadInvalidUrlError(applicationId.useState(null), 2);
    [str, useState] = tmp7;
    items1 = [, , ];
    items1[0] = first;
    items1[1] = first1;
    items1[2] = webViewKey;
    effect = applicationId.useEffect(() => {
      let tmp = first;
      if (first) {
        tmp = null != webViewKey;
      }
      if (!tmp) {
        const ComponentDispatch = outer1_0(hasInvalidUrlError[14]).ComponentDispatch;
        const obj = { id: first1 };
        ComponentDispatch.dispatch(webViewKey.IFRAME_MOUNT, obj);
      }
    }, items1);
    items2 = [, ];
    items2[0] = webViewKey;
    items2[1] = first1;
    effect1 = applicationId.useEffect(() => () => {
      if (null == outer1_11) {
        const ComponentDispatch = outer2_0(hasInvalidUrlError[14]).ComponentDispatch;
        const obj = { id: outer1_17 };
        ComponentDispatch.dispatch(webViewKey.IFRAME_UNMOUNT, obj);
      }
    }, items2);
    rect = require("getStableSafeAreaInsets")();
    c22 = rect;
    obj2 = require("getConstants");
    obj = {};
    constants = obj2.getConstants();
    merged = Object.assign(queryParams);
    merged1 = Object.assign(deepLinkQueryParams);
    obj["frame_id"] = first1;
    obj["platform"] = referrerPolicy.MOBILE;
    obj["mobile_app_version"] = constants.Version;
    tmp13 = require("getIFrameSandboxAttributes")({ allowPopups });
    MOBILE = tmp13;
    uRLSearchParams = new URLSearchParams(obj);
    combined = "" + activityUrl + "?" + uRLSearchParams;
    activityUrl = combined;
    useRef = applicationId.useRef(safeAreasConfig);
    items3 = [, , , ];
    items3[0] = combined;
    items3[1] = tmp13;
    items3[2] = onLoadError;
    items3[3] = referrerPolicy;
    effect2 = applicationId.useEffect(() => {
      function _loadHtml() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = setHasInvalidUrlError(tmp);
        return obj(...arguments);
      }
      !(function loadHtml() {
        return _loadHtml(...arguments);
      })();
    }, items3);
    items4 = [];
    items4[0] = applicationId;
    items5 = [];
    items5[0] = applicationId;
    callback = applicationId.useCallback((nativeEvent) => {
      activitySessionId.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
    }, items4);
    items6 = [, , , , , , , ];
    items6[0] = applicationId;
    items6[1] = channelId;
    items6[2] = guildId;
    items6[3] = activitySessionId;
    items6[4] = first1;
    items6[5] = releaseFrameId;
    items6[6] = memo;
    items6[7] = onActivityCrash;
    callback1 = applicationId.useCallback((nativeEvent) => {
      activitySessionId.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
    }, items5);
    callback2 = applicationId.useCallback(() => {
      activitySessionId.warn("activity WebView content process terminated for appId " + applicationId);
      let obj = outer1_1(hasInvalidUrlError[19]);
      obj = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
      obj.track(safeAreasConfig.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj);
      const ComponentDispatch = outer1_0(hasInvalidUrlError[14]).ComponentDispatch;
      obj = { id: first1 };
      ComponentDispatch.dispatch(webViewKey.IFRAME_UNMOUNT, obj);
      releaseFrameId();
      if (null != memo) {
        memo.releaseWebView();
      }
      onActivityCrash();
    }, items6);
    obj4 = require("defaultAreStatesEqual");
    items7 = [];
    items7[0] = onLoadError;
    stateFromStores = obj4.useStateFromStores(items7, () => onLoadError.getUseActivityUrlOverride());
    useCallback = stateFromStores;
    items8 = [, , ];
    items8[0] = combined;
    items8[1] = stateFromStores;
    items8[2] = setHasInvalidUrlError;
    effect3 = applicationId.useEffect(() => {
      const uRL = new URL(combined);
      callback3(uRL);
    }, items8);
    items9 = [, ];
    items9[0] = hadInvalidUrlError;
    items9[1] = hasInvalidUrlError;
    effect4 = applicationId.useEffect(() => {
      if (tmp) {
        let obj = outer1_1(hasInvalidUrlError[21]);
        obj = {};
        const intl = outer1_0(hasInvalidUrlError[22]).intl;
        obj.title = intl.string(outer1_0(hasInvalidUrlError[22]).t.PtobXW);
        const intl2 = outer1_0(hasInvalidUrlError[22]).intl;
        obj.body = intl2.string(outer1_0(hasInvalidUrlError[22]).t["55iAUT"]);
        const intl3 = outer1_0(hasInvalidUrlError[22]).intl;
        obj.confirmText = intl3.string(outer1_0(hasInvalidUrlError[22]).t.BddRzS);
        obj.show(obj);
      }
    }, items9);
    HermesInternal = null;
    if (null == url) {
      closure_28 = useState;
      tmp28 = applicationId;
      flag = false;
      tmp27 = useState;
      tmp29 = hadInvalidUrlError;
      tmp30 = hadInvalidUrlError(applicationId.useState(false), 2);
      useEffect = tmp30[1];
      tmp31 = applicationId;
      tmp32 = hadInvalidUrlError;
      tmp33 = hadInvalidUrlError(applicationId.useState([]), 2);
      first2 = tmp33[0];
      useEffect = first2;
      useState = tmp33[1];
      tmp35 = applicationId;
      items10 = [, ];
      items10[0] = applicationId;
      items10[1] = useState;
      effect5 = applicationId.useEffect(() => {
        function parseCsp(arg0, str) {
          const match = str.match(arg0);
          if (null !== match) {
            if (match.length >= 2) {
              const parts = match[1].split(" ");
              const found = parts.filter((arg0) => !outer1_0.includes(arg0));
              str = match[1];
            }
            return [];
          }
        }
        function _fetchAndParseCSP() {
          // CreateGeneratorClosureLongIndex (0x67)
          const obj = setHasInvalidUrlError(tmp);
          return obj(...arguments);
        }
        if (closure_28) {
          let closure_0 = ["'self'"];
          (function fetchAndParseCSP() {
            return _fetchAndParseCSP(...arguments);
          })();
        }
      }, items10);
      tmp37 = applicationId;
      items11 = [, ];
      items11[0] = null;
      items11[1] = first2;
      tmp39 = null != null;
      callback3 = applicationId.useCallback((mainDocumentURL) => {
        mainDocumentURL = mainDocumentURL.mainDocumentURL;
        if (null != combined1) {
          if (null != mainDocumentURL) {
            if (mainDocumentURL !== combined1) {
              onActivityCrash.openURL(mainDocumentURL.url);
              return false;
            }
          }
        }
        const tmp2 = first1(first2);
        let iter = tmp2();
        if (!iter.done) {
          const _RegExp = RegExp;
          const regExp = new RegExp(iter.value);
          while (!regExp.test(mainDocumentURL.url)) {
            let iter2 = tmp2();
            iter = iter2;
          }
          return true;
        }
        const activityUrlOverride = onLoadError.getActivityUrlOverride();
        let str = "";
        if (null != activityUrlOverride) {
          str = activityUrlOverride;
        }
        const toURLSafeResult = outer1_1(hasInvalidUrlError[25]).toURLSafe(str);
        const obj2 = outer1_1(hasInvalidUrlError[25]);
        const toURLSafeResult1 = outer1_1(hasInvalidUrlError[25]).toURLSafe(mainDocumentURL.url);
        return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
      }, items11);
      if (tmp39) {
        tmp39 = null != url;
      }
      if (tmp39) {
        tmp39 = null != str;
      }
      releaseFrameId = tmp39;
      tmp40 = applicationId;
      ref = applicationId.useRef(null);
      useRef = ref;
      tmp42 = applicationId;
      callback4 = applicationId.useCallback((arg0) => {
        const current = ref.current;
        if (null != current) {
          current.injectJavaScript(outer1_1(hasInvalidUrlError[26])(arg0));
        }
      }, []);
      onLoadError = callback4;
      items12 = [, , ];
      items12[0] = webViewKey;
      origin = undefined;
      tmp44 = applicationId;
      if (null != url) {
        origin = url.origin;
      }
      items12[1] = origin;
      items12[2] = callback4;
      tmp47 = applicationId;
      items13 = [, , , , , ];
      items13[0] = rect;
      items13[1] = isPipOrGridMode;
      items13[2] = tmp39;
      items13[3] = memo;
      items13[4] = callback4;
      items13[5] = safeAreasConfig;
      callback5 = applicationId.useCallback((nativeEvent) => {
        if (null == webViewKey) {
          const _JSON = JSON;
          const parsed = JSON.parse(nativeEvent.nativeEvent.data);
          let tmp4 = "object" === typeof parsed;
          if (tmp4) {
            let origin;
            if (null != url) {
              origin = url.origin;
            }
            tmp4 = null != origin;
          }
          if (tmp4) {
            let origin1;
            if (null != url) {
              origin1 = url.origin;
            }
            outer1_1(hasInvalidUrlError[27]).handleMessage(parsed, origin1, callback4);
            const obj = outer1_1(hasInvalidUrlError[27]);
          }
        }
      }, items12);
      effect6 = applicationId.useEffect(() => {
        function _tryInjectJavaScript() {
          // CreateGeneratorClosureLongIndex (0x67)
          const obj = setHasInvalidUrlError(tmp);
          return obj(...arguments);
        }
        if (c32) {
          if (null != memo) {
            (function tryInjectJavaScript() {
              return _tryInjectJavaScript(...arguments);
            })();
          }
        }
      }, items13);
      if (null != null) {
        if (null != url) {
          if (tmp27) {
          }
          obj1 = {};
          left = undefined;
          tmp49 = useState;
          if (null != safeAreasConfig) {
            left = safeAreasConfig.left;
          }
          left1 = undefined;
          if (null != rect) {
            left1 = rect.left;
          }
          num = 0;
          if (null != left1) {
            num = left1;
          }
          obj1.left = tmp49(left, num);
          right = undefined;
          tmp52 = useState;
          if (null != safeAreasConfig) {
            right = safeAreasConfig.right;
          }
          right1 = undefined;
          if (null != rect) {
            right1 = rect.right;
          }
          num2 = 0;
          if (null != right1) {
            num2 = right1;
          }
          obj1.right = tmp52(right, num2);
          top = undefined;
          tmp55 = useState;
          if (null != safeAreasConfig) {
            top = safeAreasConfig.top;
          }
          top1 = undefined;
          if (null != rect) {
            top1 = rect.top;
          }
          num3 = 0;
          if (null != top1) {
            num3 = top1;
          }
          obj1.top = tmp55(top, num3);
          bottom = undefined;
          tmp58 = useState;
          if (null != safeAreasConfig) {
            bottom = safeAreasConfig.bottom;
          }
          bottom1 = undefined;
          if (null != rect) {
            bottom1 = rect.bottom;
          }
          num4 = 0;
          if (null != bottom1) {
            num4 = bottom1;
          }
          obj1.bottom = tmp58(bottom, num4);
          tmp61 = useState;
          if (useState) {
            tmp63 = hasFrameId;
            tmp64 = hasInvalidUrlError;
            num5 = 18;
            obj6 = require("safeAreaInitJs");
            injectedJavascriptForIOS = obj6.createInjectedJavascriptForIOS(obj1);
          }
          tmp66Result = null;
          if (null != str) {
            tmp67 = hasFrameId;
            tmp68 = hasInvalidUrlError;
            num6 = 13;
            tmp66 = channelId;
            obj2 = {};
            obj2.style = tmp.webView;
            obj2.ref = ref;
            obj3 = {};
            obj3.uri = null;
            obj2.source = obj3;
            obj4 = {};
            if ("" === url.port) {
              host = url.host;
            } else {
              _HermesInternal3 = HermesInternal;
              str6 = ":";
              host = "" + url.hostname + ":" + url.port;
            }
            obj4.domain = host;
            str7 = "http:";
            obj4.httpAllowed = "http:" === url.protocol;
            obj5 = {};
            str8 = "internal";
            obj5.type = "internal";
            _HermesInternal4 = HermesInternal;
            str9 = "/";
            obj5.path = "/" + first1 + "/";
            obj5.directory = require("asyncGeneratorStep");
            items14 = [];
            items14[0] = obj5;
            obj4.pathHandlers = items14;
            obj2.androidAssetLoaderConfig = obj4;
            obj2.originWhitelist = ["*"];
            str10 = "never";
            obj2.overScrollMode = "never";
            obj2.scrollEnabled = false;
            flag2 = true;
            obj2.cacheEnabled = true;
            obj2.onError = callback;
            obj2.onContentProcessDidTerminate = callback2;
            obj2.onRenderProcessGone = callback1;
            obj2.webViewKey = webViewKey;
            obj2.temporaryParentNodeTag = context;
            obj2.messagingWithWebViewKeyEnabled = null != webViewKey;
            obj2.onMessage = callback5;
            tmp69 = useState;
            obj2.allowFileAccess = useState;
            obj2.injectedJavaScript = injectedJavascriptForIOS;
            obj2.injectedJavaScriptForMainFrameOnly = false;
            tmp70 = useState;
            tmp71 = undefined;
            if (useState) {
              tmp71 = callback3;
            }
            obj2.onShouldStartLoadWithRequest = tmp71;
            obj2.mediaPlaybackRequiresUserAction = false;
            obj2.ignoreSilentHardwareSwitch = ignoreSilentHardwareSwitch;
            obj2.allowsInlineMediaPlayback = true;
            obj2.minimumFontSize = 1;
            obj2.bounces = false;
            obj2.allowsProtectedMedia = true;
            tmp66Result = tmp66(require("WebView").WebView, obj2);
          }
          return tmp66Result;
        }
      }
      return null;
    } else {
      tmp23 = useState;
      if (useState) {
        _HermesInternal2 = HermesInternal;
        str5 = "file://";
        combined1 = "file://" + str;
      } else {
        _HermesInternal = HermesInternal;
        str2 = "/";
        str3 = "/activity.html";
        str4 = "";
        tmp24 = first1;
        combined1 = "" + url.origin + "/" + first1 + "/activity.html";
      }
      HermesInternal = combined1;
      tmp26 = combined1;
    }
    return;
  }
}
function useHasInvalidUrlErrorState() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  return { hasInvalidUrlError: first, setHasInvalidUrlError: tmp[1], hadInvalidUrlError: importDefault(8328)(first) };
}
({ ActivityPlatform: closure_9, DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY: closure_10 } = items3);
({ ComponentActions: closure_11, AnalyticEvents: closure_12 } = ME);
let closure_14 = _createForOfIteratorHelperLoose.createStyles({ webView: { backgroundColor: "transparent" } });
importDefaultResult = new importDefaultResult("EmbeddedActivityWebView");
set = set.isIOS();
const result = set.fileFinishedImporting("modules/activities/native/EmbeddedActivityWebView.tsx");

export default function EmbeddedActivityWebView(channelId) {
  channelId = channelId.channelId;
  const currentEmbeddedActivity = channelId.currentEmbeddedActivity;
  const applicationId = channelId.applicationId;
  let obj = { channelId: 0, currentEmbeddedActivity: 0, applicationId: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(channelId, obj);
  const tmp3 = useHasInvalidUrlErrorState();
  const hasInvalidUrlError = tmp3.hasInvalidUrlError;
  const hadInvalidUrlError = tmp3.hadInvalidUrlError;
  obj = {};
  if (null != currentEmbeddedActivity) {
    if (null != currentEmbeddedActivity.customId) {
      obj.custom_id = currentEmbeddedActivity.customId;
    }
    if (null != currentEmbeddedActivity.referrerId) {
      obj.referrer_id = currentEmbeddedActivity.referrerId;
    }
  }
  const items = [hasInvalidUrlError, hadInvalidUrlError, channelId, applicationId, currentEmbeddedActivity];
  const effect = React.useEffect(() => {
    if (tmp) {
      if (null != channelId) {
        let obj = currentEmbeddedActivity(hasInvalidUrlError[29]);
        const participant = obj.selectParticipant(channelId, null);
      }
      let _location;
      obj = {};
      if (null != currentEmbeddedActivity) {
        _location = currentEmbeddedActivity.location;
      }
      obj.location = _location;
      obj.applicationId = applicationId;
      obj.showFeedback = false;
      currentEmbeddedActivity(hasInvalidUrlError[30]).leaveActivity(obj);
      const obj2 = currentEmbeddedActivity(hasInvalidUrlError[30]);
    }
  }, items);
  obj = {
    hasFrameId() {
      return currentEmbeddedActivity(hasInvalidUrlError[30]).hasFrameId();
    },
    getOrCreateFrameId() {
      return currentEmbeddedActivity(hasInvalidUrlError[30]).getOrCreateFrameId();
    },
    releaseFrameId() {
      return currentEmbeddedActivity(hasInvalidUrlError[30]).releaseFrameId();
    },
    hasInvalidUrlError,
    setHasInvalidUrlError: tmp3.setHasInvalidUrlError,
    hadInvalidUrlError,
    deepLinkQueryParams: obj,
    applicationId,
    channelId
  };
  const merged1 = Object.assign(merged);
  return <BaseActivityWebView hasFrameId={function hasFrameId() {
    return currentEmbeddedActivity(hasInvalidUrlError[30]).hasFrameId();
  }} getOrCreateFrameId={function getOrCreateFrameId() {
    return currentEmbeddedActivity(hasInvalidUrlError[30]).getOrCreateFrameId();
  }} releaseFrameId={function releaseFrameId() {
    return currentEmbeddedActivity(hasInvalidUrlError[30]).releaseFrameId();
  }} hasInvalidUrlError={hasInvalidUrlError} setHasInvalidUrlError={tmp3.setHasInvalidUrlError} hadInvalidUrlError={hadInvalidUrlError} deepLinkQueryParams={obj} applicationId={applicationId} channelId={channelId} />;
};
export { BaseActivityWebView };
export { useHasInvalidUrlErrorState };
