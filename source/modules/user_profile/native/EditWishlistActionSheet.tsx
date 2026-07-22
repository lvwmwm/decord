// Module ID: 12013
// Function ID: 92837
// Name: exitingAnimation
// Dependencies: []
// Exports: default

// Module 12013 (exitingAnimation)
import module_300 from "module_300";
import dampingResult from "module_100";

let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const getWishlistProductLines = arg1(dependencyMap[5]).getWishlistProductLines;
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[8]).TrackUserProfileWishlistActions;
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[9]).ACTION_SHEET_MAX_WIDTH;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { flex: 1, paddingHorizontal: importDefault(dependencyMap[12]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[10]);
obj.loadingContainer = { paddingTop: importDefault(dependencyMap[12]).space.PX_48 };
const obj1 = { paddingTop: importDefault(dependencyMap[12]).space.PX_48 };
obj.toggleRow = { marginBottom: importDefault(dependencyMap[12]).space.PX_16 };
obj.itemsContainer = {};
obj.itemWrapper = { position: "relative" };
const obj2 = { marginBottom: importDefault(dependencyMap[12]).space.PX_16 };
obj.deleteButton = { position: "absolute", top: importDefault(dependencyMap[12]).space.PX_8, right: importDefault(dependencyMap[12]).space.PX_8, zIndex: 1 };
let closure_16 = obj.createStyles(obj);
const LinearTransition = arg1(dependencyMap[13]).LinearTransition;
const obj3 = { position: "absolute", top: importDefault(dependencyMap[12]).space.PX_8, right: importDefault(dependencyMap[12]).space.PX_8, zIndex: 1 };
const springifyResult = LinearTransition.springify();
const massResult = LinearTransition.springify().mass(0.8);
let closure_18 = { code: "function exitingAnimation_EditWishlistActionSheetTsx1(_values){const{withTiming}=this.__closure;return{animations:{opacity:withTiming(0,{duration:150}),transform:[{scale:withTiming(0.8,{duration:150})}]},initialValues:{opacity:1,transform:[{scale:1}]}};}" };
let closure_19 = () => {
  function exitingAnimation() {
    let obj = {};
    obj = { opacity: callback(closure_2[14]).withTiming(0, { duration: 150 }) };
    obj = {};
    const obj3 = callback(closure_2[14]);
    obj.scale = callback(closure_2[14]).withTiming(0.8, { duration: 150 });
    const items = [obj];
    obj.transform = items;
    obj.animations = obj;
    const items1 = [{ scale: 1 }];
    obj.initialValues = { opacity: 1, transform: items1 };
    return obj;
  }
  exitingAnimation.__closure = { withTiming: arg1(dependencyMap[14]).withTiming };
  exitingAnimation.__workletHash = 17293915965800;
  exitingAnimation.__initData = closure_18;
  return exitingAnimation;
}();
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/user_profile/native/EditWishlistActionSheet.tsx");

export default function EditWishlistActionSheet(wishlistId) {
  let rowWidth;
  wishlistId = wishlistId.wishlistId;
  const arg1 = wishlistId;
  const analyticsContext = wishlistId.analyticsContext;
  const importDefault = analyticsContext;
  let analyticsLocations = wishlistId.analyticsLocations;
  let React;
  let closure_5;
  let stateFromStores;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  let closure_11;
  const tmp = callback3();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_7];
  let callback = obj.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  if (null == analyticsLocations) {
    analyticsLocations = [];
  }
  analyticsLocations = importDefault(dependencyMap[17])(analyticsLocations, importDefault(dependencyMap[18]).USER_PROFILE_EDIT_WISHLIST_ACTION_SHEET).analyticsLocations;
  React = analyticsLocations;
  obj = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  const tmp2 = importDefault(dependencyMap[17]);
  ({ cardWidth: closure_5, rowWidth } = importDefault(dependencyMap[19])(obj));
  if (null != rowWidth) {
    obj = { width: rowWidth };
    const tmp4 = obj;
  }
  let obj3 = arg1(dependencyMap[15]);
  const items1 = [closure_8];
  stateFromStores = obj3.useStateFromStores(items1, () => first.getWishlist(wishlistId));
  let obj4 = arg1(dependencyMap[15]);
  const items2 = [closure_8];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => first.isFetching(wishlistId));
  let obj5 = arg1(dependencyMap[15]);
  const items3 = [closure_10, closure_11];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => {
    const currentUser = isEligibleForSocialLayerStorefrontMobilePurchasing.getCurrentUser();
    let wishlistSettings = null;
    if (null != currentUser) {
      wishlistSettings = wishlistSettings.getWishlistSettings(currentUser.id, wishlistId);
    }
    return wishlistSettings;
  });
  closure_7 = stateFromStores2;
  const tmp9 = callback(React.useState(true), 2);
  const first = tmp9[0];
  closure_8 = first;
  closure_9 = tmp9[1];
  let visibility;
  if (null != stateFromStores2) {
    visibility = stateFromStores2.visibility;
  }
  const items4 = [visibility];
  const effect = React.useEffect(() => {
    let visibility;
    if (null != stateFromStores2) {
      visibility = stateFromStores2.visibility;
    }
    if (null != visibility) {
      callback(stateFromStores2.visibility === wishlistId(tmp[20]).WishlistVisibility.PUBLIC);
    }
  }, items4);
  let obj6 = arg1(dependencyMap[21]);
  const isEligibleForSocialLayerStorefrontMobilePurchasing = obj6.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "edit_wishlist_action_sheet" });
  closure_10 = isEligibleForSocialLayerStorefrontMobilePurchasing;
  const items5 = [stateFromStores, isEligibleForSocialLayerStorefrontMobilePurchasing];
  const memo = React.useMemo(() => {
    let found;
    if (null != stateFromStores) {
      const items = stateFromStores.items;
      found = items.filter((sku) => {
        let obj = callback(closure_2[22]);
        obj = { isWishlistOwner: true, isSocialLayerStorefrontMobilePurchasingEnabled: closure_10 };
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
  callback = React.useCallback(() => {
    const WishlistVisibility = wishlistId(tmp[20]).WishlistVisibility;
    const tmp = first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC;
    callback(!first);
    let obj = analyticsContext(tmp[23]);
    const result = obj.updateWishlistVisibility(wishlistId, tmp);
    obj = {};
    const merged = Object.assign(analyticsContext);
    obj["analyticsLocations"] = analyticsLocations;
    obj["wishlistId"] = wishlistId;
    obj["action"] = first ? closure_12.WISHLIST_TOGGLE_PRIVATE : closure_12.WISHLIST_TOGGLE_PUBLIC;
    let tmp6;
    if (null != stateFromStores) {
      tmp6 = callback(stateFromStores);
    }
    obj["productLines"] = tmp6;
    const result1 = wishlistId(tmp[24]).trackUserProfileWishlistAction(obj);
  }, items6);
  closure_11 = React.useCallback((arg0) => {
    const result = analyticsContext(tmp[23]).removeSkuFromWishlist(wishlistId, arg0, analyticsLocations);
  }, items7);
  const obj1 = { openDisableCommunication: null, freezeEnabled: null };
  const tmp3 = importDefault(dependencyMap[19])(obj);
  const intl = arg1(dependencyMap[26]).intl;
  obj1.title = intl.string(arg1(dependencyMap[26]).t.OEgx/4);
  const obj2 = { contentContainerStyle: { paddingBottom: importDefault(dependencyMap[16])().bottom } };
  obj3 = { style: tmp.container };
  obj4 = { style: tmp.toggleRow };
  obj5 = { hasIcons: false };
  obj6 = {};
  const intl2 = arg1(dependencyMap[26]).intl;
  obj6.label = intl2.string(arg1(dependencyMap[26]).t.b2nFyA);
  const intl3 = arg1(dependencyMap[26]).intl;
  obj6.subLabel = intl3.string(arg1(dependencyMap[26]).t.dw58pE);
  obj6.value = first;
  obj6.onValueChange = callback;
  obj5.children = callback2(arg1(dependencyMap[29]).TableSwitchRow, obj6);
  obj4.children = callback2(arg1(dependencyMap[28]).TableRowGroup, obj5);
  const items8 = [callback2(stateFromStores, obj4), ];
  if (stateFromStores1) {
    if (null == stateFromStores) {
      const obj7 = { style: tmp.loadingContainer, children: callback2(closure_5, {}) };
      let tmp19 = callback2(stateFromStores, obj7);
    }
    items8[1] = tmp19;
    obj3.children = items8;
    obj2.children = closure_15(stateFromStores, obj3);
    obj1.children = tmp15(arg1(dependencyMap[27]).BottomSheetScrollView, obj2);
    return tmp15(tmp16, obj1);
  }
  tmp19 = null;
  if (0 !== memo.length) {
    const obj8 = {};
    const items9 = [tmp.itemsContainer, tmp4];
    obj8.style = items9;
    obj8.children = memo.map((sku) => {
      let skuId = sku;
      const wishlistId = sku;
      if (null == sku.sku) {
        return null;
      } else {
        let obj = { style: closure_15.itemWrapper };
        let tmp7;
        if (!closure_3) {
          tmp7 = closure_19;
        }
        obj.exiting = tmp7;
        let tmp9;
        if (!closure_3) {
          tmp9 = module_300;
        }
        obj.layout = tmp9;
        obj = {};
        ({ sku: obj2.sku, isOwned: obj2.isOwned } = skuId);
        obj.size = closure_5;
        obj.accessibilityHidden = true;
        const items = [callback2(analyticsContext(closure_15[31]), obj), ];
        obj = { style: closure_15.deleteButton };
        let obj1 = {};
        const obj2 = { size: "sm", color: analyticsContext(closure_15[12]).colors.ICON_FEEDBACK_CRITICAL };
        obj1.icon = callback2(wishlistId(closure_15[33]).TrashIcon, obj2);
        obj1.onPress = function onPress() {
          return callback(arg0.skuId);
        };
        let stringResult = wishlistId;
        let str2 = 26;
        const intl = wishlistId(tmp[26]).intl;
        const obj3 = { productName: skuId.skuName };
        const formatToPlainStringResult = intl.formatToPlainString(wishlistId(closure_15[26]).t.IBBF8/, obj3);
        if (skuId.isOwned) {
          const intl2 = stringResult(tmp18[str2]).intl;
          stringResult = intl2.string(stringResult(tmp18[str2]).t.6cfuDj);
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
        closure_15(analyticsContext(closure_15[30]), obj, skuId);
        const tmp14 = stateFromStores;
        const tmp4 = analyticsContext(closure_15[30]);
      }
    });
    tmp19 = callback2(stateFromStores, obj8);
  }
};
