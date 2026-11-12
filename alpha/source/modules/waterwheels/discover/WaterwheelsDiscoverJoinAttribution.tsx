// Module ID: 18874
// Function ID: 18875
// Name: WaterwheelsDiscoverJoinAttribution
// Dependencies: [2]
// Exports: captureDiscoverJoinAttribution

// Module 18874 (WaterwheelsDiscoverJoinAttribution)
import size from "module_2" /* 2 */;

let closure_0 = ["CONNECTION_OPEN", "OVERLAY_INITIALIZE", "CONNECTION_CLOSED", "AUTH_SESSION_CHANGE", "LOGIN_SUCCESS", "LOGIN_RESET", "LOGOUT", "REGISTER_SUCCESS", "UPDATE_TOKEN", "CURRENT_USER_UPDATE", "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER", "CLOSE_SUSPENDED_USER"];
const result = size.fileFinishedImporting("modules/waterwheels/discover/WaterwheelsDiscoverJoinAttribution.tsx");

export function captureDiscoverJoinAttribution(AuthenticationStore, trackActionResult, subscribe) {
  let closure_3;
  function dispose() {
    c5 = false;
    const tmp = c6;
    if (tmp) {
      c6 = false;
      AuthenticationStore.removeChangeListener(updateAccount);
      for (const item10011 of AuthenticationStore) {
        let unsubscribeResult = subscribe.unsubscribe(item10011, updateAccount);
        continue;
      }
    }
  }
  function updateAccount() {
    authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
    dispose();
  }
  const id = AuthenticationStore.getId();
  let authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
  const isAuthenticatedResult = AuthenticationStore.isAuthenticated();
  let c5 = isAuthenticatedResult;
  let c6 = false;
  if (isAuthenticatedResult) {
    AuthenticationStore.addChangeListener(updateAccount);
    for (const item10019 of AuthenticationStore) {
      let subscription = subscribe.subscribe(item10019, updateAccount);
      continue;
    }
    c6 = true;
  }
  const obj = {
    dispose,
    isValid() {
      authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
      if (AuthenticationStore.isAuthenticated()) {
        return c5;
      }
      dispose();
    },
    onJoinSettled(arg0) {
      authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
      if (AuthenticationStore.isAuthenticated()) {
        dispose();
        if (c5) {
          return trackActionResult(arg0);
        }
      }
      dispose();
    }
  };
  return obj;
}
