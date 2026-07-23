// Module ID: 16436
// Function ID: 128077
// Name: useEditStateContext
// Dependencies: [31, 33, 2]
// Exports: EditStateContextProvider, useEditStateContext

// Module 16436 (useEditStateContext)
import importAllResult from "result";
import { jsx } from "jsxProd";

let context = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/edit_state/EditStateContextProvider.tsx");

export const useEditStateContext = function useEditStateContext() {
  const context = importAllResult.useContext(closure_2);
  if (null == context) {
    const _Error = Error;
    const error = new Error("No edit state; are you missing an <EditStateContextProvider />?");
    throw error;
  } else {
    return context;
  }
};
export const EditStateContextProvider = function EditStateContextProvider(children) {
  let obj = Object.create(null);
  obj.children = 0;
  obj = { value: Object.assign(children, obj), children: children.children };
  return <redux.Provider value={Object.assign(arg0, obj)}>{arg0.children}</redux.Provider>;
};
