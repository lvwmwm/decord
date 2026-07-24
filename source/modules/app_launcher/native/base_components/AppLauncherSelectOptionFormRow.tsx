// Module ID: 11328
// Function ID: 88151
// Name: AppLauncherSelectOptionFormRow
// Dependencies: [31, 33, 4130, 689, 11321, 7636, 4126, 1273, 5173, 2]
// Exports: default

// Module 11328 (AppLauncherSelectOptionFormRow)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignItems: "center", flex: 1 };
_createForOfIteratorHelperLoose.formRow = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default function AppLauncherSelectOptionFormRow(arg0) {
  let autoFocus;
  let option;
  let require;
  let selected;
  let style;
  let unselectedSubLabel;
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  let obj = { style: 0, option: 0, selected: 0, selectedItemName: 0, unselectedSubLabel: 0, autoFocus: 0 };
  ({ style, option, autoFocus } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  let obj1 = require(11321) /* useAnimationDelayedAutoFocus */;
  const animationDelayedAutoFocus = obj1.useAnimationDelayedAutoFocus(autoFocus, merged.onPress);
  obj = { start: true, end: true };
  const items = [_createForOfIteratorHelperLoose().formRow, style];
  obj.style = items;
  obj = {};
  let str = "text-md/medium";
  if (selected) {
    str = "text-sm/medium";
  }
  obj.variant = str;
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  obj.color = str2;
  obj.lineClamp = 1;
  obj.children = option.displayName;
  obj.label = jsx(require(4126) /* Text */.Text, {});
  if (selected) {
    let fn = () => {
      const obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: closure_0 };
      return outer1_3(outer1_0(outer1_2[6]).Text, obj);
    };
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () => {
        const obj = { variant: "text-sm/normal", color: "text-muted", lineClamp: 1, children: unselectedSubLabel };
        return outer1_3(outer1_0(outer1_2[6]).Text, obj);
      };
    }
  }
  obj.subLabel = fn;
  obj1 = { source: unselectedSubLabel(5173), size: require(1273) /* Button */.IconSizes.SMALL_20 };
  obj.trailing = jsx(require(1273) /* Button */.Icon, { source: unselectedSubLabel(5173), size: require(1273) /* Button */.IconSizes.SMALL_20 });
  const merged1 = Object.assign(merged);
  return jsx(require(7636) /* Form */.FormRow, {});
};
