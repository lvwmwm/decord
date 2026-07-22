// Module ID: 3904
// Function ID: 32305
// Name: context
// Dependencies: []
// Exports: ManaContextProvider, useManaContext

// Module 3904 (context)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const obj = {};
const context = importAllResult.createContext(obj);
const result = arg1(dependencyMap[2]).fileFinishedImporting("../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx");

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
  return <context.Provider {...obj} />;
};
