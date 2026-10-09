// Module ID: 18014
// Function ID: 18015
// Name: closeIFrameModal
// Dependencies: [18012, 5941, 584, 2]
// Exports: default

// Module 18014 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 18012 */;
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
