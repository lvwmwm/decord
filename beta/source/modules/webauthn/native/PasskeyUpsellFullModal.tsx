// Module ID: 14210
// Function ID: 14211
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14203, 21, 558, 576, 14206, 10733, 2]

// Module 14210 (PasskeyUpsellFullModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Modal from "Modal" /* 10733 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14203 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14206 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = WebAuthnScreens2;
    const screens = tmpResult.getScreens({ isModal: true });
    const tmp8 = jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = WebAuthnScreens2;
  const screens = obj.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
});
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default tmp3;
