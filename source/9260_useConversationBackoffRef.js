// Module ID: 9260
// Function ID: 72350
// Name: useConversationBackoffRef
// Dependencies: []
// Exports: useConversationBackoffRef

// Module 9260 (useConversationBackoffRef)
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
