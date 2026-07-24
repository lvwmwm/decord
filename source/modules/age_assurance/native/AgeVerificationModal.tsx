// Module ID: 7602
// Function ID: 60584
// Name: AgeVerifyScreen
// Dependencies: [31, 7582, 33, 7588, 3981, 4347, 7592, 4130, 689, 4337, 5788, 1212, 5517, 2]
// Exports: default

// Module 7602 (AgeVerifyScreen)
import result from "result";
import { AGE_VERIFICATION_MODAL_KEY as closure_4 } from "set";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function AgeVerifyScreen(onComplete) {
  onComplete = onComplete.onComplete;
  const onClose = onComplete.onClose;
  let obj = onComplete(isSuspendedUser[3]);
  isSuspendedUser = obj.useIsSuspendedUser();
  const items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    onComplete();
    onClose();
  }, items);
  const items1 = [callback];
  const callback1 = callback.useCallback(() => {
    if (obj.isModalOpen(outer1_4)) {
      callback();
    }
  }, items1);
  const watchAgeVerificationStatusChange = onComplete(isSuspendedUser[5]).useWatchAgeVerificationStatusChange(callback1);
  const items2 = [callback, isSuspendedUser];
  const callback2 = callback.useCallback((nativeEvent) => {
    if (null != nativeEvent.nativeEvent.data) {
      if ("string" === typeof tmp.nativeEvent.data) {
        const _JSON = JSON;
        let data = JSON.parse(nativeEvent.nativeEvent.data);
      } else {
        data = tmp.nativeEvent.data;
      }
      let tmp6 = isSuspendedUser;
      if (isSuspendedUser) {
        let eventType;
        if (null != tmp4) {
          eventType = data.eventType;
        }
        tmp6 = "Verification.Result" === eventType;
      }
      if (tmp6) {
        callback();
      }
    }
  }, items2);
  obj = { allowsInlineMediaPlayback: true, javaScriptEnabled: true, source: { uri: onComplete.webviewUrl }, onMessage: callback2, injectedJavaScript: "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n" };
  return jsx(onClose(isSuspendedUser[6]), { allowsInlineMediaPlayback: true, javaScriptEnabled: true, source: { uri: onComplete.webviewUrl }, onMessage: callback2, injectedJavaScript: "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n" });
}
function getScreens(headerStyle, arg1, arg2, arg3, headerTitle) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  function handleClose() {
    dependencyMap();
    let arr = callback2(4337);
    arr = arr.pop();
  }
  return {
    [closure_6.VERIFY_AGE]: {
      headerStyle: headerStyle.headerStyle,
      headerTitle,
      headerLeft() {
        const obj = { onPress: handleClose };
        const intl = callback(1212).intl;
        obj.text = intl.string(callback(1212).t.cpT0Cq);
        return outer1_5(callback(5788).HeaderActionButton, obj);
      },
      render() {
        return outer1_5(outer1_8, { webviewUrl: closure_0, onComplete: closure_1, onClose: handleClose });
      }
    }
  };
}
let closure_6 = { VERIFY_AGE: "VERIFY_AGE" };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.headerStyle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/age_assurance/native/AgeVerificationModal.tsx");

export default function AgeVerificationModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  const tmp = _createForOfIteratorHelperLoose();
  const React = tmp;
  const intl = webviewUrl(onClose[11]).intl;
  const stringResult = intl.string(webviewUrl(onClose[11]).t.wJVyYR);
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = React.useMemo(() => outer1_9(result, webviewUrl, onComplete, onClose, closure_4), items);
  const obj = { screens: memo, initialRouteName: constants.VERIFY_AGE };
  const intl2 = webviewUrl(onClose[11]).intl;
  obj.headerBackTitle = intl2.string(webviewUrl(onClose[11]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[12]).Navigator, { screens: memo, initialRouteName: constants.VERIFY_AGE });
};
