// Module ID: 11218
// Function ID: 11219
// Dependencies: [709, 4490, 11219, 1988, 2]

// Module 11218
const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = require("AppealIngestionModal").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = importDefault(709);
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(11219, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj = importDefault(4490);
    importDefault(709).dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
