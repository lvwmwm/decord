// Module ID: 12159
// Function ID: 95266
// Name: useWishlistAnalyticsContext
// Dependencies: [31, 33, 2]
// Exports: WishlistAnalyticsProvider

// Module 12159 (useWishlistAnalyticsContext)
import importAllResult from "result";
import { jsx } from "jsxProd";

function useWishlistAnalyticsContext() {
  return importAllResult.useContext(context);
}
const context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/wishlists/WishlistAnalyticsContext.tsx");

export const WishlistAnalyticsContext = context;
export { useWishlistAnalyticsContext };
export const WishlistAnalyticsProvider = function WishlistAnalyticsProvider(children) {
  const merged = Object.assign(useWishlistAnalyticsContext());
  const merged1 = Object.assign(children.newValue);
  return <context.Provider value={{}}>{arg0.children}</context.Provider>;
};
