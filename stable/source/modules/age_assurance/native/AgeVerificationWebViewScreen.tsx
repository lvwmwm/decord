// Module ID: 7878
// Function ID: 7879
// Name: AgeVerificationWebViewScreen
// Dependencies: [32, 19, 17, 7864, 7867, 21, 3, 4837, 588, 558, 576, 4694, 5049, 7870, 4528, 1370, 7750, 5890, 2]

// Module 7878 (AgeVerificationWebViewScreen)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import LinkingDefault from "Linking" /* 4528 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4694 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 7864 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 7870 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AgeVerificationIncodeWebViewConstants from "AgeVerificationIncodeWebViewConstants" /* 7867 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let incode_parameters, ref;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
let tmp;
let unpackModuleId;
const AgeVerificationUtils = tmp(5049);
let react = react_mod;
const View = react_native.View;
let closure_6 = AgeVerificationConstants.AGE_VERIFICATION_MODAL_KEY;
({ AgeVerificationIncodeResultStatus: metroImportDefault, buildIncodeFallbackSessionInjection: metroImportAll, parseIncodeWebViewMessage: c9 } = AgeVerificationIncodeWebViewConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const tmp4 = new LoggerDefault("AgeVerificationWebViewScreen");
let closure_12 = tmp4;
let c13 = 15000;
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingOverlay: rect, webView: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_14 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function(onClose) {
  let closure_7;
  let first;
  let logger;
  let obj4;
  let onComplete;
  let ref2;
  let timeoutMs;
  let tmp10;
  let tmp7;
  let tmp8;
  let webviewUrl;
  let tmp = onComplete;
  let tmp2 = ref;
  let obj = onComplete(ref[10]);
  const cResult = obj.c(35);
  ({ webviewUrl, onComplete } = onClose);
  onClose = onClose.onClose;
  const injectedJavaScriptBeforeContentLoaded = onClose.injectedJavaScriptBeforeContentLoaded;
  let obj2 = react;
  react.useRef(null);
  ref = react.useRef(false);
  react = react.useRef(false);
  const tmp5 = ref(react.useState(true), 2);
  [r10028, View] = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function v() {
      if (!ref2.current) {
        tmp.current = true;
        View(false);
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor() {
        let closure_0;
        const timeout = setTimeout(() => {
          if (!ref.current) {
            const obj = { timeoutMs };
            logger.warn("WebView initial load timed out", obj);
          }
          first();
        }, timeoutMs);
        return () => clearTimeout(closure_0);
      }
    }
    const items = [first];
    cResult[1] = W;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = W;
  } else {
    class W {
      constructor() {
        let closure_0;
        const timeout = setTimeout(() => {
          if (!ref.current) {
            const obj = { timeoutMs };
            logger.warn("WebView initial load timed out", obj);
          }
          first();
        }, timeoutMs);
        return () => clearTimeout(closure_0);
      }
    }
    tmp8 = cResult[2];
  }
  const effect = obj2.useEffect(tmp7, tmp8);
  if (cResult[3] === onClose) {
    let tmp11;
    let tmp13;
    class W {
      constructor() {
        let closure_0;
        const timeout = setTimeout(() => {
          if (!ref.current) {
            const obj = { timeoutMs };
            logger.warn("WebView initial load timed out", obj);
          }
          first();
        }, timeoutMs);
        return () => clearTimeout(closure_0);
      }
    }
    if (cResult[6] !== tmp10) {
      class F {
        constructor() {
          const obj = NavigationRouteUtils;
          let isModalOpenResult = obj.isModalOpen(closure_6);
          if (isModalOpenResult) {
            const tmpResult = AgeVerificationUtils;
            isModalOpenResult = tmpResult.isAgeVerified();
          }
          if (isModalOpenResult) {
            tmp10();
          }
        }
      }
      cResult[6] = tmp10;
      cResult[7] = F;
      tmp11 = F;
    } else {
      class F {
        constructor() {
          const obj = NavigationRouteUtils;
          let isModalOpenResult = obj.isModalOpen(closure_6);
          if (isModalOpenResult) {
            const tmpResult = AgeVerificationUtils;
            isModalOpenResult = tmpResult.isAgeVerified();
          }
          if (isModalOpenResult) {
            tmp10();
          }
        }
      }
    }
    let tmpResult = tmp(tmp2[12]);
    const watchAgeVerificationStatusChange = tmpResult.useWatchAgeVerificationStatusChange(tmp11);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor(arg0) {
          const current = ref.current;
          if (current != null) {
            current.injectJavaScript(metroImportAll(arg0));
          }
        }
      }
      cResult[8] = U;
      tmp13 = U;
    } else {
      class U {
        constructor(arg0) {
          const current = ref.current;
          if (current != null) {
            current.injectJavaScript(metroImportAll(arg0));
          }
        }
      }
    }
    U = tmp13;
    if (cResult[9] === tmp10) {
      let tmp15;
      let tmp27;
      let tmp28;
      class U {
        constructor(arg0) {
          const current = ref.current;
          if (current != null) {
            current.injectJavaScript(metroImportAll(arg0));
          }
        }
      }
      if (cResult[12] !== webviewUrl) {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
        let self = this;
        let self2 = this;
        let uRL = new URL(webviewUrl);
        cResult[12] = webviewUrl;
        cResult[13] = uRL;
        tmp15 = uRL;
      } else {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
      }
      let origin = tmp15.origin;
      if (cResult[14] !== origin) {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
        cResult[14] = origin;
        cResult[15] = tmp20;
      } else {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
      }
      const tmp22 = closure_14();
      if (cResult[16] !== webviewUrl) {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
        tmp24[0] = webviewUrl;
        cResult[16] = webviewUrl;
        cResult[17] = tmp24;
      } else {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
      }
      if (cResult[18] !== tmp19) {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
        if (obj4.isIOS()) {
          class U {
            constructor(arg0) {
              const current = ref.current;
              if (current != null) {
                current.injectJavaScript(metroImportAll(arg0));
              }
            }
          }
        }
        cResult[18] = tmp19;
        cResult[19] = undefined;
      } else {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
        class H {
          constructor() {
            first();
          }
        }
        cResult[20] = tmp29;
        cResult[21] = H;
        tmp27 = tmp29;
        tmp28 = H;
      } else {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
        class H {
          constructor() {
            first();
          }
        }
      }
      if (cResult[22] === tmp14) {
        class U {
          constructor(arg0) {
            const current = ref.current;
            if (current != null) {
              current.injectJavaScript(metroImportAll(arg0));
            }
          }
        }
      }
      let obj3 = { ref, allowsInlineMediaPlayback: true, mediaCapturePermissionGrantType: "grant", javaScriptEnabled: true, source: tmp23, onShouldStartLoadWithRequest: tmp25, onMessage: tmp14, onError: tmp27, onLoadEnd: tmp28, injectedJavaScriptBeforeContentLoaded, style: null, containerStyle: null };
      ({ webView: obj5.style, webView: obj5.containerStyle } = tmp22);
      cResult[22] = tmp14;
      cResult[23] = injectedJavaScriptBeforeContentLoaded;
      cResult[24] = tmp22.webView;
      cResult[25] = tmp23;
      cResult[26] = tmp25;
      closure_10(onClose(tmp2[16]), obj3);
      class M {
        constructor() {
          if (!ref.current) {
            tmp.current = true;
            onComplete();
            onClose();
          }
        }
      }
    }
    const fn2 = function q(nativeEvent) {
      let tmp10;
      try {
        const tmp2 = React4;
        const tmp3 = React4(nativeEvent.nativeEvent.data);
        if (null != tmp3) {
          if ("capture_complete" === tmp3.kind) {
            const obj3 = AgeVerificationURLActionCreators;
            const result = obj3.registerIncodeInterview(tmp3.interviewId);
            const nextPromise = result.then(() => {
              let isAgeVerifiedResult = !ref.current;
              if (isAgeVerifiedResult) {
                const obj = onComplete(ref[12]);
                isAgeVerifiedResult = obj.isAgeVerified();
              }
              if (isAgeVerifiedResult) {
                closure_1_7();
              }
            });
            nextPromise.catch((error) => {
              const obj = { error };
              logger.warn("Failed to register Incode interview from WebView", obj);
              if (!ref.current) {
                tmp2.current = true;
                onClose();
              }
            });
          } else if ("fallback_request" === tmp3.kind) {
            let obj = AgeVerificationURLActionCreators;
            const obj2 = { previousInterviewId: tmp3.previousInterviewId };
            const incodeSessionBootstrap = obj.requestIncodeSessionBootstrap(obj2);
            const nextPromise1 = incodeSessionBootstrap.then((incode_parameters) => {
              incode_parameters = incode_parameters.incode_parameters;
              let session_token;
              if (incode_parameters != null) {
                session_token = incode_parameters.session_token;
              }
              if (null != session_token) {
                if (null != incode_parameters.interview_id) {
                  const obj = { sessionToken: null, interviewId: null };
                  ({ session_token: obj.sessionToken, interview_id: obj.interviewId } = incode_parameters);
                  closure_1_8(obj);
                }
              }
              closure_1_8({ error: true });
            });
            nextPromise1.catch((error) => {
              const obj = { error };
              logger.warn("Failed to bootstrap Incode fallback session from WebView", obj);
              closure_1_8({ error: true });
            });
          } else if (tmp3.status === metroImportDefault.COMPLETED) {
            tmp10();
          } else if (!ref.current) {
            tmp8.current = true;
            tmp10 = onClose();
          }
        }
      } catch (tmp20) {
        const obj4 = { error: tmp20 };
        logger.warn("Failed to parse WebView message", obj4);
      }
    };
    cResult[9] = tmp10;
    cResult[10] = onClose;
    cResult[11] = fn2;
  }
  class M {
    constructor() {
      if (!ref.current) {
        tmp.current = true;
        onComplete();
        onClose();
      }
    }
  }
  cResult[3] = onClose;
  cResult[4] = onComplete;
  cResult[5] = M;
  tmp10 = M;
}) : ((webviewUrl) => {
  let _undefined;
  let c6;
  let items6;
  let logger;
  let timeoutMs;
  let tmp18Result;
  let tmp20;
  let tmp3;
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  react = undefined;
  c6 = undefined;
  const injectedJavaScriptBeforeContentLoaded = webviewUrl.injectedJavaScriptBeforeContentLoaded;
  ref = react.useRef(null);
  react = react.useRef(false);
  const ref2 = react.useRef(false);
  let tmp2 = ref(react.useState(true), 2);
  [tmp3, c6] = tmp2;
  const callback = react.useCallback(() => {
    if (!ref2.current) {
      tmp.current = true;
      _undefined(false);
    }
  }, []);
  const items = [callback];
  const effect = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      if (!ref.current) {
        const obj = { timeoutMs };
        logger.warn("WebView initial load timed out", obj);
      }
      callback();
    }, timeoutMs);
    return () => clearTimeout(closure_0);
  }, items);
  const items1 = [onComplete, onClose];
  const callback1 = react.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onComplete();
      onClose();
    }
  }, items1);
  const items2 = [callback1];
  const callback2 = react.useCallback(() => {
    const obj = NavigationRouteUtils;
    let isModalOpenResult = obj.isModalOpen(closure_6);
    if (isModalOpenResult) {
      const tmpResult = AgeVerificationUtils;
      isModalOpenResult = tmpResult.isAgeVerified();
    }
    if (isModalOpenResult) {
      callback1();
    }
  }, items2);
  const tmp8 = webviewUrl;
  let obj = webviewUrl(onClose[12]);
  const watchAgeVerificationStatusChange = obj.useWatchAgeVerificationStatusChange(callback2);
  const callback3 = react.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      current.injectJavaScript(metroImportAll(arg0));
    }
  }, []);
  const items3 = [callback1, callback3, onClose];
  const items4 = [webviewUrl];
  const callback4 = react.useCallback((nativeEvent) => {
    try {
      const tmp2 = React4;
      const tmp3 = React4(nativeEvent.nativeEvent.data);
      if (null != tmp3) {
        if ("capture_complete" === tmp3.kind) {
          const obj3 = AgeVerificationURLActionCreators;
          const result = obj3.registerIncodeInterview(tmp3.interviewId);
          const nextPromise = result.then(() => {
            let isAgeVerifiedResult = !ref.current;
            if (isAgeVerifiedResult) {
              const obj = webviewUrl(onClose[12]);
              isAgeVerifiedResult = obj.isAgeVerified();
            }
            if (isAgeVerifiedResult) {
              callback1();
            }
          });
          nextPromise.catch((error) => {
            const obj = { error };
            logger.warn("Failed to register Incode interview from WebView", obj);
            if (!ref.current) {
              tmp2.current = true;
              onClose();
            }
          });
        } else if ("fallback_request" === tmp3.kind) {
          let obj = AgeVerificationURLActionCreators;
          const obj2 = { previousInterviewId: tmp3.previousInterviewId };
          const incodeSessionBootstrap = obj.requestIncodeSessionBootstrap(obj2);
          const nextPromise1 = incodeSessionBootstrap.then((incode_parameters) => {
            incode_parameters = incode_parameters.incode_parameters;
            let session_token;
            if (incode_parameters != null) {
              session_token = incode_parameters.session_token;
            }
            if (null != session_token) {
              if (null != incode_parameters.interview_id) {
                const obj = { sessionToken: null, interviewId: null };
                ({ session_token: obj.sessionToken, interview_id: obj.interviewId } = incode_parameters);
                callback3(obj);
              }
            }
            callback3({ error: true });
          });
          nextPromise1.catch((error) => {
            const obj = { error };
            logger.warn("Failed to bootstrap Incode fallback session from WebView", obj);
            callback3({ error: true });
          });
        } else if (tmp3.status === metroImportDefault.COMPLETED) {
          callback1();
        } else if (!ref.current) {
          tmp8.current = true;
          onClose();
        }
      }
    } catch (tmp20) {
      const obj4 = { error: tmp20 };
      logger.warn("Failed to parse WebView message", obj4);
    }
  }, items3);
  const memo = react.useMemo(() => {
    const uRL = new URL(webviewUrl);
    return uRL.origin;
  }, items4);
  const items5 = [memo];
  const callback5 = react.useCallback(function(isTopFrame) {
    let origin;
    if (null != isTopFrame.isTopFrame) {
      if (!isTopFrame.isTopFrame) {
        return true;
      }
    }
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(isTopFrame.url);
      origin = uRL.origin;
    } catch (err) {
      origin = null;
    }
    let flag2 = origin === memo;
    if (!flag2) {
      const obj = LinkingDefault;
      obj.openURL(isTopFrame.url);
      flag2 = false;
    }
    return flag2;
  }, items5);
  const tmp15 = closure_14();
  let obj2 = { style: tmp15.container, children: items6 };
  const obj5 = {
    ref,
    allowsInlineMediaPlayback: true,
    mediaCapturePermissionGrantType: "grant",
    javaScriptEnabled: true,
    source: { uri: webviewUrl },
    onShouldStartLoadWithRequest: tmp20,
    onMessage: callback4,
    onError(code) {
      const obj = { code: code.nativeEvent.code };
      logger.warn("WebView load error", obj);
      callback();
    },
    onLoadEnd() {
      callback();
    },
    injectedJavaScriptBeforeContentLoaded,
    style: null,
    containerStyle: null
  };
  const tmp19 = onComplete(onClose[16]);
  let obj4 = webviewUrl(onClose[15]);
  tmp20 = undefined;
  const tmp16 = closure_11;
  const tmp9 = onClose;
  if (obj4.isIOS()) {
    tmp20 = callback5;
  }
  ({ webView: obj3.style, webView: obj3.containerStyle } = tmp15);
  items6 = [tmp18(tmp19, obj5), ];
  if (tmp18Result) {
    const obj8 = { style: tmp15.loadingOverlay, children: memo(tmp8(tmp9[17]).ActivityIndicator, {}) };
    tmp18Result = memo(ref2, obj8);
  }
  items6[1] = tmp18Result;
  return tmp16(ref2, obj2);
});
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationWebViewScreen.tsx");

export default tmp6;
