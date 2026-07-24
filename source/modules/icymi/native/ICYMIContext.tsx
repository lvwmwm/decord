// Module ID: 15227
// Function ID: 115894
// Name: useICYMIContextConstructor
// Dependencies: [31, 33, 1450, 689, 2]
// Exports: ICYMIContextProvider

// Module 15227 (useICYMIContextConstructor)
import { jsx } from "jsxProd";

function useICYMIContextConstructor() {
  const bound = Math.min(importDefault(1450)().width, 480);
  const PX_16 = importDefault(689).space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
}
const context = require("result").createContext({ width: 0, margin: 0, inset: 0 });
const result = require("useWindowDimensions").fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export { useICYMIContextConstructor };
export const ICYMIContextProvider = function ICYMIContextProvider(children) {
  const tmp = useICYMIContextConstructor();
  return <context.Provider value={{ width: tmp.width, margin: tmp.margin, inset: tmp.inset }}>{arg0.children}</context.Provider>;
};
