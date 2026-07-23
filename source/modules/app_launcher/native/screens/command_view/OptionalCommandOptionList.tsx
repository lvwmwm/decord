// Module ID: 11312
// Function ID: 88001
// Name: OptionList
// Dependencies: [31, 27, 33, 4130, 689, 5165, 4660, 4126, 1212, 2]
// Exports: default

// Module 11312 (OptionList)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function OptionList(options) {
  options = options.options;
  const onSelectOption = options.onSelectOption;
  const tmp = _createForOfIteratorHelperLoose();
  const View = tmp;
  const items = [tmp.container, options.style];
  return <View style={items} collapsable={false}>{options.map((displayName) => {
    const options = displayName;
    let obj = {
      onPress() {
        return outer1_1(closure_0);
      },
      start: false,
      end: arg1 === options.length - 1,
      label: displayName.displayName,
      subLabel: displayName.displayDescription
    };
    obj = {
      accessibilityRole: "button",
      style: tmp.addButton,
      onPress() {
        return outer1_1(closure_0);
      }
    };
    obj = { variant: "text-sm/semibold", style: tmp.addButtonText };
    const intl = options(onSelectOption[8]).intl;
    obj.children = intl.string(options(onSelectOption[8]).t.OYkgVk);
    obj.children = outer1_3(options(onSelectOption[7]).Text, obj);
    obj.trailing = outer1_3(options(onSelectOption[6]).PressableOpacity, obj);
    return outer1_3(options(onSelectOption[5]).TableRow, obj, displayName.name);
  })}</View>;
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { overflow: "hidden", borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_BORDER);
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
const obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, minWidth: 48, height: 32, justifyContent: "center", alignItems: "center", paddingHorizontal: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
_createForOfIteratorHelperLoose.addButton = obj1;
_createForOfIteratorHelperLoose.addButtonText = { color: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_TEXT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { color: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_TEXT };
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx");

export default function OptionalCommandOptionList(options) {
  options = options.options;
  let tmp3 = null;
  if (options.length > 0) {
    const obj = { style: tmp2, options, onSelectOption: tmp };
    tmp3 = <OptionList style={tmp2} options={options} onSelectOption={tmp} />;
  }
  return tmp3;
};
