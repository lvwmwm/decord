// Module ID: 12903
// Function ID: 100131
// Name: LockedIcon
// Dependencies: [31, 653, 33, 4130, 5052, 689, 1273, 12904, 10681, 12905, 8474, 2]
// Exports: default

// Module 12903 (LockedIcon)
import "result";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let closure_3;
let closure_4;
const require = arg1;
function LockedIcon() {
  const obj = { size: require(1273) /* Button */.Icon.Sizes.MEDIUM, source: importDefault(12904) };
  return callback(require(1273) /* Button */.Icon, obj);
}
function DropdownIcon() {
  const obj = { style: { transform: items } };
  items = [{ rotate: "90deg" }];
  obj.size = require(1273) /* Button */.Icon.Sizes.MEDIUM;
  obj.source = importDefault(10681);
  return callback(require(1273) /* Button */.Icon, obj);
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, 16));
_createForOfIteratorHelperLoose.placeholder = _createForOfIteratorHelperLoose;
const obj1 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, 16));
_createForOfIteratorHelperLoose.text = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  let disabled;
  let label;
  let leading;
  let onPress;
  let placeholder;
  ({ disabled, label, placeholder } = arg0);
  ({ leading, onPress } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(12905)();
  let obj = { style: items, accessibilityRole: "spinbutton", disabled };
  items = [tmp.container, tmp2.dropdownInput];
  let tmp6;
  const tmp3 = callback(disabled ? LockedIcon : DropdownIcon, {});
  const tmp4 = closure_4;
  if (!disabled) {
    tmp6 = onPress;
  }
  obj.onPress = tmp6;
  const items1 = [leading, , ];
  obj = { style: items2 };
  items2 = [tmp.content, null != label ? tmp.text : tmp.placeholder];
  if (null != label) {
    placeholder = label;
  }
  obj.children = placeholder;
  items1[1] = callback(require(1273) /* Button */.LegacyText, obj);
  items1[2] = tmp3;
  obj.children = items1;
  return tmp4(importDefault(8474), obj);
};
export const useFormDropdownStyles = _createForOfIteratorHelperLoose;
