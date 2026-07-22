// Module ID: 12277
// Function ID: 94105
// Name: SquareIconButton
// Dependencies: []

// Module 12277 (SquareIconButton)
class SquareIconButton {
  constructor(arg0) {
    size = global.size;
    arg1 = size;
    ({ disableColor, accessibilityHidden } = global);
    ({ onPress, source, style, iconStyle, accessibilityLabel, disabled } = global);
    tmp = closure_5();
    dependencyMap = tmp;
    items = [, ];
    items[0] = size;
    items[1] = tmp;
    memo = importAll.useMemo(() => {
      if (closure_4.MEDIUM_32 === size) {
        return tmp.medium;
      } else if (closure_4.LARGE_40 === tmp) {
        return tmp.large;
      } else {
        const SMALL_24 = closure_4.SMALL_24;
        return tmp.small;
      }
    }, items);
    tmp3 = jsx;
    obj = { accessibilityRole: "button" };
    tmp4 = undefined;
    if (!accessibilityHidden) {
      tmp4 = accessibilityLabel;
    }
    obj.accessibilityLabel = tmp4;
    obj.accessibilityElementsHidden = accessibilityHidden;
    obj.onPress = onPress;
    obj.disabled = disabled;
    items1 = [, , ];
    items1[0] = tmp.container;
    items1[1] = style;
    items1[2] = memo;
    obj.style = items1;
    tmp5 = jsx;
    obj = {};
    if (size === jsx.LARGE_40) {
      tmp8 = arg1;
      tmp9 = dependencyMap;
      REFRESH_SMALL_16 = arg1(dependencyMap[6]).Icon.Sizes.MEDIUM;
    } else {
      tmp6 = arg1;
      tmp7 = dependencyMap;
      REFRESH_SMALL_16 = arg1(dependencyMap[6]).Icon.Sizes.REFRESH_SMALL_16;
    }
    obj.size = REFRESH_SMALL_16;
    icon = null;
    if (!disableColor) {
      icon = tmp.icon;
    }
    items2 = [, ];
    items2[0] = icon;
    items2[1] = iconStyle;
    obj.style = items2;
    obj.disableColor = disableColor;
    obj.source = source;
    obj.children = tmp5(arg1(dependencyMap[6]).Icon, obj);
    return tmp3(arg1(dependencyMap[5]).PressableOpacity, obj);
  }
}
class CircularIconButton {
  constructor(arg0) {
    size = global.size;
    obj = { flexWrap: "spring", fontSize: 0.4, marginLeft: 1 };
    ({ style, disableColor } = global);
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    tmp3 = closure_5();
    obj = {};
    tmp4 = jsx;
    tmp5 = SquareIconButton;
    if (jsx.SMALL_24 === size) {
      largeCircular = tmp3.smallCircular;
    } else {
      tmp6 = jsx;
      if (jsx.MEDIUM_32 === size) {
        largeCircular = tmp3.mediumCircular;
      } else {
        tmp7 = jsx;
        if (jsx.LARGE_40 === size) {
          largeCircular = tmp3.largeCircular;
        }
      }
    }
    items = [, ];
    items[0] = largeCircular;
    items[1] = style;
    obj.style = items;
    obj.size = size;
    merged1 = Object.assign(merged);
    obj["disableColor"] = disableColor;
    return tmp4(tmp5, obj);
  }
}
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = { SMALL_24: 24, [24]: "SMALL_24", MEDIUM_32: 32, [32]: "MEDIUM_32", LARGE_40: 40, [40]: "LARGE_40" };
let obj1 = arg1(dependencyMap[2]);
obj = {};
obj = { "Null": "string", "Null": "string", "Null": "color", borderRadius: importDefault(dependencyMap[3]).radii.xs, backgroundColor: arg1(dependencyMap[4]).DARK_PRIMARY_700_LIGHT_PRIMARY_230 };
obj.container = obj;
obj.small = { height: obj.SMALL_24, width: obj.SMALL_24 };
obj.medium = { height: obj.MEDIUM_32, width: obj.MEDIUM_32 };
obj.large = { height: obj.LARGE_40, width: obj.LARGE_40 };
obj.smallCircular = { borderRadius: obj.SMALL_24 / 2 };
obj.mediumCircular = { borderRadius: obj.MEDIUM_32 / 2 };
obj.largeCircular = { borderRadius: obj.LARGE_40 / 2 };
obj1 = { tintColor: arg1(dependencyMap[4]).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
obj.icon = obj1;
let closure_5 = obj1.createStyles(obj);
SquareIconButton.Sizes = obj;
CircularIconButton.Sizes = obj;
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/void/IconButton/native/IconButton.tsx");

export { SquareIconButton };
export { CircularIconButton };
