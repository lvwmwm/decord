// Module ID: 8420
// Function ID: 66970
// Name: InputButton
// Dependencies: [29, 31, 27, 33, 4130, 689, 4547, 5780, 4544, 2]

// Module 8420 (InputButton)
import _objectWithoutProperties from "_objectWithoutProperties";
import { Text } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_2 = ["size", "isRound", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
let obj = { buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" } };
obj = { color: require("_createForOfIteratorHelperLoose").colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.buttonTextPlaceholder = obj;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_TEXT };
obj.buttonTextValue = _createForOfIteratorHelperLoose;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = require("result").forwardRef((size) => {
  let accessibilityLabel;
  let accessibilityValue;
  let icon;
  let iconPosition;
  let maxFontSizeMultiplier;
  let text;
  let value;
  size = size.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  const isRound = size.isRound;
  ({ text, value, icon, iconPosition } = size);
  let str2 = "start";
  if (undefined !== iconPosition) {
    str2 = iconPosition;
  }
  ({ accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = size);
  if (undefined === maxFontSizeMultiplier) {
    maxFontSizeMultiplier = require(4547) /* getButtonPadding */.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const tmp4 = callback(size, closure_2);
  let obj = require(5780) /* useInputStyles */;
  obj = { size: str, isRound: undefined !== isRound && isRound, hasLeadingIcon: "start" === str2 };
  const inputStyles = obj.useInputStyles(obj);
  const tmp7 = callback2();
  if (null != icon) {
    obj = {};
    if (tmp5) {
      obj.paddingStart = inputStyles.leadingIcon.paddingEnd;
      let tmp8 = obj;
    } else {
      obj.paddingEnd = inputStyles.trailingIcon.paddingStart;
      tmp8 = obj;
    }
  } else {
    const obj2 = {};
    const merged = Object.assign(tmp4);
    obj2["ref"] = arg1;
    obj2["size"] = str;
    obj2["variant"] = "tertiary";
    obj2["icon"] = icon;
    obj2["iconPosition"] = str2;
    const items = [, ];
    ({ padding: arr[0], radius: arr[1] } = inputStyles);
    obj2["pillStyle"] = items;
    if (null == accessibilityLabel) {
      str = undefined;
      if (null != text) {
        str = text.toString();
      }
      accessibilityLabel = str;
    }
    obj2["accessibilityLabel"] = accessibilityLabel;
    if (null == accessibilityValue) {
      const obj3 = { text: value };
      accessibilityValue = obj3;
    }
    obj2["accessibilityValue"] = accessibilityValue;
    const obj4 = {};
    const items1 = [inputStyles.text, tmp7.buttonText, null != value ? tmp7.buttonTextValue : tmp7.buttonTextPlaceholder, {}];
    obj4.style = items1;
    obj4.numberOfLines = 1;
    obj4.maxFontSizeMultiplier = maxFontSizeMultiplier;
    if (null != value) {
      text = value;
    }
    obj4.children = text;
    obj2["textElement"] = <Text />;
    return jsx(require(4544) /* CollapsingText */.BaseTextButton, {});
  }
});
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export const InputButton = forwardRefResult;
