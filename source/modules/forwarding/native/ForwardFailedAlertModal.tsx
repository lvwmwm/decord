// Module ID: 9906
// Function ID: 76640
// Name: ForwardFailedAlertModal
// Dependencies: [31, 33, 9872, 9907, 1212, 2]
// Exports: default

// Module 9906 (ForwardFailedAlertModal)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("FORWARD_MODAL_KEY").fileFinishedImporting("modules/forwarding/native/ForwardFailedAlertModal.tsx");

export default function ForwardFailedAlertModal(message) {
  message = message.message;
  const failedDestinations = message.failedDestinations;
  const forwardOptions = message.forwardOptions;
  const items = [failedDestinations, message, forwardOptions];
  const callback = React.useCallback(() => {
    let obj = message(forwardOptions[2]);
    obj = { message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions };
    obj.openForwardModal(obj);
  }, items);
  let obj = {};
  const intl = message(forwardOptions[4]).intl;
  obj.title = intl.string(message(forwardOptions[4]).t["/OPIaM"]);
  const intl2 = message(forwardOptions[4]).intl;
  obj = { count: failedDestinations.length };
  obj.content = intl2.formatToPlainString(message(forwardOptions[4]).t.cn9vFb, obj);
  obj.failedDestinations = failedDestinations;
  obj.onRetry = callback;
  return jsx(failedDestinations(forwardOptions[3]), { count: failedDestinations.length });
};
