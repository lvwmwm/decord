// Module ID: 7874
// Function ID: 7875
// Name: AgeVerificationWebViewScreen
// Dependencies: [32, 19, 17, 7860, 7863, 21, 3, 4836, 576, 4692, 5048, 7866, 4525, 7746, 1364, 5889, 2]
// Exports: default

// Module 7874 (AgeVerificationWebViewScreen)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4525 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 7860 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 7866 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AgeVerificationIncodeWebViewConstants from "AgeVerificationIncodeWebViewConstants" /* 7863 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let incode_parameters;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
let tmp;
let unpackModuleId;
const AgeVerificationUtils = tmp(5048);
let react = react_mod;
const View = react_native.View;
let closure_6 = AgeVerificationConstants.AGE_VERIFICATION_MODAL_KEY;
({ AgeVerificationIncodeResultStatus: metroImportDefault, buildIncodeFallbackSessionInjection: metroImportAll, parseIncodeWebViewMessage: c9 } = AgeVerificationIncodeWebViewConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const tmp4 = new LoggerDefault("AgeVerificationWebViewScreen");
let closure_12 = tmp4;
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingOverlay: rect, webView: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationWebViewScreen.tsx");

export default function AgeVerificationWebViewScreen(webviewUrl) {
  let _undefined;
  let c6;
  let items6;
  let logger;
  let tmp18Result;
  let tmp20;
  let tmp3;
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  react = undefined;
  c6 = undefined;
  const injectedJavaScriptBeforeContentLoaded = webviewUrl.injectedJavaScriptBeforeContentLoaded;
  const ref = react.useRef(null);
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
        logger.warn("WebView initial load timed out", { timeoutMs: 15000 });
      }
      callback();
    }, 15000);
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
  let obj = webviewUrl(onClose[10]);
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
              const obj = webviewUrl(onClose[10]);
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
  const tmp15 = closure_13();
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
  const tmp19 = onComplete(onClose[13]);
  let obj4 = webviewUrl(onClose[14]);
  tmp20 = undefined;
  const tmp16 = closure_11;
  const tmp9 = onClose;
  if (obj4.isIOS()) {
    tmp20 = callback5;
  }
  ({ webView: obj3.style, webView: obj3.containerStyle } = tmp15);
  items6 = [tmp18(tmp19, obj5), ];
  if (tmp18Result) {
    const obj8 = { style: tmp15.loadingOverlay, children: memo(tmp8(tmp9[15]).ActivityIndicator, {}) };
    tmp18Result = memo(ref2, obj8);
  }
  items6[1] = tmp18Result;
  return tmp16(ref2, obj2);
};
