// Module ID: 1120
// Function ID: 1121
// Name: ComponentDispatchUtils
// Dependencies: [1084, 1121, 3, 1122, 2]

// Module 1120 (ComponentDispatchUtils)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1084 */;
import DevtoolsExtensionAll from "DevtoolsExtension" /* 1121 */;
import utils_ComponentDispatchUtils from "utils/ComponentDispatchUtils" /* 1122 */;
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
