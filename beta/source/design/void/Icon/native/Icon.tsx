// Module ID: 5283
// Function ID: 5284
// Name: Icon
// Dependencies: [19, 17, 21, 4836, 576, 2]
// Exports: getIconSize, getIconStyle

// Module 5283 (Icon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj, source;

const Image = react_native.Image;
const jsx = Fragment.jsx;
const IconSizes = { EXTRA_SMALL_10: "extraSmall10", EXTRA_SMALL: "extraSmall", SMALL: "small", SMALL_20: "small20", MEDIUM: "medium", LARGE: "large", CUSTOM: "custom", REFRESH_SMALL_16: "refreshSmall16", SMALL_14: "small14" };
let closure_5 = createStyles.createStyles(() => {
  obj = { iconColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
  ({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  return obj;
});
const memoResult = react.memo(react.forwardRef((source, ref) => {
  let accessibilityLabel;
  let accessible;
  let color;
  let disableColor;
  let items;
  let resizeMode;
  let style;
  ({ color, disableColor } = source);
  source = source.source;
  if (disableColor === undefined) {
    disableColor = false;
  }
  let MEDIUM = source.size;
  if (MEDIUM === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  ({ resizeMode, style } = source);
  if (resizeMode === undefined) {
    resizeMode = "cover";
  }
  ({ accessible, accessibilityLabel } = source);
  let tmp3;
  if (!disableColor) {
    let iconColor;
    if (null != color) {
      obj = { tintColor: color };
      iconColor = obj;
    } else {
      iconColor = tmp2.iconColor;
    }
    tmp3 = iconColor;
  }
  let num = 10;
  const obj2 = { resizeMode, source, style: items, accessible, accessibilityLabel, fadeDuration: 0, ref };
  const tmp5 = jsx;
  const tmp6 = Image;
  if (obj.EXTRA_SMALL_10 !== MEDIUM) {
    num = 12;
    if (obj.EXTRA_SMALL !== MEDIUM) {
      num = 18;
      if (obj.SMALL !== MEDIUM) {
        num = 14;
        if (obj.SMALL_14 !== MEDIUM) {
          num = 20;
          if (obj.SMALL_20 !== MEDIUM) {
            num = 24;
            if (obj.MEDIUM !== MEDIUM) {
              num = 32;
              if (obj.LARGE !== MEDIUM) {
                num = 16;
                if (obj.REFRESH_SMALL_16 !== MEDIUM) {
                  const CUSTOM = tmp7.CUSTOM;
                }
              }
            }
          }
        }
      }
    }
  }
  items = [{ width: num, height: num }, tmp3, style];
  return tmp5(tmp6, obj2);
}));
memoResult.displayName = "Icon";
memoResult.Sizes = IconSizes;
const result = size.fileFinishedImporting("design/void/Icon/native/Icon.tsx");

export default memoResult;
export { IconSizes };
export const getIconSize = function getIconSize(arg0) {
  if (obj.EXTRA_SMALL_10 === arg0) {
    return 10;
  } else if (obj.EXTRA_SMALL === arg0) {
    return 12;
  } else if (obj.SMALL === arg0) {
    return 18;
  } else if (obj.SMALL_14 === arg0) {
    return 14;
  } else if (obj.SMALL_20 === arg0) {
    return 20;
  } else if (obj.MEDIUM === arg0) {
    return 24;
  } else if (obj.LARGE === arg0) {
    return 32;
  } else if (obj.REFRESH_SMALL_16 === arg0) {
    return 16;
  }
};
export const getIconStyle = function getIconStyle(MEDIUM) {
  let width = 10;
  if (obj.EXTRA_SMALL_10 !== MEDIUM) {
    width = 12;
    if (obj.EXTRA_SMALL !== MEDIUM) {
      width = 18;
      if (obj.SMALL !== MEDIUM) {
        width = 14;
        if (obj.SMALL_14 !== MEDIUM) {
          width = 20;
          if (obj.SMALL_20 !== MEDIUM) {
            width = 24;
            if (obj.MEDIUM !== MEDIUM) {
              width = 32;
              if (obj.LARGE !== MEDIUM) {
                width = 16;
                if (obj.REFRESH_SMALL_16 !== MEDIUM) {
                  const CUSTOM = tmp.CUSTOM;
                }
              }
            }
          }
        }
      }
    }
  }
  return { width, height: width };
};
