// Module ID: 19550
// Function ID: 19551
// Name: closeIFrameModal
// Dependencies: [19548, 6429, 572, 2]
// Exports: default

// Module 19550 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 19548 */;
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
