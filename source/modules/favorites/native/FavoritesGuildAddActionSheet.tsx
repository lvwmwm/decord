// Module ID: 15120
// Function ID: 15121
// Name: handleAddToFavorites
// Dependencies: [19, 21, 4157, 11877, 15121, 5551, 5242, 1236, 5553, 2969, 9417, 15122, 2]
// Exports: openFavoritesGuildAddActionSheet

// Module 15120 (handleAddToFavorites)
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
function handleAddToFavorites() {
  importDefault(4157).hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = importDefault(4157);
  const result = require(11877) /* AddFavoriteChannelModal */.openAddFavoriteChannelModal({ source: "favorites_header_add_button_context_menu" });
}
function handleCreateCategory() {
  importDefault(4157).hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = importDefault(4157);
  const result = require(15121) /* AddFavoriteCategoryActionSheet */.openAddFavoriteCategoryActionSheet();
}
function FavoritesGuildAddActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.wMWyci);
  obj[0] = callback(require(5242) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true, children: null };
  const obj1 = { label: null, icon: null, onPress: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl2.string(importDefault(2969).G9fGlP);
  const obj2 = { IconComponent: null };
  obj2[0] = require(9417) /* StarOutlineIcon */.StarOutlineIcon;
  obj1[1] = callback(require(5553) /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj2);
  obj1[2] = handleAddToFavorites;
  obj[1] = callback(require(5553) /* ActionSheetRowIcon */.ActionSheetRow, obj1);
  const items = [callback(require(5553) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj), ];
  const obj3 = { hasIcons: true, children: null };
  const obj4 = { label: null, icon: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl3.string(require(1236) /* getSystemLocale */.t["ISN+NM"]);
  const obj5 = { IconComponent: null };
  obj5[0] = require(15122) /* FolderPlusIcon */.FolderPlusIcon;
  obj4[1] = callback(require(5553) /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj5);
  obj4[2] = handleCreateCategory;
  obj3[1] = callback(require(5553) /* ActionSheetRowIcon */.ActionSheetRow, obj4);
  items[1] = callback(require(5553) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj3);
  obj[1] = items;
  return callback2(require(5551) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  let obj = require(4157) /* ACTION_SHEET_HEIGHT_HALF */;
  obj = { content: callback(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet };
  obj.showActionSheet(obj);
};
