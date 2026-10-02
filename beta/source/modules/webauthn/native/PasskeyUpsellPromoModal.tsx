// Module ID: 14213
// Function ID: 14214
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 14203, 21, 558, 576, 14206, 1127, 10733, 2]

// Module 14213 (PasskeyUpsellPromoModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1127 */;
import Modal from "Modal" /* 10733 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14203 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14206 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let obj3;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = WebAuthnScreens2;
    const screens = tmpResult.getScreens({ isModal: true });
    cResult[0] = screens;
    first = screens;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(intl2.t["8H5RmH"]);
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    const obj2 = { name: WebAuthnScreens.NAME, params: obj3 };
    obj3 = { name: tmp6 };
    const merged = Object.assign(arg0);
    const items = [obj2];
    const tmp14 = jsx(Modal.Modal, { screens: first, initialRouteStack: items });
    cResult[2] = arg0;
    cResult[3] = tmp14;
    tmp8 = tmp14;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : ((arg0) => {
  let intl;
  let obj3;
  const obj2 = { name: WebAuthnScreens.NAME, params: obj3 };
  obj3 = { name: intl.string(intl2.t["8H5RmH"]) };
  const obj = WebAuthnScreens2;
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  intl = intl2.intl;
  const initialRouteStack = [obj2];
  return jsx(Modal.Modal, { screens, initialRouteStack });
});
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default tmp3;
