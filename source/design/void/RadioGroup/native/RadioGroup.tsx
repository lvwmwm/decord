// Module ID: 12884
// Function ID: 98375
// Name: getOuterStylesFromSize
// Dependencies: []

// Module 12884 (getOuterStylesFromSize)
function getOuterStylesFromSize(size) {
  let MEDIUM = size;
  if (size === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  const obj = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: closure_9[MEDIUM] };
  return obj;
}
function getTickStylesFromSize(size) {
  let MEDIUM = size;
  if (size === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  const obj = { width: MEDIUM, height: MEDIUM };
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
  let obj = arg1(dependencyMap[6]);
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
  items[2] = null != option.collapsibleContent && checked ? tmp.collapsibleBackgroundSelected : tmp.collapsibleBackground;
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
  return callback(importDefault(dependencyMap[7]), obj);
}
class RadioItem {
  constructor(arg0) {
    option = global.option;
    arg1 = option;
    checked = global.checked;
    importDefault = checked;
    style = global.style;
    dependencyMap = style;
    size = global.size;
    importAll = size;
    ({ disabled, indicatorLeft } = global);
    View = indicatorLeft;
    showIndicator = global.showIndicator;
    NOOP = showIndicator;
    jsx = global.onPress;
    jsxs = undefined;
    handlePress = function handlePress(preventDefault) {
      preventDefault.preventDefault();
      let tmp2;
      if (null != onPress) {
        tmp2 = onPress(option);
      }
      return tmp2;
    };
    tmp = closure_10();
    if (!disabled) {
      disabled = option.disabled;
    }
    jsxs = disabled;
    if (null != option.collapsibleContent) {
      tmp5 = jsx;
      tmp6 = View;
      obj = {};
      obj.style = tmp.collapsibleContainer;
      tmp7 = jsx;
      tmp8 = importDefault;
      tmp9 = dependencyMap;
      num = 8;
      obj1 = {};
      obj1.isExpanded = checked;
      obj1.collapsibleContent = option.collapsibleContent;
      obj1.style = tmp.collapsibleStyle;
      obj1.children = function children(onPress) {
        const option = onPress.onPress;
        return onPress(closure_16, {
          option,
          checked,
          style,
          size,
          disabled,
          onPress(arg0) {
            callback(arg0);
            onPress(arg0);
          },
          indicatorLeft,
          showIndicator
        });
      };
      obj.children = jsx(importDefault(dependencyMap[8]), obj1);
      tmp4 = jsx(View, obj);
    } else {
      tmp2 = jsx;
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
      tmp4 = jsx(RadioBar, obj);
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
    closure_0 = value;
    options = global.options;
    if (options === undefined) {
      options = [];
    }
    importDefault = options;
    ({ style: closure_2, size } = global);
    if (size === undefined) {
      tmp2 = closure_8;
      size = closure_8.MEDIUM;
    }
    importAll = size;
    flag = global.disabled;
    if (flag === undefined) {
      flag = false;
    }
    closure_4 = flag;
    flag2 = global.withSpacing;
    if (flag2 === undefined) {
      flag2 = false;
    }
    closure_5 = flag2;
    flag3 = global.indicatorLeft;
    if (flag3 === undefined) {
      flag3 = false;
    }
    closure_6 = flag3;
    flag4 = global.showIndicator;
    if (flag4 === undefined) {
      flag4 = true;
    }
    closure_7 = flag4;
    flag5 = global.withDividers;
    if (flag5 === undefined) {
      flag5 = true;
    }
    closure_8 = flag5;
    onChange = global.onChange;
    if (onChange === undefined) {
      onChange = closure_5;
    }
    closure_9 = onChange;
    closure_10 = undefined;
    closure_10 = closure_10();
    obj = {};
    obj.children = options.map((option) => {
      let obj = {};
      obj = { option, checked: value === option.value };
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
      const items1 = [flag3(closure_17, obj, "radio-option-" + JSON.stringify(option.value) + "-" + arg1), ];
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
    return closure_6(closure_4, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const NOOP = arg1(dependencyMap[2]).NOOP;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = { SMALL: 8, [8]: "SMALL", MEDIUM: 10, [10]: "MEDIUM", LARGE: 12, [12]: "LARGE" };
let closure_9 = { [obj.SMALL]: 2, [obj.MEDIUM]: 3, [obj.LARGE]: 4 };
let obj1 = arg1(dependencyMap[4]);
obj = {};
obj = { "Null": 1625885902869635800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000518728505263, "Null": 802340492424750300000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022243023214912467, "Null": 1625885909669175000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderRadius: importDefault(dependencyMap[5]).radii.round, borderColor: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
obj.radioIcon = obj;
obj1 = { borderColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.radioIconSelected = obj1;
const tmp2 = arg1(dependencyMap[3]);
obj.radioTick = { borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_BRAND_FOREGROUND };
obj.disabled = { opacity: 0.3 };
const obj3 = { split: null, Text: null, lj: null, messageId: -16, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.divider = obj3;
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_BRAND_FOREGROUND };
obj.collapsibleStyle = { borderRadius: importDefault(dependencyMap[5]).radii.sm, overflow: "hidden" };
const obj4 = { borderRadius: importDefault(dependencyMap[5]).radii.sm, overflow: "hidden" };
obj.collapsibleBackgroundSelected = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
const obj5 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.collapsibleBackground = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.collapsibleContainer = {};
let closure_10 = obj1.createStyles(obj);
RadioIndicator.Sizes = obj;
RadioGroup.Sizes = obj;
const obj6 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/void/RadioGroup/native/RadioGroup.tsx");

export default RadioGroup;
export { RadioIndicator };
export { RadioItem };
