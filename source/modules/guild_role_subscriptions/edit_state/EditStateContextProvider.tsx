// Module ID: 16319
// Function ID: 125903
// Name: useEditStateContext
// Dependencies: []
// Exports: EditStateContextProvider, useEditStateContext

// Module 16319 (useEditStateContext)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const context = importAllResult.createContext(undefined);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_role_subscriptions/edit_state/EditStateContextProvider.tsx");

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
  return <redux.Provider {...obj} />;
};
