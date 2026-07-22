// Module ID: 7860
// Function ID: 62642
// Name: EditCollectibleListItem
// Dependencies: []
// Exports: EditCollectiblesListItemNone, EditCollectiblesListItemProduct, EditCollectiblesListItemShop

// Module 7860 (EditCollectibleListItem)
class EditCollectibleListItem {
  constructor(arg0) {
    ({ size, isSelected, onPress: closure_0, accessibilityRole } = global);
    ({ children, style, onLongPress, accessibilityLabel } = global);
    if (accessibilityRole === undefined) {
      accessibilityRole = "button";
    }
    tmp = closure_9();
    tmp2 = jsx;
    obj = {
      style: tmp.pressable,
      disabled: isSelected,
      onPress() {
            const result = callback(closure_2[8]).triggerHapticFeedback(callback2(closure_2[9]).IMPACT_LIGHT);
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
    return tmp2(arg1(dependencyMap[7]).PressableOpacity, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).CollectiblesMobileShopScreen;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { marginTop: 10, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.pressable = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.item = { borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
const obj1 = { borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.selected = { borderColor: importDefault(dependencyMap[6]).colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
obj.optionCell = { "Bool(false)": null, "Bool(false)": null };
obj.optionCellText = { marginTop: 4 };
obj.newIcon = {};
obj.lockIcon = { convertShortcutToName: "remove", hasUnreadMessages: null, CreatorMonetizationRestrictions: "secondaryButton" };
let closure_9 = obj.createStyles(obj);
const obj2 = { borderColor: importDefault(dependencyMap[6]).colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx");

export { EditCollectibleListItem };
export const EditCollectiblesListItemNone = function EditCollectiblesListItemNone(asDefault) {
  const tmp = callback3();
  let obj = { style: tmp.optionCell };
  const merged = Object.assign(asDefault);
  obj = { source: importDefault(dependencyMap[11]), size: arg1(dependencyMap[10]).IconSizes.LARGE };
  const items = [callback(arg1(dependencyMap[10]).Icon, obj), ];
  obj = { style: tmp.optionCellText };
  const intl = arg1(dependencyMap[13]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[13]).t;
  if (asDefault.asDefault) {
    let stringResult = string(t.CHf9iJ);
  } else {
    stringResult = string(t.PoWNfe);
  }
  obj.children = stringResult;
  items[1] = callback(arg1(dependencyMap[12]).Text, obj);
  obj["children"] = items;
  return closure_8(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemShop = function EditCollectiblesListItemShop(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  const arg1 = analyticsSource;
  let obj = Object.create(null);
  obj.analyticsSource = 0;
  const merged = Object.assign(analyticsSource, obj);
  const tmp3 = callback3();
  const analyticsLocations = importDefault(dependencyMap[14])(analyticsSource).analyticsLocations;
  const importDefault = analyticsLocations;
  const items = [analyticsLocations, analyticsSource];
  obj = {
    style: tmp3.optionCell,
    isSelected: false,
    onPress: React.useCallback(() => {
      let obj = analyticsSource(closure_2[15]);
      obj = { analyticsLocations, analyticsSource, screen: constants.FEATURED_PAGE };
      const result = obj.openCollectiblesShopMobile(obj);
      analyticsLocations(closure_2[16]).hideActionSheet();
    }, items)
  };
  const merged1 = Object.assign(merged);
  obj = { source: importDefault(dependencyMap[17]), size: arg1(dependencyMap[10]).IconSizes.LARGE };
  const items1 = [callback(arg1(dependencyMap[10]).Icon, obj), , ];
  const obj1 = { style: tmp3.optionCellText };
  const intl = arg1(dependencyMap[13]).intl;
  obj1.children = intl.string(arg1(dependencyMap[13]).t.pWG4ze);
  items1[1] = callback(arg1(dependencyMap[12]).Text, obj1);
  items1[2] = callback(arg1(dependencyMap[18]).NewBadge, { style: tmp3.newIcon });
  obj["children"] = items1;
  return callback2(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemProduct = function EditCollectiblesListItemProduct(skuId) {
  let children;
  let isSelected;
  let isTryItOut;
  skuId = skuId.skuId;
  let obj = { onSwipeableCloseStartDrag: -24, didSelfVote: null, isExpired: 1, NBSP: "Malaysia" };
  ({ isSelected, isTryItOut, children } = skuId);
  Object.setPrototypeOf(null);
  const merged = Object.assign(skuId, obj);
  const tmp3 = callback3();
  let obj1 = arg1(dependencyMap[19]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = importDefault(dependencyMap[20]);
  const tmp6 = importDefault(dependencyMap[21])(skuId);
  const purchase = tmp6.purchase;
  const canUseCollectiblesResult = importDefault(dependencyMap[20]).canUseCollectibles(stateFromStores);
  const isProductNewResult = arg1(dependencyMap[22]).isProductNew(skuId);
  const obj4 = arg1(dependencyMap[22]);
  let result = arg1(dependencyMap[22]).isPremiumCollectiblesProduct(tmp6.product);
  if (!result) {
    result = arg1(dependencyMap[22]).isPremiumCollectiblesPurchase(purchase);
    const obj6 = arg1(dependencyMap[22]);
  }
  obj = { isSelected };
  const merged1 = Object.assign(merged);
  const items1 = [children, ];
  if (null == purchase) {
    if (!result) {
      obj = { style: tmp3.lockIcon, isNew: isProductNewResult };
      let tmp17 = callback(arg1(dependencyMap[18]).LockBadge, obj);
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
        tmp18 = callback(arg1(dependencyMap[18]).PremiumBadge, obj1);
      } else {
        tmp18 = null;
      }
    }
  }
  tmp17 = tmp18;
};
