// Module ID: 12684
// Function ID: 12685
// Name: WishlistAnalyticsContext
// Dependencies: [19, 21, 2]
// Exports: WishlistAnalyticsProvider, useWishlistAnalyticsContext

// Module 12684 (WishlistAnalyticsContext)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const context = react.createContext(null);
const result = size.fileFinishedImporting("modules/wishlists/WishlistAnalyticsContext.tsx");

export const WishlistAnalyticsContext = context;
export const useWishlistAnalyticsContext = function useWishlistAnalyticsContext() {
  return react.useContext(context);
};
export const WishlistAnalyticsProvider = function WishlistAnalyticsProvider(newValue) {
  newValue = newValue.newValue;
  const children = newValue.children;
  const obj = {};
  const merged = Object.assign(react.useContext(context));
  const merged1 = Object.assign(newValue);
  return <context.Provider value={obj}>{children}</context.Provider>;
};
