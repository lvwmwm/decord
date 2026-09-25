// Module ID: 17663
// Function ID: 17664
// Name: SafetyFlowsTaskContext
// Dependencies: [19, 2]
// Exports: useSafetyFlowTask

// Module 17663 (SafetyFlowsTaskContext)
import noop from "module_19" /* 19 */;

let context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsTaskContext.tsx");

export const SafetyFlowTaskContext = context;
export const useSafetyFlowTask = function useSafetyFlowTask() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    throw error;
  } else {
    return context;
  }
};
