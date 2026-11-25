// Module ID: 17806
// Function ID: 17807
// Name: FavoritesGuildActionSheet
// Dependencies: [19, 4864, 21, 17807, 17808, 504, 7515, 7476, 1112, 7517, 3856, 7108, 6099, 17809, 2119, 13065, 17811, 7257, 5719, 2]
// Exports: default

// Module 17806 (FavoritesGuildActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import _modDef3856 from "module_3856" /* 3856 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import useFavoritesGuildHideActionDefault from "useFavoritesGuildHideAction" /* 17807 */;
import useFavoritesGuildResetActionDefault from "useFavoritesGuildResetAction" /* 17808 */;
import openFavoritesGuildChannelSortModalDefault from "openFavoritesGuildChannelSortModal" /* 17811 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 4864 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default function FavoritesGuildActionSheet(onClose) {
  let ActionSheetRow;
  let ActionSheetRow2;
  let BottomSheetTitleHeader;
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let closure_1;
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj11;
  let obj25;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  onClose = onClose.onClose;
  const tmp2 = useFavoritesGuildHideActionDefault();
  importDefault = tmp2;
  const tmp3 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp3;
  let obj = onClose(504);
  const items = [FavoriteStore];
  const stateFromStores = obj.useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  const obj2 = { header: closure_4(BottomSheetTitleHeader, obj3), children: items1 };
  const ActionSheet = onClose(7515).ActionSheet;
  obj3 = { title: intl.string(onClose(1112).t.wMWyci) };
  BottomSheetTitleHeader = onClose(7476).BottomSheetTitleHeader;
  intl = onClose(1112).intl;
  const obj4 = { hasIcons: true, children: closure_4(ActionSheetRow, obj5) };
  const Group = onClose(7517).ActionSheetRow.Group;
  obj5 = {
    label: intl2.string(_modDef3856.hklnjs),
    icon: closure_4(Icon, obj6),
    onPress() {
      onClose();
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(17809, dependencyMap.paths), undefined, "FavoritesGuildCleanupModal");
    }
  };
  ActionSheetRow = onClose(7517).ActionSheetRow;
  intl2 = onClose(1112).intl;
  obj6 = { IconComponent: onClose(7108).ThreadIcon };
  Icon = onClose(7517).ActionSheetRow.Icon;
  items1 = [closure_4(Group, obj4), , ];
  let tmp7Result = null;
  if (stateFromStores) {
    const obj7 = { hasIcons: true, children: closure_4(ActionSheetRow2, obj8) };
    const Group2 = tmp4(7517).ActionSheetRow.Group;
    obj8 = {
      label: intl3.string(onClose(1112).t["0dOFq+"]),
      icon: closure_4(Icon2, obj9),
      onPress() {
          onClose();
          openFavoritesGuildChannelSortModalDefault();
        }
    };
    ActionSheetRow2 = tmp4(7517).ActionSheetRow;
    intl3 = tmp4(1112).intl;
    obj9 = { IconComponent: onClose(13065).ArrowsUpDownIcon };
    Icon2 = tmp4(7517).ActionSheetRow.Icon;
    tmp7Result = tmp7(Group2, obj7);
  }
  items1[1] = tmp7Result;
  const Group3 = tmp4(7517).ActionSheetRow.Group;
  const obj10 = {
    label: tmp2.label,
    subLabel: tmp2.subLabel,
    icon: closure_4(Icon3, obj11),
    variant: "danger",
    onPress() {
      onClose();
      closure_1.perform();
    }
  };
  const ActionSheetRow3 = tmp4(7517).ActionSheetRow;
  obj11 = { IconComponent: onClose(7257).EyeSlashIcon };
  Icon3 = tmp4(7517).ActionSheetRow.Icon;
  const items2 = [closure_4(ActionSheetRow3, obj10), ];
  let tmp7Result2 = null;
  if (tmp3.isAvailable) {
    ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
    const obj13 = {
      label: null,
      subLabel: null,
      icon: closure_4(Icon4, obj25),
      variant: "danger",
      onPress() {
          onClose();
          closure_2.perform();
        }
    };
    const ActionSheetRow4 = tmp4(7517).ActionSheetRow;
    obj25 = { IconComponent: onClose(5719).TrashIcon };
    Icon4 = tmp4(7517).ActionSheetRow.Icon;
    tmp7Result2 = tmp7(ActionSheetRow4, obj13);
  }
  items2[1] = tmp7Result2;
  items1[2] = closure_5(Group3, { hasIcons: true, children: items2 });
  return closure_5(ActionSheet, obj2);
};
