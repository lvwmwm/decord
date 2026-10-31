// Module ID: 18516
// Function ID: 18517
// Name: ICYMIContext
// Dependencies: [19, 21, 1491, 575, 2]
// Exports: ICYMIContextProvider, useICYMIContextConstructor

// Module 18516 (ICYMIContext)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1491 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c2;
let createContext;
({ useMemo: c2, createContext } = react);
const jsx = Fragment.jsx;
const context = createContext({ width: 0, margin: 0, inset: 0 });
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export function useICYMIContextConstructor() {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
}
export function ICYMIContextProvider(children) {
  children = children.children;
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  const sum = PX_16 + 38;
  let c2 = sum;
  const items = [bound, PX_16, sum];
  return <context.Provider value={React2(() => ({ width: bound, margin: PX_16, inset }), items)}>{children}</context.Provider>;
}
