// Module ID: 15219
// Function ID: 15220
// Name: EditWishlistActionSheet
// Dependencies: [32, 19, 17, 5142, 9618, 9619, 1385, 7912, 8895, 5397, 21, 5141, 575, 1652, 5378, 504, 1627, 7462, 7487, 15038, 15198, 15126, 9625, 8903, 11600, 1113, 5400, 7201, 7505, 14663, 8168, 5872, 2]
// Exports: default

// Module 15219 (EditWishlistActionSheet)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5397 */;
import Constants from "Constants" /* 8895 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8903 */;
import WishlistRecord from "WishlistRecord" /* 9619 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 9625 */;
import WishlistVisibility2 from "WishlistVisibility" /* 15198 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import WishlistStore from "WishlistStore" /* 9618 */;
import UserStore from "UserStore" /* 1385 */;
import UserProfileStore from "UserProfileStore" /* 7912 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let tmp5;
let tmp6;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const getWishlistProductLines = WishlistRecord.getWishlistProductLines;
let closure_12 = Constants.TrackUserProfileWishlistActions;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingContainer: obj3, toggleRow: obj4, itemsContainer: { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", gap: 16 }, itemWrapper: { position: "relative" }, deleteButton: rect };
obj2 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: nativeDefault.space.PX_48 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, zIndex: 1 };
let closure_16 = createStyles(obj);
const LinearTransition = _mod1652.LinearTransition;
const springifyResult = LinearTransition.springify();
const massResult = springifyResult.mass(0.8);
const dampingResult = massResult.damping(100);
let closure_17 = dampingResult.stiffness(300);
let items = [{ code: "(function exitingAnimation_EditWishlistActionSheetTsx1(_values){let[withTiming]=this.__closure;return{animations:{opacity:withTiming(0,{duration:150}),transform:[{scale:withTiming(0.8,{duration:150})}]},initialValues:{opacity:1,transform:[{scale:1}]}};})" }, timing_timing.withTiming];
let c0;
[tmp5, tmp6] = items;
function exitingAnimation() {
  let items;
  let items1;
  let obj2;
  let obj4;
  const obj = { animations: obj2, initialValues: obj4 };
  obj2 = { opacity: _undefined(0, { duration: 150 }), transform: items };
  items = [{ scale: _undefined(0.8, { duration: 150 }) }];
  obj4 = { opacity: 1, transform: items1 };
  items1 = [{ scale: 1 }];
  ({ scale: _undefined(0.8, { duration: 150 }) });
  return obj;
}
let items1 = [tmp6];
exitingAnimation.__closure = items1;
exitingAnimation.__workletHash = 599132794769;
exitingAnimation.__initData = tmp5;
let result = size.fileFinishedImporting("modules/user_profile/native/EditWishlistActionSheet.tsx");

export default function EditWishlistActionSheet(wishlistId) {
  let TableRowGroup;
  let TableSwitchRow;
  let c5;
  let closure_3;
  let closure_9;
  let intl;
  let intl2;
  let intl3;
  let itemWrapper;
  let items9;
  let obj10;
  let obj9;
  let rowWidth;
  let tmp16Result;
  let tmp7;
  let value;
  wishlistId = wishlistId.wishlistId;
  const analyticsContext = wishlistId.analyticsContext;
  let analyticsLocations1 = wishlistId.analyticsLocations;
  let analyticsLocations;
  c5 = undefined;
  let stateFromStores;
  let stateFromStores2;
  value = undefined;
  closure_9 = undefined;
  let closure_10;
  let tmp = closure_16();
  dependencyMap = tmp;
  let tmp2 = wishlistId;
  let obj = wishlistId(504);
  let items = [stateFromStores2];
  _slicedToArray = obj.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  const tmp4 = analyticsContext;
  const bottom = analyticsContext(1627)().bottom;
  let tmp5 = analyticsContext(7462);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = tmp5(analyticsLocations1, tmp4(7487).USER_PROFILE_EDIT_WISHLIST_ACTION_SHEET).analyticsLocations;
  let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c5, rowWidth } = tmp4(15038)(obj2));
  const tmp6 = tmp4(15038)(obj2);
  if (null != rowWidth) {
    let obj3 = { width: rowWidth };
    tmp7 = obj3;
  }
  const items1 = [value];
  const tmp2Result = tmp2(504);
  stateFromStores = tmp2Result.useStateFromStores(items1, () => WishlistStore.getWishlist(wishlistId));
  const items2 = [value];
  const tmp2Result3 = tmp2(504);
  const stateFromStores1 = tmp2Result3.useStateFromStores(items2, () => WishlistStore.isFetching(wishlistId));
  const items3 = [closure_10, UserProfileStore];
  const tmp2Result4 = tmp2(504);
  stateFromStores2 = tmp2Result4.useStateFromStores(items3, () => {
    const currentUser = UserStore.getCurrentUser();
    let wishlistSettings = null;
    if (null != currentUser) {
      wishlistSettings = UserProfileStore.getWishlistSettings(currentUser.id, wishlistId);
    }
    return wishlistSettings;
  });
  [value, closure_9] = analyticsLocations.useState(true);
  let visibility;
  const useEffect = analyticsLocations.useEffect;
  if (stateFromStores2 != null) {
    visibility = stateFromStores2.visibility;
  }
  const items4 = [visibility];
  const effect = useEffect(() => {
    let visibility;
    if (stateFromStores2 != null) {
      visibility = tmp.visibility;
    }
    if (null != visibility) {
      closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
    }
  }, items4);
  const items5 = [stateFromStores];
  const memo = obj7.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter((item) => {
        const obj = wishlistId(itemWrapper[21]);
        return obj.isEligibleWishlistItemOnMobile(item, { isWishlistOwner: true });
      });
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [wishlistId, value, stateFromStores, analyticsContext, analyticsLocations];
  const items7 = [wishlistId, analyticsLocations];
  const callback = obj7.useCallback(() => {
    let tmp9;
    const WishlistVisibility = WishlistVisibility2.WishlistVisibility;
    const tmp2 = first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC;
    closure_9(!first);
    const obj = WishlistActionCreatorsDefault;
    const result = obj.updateWishlistVisibility(wishlistId, tmp2);
    const obj2 = { analyticsLocations, wishlistId, action: first ? constants.WISHLIST_TOGGLE_PRIVATE : constants.WISHLIST_TOGGLE_PUBLIC, productLines: tmp9 };
    const trackUserProfileWishlistAction = UserProfileAnalyticsUtils.trackUserProfileWishlistAction;
    UserProfileAnalyticsUtils;
    const merged = Object.assign(analyticsContext);
    tmp9 = undefined;
    if (null != stateFromStores) {
      tmp9 = getWishlistProductLines(tmp8);
    }
    const result1 = trackUserProfileWishlistAction(obj2);
  }, items6);
  closure_10 = obj7.useCallback((skuId) => {
    const obj = WishlistActionCreatorsDefault;
    const result = obj.removeSkuFromWishlist(wishlistId, skuId, analyticsLocations);
  }, items7);
  let obj4 = { scrollable: true, startExpanded: true, title: intl.string(tmp2(1113).t["OEgx/4"]), children: null };
  const tmp4Result = tmp4(11600);
  intl = tmp2(1113).intl;
  let obj5 = { contentContainerStyle: { paddingBottom: bottom }, children: null };
  let obj6 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.toggleRow, children: closure_14(TableRowGroup, obj9) };
  const BottomSheetScrollView = tmp2(5400).BottomSheetScrollView;
  obj9 = { hasIcons: false, children: closure_14(TableSwitchRow, obj10) };
  TableRowGroup = tmp2(7201).TableRowGroup;
  obj10 = { label: intl2.string(tmp2(1113).t.b2nFyA), subLabel: intl3.string(tmp2(1113).t.dw58pE), value, onValueChange: callback };
  TableSwitchRow = tmp2(7505).TableSwitchRow;
  intl2 = tmp2(1113).intl;
  intl3 = tmp2(1113).intl;
  const items8 = [closure_14(stateFromStores, obj8), ];
  const tmp18 = closure_15;
  if (stateFromStores1) {
    if (null == stateFromStores) {
      let obj11 = { style: tmp.loadingContainer, children: closure_14(c5, {}) };
      tmp16Result = tmp16(tmp19, obj11);
    }
    items8[1] = tmp16Result;
    obj6.children = items8;
    obj5.children = tmp18(stateFromStores, obj6);
    obj4.children = closure_14(BottomSheetScrollView, obj5);
    return closure_14(tmp4Result, obj4);
  }
  tmp16Result = null;
  if (0 !== memo.length) {
    const obj12 = {
      style: items9,
      children: memo.map((sku) => {
          let IconButton;
          let TrashIcon;
          let combined;
          let items;
          let obj5;
          let obj6;
          let tmp7;
          let tmp8;
          let tmp = null;
          if (null != sku.sku) {
            const obj = { style: itemWrapper.itemWrapper, exiting: tmp7, layout: tmp8, children: items };
            tmp7 = undefined;
            const View = analyticsContext(itemWrapper[13]).View;
            const tmp2 = closure_1_15;
            const tmp5 = itemWrapper;
            if (!closure_3) {
              tmp7 = exitingAnimation;
            }
            tmp8 = undefined;
            if (!closure_3) {
              tmp8 = closure_1_17;
            }
            const obj3 = { sku: null, isOwned: null, size, accessibilityHidden: true };
            ({ sku: obj2.sku, isOwned: obj2.isOwned } = sku);
            items = [closure_1_14(analyticsContext(itemWrapper[29]), obj3), ];
            const obj4 = { style: tmp5.deleteButton, children: closure_1_14(IconButton, obj5) };
            obj5 = {
              variant: "primary-overlay",
              size: "sm",
              icon: closure_1_14(TrashIcon, obj6),
              onPress() {
                  return closure_10(sku.skuId);
                },
              accessibilityLabel: combined
            };
            IconButton = wishlistId(tmp4[30]).IconButton;
            obj6 = { size: "sm", color: analyticsContext(itemWrapper[12]).colors.ICON_FEEDBACK_CRITICAL };
            TrashIcon = wishlistId(tmp4[31]).TrashIcon;
            const isOwned = sku.isOwned;
            const intl = wishlistId(tmp4[25]).intl;
            const obj11 = { productName: sku.skuName };
            const formatToPlainStringResult = intl.formatToPlainString(wishlistId(itemWrapper[25]).t["IBBF8/"], obj11);
            const tmp11 = stateFromStores;
            if (isOwned) {
              const intl2 = tmp12(tmp4[25]).intl;
              const _HermesInternal = HermesInternal;
              combined = "" + formatToPlainStringResult + ", " + intl2.string(tmp12(tmp4[25]).t["6cfuDj"]);
            } else {
              combined = formatToPlainStringResult;
            }
            items[1] = closure_1_14(tmp11, obj4);
            tmp = tmp2(View, obj, sku.skuId);
          }
          return tmp;
        })
    };
    items9 = [tmp.itemsContainer, tmp7];
    tmp16Result = tmp16(tmp19, obj12);
  }
};
