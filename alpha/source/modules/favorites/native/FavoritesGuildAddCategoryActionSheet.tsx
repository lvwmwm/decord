// Module ID: 18200
// Function ID: 18201
// Name: FavoritesGuildAddCategoryActionSheet
// Dependencies: [32, 19, 4876, 21, 5014, 575, 4888, 10831, 5258, 5272, 7321, 1113, 7082, 5634, 2]
// Exports: openFavoritesGuildAddCategoryActionSheet

// Module 18200 (FavoritesGuildAddCategoryActionSheet)
import nativeDefault from "native" /* 575 */;
import FavoritesConstants from "FavoritesConstants" /* 4876 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10831 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  let obj = value(4888);
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
  BottomSheet = value(5272).BottomSheet;
  obj3 = { title: intl.string(value(1113).t["ISN+NM"]) };
  BottomSheetTitleHeader = value(7321).BottomSheetTitleHeader;
  intl = value(1113).intl;
  const obj4 = { label: intl2.string(value(1113).t.OCAkGP), placeholder: intl3.string(value(1113).t.eTVbtx), value, onChange: tmp4, maxLength, autoFocus: true, clearable: true, returnKeyType: "done", onSubmitEditing: callback };
  const TextInput = value(7082).TextInput;
  intl2 = value(1113).intl;
  intl3 = value(1113).intl;
  items1 = [closure_6(TextInput, obj4), ];
  const obj5 = { text: intl4.string(value(1113).t.CumH4u), onPress: callback, disabled: !result };
  const Button = value(5634).Button;
  intl4 = value(1113).intl;
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

export function openFavoritesGuildAddCategoryActionSheet() {
  const obj = ActionSheetActionCreators;
  const obj2 = { content: metroRequire(FavoritesGuildAddCategoryActionSheet, {}), key: FavoritesGuildAddCategoryActionSheet_str };
  obj.showActionSheet(obj2);
}
