// Module ID: 8163
// Function ID: 8164
// Name: AgeVerificationModal
// Dependencies: [19, 21, 5949, 8150, 1113, 3273, 5243, 575, 6785, 7363, 7424, 2]
// Exports: default

// Module 8163 (AgeVerificationModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5949 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

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
  const items = [onComplete, onClose];
  const webviewUrl = onComplete.webviewUrl;
  const callback = react.useCallback(() => {
    onComplete();
    onClose();
  }, items);
  const items1 = [callback];
  const callback1 = react.useCallback((nativeEvent) => {
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
  }, items1);
  const callback2 = react.useCallback((isTopFrame) => {
    let tmp2 = !tmp;
    if (null == isTopFrame.isTopFrame || isTopFrame.isTopFrame) {
      const tmp4 = isOwnDeepLinkUrl(isTopFrame.url);
      let flag = !tmp4;
      if (tmp4) {
        const obj = onClose(callback[2]);
        obj.openURL(isTopFrame.url);
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, []);
  let tmp4 = onClose(callback[3]);
  const intl = onComplete(callback[4]).intl;
  return <tmp4 accessibilityLabel={intl.string(onClose(callback[5]).eKo6mw)} allowsInlineMediaPlayback mediaPlaybackRequiresUserAction={false} domStorageEnabled javaScriptEnabled javaScriptCanOpenWindowsAutomatically source={{ uri: webviewUrl }} onMessage={callback1} onShouldStartLoadWithRequest={callback2} injectedJavaScript="\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n" injectedJavaScriptBeforeContentLoaded="\n  window.open = function(url) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({type: 'AGEKEY_BREAKOUT', url: url}));\n    return null;\n  };\n" />;
}
let jsx = Fragment.jsx;
const constants = { VERIFY_AGE: "VERIFY_AGE" };
let obj = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER });
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationModal.tsx");

export default function AgeVerificationModal(webviewUrl) {
  let headerStyle;
  let headerTitle;
  webviewUrl = webviewUrl.webviewUrl;
  let onComplete = webviewUrl.onComplete;
  let onClose = webviewUrl.onClose;
  let flag = webviewUrl.isExpressiveModalV2;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  jsx = tmp;
  let intl = webviewUrl(onClose[4]).intl;
  const stringResult = intl.string(webviewUrl(onClose[4]).t.wJVyYR);
  let c5 = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult, flag];
  const memo = flag.useMemo(() => {
    let closure_3 = flag;
    function handleClose() {
      closure_2();
      const arr = onComplete(onClose[8]);
      arr.pop();
    }
    function handleCloseAfterCompletion() {
      closure_2();
      const arr = onComplete(onClose[8]);
      arr.pop();
      const tmp2 = onComplete;
      const tmp3 = onClose;
      const tmp5 = isExpressiveModalV2;
      if (tmp5) {
        const tmp2Result = tmp2(tmp3[8]);
        tmp2Result.pop();
      }
    }
    let obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle,
      headerLeft() {
        let intl;
        const obj = { onPress: handleClose, text: intl.string(webviewUrl(onClose[4]).t.cpT0Cq) };
        const HeaderActionButton = webviewUrl(onClose[9]).HeaderActionButton;
        intl = webviewUrl(onClose[4]).intl;
        return headerStyle(HeaderActionButton, obj);
      },
      render() {
        const obj = { webviewUrl, onComplete, onClose: handleCloseAfterCompletion, isExpressiveModalV2 };
        return headerStyle(closure_2_7, obj);
      }
    };
    return { [closure_2_6.VERIFY_AGE]: obj };
  }, items);
  const Navigator = webviewUrl(onClose[10]).Navigator;
  const intl2 = webviewUrl(onClose[4]).intl;
  return <Navigator screens={memo} initialRouteName={constants.VERIFY_AGE} headerBackTitle={intl2.string(webviewUrl(onClose[4]).t["13/7kX"])} />;
};
