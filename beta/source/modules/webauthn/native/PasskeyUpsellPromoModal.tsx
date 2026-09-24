// Module ID: 14970
// Function ID: 14971
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 14960, 21, 558, 568, 14963, 1119, 11489, 2]

// Module 14970 (PasskeyUpsellPromoModal)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import Modal from "Modal" /* 11489 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14963 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14960).WebAuthnScreens;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const screens = tmp(14963).getScreens({ isModal: true });
    cResult[0] = screens;
    let first = screens;
    const tmpResult = tmp(14963);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["8H5RmH"]);
    cResult[1] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    const obj2 = { name: WebAuthnScreens.NAME, params: null };
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj3.name = tmp6;
    obj2.params = obj3;
    const items = [obj2];
    const obj4 = { screens: first, initialRouteStack: items };
    const tmp14 = jsx(tmp(11489).Modal, { screens: first, initialRouteStack: items });
    cResult[2] = arg0;
    cResult[3] = tmp14;
    let tmp8 = tmp14;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : ((arg0) => {
  const obj2 = { name: WebAuthnScreens.NAME, params: null };
  const obj3 = {};
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = util.intl;
  obj3.name = intl.string(util.t["8H5RmH"]);
  obj2.params = obj3;
  const initialRouteStack = [obj2];
  return jsx(Modal.Modal, { screens, initialRouteStack });
});
