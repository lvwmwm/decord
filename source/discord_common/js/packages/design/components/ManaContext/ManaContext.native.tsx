// Module ID: 3907
// Function ID: 32322
// Name: context
// Dependencies: [31, 33, 2]
// Exports: ManaContextProvider, useManaContext

// Module 3907 (context)
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
