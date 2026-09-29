// Module ID: 16452
// Function ID: 16453
// Name: FavoritesGuildCategoryActionSheet
// Dependencies: [19, 2044, 21, 4941, 11270, 2019, 7474, 7426, 7476, 11245, 1115, 7654, 16453, 10925, 7466, 4485, 504, 2]
// Exports: default

// Module 16452 (FavoritesGuildCategoryActionSheet)
import ToastUtils from "ToastUtils" /* 4485 */;
import ClipboardUtils from "ClipboardUtils" /* 7466 */;
import openFavoritesGuildCategorySettingsModalDefault from "openFavoritesGuildCategorySettingsModal" /* 16453 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2044 */;

require = fn;
function FavoritesGuildCategoryActionSheetConnected(category) {
  category = category.category;
  const onClose = category.onClose;
  const tmp3 = onClose(11270)(category);
  dependencyMap = tmp3;
  const DeveloperMode = category(2019).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { header: closure_5(category(7426).BottomSheetTitleHeader, { title: onClose(4941)(category, true) }), children: null };
  let tmp7Result = null;
  if (null != tmp3) {
    const obj2 = { hasIcons: true, children: null };
    const obj3 = { label: tmp3.label, icon: null, onPress: null };
    const obj4 = { IconComponent: tmp4(11245).PlusLargeIcon };
    obj3.icon = tmp7(tmp4(7476).ActionSheetRow.Icon, obj4);
    obj3.onPress = function onPress() {
      closure_2.perform();
      onClose();
    };
    obj2.children = tmp7(tmp4(7476).ActionSheetRow, obj3);
    tmp7Result = tmp7(tmp4(7476).ActionSheetRow.Group, obj2);
  }
  const items = [tmp7Result, , ];
  const obj5 = { hasIcons: true, children: null };
  const obj6 = { label: null, icon: null, onPress: null };
  const intl = tmp4(1115).intl;
  obj6.label = intl.string(category(1115).t.zdPFs9);
  const tmp2 = onClose(4941)(category, true);
  const tmp6 = closure_6;
  obj6.icon = closure_5(category(7476).ActionSheetRow.Icon, { IconComponent: category(7654).SettingsIcon });
  obj6.onPress = function onPress() {
    openFavoritesGuildCategorySettingsModalDefault(category.id);
    onClose();
  };
  obj5.children = closure_5(category(7476).ActionSheetRow, obj6);
  items[1] = closure_5(category(7476).ActionSheetRow.Group, obj5);
  let tmp7Result2 = null;
  if (setting) {
    const obj8 = { hasIcons: true, children: null };
    const obj9 = { label: null, icon: null, onPress: null };
    const intl2 = tmp4(1115).intl;
    obj9.label = intl2.string(tmp4(1115).t["2visC6"]);
    const obj10 = { IconComponent: tmp4(10925).IdIcon };
    obj9.icon = tmp7(tmp4(7476).ActionSheetRow.Icon, obj10);
    obj9.onPress = function onPress() {
      ClipboardUtils.copy(category.id);
      ToastUtils.presentIdCopied();
      onClose();
    };
    obj8.children = tmp7(tmp4(7476).ActionSheetRow, obj9);
    tmp7Result2 = tmp7(tmp4(7476).ActionSheetRow.Group, obj8);
  }
  items[2] = tmp7Result2;
  obj.children = items;
  return tmp6(category(7474).ActionSheet, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx");

export default function FavoritesGuildCategoryActionSheet(categoryId) {
  categoryId = categoryId.categoryId;
  const onClose = categoryId.onClose;
  let stateFromStores;
  let memo;
  const items = [FavoriteStore];
  stateFromStores = categoryId(stateFromStores[16]).useStateFromStores(items, () => FavoriteStore.getFavorite(categoryId));
  const items1 = [categoryId, stateFromStores];
  memo = memo.useMemo(() => {
    let categoryRecord = null;
    if (null != stateFromStores) {
      categoryRecord = FavoriteStore.getCategoryRecord(categoryId);
    }
    return categoryRecord;
  }, items1);
  const items2 = [memo, onClose];
  const effect = memo.useEffect(() => {
    if (null == memo) {
      onClose();
    }
  }, items2);
  let tmp4 = null;
  if (null != memo) {
    const obj2 = { category: memo, onClose };
    tmp4 = closure_5(FavoritesGuildCategoryActionSheetConnected, obj2);
  }
  return tmp4;
};
