// Module ID: 11202
// Function ID: 11203
// Name: ForwardFailedAlertModal
// Dependencies: [19, 21, 11176, 11203, 1115, 2]
// Exports: default

// Module 11202 (ForwardFailedAlertModal)
import Fragment from "Fragment" /* 21 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11176 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardFailedAlertModal.tsx");

export default function ForwardFailedAlertModal(message) {
  message = message.message;
  const failedDestinations = message.failedDestinations;
  const forwardOptions = message.forwardOptions;
  const items = [failedDestinations, message, forwardOptions];
  const callback = react.useCallback(() => {
    const obj = ForwardModalUtils;
    const obj2 = { message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions };
    obj.openForwardModal(obj2);
  }, items);
  failedDestinations(forwardOptions[3]);
  const intl = message(forwardOptions[4]).intl;
  const intl2 = message(forwardOptions[4]).intl;
  let obj2 = { count: failedDestinations.length };
  return <tmp2 title={intl.string(message(forwardOptions[4]).t["/OPIaM"])} content={intl2.formatToPlainString(message(forwardOptions[4]).t.cn9vFb, obj2)} failedDestinations={failedDestinations} onRetry={callback} />;
};
