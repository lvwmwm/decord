// Module ID: 249
// Function ID: 3310
// Name: context
// Dependencies: []
// Exports: usePerformanceLogger

// Module 249 (context)
importAll(dependencyMap[0]);
const obj = arg1(dependencyMap[0]);
const useContext = obj.useContext;
const context = obj.createContext(importDefault(dependencyMap[1]));

export default context;
export const usePerformanceLogger = function usePerformanceLogger() {
  return useContext(context);
};
