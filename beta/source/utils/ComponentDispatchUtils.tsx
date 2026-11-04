// Module ID: 1108
// Function ID: 1109
// Name: ComponentDispatchUtils
// Dependencies: [1072, 1109, 3, 1110, 2]

// Module 1108 (ComponentDispatchUtils)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1072 */;
import DevtoolsExtensionAll from "DevtoolsExtension" /* 1109 */;
import utils_ComponentDispatchUtils from "utils/ComponentDispatchUtils" /* 1110 */;
import size from "module_2" /* 2 */;

const ComponentActionsKeyed = Constants.ComponentActionsKeyed;
const warn = new LoggerDefault("ComponentDispatchUtils");
let obj = {
  maxListeners: 100,
  enableDevtools: false,
  logger: {
    warn(arg0) {
      const items = [arg0, ...HermesBuiltin.copyRestArgs()];
      return warn.warn.apply(items);
    }
  },
  devtoolsReporter: function reportDevtoolsEvent(fullActionName, actionData, durationMs) {
    let closure_0 = fullActionName;
    const values = Object.values(ComponentActionsKeyed);
    let found = values.find((item) => closure_0.startsWith(item));
    if (found == null) {
      found = fullActionName;
    }
    const obj = DevtoolsExtensionAll;
    const obj2 = { type: "ComponentDispatch", description: found, data: { actionData, fullActionName }, durationMs };
    obj.reportEvent(obj2);
  }
};
new LoggerDefault("ComponentDispatchUtils");
const componentDispatcher = new utils_ComponentDispatchUtils.ComponentDispatcher(obj);
const result = size.fileFinishedImporting("utils/ComponentDispatchUtils.tsx");

export const ComponentDispatcher = utils_ComponentDispatchUtils.ComponentDispatcher;
export const ComponentDispatch = componentDispatcher;
