// Module ID: 11062
// Function ID: 85882
// Dependencies: [686, 4372, 11063, 1935, 2]

// Module 11062
const result = require("getHeader").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = importDefault(686);
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(11063, dependencyMap.paths), classificationId, "APPEAL_INGESTION_MODAL_KEY");
  },
  close() {
    importDefault(4372).popWithKey("APPEAL_INGESTION_MODAL_KEY");
    const obj = importDefault(4372);
    importDefault(686).dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
