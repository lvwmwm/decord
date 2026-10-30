// Module ID: 14966
// Function ID: 14967
// Name: WishlistAnalyticsContext
// Dependencies: [19, 21, 2]
// Exports: WishlistAnalyticsProvider, useWishlistAnalyticsContext

// Module 14966 (WishlistAnalyticsContext)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let context = react.createContext(null);
const result = size.fileFinishedImporting("modules/wishlists/WishlistAnalyticsContext.tsx");

export const WishlistAnalyticsContext = context;
export function useWishlistAnalyticsContext() {
  return react.useContext(context);
}
export function WishlistAnalyticsProvider(newValue) {
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
