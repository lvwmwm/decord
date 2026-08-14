// Module ID: 12575
// Function ID: 12576
// Name: context
// Dependencies: [19, 21, 2]
// Exports: WishlistAnalyticsProvider, useWishlistAnalyticsContext

// Module 12575 (context)
import importAllResult from "noop";
import { jsx } from "jsxProd";

let c0 = importAllResult;
const context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/wishlists/WishlistAnalyticsContext.tsx");

export const WishlistAnalyticsContext = context;
export const useWishlistAnalyticsContext = function useWishlistAnalyticsContext() {
  return importAllResult.useContext(context);
};
export const WishlistAnalyticsProvider = function WishlistAnalyticsProvider(children) {
  const merged = Object.assign(importAllResult.useContext(context));
  const merged1 = Object.assign(children.newValue);
  return <context.Provider value={{}}>{arg0.children}</context.Provider>;
};
