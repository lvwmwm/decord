// Module ID: 13434
// Function ID: 13435
// Name: openCheckpoint
// Dependencies: [1072, 1252, 6744, 13435, 1994, 2]
// Exports: openCheckpoint

// Module 13434 (openCheckpoint)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint(devtools, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const obj = AnalyticsUtilsDefault;
  const obj2 = { source: devtools };
  obj.track(AnalyticEvents.CHECKPOINT_STARTED, obj2);
  const obj3 = ModalActionCreatorsDefault;
  obj3.pushLazy(asyncRequire(13435, dependencyMap.paths), { didPlayerShareDataWithDiscord: flag }, "CHECKPOINT_MODAL");
}
