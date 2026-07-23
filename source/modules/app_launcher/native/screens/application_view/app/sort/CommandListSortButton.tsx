// Module ID: 11272
// Function ID: 87654
// Name: CommandListSortButton
// Dependencies: [31, 27, 11258, 1277, 33, 4130, 689, 1212, 4660, 4098, 11273, 1934, 4126, 8525, 2]
// Exports: default

// Module 11272 (CommandListSortButton)
import "result";
import { View } from "get ActivityIndicator";
import { CommandListSortOrder } from "CommandListSortOrder";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { gap: 4, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
_createForOfIteratorHelperLoose.button = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("CommandListSortOrder").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx");

export default function CommandListSortButton(sortOrder) {
  sortOrder = sortOrder.sortOrder;
  const onSortOptionPress = sortOrder.onSortOptionPress;
  const tmp = _createForOfIteratorHelperLoose();
  if (CommandListSortOrder.POPULAR === sortOrder) {
    const intl2 = sortOrder(1212).intl;
    let stringResult = intl2.string(sortOrder(1212).t.SzxiqK);
  } else if (CommandListSortOrder.ALPHABETICAL === sortOrder) {
    const intl = sortOrder(1212).intl;
    stringResult = intl.string(sortOrder(1212).t.m8xsti);
  }
  let obj = {
    accessibilityRole: "button",
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    activeOpacity: 0.8,
    style: tmp.container,
    onPress() {
      let obj = onSortOptionPress(outer1_2[9]);
      obj = {
        sortOrder,
        onSortOptionPress,
        onClose() {
          onSortOptionPress(outer2_2[9]).hideActionSheet("CommandListSortActionSheet");
        }
      };
      obj.openLazy(sortOrder(outer1_2[11])(outer1_2[10], outer1_2.paths), "CommandListSortActionSheet", obj);
    }
  };
  obj = { style: tmp.button };
  obj = { variant: "text-sm/medium", color: "text-default", children: stringResult };
  const items = [callback(sortOrder(4126).Text, obj), ];
  const obj1 = { size: "xs", color: onSortOptionPress(689).colors.TEXT_DEFAULT };
  items[1] = callback(sortOrder(8525).ChevronSmallDownIcon, obj1);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(sortOrder(4660).PressableOpacity, obj);
};
