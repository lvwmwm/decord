// Module ID: 15450
// Function ID: 117877
// Name: useListHasSingleMessageRequest
// Dependencies: []
// Exports: useListHasSingleMessageRequest, useListHasSingleSpamMessageRequest

// Module 15450 (useListHasSingleMessageRequest)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/message_request/hooks/useListHasSingleMessageRequest.tsx");

export const useListHasSingleMessageRequest = function useListHasSingleMessageRequest() {
  const messageRequestsCount = arg1(dependencyMap[3]).useMessageRequestsCount();
  const arg1 = messageRequestsCount;
  const ref = React.useRef(messageRequestsCount);
  const importDefault = ref;
  const obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => ready.isReady());
  const dependencyMap = stateFromStores;
  const React = React.useRef(stateFromStores);
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
  const obj2 = arg1(dependencyMap[4]);
  return importDefault(dependencyMap[5])(ref) <= 1 && 1 === messageRequestsCount;
};
export const useListHasSingleSpamMessageRequest = function useListHasSingleSpamMessageRequest() {
  const spamMessageRequestCount = arg1(dependencyMap[6]).useSpamMessageRequestCount();
  const arg1 = spamMessageRequestCount;
  const ref = React.useRef(spamMessageRequestCount);
  const importDefault = ref;
  const obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => ready.isReady());
  const dependencyMap = stateFromStores;
  const React = React.useRef(stateFromStores);
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
  const obj2 = arg1(dependencyMap[4]);
  return importDefault(dependencyMap[5])(ref) <= 1 && 1 === spamMessageRequestCount;
};
