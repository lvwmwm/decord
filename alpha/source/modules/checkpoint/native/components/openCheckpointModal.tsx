// Module ID: 15913
// Function ID: 15914
// Name: openCheckpointModal
// Dependencies: [1085, 1265, 5941, 15914, 2000, 2]
// Exports: default

// Module 15913 (openCheckpointModal)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
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
  obj3.pushLazy(asyncRequire(15914, dependencyMap.paths), { didPlayerShareDataWithDiscord: flag }, "CHECKPOINT_MODAL");
};
