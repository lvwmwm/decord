// Module ID: 18139
// Function ID: 18140
// Name: FavoritesGuildActionSheet
// Dependencies: [19, 4861, 21, 18140, 18141, 18142, 504, 7360, 7315, 1114, 7362, 8637, 3447, 5733, 6738, 18143, 1995, 12304, 18147, 7129, 2]
// Exports: default

// Module 18139 (FavoritesGuildActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import useFavoritesGuildHideActionDefault from "useFavoritesGuildHideAction" /* 18140 */;
import useFavoritesGuildResetActionDefault from "useFavoritesGuildResetAction" /* 18141 */;
import useFavoritesGuildAutoAddedThreadsActionDefault from "useFavoritesGuildAutoAddedThreadsAction" /* 18142 */;
import openFavoritesGuildChannelSortModalDefault from "openFavoritesGuildChannelSortModal" /* 18147 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 4861 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let tmp;
const _modDef3447 = tmp(3447);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default function FavoritesGuildActionSheet(onClose) {
  let ActionSheetRow2;
  let BottomSheetTitleHeader;
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let Icon5;
  let closure_1;
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let obj11;
  let obj12;
  let obj15;
  let obj3;
  let obj30;
  let obj7;
  let obj9;
  onClose = onClose.onClose;
  importDefault = undefined;
  const tmp3 = useFavoritesGuildHideActionDefault();
  importDefault = tmp3;
  const tmp4 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp4;
  const tmp5 = useFavoritesGuildAutoAddedThreadsActionDefault();
  let obj = onClose(504);
  const items = [FavoriteStore];
  const stateFromStores = obj.useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  const obj2 = { header: closure_4(BottomSheetTitleHeader, obj3), children: items2 };
  const ActionSheet = onClose(7360).ActionSheet;
  obj3 = { title: intl.string(onClose(1114).t.wMWyci) };
  BottomSheetTitleHeader = onClose(7315).BottomSheetTitleHeader;
  intl = onClose(1114).intl;
  let tmp8Result = null;
  if (tmp5.isAvailable) {
    const obj4 = { hasIcons: true, children: items1 };
    const Group = tmp6(7362).ActionSheetRow.Group;
    ({ label: obj5.label, subLabel: obj5.subLabel } = tmp5);
    const obj6 = { label: null, subLabel: null, icon: closure_4(Icon, obj7), value: null, onValueChange: null };
    const ActionSheetSwitchRow = tmp6(7362).ActionSheetSwitchRow;
    obj7 = { IconComponent: onClose(8637).ThreadIcon };
    Icon = tmp6(7362).ActionSheetRow.Icon;
    ({ isEnabled: obj5.value, toggle: obj5.onValueChange } = tmp5);
    items1 = [closure_4(ActionSheetSwitchRow, obj6), ];
    const obj8 = {
      label: intl2.string(_modDef3447.O2NG67),
      icon: closure_4(Icon2, obj9),
      onPress() {
          onClose();
          const obj = ModalActionCreatorsDefault;
          obj.pushLazy(asyncRequire(18143, dependencyMap.paths), undefined, "FavoritesGuildCleanupModal");
        }
    };
    const ActionSheetRow = tmp6(7362).ActionSheetRow;
    intl2 = tmp6(1114).intl;
    obj9 = { IconComponent: onClose(5733).TrashIcon };
    Icon2 = tmp6(7362).ActionSheetRow.Icon;
    items1[1] = closure_4(ActionSheetRow, obj8);
    tmp8Result = tmp8(Group, obj4);
  }
  items2 = [tmp8Result, , ];
  let tmp9Result = null;
  if (stateFromStores) {
    const obj10 = { hasIcons: true, children: closure_4(ActionSheetRow2, obj11) };
    const Group2 = tmp6(7362).ActionSheetRow.Group;
    obj11 = {
      label: intl3.string(onClose(1114).t["0dOFq+"]),
      icon: closure_4(Icon3, obj12),
      onPress() {
          onClose();
          openFavoritesGuildChannelSortModalDefault();
        }
    };
    ActionSheetRow2 = tmp6(7362).ActionSheetRow;
    intl3 = tmp6(1114).intl;
    obj12 = { IconComponent: onClose(12304).ArrowsUpDownIcon };
    Icon3 = tmp6(7362).ActionSheetRow.Icon;
    tmp9Result = tmp9(Group2, obj10);
  }
  items2[1] = tmp9Result;
  const Group3 = tmp6(7362).ActionSheetRow.Group;
  const obj13 = {
    label: tmp3.label,
    subLabel: tmp3.subLabel,
    icon: closure_4(Icon4, obj15),
    variant: "danger",
    onPress() {
      onClose();
      closure_1.perform();
    }
  };
  const ActionSheetRow3 = tmp6(7362).ActionSheetRow;
  obj15 = { IconComponent: onClose(7129).EyeSlashIcon };
  Icon4 = tmp6(7362).ActionSheetRow.Icon;
  const items3 = [closure_4(ActionSheetRow3, obj13), ];
  let tmp9Result2 = null;
  if (tmp4.isAvailable) {
    ({ label: obj14.label, subLabel: obj14.subLabel } = tmp4);
    const obj29 = {
      label: null,
      subLabel: null,
      icon: closure_4(Icon5, obj30),
      variant: "danger",
      onPress() {
          onClose();
          closure_2.perform();
        }
    };
    const ActionSheetRow4 = tmp6(7362).ActionSheetRow;
    obj30 = { IconComponent: onClose(5733).TrashIcon };
    Icon5 = tmp6(7362).ActionSheetRow.Icon;
    tmp9Result2 = tmp9(ActionSheetRow4, obj29);
  }
  items3[1] = tmp9Result2;
  items2[2] = closure_5(Group3, { hasIcons: true, children: items3 });
  return closure_5(ActionSheet, obj2);
};
