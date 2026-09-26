// Module ID: 15968
// Function ID: 15969
// Name: openCheckpointModal
// Dependencies: [1074, 1241, 4991, 15969, 1980, 2]
// Exports: default

// Module 15968 (openCheckpointModal)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
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
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15969, dependencyMap.paths), { didPlayerShareDataWithDiscord: flag }, "CHECKPOINT_MODAL");
};
