// Module ID: 12316
// Function ID: 12317
// Name: useAwaitAnimationComplete
// Dependencies: [19, 21, 2]
// Exports: AwaitAnimationContext, useAwaitAnimationCompletion

// Module 12316 (useAwaitAnimationComplete)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const redux = react.createContext(null);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx");

export function AwaitAnimationContext(children) {
  const handleQueuedCallback = children.handleQueuedCallback;
  const items = [handleQueuedCallback];
  return <redux.Provider value={react.useMemo(() => ({ handleQueuedCallback }), items)}>{arg0.children}</redux.Provider>;
}
export function useAwaitAnimationCompletion() {
  let fn;
  const context = react.useContext(redux);
  if (null == context) {
    fn = (fn) => fn();
  } else {
    fn = context.handleQueuedCallback;
  }
  return fn;
}
