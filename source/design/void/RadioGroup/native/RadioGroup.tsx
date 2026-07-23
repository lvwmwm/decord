// Module ID: 13007
// Function ID: 100586
// Name: getOuterStylesFromSize
// Dependencies: [31, 27, 482, 33, 4130, 689, 3848, 5158, 13008, 2]

// Module 13007 (getOuterStylesFromSize)
import result from "result";
import { View } from "get ActivityIndicator";
import { NOOP } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let require = arg1;
function getOuterStylesFromSize(size) {
  let MEDIUM = size;
  if (size === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  obj = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: table[MEDIUM] };
  return obj;
}
function getTickStylesFromSize(size) {
  let MEDIUM = size;
  if (size === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  obj = { width: MEDIUM, height: MEDIUM };
  return obj;
}
function RadioEmpty(arg0) {
  let size;
  let style;
  ({ size, style } = arg0);
  const obj = {};
  const items = [callback2().radioIcon, getOuterStylesFromSize(size), style];
  obj.style = items;
  return callback(View, obj);
}
function RadioSelected(style) {
  let active;
  let size;
  ({ size, active } = style);
  const tmp = callback2();
  let obj = {};
  const items = [tmp.radioIcon, getOuterStylesFromSize(size), , ];
  if (active) {
    active = tmp.radioIconSelected;
  }
  items[2] = active;
  items[3] = style.style;
  obj.style = items;
  obj = {};
  const items1 = [tmp.radioTick, getTickStylesFromSize(size)];
  obj.style = items1;
  obj.children = callback(View, obj);
  return callback(View, obj);
}
class RadioIndicator {
  constructor(arg0) {
    ({ size, active, style } = global);
    tmp = jsx;
    if (active) {
      tmp4 = RadioSelected;
      obj = {};
      obj.size = size;
      obj.active = active;
      obj.style = style;
      tmpResult = tmp(RadioSelected, obj);
    } else {
      tmp2 = RadioEmpty;
      obj = {};
      obj.size = size;
      obj.style = style;
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
  let onPress;
  let option;
  let showIndicator;
  let size;
  let style;
  ({ checked, option, disabled, indicatorLeft, showIndicator } = arg0);
  ({ style, size, onPress } = arg0);
  const tmp = callback2();
  const tmp2 = callback(RadioIndicator, { size, active: checked });
  let obj = require(3848) /* useCheckboxA11yNative */;
  obj = { selected: checked, disabled };
  const radioA11yNative = obj.useRadioA11yNative(obj);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { accessibilityRole, accessibilityState, disabled };
  let tmp7;
  if (!disabled) {
    tmp7 = onPress;
  }
  obj.onPress = tmp7;
  const items = [style, , ];
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[1] = disabled;
  items[2] = null != option.collapsibleContent && (checked ? tmp.collapsibleBackgroundSelected : tmp.collapsibleBackground);
  obj.DEPRECATED_style = items;
  ({ name: obj3.label, desc: obj3.subLabel } = option);
  let tmp8 = null;
  if (!indicatorLeft) {
    tmp8 = null;
    if (showIndicator) {
      tmp8 = tmp2;
    }
  }
  obj.trailing = tmp8;
  if (null == option.leading) {
    let tmp9 = null;
    if (indicatorLeft) {
      tmp9 = null;
      if (showIndicator) {
        tmp9 = tmp2;
      }
    }
    let leading = tmp9;
  } else {
    leading = option.leading;
  }
  obj.leading = leading;
  return callback(importDefault(5158), obj);
}
class RadioItem {
  constructor(arg0) {
    option = global.option;
    checked = global.checked;
    style = global.style;
    size = global.size;
    ({ disabled, indicatorLeft } = global);
    showIndicator = global.showIndicator;
    onPress = global.onPress;
    disabled = undefined;
    handlePress = function handlePress(preventDefault) {
      preventDefault.preventDefault();
      let tmp2;
      if (null != onPress) {
        tmp2 = onPress(option);
      }
      return tmp2;
    };
    tmp = c10();
    if (!disabled) {
      disabled = option.disabled;
    }
    if (null != option.collapsibleContent) {
      tmp5 = onPress;
      tmp6 = indicatorLeft;
      obj = {};
      obj.style = tmp.collapsibleContainer;
      tmp7 = onPress;
      tmp8 = checked;
      tmp9 = style;
      num = 8;
      obj1 = {};
      obj1.isExpanded = checked;
      obj1.collapsibleContent = option.collapsibleContent;
      obj1.style = tmp.collapsibleStyle;
      obj1.children = function children(onPress) {
        onPress = onPress.onPress;
        return onPress(outer1_16, {
          option: onPress,
          checked,
          style,
          size,
          disabled,
          onPress(arg0) {
            outer1_8(arg0);
            onPress(arg0);
          },
          indicatorLeft,
          showIndicator
        });
      };
      obj.children = onPress(require("Collapsible"), obj1);
      tmp4 = onPress(indicatorLeft, obj);
    } else {
      tmp2 = onPress;
      tmp3 = RadioBar;
      obj = {};
      obj.option = option;
      obj.checked = checked;
      obj.style = style;
      obj.size = size;
      obj.disabled = disabled;
      obj.onPress = handlePress;
      obj.indicatorLeft = indicatorLeft;
      obj.showIndicator = showIndicator;
      tmp4 = onPress(RadioBar, obj);
    }
    return tmp4;
  }
}
class RadioGroup {
  constructor(arg0) {
    value = global.value;
    if (value === undefined) {
      value = null;
    }
    c0 = value;
    options = global.options;
    if (options === undefined) {
      options = [];
    }
    ({ style, size } = global);
    if (size === undefined) {
      tmp2 = c8;
      size = c8.MEDIUM;
    }
    MEDIUM = size;
    flag = global.disabled;
    if (flag === undefined) {
      flag = false;
    }
    c4 = flag;
    flag2 = global.withSpacing;
    if (flag2 === undefined) {
      flag2 = false;
    }
    c5 = flag2;
    flag3 = global.indicatorLeft;
    if (flag3 === undefined) {
      flag3 = false;
    }
    c6 = flag3;
    flag4 = global.showIndicator;
    if (flag4 === undefined) {
      flag4 = true;
    }
    c7 = flag4;
    flag5 = global.withDividers;
    if (flag5 === undefined) {
      flag5 = true;
    }
    c8 = flag5;
    onChange = global.onChange;
    if (onChange === undefined) {
      onChange = c5;
    }
    c10 = undefined;
    c10 = c10();
    obj = {};
    obj.children = options.map((option) => {
      let obj = {};
      obj = { option, checked: closure_0 === option.value };
      const items = [closure_2, ];
      if (arg1 === options.length - 1) {
        obj = { marginBottom: 0 };
        let obj2 = obj;
      } else if (flag2) {
        const obj1 = { marginBottom: 8 };
        obj2 = obj1;
      } else {
        obj2 = {};
      }
      items[1] = obj2;
      obj.style = items;
      obj.size = size;
      obj.disabled = flag;
      obj.onPress = onChange;
      obj.indicatorLeft = flag3;
      obj.showIndicator = flag4;
      const items1 = [flag3(outer1_17, obj, "radio-option-" + JSON.stringify(option.value) + "-" + arg1), ];
      let tmp5 = null;
      if (arg1 !== options.length - 1) {
        tmp5 = null;
        if (flag5) {
          const obj3 = { style: divider.divider };
          tmp5 = flag3(flag, obj3);
        }
      }
      items1[1] = tmp5;
      obj.children = items1;
      return flag4(size.Fragment, obj, "radio-option-" + JSON.stringify(option.value) + "-" + arg1);
    });
    return c6(c4, obj);
  }
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { SMALL: 8, [8]: "SMALL", MEDIUM: 10, [10]: "MEDIUM", LARGE: 12, [12]: "LARGE" };
let closure_9 = { [obj.SMALL]: 2, [obj.MEDIUM]: 3, [obj.LARGE]: 4 };
obj = {};
obj = { flex: 0, marginRight: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, borderWidth: 2 };
obj.radioIcon = obj;
_createForOfIteratorHelperLoose = { borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj.radioIconSelected = _createForOfIteratorHelperLoose;
obj.radioTick = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
obj.disabled = { opacity: 0.3 };
let obj3 = { height: 1, alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginLeft: 16 };
obj.divider = obj3;
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
obj.collapsibleStyle = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
const obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
obj.collapsibleBackgroundSelected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
const obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.collapsibleBackground = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.collapsibleContainer = { paddingVertical: 4, paddingHorizontal: 12 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
RadioIndicator.Sizes = obj;
RadioGroup.Sizes = obj;
const obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
const result = require("sum").fileFinishedImporting("design/void/RadioGroup/native/RadioGroup.tsx");

export default RadioGroup;
export { RadioIndicator };
export { RadioItem };
