// Module ID: 7363
// Function ID: 7364
// Name: RunAfterInteractionsUtils
// Dependencies: [17, 4856, 2]
// Exports: runAfterInteractions

// Module 7363 (RunAfterInteractionsUtils)
import react_native from "react-native" /* 17 */;
import Timers from "Timers" /* 4856 */;
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
