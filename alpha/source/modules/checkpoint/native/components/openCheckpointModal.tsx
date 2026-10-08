// Module ID: 15800
// Function ID: 15801
// Name: openCheckpointModal
// Dependencies: [1085, 1264, 5940, 15801, 1999, 2]
// Exports: default

// Module 15800 (openCheckpointModal)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/openCheckpointModal.tsx");

export default function openCheckpointModal(source) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const obj = AnalyticsUtilsDefault;
  const obj2 = { source };
  obj.track(AnalyticEvents.CHECKPOINT_STARTED, obj2);
  const obj3 = ModalActionCreatorsDefault;
  obj3.pushLazy(asyncRequire(15801, dependencyMap.paths), { didPlayerShareDataWithDiscord: flag }, "CHECKPOINT_MODAL");
};
