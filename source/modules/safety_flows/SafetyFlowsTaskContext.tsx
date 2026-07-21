// Module ID: 16429
// Function ID: 126925
// Name: context
// Dependencies: []
// Exports: useSafetyFlowTask

// Module 16429 (context)
const importAllResult = importAll(dependencyMap[0]);
const context = importAllResult.createContext(null);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/safety_flows/SafetyFlowsTaskContext.tsx");

export const SafetyFlowTaskContext = context;
export const useSafetyFlowTask = function useSafetyFlowTask() {
  const context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    throw error;
  } else {
    return context;
  }
};
