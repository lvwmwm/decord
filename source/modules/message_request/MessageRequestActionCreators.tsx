// Module ID: 10129
// Function ID: 78410
// Name: _acceptMessageRequest
// Dependencies: []
// Exports: acceptMessageRequest, clearMessageRequestState, fetchUserCountryCode, markAsMessageRequest, rejectMessageRequest, rejectMessageRequestBatch

// Module 10129 (_acceptMessageRequest)
function _acceptMessageRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _acceptMessageRequest = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/message_request/MessageRequestActionCreators.tsx");

export const acceptMessageRequest = function acceptMessageRequest(arg0) {
  return _acceptMessageRequest(...arguments);
};
export const clearMessageRequestState = function clearMessageRequestState(id) {
  const HTTP = arg1(dependencyMap[2]).HTTP;
  let obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id) };
  obj = { consent_status: arg1(dependencyMap[3]).MessageRequestConsentStatusTypes.UNSPECIFIED };
  obj.body = obj;
  obj.rejectWithError = arg1(dependencyMap[2]).rejectWithMigratedError();
  return HTTP.put(obj);
};
export const markAsMessageRequest = function markAsMessageRequest(id) {
  const HTTP = arg1(dependencyMap[2]).HTTP;
  let obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id) };
  obj = { consent_status: arg1(dependencyMap[3]).MessageRequestConsentStatusTypes.PENDING };
  obj.body = obj;
  obj.rejectWithError = arg1(dependencyMap[2]).rejectWithMigratedError();
  return HTTP.put(obj);
};
export const rejectMessageRequest = function rejectMessageRequest(id) {
  const HTTP = arg1(dependencyMap[2]).HTTP;
  const obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), rejectWithError: arg1(dependencyMap[2]).rejectWithMigratedError() };
  return HTTP.del(obj);
};
export const rejectMessageRequestBatch = function rejectMessageRequestBatch(value) {
  const HTTP = arg1(dependencyMap[2]).HTTP;
  let obj = { url: Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(), body: obj };
  obj = { channel_ids: value, rejectWithError: arg1(dependencyMap[2]).rejectWithMigratedError() };
  return HTTP.put(obj);
};
export const fetchUserCountryCode = function fetchUserCountryCode() {
  const locationMetadata = importDefault(dependencyMap[5]).getLocationMetadata();
};
