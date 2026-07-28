// Module ID: 15093
// Function ID: 114842
// Name: handleAddToFavorites
// Dependencies: [31, 33, 4133, 11857, 15094, 5533, 5220, 1212, 5535, 2945, 9397, 15095, 2]
// Exports: openFavoritesGuildAddActionSheet

// Module 15093 (handleAddToFavorites)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
function handleAddToFavorites() {
  importDefault(4133).hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = importDefault(4133);
  const result = require(11857) /* AddFavoriteChannelModal */.openAddFavoriteChannelModal({ source: "favorites_header_add_button_context_menu" });
}
function handleCreateCategory() {
  importDefault(4133).hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = importDefault(4133);
  const result = require(15094) /* AddFavoriteCategoryActionSheet */.openAddFavoriteCategoryActionSheet();
}
function FavoritesGuildAddActionSheet() {
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.wMWyci);
  obj.header = callback(require(5220) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true };
  const obj1 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl2.string(importDefault(2945).G9fGlP);
  const obj2 = { IconComponent: require(9397) /* StarOutlineIcon */.StarOutlineIcon };
  obj1.icon = callback(require(5535) /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj2);
  obj1.onPress = handleAddToFavorites;
  obj.children = callback(require(5535) /* ActionSheetRowIcon */.ActionSheetRow, obj1);
  const items = [callback(require(5535) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj), ];
  const obj3 = { hasIcons: true };
  const obj4 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj4.label = intl3.string(require(1212) /* getSystemLocale */.t["ISN+NM"]);
  const obj5 = { IconComponent: require(15095) /* FolderPlusIcon */.FolderPlusIcon };
  obj4.icon = callback(require(5535) /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj5);
  obj4.onPress = handleCreateCategory;
  obj3.children = callback(require(5535) /* ActionSheetRowIcon */.ActionSheetRow, obj4);
  items[1] = callback(require(5535) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj3);
  obj.children = items;
  return callback2(require(5533) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
let result = require("showActionSheet").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  let obj = require(4133) /* showActionSheet */;
  obj = { content: callback(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet };
  obj.showActionSheet(obj);
};
