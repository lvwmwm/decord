// Module ID: 13637
// Function ID: 13638
// Name: RadioGroup
// Dependencies: [19, 17, 1085, 21, 4836, 576, 4548, 6558, 13638, 2]

// Module 13637 (RadioGroup)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import react_native2 from "react-native" /* 4548 */;
import FormRowDefault from "FormRow" /* 6558 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj3;
function RadioEmpty(size) {
  let MEDIUM = size.size;
  const style = size.style;
  const style1 = [closure_10().radioIcon, , ];
  const tmp = metroRequire;
  const tmp2 = View;
  if (MEDIUM === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  size = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: closure_9[MEDIUM] };
  style1[1] = size;
  style1[2] = style;
  return tmp(tmp2, { style: style1 });
}
function RadioSelected(style) {
  let active;
  let items1;
  let obj;
  ({ size, active } = style);
  style = style.style;
  const tmp = closure_10();
  const items = [tmp.radioIcon, , , ];
  let MEDIUM = size;
  if (size === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  const size1 = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: closure_9[MEDIUM] };
  items[1] = size1;
  if (active) {
    active = tmp.radioIconSelected;
  }
  obj = { style: items, children: metroRequire(View, { style: items1 }) };
  items[2] = active;
  items[3] = style;
  items1 = [tmp.radioTick, ];
  if (size === undefined) {
    size = obj.MEDIUM;
  }
  items1[1] = { width: size, height: size };
  return metroRequire(View, obj);
}
class RadioIndicator {
  constructor(arg0) {
    let active;
    let style;
    let tmpResult;
    ({ size, active, style } = arg0);
    if (active) {
      const obj2 = { size, active, style };
      tmpResult = tmp(RadioSelected, obj2);
    } else {
      const obj = { size, style };
      tmpResult = tmp(RadioEmpty, obj);
    }
    return tmpResult;
  }
}
function RadioBar(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let checked;
  let disabled;
  let indicatorLeft;
  let items;
  let leading;
  let onPress;
  let option;
  let showIndicator;
  let style;
  let tmp7;
  let tmp8;
  ({ checked, option, disabled, indicatorLeft, showIndicator } = arg0);
  ({ style, size, onPress } = arg0);
  const tmp = closure_10();
  const tmp3 = metroRequire(RadioIndicator, { size, active: checked });
  const tmp4 = checked ? tmp.collapsibleBackgroundSelected : tmp.collapsibleBackground;
  const obj = react_native2;
  const radioA11yNative = obj.useRadioA11yNative({ selected: checked, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj3 = { accessibilityRole, accessibilityState, disabled, onPress: tmp7, DEPRECATED_style: items, label: null, subLabel: null, trailing: tmp8, leading };
  tmp7 = undefined;
  const tmp2 = metroRequire;
  const tmp6 = FormRowDefault;
  if (!disabled) {
    tmp7 = onPress;
  }
  items = [style, , ];
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[1] = disabled;
  items[2] = null != option.collapsibleContent && tmp4;
  ({ name: obj2.label, desc: obj2.subLabel } = option);
  tmp8 = null;
  if (!indicatorLeft) {
    tmp8 = null;
    if (showIndicator) {
      tmp8 = tmp3;
    }
  }
  if (null == option.leading) {
    let tmp9 = null;
    if (indicatorLeft) {
      tmp9 = null;
      if (showIndicator) {
        tmp9 = tmp3;
      }
    }
    leading = tmp9;
  } else {
    leading = option.leading;
  }
  return tmp2(tmp6, obj3);
}
class RadioItem {
  constructor(option) {
    let disabled;
    let indicatorLeft;
    let obj3;
    let tmp4;
    option = option.option;
    const checked = option.checked;
    const style = option.style;
    size = option.size;
    ({ disabled, indicatorLeft } = option);
    const showIndicator = option.showIndicator;
    let onPress = option.onPress;
    disabled = undefined;
    const tmp = closure_10();
    if (!disabled) {
      disabled = option.disabled;
    }
    if (null != option.collapsibleContent) {
      const obj2 = { style: tmp.collapsibleContainer, children: onPress(checked(style[8]), obj3) };
      obj3 = {
        isExpanded: checked,
        collapsibleContent: option.collapsibleContent,
        style: tmp.collapsibleStyle,
        children(onPress) {
            onPress = onPress.onPress;
            const obj = {
              option: onPress,
              checked,
              style,
              size,
              disabled,
              onPress(preventDefault) {
                preventDefault.preventDefault();
                if (onPress != null) {
                  tmp2(option);
                }
                onPress(preventDefault);
              },
              indicatorLeft,
              showIndicator
            };
            return onPress(RadioBar, obj);
          }
      };
      tmp4 = onPress(indicatorLeft, obj2);
    } else {
      const tmp2 = onPress;
      let obj = {
        option,
        checked,
        style,
        size,
        disabled,
        onPress: function handlePress(preventDefault) {
            preventDefault.preventDefault();
            let tmp2Result;
            if (onPress != null) {
              tmp2Result = tmp2(option);
            }
            return tmp2Result;
          },
        indicatorLeft,
        showIndicator
      };
      tmp4 = onPress(RadioBar, obj);
    }
    return tmp4;
  }
}
class RadioGroup {
  constructor(value) {
    let flag5;
    value = value.value;
    if (value === undefined) {
      value = null;
    }
    require = value;
    let options = value.options;
    if (options === undefined) {
      options = [];
    }
    ({ style: dependencyMap, size } = value);
    if (size === undefined) {
      const tmp2 = flag5;
      size = flag5.MEDIUM;
    }
    let flag = value.disabled;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = value.withSpacing;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = value.indicatorLeft;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let flag4 = value.showIndicator;
    if (flag4 === undefined) {
      flag4 = true;
    }
    flag5 = value.withDividers;
    if (flag5 === undefined) {
      flag5 = true;
    }
    let onChange = value.onChange;
    if (onChange === undefined) {
      onChange = flag2;
    }
    let divider;
    divider = divider();
    let obj = {
      children: options.map((option, index) => {
        let items;
        let obj2;
        const obj = { option, checked: require === option.value, style: items, size, disabled: flag, onPress: onChange, indicatorLeft: flag3, showIndicator: flag4 };
        items = [dependencyMap, ];
        const Fragment = react.Fragment;
        const arr2 = options;
        const tmp = metroImportDefault;
        const tmp3 = RadioItem;
        if (index === options.length - 1) {
          obj2 = { marginBottom: 0 };
        } else {
          obj2 = flag2 ? { marginBottom: 8 } : {};
        }
        items[1] = obj2;
        const children = [metroRequire(tmp3, obj, "radio-option-" + JSON.stringify(option.value) + "-" + index), ];
        let tmp2Result = null;
        if (index !== arr2.length - 1) {
          tmp2Result = null;
          if (flag5) {
            const obj3 = { style: divider.divider };
            tmp2Result = tmp2(View, obj3);
          }
        }
        children[1] = tmp2Result;
        return tmp(Fragment, { children }, "radio-option-" + JSON.stringify(option.value) + "-" + index);
      })
    };
    return flag3(flag, obj);
  }
}
const View = react_native.View;
const NOOP = Constants.NOOP;
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const Sizes = { SMALL: 8, [8]: "SMALL", MEDIUM: 10, [10]: "MEDIUM", LARGE: 12, [12]: "LARGE" };
let closure_9 = { [Sizes.SMALL]: 2, [Sizes.MEDIUM]: 3, [Sizes.LARGE]: 4 };
let createStyles = createStyles_mod;
let obj2 = { radioIcon: obj3, radioIconSelected: { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE }, radioTick: { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND }, disabled: { opacity: 0.3 }, divider: { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 }, collapsibleStyle: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, collapsibleBackgroundSelected: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, collapsibleBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, collapsibleContainer: { paddingVertical: 4, paddingHorizontal: 12 } };
obj3 = { flex: 0, marginRight: 8, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.TEXT_MUTED, borderWidth: 2 };
createStyles = createStyles.createStyles;
({ borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
({ borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND });
({ height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 });
({ borderRadius: nativeDefault.radii.sm, overflow: "hidden" });
({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
const authStore = createStyles(obj2);
RadioIndicator.Sizes = Sizes;
RadioGroup.Sizes = Sizes;
let size = size_mod;
const result = size.fileFinishedImporting("design/void/RadioGroup/native/RadioGroup.tsx");

export default RadioGroup;
export { RadioIndicator };
export { RadioItem };
