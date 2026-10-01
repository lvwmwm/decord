// Module ID: 4611
// Function ID: 4612
// Name: ManaContext
// Dependencies: [19, 21, 2]
// Exports: ManaContextProvider, useManaContext

// Module 4611 (ManaContext)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = {};
const context = react.createContext(obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx");

export const ManaContext = context;
export const useManaContext = () => react.useContext(context);
export const ManaContextProvider = function ManaContextProvider(value) {
  value = value.value;
  const children = value.children;
  const Provider = context.Provider;
  const tmp = jsx;
  if (value == null) {
    value = obj;
  }
  return tmp(Provider, { value, children });
};
