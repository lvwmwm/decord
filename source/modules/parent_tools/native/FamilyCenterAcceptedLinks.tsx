// Module ID: 13869
// Function ID: 106177
// Name: FamilyCenterAcceptedLinkRow
// Dependencies: [31, 27, 6770, 33, 4130, 689, 7123, 7122, 11091, 1212, 2198, 4126, 13870, 13872, 4660, 4337, 13875, 1934, 1273, 13877, 2]
// Exports: default

// Module 13869 (FamilyCenterAcceptedLinkRow)
import "result";
import { View } from "get ActivityIndicator";
import items from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function FamilyCenterAcceptedLinkRow(otherUser) {
  let str = otherUser.otherUser;
  let tmp8Result = null;
  if (undefined !== str) {
    let obj = { otherUser: str };
    obj = { accessibilityRole: "button" };
    const intl = str(1212).intl;
    const obj1 = {};
    str = undefined;
    if (null != str) {
      str = str.toString();
    }
    obj1.name = str;
    obj.accessibilityLabel = intl.formatToPlainString(importDefault(2198).T7DUoU, obj1);
    obj.onPress = function onPress() {
      let obj = outer1_1(outer1_2[15]);
      obj = { otherUser: str };
      obj.pushLazy(str(outer1_2[17])(outer1_2[16], outer1_2.paths), obj);
    };
    obj.style = tmp.actionButton;
    obj = { size: str(1273).Icon.Sizes.SMALL, disableColor: true, source: importDefault(13877) };
    obj.children = callback(str(1273).Icon, obj);
    obj.actions = callback(str(4660).PressableOpacity, obj);
    tmp8Result = callback(importDefault(13872), obj);
    const tmp11 = importDefault(13872);
    const tmp12 = callback;
    const tmp8 = callback;
  }
  return tmp8Result;
}
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_5 } = items);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginTop: 24 } };
_createForOfIteratorHelperLoose = { display: "flex", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.empty = { padding: 20, alignSelf: "center" };
_createForOfIteratorHelperLoose.header = { marginBottom: 10 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = {};
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj1.actionButton = obj2;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj1);
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default function FamilyCenterAcceptedLinks() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(7122) /* useUserIdsForLinkStatus */;
  const activeLinkUsers = obj.useActiveLinkUsers();
  obj = { count: activeLinkUsers.length, max: importDefault(7123)() ? closure_4 : closure_5 };
  let obj2 = require(11091) /* useAgeSpecificText */;
  const intl = require(1212) /* getSystemLocale */.intl;
  const tmp2 = importDefault(7123)();
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = { style: tmp.container };
  const ageSpecificText = obj2.useAgeSpecificText(intl.formatToPlainString(importDefault(2198)["+tnO34"], obj), intl2.formatToPlainString(importDefault(2198)["pu6/U0"], obj));
  const obj1 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: ageSpecificText };
  const items = [callback(require(4126) /* Text */.Text, obj1), ];
  obj2 = { style: tmp.content };
  if (0 === activeLinkUsers.length) {
    const obj3 = { style: tmp.empty };
    const obj4 = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj4.text = intl3.string(importDefault(2198).C4ScLD);
    obj3.children = callback(importDefault(13870), obj4);
    let mapped = callback(View, obj3);
    const tmp14 = importDefault(13870);
  } else {
    mapped = activeLinkUsers.map((id) => outer1_6(outer1_10, { otherUser: id }, "accepted-" + id.id));
  }
  obj2.children = mapped;
  items[1] = callback(View, obj2);
  obj.children = items;
  return closure_7(View, obj);
};
