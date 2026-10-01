// Module ID: 7864
// Function ID: 7865
// Name: AgeVerificationIncodeModal
// Dependencies: [19, 21, 4836, 576, 5039, 6795, 1115, 7865, 7874, 6421, 2]
// Exports: default

// Module 7864 (AgeVerificationIncodeModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let react = react_mod;
let jsx = Fragment.jsx;
const constants = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
let obj = { headerStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeModal.tsx");

export default function AgeVerificationIncodeModal(webviewUrl) {
  let closure_3;
  let headerTitle;
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  const tmp = closure_6();
  react = tmp;
  let intl = webviewUrl(onClose[6]).intl;
  const stringResult = intl.string(webviewUrl(onClose[6]).t.wJVyYR);
  jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = react.useMemo(() => {
    function handleClose() {
      closure_2();
      const arr = onComplete(onClose[4]);
      arr.pop();
    }
    const uRL = new URL(webviewUrl);
    const origin = uRL.origin;
    let obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft() {
        let intl;
        const obj = { onPress: handleClose, text: intl.string(webviewUrl(onClose[6]).t.cpT0Cq) };
        const HeaderActionButton = webviewUrl(onClose[5]).HeaderActionButton;
        intl = webviewUrl(onClose[6]).intl;
        return headerTitle(HeaderActionButton, obj);
      },
      render(arg0, arg1) {
        let closure_0 = arg1;
        let obj = {
          onClose: handleClose,
          trustedOrigin: origin,
          onMethodSelected(c2) {
            const obj = { injectedJavaScriptBeforeContentLoaded: c2 };
            return navigation.navigate(constants.VERIFY_AGE, obj);
          }
        };
        return headerTitle(onComplete(onClose[7]), obj);
      }
    };
    return {
      [closure_2_5.METHOD_SELECT]: obj,
      [closure_2_5.VERIFY_AGE]: {
        headerStyle: closure_3.headerStyle,
        headerTitle,
        headerLeft() {
          let intl;
          const obj = { onPress: handleClose, text: intl.string(webviewUrl(onClose[6]).t.cpT0Cq) };
          const HeaderActionButton = webviewUrl(onClose[5]).HeaderActionButton;
          intl = webviewUrl(onClose[6]).intl;
          return headerTitle(HeaderActionButton, obj);
        },
        render(injectedJavaScriptBeforeContentLoaded) {
          const obj = { webviewUrl, onComplete, onClose: handleClose, injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded };
          return headerTitle(onComplete(onClose[8]), obj);
        }
      }
    };
  }, items);
  const Navigator = webviewUrl(onClose[9]).Navigator;
  const intl2 = webviewUrl(onClose[6]).intl;
  return <Navigator screens={memo} initialRouteName={constants.METHOD_SELECT} headerBackTitle={intl2.string(webviewUrl(onClose[6]).t["13/7kX"])} />;
};
