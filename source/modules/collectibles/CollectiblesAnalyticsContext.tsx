// Module ID: 8658
// Function ID: 68533
// Name: useCollectiblesAnalyticsContext
// Dependencies: []
// Exports: CollectiblesAnalyticsProvider

// Module 8658 (useCollectiblesAnalyticsContext)
function useCollectiblesAnalyticsContext() {
  return importAllResult.useContext(context);
}
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const context = importAllResult.createContext(null);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/collectibles/CollectiblesAnalyticsContext.tsx");

export const CollectiblesAnalyticsContext = context;
export { useCollectiblesAnalyticsContext };
export const CollectiblesAnalyticsProvider = function CollectiblesAnalyticsProvider(children) {
  const newValue = children.newValue;
  const tmp = useCollectiblesAnalyticsContext();
  const jsx = tmp;
  const items = [tmp, newValue];
  return <context.Provider value={newValue.useMemo(() => {
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(newValue);
    return {};
  }, items)}>{arg0.children}</context.Provider>;
};
