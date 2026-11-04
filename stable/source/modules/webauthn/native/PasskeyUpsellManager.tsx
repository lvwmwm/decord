// Module ID: 17083
// Function ID: 17084
// Name: PasskeyUpsellManager
// Dependencies: [502, 1392, 16005, 1087, 7246, 7076, 5033, 4839, 5182, 6709, 17080, 2]

// Module 17083 (PasskeyUpsellManager)
import Constants from "Constants" /* 1087 */;
import dismissible_content from "dismissible_content" /* 4839 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5033 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5182 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6709 */;
import MFAUtils from "MFAUtils" /* 7076 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 17080 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1392 */;
import WebAuthnStore from "WebAuthnStore" /* 16005 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7246 */;
import size from "module_2" /* 2 */;

let map;

const LoginStates = Constants.LoginStates;
let c7 = false;
let c8 = false;
class PasskeyUpsellManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePasskeyUpsellShow, LOGIN_RESET: applyArgumentsResult.handleLogout, LOGIN_SUCCESS: applyArgumentsResult.handleLoginSuccess, LOGOUT: applyArgumentsResult.handleLogout };
    map = new Map();
    const result = map.set(AuthenticationStore, applyArgumentsResult.handlePasskeyUpsellShow);
    const result1 = result.set(UserStore, applyArgumentsResult.handlePasskeyUpsellShow);
    applyArgumentsResult.stores = result1.set(WebAuthnStore, applyArgumentsResult.handlePasskeyUpsellShow);
    return applyArgumentsResult;
  }
  handlePasskeyUpsellShow() {
    const tmp = c8;
    if (tmp) {
      if (MFAUtils.hasWebAuthn) {
        const obj = AuthenticationStore;
        if (AuthenticationStore.getLoginStatus() === LoginStates.NONE) {
          if (obj.attemptedPasswordLogin()) {
            const tmp2Result = DismissibleContentUnsafeUtils;
            if (!tmp2Result.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
              if (!WebAuthnStore.hasFetchedCredentials()) {
                const tmp2Result3 = NavigationRouteUtils;
                if (!tmp2Result3.isModalOpen()) {
                  const currentUser = UserStore.getCurrentUser();
                  const tmp7 = undefined !== currentUser && currentUser.verified;
                  if (tmp7) {
                    if (WebAuthnStore.hasFetchedCredentials()) {
                      const obj6 = PasskeyUpsellActionCreatorsDefault;
                      obj6.openPasskeyUpsell();
                    } else {
                      const tmp8 = c7;
                      if (!tmp8) {
                        c7 = true;
                        const tmp2Result4 = WebAuthnActionCreators;
                        const webAuthnCredentials = tmp2Result4.fetchWebAuthnCredentials();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  handleLoginSuccess() {
    c8 = true;
  }
  handleLogout() {
    c7 = false;
    c8 = false;
  }
  markDismissed(USER_DISMISS) {
    const obj = DismissibleContentUnsafeUtils;
    const obj2 = { dismissAction: USER_DISMISS, forceTrack: true };
    return obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL, obj2);
  }
}
const prototype = PasskeyUpsellManager.prototype;
const passkeyUpsellManager = new PasskeyUpsellManager();
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;
