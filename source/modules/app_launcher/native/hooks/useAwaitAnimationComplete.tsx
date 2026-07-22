// Module ID: 11275
// Function ID: 87760
// Name: AwaitAnimationContext
// Dependencies: []
// Exports: AwaitAnimationContext, useAwaitAnimationCompletion

// Module 11275 (AwaitAnimationContext)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const context = importAllResult.createContext(null);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx");

export const AwaitAnimationContext = function AwaitAnimationContext(children) {
  const items = [children.handleQueuedCallback];
  return <redux.Provider value={arg0.handleQueuedCallback.useMemo(() => ({ handleQueuedCallback }), items)}>{arg0.children}</redux.Provider>;
};
export const useAwaitAnimationCompletion = function useAwaitAnimationCompletion() {
  const context = importAllResult.useContext(closure_2);
  return null == context ? (arg0) => arg0() : context.handleQueuedCallback;
};
