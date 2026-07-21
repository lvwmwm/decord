// Module ID: 7508
// Function ID: 60146
// Name: FormSwitch
// Dependencies: []
// Exports: default

// Module 7508 (FormSwitch)
importAll(dependencyMap[0]);
const Switch = arg1(dependencyMap[1]).Switch;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = { switch: { marginVertical: -5 } };
obj = { color: importDefault(dependencyMap[4]).colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj.track = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/void/Form/native/FormSwitch.tsx");

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
  const tmp4 = callback();
  let color = value.tintColor;
  if (null == color) {
    color = tmp4.track.color;
  }
  if (null == borderColor) {
    let obj = arg1(dependencyMap[6]);
    if (obj.isThemeDark(tmp5)) {
      borderColor = importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_400;
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
  return <Switch {...obj} />;
};
