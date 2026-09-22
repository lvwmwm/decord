// Module ID: 17195
// Function ID: 17196
// Name: ThreadListLoadingIndicator
// Dependencies: [19, 21, 4757, 9706, 2]

// Module 17195 (ThreadListLoadingIndicator)
import MessageLoadingSpinnerDefault from "MessageLoadingSpinner" /* 9706 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_3 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default noop.memo(() => {
  const tmp = closure_3();
  return jsx(MessageLoadingSpinnerDefault, { style: closure_3().spinner, animate: true });
});
