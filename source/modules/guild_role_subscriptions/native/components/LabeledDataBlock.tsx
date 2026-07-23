// Module ID: 14109
// Function ID: 108538
// Name: LabeledDataBlock
// Dependencies: [31, 27, 653, 33, 4130, 689, 5052, 4126, 4660, 1273, 2]
// Exports: default

// Module 14109 (LabeledDataBlock)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { marginRight: 4 };
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
_createForOfIteratorHelperLoose.data = {};
_createForOfIteratorHelperLoose.titleSection = { flexDirection: "row", alignItems: "center", marginBottom: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = {};
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default function LabeledDataBlock(arg0) {
  let children;
  let icon;
  let onPressIcon;
  let style;
  let title;
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.container, style];
  obj = { style: tmp.titleSection };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title };
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  let tmp4 = null != icon;
  if (tmp4) {
    const obj1 = { accessibilityRole: "button", onPress: onPressIcon };
    const obj2 = { size: require(1273) /* Button */.Icon.Sizes.SMALL, source: icon };
    obj1.children = callback(require(1273) /* Button */.Icon, obj2);
    tmp4 = callback(require(4660) /* PressableBase */.PressableOpacity, obj1);
  }
  items1[1] = tmp4;
  obj.children = items1;
  const items2 = [closure_4(View, obj), ];
  let tmp8 = children;
  if ("string" === typeof children) {
    const obj3 = { style: tmp.data, children };
    tmp8 = callback(require(1273) /* Button */.LegacyText, obj3);
  }
  items2[1] = tmp8;
  obj.children = items2;
  return closure_4(View, obj);
};
