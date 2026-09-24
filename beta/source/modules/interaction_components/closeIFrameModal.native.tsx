// Module ID: 17823
// Function ID: 17824
// Name: closeIFrameModal
// Dependencies: [17821, 4993, 577, 2]
// Exports: default

// Module 17823 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 577 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 17821 */;
import size from "module_2" /* 2 */;

let closure_2 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  ModalActionCreatorsDefault.popWithKey(closure_2);
  DispatcherDefault.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId });
};
