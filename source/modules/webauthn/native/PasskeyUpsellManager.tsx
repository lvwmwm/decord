// Module ID: 13757
// Function ID: 13758
// Name: handlePasskeyUpsellShow
// Dependencies: [1218, 1874, 13751, 676, 5134, 9199, 4005, 1358, 4040, 5645, 13758, 2]

// Module 13757 (handlePasskeyUpsellShow)
import fetchFingerprint from "fetchFingerprint";
import mergeGuildAvatar from "mergeGuildAvatar";
import hasFetchedCredentials from "hasFetchedCredentials";
import { LoginStates } from "ME";
import "initialize";

const require = arg1;
let c7 = false;
let c8 = false;
class PasskeyUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePasskeyUpsellShow, LOGIN_RESET: applyArgumentsResult.handleLogout, LOGIN_SUCCESS: applyArgumentsResult.handleLoginSuccess, LOGOUT: applyArgumentsResult.handleLogout };
    map = new Map();
    result = map.set(fetchFingerprint, applyArgumentsResult.handlePasskeyUpsellShow);
    result1 = result.set(mergeGuildAvatar, applyArgumentsResult.handlePasskeyUpsellShow);
    applyArgumentsResult.stores = result1.set(hasFetchedCredentials, applyArgumentsResult.handlePasskeyUpsellShow);
    return applyArgumentsResult;
  }
}
const prototype = PasskeyUpsellManager.prototype;
prototype["handlePasskeyUpsellShow"] = function handlePasskeyUpsellShow() {
  if (c8) {
    if (require(9199) /* _crypto */.hasWebAuthn) {
      if (loginStatus.getLoginStatus() === LoginStates.NONE) {
        if (obj.attemptedPasswordLogin()) {
          let tmpResult = tmp(4005);
          if (!tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(1358).DismissibleContent.PASSWORDLESS_UPSELL)) {
            if (!hasFetchedCredentials.hasFetchedCredentials()) {
              tmpResult = tmp(4040);
              if (!tmpResult.isModalOpen()) {
                currentUser = currentUser.getCurrentUser();
                if (tmp6) {
                  if (obj3.hasFetchedCredentials()) {
                    importDefault(13758).openPasskeyUpsell();
                    const obj6 = importDefault(13758);
                  } else if (!c7) {
                    c7 = true;
                    const webAuthnCredentials = tmp(5645).fetchWebAuthnCredentials();
                    const tmpResult1 = tmp(5645);
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
  let c8 = true;
};
prototype["handleLogout"] = function handleLogout() {
  let c7 = false;
  let c8 = false;
};
prototype["markDismissed"] = function markDismissed(USER_DISMISS) {
  let obj = require(4005) /* UNSAFE_isDismissibleContentDismissed */;
  obj = { dismissAction: USER_DISMISS, forceTrack: true };
  return obj.UNSAFE_markDismissibleContentAsDismissed(require(1358) /* DismissibleContent */.DismissibleContent.PASSWORDLESS_UPSELL, obj);
};
const passkeyUpsellManager = new PasskeyUpsellManager();
let result = require("hasFetchedCredentials").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;
