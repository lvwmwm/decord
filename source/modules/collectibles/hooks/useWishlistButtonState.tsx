// Module ID: 8702
// Function ID: 68916
// Name: useWishlistButtonState
// Dependencies: [5, 57, 31, 6856, 5464, 1832, 566, 8676, 8683, 3976, 1212, 2]
// Exports: useWishlistButtonState

// Module 8702 (useWishlistButtonState)
import isNullOrEmpty from "isNullOrEmpty";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/collectibles/hooks/useWishlistButtonState.tsx");

export const useWishlistButtonState = function useWishlistButtonState(onRemoveSuccess) {
  let _location;
  let onAddSuccess;
  let require;
  let skuId;
  ({ userId: require, skuId } = onRemoveSuccess);
  ({ location: _location, onAddSuccess } = onRemoveSuccess);
  onRemoveSuccess = onRemoveSuccess.onRemoveSuccess;
  const onError = onRemoveSuccess.onError;
  const skipAddAnnouncement = onRemoveSuccess.skipAddAnnouncement;
  let analyticsLocations;
  let stateFromStores;
  let closure_8;
  let first1;
  let closure_10;
  let isSkuInWishlist;
  let obj = require(onAddSuccess[5]);
  if (obj.isNullOrEmpty(_location)) {
    let items = [];
  } else {
    items = [_location];
  }
  analyticsLocations = skuId(onAddSuccess[4])(items).analyticsLocations;
  const tmp2 = skuId(onAddSuccess[4]);
  const items1 = [analyticsLocations];
  stateFromStores = require(onAddSuccess[6]).useStateFromStores(items1, () => analyticsLocations.getFirstWishlistId(closure_0));
  const obj2 = require(onAddSuccess[6]);
  isSkuInWishlist = require(onAddSuccess[7]).useIsSkuInWishlist(stateFromStores, skuId);
  const tmp5 = onError(skipAddAnnouncement.useState(null), 2);
  const first = tmp5[0];
  closure_8 = tmp5[1];
  const tmp7 = onError(skipAddAnnouncement.useState(false), 2);
  first1 = tmp7[0];
  closure_10 = tmp7[1];
  if (null !== first) {
    isSkuInWishlist = first;
  }
  const items2 = [skuId];
  const effect = skipAddAnnouncement.useEffect(() => {
    callback(null);
    callback2(false);
  }, items2);
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [first1, isSkuInWishlist, stateFromStores, skuId, analyticsLocations, onAddSuccess, onRemoveSuccess, onError, skipAddAnnouncement];
  obj = { isWishlisted: isSkuInWishlist, isBusy: first1, handleToggle: skipAddAnnouncement.useCallback(onRemoveSuccess(tmp), items3) };
  return obj;
};
