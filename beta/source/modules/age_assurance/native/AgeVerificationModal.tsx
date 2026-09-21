// Module ID: 8705
// Function ID: 8706
// Name: AgeVerificationModal
// Dependencies: [19, 8688, 21, 8695, 4616, 4970, 8574, 4758, 580, 4961, 7621, 1119, 558, 568, 7246, 2]

// Module 8705 (AgeVerificationModal)
import nativeDefault from "native" /* 580 */;
import noop from "module_19" /* 19 */;

const require = fn;
function AgeVerifyScreen(uri) {
  const onComplete = uri.onComplete;
  const onClose = uri.onClose;
  let isSuspendedUser;
  let callback;
  isSuspendedUser = onComplete(isSuspendedUser[3]).useIsSuspendedUser();
  const items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    onComplete();
    onClose();
  }, items);
  const items1 = [callback];
  const callback1 = callback.useCallback(() => {
    if (obj.isModalOpen(closure_4)) {
      callback();
    }
  }, items1);
  const obj = onComplete(isSuspendedUser[3]);
  const watchAgeVerificationStatusChange = onComplete(isSuspendedUser[5]).useWatchAgeVerificationStatusChange(callback1);
  const items2 = [callback, isSuspendedUser];
  const callback2 = callback.useCallback((nativeEvent) => {
    if (null != nativeEvent.nativeEvent.data) {
      try {
        if (typeof nativeEvent.nativeEvent.data === "string") {
          const _JSON = JSON;
          let data = JSON.parse(nativeEvent.nativeEvent.data);
        } else {
          data = nativeEvent.nativeEvent.data;
        }
        let tmp3 = isSuspendedUser;
        if (isSuspendedUser) {
          let eventType;
          if (data != null) {
            eventType = data.eventType;
          }
          tmp3 = "Verification.Result" === eventType;
        }
        if (tmp3) {
          callback();
        }
      } catch (err) {
      }
    }
  }, items2);
  return jsx(onClose(isSuspendedUser[6]), { allowsInlineMediaPlayback: true, javaScriptEnabled: true, source: { uri: uri.webviewUrl }, onMessage: callback2, injectedJavaScript: "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n" });
}
let closure_4 = fn(8688).AGE_VERIFICATION_MODAL_KEY;
const jsx = fn(21).jsx;
const constants = { VERIFY_AGE: "VERIFY_AGE" };
const createStyles = fn(4758);
let obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = webviewUrl(onClose[13]).c(9);
  ({ webviewUrl, onComplete, onClose } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[11]).intl;
    const stringResult = intl.string(tmp(tmp2[11]).t.wJVyYR);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onClose) {
    if (cResult[2] === onComplete) {
      if (cResult[3] === tmp4) {
        if (cResult[4] === webviewUrl) {
          let tmp7 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[11]).intl;
          const stringResult1 = intl2.string(tmp(tmp2[11]).t["13/7kX"]);
          cResult[6] = stringResult1;
          let tmp8 = stringResult1;
        } else {
          tmp8 = cResult[6];
        }
        if (cResult[7] !== tmp7) {
          const obj2 = { screens: tmp7, initialRouteName: constants.VERIFY_AGE, headerBackTitle: tmp8 };
          const tmp13 = jsx(tmp(tmp2[14]).Navigator, { screens: tmp7, initialRouteName: constants.VERIFY_AGE, headerBackTitle: tmp8 });
          cResult[7] = tmp7;
          cResult[8] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  function handleClose() {
    closure_2();
    onComplete(onClose[9]).pop();
  }
  const obj3 = { [closure_6.VERIFY_AGE]: obj4 };
  cResult[1] = onClose;
  cResult[2] = onComplete;
  cResult[3] = tmp4;
  cResult[4] = webviewUrl;
  cResult[5] = obj3;
  tmp7 = obj3;
}) : ((webviewUrl) => {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  const tmp = closure_8();
  noop = tmp;
  let intl = webviewUrl(onClose[11]).intl;
  const stringResult = intl.string(webviewUrl(onClose[11]).t.wJVyYR);
  c4 = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = noop.useMemo(() => {
    closure_2 = onClose;
    function handleClose() {
      closure_2();
      onComplete(onClose[9]).pop();
    }
    return {
      [closure_2_6.VERIFY_AGE]: {
        headerStyle: headerStyle.headerStyle,
        headerTitle,
        headerLeft() {
          const obj = { onPress: handleClose, text: null };
          const intl = webviewUrl(onClose[11]).intl;
          obj.text = intl.string(webviewUrl(onClose[11]).t.cpT0Cq);
          return jsx(webviewUrl(onClose[10]).HeaderActionButton, { onPress: handleClose, text: null });
        },
        render() {
          return <AgeVerifyScreen webviewUrl={webviewUrl} onComplete={onComplete} onClose={handleClose} />;
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.VERIFY_AGE, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[11]).intl;
  obj.headerBackTitle = intl2.string(webviewUrl(onClose[11]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[14]).Navigator, { screens: memo, initialRouteName: constants.VERIFY_AGE, headerBackTitle: null });
});
