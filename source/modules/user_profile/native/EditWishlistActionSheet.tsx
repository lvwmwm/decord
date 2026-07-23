// Module ID: 12127
// Function ID: 94988
// Name: exitingAnimation
// Dependencies: [57, 31, 27, 4122, 8677, 8678, 1849, 6856, 8264, 5188, 33, 4130, 689, 3991, 4131, 566, 1557, 5464, 5484, 11995, 12124, 7791, 12106, 8683, 8267, 11637, 1212, 5189, 5503, 5504, 7589, 9751, 7771, 4089, 2]
// Exports: default

// Module 12127 (exitingAnimation)
import _slicedToArray from "_slicedToArray";
import WishlistItemCard from "WishlistItemCard";
import get_ActivityIndicator from "BottomSheetModal";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { getWishlistProductLines } from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { TrackUserProfileWishlistActions as closure_12 } from "USER_PROFILE_TOOLTIP_DELAY";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "TrashIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { LinearTransition } from "module_3991";
import module_300 from "module_300";
import dampingResult from "module_100";

let closure_14;
let closure_15;
let closure_5;
let closure_6;
const require = arg1;
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_48 };
_createForOfIteratorHelperLoose.loadingContainer = obj1;
_createForOfIteratorHelperLoose.toggleRow = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.itemsContainer = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", gap: 16 };
_createForOfIteratorHelperLoose.itemWrapper = { position: "relative" };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.deleteButton = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8, zIndex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8, zIndex: 1 };
const springifyResult = LinearTransition.springify();
const massResult = LinearTransition.springify().mass(0.8);
let closure_18 = { code: "function exitingAnimation_EditWishlistActionSheetTsx1(_values){const{withTiming}=this.__closure;return{animations:{opacity:withTiming(0,{duration:150}),transform:[{scale:withTiming(0.8,{duration:150})}]},initialValues:{opacity:1,transform:[{scale:1}]}};}" };
let closure_19 = (() => {
  function exitingAnimation() {
    let obj = {};
    obj = { opacity: outer1_0(outer1_2[14]).withTiming(0, { duration: 150 }) };
    obj = {};
    const obj3 = outer1_0(outer1_2[14]);
    obj.scale = outer1_0(outer1_2[14]).withTiming(0.8, { duration: 150 });
    const items = [obj];
    obj.transform = items;
    obj.animations = obj;
    const items1 = [{ scale: 1 }];
    obj.initialValues = { opacity: 1, transform: items1 };
    return obj;
  }
  exitingAnimation.__closure = { withTiming: require(4131) /* withTiming */.withTiming };
  exitingAnimation.__workletHash = 17293915965800;
  exitingAnimation.__initData = closure_18;
  return exitingAnimation;
})();
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/EditWishlistActionSheet.tsx");

