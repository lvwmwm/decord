// Module ID: 13642
// Function ID: 104774
// Name: EditProfileThemeActionSheet
// Dependencies: [31, 33, 4130, 689, 5498, 5186, 1212, 1273, 5501, 5165, 4098, 2]
// Exports: default

// Module 13642 (EditProfileThemeActionSheet)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, marginLeft: 4, width: 20, height: 20 };
_createForOfIteratorHelperLoose.nitroWheel = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.titleWrapper = { flex: 0 };
_createForOfIteratorHelperLoose.titleContainer = { justifyContent: "flex-start" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default function EditProfileThemeActionSheet(onResetTheme) {
  onResetTheme = onResetTheme.onResetTheme;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = {};
  const intl = onResetTheme(1212).intl;
  obj.title = intl.string(onResetTheme(1212).t.DMeO2X);
  obj = { style: tmp.nitroWheel };
  obj.trailing = callback(onResetTheme(1273).NitroWheel, obj);
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  const items = [callback(onResetTheme(5186).BottomSheetTitleHeader, obj), ];
  const obj1 = { hasIcons: false };
  const obj2 = {};
  const intl2 = onResetTheme(1212).intl;
  obj2.label = intl2.string(onResetTheme(1212).t["L+GmoR"]);
  const intl3 = onResetTheme(1212).intl;
  obj2.subLabel = intl3.string(onResetTheme(1212).t.MA9iNr);
  obj2.onPress = function onPress() {
    onResetTheme();
    outer1_1(outer1_2[10]).hideActionSheet();
  };
  obj1.children = callback(onResetTheme(5165).TableRow, obj2);
  items[1] = callback(onResetTheme(5501).TableRowGroup, obj1);
  obj.children = items;
  return callback2(onResetTheme(5498).ActionSheet, obj);
};
