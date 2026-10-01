// Module ID: 17569
// Function ID: 17570
// Name: EditStateContextProvider
// Dependencies: [19, 21, 2]
// Exports: EditStateContextProvider, useEditStateContext

// Module 17569 (EditStateContextProvider)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const redux = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/EditStateContextProvider.tsx");

export const useEditStateContext = function useEditStateContext() {
  const context = react.useContext(redux);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("No edit state; are you missing an <EditStateContextProvider />?");
    throw error;
  } else {
    return context;
  }
};
export const EditStateContextProvider = function EditStateContextProvider(children) {
  return <redux.Provider value={Object.assign(arg0, Object.assign({ children: 0 }))}>{arg0.children}</redux.Provider>;
};
