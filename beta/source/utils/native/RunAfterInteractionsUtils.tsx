// Module ID: 7133
// Function ID: 7134
// Name: RunAfterInteractionsUtils
// Dependencies: [17, 4818, 2]
// Exports: runAfterInteractions

// Module 7133 (RunAfterInteractionsUtils)
import react_native from "react-native" /* 17 */;
import Timers from "Timers" /* 4818 */;
import size from "module_2" /* 2 */;

function runAfterInteractions(arg0, MINUTE) {
  let closure_0 = arg0;
  let num = MINUTE;
  if (MINUTE === undefined) {
    num = 2000;
  }
  let closure_1 = InteractionManager.runAfterInteractions(() => {
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
const InteractionManager = react_native.InteractionManager;
const result = size.fileFinishedImporting("utils/native/RunAfterInteractionsUtils.tsx");

export default { runAfterInteractions };
export { runAfterInteractions };
