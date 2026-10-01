// Module ID: 14218
// Function ID: 14219
// Name: WebAuthnScreens
// Dependencies: [14215, 21, 14219, 1115, 14226, 5936, 14221, 14232, 14233, 14238, 14239, 2]
// Exports: getScreens

// Module 14218 (WebAuthnScreens)
import Fragment from "Fragment" /* 21 */;
import intl6 from "intl" /* 1115 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14215 */;
import PasskeyUpsellViewDefault from "PasskeyUpsellView" /* 14219 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14221 */;
import PasskeyInitStepDefault from "PasskeyInitStep" /* 14226 */;
import WebAuthnEditStepDefault from "WebAuthnEditStep" /* 14232 */;
import WebAuthnRegisterStepDefault from "WebAuthnRegisterStep" /* 14233 */;
import WebAuthnNameStepDefault from "WebAuthnNameStep" /* 14238 */;
import WebAuthnSuccessStepDefault from "WebAuthnSuccessStep" /* 14239 */;
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
  intl2 = tmp2(1115).intl;
  obj[EDIT] = obj4;
  const REGISTER = tmp.REGISTER;
  const obj5 = {
    render() {
      return jsx(WebAuthnRegisterStepDefault, {});
    },
    title: intl3.string(intl6.t.vrOCCk)
  };
  intl3 = tmp2(1115).intl;
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
  intl4 = tmp2(1115).intl;
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
  intl5 = tmp2(1115).intl;
  obj[SUCCESS] = obj7;
  return obj;
};
