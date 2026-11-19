// Module ID: 18870
// Function ID: 18871
// Name: ThreadListLoadingIndicator
// Dependencies: [19, 21, 4792, 10670, 2]

// Module 18870 (ThreadListLoadingIndicator)
import Fragment from "Fragment" /* 21 */;
import MessageLoadingSpinnerDefault from "MessageLoadingSpinner" /* 10670 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const memoResult = react.memo(function ThreadListLoadingIndicator() {
  return jsx(MessageLoadingSpinnerDefault, { style: closure_3().spinner, animate: true });
});
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;
