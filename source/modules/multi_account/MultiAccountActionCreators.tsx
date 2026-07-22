// Module ID: 11446
// Function ID: 89133
// Name: validateMultiAccountTokens
// Dependencies: []
// Exports: invalidatePushSyncTokens, moveAccount, removeAccount, reportAccountSwitchTimeout, switchAccount, updatePushSyncToken, validateMultiAccountTokens

// Module 11446 (validateMultiAccountTokens)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ AnalyticEvents: closure_7, Endpoints: closure_8 } = arg1(dependencyMap[3]));
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("MultiAccountActionCreators");
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/multi_account/MultiAccountActionCreators.tsx");

export const validateMultiAccountTokens = function validateMultiAccountTokens() {
  const id2 = id.getId();
  const users = users.getUsers();
  const item = users.forEach(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }());
};
export const switchAccount = function switchAccount(id, switchSynchronously, CHOOSE_ACCOUNT) {
  let obj = { switchSynchronously };
  importDefaultResult.log("Switching account to " + id, obj);
  const token = importAll(dependencyMap[5]).getToken(id);
  if (null == token) {
    importDefaultResult.log("Switching accounts failed because there was no token");
    obj = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id };
    importDefault(dependencyMap[6]).dispatch(obj);
    let resolved = Promise.resolve();
    const obj6 = importDefault(dependencyMap[6]);
  } else {
    obj = { type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: id };
    let tmp5 = null;
    if (null != CHOOSE_ACCOUNT) {
      tmp5 = CHOOSE_ACCOUNT;
    }
    obj.location = tmp5;
    importDefault(dependencyMap[6]).dispatch(obj);
    const obj3 = importDefault(dependencyMap[6]);
    resolved = importDefault(dependencyMap[9]).switchAccountToken(token, switchSynchronously);
    const obj5 = importDefault(dependencyMap[9]);
  }
  return resolved;
};
export const moveAccount = function moveAccount(arg0, to) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "MULTI_ACCOUNT_MOVE_ACCOUNT", from: arg0, to };
  obj.dispatch(obj);
};
export const removeAccount = function removeAccount(userId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId };
  obj.dispatch(obj);
};
export const updatePushSyncToken = function updatePushSyncToken(id, token) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN", userId: id, pushSyncToken: token };
  obj.dispatch(obj);
};
export const invalidatePushSyncTokens = function invalidatePushSyncTokens(invalid_push_sync_tokens) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS", invalidPushSyncTokens: invalid_push_sync_tokens };
  obj.dispatch(obj);
};
export const reportAccountSwitchTimeout = function reportAccountSwitchTimeout() {
  importDefault(dependencyMap[6]).dispatch({ type: "MULTI_ACCOUNT_SWITCH_TIMEOUT" });
};
