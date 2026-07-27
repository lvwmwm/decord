// Module ID: 15045
// Function ID: 114653
// Name: FavoritesGuildActionSheet
// Dependencies: [31, 33, 15046, 15047, 5498, 5186, 1212, 5500, 5119, 9146, 4099, 4090, 2]
// Exports: openFavoritesGuildActionSheet

// Module 15045 (FavoritesGuildActionSheet)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let require = arg1;
function FavoritesGuildActionSheet() {
  const tmp = importDefault(15046)();
  const require = tmp;
  const tmp2 = importDefault(15047)();
  importDefault = tmp2;
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.wMWyci);
  obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true };
  const obj1 = { label: tmp.label, subLabel: tmp.subLabel };
  const obj2 = {};
  if (tmp.isPreview) {
    let EyeSlashIcon = tmp7(5119).XSmallIcon;
  } else {
    EyeSlashIcon = tmp7(9146).EyeSlashIcon;
  }
  obj2.IconComponent = EyeSlashIcon;
  obj1.icon = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj2);
  let str = "danger";
  if (tmp.isPreview) {
    str = "default";
  }
  obj1.variant = str;
  obj1.onPress = function onPress() {
    tmp2(outer1_2[10]).hideActionSheet(outer1_5);
    tmp.perform();
  };
  const items = [callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj1), ];
  let tmp9 = null;
  if (tmp2.isAvailable) {
    const obj3 = {};
    ({ label: obj6.label, subLabel: obj6.subLabel } = tmp2);
    const obj4 = { IconComponent: require(4090) /* TrashIcon */.TrashIcon };
    obj3.icon = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj4);
    obj3.variant = "danger";
    obj3.onPress = function onPress() {
      tmp2(outer1_2[10]).hideActionSheet(outer1_5);
      tmp2.perform();
    };
    tmp9 = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj3);
  }
  items[1] = tmp9;
  obj.children = items;
  obj.children = closure_4(require(5500) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj);
  return callback(require(5498) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = require("useFavoritesGuildHideAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export const openFavoritesGuildActionSheet = function openFavoritesGuildActionSheet() {
  let obj = require(4099) /* showActionSheet */;
  obj = { content: callback(FavoritesGuildActionSheet, {}), key: FavoritesGuildActionSheet };
  obj.showActionSheet(obj);
};
