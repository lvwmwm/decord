// Module ID: 14984
// Function ID: 14985
// Name: useWishlistViewerCoachmark
// Dependencies: [32, 19, 4847, 7569, 2]
// Exports: useWishlistViewerCoachmark

// Module 14984 (useWishlistViewerCoachmark)
import dismissible_content from "dismissible_content" /* 4847 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx");

export function useWishlistViewerCoachmark(isCurrentUser) {
  let tmp3;
  let tmp4;
  isCurrentUser = isCurrentUser.isCurrentUser;
  const shouldShowWishlistTab = isCurrentUser.shouldShowWishlistTab;
  let items = [isCurrentUser, shouldShowWishlistTab];
  const memo = react.useMemo(() => {
    const tmp = isCurrentUser;
    if (!tmp) {
      let items;
      const tmp2 = shouldShowWishlistTab;
      if (tmp2) {
        items = [dismissible_content.DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK];
      }
      return items;
    }
    items = [];
  }, items);
  const obj = isCurrentUser(shouldShowWishlistTab[3]);
  let tmp2 = _slicedToArray(obj.useSelectedDismissibleContent(memo), 2);
  const obj2 = { isVisible: tmp3 === isCurrentUser(shouldShowWishlistTab[2]).DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK, markAsDismissed: tmp4 };
  [tmp3, tmp4] = tmp2;
  return obj2;
}
