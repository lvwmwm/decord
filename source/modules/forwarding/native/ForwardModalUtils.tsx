// Module ID: 9892
// Function ID: 9893
// Name: FORWARD_MODAL_KEY
// Dependencies: [19, 21, 9893, 9894, 9895, 1959, 4395, 9928, 4530, 2]
// Exports: closeForwardModal, openForwardModal, showForwardFailedAlertModal

// Module 9892 (FORWARD_MODAL_KEY)
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
  require(9893) /* trackForwardStart */.trackForwardStart(message.channel_id, message.id, source);
  const obj = require(9893) /* trackForwardStart */;
  importDefault(9894)(require(1959) /* asyncRequireImpl */(9895, dependencyMap.paths), { message, initialSelectedDestinations, forwardOptions, source, customSendHandler }, c5);
};
export const closeForwardModal = function closeForwardModal() {
  importDefault(4395).popWithKey(c5);
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  let failedDestinations;
  let forwardOptions;
  let message;
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = React.lazy(() => callback(paths[5])(paths[7], paths.paths));
  require(4530) /* useAlertStore */.openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
};
