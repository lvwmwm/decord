// Module ID: 5701
// Function ID: 5702
// Name: runAfterInteractions
// Dependencies: [17, 4140, 2]
// Exports: runAfterInteractions

// Module 5701 (runAfterInteractions)
import { InteractionManager } from "get ActivityIndicator";

function runAfterInteractions(arg0, MINUTE) {
  const _require = arg0;
  let num = MINUTE;
  if (MINUTE === undefined) {
    num = 2000;
  }
  let dependencyMap;
  let delayedCall;
  dependencyMap = delayedCall.runAfterInteractions(() => {
    delayedCall.cancel();
    callback();
  });
  delayedCall = new _require(4140).DelayedCall(num, () => {
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
