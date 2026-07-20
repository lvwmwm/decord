// Module ID: 7788
// Function ID: 62195
// Name: _fetchMessageInteractionData
// Dependencies: []
// Exports: addQueued, fetchMessageInteractionData, queueInteractionComponentState, setFailed

// Module 7788 (_fetchMessageInteractionData)
async function _fetchMessageInteractionData(channelId, messageId, arg2) {
  const HTTP = callback(closure_2[3]).HTTP;
  let obj = { url: closure_4.MESSAGE_INTERACTION_DATA(channelId, messageId), oldFormErrors: true, rejectWithError: callback(closure_2[3]).rejectWithMigratedError() };
  const tmp = yield HTTP.get(obj);
  if (tmp.ok) {
    const body = tmp.body;
    obj = { type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS", channelId, messageId, interactionData: body };
    callback2(closure_2[2]).dispatch(obj);
    return body;
  } else {
    return null;
  }
  const obj2 = callback(closure_2[3]);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/interactions/InteractionActionCreators.tsx");

export const queueInteractionComponentState = function queueInteractionComponentState(messageId, fromTimestampResult, localState, componentId) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "QUEUE_INTERACTION_COMPONENT_STATE", messageId, nonce: fromTimestampResult, state: localState, componentId };
  obj.dispatch(obj);
};
export const addQueued = function addQueued(fromTimestampResult, arg1) {
  let data;
  let messageId;
  let onCreate;
  let onFailure;
  let onSuccess;
  let preflight;
  ({ data, messageId, preflight, onCreate, onSuccess, onFailure } = arg1);
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "INTERACTION_QUEUE", data, nonce: fromTimestampResult, messageId, preflight, onCreate, onSuccess, onFailure };
  obj.dispatch(obj);
};
export const setFailed = function setFailed(closure_0, code, message, status) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "INTERACTION_FAILURE", nonce: closure_0, errorMessage: message, errorCode: code, status };
  obj.dispatch(obj);
};
export const fetchMessageInteractionData = function fetchMessageInteractionData(channelId, messageId) {
  return _fetchMessageInteractionData(...arguments);
};
