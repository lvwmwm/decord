// Module ID: 686
// Function ID: 8467
// Name: dispatcher
// Dependencies: []

// Module 686 (dispatcher)
let obj = { Early: 0, [0]: "Early", Database: 1, [1]: "Database", Default: 2, [2]: "Default" };
obj = {};
const Storage = require(dependencyMap[2]).Storage;
const value = Storage.get(require(dependencyMap[0]).STORAGE_KEY_LOG_DISPATCHES);
obj.persist = null != value && value;
const actionLogger = new require(dependencyMap[1]).ActionLogger(obj);
obj = { addBreadcrumb: importDefault(dependencyMap[4]) };
const dispatcher = new require(dependencyMap[3]).Dispatcher(obj.Default, actionLogger, obj);
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = obj;
