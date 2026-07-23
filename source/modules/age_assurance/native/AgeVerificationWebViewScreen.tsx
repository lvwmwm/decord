// Module ID: 7546
// Function ID: 60399
// Name: AgeVerificationWebViewScreen
// Dependencies: [57, 31, 27, 7537, 7539, 33, 3, 4130, 689, 3981, 4347, 7542, 3827, 7547, 5586, 2]
// Exports: default

// Module 7546 (AgeVerificationWebViewScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { AGE_VERIFICATION_MODAL_KEY as closure_6 } from "set";
import postToNativeWebView from "postToNativeWebView";
import jsxProd from "jsxProd";
import importDefaultResult from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AgeVerificationIncodeResultStatus: closure_7, buildIncodeFallbackSessionInjection: closure_8, parseIncodeWebViewMessage: closure_9 } = postToNativeWebView);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
importDefaultResult = new importDefaultResult("AgeVerificationWebViewScreen");
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.loadingOverlay = obj1;
_createForOfIteratorHelperLoose.webView = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/age_assurance/native/AgeVerificationWebViewScreen.tsx");

export default function AgeVerificationWebViewScreen(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  const ref = React.useRef(null);
  React = React.useRef(false);
  let closure_5 = React.useRef(false);
  const tmp2 = ref(React.useState(true), 2);
  let first = tmp2[0];
  let closure_6 = tmp2[1];
  const callback = React.useCallback(() => {
    if (!ref2.current) {
      ref2.current = true;
      callback(false);
    }
  }, []);
  const items = [callback];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!outer1_5.current) {
        const obj = { timeoutMs: 15000 };
        outer2_12.warn("WebView initial load timed out", obj);
      }
      outer1_7();
    }, 15000);
    return () => clearTimeout(closure_0);
  }, items);
  const items1 = [onComplete, onClose];
  const callback1 = React.useCallback(() => {
    if (!ref.current) {
      ref.current = true;
      onComplete();
      onClose();
    }
  }, items1);
  const items2 = [callback1];
  const callback2 = React.useCallback(() => {
    let isModalOpenResult = webviewUrl(onClose[9]).isModalOpen(closure_6);
    if (isModalOpenResult) {
      isModalOpenResult = webviewUrl(onClose[10]).isAgeVerified();
      const obj2 = webviewUrl(onClose[10]);
    }
    if (isModalOpenResult) {
      callback1();
    }
  }, items2);
  let obj = webviewUrl(onClose[10]);
  const watchAgeVerificationStatusChange = obj.useWatchAgeVerificationStatusChange(callback2);
  const callback3 = React.useCallback((arg0) => {
    const current = ref.current;
    if (null != current) {
      current.injectJavaScript(callback1(arg0));
    }
  }, []);
  const items3 = [callback1, callback3, onClose];
  const items4 = [webviewUrl];
  const callback4 = React.useCallback((nativeEvent) => {
    const tmp = callback3(nativeEvent.nativeEvent.data);
    if (null != tmp) {
      if ("capture_complete" === tmp2.kind) {
        const result = webviewUrl(onClose[11]).registerIncodeInterview(tmp.interviewId);
        const obj3 = webviewUrl(onClose[11]);
        result.then(() => {
          let isAgeVerifiedResult = !outer1_4.current;
          if (isAgeVerifiedResult) {
            isAgeVerifiedResult = webviewUrl(onClose[10]).isAgeVerified();
            const obj = webviewUrl(onClose[10]);
          }
          if (isAgeVerifiedResult) {
            outer1_8();
          }
        }).catch((error) => {
          outer2_12.warn("Failed to register Incode interview from WebView", { error });
        });
      } else if ("fallback_request" === tmp2.kind) {
        let obj = webviewUrl(onClose[11]);
        obj = { previousInterviewId: tmp2.previousInterviewId };
        const incodeSessionBootstrap = obj.requestIncodeSessionBootstrap(obj);
        incodeSessionBootstrap.then((incode_parameters) => {
          incode_parameters = incode_parameters.incode_parameters;
          let session_token;
          if (null != incode_parameters) {
            session_token = incode_parameters.session_token;
          }
          if (null != session_token) {
            if (null != incode_parameters.interview_id) {
              const obj = {};
              ({ session_token: obj.sessionToken, interview_id: obj.interviewId } = incode_parameters);
              outer1_9(obj);
            }
          }
          outer1_9({ error: true });
        }).catch((error) => {
          outer2_12.warn("Failed to bootstrap Incode fallback session from WebView", { error });
          outer1_9({ error: true });
        });
      } else if (tmp2.status === callback.COMPLETED) {
        callback1();
      } else if (!ref.current) {
        ref.current = true;
        onClose();
      }
    }
  }, items3);
  const memo = React.useMemo(() => {
    const uRL = new URL(webviewUrl);
    return uRL.origin;
  }, items4);
  const items5 = [memo];
  const callback5 = React.useCallback((isTopFrame) => {
    if (null != isTopFrame.isTopFrame) {
      if (!tmp.isTopFrame) {
        return true;
      }
    }
    const uRL = new URL(tmp.url);
    const origin = uRL.origin;
    while (true) {
      let tmp4 = origin;
      let tmp5 = memo;
      let tmp6 = origin === memo;
      let flag2 = tmp6;
      if (tmp6) {
        break;
      } else {
        let tmp7 = onComplete;
        let tmp8 = onClose;
        let num = 12;
        let obj = onComplete(onClose[12]);
        let openURLResult = obj.openURL(isTopFrame.url);
        flag2 = false;
        break;
      }
      return flag2;
    }
  }, items5);
  const tmp13 = _createForOfIteratorHelperLoose();
  obj = { style: tmp13.container };
  obj = {
    ref,
    allowsInlineMediaPlayback: true,
    mediaCapturePermissionGrantType: "grant",
    javaScriptEnabled: true,
    source: { uri: webviewUrl },
    onShouldStartLoadWithRequest: callback5,
    onMessage: callback4,
    onError(code) {
      outer1_12.warn("WebView load error", { code: code.nativeEvent.code });
      callback();
    },
    onLoadEnd() {
      callback();
    },
    injectedJavaScriptBeforeContentLoaded: webviewUrl.injectedJavaScriptBeforeContentLoaded
  };
  ({ webView: obj3.style, webView: obj3.containerStyle } = tmp13);
  const items6 = [memo(onComplete(onClose[13]), obj), ];
  if (first) {
    const obj1 = { style: tmp13.loadingOverlay, children: memo(webviewUrl(onClose[14]).ActivityIndicator, {}) };
    first = memo(closure_5, obj1);
  }
  items6[1] = first;
  obj.children = items6;
  return closure_11(closure_5, obj);
};
