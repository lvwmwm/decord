// Module ID: 11082
// Function ID: 11083
// Dependencies: [709, 4395, 11083, 1959, 2]

// Module 11082
const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = require("AppealIngestionModal").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = importDefault(709);
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(11083, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    importDefault(4395).popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj = importDefault(4395);
    importDefault(709).dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
