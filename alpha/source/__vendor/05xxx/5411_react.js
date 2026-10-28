// Module ID: 5411
// Function ID: 5412
// Name: react
// Dependencies: [19]
// Exports: useInterceptingDetectorContext

// Module 5411 (react)
import react from "react" /* 19 */;

const use = react.use;
const context = react.createContext(null);

export const InterceptingDetectorMode = { DEFAULT: 0, [0]: "DEFAULT", ANIMATED: 1, [1]: "ANIMATED", REANIMATED: 2, [2]: "REANIMATED" };
export const InterceptingDetectorContext = context;
export const useInterceptingDetectorContext = function useInterceptingDetectorContext() {
  return use(context);
};
