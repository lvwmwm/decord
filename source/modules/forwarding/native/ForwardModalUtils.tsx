// Module ID: 10281
// Function ID: 10282
// Name: FORWARD_MODAL_KEY
// Dependencies: [19, 21, 10282, 10283, 10284, 2007, 4549, 10313, 4684, 2]
// Exports: closeForwardModal, openForwardModal, showForwardFailedAlertModal

// Module 10281 (FORWARD_MODAL_KEY)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c5 = "forward-modal";
const result = require("trackForwardStart").fileFinishedImporting("modules/forwarding/native/ForwardModalUtils.tsx");

export const FORWARD_MODAL_KEY = "forward-modal";
export const openForwardModal = function openForwardModal(arg0) {
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
  require(10282) /* trackForwardStart */.trackForwardStart(message.channel_id, message.id, source);
  const obj = require(10282) /* trackForwardStart */;
  importDefault(10283)(require(2007) /* asyncRequireImpl */(10284, dependencyMap.paths), { message, initialSelectedDestinations, forwardOptions, source, customSendHandler }, c5);
};
export const closeForwardModal = function closeForwardModal() {
  importDefault(4549).popWithKey(c5);
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  let failedDestinations;
  let forwardOptions;
  let message;
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = React.lazy(() => callback(paths[5])(paths[7], paths.paths));
  require(4684) /* useAlertStore */.openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
};
