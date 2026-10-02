// Module ID: 6144
// Function ID: 6145
// Name: react
// Dependencies: [19]
// Exports: useInterceptingDetectorContext

// Module 6144 (react)
import react from "react" /* 19 */;

const use = react.use;
const context = react.createContext(null);

export const InterceptingDetectorMode = { DEFAULT: 0, [0]: "DEFAULT", ANIMATED: 1, [1]: "ANIMATED", REANIMATED: 2, [2]: "REANIMATED" };
export const InterceptingDetectorContext = context;
export const useInterceptingDetectorContext = function useInterceptingDetectorContext() {
  return use(context);
};
