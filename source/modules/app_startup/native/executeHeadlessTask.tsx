// Module ID: 16729
// Function ID: 130285
// Name: _executeHeadlessTask
// Dependencies: [5, 27, 1194, 16012, 653, 3, 1184, 652, 25, 14, 12705, 675, 480, 4050, 2]
// Exports: default

// Module 16729 (_executeHeadlessTask)
import timestamp from "timestamp";
import { AppState } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { AnalyticEvents } from "ME";

let closure_7;
let closure_8;
const require = arg1;
function _executeHeadlessTask() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ initHeadlessTask: closure_7, applicationReady: closure_8 } = _createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_startup/native/executeHeadlessTask.tsx");

export default function executeHeadlessTask() {
  return _executeHeadlessTask(...arguments);
};
