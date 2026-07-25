// Module ID: 9830
// Function ID: 76228
// Name: FORWARD_MODAL_KEY
// Dependencies: [31, 33, 9831, 9832, 9833, 1935, 4338, 9866, 4473, 2]
// Exports: closeForwardModal, openForwardModal, showForwardFailedAlertModal

// Module 9830 (FORWARD_MODAL_KEY)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
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
  let obj = require(9831) /* trackForwardStart */;
  obj.trackForwardStart(message.channel_id, message.id, source);
  obj = { message, initialSelectedDestinations, forwardOptions, source, customSendHandler };
  importDefault(9832)(require(1935) /* maybeLoadBundle */(9833, dependencyMap.paths), obj, "forward-modal");
};
export const closeForwardModal = function closeForwardModal() {
  importDefault(4338).popWithKey("forward-modal");
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  let failedDestinations;
  let forwardOptions;
  let message;
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = React.lazy(() => outer1_0(outer1_2[5])(outer1_2[7], outer1_2.paths));
  require(4473) /* useAlertStore */.openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
};
