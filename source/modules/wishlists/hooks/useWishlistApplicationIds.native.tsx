// Module ID: 9910
// Function ID: 9911
// Name: useWishlistApplicationIds
// Dependencies: [19, 676, 2]
// Exports: useWishlistApplicationIds

// Module 9910 (useWishlistApplicationIds)
import noop from "noop";
import { COLLECTIBLES_APPLICATION_ID as closure_1 } from "ME";

const result = require("set").fileFinishedImporting("modules/wishlists/hooks/useWishlistApplicationIds.native.tsx");

export const useWishlistApplicationIds = function useWishlistApplicationIds(userId) {
  return React.useMemo(() => {
    const items = [closure_1];
    return items;
  }, []);
};
