// Module ID: 8369
// Function ID: 66693
// Name: InputButton
// Dependencies: []

// Module 8369 (InputButton)
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
const Text = arg1(dependencyMap[2]).Text;
const jsx = arg1(dependencyMap[3]).jsx;
let obj1 = arg1(dependencyMap[4]);
let obj = { buttonText: { "Null": "100%", "Null": null, "Null": null } };
obj = { color: importDefault(dependencyMap[5]).colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.buttonTextPlaceholder = obj;
obj1 = { color: importDefault(dependencyMap[5]).colors.REDESIGN_BUTTON_TERTIARY_TEXT };
obj.buttonTextValue = obj1;
let closure_6 = obj1.createStyles(obj);
const importAllResult = importAll(dependencyMap[1]);
const forwardRefResult = importAll(dependencyMap[1]).forwardRef((size) => {
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
    maxFontSizeMultiplier = arg1(dependencyMap[6]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const tmp4 = callback(size, closure_2);
  let obj = arg1(dependencyMap[7]);
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
    obj2["textElement"] = <Text {...obj4} />;
    return jsx(arg1(dependencyMap[8]).BaseTextButton, obj2);
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export const InputButton = forwardRefResult;
