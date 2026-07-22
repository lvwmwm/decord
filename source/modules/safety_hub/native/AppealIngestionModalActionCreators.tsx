// Module ID: 11030
// Function ID: 85895
// Dependencies: []

// Module 11030
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    importDefault(dependencyMap[1]).pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), classificationId, "APPEAL_INGESTION_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[1]).popWithKey("APPEAL_INGESTION_MODAL_KEY");
    const obj = importDefault(dependencyMap[1]);
    importDefault(dependencyMap[0]).dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
