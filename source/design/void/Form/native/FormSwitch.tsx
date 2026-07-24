// Module ID: 7649
// Function ID: 60838
// Name: FormSwitch
// Dependencies: [31, 27, 33, 4130, 689, 4066, 3976, 2]
// Exports: default

// Module 7649 (FormSwitch)
import "result";
import { Switch } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { switch: { marginVertical: -5 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.REDESIGN_INPUT_CONTROL_SELECTED };
_createForOfIteratorHelperLoose.track = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormSwitch.tsx");

export default function FormSwitch(value) {
  let accessibilityHint;
  let accessibilityLabel;
  let accessible;
  let borderColor;
  let onValueChange;
  let renderIosBackground;
  let style;
  value = value.value;
  const disabled = value.disabled;
  ({ borderColor, renderIosBackground } = value);
  let tmp3 = undefined !== renderIosBackground;
  ({ style, onValueChange, accessible, accessibilityLabel, accessibilityHint } = value);
  if (tmp3) {
    tmp3 = renderIosBackground;
  }
  const tmp4 = _createForOfIteratorHelperLoose();
  let color = value.tintColor;
  if (null == color) {
    color = tmp4.track.color;
  }
  if (null == borderColor) {
    let obj = require(3976) /* AccessibilityAnnouncer */;
    if (obj.isThemeDark(tmp5)) {
      borderColor = importDefault(689).unsafe_rawColors.PRIMARY_400;
    }
  }
  obj = { accessible, trackColor: obj };
  obj = { true: color, false: borderColor };
  let tmp12;
  if (false === (undefined !== value && value)) {
    if (tmp3) {
      tmp12 = borderColor;
    }
  }
  obj.ios_backgroundColor = tmp12;
  obj.value = undefined !== value && value;
  obj.disabled = undefined !== disabled && disabled;
  const items = [tmp4.switch, style];
  obj.style = items;
  obj.onValueChange = onValueChange;
  obj.accessibilityState = { disabled: undefined !== disabled && disabled, selected: undefined !== value && value };
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityHint = accessibilityHint;
  return <Switch true={color} false={borderColor} />;
};
