// Module ID: 11024
// Function ID: 85759
// Dependencies: [686, 4338, 11025, 1935, 2]

// Module 11024
const result = require("getHeader").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = importDefault(686);
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(11025, dependencyMap.paths), classificationId, "APPEAL_INGESTION_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("APPEAL_INGESTION_MODAL_KEY");
    const obj = importDefault(4338);
    importDefault(686).dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
