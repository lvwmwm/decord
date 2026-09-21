// Module ID: 14938
// Function ID: 14939
// Name: PasskeyUpsellManager
// Dependencies: [502, 1372, 14932, 1074, 7363, 7194, 4576, 2027, 4613, 6838, 14939, 2]

// Module 14938 (PasskeyUpsellManager)
import dismissible_content from "dismissible_content" /* 2027 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4576 */;
import MFAUtils from "MFAUtils" /* 7194 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14939 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1372 */;
import WebAuthnStore from "WebAuthnStore" /* 14932 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7363 */;

require = fn;
const LoginStates = fn(1074).LoginStates;
let c7 = false;
let c8 = false;
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
    if (MFAUtils.hasWebAuthn) {
      if (AuthenticationStore.getLoginStatus() === LoginStates.NONE) {
        if (obj.attemptedPasswordLogin()) {
          if (!tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(2027).DismissibleContent.PASSWORDLESS_UPSELL)) {
            if (!WebAuthnStore.hasFetchedCredentials()) {
              if (!tmpResult3.isModalOpen()) {
                const currentUser = UserStore.getCurrentUser();
                if (tmp6) {
                  if (obj3.hasFetchedCredentials()) {
                    PasskeyUpsellActionCreatorsDefault.openPasskeyUpsell();
                  } else if (!c7) {
                    c7 = true;
                    const webAuthnCredentials = tmp(6838).fetchWebAuthnCredentials();
                    const tmpResult4 = tmp(6838);
                  }
                }
                tmp6 = undefined !== currentUser && currentUser.verified;
              }
              tmpResult3 = tmp(4613);
            }
          }
          tmpResult = tmp(4576);
        }
      }
      obj = AuthenticationStore;
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
  return DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL, { dismissAction: USER_DISMISS, forceTrack: true });
};
const passkeyUpsellManager = new PasskeyUpsellManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;
