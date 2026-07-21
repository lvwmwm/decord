// Module ID: 686
// Function ID: 8467
// Name: dispatcher
// Dependencies: [709, 710, 733, 736, 737, 738]

// Module 686 (dispatcher)
import { Storage } from "mapCacheDelete";
import mapCacheSet from "mapCacheSet";

let obj = { Early: 0, [0]: "Early", Database: 1, [1]: "Database", Default: 2, [2]: "Default" };
obj = {};
const value = Storage.get(require("MapCache").STORAGE_KEY_LOG_DISPATCHES);
obj.persist = null != value && value;
const actionLogger = new require("mapCacheClear").ActionLogger(obj);
obj = { addBreadcrumb: require("mapCacheHas") };
const dispatcher = new require("mapCacheGet").Dispatcher(obj.Default, actionLogger, obj);
const result = mapCacheSet.fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = obj;
