// Module ID: 7141
// Function ID: 7142
// Name: RunAfterInteractionsUtils
// Dependencies: [17, 1952, 2]
// Exports: runAfterInteractions

// Module 7141 (RunAfterInteractionsUtils)
import _mod17 from "module_17" /* 17 */;
import Timers from "Timers" /* 1952 */;
import size from "module_2" /* 2 */;

function runAfterInteractions(arg0, MINUTE) {
  closure_0 = arg0;
  let num = MINUTE;
  if (MINUTE === undefined) {
    num = 2000;
  }
  closure_1 = InteractionManager.runAfterInteractions(() => {
    delayedCall.cancel();
    closure_0();
  });
  const delayedCall = new Timers.DelayedCall(num, () => {
    closure_1.cancel();
    closure_0();
  });
  delayedCall.delay();
  return {
    cancel() {
      delayedCall.cancel();
      closure_1.cancel();
    }
  };
}
const InteractionManager = _mod17.InteractionManager;
const result = size.fileFinishedImporting("utils/native/RunAfterInteractionsUtils.tsx");

export default { runAfterInteractions };
export { runAfterInteractions };
