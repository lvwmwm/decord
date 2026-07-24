// Module ID: 5582
// Function ID: 47406
// Name: runAfterInteractions
// Dependencies: [27, 4015, 2]
// Exports: runAfterInteractions

// Module 5582 (runAfterInteractions)
import { InteractionManager } from "get ActivityIndicator";

function runAfterInteractions(arg0, outer1_5) {
  let num = outer1_5;
  const _require = arg0;
  if (outer1_5 === undefined) {
    num = 2000;
  }
  let dependencyMap;
  let delayedCall;
  dependencyMap = delayedCall.runAfterInteractions(() => {
    delayedCall.cancel();
    callback();
  });
  delayedCall = new _require(4015).DelayedCall(num, () => {
    closure_1.cancel();
    callback();
  });
  delayedCall.delay();
  return {
    cancel() {
      delayedCall.cancel();
      closure_1.cancel();
    }
  };
}
const result = require("set").fileFinishedImporting("utils/native/RunAfterInteractionsUtils.tsx");

export default { runAfterInteractions };
export { runAfterInteractions };
