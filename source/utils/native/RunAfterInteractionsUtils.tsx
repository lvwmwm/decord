// Module ID: 5580
// Function ID: 47328
// Name: runAfterInteractions
// Dependencies: []
// Exports: runAfterInteractions

// Module 5580 (runAfterInteractions)
function runAfterInteractions(arg0, closure_5) {
  let num = closure_5;
  const require = arg0;
  if (closure_5 === undefined) {
    num = 2000;
  }
  let closure_1;
  let InteractionManager;
  closure_1 = InteractionManager.runAfterInteractions(() => {
    delayedCall.cancel();
    arg0();
  });
  const delayedCall = new require(closure_1[1]).DelayedCall(num, () => {
    closure_1.cancel();
    arg0();
  });
  InteractionManager = delayedCall;
  delayedCall.delay();
  return {
    cancel() {
      delayedCall.cancel();
      closure_1.cancel();
    }
  };
}
const InteractionManager = require(dependencyMap[0]).InteractionManager;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("utils/native/RunAfterInteractionsUtils.tsx");

export default { runAfterInteractions };
export { runAfterInteractions };
