// Module ID: 5170
// Function ID: 44995
// Name: TableRowIcon
// Dependencies: [29, 31, 27, 33, 4130, 689, 4545, 2]
// Exports: TableRowIcon

// Module 5170 (TableRowIcon)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_3 = ["color"];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_ICON_SIZE, height: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.default = { color: require("_createForOfIteratorHelperLoose").colors.TABLEROW_ICON_COLOR_DEFAULT };
const obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TABLEROW_ICON_COLOR_DEFAULT };
_createForOfIteratorHelperLoose.statusOnline = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_ONLINE };
const obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_ONLINE };
_createForOfIteratorHelperLoose.statusIdle = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_IDLE };
const obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_IDLE };
_createForOfIteratorHelperLoose.statusDND = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_DND };
const obj4 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_DND };
_createForOfIteratorHelperLoose.statusOffline = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_OFFLINE };
const obj5 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_OFFLINE };
_createForOfIteratorHelperLoose.xbox = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_XBOX, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
const obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_XBOX, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.playstation = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_PLAYSTATION, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
const obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_PLAYSTATION, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.danger = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
const obj8 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.secondary = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const obj9 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.translucent = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj10 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/TableRow/native/TableRowIcon.native.tsx");

export const TableRowIcon = function TableRowIcon(arg0) {
  let IconComponent;
  let source;
  let variant;
  ({ source, IconComponent, variant } = arg0);
  if (variant === undefined) {
    variant = "default";
  }
  const tmp = _createForOfIteratorHelperLoose();
  if ("default" === variant) {
    let translucent = tmp.default;
  } else if ("text-status-online" === variant) {
    translucent = tmp.statusOnline;
  } else if ("text-status-idle" === variant) {
    translucent = tmp.statusIdle;
  } else if ("text-status-dnd" === variant) {
    translucent = tmp.statusDND;
  } else if ("text-status-offline" === variant) {
    translucent = tmp.statusOffline;
  } else if ("xbox" === variant) {
    translucent = tmp.xbox;
  } else if ("playstation" === variant) {
    translucent = tmp.playstation;
  } else if ("danger" === variant) {
    translucent = tmp.danger;
  } else if ("secondary" === variant) {
    translucent = tmp.secondary;
  } else if ("translucent" === variant) {
    translucent = tmp.translucent;
  }
  const color = translucent.color;
  if ("default" === variant) {
    let REFRESH_SMALL_16 = require(4545) /* getIconSize */.IconSizes.MEDIUM;
  } else {
    REFRESH_SMALL_16 = require(4545) /* getIconSize */.IconSizes.REFRESH_SMALL_16;
  }
  let str8 = "md";
  if ("default" !== variant) {
    str8 = "md";
    if ("danger" !== variant) {
      str8 = "md";
      if ("secondary" !== variant) {
        str8 = "md";
        if ("translucent" !== variant) {
          str8 = "sm";
        }
      }
    }
  }
  if (null == source) {
    if (null == IconComponent) {
      return null;
    }
  }
  let obj = { style: items };
  items = [tmp.container, callback(translucent, closure_3)];
  if (null != IconComponent) {
    obj = { size: str8, color };
    let tmp13 = <IconComponent size={str8} color={color} />;
  } else {
    obj = { color, source, size: REFRESH_SMALL_16 };
    tmp13 = jsx(importDefault(4545), { color, source, size: REFRESH_SMALL_16 });
  }
  obj.children = tmp13;
  <View style={items} />;
};
