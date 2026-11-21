// Module ID: 9586
// Function ID: 9587
// Name: useWishlistApplicationIds
// Dependencies: [19, 1071, 2]
// Exports: useWishlistApplicationIds

// Module 9586 (useWishlistApplicationIds)
import Constants from "Constants" /* 1071 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_1 = Constants.COLLECTIBLES_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistApplicationIds.native.tsx");

export function useWishlistApplicationIds() {
  return react.useMemo(() => {
    const items = [closure_1_1];
    return items;
  }, []);
}
