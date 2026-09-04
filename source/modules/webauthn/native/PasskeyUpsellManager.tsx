// Module ID: 14587
// Function ID: 14588
// Name: handlePasskeyUpsellShow
// Dependencies: [1215, 1921, 14581, 673, 7058, 6891, 4301, 1372, 4335, 6538, 14588, 2]

// Module 14587 (handlePasskeyUpsellShow)
import DismissibleContent from "DismissibleContent" /* 1372 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4301 */;
import _crypto from "_crypto" /* 6891 */;
import initializeDefault from "initialize" /* 7058 */;
import _modDef14588 from "module_14588" /* 14588 */;
import closure_3 from "fetchFingerprint" /* 1215 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import closure_5 from "hasFetchedCredentials" /* 14581 */;
import { LoginStates } from "ME" /* 673 */;

require = arg1;
let c7 = false;
let c8 = false;
initializeDefault;
class PasskeyUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePasskeyUpsellShow, LOGIN_RESET: applyArgumentsResult.handleLogout, LOGIN_SUCCESS: applyArgumentsResult.handleLoginSuccess, LOGOUT: applyArgumentsResult.handleLogout };
    map = new Map();
    result = map.set(closure_3, applyArgumentsResult.handlePasskeyUpsellShow);
    result1 = result.set(closure_4, applyArgumentsResult.handlePasskeyUpsellShow);
    applyArgumentsResult.stores = result1.set(closure_5, applyArgumentsResult.handlePasskeyUpsellShow);
    return applyArgumentsResult;
  }
}
const prototype = PasskeyUpsellManager.prototype;
prototype["handlePasskeyUpsellShow"] = function handlePasskeyUpsellShow() {
  if (c8) {
    if (_crypto.hasWebAuthn) {
      if (loginStatus.getLoginStatus() === LoginStates.NONE) {
        if (obj.attemptedPasswordLogin()) {
          let tmpResult = tmp(4301);
          if (!tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(1372).DismissibleContent.PASSWORDLESS_UPSELL)) {
            if (!closure_5.hasFetchedCredentials()) {
              tmpResult = tmp(4335);
              if (!tmpResult.isModalOpen()) {
                currentUser = currentUser.getCurrentUser();
                if (tmp6) {
                  if (obj3.hasFetchedCredentials()) {
                    _modDef14588.openPasskeyUpsell();
                    const obj6 = _modDef14588;
                  } else if (!c7) {
                    c7 = true;
                    const webAuthnCredentials = tmp(6538).fetchWebAuthnCredentials();
                    const tmpResult1 = tmp(6538);
                  }
                }
                tmp6 = undefined !== currentUser && currentUser.verified;
              }
            }
          }
        }
      }
      obj = loginStatus;
    }
  }
};
prototype["handleLoginSuccess"] = function handleLoginSuccess() {
  c8 = true;
};
prototype["handleLogout"] = function handleLogout() {
  c7 = false;
  c8 = false;
};
prototype["markDismissed"] = function markDismissed(USER_DISMISS) {
  let obj = UNSAFE_isDismissibleContentDismissed;
  obj = { dismissAction: USER_DISMISS, forceTrack: true };
  return obj.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.PASSWORDLESS_UPSELL, obj);
};
const passkeyUpsellManager = new PasskeyUpsellManager();
let result = require("set").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;
