// Module ID: 15961
// Function ID: 122432
// Name: closeIFrameModal
// Dependencies: [6, 7, 15, 17]
// Exports: default

// Module 15961 (closeIFrameModal)
import { INTERACTION_IFRAME_MODAL_KEY as closure_2 } from "_classCallCheck";
import _getPrototypeOf from "_getPrototypeOf";

const result = _getPrototypeOf.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  let obj = importDefault(dependencyMap[1]);
  obj.popWithKey(closure_2);
  obj = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  importDefault(dependencyMap[2]).dispatch(obj);
};
