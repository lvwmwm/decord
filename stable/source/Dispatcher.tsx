// Module ID: 585
// Function ID: 586
// Name: Dispatcher
// Dependencies: [586, 579, 510, 504, 686, 2]

// Module 585 (Dispatcher)
import get_initialized from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import LoggingUtils from "LoggingUtils" /* 579 */;
import Constants from "Constants" /* 586 */;
import addSentryBreadcrumbDefault from "addSentryBreadcrumb" /* 686 */;
import size from "module_2" /* 2 */;

const obj = { Early: 0, [0]: "Early", Database: 1, [1]: "Database", Default: 2, [2]: "Default" };
const STORAGE_KEY_LOG_DISPATCHES = Constants.STORAGE_KEY_LOG_DISPATCHES;
const ActionLogger = LoggingUtils.ActionLogger;
const Storage = Storage2.Storage;
let flag = Storage.get(STORAGE_KEY_LOG_DISPATCHES);
if (flag == null) {
  flag = false;
}
const obj2 = { persist: flag };
const actionLogger = new ActionLogger(obj2);
const Default = obj.Default;
const obj3 = { addBreadcrumb: addSentryBreadcrumbDefault };
const Dispatcher = get_initialized.Dispatcher;
const dispatcher = new Dispatcher(Default, actionLogger, obj3);
const result = size.fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = obj;
