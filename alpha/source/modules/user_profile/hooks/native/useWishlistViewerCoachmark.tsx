// Module ID: 13382
// Function ID: 13383
// Name: useWishlistViewerCoachmark
// Dependencies: [32, 19, 2027, 7630, 2]
// Exports: useWishlistViewerCoachmark

// Module 13382 (useWishlistViewerCoachmark)
import dismissible_content from "dismissible_content" /* 2027 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx");

export const useWishlistViewerCoachmark = function useWishlistViewerCoachmark(isCurrentUser) {
  isCurrentUser = isCurrentUser.isCurrentUser;
  const shouldShowWishlistTab = isCurrentUser.shouldShowWishlistTab;
  let items = [isCurrentUser, shouldShowWishlistTab];
  const memo = noop.useMemo(() => {
    if (!isCurrentUser) {
      if (shouldShowWishlistTab) {
        let items = [dismissible_content.DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK];
      }
      return items;
    }
    items = [];
  }, items);
  const obj = isCurrentUser(shouldShowWishlistTab[3]);
  const tmp2 = _slicedToArray(isCurrentUser(shouldShowWishlistTab[3]).useSelectedDismissibleContent(memo), 2);
  [tmp3, tmp4] = tmp2;
  return { isVisible: tmp3 === isCurrentUser(shouldShowWishlistTab[2]).DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK, markAsDismissed: tmp4 };
};
