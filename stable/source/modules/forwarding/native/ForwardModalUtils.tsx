// Module ID: 13643
// Function ID: 13644
// Name: ForwardModalUtils
// Dependencies: [19, 21, 13644, 13645, 13646, 2118, 6831, 13685, 6124, 2]
// Exports: closeForwardModal, openForwardModal, showForwardFailedAlertModal

// Module 13643 (ForwardModalUtils)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import useAlertStore from "useAlertStore" /* 6124 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import ForwardingAnalyticsUtils from "ForwardingAnalyticsUtils" /* 13644 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 13645 */;
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
  tmp2(asyncRequire(13646, dependencyMap.paths), { message, initialSelectedDestinations, forwardOptions, source, customSendHandler }, c5);
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
