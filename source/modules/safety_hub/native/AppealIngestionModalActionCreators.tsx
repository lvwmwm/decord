// Module ID: 11023
// Function ID: 85754
// Dependencies: [686, 4338, 11024, 1935, 2]

// Module 11023
const result = require("getHeader").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = importDefault(686);
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(11024, dependencyMap.paths), classificationId, "APPEAL_INGESTION_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("APPEAL_INGESTION_MODAL_KEY");
    const obj = importDefault(4338);
    importDefault(686).dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
