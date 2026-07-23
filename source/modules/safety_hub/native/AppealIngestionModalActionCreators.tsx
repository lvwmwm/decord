// Module ID: 11040
// Function ID: 85945
// Dependencies: [686, 4337, 11041, 1934, 2]

// Module 11040
const result = require("getHeader").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = importDefault(686);
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11041, dependencyMap.paths), classificationId, "APPEAL_INGESTION_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("APPEAL_INGESTION_MODAL_KEY");
    const obj = importDefault(4337);
    importDefault(686).dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
