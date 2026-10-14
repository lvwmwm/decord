// Module ID: 18184
// Function ID: 18185
// Name: closeIFrameModal
// Dependencies: [18182, 5939, 584, 2]
// Exports: default

// Module 18184 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 18182 */;
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
