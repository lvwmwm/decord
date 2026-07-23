// Module ID: 249
// Function ID: 3310
// Name: context
// Dependencies: [31, 204]
// Exports: usePerformanceLogger

// Module 249 (context)
import "result";
import result from "result";
import context from "PerformanceLogger";

const useContext = result.useContext;

export default context;
export const usePerformanceLogger = function usePerformanceLogger() {
  return useContext(context);
};
