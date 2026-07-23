// Module ID: 9355
// Function ID: 73055
// Name: ShinyButton
// Dependencies: [31, 33, 4130, 689, 4544, 1273, 9356, 2]
// Exports: default

// Module 9355 (ShinyButton)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sparkleIcon = { marginRight: 4, tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.disabled = { opacity: 0.5 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { marginRight: 4, tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ShinyButton.tsx");

export default function ShinyButton(style) {
  let disabled;
  let loading;
  let onPress;
  ({ loading, disabled, onPress } = style);
  if (onPress === undefined) {
    onPress = function c() {

    };
  }
  let obj = { style: 0, loading: 0, disabled: 0, onPress: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(style, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  obj = { onPress };
  const items = [tmp3.container, style.style];
  obj.pillStyle = items;
  obj.loading = loading;
  obj.disabled = disabled;
  let tmp6Result;
  if (!loading) {
    obj = { size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16, source: importDefault(9356) };
    const items1 = [tmp3.sparkleIcon, ];
    if (disabled) {
      disabled = tmp3.disabled;
    }
    items1[1] = disabled;
    obj.style = items1;
    tmp6Result = jsx(require(1273) /* Button */.Icon, { size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16, source: importDefault(9356) });
    const tmp6 = jsx;
  }
  obj.icon = tmp6Result;
  const merged1 = Object.assign(merged);
  return jsx(require(4544) /* CollapsingText */.BaseTextButton, { onPress });
};
