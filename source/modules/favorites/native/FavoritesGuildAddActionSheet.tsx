// Module ID: 15050
// Function ID: 114669
// Name: handleAddToFavorites
// Dependencies: [31, 33, 4099, 15051, 15054, 5498, 5186, 1212, 5500, 2945, 9353, 15055, 2]
// Exports: openFavoritesGuildAddActionSheet

// Module 15050 (handleAddToFavorites)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
function handleAddToFavorites() {
  importDefault(4099).hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = importDefault(4099);
  const result = require(15051) /* AddFavoriteChannelModal */.openAddFavoriteChannelModal({ source: "favorites_header_add_button_context_menu" });
}
function handleCreateCategory() {
  importDefault(4099).hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = importDefault(4099);
  const result = require(15054) /* AddFavoriteCategoryActionSheet */.openAddFavoriteCategoryActionSheet();
}
function FavoritesGuildAddActionSheet() {
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.wMWyci);
  obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true };
  const obj1 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl2.string(importDefault(2945).G9fGlP);
  const obj2 = { IconComponent: require(9353) /* StarOutlineIcon */.StarOutlineIcon };
  obj1.icon = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj2);
  obj1.onPress = handleAddToFavorites;
  obj.children = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj1);
  const items = [callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj), ];
  const obj3 = { hasIcons: true };
  const obj4 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj4.label = intl3.string(require(1212) /* getSystemLocale */.t["ISN+NM"]);
  const obj5 = { IconComponent: require(15055) /* FolderPlusIcon */.FolderPlusIcon };
  obj4.icon = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj5);
  obj4.onPress = handleCreateCategory;
  obj3.children = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj4);
  items[1] = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj3);
  obj.children = items;
  return callback2(require(5498) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
let result = require("showActionSheet").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  let obj = require(4099) /* showActionSheet */;
  obj = { content: callback(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet };
  obj.showActionSheet(obj);
};
