// Module ID: 12013
// Function ID: 92873
// Name: UserProfileWidgetsBoardEditNotice
// Dependencies: [31, 27, 1345, 33, 4130, 689, 8282, 1324, 9678, 1334, 4086, 4126, 1212, 4660, 5119, 2]
// Exports: default

// Module 12013 (UserProfileWidgetsBoardEditNotice)
import "result";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { flexShrink: 0, marginTop: 2 };
_createForOfIteratorHelperLoose.text = { flex: 1 };
_createForOfIteratorHelperLoose.closeButton = { flexShrink: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ContentDismissActionType").fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardEditNotice.tsx");

export default function UserProfileWidgetsBoardEditNotice() {
  const _require = _createForOfIteratorHelperLoose();
  importDefault = importDefault(8282)();
  const dependencyMap = importDefault(1324)("UserProfileWidgetsBoardEditNotice");
  let obj = {};
  let items = [_require(1334).DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE];
  obj.contentTypes = items;
  obj.bypassAutoDismiss = true;
  obj.children = function children(markAsDismissed) {
    markAsDismissed = markAsDismissed.markAsDismissed;
    let tmp = null;
    if (markAsDismissed.visibleContent === callback(1334).DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE) {
      let obj = {};
      const items = [lib.card, markAsDismissed.container];
      obj.style = items;
      obj = { style: markAsDismissed.icon };
      const obj1 = { size: "xs", color: lib(689).colors.TEXT_MUTED };
      obj.children = outer1_5(callback(4086).CircleInformationIcon, obj1);
      const items1 = [outer1_5(outer1_3, obj), , ];
      const obj2 = { style: markAsDismissed.text };
      let str = "text-sm/semibold";
      if (dependencyMap) {
        str = "text-sm/medium";
      }
      obj2.variant = str;
      let str2 = "text-default";
      if (dependencyMap) {
        str2 = "text-strong";
      }
      obj2.color = str2;
      const intl = callback(1212).intl;
      obj2.children = intl.string(callback(1212).t.kv8ULD);
      items1[1] = outer1_5(callback(4126).Text, obj2);
      obj = { accessibilityRole: "button" };
      const intl2 = callback(1212).intl;
      obj.accessibilityLabel = intl2.string(callback(1212).t.WAI6xu);
      obj.onPress = function onPress() {
        return markAsDismissed(outer2_4.USER_DISMISS);
      };
      obj.style = markAsDismissed.closeButton;
      const obj3 = { size: "sm" };
      obj.children = outer1_5(callback(5119).XSmallIcon, obj3);
      items1[2] = outer1_5(callback(4660).PressableOpacity, obj);
      obj.children = items1;
      tmp = outer1_6(outer1_3, obj);
      const tmp11 = outer1_5;
      const tmp7 = outer1_6;
      const tmp8 = outer1_3;
    }
    return tmp;
  };
  return callback(importDefault(9678), obj);
};
