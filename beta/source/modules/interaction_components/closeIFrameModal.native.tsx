// Module ID: 17812
// Function ID: 17813
// Name: closeIFrameModal
// Dependencies: [17810, 4961, 577, 2]
// Exports: default

// Module 17812 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 577 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 17810 */;
import size from "module_2" /* 2 */;

let closure_2 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  ModalActionCreatorsDefault.popWithKey(closure_2);
  DispatcherDefault.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId });
};
