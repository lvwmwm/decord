// Module ID: 16743
// Function ID: 16744
// Name: closeIFrameModal
// Dependencies: [16741, 4611, 709, 2]
// Exports: default

// Module 16743 (closeIFrameModal)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef4611 from "module_4611" /* 4611 */;
import INTERACTION_IFRAME_MODAL_KEY from "INTERACTION_IFRAME_MODAL_KEY" /* 16741 */;

let closure_2 = INTERACTION_IFRAME_MODAL_KEY.INTERACTION_IFRAME_MODAL_KEY;
const result = set.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  let obj = _modDef4611;
  obj.popWithKey(closure_2);
  obj = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  dispatcherDefault.dispatch(obj);
};
