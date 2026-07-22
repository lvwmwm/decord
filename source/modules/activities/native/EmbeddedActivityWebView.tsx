// Module ID: 10596
// Function ID: 82671
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 10596 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
    ({ hasFrameId: closure_0, getOrCreateFrameId: closure_1, releaseFrameId } = global);
    importAll = releaseFrameId;
    hasInvalidUrlError = global.hasInvalidUrlError;
    dependencyMap = hasInvalidUrlError;
    setHasInvalidUrlError = global.setHasInvalidUrlError;
    hadInvalidUrlError = global.hadInvalidUrlError;
    closure_5 = hadInvalidUrlError;
    deepLinkQueryParams = global.deepLinkQueryParams;
    if (deepLinkQueryParams === undefined) {
      deepLinkQueryParams = {};
    }
    applicationId = global.applicationId;
    closure_6 = applicationId;
    ({ queryParams, onActivityCrash } = global);
    Linking = onActivityCrash;
    onLoadError = global.onLoadError;
    closure_8 = onLoadError;
    referrerPolicy = global.referrerPolicy;
    ActivityPlatform = referrerPolicy;
    isPipOrGridMode = global.isPipOrGridMode;
    closure_10 = isPipOrGridMode;
    webViewKey = global.webViewKey;
    ComponentActions = webViewKey;
    ({ ignoreSilentHardwareSwitch, activityUrl, allowPopups } = global);
    if (ignoreSilentHardwareSwitch === undefined) {
      ignoreSilentHardwareSwitch = true;
    }
    safeAreasConfig = global.safeAreasConfig;
    AnalyticEvents = safeAreasConfig;
    channelId = global.channelId;
    jsx = channelId;
    guildId = global.guildId;
    closure_14 = guildId;
    activitySessionId = global.activitySessionId;
    closure_15 = activitySessionId;
    isIOS = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    getSafeArea = undefined;
    closure_20 = undefined;
    useHasInvalidUrlErrorState = undefined;
    closure_22 = undefined;
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
    tmp = closure_14();
    context = closure_6.useContext(arg1(dependencyMap[11]).WebViewContext);
    first = closure_5(closure_6.useState(() => callback()), 1)[0];
    isIOS = first;
    first1 = closure_5(closure_6.useState(() => {
      if (null != webViewKey) {
        let v4Result = callback2();
      } else {
        v4Result = callback(hasInvalidUrlError[12]).v4();
        const obj = callback(hasInvalidUrlError[12]);
      }
      return v4Result;
    }), 1)[0];
    closure_17 = first1;
    tmp5 = closure_5(closure_6.useState(null), 2);
    url = tmp5[0];
    closure_18 = url;
    getSafeArea = tmp5[1];
    items = [];
    items[0] = webViewKey;
    memo = closure_6.useMemo(() => {
      let webViewProxy;
      if (null != webViewKey) {
        webViewProxy = callback(hasInvalidUrlError[13]).getWebViewProxy(webViewKey);
        const obj = callback(hasInvalidUrlError[13]);
      }
      return webViewProxy;
    }, items);
    closure_20 = memo;
    tmp7 = closure_5(closure_6.useState(null), 2);
    [str, closure_21] = tmp7;
    items1 = [, , ];
    items1[0] = first;
    items1[1] = first1;
    items1[2] = webViewKey;
    effect = closure_6.useEffect(() => {
      let tmp = first;
      if (first) {
        tmp = null != webViewKey;
      }
      if (!tmp) {
        const ComponentDispatch = callback(hasInvalidUrlError[14]).ComponentDispatch;
        const obj = { id: first1 };
        ComponentDispatch.dispatch(webViewKey.IFRAME_MOUNT, obj);
      }
    }, items1);
    items2 = [, ];
    items2[0] = webViewKey;
    items2[1] = first1;
    effect1 = closure_6.useEffect(() => () => {
      if (null == constants) {
        const ComponentDispatch = callback(closure_3[14]).ComponentDispatch;
        const obj = { id: closure_17 };
        ComponentDispatch.dispatch(constants.IFRAME_UNMOUNT, obj);
      }
    }, items2);
    rect = importDefault(dependencyMap[15])();
    closure_22 = rect;
    obj2 = importAll(dependencyMap[16]);
    obj = {};
    constants = obj2.getConstants();
    merged = Object.assign(queryParams);
    merged1 = Object.assign(deepLinkQueryParams);
    obj["frame_id"] = first1;
    obj["platform"] = ActivityPlatform.MOBILE;
    obj["mobile_app_version"] = constants.Version;
    tmp13 = importDefault(dependencyMap[17])({ allowPopups });
    MOBILE = tmp13;
    uRLSearchParams = new URLSearchParams(obj);
    combined = "" + activityUrl + "?" + uRLSearchParams;
    activityUrl = combined;
    useRef = closure_6.useRef(safeAreasConfig);
    items3 = [, , , ];
    items3[0] = combined;
    items3[1] = tmp13;
    items3[2] = onLoadError;
    items3[3] = referrerPolicy;
    effect2 = closure_6.useEffect(() => {
      function _loadHtml() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = callback(tmp);
        const _loadHtml = obj;
        return obj(...arguments);
      }
      !function loadHtml() {
        return _loadHtml(...arguments);
      }();
    }, items3);
    items4 = [];
    items4[0] = applicationId;
    items5 = [];
    items5[0] = applicationId;
    callback = closure_6.useCallback((nativeEvent) => {
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
    callback1 = closure_6.useCallback((nativeEvent) => {
      activitySessionId.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
    }, items5);
    callback2 = closure_6.useCallback(() => {
      activitySessionId.warn("activity WebView content process terminated for appId " + applicationId);
      let obj = callback2(hasInvalidUrlError[19]);
      obj = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
      obj.track(safeAreasConfig.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj);
      const ComponentDispatch = callback(hasInvalidUrlError[14]).ComponentDispatch;
      obj = { id: first1 };
      ComponentDispatch.dispatch(webViewKey.IFRAME_UNMOUNT, obj);
      releaseFrameId();
      if (null != memo) {
        memo.releaseWebView();
      }
      onActivityCrash();
    }, items6);
    obj4 = arg1(dependencyMap[20]);
    items7 = [];
    items7[0] = closure_8;
    stateFromStores = obj4.useStateFromStores(items7, () => onLoadError.getUseActivityUrlOverride());
    useCallback = stateFromStores;
    items8 = [, , ];
    items8[0] = combined;
    items8[1] = stateFromStores;
    items8[2] = setHasInvalidUrlError;
    effect3 = closure_6.useEffect(() => {
      const uRL = new URL(combined);
      callback3(uRL);
    }, items8);
    items9 = [, ];
    items9[0] = hadInvalidUrlError;
    items9[1] = hasInvalidUrlError;
    effect4 = closure_6.useEffect(() => {
      if (tmp) {
        let obj = callback2(hasInvalidUrlError[21]);
        obj = {};
        const intl = callback(hasInvalidUrlError[22]).intl;
        obj.title = intl.string(callback(hasInvalidUrlError[22]).t.PtobXW);
        const intl2 = callback(hasInvalidUrlError[22]).intl;
        obj.body = intl2.string(callback(hasInvalidUrlError[22]).t.55iAUT);
        const intl3 = callback(hasInvalidUrlError[22]).intl;
        obj.confirmText = intl3.string(callback(hasInvalidUrlError[22]).t.BddRzS);
        obj.show(obj);
      }
    }, items9);
    HermesInternal = null;
    if (null == url) {
      closure_28 = isIOS;
      tmp28 = closure_6;
      flag = false;
      tmp27 = isIOS;
      tmp29 = closure_5;
      tmp30 = closure_5(closure_6.useState(false), 2);
      useEffect = tmp30[1];
      tmp31 = closure_6;
      tmp32 = closure_5;
      tmp33 = closure_5(closure_6.useState([]), 2);
      first2 = tmp33[0];
      useEffect = first2;
      useState = tmp33[1];
      tmp35 = closure_6;
      items10 = [, ];
      items10[0] = applicationId;
      items10[1] = isIOS;
      effect5 = closure_6.useEffect(() => {
        function parseCsp(arg0, str) {
          const match = str.match(arg0);
          if (null !== match) {
            if (match.length >= 2) {
              const parts = match[1].split(" ");
              const found = parts.filter((arg0) => !closure_0.includes(arg0));
              str = match[1];
            }
            return [];
          }
        }
        function _fetchAndParseCSP() {
          // CreateGeneratorClosureLongIndex (0x67)
          const obj = callback(tmp);
          const _fetchAndParseCSP = obj;
          return obj(...arguments);
        }
        if (closure_28) {
          let closure_0 = [-0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012340477675130861];
          function fetchAndParseCSP() {
            return _fetchAndParseCSP(...arguments);
          }();
        }
      }, items10);
      tmp37 = closure_6;
      items11 = [, ];
      items11[0] = null;
      items11[1] = first2;
      tmp39 = null != null;
      callback3 = closure_6.useCallback((mainDocumentURL) => {
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
        const toURLSafeResult = callback2(hasInvalidUrlError[25]).toURLSafe(str);
        const obj2 = callback2(hasInvalidUrlError[25]);
        const toURLSafeResult1 = callback2(hasInvalidUrlError[25]).toURLSafe(mainDocumentURL.url);
        return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
      }, items11);
      if (tmp39) {
        tmp39 = null != url;
      }
      if (tmp39) {
        tmp39 = null != str;
      }
      releaseFrameId = tmp39;
      tmp40 = closure_6;
      ref = closure_6.useRef(null);
      useRef = ref;
      tmp42 = closure_6;
      callback4 = closure_6.useCallback((arg0) => {
        const current = ref.current;
        if (null != current) {
          current.injectJavaScript(callback2(hasInvalidUrlError[26])(arg0));
        }
      }, []);
      onLoadError = callback4;
      items12 = [, , ];
      items12[0] = webViewKey;
      origin = undefined;
      tmp44 = closure_6;
      if (null != url) {
        origin = url.origin;
      }
      items12[1] = origin;
      items12[2] = callback4;
      tmp47 = closure_6;
      items13 = [, , , , , ];
      items13[0] = rect;
      items13[1] = isPipOrGridMode;
      items13[2] = tmp39;
      items13[3] = memo;
      items13[4] = callback4;
      items13[5] = safeAreasConfig;
      callback5 = closure_6.useCallback((nativeEvent) => {
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
            callback2(hasInvalidUrlError[27]).handleMessage(parsed, origin1, callback4);
            const obj = callback2(hasInvalidUrlError[27]);
          }
        }
      }, items12);
      effect6 = closure_6.useEffect(() => {
        function _tryInjectJavaScript() {
          // CreateGeneratorClosureLongIndex (0x67)
          const obj = callback(tmp);
          const _tryInjectJavaScript = obj;
          return obj(...arguments);
        }
        if (tmp39) {
          if (null != memo) {
            function tryInjectJavaScript() {
              return _tryInjectJavaScript(...arguments);
            }();
          }
        }
      }, items13);
      if (null != null) {
        if (null != url) {
          if (tmp27) {
          }
          obj1 = {};
          left = undefined;
          tmp49 = getSafeArea;
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
          tmp52 = getSafeArea;
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
          tmp55 = getSafeArea;
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
          tmp58 = getSafeArea;
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
          tmp61 = isIOS;
          if (isIOS) {
            tmp63 = arg1;
            tmp64 = dependencyMap;
            num5 = 18;
            obj6 = arg1(dependencyMap[18]);
            injectedJavascriptForIOS = obj6.createInjectedJavascriptForIOS(obj1);
          }
          tmp66Result = null;
          if (null != str) {
            tmp67 = arg1;
            tmp68 = dependencyMap;
            num6 = 13;
            tmp66 = jsx;
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
            obj5.directory = require("module_0");
            items14 = [];
            items14[0] = obj5;
            obj4.pathHandlers = items14;
            obj2.androidAssetLoaderConfig = obj4;
            obj2.originWhitelist = [null];
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
            tmp69 = isIOS;
            obj2.allowFileAccess = isIOS;
            obj2.injectedJavaScript = injectedJavascriptForIOS;
            obj2.injectedJavaScriptForMainFrameOnly = false;
            tmp70 = isIOS;
            tmp71 = undefined;
            if (isIOS) {
              tmp71 = callback3;
            }
            obj2.onShouldStartLoadWithRequest = tmp71;
            obj2.mediaPlaybackRequiresUserAction = false;
            obj2.ignoreSilentHardwareSwitch = ignoreSilentHardwareSwitch;
            obj2.allowsInlineMediaPlayback = true;
            obj2.minimumFontSize = 1;
            obj2.bounces = false;
            obj2.allowsProtectedMedia = true;
            tmp66Result = tmp66(arg1(dependencyMap[13]).WebView, obj2);
          }
          return tmp66Result;
        }
      }
      return null;
    } else {
      tmp23 = isIOS;
      if (isIOS) {
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
  return { hasInvalidUrlError: first, setHasInvalidUrlError: tmp[1], hadInvalidUrlError: importDefault(dependencyMap[28])(first) };
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const Linking = arg1(dependencyMap[3]).Linking;
let closure_8 = importDefault(dependencyMap[4]);
({ ActivityPlatform: closure_9, DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ ComponentActions: closure_11, AnalyticEvents: closure_12 } = arg1(dependencyMap[6]));
const jsx = arg1(dependencyMap[7]).jsx;
const tmp3 = arg1(dependencyMap[6]);
let closure_14 = arg1(dependencyMap[8]).createStyles({ webView: { backgroundColor: "transparent" } });
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult("EmbeddedActivityWebView");
const obj = arg1(dependencyMap[8]);
let closure_16 = arg1(dependencyMap[10]).isIOS();
const obj2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/activities/native/EmbeddedActivityWebView.tsx");

export default function EmbeddedActivityWebView(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const currentEmbeddedActivity = channelId.currentEmbeddedActivity;
  const importDefault = currentEmbeddedActivity;
  const applicationId = channelId.applicationId;
  const importAll = applicationId;
  let obj = { "Bool(false)": "spring", "Bool(false)": 0.4, "Bool(false)": 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(channelId, obj);
  const tmp3 = useHasInvalidUrlErrorState();
  const hasInvalidUrlError = tmp3.hasInvalidUrlError;
  const dependencyMap = hasInvalidUrlError;
  const hadInvalidUrlError = tmp3.hadInvalidUrlError;
  let closure_4 = hadInvalidUrlError;
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
  return <BaseActivityWebView {...obj} />;
};
export { BaseActivityWebView };
export { useHasInvalidUrlErrorState };
