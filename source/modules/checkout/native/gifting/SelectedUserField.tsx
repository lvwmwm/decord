// Module ID: 8815
// Function ID: 69481
// Name: SelectedUserField
// Dependencies: [31, 27, 33, 4130, 689, 5780, 1212, 3969, 5786, 1273, 4126, 5776, 2]
// Exports: default

// Module 8815 (SelectedUserField)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Pressable: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" };
let obj1 = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: 6 };
_createForOfIteratorHelperLoose.opener = obj1;
_createForOfIteratorHelperLoose.openerWithClearButton = { paddingRight: 0 };
_createForOfIteratorHelperLoose.searchIcon = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
_createForOfIteratorHelperLoose.userPill = obj3;
_createForOfIteratorHelperLoose.userPillText = { marginLeft: 6 };
let obj4 = { alignItems: "center", justifyContent: "center", minWidth: 44, minHeight: 44, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_16, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.clearButton = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default function SelectedUserField(onPress) {
  let require;
  let selectedUser;
  ({ selectedUser, setSelectedUser: require } = onPress);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = {};
  obj = { style: tmp.content };
  const obj1 = {};
  const items = [tmp.opener, ];
  let openerWithClearButton = null != selectedUser;
  if (openerWithClearButton) {
    openerWithClearButton = tmp.openerWithClearButton;
  }
  items[1] = openerWithClearButton;
  obj1.style = items;
  obj1.onPress = onPress.onPress;
  obj1.accessibilityRole = "button";
  if (null != selectedUser) {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj4 = importDefault(3969);
    const _HermesInternal = HermesInternal;
    let combined = "" + intl.string(require(1212) /* getSystemLocale */.t.xFn72s) + ", " + obj4.getName(selectedUser);
    const stringResult = intl.string(require(1212) /* getSystemLocale */.t.xFn72s);
  } else {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const intl5 = require(1212) /* getSystemLocale */.intl;
    const _HermesInternal2 = HermesInternal;
    combined = "" + intl4.string(require(1212) /* getSystemLocale */.t.xFn72s) + ", " + intl5.string(require(1212) /* getSystemLocale */.t.R0vK0N);
    const stringResult1 = intl4.string(require(1212) /* getSystemLocale */.t.xFn72s);
  }
  obj1.accessibilityLabel = combined;
  const obj2 = { style: tmp.searchIcon, size: "xs", color: "interactive-text-default" };
  const items1 = [callback(require(5786) /* MagnifyingGlassIcon */.MagnifyingGlassIcon, obj2), ];
  if (null != selectedUser) {
    const obj3 = { style: tmp.userPill };
    obj4 = { user: selectedUser, guildId: undefined, size: require(1273) /* Button */.AvatarSizes.XSMALL_20 };
    const items2 = [callback(require(1273) /* Button */.Avatar, obj4), ];
    const obj5 = { variant: "text-md/medium", style: tmp.userPillText, children: importDefault(3969).getName(selectedUser) };
    items2[1] = callback(require(4126) /* Text */.Text, obj5);
    obj3.children = items2;
    let tmp15 = callback2(closure_4, obj3);
    const obj11 = importDefault(3969);
  } else {
    const obj6 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.userPillText };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj6.children = intl2.string(require(1212) /* getSystemLocale */.t.R0vK0N);
    tmp15 = callback(require(4126) /* Text */.Text, obj6);
  }
  items1[1] = tmp15;
  obj1.children = items1;
  const items3 = [callback2(closure_3, obj1), ];
  let tmp22 = null;
  if (null != selectedUser) {
    const obj7 = {
      style: tmp.clearButton,
      onPress() {
          return callback(undefined);
        },
      accessibilityRole: "button"
    };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj8 = { text: importDefault(3969).getName(selectedUser) };
    obj7.accessibilityLabel = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["0Vb9FQ"], obj8);
    const obj9 = { size: "xs" };
    obj7.children = callback(require(5776) /* CircleXIcon */.CircleXIcon, obj9);
    tmp22 = callback(closure_3, obj7);
    const obj14 = importDefault(3969);
  }
  items3[1] = tmp22;
  obj.children = items3;
  obj.children = callback2(closure_4, obj);
  obj.children = callback(require(5780) /* useInputStyles */.InputFieldContainer, obj);
  return callback(closure_4, obj);
};
