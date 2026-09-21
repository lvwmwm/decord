// Module ID: 14929
// Function ID: 14930
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14922, 21, 558, 568, 14925, 11453, 2]

// Module 14929 (PasskeyUpsellFullModal)
import c from "c" /* 568 */;
import Modal from "Modal" /* 11453 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14925 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14922).WebAuthnScreens;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const screens = tmp(14925).getScreens({ isModal: true });
    const obj2 = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
    const tmp8 = jsx(tmp(11453).Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
    cResult[0] = tmp8;
    let first = tmp8;
    const tmpResult = tmp(14925);
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
});
