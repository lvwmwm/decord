// Module ID: 17688
// Function ID: 17689
// Name: context
// Dependencies: [19, 2]
// Exports: useSafetyFlowTask

// Module 17688 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/safety_flows/SafetyFlowsTaskContext.tsx");

export const SafetyFlowTaskContext = context;
export const useSafetyFlowTask = function useSafetyFlowTask() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    throw error;
  } else {
    return context;
  }
};
