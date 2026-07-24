// Module ID: 8707
// Function ID: 68805
// Name: useCollectiblesAnalyticsContext
// Dependencies: [31, 33, 2]
// Exports: CollectiblesAnalyticsProvider

// Module 8707 (useCollectiblesAnalyticsContext)
import importAllResult from "result";
import { jsx } from "jsxProd";

function useCollectiblesAnalyticsContext() {
  return importAllResult.useContext(context);
}
const context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/collectibles/CollectiblesAnalyticsContext.tsx");

export const CollectiblesAnalyticsContext = context;
export { useCollectiblesAnalyticsContext };
export const CollectiblesAnalyticsProvider = function CollectiblesAnalyticsProvider(children) {
  const newValue = children.newValue;
  const tmp = useCollectiblesAnalyticsContext();
  const jsx = tmp;
  const items = [tmp, newValue];
  return <context.Provider value={newValue.useMemo(() => {
    const merged = Object.assign(closure_1);
    const merged1 = Object.assign(newValue);
    return {};
  }, items)}>{arg0.children}</context.Provider>;
};
