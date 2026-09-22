// Module ID: 4538
// Function ID: 4539
// Name: ManaContext
// Dependencies: [19, 21, 2]
// Exports: ManaContextProvider, useManaContext

// Module 4538 (ManaContext)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const obj = {};
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx");

export const ManaContext = context;
export const useManaContext = () => noop.useContext(context);
export const ManaContextProvider = function ManaContextProvider(children) {
  value = children.value;
  if (value == null) {
    value = obj;
  }
  return <context.Provider value={value}>{arg0.children}</context.Provider>;
};
