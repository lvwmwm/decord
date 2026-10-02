// Module ID: 14206
// Function ID: 14207
// Name: WebAuthnScreens
// Dependencies: [14203, 21, 14207, 1127, 14214, 5933, 14209, 14220, 14221, 14226, 14227, 2]
// Exports: getScreens

// Module 14206 (WebAuthnScreens)
import Fragment from "Fragment" /* 21 */;
import intl6 from "intl" /* 1127 */;
import NavigatorHeader from "NavigatorHeader" /* 5933 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14203 */;
import PasskeyUpsellViewDefault from "PasskeyUpsellView" /* 14207 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14209 */;
import PasskeyInitStepDefault from "PasskeyInitStep" /* 14214 */;
import WebAuthnEditStepDefault from "WebAuthnEditStep" /* 14220 */;
import WebAuthnRegisterStepDefault from "WebAuthnRegisterStep" /* 14221 */;
import WebAuthnNameStepDefault from "WebAuthnNameStep" /* 14226 */;
import WebAuthnSuccessStepDefault from "WebAuthnSuccessStep" /* 14227 */;
import size from "module_2" /* 2 */;

const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/webauthn/native/WebAuthnScreens.tsx");

export const getScreens = function getScreens(isModal) {
  let headerCloseButton;
  let headerCloseButton1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj2;
  isModal = isModal.isModal;
  const obj = { [closure_1_3.MODAL_UPSELL]: obj2 };
  const tmp = WebAuthnScreens;
  const INIT = WebAuthnScreens.INIT;
  obj2 = {
    title: "",
    render() {
      return jsx(PasskeyUpsellViewDefault, {});
    }
  };
  const obj3 = {
    title: intl.string(intl6.t["0N1s81"]),
    render() {
      return jsx(PasskeyInitStepDefault, {});
    },
    headerLeft: headerCloseButton
  };
  intl = intl6.intl;
  headerCloseButton = undefined;
  if (isModal) {
    const tmp2Result = NavigatorHeader;
    headerCloseButton = tmp2Result.getHeaderCloseButton(PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal);
  }
  obj[INIT] = obj3;
  const EDIT = tmp.EDIT;
  const obj4 = {
    render(arg0) {
      WebAuthnEditStepDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    },
    title: intl2.string(intl6.t.UBBwwF)
  };
  intl2 = tmp2(1127).intl;
  obj[EDIT] = obj4;
  const REGISTER = tmp.REGISTER;
  const obj5 = {
    render() {
      return jsx(WebAuthnRegisterStepDefault, {});
    },
    title: intl3.string(intl6.t.vrOCCk)
  };
  intl3 = tmp2(1127).intl;
  obj[REGISTER] = obj5;
  const NAME = tmp.NAME;
  const obj6 = {
    render(arg0) {
      WebAuthnNameStepDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    },
    title: intl4.string(intl6.t["cY/IOu"]),
    headerLeft: headerCloseButton1
  };
  intl4 = tmp2(1127).intl;
  headerCloseButton1 = undefined;
  if (isModal) {
    const tmp2Result2 = NavigatorHeader;
    headerCloseButton1 = tmp2Result2.getHeaderCloseButton(PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal);
  }
  obj[NAME] = obj6;
  const SUCCESS = tmp.SUCCESS;
  const obj7 = {
    render() {
      return jsx(WebAuthnSuccessStepDefault, {});
    },
    title: intl5.string(intl6.t["7wPZln"])
  };
  intl5 = tmp2(1127).intl;
  obj[SUCCESS] = obj7;
  return obj;
};
