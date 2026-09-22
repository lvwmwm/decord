// Module ID: 8893
// Function ID: 8894
// Name: CollectiblesAnalyticsContext
// Dependencies: [19, 21, 2]
// Exports: CollectiblesAnalyticsProvider, useCollectiblesAnalyticsContext

// Module 8893 (CollectiblesAnalyticsContext)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
let context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesAnalyticsContext.tsx");

export const CollectiblesAnalyticsContext = context;
export const useCollectiblesAnalyticsContext = function useCollectiblesAnalyticsContext() {
  return noop.useContext(context);
};
export const CollectiblesAnalyticsProvider = function CollectiblesAnalyticsProvider(children) {
  const newValue = children.newValue;
  context = undefined;
  context = noop.useContext(context);
  const items = [context, newValue];
  return <context.Provider value={noop.useMemo(() => {
    const merged = Object.assign(context);
    const merged1 = Object.assign(newValue);
    return {};
  }, items)}>{arg0.children}</context.Provider>;
};
