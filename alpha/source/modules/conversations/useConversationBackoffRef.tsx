// Module ID: 8997
// Function ID: 8998
// Name: useConversationBackoffRef
// Dependencies: [19, 5636, 559, 2]
// Exports: useConversationBackoffRef

// Module 8997 (useConversationBackoffRef)
import BackoffDefault from "Backoff" /* 559 */;
import react from "react" /* 19 */;
import ConversationConstants from "ConversationConstants" /* 5636 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ FETCH_BACKOFF_MAX_MS: c3, FETCH_BACKOFF_MIN_MS: closure_4 } = ConversationConstants);
const result = size.fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

export function useConversationBackoffRef(items) {
  if (items === undefined) {
    items = [];
  }
  const useRef = react.useRef;
  const tmp = new BackoffDefault(React3, _false);
  const ref = useRef(tmp);
  const effect = react.useEffect(() => {
    const current = ref.current;
    return () => {
      current.succeed();
    };
  }, items);
  return ref;
}
