// Module ID: 11359
// Function ID: 11360
// Dependencies: [709, 4549, 11360, 2007, 2]

// Module 11359
const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = require("AppealIngestionModal").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = importDefault(709);
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(11360, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    importDefault(4549).popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj = importDefault(4549);
    importDefault(709).dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
