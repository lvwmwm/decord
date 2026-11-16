// Module ID: 19187
// Function ID: 19188
// Name: ThreadListLoadingIndicator
// Dependencies: [19, 21, 5170, 11965, 2]

// Module 19187 (ThreadListLoadingIndicator)
import Fragment from "Fragment" /* 21 */;
import MessageLoadingSpinnerDefault from "MessageLoadingSpinner" /* 11965 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const memoResult = react.memo(function ThreadListLoadingIndicator() {
  return jsx(MessageLoadingSpinnerDefault, { style: closure_3().spinner, animate: true });
});
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;
