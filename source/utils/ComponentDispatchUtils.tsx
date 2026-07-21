// Module ID: 1207
// Function ID: 13869
// Name: ComponentDispatcher
// Dependencies: []

// Module 1207 (ComponentDispatcher)
const ComponentActionsKeyed = require(dependencyMap[0]).ComponentActionsKeyed;
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("ComponentDispatchUtils");
let obj = {
  logger: obj,
  devtoolsReporter: function reportDevtoolsEvent(fullActionName, actionData, durationMs) {
    const importAll = fullActionName;
    const values = Object.values(ComponentActionsKeyed);
    const found = values.find((arg0) => arg0.startsWith(arg0));
    let tmp2 = fullActionName;
    if (null != found) {
      tmp2 = found;
    }
    let obj = importAll(dependencyMap[1]);
    obj = { type: "ComponentDispatch", description: tmp2 };
    obj = { actionData, fullActionName };
    obj.data = obj;
    obj.durationMs = durationMs;
    obj.reportEvent(obj);
  }
};
obj = {
  warn(arg0, arg1) {
    const items = [arg0, ...HermesBuiltin.copyRestArgs()];
    return importDefaultResult.warn.apply(items);
  }
};
const componentDispatcher = new require(dependencyMap[3]).ComponentDispatcher(obj);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("utils/ComponentDispatchUtils.tsx");

export const ComponentDispatcher = require(dependencyMap[3]).ComponentDispatcher;
export const ComponentDispatch = componentDispatcher;
