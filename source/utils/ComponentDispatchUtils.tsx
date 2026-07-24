// Module ID: 1207
// Function ID: 13875
// Name: reportDevtoolsEvent
// Dependencies: [653, 1208, 3, 1209, 2]

// Module 1207 (reportDevtoolsEvent)
import { ComponentActionsKeyed } from "ME";
import importDefaultResult from "ComponentDispatcher";

importDefaultResult = new importDefaultResult("ComponentDispatchUtils");
let obj = {
  maxListeners: 100,
  enableDevtools: false,
  logger: {
    warn(arg0, arg1) {
      const items = [arg0, ...HermesBuiltin.copyRestArgs()];
      return importDefaultResult.warn.apply(items);
    }
  },
  devtoolsReporter: function reportDevtoolsEvent(fullActionName, actionData, durationMs) {
    const importAll = fullActionName;
    const values = Object.values(ComponentActionsKeyed);
    const found = values.find((arg0) => closure_0.startsWith(arg0));
    let tmp2 = fullActionName;
    if (null != found) {
      tmp2 = found;
    }
    let obj = importAll(1208);
    obj = { type: "ComponentDispatch", description: tmp2 };
    obj = { actionData, fullActionName };
    obj.data = obj;
    obj.durationMs = durationMs;
    obj.reportEvent(obj);
  }
};
const componentDispatcher = new require("ComponentDispatcher").ComponentDispatcher(obj);
const result = require("timestamp").fileFinishedImporting("utils/ComponentDispatchUtils.tsx");

export const ComponentDispatcher = require("ComponentDispatcher").ComponentDispatcher;
export const ComponentDispatch = componentDispatcher;
