// Module ID: 20490
// Function ID: 20491
// Name: SafetyFlowsTaskContext
// Dependencies: [19, 2]
// Exports: useSafetyFlowTask

// Module 20490 (SafetyFlowsTaskContext)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let context = react.createContext(null);
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsTaskContext.tsx");

export const SafetyFlowTaskContext = context;
export function useSafetyFlowTask() {
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    throw error;
  } else {
    return context;
  }
}
