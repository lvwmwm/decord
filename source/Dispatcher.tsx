// Module ID: 686
// Function ID: 8471
// Name: dispatcher
// Dependencies: [687, 628, 587, 566, 786, 2]

// Module 686 (dispatcher)
import { Storage } from "Storage";

let obj = { Early: 0, [0]: "Early", Database: 1, [1]: "Database", Default: 2, [2]: "Default" };
obj = {};
const value = Storage.get(require("STORAGE_KEY_LOG_DISPATCHES").STORAGE_KEY_LOG_DISPATCHES);
obj.persist = null != value && value;
const actionLogger = new require("_createForOfIteratorHelperLoose").ActionLogger(obj);
obj = { addBreadcrumb: require("addSentryBreadcrumb") };
const dispatcher = new require("initialize").Dispatcher(obj.Default, actionLogger, obj);
const result = require("Storage").fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = obj;
