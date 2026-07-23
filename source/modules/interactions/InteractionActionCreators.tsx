// Module ID: 7799
// Function ID: 62267
// Name: _fetchMessageInteractionData
// Dependencies: [5, 653, 686, 507, 2]
// Exports: addQueued, fetchMessageInteractionData, queueInteractionComponentState, setFailed

// Module 7799 (_fetchMessageInteractionData)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
async function _fetchMessageInteractionData(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[3]).HTTP;
  let obj = { url: outer2_4.MESSAGE_INTERACTION_DATA(arg0, arg1), oldFormErrors: true, rejectWithError: outer2_0(outer2_2[3]).rejectWithMigratedError() };
  const tmp = yield HTTP.get(obj);
  if (tmp.ok) {
    const body = tmp.body;
    obj = { type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS", channelId: arg0, messageId: arg1, interactionData: body };
    outer2_1(outer2_2[2]).dispatch(obj);
    return body;
  } else {
    return null;
  }
  const obj2 = outer2_0(outer2_2[3]);
}
const result = require("dispatcher").fileFinishedImporting("modules/interactions/InteractionActionCreators.tsx");

export const queueInteractionComponentState = function queueInteractionComponentState(messageId, nonce, localState, componentId) {
  let obj = importDefault(686);
  obj = { type: "QUEUE_INTERACTION_COMPONENT_STATE", messageId, nonce, state: localState, componentId };
  obj.dispatch(obj);
};
export const addQueued = function addQueued(nonce, arg1) {
  let data;
  let messageId;
  let onCreate;
  let onFailure;
  let onSuccess;
  let preflight;
  ({ data, messageId, preflight, onCreate, onSuccess, onFailure } = arg1);
  let obj = importDefault(686);
  obj = { type: "INTERACTION_QUEUE", data, nonce, messageId, preflight, onCreate, onSuccess, onFailure };
  obj.dispatch(obj);
};
export const setFailed = function setFailed(closure_0, code, message, status) {
  let obj = importDefault(686);
  obj = { type: "INTERACTION_FAILURE", nonce: closure_0, errorMessage: message, errorCode: code, status };
  obj.dispatch(obj);
};
export const fetchMessageInteractionData = function fetchMessageInteractionData(channelId, messageId) {
  return _fetchMessageInteractionData(...arguments);
};
