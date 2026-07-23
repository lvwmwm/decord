// Module ID: 11285
// Function ID: 87810
// Name: AwaitAnimationContext
// Dependencies: [31, 33, 2]
// Exports: AwaitAnimationContext, useAwaitAnimationCompletion

// Module 11285 (AwaitAnimationContext)
import importAllResult from "result";
import { jsx } from "jsxProd";

let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx");

export const AwaitAnimationContext = function AwaitAnimationContext(children) {
  const handleQueuedCallback = children.handleQueuedCallback;
  const items = [handleQueuedCallback];
  return <redux.Provider value={handleQueuedCallback.useMemo(() => ({ handleQueuedCallback }), items)}>{arg0.children}</redux.Provider>;
};
export const useAwaitAnimationCompletion = function useAwaitAnimationCompletion() {
  const context = importAllResult.useContext(closure_2);
  return null == context ? ((arg0) => arg0()) : context.handleQueuedCallback;
};
