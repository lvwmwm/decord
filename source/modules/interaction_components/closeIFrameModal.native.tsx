// Module ID: 16133
// Function ID: 124971
// Name: closeIFrameModal
// Dependencies: [16131, 4337, 686, 2]
// Exports: default

// Module 16133 (closeIFrameModal)
import { INTERACTION_IFRAME_MODAL_KEY as closure_2 } from "INTERACTION_IFRAME_MODAL_KEY";

const result = require("dispatcher").fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  let obj = importDefault(4337);
  obj.popWithKey(closure_2);
  obj = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  importDefault(686).dispatch(obj);
};
