// Module ID: 12449
// Function ID: 96584
// Name: SquareIconButton
// Dependencies: [31, 33, 4130, 689, 4973, 4660, 1273, 2]

// Module 12449 (SquareIconButton)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
class SquareIconButton {
  constructor(arg0) {
    size = global.size;
    ({ disableColor, accessibilityHidden } = global);
    ({ onPress, source, style, iconStyle, accessibilityLabel, disabled } = global);
    tmp = LARGE_40();
    closure_1 = tmp;
    items = [, ];
    items[0] = size;
    items[1] = tmp;
    memo = result.useMemo(() => {
      if (outer1_4.MEDIUM_32 === size) {
        return tmp.medium;
      } else if (outer1_4.LARGE_40 === tmp) {
        return tmp.large;
      } else {
        const SMALL_24 = outer1_4.SMALL_24;
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
      tmp8 = size;
      tmp9 = closure_1;
      REFRESH_SMALL_16 = require("Button").Icon.Sizes.MEDIUM;
    } else {
      tmp6 = size;
      tmp7 = closure_1;
      REFRESH_SMALL_16 = require("Button").Icon.Sizes.REFRESH_SMALL_16;
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
    obj.children = tmp5(require("Button").Icon, obj);
    return tmp3(require("PressableBase").PressableOpacity, obj);
  }
}
class CircularIconButton {
  constructor(arg0) {
    size = global.size;
    obj = { style: 0, size: 0, disableColor: 0 };
    ({ style, disableColor } = global);
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    tmp3 = LARGE_40();
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
let obj = { SMALL_24: 24, [24]: "SMALL_24", MEDIUM_32: 32, [32]: "MEDIUM_32", LARGE_40: 40, [40]: "LARGE_40" };
obj = {};
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: require("result").DARK_PRIMARY_700_LIGHT_PRIMARY_230 };
obj.container = obj;
obj.small = { height: obj.SMALL_24, width: obj.SMALL_24 };
obj.medium = { height: obj.MEDIUM_32, width: obj.MEDIUM_32 };
obj.large = { height: obj.LARGE_40, width: obj.LARGE_40 };
obj.smallCircular = { borderRadius: obj.SMALL_24 / 2 };
obj.mediumCircular = { borderRadius: obj.MEDIUM_32 / 2 };
obj.largeCircular = { borderRadius: obj.LARGE_40 / 2 };
_createForOfIteratorHelperLoose = { tintColor: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
obj.icon = _createForOfIteratorHelperLoose;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
SquareIconButton.Sizes = obj;
CircularIconButton.Sizes = obj;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/void/IconButton/native/IconButton.tsx");

export { SquareIconButton };
export { CircularIconButton };
