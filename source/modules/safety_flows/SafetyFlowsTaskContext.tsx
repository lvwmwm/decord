// Module ID: 16849
// Function ID: 16850
// Name: context
// Dependencies: [19, 2]
// Exports: useSafetyFlowTask

// Module 16849 (context)
import importAllResult from "noop";

let c0 = importAllResult;
let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/safety_flows/SafetyFlowsTaskContext.tsx");

export const SafetyFlowTaskContext = context;
export const useSafetyFlowTask = function useSafetyFlowTask() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    throw error;
  } else {
    return context;
  }
};
