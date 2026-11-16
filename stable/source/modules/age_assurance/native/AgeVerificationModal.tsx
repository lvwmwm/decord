// Module ID: 8095
// Function ID: 8096
// Name: AgeVerificationModal
// Dependencies: [19, 6815, 21, 5346, 6813, 5866, 8082, 1113, 3252, 5170, 575, 6831, 7663, 7264, 2]
// Exports: default

// Module 8095 (AgeVerificationModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5346 */;
import LinkingDefault from "Linking" /* 5866 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 6815 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let obj2;
function isOwnDeepLinkUrl(url) {
  if (typeof url !== "string") {
    return false;
  } else {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(url);
      return "discord:" === uRL.protocol;
    } catch (err) {
      return false;
    }
  }
}
function AgeVerifyScreen(onComplete) {
  onComplete = onComplete.onComplete;
  const onClose = onComplete.onClose;
  const isExpressiveModalV2 = onComplete.isExpressiveModalV2;
  let callback;
  const items = [onComplete, onClose];
  const webviewUrl = onComplete.webviewUrl;
  callback = callback.useCallback(() => {
    onComplete();
    onClose();
  }, items);
  const items1 = [callback, isExpressiveModalV2];
  const callback1 = callback.useCallback(() => {
    const obj = NavigationRouteUtils;
    if (obj.isModalOpen(closure_4)) {
      const tmp = isExpressiveModalV2;
      if (!tmp) {
        callback();
      }
    }
  }, items1);
  let obj = onComplete(isExpressiveModalV2[4]);
  const watchAgeVerificationStatusChange = obj.useWatchAgeVerificationStatusChange(callback1);
  const items2 = [callback];
  const callback2 = callback.useCallback((nativeEvent) => {
    function isSafeBreakoutUrl(url) {
      if (typeof url !== "string") {
        return false;
      } else {
        try {
          const _URL = URL;
          const self = this;
          const self2 = this;
          const uRL = new URL(url);
          return "https:" === uRL.protocol;
        } catch (err) {
          return false;
        }
      }
    }
    if (null != nativeEvent.nativeEvent.data) {
      try {
        let data;
        if (typeof nativeEvent.nativeEvent.data === "string") {
          const _JSON = JSON;
          data = JSON.parse(nativeEvent.nativeEvent.data);
        } else {
          data = nativeEvent.nativeEvent.data;
        }
        let type;
        if (data != null) {
          type = data.type;
        }
        if ("AGEKEY_BREAKOUT" === type) {
          const tmp9 = isSafeBreakoutUrl(data.url) || isOwnDeepLinkUrl(data.url);
          if (tmp9) {
            const obj = LinkingDefault;
            obj.openURL(data.url);
          }
        } else {
          let eventType;
          if (data != null) {
            eventType = tmp2.eventType;
          }
          if ("Verification.Result" === eventType) {
            callback();
          }
        }
      } catch (err) {
      }
    }
  }, items2);
  const callback3 = callback.useCallback((isTopFrame) => {
    let tmp2 = !tmp;
    if (null == isTopFrame.isTopFrame || isTopFrame.isTopFrame) {
      const tmp4 = isOwnDeepLinkUrl(isTopFrame.url);
      let flag = !tmp4;
      if (tmp4) {
        const obj = onClose(isExpressiveModalV2[5]);
        obj.openURL(isTopFrame.url);
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, []);
  onClose(isExpressiveModalV2[6]);
  const intl = onComplete(isExpressiveModalV2[7]).intl;
  return <tmp6 accessibilityLabel={intl.string(onClose(isExpressiveModalV2[8]).eKo6mw)} allowsInlineMediaPlayback mediaPlaybackRequiresUserAction={false} domStorageEnabled javaScriptEnabled javaScriptCanOpenWindowsAutomatically source={{ uri: webviewUrl }} onMessage={callback2} onShouldStartLoadWithRequest={callback3} injectedJavaScript="\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n" injectedJavaScriptBeforeContentLoaded="\n  window.open = function(url) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({type: 'AGEKEY_BREAKOUT', url: url}));\n    return null;\n  };\n" />;
}
let closure_4 = AgeVerificationConstants.AGE_VERIFICATION_MODAL_KEY;
let jsx = Fragment.jsx;
const constants = { VERIFY_AGE: "VERIFY_AGE" };
let obj = { headerStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationModal.tsx");

export default function AgeVerificationModal(webviewUrl) {
  let headerTitle;
  webviewUrl = webviewUrl.webviewUrl;
  let onComplete = webviewUrl.onComplete;
  let onClose = webviewUrl.onClose;
  let flag = webviewUrl.isExpressiveModalV2;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  const headerStyle = tmp;
  let intl = webviewUrl(onClose[7]).intl;
  const stringResult = intl.string(webviewUrl(onClose[7]).t.wJVyYR);
  jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult, flag];
  const memo = flag.useMemo(() => {
    let closure_3 = flag;
    function handleClose() {
      closure_2();
      const arr = onComplete(onClose[11]);
      arr.pop();
    }
    function handleCloseAfterCompletion() {
      closure_2();
      const arr = onComplete(onClose[11]);
      arr.pop();
      const tmp2 = onComplete;
      const tmp3 = onClose;
      const tmp5 = isExpressiveModalV2;
      if (tmp5) {
        const tmp2Result = tmp2(tmp3[11]);
        tmp2Result.pop();
      }
    }
    let obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle,
      headerLeft() {
        let intl;
        const obj = { onPress: handleClose, text: intl.string(webviewUrl(onClose[7]).t.cpT0Cq) };
        const HeaderActionButton = webviewUrl(onClose[12]).HeaderActionButton;
        intl = webviewUrl(onClose[7]).intl;
        return headerTitle(HeaderActionButton, obj);
      },
      render() {
        const obj = { webviewUrl, onComplete, onClose: handleCloseAfterCompletion, isExpressiveModalV2 };
        return headerTitle(closure_2_8, obj);
      }
    };
    return { [closure_2_7.VERIFY_AGE]: obj };
  }, items);
  const Navigator = webviewUrl(onClose[13]).Navigator;
  const intl2 = webviewUrl(onClose[7]).intl;
  return <Navigator screens={memo} initialRouteName={constants.VERIFY_AGE} headerBackTitle={intl2.string(webviewUrl(onClose[7]).t["13/7kX"])} />;
};
