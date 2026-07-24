// Module ID: 15614
// Function ID: 120373
// Name: useListHasSingleMessageRequest
// Dependencies: [31, 5602, 5603, 15615, 566, 5122, 15616, 2]
// Exports: useListHasSingleMessageRequest, useListHasSingleSpamMessageRequest

// Module 15614 (useListHasSingleMessageRequest)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/message_request/hooks/useListHasSingleMessageRequest.tsx");

export const useListHasSingleMessageRequest = function useListHasSingleMessageRequest() {
  messageRequestsCount = messageRequestsCount(stateFromStores[3]).useMessageRequestsCount();
  const ref = React.useRef(messageRequestsCount);
  const obj = messageRequestsCount(stateFromStores[3]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = messageRequestsCount(stateFromStores[4]).useStateFromStores(items, () => outer1_4.isReady());
  React = React.useRef(stateFromStores);
  const items1 = [stateFromStores, messageRequestsCount];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      ref.current = messageRequestsCount;
    }
  }, items1);
  const obj2 = messageRequestsCount(stateFromStores[4]);
  return ref(stateFromStores[5])(ref) <= 1 && 1 === messageRequestsCount;
};
export const useListHasSingleSpamMessageRequest = function useListHasSingleSpamMessageRequest() {
  spamMessageRequestCount = spamMessageRequestCount(stateFromStores[6]).useSpamMessageRequestCount();
  const ref = React.useRef(spamMessageRequestCount);
  const obj = spamMessageRequestCount(stateFromStores[6]);
  const items = [closure_5];
  stateFromStores = spamMessageRequestCount(stateFromStores[4]).useStateFromStores(items, () => outer1_5.isReady());
  React = React.useRef(stateFromStores);
  const items1 = [stateFromStores, spamMessageRequestCount];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      ref.current = spamMessageRequestCount;
    }
  }, items1);
  const obj2 = spamMessageRequestCount(stateFromStores[4]);
  return ref(stateFromStores[5])(ref) <= 1 && 1 === spamMessageRequestCount;
};
