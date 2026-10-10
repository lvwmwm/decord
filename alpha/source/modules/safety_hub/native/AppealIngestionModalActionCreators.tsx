// Module ID: 11476
// Function ID: 11477
// Name: AppealIngestionModalActionCreators
// Dependencies: [584, 5934, 11477, 2000, 2]

// Module 11476 (AppealIngestionModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
let obj = {
  open(classificationId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj2);
    const obj3 = ModalActionCreatorsDefault;
    obj3.pushLazy(asyncRequire(11477, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default obj;
