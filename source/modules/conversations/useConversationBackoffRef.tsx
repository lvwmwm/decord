// Module ID: 9308
// Function ID: 72636
// Name: useConversationBackoffRef
// Dependencies: [31, 6832, 561, 2]
// Exports: useConversationBackoffRef

// Module 9308 (useConversationBackoffRef)
import result from "result";
import CONVERSATION_COLORS from "CONVERSATION_COLORS";

let closure_3;
let closure_4;
({ FETCH_BACKOFF_MAX_MS: closure_3, FETCH_BACKOFF_MIN_MS: closure_4 } = CONVERSATION_COLORS);
const result = require("Backoff").fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

export const useConversationBackoffRef = function useConversationBackoffRef(items) {
  if (items === undefined) {
    items = [];
  }
  let ref;
  let tmp = ref(561);
  tmp = new tmp(closure_4, closure_3);
  ref = React.useRef(tmp);
  const effect = React.useEffect(() => {
    current = current.current;
    return () => {
      current.succeed();
    };
  }, items);
  return ref;
};
