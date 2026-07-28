// Module ID: 3941
// Function ID: 32425
// Name: context
// Dependencies: [31, 33, 2]
// Exports: ManaContextProvider, useManaContext

// Module 3941 (context)
import importAllResult from "result";
import { jsx } from "jsxProd";

let obj = {};
const context = importAllResult.createContext(obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx");

export const ManaContext = context;
export const useManaContext = () => importAllResult.useContext(context);
export const ManaContextProvider = (value) => {
  value = value.value;
  const obj = {};
  if (null == value) {
    value = obj;
  }
  obj.value = value;
  obj.children = value.children;
  return <context.Provider />;
};
