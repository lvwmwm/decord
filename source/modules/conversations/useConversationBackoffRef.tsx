// Module ID: 9265
// Function ID: 72386
// Name: useConversationBackoffRef
// Dependencies: []
// Exports: useConversationBackoffRef

// Module 9265 (useConversationBackoffRef)
let closure_2 = importAll(dependencyMap[0]);
({ FETCH_BACKOFF_MAX_MS: closure_3, FETCH_BACKOFF_MIN_MS: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

export const useConversationBackoffRef = function useConversationBackoffRef(items) {
  if (items === undefined) {
    items = [];
  }
  let importDefault;
  let tmp = importDefault(dependencyMap[2]);
  tmp = new tmp(closure_4, closure_3);
  const ref = React.useRef(tmp);
  importDefault = ref;
  const effect = React.useEffect(() => () => {
    current.succeed();
  }, items);
  return ref;
};
