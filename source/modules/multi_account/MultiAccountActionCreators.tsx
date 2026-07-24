// Module ID: 11486
// Function ID: 89404
// Name: validateMultiAccountTokens
// Dependencies: [5, 1194, 11482, 653, 3, 684, 686, 507, 675, 5588, 2]
// Exports: invalidatePushSyncTokens, moveAccount, removeAccount, reportAccountSwitchTimeout, switchAccount, updatePushSyncToken, validateMultiAccountTokens

// Module 11486 (validateMultiAccountTokens)
import fromEntries from "fromEntries";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "ME";

let closure_7;
let closure_8;
const require = arg1;
({ AnalyticEvents: closure_7, Endpoints: closure_8 } = ME);
importDefaultResult = new importDefaultResult("MultiAccountActionCreators");
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/multi_account/MultiAccountActionCreators.tsx");

export const validateMultiAccountTokens = function validateMultiAccountTokens() {
  const id2 = id.getId();
  users = users.getUsers();
  const item = users.forEach((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_4(tmp);
    return function() {
      return callback(...arguments);
    };
  })());
};
export const switchAccount = function switchAccount(id, switchSynchronously, CHOOSE_ACCOUNT) {
  let obj = { switchSynchronously };
  importDefaultResult.log("Switching account to " + id, obj);
  const token = importAll(684).getToken(id);
  if (null == token) {
    importDefaultResult.log("Switching accounts failed because there was no token");
    obj = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id };
    importDefault(686).dispatch(obj);
    let resolved = Promise.resolve();
    const obj6 = importDefault(686);
  } else {
    obj = { type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: id };
    let tmp5 = null;
    if (null != CHOOSE_ACCOUNT) {
      tmp5 = CHOOSE_ACCOUNT;
    }
    obj.location = tmp5;
    importDefault(686).dispatch(obj);
    const obj3 = importDefault(686);
    resolved = importDefault(5588).switchAccountToken(token, switchSynchronously);
    const obj5 = importDefault(5588);
  }
  return resolved;
};
export const moveAccount = function moveAccount(arg0, to) {
  let obj = importDefault(686);
  obj = { type: "MULTI_ACCOUNT_MOVE_ACCOUNT", from: arg0, to };
  obj.dispatch(obj);
};
export const removeAccount = function removeAccount(userId) {
  let obj = importDefault(686);
  obj = { type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId };
  obj.dispatch(obj);
};
export const updatePushSyncToken = function updatePushSyncToken(id, token) {
  let obj = importDefault(686);
  obj = { type: "MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN", userId: id, pushSyncToken: token };
  obj.dispatch(obj);
};
export const invalidatePushSyncTokens = function invalidatePushSyncTokens(invalid_push_sync_tokens) {
  let obj = importDefault(686);
  obj = { type: "MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS", invalidPushSyncTokens: invalid_push_sync_tokens };
  obj.dispatch(obj);
};
export const reportAccountSwitchTimeout = function reportAccountSwitchTimeout() {
  importDefault(686).dispatch({ type: "MULTI_ACCOUNT_SWITCH_TIMEOUT" });
};
