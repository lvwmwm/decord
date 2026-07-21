// Module ID: 7539
// Function ID: 60339
// Name: AgeVerificationWebViewScreen
// Dependencies: []
// Exports: default

// Module 7539 (AgeVerificationWebViewScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = arg1(dependencyMap[3]).AGE_VERIFICATION_MODAL_KEY;
({ AgeVerificationIncodeResultStatus: closure_7, buildIncodeFallbackSessionInjection: closure_8, parseIncodeWebViewMessage: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult("AgeVerificationWebViewScreen");
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
const obj1 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST };
obj.loadingOverlay = obj1;
const tmp3 = arg1(dependencyMap[5]);
obj.webView = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST };
let closure_13 = obj.createStyles(obj);
const obj2 = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/age_assurance/native/AgeVerificationWebViewScreen.tsx");

export default function AgeVerificationWebViewScreen(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const arg1 = webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const importDefault = onComplete;
  const onClose = webviewUrl.onClose;
  const dependencyMap = onClose;
  const ref = React.useRef(null);
  let callback = ref;
  const React = React.useRef(false);
  let closure_5 = React.useRef(false);
  const tmp2 = callback(React.useState(true), 2);
  let first = tmp2[0];
  let closure_6 = tmp2[1];
  callback = React.useCallback(() => {
    if (!ref2.current) {
      ref2.current = true;
      callback(false);
    }
  }, []);
  const items = [callback];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!ref.current) {
        const obj = { timeoutMs: 15000 };
        closure_12.warn("WebView initial load timed out", obj);
      }
      callback();
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
  let obj = arg1(dependencyMap[10]);
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
          let isAgeVerifiedResult = !ref.current;
          if (isAgeVerifiedResult) {
            isAgeVerifiedResult = callback(closure_2[10]).isAgeVerified();
            const obj = callback(closure_2[10]);
          }
          if (isAgeVerifiedResult) {
            callback2();
          }
        }).catch((error) => {
          closure_12.warn("Failed to register Incode interview from WebView", { error });
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
              callback3(obj);
            }
          }
          callback3({ error: true });
        }).catch((error) => {
          closure_12.warn("Failed to bootstrap Incode fallback session from WebView", { error });
          callback3({ error: true });
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
        // break
      }
      return flag2;
    }
  }, items5);
  const tmp13 = callback2();
  obj = { style: tmp13.container };
  obj = {
    "Bool(false)": null,
    "Bool(false)": null,
    "Bool(false)": null,
    "Bool(false)": null,
    ref,
    source: { uri: webviewUrl },
    onShouldStartLoadWithRequest: callback5,
    onMessage: callback4,
    onError(code) {
      closure_12.warn("WebView load error", { code: code.nativeEvent.code });
      callback();
    },
    onLoadEnd() {
      callback();
    },
    injectedJavaScriptBeforeContentLoaded: webviewUrl.injectedJavaScriptBeforeContentLoaded
  };
  ({ webView: obj3.style, webView: obj3.containerStyle } = tmp13);
  const items6 = [memo(importDefault(dependencyMap[13]), obj), ];
  if (first) {
    const obj1 = { style: tmp13.loadingOverlay, children: memo(arg1(dependencyMap[14]).ActivityIndicator, {}) };
    first = memo(closure_5, obj1);
  }
  items6[1] = first;
  obj.children = items6;
  return closure_11(closure_5, obj);
};
