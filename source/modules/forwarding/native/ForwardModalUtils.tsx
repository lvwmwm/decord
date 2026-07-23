// Module ID: 9872
// Function ID: 76425
// Name: FORWARD_MODAL_KEY
// Dependencies: [31, 33, 3989, 9873, 8133, 477, 4337, 9874, 1934, 9906, 4472, 2]
// Exports: closeForwardModal, openForwardModal, showForwardFailedAlertModal

// Module 9872 (FORWARD_MODAL_KEY)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getHighestActiveScreenIndex").fileFinishedImporting("modules/forwarding/native/ForwardModalUtils.tsx");

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
  let obj = require(3989) /* getHighestActiveScreenIndex */;
  obj.dismissKeyboard();
  require(9873) /* trackForwardStart */.trackForwardStart(message.channel_id, message.id, source);
  const obj2 = require(9873) /* trackForwardStart */;
  let isWindowLarge = require(8133) /* useIsWindowLarge */.getIsWindowLarge();
  if (isWindowLarge) {
    isWindowLarge = require(477) /* set */.isIOS();
    const obj4 = require(477) /* set */;
  }
  const obj3 = require(8133) /* useIsWindowLarge */;
  const obj5 = importDefault(4337);
  obj = { message, initialSelectedDestinations, forwardOptions, source, customSendHandler };
  let tmp7;
  if (!isWindowLarge) {
    obj = { presentation: "modal" };
    tmp7 = obj;
  }
  obj5.pushLazy(require(1934) /* maybeLoadBundle */(9874, dependencyMap.paths), obj, "forward-modal", tmp7);
};
export const closeForwardModal = function closeForwardModal() {
  importDefault(4337).popWithKey("forward-modal");
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  let failedDestinations;
  let forwardOptions;
  let message;
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = React.lazy(() => outer1_0(outer1_2[8])(outer1_2[9], outer1_2.paths));
  require(4472) /* useAlertStore */.openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
};
