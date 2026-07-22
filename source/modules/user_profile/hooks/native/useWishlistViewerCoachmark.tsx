// Module ID: 11993
// Function ID: 92685
// Name: useWishlistViewerCoachmark
// Dependencies: []
// Exports: useWishlistViewerCoachmark

// Module 11993 (useWishlistViewerCoachmark)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx");

export const useWishlistViewerCoachmark = function useWishlistViewerCoachmark(isCurrentUser) {
  let tmp3;
  let tmp4;
  isCurrentUser = isCurrentUser.isCurrentUser;
  const arg1 = isCurrentUser;
  const shouldShowWishlistTab = isCurrentUser.shouldShowWishlistTab;
  const dependencyMap = shouldShowWishlistTab;
  const items = [isCurrentUser, shouldShowWishlistTab];
  const memo = React.useMemo(() => {
    if (!isCurrentUser) {
      if (shouldShowWishlistTab) {
        let items = [isCurrentUser(shouldShowWishlistTab[2]).DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK];
      }
      return items;
    }
    items = [];
  }, items);
  let obj = arg1(dependencyMap[3]);
  obj = { isVisible: tmp3 === arg1(dependencyMap[2]).DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK, markAsDismissed: tmp4 };
  [tmp3, tmp4] = callback(obj.useSelectedDismissibleContent(memo), 2);
  return obj;
};
