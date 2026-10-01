// Module ID: 15785
// Function ID: 15786
// Name: FavoritesGuildAddCategoryActionSheet
// Dependencies: [32, 19, 2058, 21, 4836, 576, 2070, 9684, 4800, 6571, 6570, 1115, 6024, 5281, 2]
// Exports: openFavoritesGuildAddCategoryActionSheet

// Module 15785 (FavoritesGuildAddCategoryActionSheet)
import nativeDefault from "native" /* 576 */;
import FavoritesConstants from "FavoritesConstants" /* 2058 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9684 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let BottomSheet, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function FavoritesGuildAddCategoryActionSheet() {
  let BottomSheetTitleHeader;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let obj3;
  let tmp4;
  let value;
  let tmp = closure_9();
  [value, tmp4] = react.useState("");
  let obj = value(2070);
  const result = obj.isFavoritesGuildCategoryNameValid(value);
  importDefault = result;
  const items = [result, value];
  const callback = react.useCallback(() => {
    const tmp = importDefault;
    if (tmp) {
      const obj = FavoritesActionCreators;
      obj.addFavoriteCategory(first);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet(FavoritesGuildAddCategoryActionSheet_str);
    }
  }, items);
  let obj2 = { contentStyles: tmp.content, bodyStyles: tmp.body, keyboardShouldPersistTaps: "always", header: closure_6(BottomSheetTitleHeader, obj3), children: items1 };
  BottomSheet = value(6571).BottomSheet;
  obj3 = { title: intl.string(value(1115).t["ISN+NM"]) };
  BottomSheetTitleHeader = value(6570).BottomSheetTitleHeader;
  intl = value(1115).intl;
  const obj4 = { label: intl2.string(value(1115).t.OCAkGP), placeholder: intl3.string(value(1115).t.eTVbtx), value, onChange: tmp4, maxLength, autoFocus: true, clearable: true, returnKeyType: "done", onSubmitEditing: callback };
  const TextInput = value(6024).TextInput;
  intl2 = value(1115).intl;
  intl3 = value(1115).intl;
  items1 = [closure_6(TextInput, obj4), ];
  const obj5 = { text: intl4.string(value(1115).t.CumH4u), onPress: callback, disabled: !result };
  const Button = value(5281).Button;
  intl4 = value(1115).intl;
  items1[1] = closure_6(Button, obj5);
  return closure_7(BottomSheet, obj2);
}
const maxLength = FavoritesConstants.MAX_FAVORITE_CATEGORY_NAME_LENGTH;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const FavoritesGuildAddCategoryActionSheet_str = "FavoritesGuildAddCategoryActionSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, body: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx");

export const openFavoritesGuildAddCategoryActionSheet = function openFavoritesGuildAddCategoryActionSheet() {
  const obj = ActionSheetActionCreators;
  const obj2 = { content: metroRequire(FavoritesGuildAddCategoryActionSheet, {}), key: FavoritesGuildAddCategoryActionSheet_str };
  obj.showActionSheet(obj2);
};
