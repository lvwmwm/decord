// Module ID: 10259
// Function ID: 10260
// Name: useWishlistApplicationIds
// Dependencies: [19, 1074, 2]
// Exports: useWishlistApplicationIds

// Module 10259 (useWishlistApplicationIds)
import Constants from "Constants" /* 1074 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_1 = Constants.COLLECTIBLES_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistApplicationIds.native.tsx");

export const useWishlistApplicationIds = function useWishlistApplicationIds() {
  return react.useMemo(() => {
    const items = [closure_1_1];
    return items;
  }, []);
};
