// Module ID: 16092
// Function ID: 16093
// Name: ICYMIContext
// Dependencies: [19, 21, 1479, 576, 2]
// Exports: ICYMIContextProvider, useICYMIContextConstructor

// Module 16092 (ICYMIContext)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const jsx = Fragment.jsx;
const context = createContext({ width: 0, margin: 0, inset: 0 });
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export const useICYMIContextConstructor = function useICYMIContextConstructor() {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
};
export const ICYMIContextProvider = function ICYMIContextProvider(children) {
  children = children.children;
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  return <context.Provider value={{ width: bound, margin: PX_16, inset: PX_16 + 38 }}>{children}</context.Provider>;
};
