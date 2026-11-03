// Module ID: 18312
// Function ID: 18313
// Name: FavoritesGuildCategoryActionSheet
// Dependencies: [19, 4993, 21, 5772, 14532, 4966, 7486, 7441, 7488, 10958, 1113, 7685, 18313, 10654, 7478, 5831, 504, 2]
// Exports: default

// Module 18312 (FavoritesGuildCategoryActionSheet)
import ToastUtils from "ToastUtils" /* 5831 */;
import ClipboardUtils from "ClipboardUtils" /* 7478 */;
import openFavoritesGuildCategorySettingsModalDefault from "openFavoritesGuildCategorySettingsModal" /* 18313 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 4993 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
function FavoritesGuildCategoryActionSheetConnected(category) {
  let ActionSheetRow;
  let ActionSheetRow2;
  let ActionSheetRow3;
  let Icon;
  let Icon2;
  let Icon3;
  let closure_2;
  let intl;
  let intl2;
  let items;
  let obj10;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  category = category.category;
  const onClose = category.onClose;
  const tmp2 = onClose(5772)(category, true);
  const tmp3 = onClose(14532)(category);
  dependencyMap = tmp3;
  const DeveloperMode = category(4966).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { header: closure_5(category(7441).BottomSheetTitleHeader, { title: tmp2 }), children: items };
  const ActionSheet = category(7486).ActionSheet;
  let tmp7Result = null;
  const tmp6 = closure_6;
  if (null != tmp3) {
    let obj2 = { hasIcons: true, children: closure_5(ActionSheetRow, obj3) };
    const Group = tmp4(7488).ActionSheetRow.Group;
    obj3 = {
      label: tmp3.label,
      icon: closure_5(Icon, obj4),
      onPress() {
          closure_2.perform();
          onClose();
        }
    };
    ActionSheetRow = tmp4(7488).ActionSheetRow;
    obj4 = { IconComponent: category(10958).PlusLargeIcon };
    Icon = tmp4(7488).ActionSheetRow.Icon;
    tmp7Result = tmp7(Group, obj2);
  }
  items = [tmp7Result, , ];
  const obj5 = { hasIcons: true, children: closure_5(ActionSheetRow2, obj6) };
  const Group2 = tmp4(7488).ActionSheetRow.Group;
  obj6 = {
    label: intl.string(category(1113).t.zdPFs9),
    icon: closure_5(Icon2, obj7),
    onPress() {
      openFavoritesGuildCategorySettingsModalDefault(category.id);
      onClose();
    }
  };
  ActionSheetRow2 = tmp4(7488).ActionSheetRow;
  intl = tmp4(1113).intl;
  obj7 = { IconComponent: category(7685).SettingsIcon };
  Icon2 = tmp4(7488).ActionSheetRow.Icon;
  items[1] = closure_5(Group2, obj5);
  let tmp7Result2 = null;
  if (setting) {
    const obj8 = { hasIcons: true, children: closure_5(ActionSheetRow3, obj9) };
    const Group3 = tmp4(7488).ActionSheetRow.Group;
    obj9 = {
      label: intl2.string(category(1113).t["2visC6"]),
      icon: closure_5(Icon3, obj10),
      onPress() {
          const obj = ClipboardUtils;
          obj.copy(category.id);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
          onClose();
        }
    };
    ActionSheetRow3 = tmp4(7488).ActionSheetRow;
    intl2 = tmp4(1113).intl;
    obj10 = { IconComponent: category(10654).IdIcon };
    Icon3 = tmp4(7488).ActionSheetRow.Icon;
    tmp7Result2 = tmp7(Group3, obj8);
  }
  items[2] = tmp7Result2;
  return tmp6(ActionSheet, obj);
}
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx");

export default function FavoritesGuildCategoryActionSheet(categoryId) {
  categoryId = categoryId.categoryId;
  const onClose = categoryId.onClose;
  let stateFromStores;
  let memo;
  const items = [FavoriteStore];
  const obj = categoryId(stateFromStores[16]);
  stateFromStores = obj.useStateFromStores(items, () => FavoriteStore.getFavorite(categoryId));
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
