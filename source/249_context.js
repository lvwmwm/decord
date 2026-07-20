// Module ID: 249
// Function ID: 3310
// Name: context
// Dependencies: [0, 19]
// Exports: usePerformanceLogger

// Module 249 (context)
import "result";
import result from "result";
import context from "_setPrototypeOf";

const useContext = result.useContext;

export default context;
export const usePerformanceLogger = function usePerformanceLogger() {
  return useContext(context);
};
