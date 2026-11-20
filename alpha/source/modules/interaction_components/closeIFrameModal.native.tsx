// Module ID: 19423
// Function ID: 19424
// Name: closeIFrameModal
// Dependencies: [19421, 6310, 572, 2]
// Exports: default

// Module 19423 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 19421 */;
import size from "module_2" /* 2 */;

let closure_2 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_2);
  const obj2 = DispatcherDefault;
  const obj3 = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  obj2.dispatch(obj3);
};
