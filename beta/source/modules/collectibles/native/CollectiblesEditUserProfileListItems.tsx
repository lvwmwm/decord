// Module ID: 15383
// Function ID: 15384
// Name: CollectiblesEditUserProfileListItems
// Dependencies: [19, 17, 1385, 1074, 21, 5170, 575, 7076, 5408, 5409, 1187, 15384, 5783, 1113, 7420, 7828, 5406, 15385, 9643, 504, 2171, 8848, 7841, 2]
// Exports: EditCollectiblesListItemNone, EditCollectiblesListItemProduct, EditCollectiblesListItemShop

// Module 15383 (CollectiblesEditUserProfileListItems)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import HapticUtils from "HapticUtils" /* 5408 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5409 */;
import Text_Text from "Text/Text" /* 5783 */;
import Pressables from "Pressables" /* 7076 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7828 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7841 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8848 */;
import AssetRegistryDefault from "AssetRegistry" /* 15384 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
class EditCollectibleListItem {
  constructor(arg0) {
    let accessibilityLabel;
    let accessibilityRole;
    let children;
    let isSelected;
    let items;
    let onLongPress;
    let style;
    let tmp3;
    ({ size, isSelected, onPress: require, accessibilityRole } = arg0);
    ({ children, style, onLongPress, accessibilityLabel } = arg0);
    if (accessibilityRole === undefined) {
      accessibilityRole = "button";
    }
    const tmp = closure_9();
    let obj = {
      style: tmp.pressable,
      disabled: isSelected,
      onPress: function handlePress() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        require();
      },
      onLongPress,
      accessibilityRole,
      accessibilityLabel,
      accessibilityState: { selected: isSelected },
      children: tmp2(tmp3, { style: items, children })
    };
    items = [tmp.item, , , ];
    let selected = null;
    const PressableOpacity = Pressables.PressableOpacity;
    tmp3 = View;
    if (isSelected) {
      selected = tmp.selected;
    }
    items[1] = selected;
    items[2] = { width: size, height: size };
    items[3] = style;
    return closure_7(PressableOpacity, obj);
  }
}
const View = react_native.View;
let closure_6 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { pressable: obj2, item: obj3, selected: obj4, optionCell: { justifyContent: "center", alignItems: "center" }, optionCellText: { marginTop: 4 }, newIcon: { position: "absolute", top: -12, right: 5 }, lockIcon: { position: "absolute", top: -12, right: -10 } };
obj2 = { marginTop: 10, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
obj4 = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
const React4 = createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx");

export { EditCollectibleListItem };
export function EditCollectiblesListItemNone(asDefault) {
  let items;
  let stringResult;
  const tmp = closure_9();
  const obj = { style: tmp.optionCell, children: items };
  const merged = Object.assign(asDefault);
  const obj2 = { source: AssetRegistryDefault, size: native.IconSizes.LARGE };
  const Icon = native.Icon;
  items = [metroImportDefault(Icon, obj2), ];
  const obj3 = { variant: "body-sm/medium", color: "mobile-text-heading-primary", style: tmp.optionCellText, children: stringResult };
  const Text = Text_Text.Text;
  asDefault = asDefault.asDefault;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  const tmp2 = metroImportAll;
  const tmp3 = EditCollectibleListItem;
  const tmp5 = metroImportDefault;
  if (asDefault) {
    stringResult = string(t.CHf9iJ);
  } else {
    stringResult = string(t.PoWNfe);
  }
  items[1] = tmp5(Text, obj3);
  return tmp2(tmp3, obj);
}
export function EditCollectiblesListItemShop(analyticsSource) {
  let intl;
  let items1;
  analyticsSource = analyticsSource.analyticsSource;
  const merged = Object.assign(analyticsSource, Object.assign({ analyticsSource: 0 }));
  let analyticsLocations;
  const tmp2 = closure_9();
  analyticsLocations = analyticsLocations(7420)(analyticsSource).analyticsLocations;
  const items = [analyticsLocations, analyticsSource];
  let obj = {
    style: tmp2.optionCell,
    isSelected: false,
    onPress: react.useCallback(() => {
      const obj = CollectiblesActionCreators;
      const obj2 = { analyticsLocations, analyticsSource, screen: constants.FEATURED_PAGE };
      const result = obj.openCollectiblesShopMobile(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    }, items),
    children: items1
  };
  const merged1 = Object.assign(merged);
  let obj2 = { source: analyticsLocations(15385), size: analyticsSource(1187).IconSizes.LARGE };
  const Icon = analyticsSource(1187).Icon;
  items1 = [closure_7(Icon, obj2), , ];
  let obj3 = { variant: "body-sm/medium", color: "mobile-text-heading-primary", style: tmp2.optionCellText, children: intl.string(analyticsSource(1113).t.pWG4ze) };
  const Text = analyticsSource(5783).Text;
  intl = analyticsSource(1113).intl;
  items1[1] = closure_7(Text, obj3);
  const obj4 = { style: tmp2.newIcon };
  items1[2] = closure_7(analyticsSource(9643).NewBadge, obj4);
  return closure_8(EditCollectibleListItem, obj);
}
export function EditCollectiblesListItemProduct(skuId) {
  let children;
  let currentUser;
  let isSelected;
  let isTryItOut;
  let product;
  let purchase;
  skuId = skuId.skuId;
  ({ isSelected, isTryItOut, children } = skuId);
  const merged = Object.assign(skuId, Object.assign({ isSelected: 0, isTryItOut: 0, skuId: 0, children: 0 }));
  const tmp2 = closure_9();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = PremiumUtilsDefault;
  obj2.canUseCollectibles(stateFromStores);
  ({ purchase, product } = useCollectiblesDataDefault(skuId));
  useCollectiblesDataDefault(skuId);
  const obj3 = CollectiblesUtils;
  const isProductNewResult = obj3.isProductNew(skuId);
  const obj4 = CollectiblesUtils;
  let result = obj4.isPremiumCollectiblesProduct(product);
  if (!result) {
    const tmp3Result = CollectiblesUtils;
    result = tmp3Result.isPremiumCollectiblesPurchase(purchase);
  }
  const obj5 = { isSelected };
  const merged1 = Object.assign(merged);
  const items1 = [children, ];
  const tmp10 = metroImportAll;
  const tmp11 = EditCollectibleListItem;
  if (null == purchase) {
    let tmp14;
    if (!result) {
      const obj6 = { style: tmp2.lockIcon, isNew: isProductNewResult };
      tmp14 = metroImportDefault(tmp3(9643).LockBadge, obj6);
    }
    items1[1] = tmp14;
    obj5.children = items1;
    return tmp10(tmp11, obj5);
  }
  let tmp15 = null;
  if (result) {
    tmp15 = null;
    if (!isTryItOut) {
      if (null == purchase) {
        const obj7 = { style: tmp2.lockIcon, isNew: isProductNewResult };
        tmp15 = metroImportDefault(tmp3(9643).PremiumBadge, obj7);
      } else {
        tmp15 = null;
      }
    }
  }
  tmp14 = tmp15;
}
