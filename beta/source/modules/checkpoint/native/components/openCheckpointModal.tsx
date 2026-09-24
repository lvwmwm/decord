// Module ID: 15964
// Function ID: 15965
// Name: openCheckpointModal
// Dependencies: [1078, 1245, 4993, 15965, 1984, 2]
// Exports: default

// Module 15964 (openCheckpointModal)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/openCheckpointModal.tsx");

export default function openCheckpointModal(source) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.CHECKPOINT_STARTED, { source });
  const obj2 = { source };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15965, dependencyMap.paths), { didPlayerShareDataWithDiscord: flag }, "CHECKPOINT_MODAL");
};
