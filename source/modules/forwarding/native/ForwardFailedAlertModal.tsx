// Module ID: 9899
// Function ID: 76599
// Name: ForwardFailedAlertModal
// Dependencies: []
// Exports: default

// Module 9899 (ForwardFailedAlertModal)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/forwarding/native/ForwardFailedAlertModal.tsx");

export default function ForwardFailedAlertModal(message) {
  message = message.message;
  const arg1 = message;
  const failedDestinations = message.failedDestinations;
  const importDefault = failedDestinations;
  const forwardOptions = message.forwardOptions;
  const dependencyMap = forwardOptions;
  const items = [failedDestinations, message, forwardOptions];
  const callback = React.useCallback(() => {
    let obj = message(forwardOptions[2]);
    obj = { message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions };
    obj.openForwardModal(obj);
  }, items);
  let obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t./OPIaM);
  const intl2 = arg1(dependencyMap[4]).intl;
  obj = { count: failedDestinations.length };
  obj.content = intl2.formatToPlainString(arg1(dependencyMap[4]).t.cn9vFb, obj);
  obj.failedDestinations = failedDestinations;
  obj.onRetry = callback;
  return jsx(importDefault(dependencyMap[3]), obj);
};
