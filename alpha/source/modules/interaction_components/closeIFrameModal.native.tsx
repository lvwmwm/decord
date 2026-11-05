// Module ID: 19821
// Function ID: 19822
// Name: closeIFrameModal
// Dependencies: [19819, 6882, 572, 2]
// Exports: default

// Module 19821 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 19819 */;
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
