// Module ID: 10966
// Function ID: 10967
// Name: MessageRequestActionCreators
// Dependencies: [5, 1072, 1283, 10967, 572, 6734, 2]
// Exports: acceptMessageRequest, clearMessageRequestState, fetchUserCountryCode, markAsMessageRequest, rejectMessageRequest, rejectMessageRequestBatch

// Module 10966 (MessageRequestActionCreators)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6734 */;
import MessageRequestTypes from "MessageRequestTypes" /* 10967 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2;

let body = function _acceptMessageRequest() {
  let obj = _asyncToGenerator(async (channelId) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj4;
      let obj9;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.CHANNEL_RECIPIENT_ME(channelId), body: obj4, rejectWithError: obj9.rejectWithMigratedError() };
              const put = HTTP.put;
              obj4 = { consent_status: MessageRequestTypes.MessageRequestConsentStatusTypes.ACCEPTED };
              c3 = 1;
              c4 = 1;
              obj9 = HTTPUtils;
              const obj5 = { value: put(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            const obj7 = { type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC", channelId };
            const obj = closure_130_1(closure_130_2[4]);
            obj.dispatch(obj7);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c4 = 3;
          throw tmp11;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/message_request/MessageRequestActionCreators.tsx");

export function acceptMessageRequest() {
  return obj(...arguments);
}
export function clearMessageRequestState(id) {
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body, rejectWithError: obj3.rejectWithMigratedError() };
  const put = HTTP.put;
  body = { consent_status: MessageRequestTypes.MessageRequestConsentStatusTypes.UNSPECIFIED };
  obj3 = HTTPUtils;
  return put(request);
}
export function markAsMessageRequest(id) {
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body, rejectWithError: obj3.rejectWithMigratedError() };
  const put = HTTP.put;
  body = { consent_status: MessageRequestTypes.MessageRequestConsentStatusTypes.PENDING };
  obj3 = HTTPUtils;
  return put(request);
}
export function rejectMessageRequest(id) {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  const del = HTTP.del;
  const obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), rejectWithError: obj2.rejectWithMigratedError() };
  obj2 = HTTPUtils;
  return del(obj);
}
export function rejectMessageRequestBatch(c0) {
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(), body, rejectWithError: obj3.rejectWithMigratedError() };
  const put = HTTP.put;
  body = { channel_ids: c0 };
  obj3 = HTTPUtils;
  return put(request);
}
export function fetchUserCountryCode() {
  const obj = AuthenticationActionCreatorsDefault;
  const locationMetadata = obj.getLocationMetadata();
}
