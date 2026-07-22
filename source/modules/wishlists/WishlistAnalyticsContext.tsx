// Module ID: 12018
// Function ID: 92875
// Name: useWishlistAnalyticsContext
// Dependencies: []
// Exports: WishlistAnalyticsProvider

// Module 12018 (useWishlistAnalyticsContext)
function useWishlistAnalyticsContext() {
  return importAllResult.useContext(context);
}
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const context = importAllResult.createContext(null);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/wishlists/WishlistAnalyticsContext.tsx");

export const WishlistAnalyticsContext = context;
export { useWishlistAnalyticsContext };
export const WishlistAnalyticsProvider = function WishlistAnalyticsProvider(children) {
  const merged = Object.assign(useWishlistAnalyticsContext());
  const merged1 = Object.assign(children.newValue);
  return <context.Provider value={{}}>{arg0.children}</context.Provider>;
};
