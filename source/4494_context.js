// Module ID: 4494
// Function ID: 39661
// Name: context
// Dependencies: [31]
// Exports: useEdgeInsetApplication

// Module 4494 (context)
import importAllResult from "result";

let context = importAllResult.createContext({ leftDisabled: false, rightDisabled: false, bottomDisabled: false });

export const EdgeInsetApplicationContext = context;
export const useEdgeInsetApplication = function useEdgeInsetApplication(arg0, context, arg2) {
  let bottomDisabled;
  let leftDisabled;
  let rightDisabled;
  context = leftDisabled.useContext(rightDisabled);
  ({ leftDisabled, rightDisabled, bottomDisabled } = context);
  if (!leftDisabled) {
    leftDisabled = arg0;
  }
  if (!rightDisabled) {
    rightDisabled = context;
  }
  if (!bottomDisabled) {
    bottomDisabled = arg2;
  }
  const items = [leftDisabled, rightDisabled, bottomDisabled];
  const obj = { consumeLeftInset: !leftDisabled, consumeRightInset: !rightDisabled, consumeBottomInset: !bottomDisabled, nextContextValue: leftDisabled.useMemo(() => ({ leftDisabled, rightDisabled, bottomDisabled }), items) };
  return obj;
};
