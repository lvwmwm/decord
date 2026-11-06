// Module ID: 9561
// Function ID: 9562
// Name: CollectiblesAnalyticsContext
// Dependencies: [19, 21, 9562, 2]
// Exports: CollectiblesAnalyticsProvider, useCollectiblesAnalyticsContext

// Module 9561 (CollectiblesAnalyticsContext)
import Fragment from "Fragment" /* 21 */;
import useShallowObjectMemoDefault from "useShallowObjectMemo" /* 9562 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let context = react.createContext(null);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesAnalyticsContext.tsx");

export const CollectiblesAnalyticsContext = context;
export function useCollectiblesAnalyticsContext() {
  return react.useContext(context);
}
export function CollectiblesAnalyticsProvider(arg0) {
  let children;
  let newValue;
  context = undefined;
  ({ newValue, children } = arg0);
  context = react.useContext(context);
  const tmp2 = useShallowObjectMemoDefault(newValue);
  let closure_1 = tmp2;
  const items = [context, tmp2];
  return <context.Provider value={react.useMemo(() => {
    const obj = {};
    const merged = Object.assign(context);
    const merged1 = Object.assign(closure_1);
    return obj;
  }, items)}>{children}</context.Provider>;
}
