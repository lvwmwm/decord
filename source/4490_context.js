// Module ID: 4490
// Function ID: 39629
// Name: context
// Dependencies: []
// Exports: useEdgeInsetApplication

// Module 4490 (context)
const importAllResult = importAll(dependencyMap[0]);
const context = importAllResult.createContext({ 0: true, 0: false, 0: false });

export const EdgeInsetApplicationContext = context;
export const useEdgeInsetApplication = function useEdgeInsetApplication(arg0, arg1, arg2) {
  let bottomDisabled;
  let leftDisabled;
  let rightDisabled;
  let context = importAllResult.useContext(context);
  ({ leftDisabled, rightDisabled, bottomDisabled } = context);
  if (!leftDisabled) {
    leftDisabled = arg0;
  }
  if (!rightDisabled) {
    rightDisabled = arg1;
  }
  context = rightDisabled;
  if (!bottomDisabled) {
    bottomDisabled = arg2;
  }
  const items = [leftDisabled, rightDisabled, bottomDisabled];
  const obj = { consumeLeftInset: !leftDisabled, consumeRightInset: !rightDisabled, consumeBottomInset: !bottomDisabled, nextContextValue: leftDisabled.useMemo(() => ({ leftDisabled, rightDisabled, bottomDisabled }), items) };
  return obj;
};
