// Module ID: 13329
// Function ID: 13330
// Name: ForwardModalUtils
// Dependencies: [19, 21, 13330, 13331, 13332, 1995, 6738, 13371, 5955, 2]
// Exports: closeForwardModal, openForwardModal, showForwardFailedAlertModal

// Module 13329 (ForwardModalUtils)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import ForwardingAnalyticsUtils from "ForwardingAnalyticsUtils" /* 13330 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 13331 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
let c5 = "forward-modal";
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardModalUtils.tsx");

export const FORWARD_MODAL_KEY = "forward-modal";
export function openForwardModal(arg0) {
  let customSendHandler;
  let forwardOptions;
  let initialSelectedDestinations;
  let message;
  let source;
  ({ message, source, initialSelectedDestinations } = arg0);
  if (initialSelectedDestinations === undefined) {
    initialSelectedDestinations = [];
  }
  ({ forwardOptions, customSendHandler } = arg0);
  const obj = ForwardingAnalyticsUtils;
  obj.trackForwardStart(message.channel_id, message.id, source);
  const tmp2 = showSearchableDestinationListModalDefault;
  tmp2(asyncRequire(13332, dependencyMap.paths), { message, initialSelectedDestinations, forwardOptions, source, customSendHandler }, c5);
}
export function closeForwardModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c5);
}
export function showForwardFailedAlertModal(arg0) {
  let failedDestinations;
  let forwardOptions;
  let message;
  let paths;
  ({ message, failedDestinations, forwardOptions } = arg0);
  react.lazy(() => require("asyncRequire")(paths[7], paths.paths));
  const obj = useAlertStore;
  obj.openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
}
