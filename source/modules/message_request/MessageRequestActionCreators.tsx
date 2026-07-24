// Module ID: 10170
// Function ID: 78657
// Name: _acceptMessageRequest
// Dependencies: [5, 653, 507, 10171, 686, 5588, 2]
// Exports: acceptMessageRequest, clearMessageRequestState, fetchUserCountryCode, markAsMessageRequest, rejectMessageRequest, rejectMessageRequestBatch

// Module 10170 (_acceptMessageRequest)
import dispatchLogout from "dispatchLogout";
import { Endpoints } from "ME";

const require = arg1;
function _acceptMessageRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/message_request/MessageRequestActionCreators.tsx");

export const acceptMessageRequest = function acceptMessageRequest(arg0) {
  return _acceptMessageRequest(...arguments);
};
export const clearMessageRequestState = function clearMessageRequestState(id) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id) };
  obj = { consent_status: require(10171) /* MessageRequestConsentStatusTypes */.MessageRequestConsentStatusTypes.UNSPECIFIED };
  obj.body = obj;
  obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
  return HTTP.put(obj);
};
export const markAsMessageRequest = function markAsMessageRequest(id) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id) };
  obj = { consent_status: require(10171) /* MessageRequestConsentStatusTypes */.MessageRequestConsentStatusTypes.PENDING };
  obj.body = obj;
  obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
  return HTTP.put(obj);
};
export const rejectMessageRequest = function rejectMessageRequest(id) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.del(obj);
};
export const rejectMessageRequestBatch = function rejectMessageRequestBatch(value) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(), body: obj };
  obj = { channel_ids: value, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.put(obj);
};
export const fetchUserCountryCode = function fetchUserCountryCode() {
  const locationMetadata = importDefault(5588).getLocationMetadata();
};
