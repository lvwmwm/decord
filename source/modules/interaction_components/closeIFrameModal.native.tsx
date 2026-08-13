// Module ID: 16552
// Function ID: 16553
// Name: closeIFrameModal
// Dependencies: [16550, 4550, 709, 2]
// Exports: default

// Module 16552 (closeIFrameModal)
import { INTERACTION_IFRAME_MODAL_KEY as closure_2 } from "INTERACTION_IFRAME_MODAL_KEY";

const result = require("dispatcher").fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  let obj = importDefault(4550);
  obj.popWithKey(closure_2);
  obj = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  importDefault(709).dispatch(obj);
};
