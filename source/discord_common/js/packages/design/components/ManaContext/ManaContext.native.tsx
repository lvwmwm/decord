// Module ID: 4130
// Function ID: 4131
// Name: context
// Dependencies: [19, 21, 2]
// Exports: ManaContextProvider, useManaContext

// Module 4130 (context)
import importAllResult from "noop";
import { jsx } from "jsxProd";

let c0 = importAllResult;
const obj = {};
const context = importAllResult.createContext(obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx");

export const ManaContext = context;
export const useManaContext = () => importAllResult.useContext(context);
export const ManaContextProvider = function ManaContextProvider(children) {
  let value = children.value;
  if (value == null) {
    value = obj;
  }
  return <context.Provider value={value}>{arg0.children}</context.Provider>;
};
