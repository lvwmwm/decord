// Module ID: 15769
// Function ID: 15770
// Name: FavoritesGuildActionSheet
// Dependencies: [19, 2048, 21, 15770, 15771, 15772, 9685, 504, 6618, 6570, 1115, 6620, 5387, 11633, 15773, 5992, 6387, 4790, 2]
// Exports: default

// Module 15769 (FavoritesGuildActionSheet)
import useFavoritesGuildHideActionDefault from "useFavoritesGuildHideAction" /* 15770 */;
import useFavoritesGuildResetActionDefault from "useFavoritesGuildResetAction" /* 15771 */;
import useFavoritesGuildAutoAddedThreadsActionDefault from "useFavoritesGuildAutoAddedThreadsAction" /* 15772 */;
import openFavoritesGuildChannelSortModalDefault from "openFavoritesGuildChannelSortModal" /* 15773 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default function FavoritesGuildActionSheet(onClose) {
  let ActionSheetRow;
  let ActionSheetSwitchRow;
  let BottomSheetTitleHeader;
  let EyeSlashIcon;
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let closure_1;
  let closure_2;
  let intl;
  let intl2;
  let items1;
  let obj10;
  let obj11;
  let obj25;
  let obj4;
  let obj7;
  let obj8;
  let str;
  onClose = onClose.onClose;
  const tmp2 = useFavoritesGuildHideActionDefault();
  importDefault = tmp2;
  const tmp3 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp3;
  const tmp4 = useFavoritesGuildAutoAddedThreadsActionDefault();
  const obj = onClose(9685);
  const hasAccess = obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess;
  const items = [FavoriteStore];
  const obj2 = onClose(504);
  const stateFromStores = obj2.useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  const obj3 = { header: closure_4(BottomSheetTitleHeader, obj4), children: items1 };
  const ActionSheet = onClose(6618).ActionSheet;
  obj4 = { title: intl.string(onClose(1115).t.wMWyci) };
  BottomSheetTitleHeader = onClose(6570).BottomSheetTitleHeader;
  intl = onClose(1115).intl;
  let tmp8Result = null;
  if (tmp4.isAvailable) {
    const obj5 = { hasIcons: true, children: closure_4(ActionSheetSwitchRow, obj7) };
    const Group = tmp5(6620).ActionSheetRow.Group;
    ({ label: obj6.label, subLabel: obj6.subLabel } = tmp4);
    obj7 = { label: null, subLabel: null, icon: closure_4(Icon, obj8), value: null, onValueChange: null };
    ActionSheetSwitchRow = tmp5(6620).ActionSheetSwitchRow;
    obj8 = { IconComponent: onClose(5387).ThreadIcon };
    Icon = tmp5(6620).ActionSheetRow.Icon;
    ({ isEnabled: obj6.value, toggle: obj6.onValueChange } = tmp4);
    tmp8Result = tmp8(Group, obj5);
  }
  items1 = [tmp8Result, , ];
  let tmp8Result3 = null;
  if (hasAccess) {
    tmp8Result3 = null;
    if (stateFromStores) {
      const obj9 = { hasIcons: true, children: closure_4(ActionSheetRow, obj10) };
      const Group2 = tmp5(6620).ActionSheetRow.Group;
      obj10 = {
        label: intl2.string(onClose(1115).t["0dOFq+"]),
        icon: closure_4(Icon2, obj11),
        onPress() {
              onClose();
              openFavoritesGuildChannelSortModalDefault();
            }
      };
      ActionSheetRow = tmp5(6620).ActionSheetRow;
      intl2 = tmp5(1115).intl;
      obj11 = { IconComponent: onClose(11633).ArrowsUpDownIcon };
      Icon2 = tmp5(6620).ActionSheetRow.Icon;
      tmp8Result3 = tmp8(Group2, obj9);
    }
  }
  items1[1] = tmp8Result3;
  const Group3 = tmp5(6620).ActionSheetRow.Group;
  const obj13 = {
    label: tmp2.label,
    subLabel: tmp2.subLabel,
    icon: closure_4(Icon3, { IconComponent: EyeSlashIcon }),
    variant: str,
    onPress() {
      onClose();
      closure_1.perform();
    }
  };
  const ActionSheetRow2 = tmp5(6620).ActionSheetRow;
  Icon3 = tmp5(6620).ActionSheetRow.Icon;
  if (tmp2.isPreview) {
    EyeSlashIcon = tmp5(5992).XSmallIcon;
  } else {
    EyeSlashIcon = tmp5(6387).EyeSlashIcon;
  }
  str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  const items2 = [closure_4(ActionSheetRow2, obj13), ];
  let tmp8Result4 = null;
  if (tmp3.isAvailable) {
    ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
    const obj24 = {
      label: null,
      subLabel: null,
      icon: closure_4(Icon4, obj25),
      variant: "danger",
      onPress() {
          onClose();
          closure_2.perform();
        }
    };
    const ActionSheetRow3 = tmp5(6620).ActionSheetRow;
    obj25 = { IconComponent: onClose(4790).TrashIcon };
    Icon4 = tmp5(6620).ActionSheetRow.Icon;
    tmp8Result4 = tmp8(ActionSheetRow3, obj24);
  }
  items2[1] = tmp8Result4;
  items1[2] = closure_5(Group3, { hasIcons: true, children: items2 });
  return closure_5(ActionSheet, obj3);
};
