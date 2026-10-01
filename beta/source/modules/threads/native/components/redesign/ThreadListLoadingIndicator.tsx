// Module ID: 16540
// Function ID: 16541
// Name: ThreadListLoadingIndicator
// Dependencies: [19, 21, 4836, 8889, 2]

// Module 16540 (ThreadListLoadingIndicator)
import Fragment from "Fragment" /* 21 */;
import MessageLoadingSpinnerDefault from "MessageLoadingSpinner" /* 8889 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const memoResult = react.memo(() => jsx(MessageLoadingSpinnerDefault, { style: closure_3().spinner, animate: true }));
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;
