// Module ID: 13827
// Function ID: 105884
// Name: FamilyCenterPendingLinkRow
// Dependencies: [31, 27, 6770, 33, 4130, 689, 7123, 11064, 1212, 2198, 4126, 7124, 4660, 4337, 13828, 1934, 1273, 10332, 13829, 13826, 13830, 13821, 2]
// Exports: default

// Module 13827 (FamilyCenterPendingLinkRow)
import "result";
import { View } from "get ActivityIndicator";
import { UserLinkStatus } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function FamilyCenterPendingLinkRow(otherUser) {
  let str = otherUser.otherUser;
  const tmp = callback3();
  str(7123);
  if (undefined === str) {
    return null;
  } else {
    if (tmp2) {
      let obj = { accessibilityRole: "button" };
      const intl3 = str(1212).intl;
      obj = {};
      str = undefined;
      if (null != str) {
        str = str.toString();
      }
      obj.name = str;
      obj.accessibilityLabel = intl3.formatToPlainString(importDefault(2198).oUpA6X, obj);
      obj.onPress = function onPress() {
        let obj = outer1_1(outer1_2[13]);
        obj = { otherUser: str };
        obj.pushLazy(str(outer1_2[15])(outer1_2[20], outer1_2.paths), obj);
      };
      obj.style = tmp.actionButton;
      const obj1 = { size: str(1273).Icon.Sizes.SMALL, disableColor: true, source: importDefault(13826) };
      obj.children = callback(str(1273).Icon, obj1);
      let tmp5Result = callback(str(4660).PressableOpacity, obj);
      const tmp28 = callback;
    } else {
      obj = {};
      let tmp9Result = null;
      if (!tmp4) {
        const obj2 = {};
        let str2 = "button";
        obj2.accessibilityRole = "button";
        const intl = str(1212).intl;
        const obj3 = {};
        let str1;
        if (null != str) {
          str1 = str.toString();
        }
        obj3.name = str1;
        obj2.accessibilityLabel = intl.formatToPlainString(importDefault(2198).jc1Ip7, obj3);
        obj2.onPress = function onPress() {
          let obj = outer1_1(outer1_2[13]);
          obj = { otherUser: str };
          obj.pushLazy(str(outer1_2[15])(outer1_2[14], outer1_2.paths), obj);
        };
        const items = [, ];
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj2.style = items;
        const obj4 = { size: str(1273).Icon.Sizes.SMALL, disableColor: true, source: importDefault(10332) };
        obj2.children = callback(str(1273).Icon, obj4);
        tmp9Result = callback(str(4660).PressableOpacity, obj2);
        const tmp9 = callback;
      }
      const items1 = [tmp9Result, ];
      const obj5 = { accessibilityRole: "button" };
      const intl2 = str(1212).intl;
      const obj6 = {};
      str2 = undefined;
      if (null != str) {
        str2 = str.toString();
      }
      obj6.name = str2;
      obj5.accessibilityLabel = intl2.formatToPlainString(importDefault(2198)["4GtllP"], obj6);
      obj5.onPress = function onPress() {
        let obj = outer1_1(outer1_2[13]);
        obj = { otherUser: str };
        obj.pushLazy(str(outer1_2[15])(outer1_2[18], outer1_2.paths), obj);
      };
      obj5.style = tmp.actionButton;
      const obj7 = { size: str(1273).Icon.Sizes.SMALL, disableColor: true, source: importDefault(13826) };
      obj5.children = callback(str(1273).Icon, obj7);
      items1[1] = callback(str(4660).PressableOpacity, obj5);
      obj.children = items1;
      tmp5Result = closure_6(closure_7, obj);
      const tmp18 = callback;
      const tmp5 = closure_6;
      const tmp6 = closure_7;
    }
    const obj8 = { otherUser: str, actions: tmp5Result };
    return callback(importDefault(13821), obj8);
  }
  tmp2 = importDefault(7124)();
}
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginTop: 24 } };
_createForOfIteratorHelperLoose = { display: "flex", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { marginBottom: 10 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = {};
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj1.actionButton = obj2;
_createForOfIteratorHelperLoose = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj1.actionButtonFirst = _createForOfIteratorHelperLoose;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj1);
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterPendingLinks.tsx");

export default function FamilyCenterPendingLinks() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(7123) /* useUserIdsForLinkStatus */;
  const usersForLinkStatus = obj.useUsersForLinkStatus(UserLinkStatus.PENDING);
  require(11064) /* useAgeSpecificText */;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { count: usersForLinkStatus.length };
  intl.formatToPlainString(importDefault(2198).IkAgkG, obj);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  let tmp5 = null;
  if (0 !== usersForLinkStatus.length) {
    obj = { style: tmp.container };
    const obj1 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: tmp4 };
    const items = [callback(require(4126) /* Text */.Text, obj1), ];
    const obj2 = { style: tmp.content, children: usersForLinkStatus.map((id) => outer1_5(outer1_10, { otherUser: id }, "pending-" + id.id)) };
    items[1] = callback(View, obj2);
    obj.children = items;
    tmp5 = callback2(View, obj);
  }
  return tmp5;
};
