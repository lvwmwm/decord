// Module ID: 9859
// Function ID: 76344
// Name: FORWARD_MODAL_KEY
// Dependencies: []
// Exports: closeForwardModal, openForwardModal, showForwardFailedAlertModal

// Module 9859 (FORWARD_MODAL_KEY)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forwarding/native/ForwardModalUtils.tsx");

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
  let obj = arg1(dependencyMap[2]);
  obj.dismissKeyboard();
  arg1(dependencyMap[3]).trackForwardStart(message.channel_id, message.id, source);
  const obj2 = arg1(dependencyMap[3]);
  let isWindowLarge = arg1(dependencyMap[4]).getIsWindowLarge();
  if (isWindowLarge) {
    isWindowLarge = arg1(dependencyMap[5]).isIOS();
    const obj4 = arg1(dependencyMap[5]);
  }
  const obj3 = arg1(dependencyMap[4]);
  const obj5 = importDefault(dependencyMap[6]);
  obj = { message, initialSelectedDestinations, forwardOptions, source, customSendHandler };
  let tmp7;
  if (!isWindowLarge) {
    obj = { presentation: "modal" };
    tmp7 = obj;
  }
  obj5.pushLazy(arg1(dependencyMap[8])(dependencyMap[7], dependencyMap.paths), obj, "forward-modal", tmp7);
};
export const closeForwardModal = function closeForwardModal() {
  importDefault(dependencyMap[6]).popWithKey("forward-modal");
};
export const showForwardFailedAlertModal = function showForwardFailedAlertModal(arg0) {
  let failedDestinations;
  let forwardOptions;
  let message;
  ({ message, failedDestinations, forwardOptions } = arg0);
  const lazyResult = React.lazy(() => callback(paths[8])(paths[9], paths.paths));
  arg1(dependencyMap[10]).openAlert("forward-failed-alert-modal", <lazyResult message={message} failedDestinations={failedDestinations} forwardOptions={forwardOptions} />);
};
