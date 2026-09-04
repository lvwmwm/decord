// Module ID: 11612
// Function ID: 11613
// Name: FORWARD_MODAL_KEY
// Dependencies: [19, 21, 11613, 10908, 11614, 2008, 4731, 11634, 4867, 2]
// Exports: closeForwardModal, openForwardModal, showForwardFailedAlertModal

// Module 11612 (FORWARD_MODAL_KEY)
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;
import useAlertStore from "useAlertStore" /* 4867 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 10908 */;
import trackForwardStart from "trackForwardStart" /* 11613 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let c5 = "forward-modal";
const result = require("set").fileFinishedImporting("modules/forwarding/native/ForwardModalUtils.tsx");

export const FORWARD_MODAL_KEY = "forward-modal";
export const openForwardModal = function openForwardModal(arg0) {
  ({ message, source, initialSelectedDestinations } = arg0);
  if (initialSelectedDestinations === undefined) {
    initialSelectedDestinations = [];
  }
  ({ forwardOptions, customSendHandler } = arg0);
  trackForwardStart.trackForwardStart(message.channel_id, message.id, source);
  const obj = trackForwardStart;
  showSearchableDestinationListModalDefault(asyncRequireImpl(11614, dependencyMap.paths), { message, initialSelectedDestinations, forwardOptions, source, customSendHandler }, c5);
};
export const closeForwardModal = function closeForwardModal() {
  _modDef4731.popWithKey(c5);
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = React.lazy(() => callback(paths[5])(paths[7], paths.paths));
  useAlertStore.openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
};
