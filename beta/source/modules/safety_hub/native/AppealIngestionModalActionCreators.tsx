// Module ID: 12052
// Function ID: 12053
// Name: AppealIngestionModalActionCreators
// Dependencies: [577, 4993, 12053, 1984, 2]

// Module 12052 (AppealIngestionModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId });
    const obj2 = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12053, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
