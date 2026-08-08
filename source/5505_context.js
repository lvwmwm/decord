// Module ID: 5505
// Function ID: 5506
// Name: context
// Dependencies: [19]
// Exports: useInterceptingDetectorContext

// Module 5505 (context)
import noop from "noop";

const use = noop.use;
const context = noop.createContext(null);

export const InterceptingDetectorMode = { DEFAULT: 0, [0]: "DEFAULT", ANIMATED: 1, [1]: "ANIMATED", REANIMATED: 2, [2]: "REANIMATED" };
export const InterceptingDetectorContext = context;
export const useInterceptingDetectorContext = function useInterceptingDetectorContext() {
  return use(context);
};