export default function EditWishlistActionSheet(wishlistId) {
  let c5;
  let rowWidth;
  wishlistId = wishlistId.wishlistId;
  const analyticsContext = wishlistId.analyticsContext;
  let analyticsLocations = wishlistId.analyticsLocations;
  analyticsLocations = undefined;
  c5 = undefined;
  let stateFromStores;
  let stateFromStores2;
  let first;
  let closure_9;
  let isEligibleForSocialLayerStorefrontMobilePurchasing;
  let closure_11;
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = wishlistId(566);
  let items = [stateFromStores2];
  let callback = obj.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  if (null == analyticsLocations) {
    analyticsLocations = [];
  }
  analyticsLocations = analyticsContext(5464)(analyticsLocations, analyticsContext(5484).USER_PROFILE_EDIT_WISHLIST_ACTION_SHEET).analyticsLocations;
  obj = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  const tmp2 = analyticsContext(5464);
  ({ cardWidth: c5, rowWidth } = analyticsContext(11995)(obj));
  if (null != rowWidth) {
    obj = { width: rowWidth };
    let tmp4 = obj;
  }
  let obj3 = wishlistId(566);
  const items1 = [first];
  stateFromStores = obj3.useStateFromStores(items1, () => first.getWishlist(wishlistId));
  let obj4 = wishlistId(566);
  const items2 = [first];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => first.isFetching(wishlistId));
  let obj5 = wishlistId(566);
  const items3 = [isEligibleForSocialLayerStorefrontMobilePurchasing, closure_11];
  stateFromStores2 = obj5.useStateFromStores(items3, () => {
    const currentUser = isEligibleForSocialLayerStorefrontMobilePurchasing.getCurrentUser();
    let wishlistSettings = null;
    if (null != currentUser) {
      wishlistSettings = wishlistSettings.getWishlistSettings(currentUser.id, wishlistId);
    }
    return wishlistSettings;
  });
  let tmp9 = callback(analyticsLocations.useState(true), 2);
  first = tmp9[0];
  closure_9 = tmp9[1];
  let visibility;
  if (null != stateFromStores2) {
    visibility = stateFromStores2.visibility;
  }
  const items4 = [visibility];
  const effect = analyticsLocations.useEffect(() => {
    let visibility;
    if (null != stateFromStores2) {
      visibility = stateFromStores2.visibility;
    }
    if (null != visibility) {
      callback(stateFromStores2.visibility === wishlistId(tmp[20]).WishlistVisibility.PUBLIC);
    }
  }, items4);
  let obj6 = wishlistId(7791);
  isEligibleForSocialLayerStorefrontMobilePurchasing = obj6.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "edit_wishlist_action_sheet" });
  const items5 = [stateFromStores, isEligibleForSocialLayerStorefrontMobilePurchasing];
  const memo = analyticsLocations.useMemo(() => {
    let found;
    if (null != stateFromStores) {
      const items = stateFromStores.items;
      found = items.filter((sku) => {
        let obj = wishlistId(table[22]);
        obj = { isWishlistOwner: true, isSocialLayerStorefrontMobilePurchasingEnabled: outer1_10 };
        return obj.isEligibleWishlistItemOnMobile(sku, obj);
      });
    }
    if (null == found) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [wishlistId, first, stateFromStores, analyticsContext, analyticsLocations];
  const items7 = [wishlistId, analyticsLocations];
  callback = analyticsLocations.useCallback(() => {
    const WishlistVisibility = wishlistId(tmp[20]).WishlistVisibility;
    tmp = first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC;
    callback(!first);
    let obj = analyticsContext(tmp[23]);
    const result = obj.updateWishlistVisibility(wishlistId, tmp);
    obj = {};
    const merged = Object.assign(analyticsContext);
    obj["analyticsLocations"] = analyticsLocations;
    obj["wishlistId"] = wishlistId;
    obj["action"] = first ? outer1_12.WISHLIST_TOGGLE_PRIVATE : outer1_12.WISHLIST_TOGGLE_PUBLIC;
    let tmp6;
    if (null != stateFromStores) {
      tmp6 = callback(stateFromStores);
    }
    obj["productLines"] = tmp6;
    const result1 = wishlistId(tmp[24]).trackUserProfileWishlistAction(obj);
  }, items6);
  closure_11 = analyticsLocations.useCallback((arg0) => {
    const result = analyticsContext(tmp[23]).removeSkuFromWishlist(wishlistId, arg0, analyticsLocations);
  }, items7);
  let obj1 = { scrollable: true, startExpanded: true };
  const tmp3 = analyticsContext(11995)(obj);
  let intl = wishlistId(1212).intl;
  obj1.title = intl.string(wishlistId(1212).t["OEgx/4"]);
  let obj2 = { contentContainerStyle: { paddingBottom: analyticsContext(1557)().bottom } };
  obj3 = { style: tmp.container };
  obj4 = { style: tmp.toggleRow };
  obj5 = { hasIcons: false };
  obj6 = {};
  let intl2 = wishlistId(1212).intl;
  obj6.label = intl2.string(wishlistId(1212).t.b2nFyA);
  const intl3 = wishlistId(1212).intl;
  obj6.subLabel = intl3.string(wishlistId(1212).t.dw58pE);
  obj6.value = first;
  obj6.onValueChange = callback;
  obj5.children = callback2(wishlistId(5504).TableSwitchRow, obj6);
  obj4.children = callback2(wishlistId(5503).TableRowGroup, obj5);
  const items8 = [callback2(stateFromStores, obj4), ];
  if (stateFromStores1) {
    if (null == stateFromStores) {
      const obj7 = { style: tmp.loadingContainer, children: callback2(c5, {}) };
      let tmp19 = callback2(stateFromStores, obj7);
    }
    items8[1] = tmp19;
    obj3.children = items8;
    obj2.children = closure_15(stateFromStores, obj3);
    obj1.children = tmp15(wishlistId(5189).BottomSheetScrollView, obj2);
    return tmp15(tmp16, obj1);
  }
  tmp19 = null;
  if (0 !== memo.length) {
    const obj8 = {};
    const items9 = [tmp.itemsContainer, tmp4];
    obj8.style = items9;
    obj8.children = memo.map((sku) => {
      let skuId = sku;
      let closure_0 = sku;
      if (null == sku.sku) {
        return null;
      } else {
        let obj = { style: outer1_15.itemWrapper };
        let tmp7;
        if (!_slicedToArray) {
          tmp7 = outer1_19;
        }
        obj.exiting = tmp7;
        let tmp9;
        if (!_slicedToArray) {
          tmp9 = outer1_17;
        }
        obj.layout = tmp9;
        obj = {};
        ({ sku: obj2.sku, isOwned: obj2.isOwned } = skuId);
        obj.size = c5;
        obj.accessibilityHidden = true;
        const items = [outer1_14(analyticsContext(outer1_15[31]), obj), ];
        obj = { style: outer1_15.deleteButton };
        let obj1 = { variant: "primary-overlay", size: "sm" };
        const obj2 = { size: "sm", color: analyticsContext(outer1_15[12]).colors.ICON_FEEDBACK_CRITICAL };
        obj1.icon = outer1_14(wishlistId(outer1_15[33]).TrashIcon, obj2);
        obj1.onPress = function onPress() {
          return outer1_11(sku.skuId);
        };
        let stringResult = wishlistId;
        let str2 = 26;
        const intl = wishlistId(tmp[26]).intl;
        const obj3 = { productName: skuId.skuName };
        const formatToPlainStringResult = intl.formatToPlainString(wishlistId(outer1_15[26]).t["IBBF8/"], obj3);
        if (skuId.isOwned) {
          const intl2 = stringResult(tmp18[str2]).intl;
          stringResult = intl2.string(stringResult(tmp18[str2]).t["6cfuDj"]);
          const _HermesInternal = HermesInternal;
          str2 = ", ";
          let combined = "" + formatToPlainStringResult + ", " + stringResult;
        } else {
          combined = formatToPlainStringResult;
        }
        obj1.accessibilityLabel = combined;
        obj1 = tmp10(wishlistId(tmp[32]).IconButton, obj1);
        obj.children = obj1;
        obj = tmp10(stateFromStores, obj);
        items[1] = obj;
        obj.children = items;
        skuId = skuId.skuId;
        outer1_15(analyticsContext(outer1_15[30]), obj, skuId);
        const tmp14 = stateFromStores;
        const tmp4 = analyticsContext(outer1_15[30]);
      }
    });
    tmp19 = callback2(stateFromStores, obj8);
  }
};
