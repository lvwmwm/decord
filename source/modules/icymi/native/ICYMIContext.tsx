// Module ID: 15054
// Function ID: 113326
// Name: useICYMIContextConstructor
// Dependencies: []
// Exports: ICYMIContextProvider

// Module 15054 (useICYMIContextConstructor)
function useICYMIContextConstructor() {
  const bound = Math.min(importDefault(dependencyMap[2])().width, 480);
  const PX_16 = importDefault(dependencyMap[3]).space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
}
const jsx = require(dependencyMap[1]).jsx;
const context = require(dependencyMap[0]).createContext({ style: "spring", minimumFractionDigits: "linear", enabled: "easeInEaseOut" });
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export { useICYMIContextConstructor };
export const ICYMIContextProvider = function ICYMIContextProvider(children) {
  const tmp = useICYMIContextConstructor();
  return <context.Provider value={{ width: tmp.width, margin: tmp.margin, inset: tmp.inset }}>{arg0.children}</context.Provider>;
};
