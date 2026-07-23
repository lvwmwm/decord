// Module ID: 16421
// Function ID: 127964
// Name: FormBigRadioBox
// Dependencies: [31, 27, 33, 4130, 689, 3848, 8474, 1273, 4126, 2]
// Exports: default

// Module 16421 (FormBigRadioBox)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, alignSelf: "stretch", alignItems: "flex-start", padding: 16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.containerSelected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.indicator = { position: "absolute", right: 18, top: 18 };
let obj2 = { height: 40, width: 40, alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, justifyContent: "center", marginBottom: 16 };
_createForOfIteratorHelperLoose.iconContainer = obj2;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.iconContainerSelected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.title = { marginBottom: 2 };
_createForOfIteratorHelperLoose.disabled = { opacity: 0.5 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormBigRadioBox.tsx");

export default function FormBigRadioBox(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let description;
  let disabled;
  let icon;
  let onPress;
  let selected;
  let style;
  let title;
  ({ selected, disabled } = arg0);
  ({ description, icon, title, style, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3848) /* useCheckboxA11yNative */;
  obj = { selected, disabled };
  const radioA11yNative = obj.useRadioA11yNative(obj);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = {};
  const items = [tmp.container, , , ];
  let containerSelected = selected;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  items[1] = containerSelected;
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  items[2] = disabled2;
  items[3] = style;
  obj.style = items;
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  let tmp5;
  if (!disabled) {
    tmp5 = onPress;
  }
  obj.onPress = tmp5;
  const obj1 = { style: tmp.indicator, active: selected };
  const items1 = [callback(require(1273) /* Button */.RadioIndicator, obj1), , , ];
  const obj2 = {};
  const items2 = [tmp.iconContainer, ];
  if (selected) {
    selected = tmp.iconContainerSelected;
  }
  items2[1] = selected;
  obj2.style = items2;
  obj2.children = callback(require(1273) /* Button */.Icon, { source: icon });
  items1[1] = callback(View, obj2);
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "interactive-text-default", children: title };
  items1[2] = callback(require(4126) /* Text */.Text, obj3);
  const obj4 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
  items1[3] = callback(require(4126) /* Text */.Text, obj4);
  obj.children = items1;
  return closure_5(importDefault(8474), obj);
};
