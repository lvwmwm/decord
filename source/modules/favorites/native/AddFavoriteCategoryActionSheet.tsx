// Module ID: 15054
// Function ID: 114689
// Name: AddFavoriteCategoryActionSheet
// Dependencies: [57, 31, 1386, 33, 4131, 689, 1841, 10151, 4099, 5187, 5186, 1212, 6670, 4544, 2]
// Exports: openAddFavoriteCategoryActionSheet

// Module 15054 (AddFavoriteCategoryActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { MAX_FAVORITE_CATEGORY_NAME_LENGTH as closure_5 } from "date";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function AddFavoriteCategoryActionSheet() {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  let obj = first(1841);
  const result = obj.isFavoritesGuildCategoryNameValid(first);
  const importDefault = result;
  const items = [result, first];
  callback = React.useCallback(() => {
    if (closure_1) {
      first(outer1_2[7]).addFavoriteCategory(first, "modal");
      const obj = first(outer1_2[7]);
      result(outer1_2[8]).hideActionSheet(outer1_8);
      const obj2 = result(outer1_2[8]);
    }
  }, items);
  obj = { contentStyles: tmp.content, bodyStyles: tmp.body, keyboardShouldPersistTaps: "always" };
  obj = {};
  const intl = first(1212).intl;
  obj.title = intl.string(first(1212).t["ISN+NM"]);
  obj.header = callback2(first(5186).BottomSheetTitleHeader, obj);
  const obj1 = {};
  const intl2 = first(1212).intl;
  obj1.label = intl2.string(first(1212).t.OCAkGP);
  const intl3 = first(1212).intl;
  obj1.placeholder = intl3.string(first(1212).t.eTVbtx);
  obj1.value = first;
  obj1.onChange = tmp2[1];
  obj1.maxLength = closure_5;
  obj1.autoFocus = true;
  obj1.isClearable = true;
  obj1.returnKeyType = "done";
  obj1.onSubmitEditing = callback;
  const items1 = [callback2(first(6670).TextInput, obj1), ];
  let obj2 = {};
  const intl4 = first(1212).intl;
  obj2.text = intl4.string(first(1212).t.CumH4u);
  obj2.onPress = callback;
  obj2.disabled = !result;
  items1[1] = callback2(first(4544).Button, obj2);
  obj.children = items1;
  return callback3(first(5187).BottomSheet, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
AddFavoriteCategoryActionSheet = "AddFavoriteCategoryActionSheet";
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.body = { gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("date").fileFinishedImporting("modules/favorites/native/AddFavoriteCategoryActionSheet.tsx");

export const openAddFavoriteCategoryActionSheet = function openAddFavoriteCategoryActionSheet() {
  let obj = require(4099) /* showActionSheet */;
  obj = { content: callback2(AddFavoriteCategoryActionSheet, {}), key: AddFavoriteCategoryActionSheet };
  obj.showActionSheet(obj);
};
