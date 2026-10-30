// Module ID: 9440
// Function ID: 9441
// Name: CollectiblesAnalyticsContext
// Dependencies: [19, 21, 2]
// Exports: CollectiblesAnalyticsProvider, useCollectiblesAnalyticsContext

// Module 9440 (CollectiblesAnalyticsContext)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let context = react.createContext(null);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesAnalyticsContext.tsx");

export const CollectiblesAnalyticsContext = context;
export function useCollectiblesAnalyticsContext() {
  return react.useContext(context);
}
export function CollectiblesAnalyticsProvider(newValue) {
  newValue = newValue.newValue;
  context = undefined;
  const children = newValue.children;
  context = react.useContext(context);
  const items = [context, newValue];
  return <context.Provider value={react.useMemo(() => {
    const obj = {};
    const merged = Object.assign(context);
    const merged1 = Object.assign(newValue);
    return obj;
  }, items)}>{children}</context.Provider>;
}
