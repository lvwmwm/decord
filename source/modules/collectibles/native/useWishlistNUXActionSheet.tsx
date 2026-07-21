// Module ID: 8662
// Function ID: 68537
// Name: useHasNeverWishlisted
// Dependencies: []
// Exports: default

// Module 8662 (useHasNeverWishlisted)
function useHasNeverWishlisted() {
  const items = [closure_5];
  const callback = callback(dependencyMap[4]).useStateFromStores(items, () => id.getId());
  const obj = callback(dependencyMap[4]);
  const items1 = [closure_4];
  const stateFromStores = callback(dependencyMap[4]).useStateFromStores(items1, () => authStore.getFirstWishlistId(closure_0));
  const obj2 = callback(dependencyMap[4]);
  const items2 = [closure_4];
  let stateFromStores1 = callback(dependencyMap[4]).useStateFromStores(items2, () => {
    const userProfile = authStore.getUserProfile(closure_0);
    let tmp2 = null != userProfile;
    if (tmp2) {
      tmp2 = userProfile.fetchEndedAt > 0;
    }
    return tmp2;
  });
  if (stateFromStores1) {
    stateFromStores1 = null == stateFromStores;
  }
  return stateFromStores1;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/collectibles/native/useWishlistNUXActionSheet.tsx");

export default function useWishlistNUXActionSheet() {
  let tmp = useHasNeverWishlisted();
  let obj = arg1(dependencyMap[5]);
  obj = {};
  if (tmp) {
    tmp = !obj.useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
  }
  obj.shouldShowWishlistNUXActionSheet = tmp;
  obj.showWishlistNUXActionSheet = React.useCallback((product) => {
    let obj = callback(paths[7]);
    const result = obj.trackDismissibleContentShown(callback(paths[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
    obj = { product };
    callback2(paths[8]).openLazy(callback(paths[10])(paths[9], paths.paths), "WishlistNUXAddedItemActionSheet", obj, "stack");
    const obj2 = callback2(paths[8]);
    obj = { dismissAction: constants.USER_DISMISS, forceTrack: true };
    const result1 = callback(paths[5]).UNSAFE_markDismissibleContentAsDismissed(callback(paths[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET, obj);
  }, []);
  return obj;
};
export { useHasNeverWishlisted };
