// Module ID: 11287
// Function ID: 87836
// Name: AppLauncherChoicesOption
// Dependencies: [57, 31, 33, 4130, 689, 1820, 4098, 11288, 1934, 11292, 7495, 4126, 2]
// Exports: default

// Module 11287 (AppLauncherChoicesOption)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignItems: "center", padding: 12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesOption.tsx");

export default function AppLauncherChoicesOption(option) {
  let autoFocus;
  let hasError;
  let importDefault;
  let onSelect;
  let style;
  option = option.option;
  ({ initialValue: importDefault, onSelect } = option);
  const onOpenChoicesSheet = option.onOpenChoicesSheet;
  const onDismissChoicesSheet = option.onDismissChoicesSheet;
  ({ style, autoFocus, hasError } = option);
  const tmp3 = onOpenChoicesSheet(onDismissChoicesSheet.useState(() => {
    if (null != type) {
      if ("text" === type.type) {
        const choices = option.choices;
        let found;
        if (null != choices) {
          found = choices.find((displayName) => displayName.displayName === outer1_1.text);
        }
        if (null != found) {
          const obj = { choice: found };
          const choices1 = option.choices;
          obj.index = choices1.indexOf(found);
          return obj;
        }
      }
    }
  }), 2);
  const first = tmp3[0];
  const _createForOfIteratorHelperLoose = tmp3[1];
  const items = [onDismissChoicesSheet, onOpenChoicesSheet, onSelect, option, ];
  let index;
  if (null != first) {
    index = first.index;
  }
  items[4] = index;
  const callback = onDismissChoicesSheet.useCallback(() => {
    onOpenChoicesSheet();
    let obj = option(onSelect[5]);
    const result = obj.dismissGlobalKeyboard();
    obj = { option };
    let index;
    const obj2 = outer1_1(onSelect[6]);
    if (null != first) {
      index = first.index;
    }
    obj.initChoiceIndex = index;
    obj.onChoiceSelect = function onChoiceSelect(choice, index) {
      outer1_6({ choice, index });
      outer1_2(choice);
    };
    obj.onDismiss = onDismissChoicesSheet;
    obj2.openLazy(option(onSelect[8])(onSelect[7], onSelect.paths), "AppLauncherChoicesActionSheet", obj);
  }, items);
  let obj = option(onSelect[9]);
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, callback);
  obj = { start: true, end: true };
  const items1 = [_createForOfIteratorHelperLoose().container, style];
  obj.style = items1;
  obj.hasError = hasError;
  obj = {};
  let str = "text-sm/medium";
  if (null == first) {
    str = "text-md/medium";
  }
  obj.variant = str;
  let str2 = "interactive-text-default";
  if (null == first) {
    str2 = "text-default";
  }
  obj.color = str2;
  obj.lineClamp = 1;
  obj.children = option.displayName;
  obj.label = first(option(onSelect[11]).Text, obj);
  let tmp9 = null;
  if (null != first) {
    const obj1 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: first.choice.displayName };
    tmp9 = first(option(onSelect[11]).Text, obj1);
  }
  obj.subLabel = tmp9;
  obj.trailing = first(option(onSelect[10]).FormArrow, {});
  obj.onPress = callback;
  return first(option(onSelect[10]).FormRow, obj);
};
