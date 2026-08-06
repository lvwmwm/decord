// Module ID: 15172
// Function ID: 15173
// Name: FavoritesGuildActionSheet
// Dependencies: [19, 21, 15173, 15174, 5685, 5376, 1236, 5687, 5309, 8418, 4253, 4244, 2]
// Exports: openFavoritesGuildActionSheet

// Module 15172 (FavoritesGuildActionSheet)
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
let require = arg1;
function FavoritesGuildActionSheet() {
  const tmp2 = importDefault(15173)();
  const require = tmp2;
  const tmp3 = importDefault(15174)();
  importDefault = tmp3;
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.wMWyci);
  obj[0] = callback(require(5376) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp5(5309).XSmallIcon;
  } else {
    EyeSlashIcon = tmp5(8418).EyeSlashIcon;
  }
  obj[2] = callback(require(5687) /* ActionSheetRowIcon */.ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj[3] = str;
  obj[4] = function onPress() {
    tmp3(outer1_2[10]).hideActionSheet(outer1_5);
    tmp2.perform();
  };
  const items = [callback(require(5687) /* ActionSheetRowIcon */.ActionSheetRow, obj), ];
  let tmp4Result = null;
  if (tmp3.isAvailable) {
    const obj1 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj4[0], subLabel: obj4[1] } = tmp3);
    const obj2 = { IconComponent: null };
    obj2[0] = tmp5(4244).TrashIcon;
    obj1[2] = tmp4(tmp5(5687).ActionSheetRow.Icon, obj2);
    obj1[4] = function onPress() {
      tmp3(outer1_2[10]).hideActionSheet(outer1_5);
      tmp3.perform();
    };
    tmp4Result = tmp4(tmp5(5687).ActionSheetRow, obj1);
  }
  items[1] = tmp4Result;
  obj[1] = closure_4(require(5687) /* ActionSheetRowIcon */.ActionSheetRow.Group, { hasIcons: true, children: items });
  return callback(require(5685) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = require("useFavoritesGuildHideAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export const openFavoritesGuildActionSheet = function openFavoritesGuildActionSheet() {
  let obj = require(4253) /* ACTION_SHEET_HEIGHT_HALF */;
  obj = { content: callback(FavoritesGuildActionSheet, {}), key: FavoritesGuildActionSheet };
  obj.showActionSheet(obj);
};
