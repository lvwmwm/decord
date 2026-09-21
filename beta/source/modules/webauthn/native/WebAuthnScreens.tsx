// Module ID: 14936
// Function ID: 14937
// Name: WebAuthnScreens
// Dependencies: [14933, 21, 14937, 1115, 14944, 5841, 14939, 14948, 14949, 14952, 14953, 2]
// Exports: getScreens

// Module 14936 (WebAuthnScreens)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14933 */;
import PasskeyUpsellViewDefault from "PasskeyUpsellView" /* 14937 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14939 */;
import PasskeyInitStepDefault from "PasskeyInitStep" /* 14944 */;
import WebAuthnEditStepDefault from "WebAuthnEditStep" /* 14948 */;
import WebAuthnRegisterStepDefault from "WebAuthnRegisterStep" /* 14949 */;
import WebAuthnNameStepDefault from "WebAuthnNameStep" /* 14952 */;
import WebAuthnSuccessStepDefault from "WebAuthnSuccessStep" /* 14953 */;
import size from "module_2" /* 2 */;

const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/webauthn/native/WebAuthnScreens.tsx");

export const getScreens = function getScreens(isModal) {
  isModal = isModal.isModal;
  const obj = { [closure_1_3.MODAL_UPSELL]: obj2 };
  const obj3 = { title: null, render: null, headerLeft: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t["0N1s81"]);
  obj3.render = function render() {
    return jsx(PasskeyInitStepDefault, {});
  };
  let headerCloseButton;
  if (isModal) {
    headerCloseButton = tmp2(5841).getHeaderCloseButton(PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal);
    const tmp2Result = tmp2(5841);
  }
  obj3.headerLeft = headerCloseButton;
  obj[WebAuthnScreens.INIT] = obj3;
  const obj4 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(WebAuthnEditStepDefault, {});
    },
    title: null
  };
  const intl2 = tmp2(1115).intl;
  obj4.title = intl2.string(util.t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj4;
  const obj5 = {
    render() {
      return jsx(WebAuthnRegisterStepDefault, {});
    },
    title: null
  };
  const intl3 = tmp2(1115).intl;
  obj5.title = intl3.string(util.t.vrOCCk);
  obj[WebAuthnScreens.REGISTER] = obj5;
  const obj6 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(WebAuthnNameStepDefault, {});
    },
    title: null,
    headerLeft: null
  };
  const intl4 = tmp2(1115).intl;
  obj6.title = intl4.string(util.t["cY/IOu"]);
  let headerCloseButton1;
  if (isModal) {
    headerCloseButton1 = tmp2(5841).getHeaderCloseButton(PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal);
    const tmp2Result2 = tmp2(5841);
  }
  obj6.headerLeft = headerCloseButton1;
  obj[WebAuthnScreens.NAME] = obj6;
  const obj7 = {
    render() {
      return jsx(WebAuthnSuccessStepDefault, {});
    },
    title: null
  };
  const intl5 = tmp2(1115).intl;
  obj7.title = intl5.string(util.t["7wPZln"]);
  obj[WebAuthnScreens.SUCCESS] = obj7;
  return obj;
};
