// Module ID: 16281
// Function ID: 126751
// Name: GuildSettingsServerTagPickerCell
// Dependencies: [31, 27, 33, 4130, 689, 3848, 2]
// Exports: default

// Module 16281 (GuildSettingsServerTagPickerCell)
import "result";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
_createForOfIteratorHelperLoose.cell = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cellSelected = { borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500 };
const result = require("jsxProd").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx");

export default function GuildSettingsServerTagPickerCell(accessibilityLabel) {
  let accessibilityRole;
  let children;
  let onPress;
  let selected;
  let size;
  ({ size, selected, accessibilityRole } = accessibilityLabel);
  if (accessibilityRole === undefined) {
    accessibilityRole = "radio";
  }
  ({ onPress, children } = accessibilityLabel);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3848) /* useCheckboxA11yNative */;
  obj = { selected };
  let radioA11yNative = obj.useRadioA11yNative(obj);
  if ("button" === accessibilityRole) {
    obj = { accessibilityRole: "button" };
    const obj1 = { selected };
    obj.accessibilityState = obj1;
    radioA11yNative = obj;
  }
  const obj2 = {};
  ({ accessibilityRole: obj5.accessibilityRole, accessibilityState: obj5.accessibilityState } = radioA11yNative);
  obj2.accessibilityLabel = accessibilityLabel.accessibilityLabel;
  obj2.onPress = onPress;
  const items = [tmp.cell, , ];
  if (selected) {
    selected = tmp.cellSelected;
  }
  items[1] = selected;
  items[2] = { width: size, height: size };
  obj2.style = items;
  obj2.children = children;
  return <Pressable />;
};
