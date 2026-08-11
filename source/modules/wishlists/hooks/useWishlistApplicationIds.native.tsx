// Module ID: 10091
// Function ID: 10092
// Name: useWishlistApplicationIds
// Dependencies: [19, 676, 2]
// Exports: useWishlistApplicationIds

// Module 10091 (useWishlistApplicationIds)
import noop from "noop";
import { COLLECTIBLES_APPLICATION_ID as closure_1 } from "ME";

const result = require("set").fileFinishedImporting("modules/wishlists/hooks/useWishlistApplicationIds.native.tsx");

export const useWishlistApplicationIds = function useWishlistApplicationIds(userId) {
  return React.useMemo(() => {
    const items = [closure_1];
    return items;
  }, []);
};
