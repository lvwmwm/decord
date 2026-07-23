// Module ID: 11996
// Function ID: 92696
// Name: UserProfileWidgetReportButton
// Dependencies: [31, 27, 33, 1212, 9417, 7600, 9302, 8968, 689, 2]
// Exports: default

// Module 11996 (UserProfileWidgetReportButton)
import "result";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_5 = { top: 8, bottom: 8, left: 8, right: 8 };
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileWidgetReportButton.tsx");

export default function UserProfileWidgetReportButton(arg0) {
  let importDefault;
  let require;
  ({ userId: require, widget: importDefault } = arg0);
  let obj = {};
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.D4GvHE);
  obj.variant = "destructive";
  obj.IconComponent = require(9417) /* FlagIcon */.FlagIcon;
  obj.action = function action() {
    return outer1_0(outer1_2[5]).showReportModalForWidget(closure_0, closure_1);
  };
  const items = [obj];
  obj = {
    items,
    children(ref) {
      let obj = Object.create(null);
      obj.ref = 0;
      obj = { ref: ref.ref };
      const merged = Object.assign(Object.assign(ref, obj));
      obj["hitSlop"] = outer1_5;
      obj["accessibilityRole"] = "button";
      const intl = outer1_0(outer1_2[3]).intl;
      obj["accessibilityLabel"] = intl.string(outer1_0(outer1_2[3]).t.xpSHSk);
      obj = { size: "sm", color: outer1_1(outer1_2[8]).colors.TEXT_MUTED };
      obj["children"] = outer1_4(outer1_0(outer1_2[7]).MoreHorizontalIcon, obj);
      return outer1_4(outer1_3, obj);
    }
  };
  return jsx(require(9302) /* ContextMenu */.ContextMenu, {
    items,
    children(ref) {
      let obj = Object.create(null);
      obj.ref = 0;
      obj = { ref: ref.ref };
      const merged = Object.assign(Object.assign(ref, obj));
      obj["hitSlop"] = outer1_5;
      obj["accessibilityRole"] = "button";
      const intl = outer1_0(outer1_2[3]).intl;
      obj["accessibilityLabel"] = intl.string(outer1_0(outer1_2[3]).t.xpSHSk);
      obj = { size: "sm", color: outer1_1(outer1_2[8]).colors.TEXT_MUTED };
      obj["children"] = outer1_4(outer1_0(outer1_2[7]).MoreHorizontalIcon, obj);
      return outer1_4(outer1_3, obj);
    }
  });
};
