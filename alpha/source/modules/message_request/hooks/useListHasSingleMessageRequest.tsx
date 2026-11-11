// Module ID: 19562
// Function ID: 19563
// Name: useListHasSingleMessageRequest
// Dependencies: [19, 6967, 6968, 19563, 504, 7352, 19564, 2]
// Exports: useListHasSingleMessageRequest, useListHasSingleSpamMessageRequest

// Module 19562 (useListHasSingleMessageRequest)
import react_mod from "react" /* 19 */;
import MessageRequestStore from "MessageRequestStore" /* 6967 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6968 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/message_request/hooks/useListHasSingleMessageRequest.tsx");

export function useListHasSingleMessageRequest() {
  let messageRequestsCount;
  let ready;
  let stateFromStores;
  const obj = messageRequestsCount(stateFromStores[3]);
  messageRequestsCount = obj.useMessageRequestsCount();
  const ref = react.useRef(messageRequestsCount);
  const items = [MessageRequestStore];
  const obj2 = messageRequestsCount(stateFromStores[4]);
  stateFromStores = obj2.useStateFromStores(items, () => ready.isReady());
  react = react.useRef(stateFromStores);
  const items1 = [stateFromStores, messageRequestsCount];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores && !ref.current;
    if (tmp) {
      ref.current = true;
      ref.current = messageRequestsCount;
    }
  }, items1);
  const tmp5 = ref(stateFromStores[5])(ref) <= 1 && 1 === messageRequestsCount;
  return tmp5;
}
export function useListHasSingleSpamMessageRequest() {
  let ready;
  let spamMessageRequestCount;
  let stateFromStores;
  const obj = spamMessageRequestCount(stateFromStores[6]);
  spamMessageRequestCount = obj.useSpamMessageRequestCount();
  const ref = react.useRef(spamMessageRequestCount);
  const items = [SpamMessageRequestStore];
  const obj2 = spamMessageRequestCount(stateFromStores[4]);
  stateFromStores = obj2.useStateFromStores(items, () => ready.isReady());
  react = react.useRef(stateFromStores);
  const items1 = [stateFromStores, spamMessageRequestCount];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores && !ref.current;
    if (tmp) {
      ref.current = true;
      ref.current = spamMessageRequestCount;
    }
  }, items1);
  const tmp5 = ref(stateFromStores[5])(ref) <= 1 && 1 === spamMessageRequestCount;
  return tmp5;
}
