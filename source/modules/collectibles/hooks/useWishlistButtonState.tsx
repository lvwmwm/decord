// Module ID: 8694
// Function ID: 68864
// Name: useWishlistButtonState
// Dependencies: []
// Exports: useWishlistButtonState

// Module 8694 (useWishlistButtonState)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/collectibles/hooks/useWishlistButtonState.tsx");

export const useWishlistButtonState = function useWishlistButtonState(onRemoveSuccess) {
  let _location;
  let onAddSuccess;
  let skuId;
  ({ userId: closure_0, skuId } = onRemoveSuccess);
  const importDefault = skuId;
  ({ location: _location, onAddSuccess } = onRemoveSuccess);
  const dependencyMap = onAddSuccess;
  onRemoveSuccess = onRemoveSuccess.onRemoveSuccess;
  const callback = onRemoveSuccess;
  const onError = onRemoveSuccess.onError;
  const callback2 = onError;
  const skipAddAnnouncement = onRemoveSuccess.skipAddAnnouncement;
  const React = skipAddAnnouncement;
  let closure_6;
  let stateFromStores;
  let closure_8;
  let first1;
  let closure_10;
  let isSkuInWishlist;
  let obj = arg1(dependencyMap[5]);
  if (obj.isNullOrEmpty(_location)) {
    let items = [];
  } else {
    items = [_location];
  }
  const analyticsLocations = importDefault(dependencyMap[4])(items).analyticsLocations;
  closure_6 = analyticsLocations;
  const tmp2 = importDefault(dependencyMap[4]);
  const items1 = [closure_6];
  stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items1, () => analyticsLocations.getFirstWishlistId(closure_0));
  const obj2 = arg1(dependencyMap[6]);
  isSkuInWishlist = arg1(dependencyMap[7]).useIsSkuInWishlist(stateFromStores, skuId);
  const tmp5 = callback2(React.useState(null), 2);
  const first = tmp5[0];
  closure_8 = tmp5[1];
  const tmp7 = callback2(React.useState(false), 2);
  first1 = tmp7[0];
  closure_10 = tmp7[1];
  if (null !== first) {
    isSkuInWishlist = first;
  }
  const items2 = [skuId];
  const effect = React.useEffect(() => {
    callback(null);
    callback2(false);
  }, items2);
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [first1, isSkuInWishlist, stateFromStores, skuId, analyticsLocations, onAddSuccess, onRemoveSuccess, onError, skipAddAnnouncement];
  obj = { isWishlisted: isSkuInWishlist, isBusy: first1, handleToggle: React.useCallback(callback(tmp), items3) };
  return obj;
};
