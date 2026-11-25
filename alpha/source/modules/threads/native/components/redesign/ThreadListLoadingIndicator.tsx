// Module ID: 18976
// Function ID: 18977
// Name: ThreadListLoadingIndicator
// Dependencies: [19, 21, 5012, 10106, 2]

// Module 18976 (ThreadListLoadingIndicator)
import Fragment from "Fragment" /* 21 */;
import MessageLoadingSpinnerDefault from "MessageLoadingSpinner" /* 10106 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const memoResult = react.memo(function ThreadListLoadingIndicator() {
  return jsx(MessageLoadingSpinnerDefault, { style: closure_3().spinner, animate: true });
});
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;
