// Module ID: 7955
// Function ID: 62998
// Name: EditCollectibleListItem
// Dependencies: [31, 27, 1849, 655, 33, 4130, 689, 4660, 4099, 4100, 1273, 7956, 4126, 1212, 5462, 6773, 4098, 7957, 7958, 566, 3776, 7946, 6786, 2]
// Exports: EditCollectiblesListItemNone, EditCollectiblesListItemProduct, EditCollectiblesListItemShop

// Module 7955 (EditCollectibleListItem)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
class EditCollectibleListItem {
  constructor(arg0) {
    ({ size, isSelected, onPress, accessibilityRole } = global);
    ({ children, style, onLongPress, accessibilityLabel } = global);
    if (accessibilityRole === undefined) {
      accessibilityRole = "button";
    }
    tmp = c9();
    tmp2 = jsx;
    obj = {
      style: tmp.pressable,
      disabled: isSelected,
      onPress() {
            const result = outer1_0(outer1_2[8]).triggerHapticFeedback(outer1_1(outer1_2[9]).IMPACT_LIGHT);
            callback();
          },
      onLongPress
    };
    obj.accessibilityRole = accessibilityRole;
    obj.accessibilityLabel = accessibilityLabel;
    obj.accessibilityState = { selected: isSelected };
    obj = {};
    items = [, , , ];
    items[0] = tmp.item;
    selected = null;
    tmp3 = jsx;
    tmp4 = View;
    if (isSelected) {
      selected = tmp.selected;
    }
    items[1] = selected;
    items[2] = { width: size, height: size };
    items[3] = style;
    obj.style = items;
    obj.children = children;
    obj.children = tmp3(tmp4, obj);
    return tmp2(require("PressableBase").PressableOpacity, obj);
  }
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: 10, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.pressable = _createForOfIteratorHelperLoose;
let obj1 = { borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.item = obj1;
_createForOfIteratorHelperLoose.selected = { borderColor: require("_createForOfIteratorHelperLoose").colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
_createForOfIteratorHelperLoose.optionCell = { justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.optionCellText = { marginTop: 4 };
_createForOfIteratorHelperLoose.newIcon = { position: "absolute", top: -12, right: 5 };
_createForOfIteratorHelperLoose.lockIcon = { position: "absolute", top: -12, right: -10 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx");

export { EditCollectibleListItem };
export const EditCollectiblesListItemNone = function EditCollectiblesListItemNone(asDefault) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.optionCell };
  const merged = Object.assign(asDefault);
  obj = { source: importDefault(7956), size: require(1273) /* Button */.IconSizes.LARGE };
  const items = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp.optionCellText };
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (asDefault.asDefault) {
    let stringResult = string(t.CHf9iJ);
  } else {
    stringResult = string(t.PoWNfe);
  }
  obj.children = stringResult;
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj["children"] = items;
  return closure_8(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemShop = function EditCollectiblesListItemShop(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  let obj = Object.create(null);
  obj.analyticsSource = 0;
  const merged = Object.assign(analyticsSource, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  analyticsLocations = analyticsLocations(5462)(analyticsSource).analyticsLocations;
  const items = [analyticsLocations, analyticsSource];
  obj = {
    style: tmp3.optionCell,
    isSelected: false,
    onPress: React.useCallback(() => {
      let obj = analyticsSource(outer1_2[15]);
      obj = { analyticsLocations, analyticsSource, screen: outer1_6.FEATURED_PAGE };
      const result = obj.openCollectiblesShopMobile(obj);
      analyticsLocations(outer1_2[16]).hideActionSheet();
    }, items)
  };
  const merged1 = Object.assign(merged);
  obj = { source: analyticsLocations(7957), size: analyticsSource(1273).IconSizes.LARGE };
  const items1 = [callback(analyticsSource(1273).Icon, obj), , ];
  const obj1 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp3.optionCellText };
  const intl = analyticsSource(1212).intl;
  obj1.children = intl.string(analyticsSource(1212).t.pWG4ze);
  items1[1] = callback(analyticsSource(4126).Text, obj1);
  items1[2] = callback(analyticsSource(7958).NewBadge, { style: tmp3.newIcon });
  obj["children"] = items1;
  return callback2(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemProduct = function EditCollectiblesListItemProduct(skuId) {
  let children;
  let isSelected;
  let isTryItOut;
  skuId = skuId.skuId;
  let obj = { isSelected: 0, isTryItOut: 0, skuId: 0, children: 0 };
  ({ isSelected, isTryItOut, children } = skuId);
  Object.setPrototypeOf(null);
  const merged = Object.assign(skuId, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj1 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getCurrentUser());
  const obj3 = importDefault(3776);
  const tmp6 = importDefault(7946)(skuId);
  const purchase = tmp6.purchase;
  const canUseCollectiblesResult = importDefault(3776).canUseCollectibles(stateFromStores);
  const isProductNewResult = require(6786) /* getPriceForCollectiblesProduct */.isProductNew(skuId);
  const obj4 = require(6786) /* getPriceForCollectiblesProduct */;
  let result = require(6786) /* getPriceForCollectiblesProduct */.isPremiumCollectiblesProduct(tmp6.product);
  if (!result) {
    result = require(6786) /* getPriceForCollectiblesProduct */.isPremiumCollectiblesPurchase(purchase);
    const obj6 = require(6786) /* getPriceForCollectiblesProduct */;
  }
  obj = { isSelected };
  const merged1 = Object.assign(merged);
  const items1 = [children, ];
  if (null == purchase) {
    if (!result) {
      obj = { style: tmp3.lockIcon, isNew: isProductNewResult };
      let tmp17 = callback(require(7958) /* NewBadge */.LockBadge, obj);
    }
    items1[1] = tmp17;
    obj["children"] = items1;
    return closure_8(EditCollectibleListItem, obj);
  }
  let tmp18 = null;
  if (result) {
    tmp18 = null;
    if (!isTryItOut) {
      if (null == purchase) {
        obj1 = { style: tmp3.lockIcon, isNew: isProductNewResult };
        tmp18 = callback(require(7958) /* NewBadge */.PremiumBadge, obj1);
      } else {
        tmp18 = null;
      }
    }
  }
  tmp17 = tmp18;
};
