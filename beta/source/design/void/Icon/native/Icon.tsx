// Module ID: 5190
// Function ID: 5191
// Name: Icon
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 2]
// Exports: getIconSize, getIconStyle

// Module 5190 (Icon)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const IconSizes = { EXTRA_SMALL_10: "extraSmall10", EXTRA_SMALL: "extraSmall", SMALL: "small", SMALL_20: "small20", MEDIUM: "medium", LARGE: "large", CUSTOM: "custom", REFRESH_SMALL_16: "refreshSmall16", SMALL_14: "small14" };
const createStyles = fn(4758);
let closure_6 = createStyles.createStyles(() => {
  obj = { iconColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
  return obj;
});
({ memo, forwardRef } = noop);
const ReactCompilerGating = fn(558);
function getIconSize(arg0) {
  if (obj.EXTRA_SMALL_10 === arg0) {
    return 10;
  } else if (tmp.EXTRA_SMALL === arg0) {
    return 12;
  } else if (tmp.SMALL === arg0) {
    return 18;
  } else if (tmp.SMALL_14 === arg0) {
    return 14;
  } else if (tmp.SMALL_20 === arg0) {
    return 20;
  } else if (tmp.MEDIUM === arg0) {
    return 24;
  } else if (tmp.LARGE === arg0) {
    return 32;
  } else if (tmp.REFRESH_SMALL_16 === arg0) {
    return 16;
  }
}
function getIconStyle(MEDIUM) {
  let width = 10;
  if (obj.EXTRA_SMALL_10 !== MEDIUM) {
    width = 12;
    if (tmp.EXTRA_SMALL !== MEDIUM) {
      width = 18;
      if (tmp.SMALL !== MEDIUM) {
        width = 14;
        if (tmp.SMALL_14 !== MEDIUM) {
          width = 20;
          if (tmp.SMALL_20 !== MEDIUM) {
            width = 24;
            if (tmp.MEDIUM !== MEDIUM) {
              width = 32;
              if (tmp.LARGE !== MEDIUM) {
                width = 16;
                if (tmp.REFRESH_SMALL_16 !== MEDIUM) {
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
}
const memoResult = memo(forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  obj = c;
  const cResult = obj.c(15);
  ({ source, color, disableColor, size, style, resizeMode, accessible, accessibilityLabel } = arg0);
  if (undefined === size) {
    size = obj.MEDIUM;
  }
  let str = "cover";
  if (undefined !== resizeMode) {
    str = resizeMode;
  }
  if (tmp2) {
    if (cResult[2] !== size) {
      let num3 = 10;
      if (obj.EXTRA_SMALL_10 !== size) {
        num3 = 12;
        if (tmp9.EXTRA_SMALL !== size) {
          num3 = 18;
          if (tmp9.SMALL !== size) {
            num3 = 14;
            if (tmp9.SMALL_14 !== size) {
              num3 = 20;
              if (tmp9.SMALL_20 !== size) {
                num3 = 24;
                if (tmp9.MEDIUM !== size) {
                  num3 = 32;
                  if (tmp9.LARGE !== size) {
                    num3 = 16;
                    if (tmp9.REFRESH_SMALL_16 !== size) {
                      const CUSTOM = tmp9.CUSTOM;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const size1 = { width: num3, height: num3 };
      cResult[2] = size;
      cResult[3] = size1;
      let tmp8 = size1;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === style) {
      if (cResult[5] === tmp8) {
        if (cResult[6] === undefined) {
          let tmp10 = cResult[7];
        }
        if (cResult[8] === accessibilityLabel) {
          if (cResult[9] === accessible) {
            if (cResult[10] === ref) {
              if (cResult[11] === str) {
                if (cResult[12] === source) {
                  if (cResult[13] === tmp10) {
                    let tmp12 = cResult[14];
                  }
                  return tmp12;
                }
              }
            }
          }
        }
        const obj2 = { resizeMode: str, source, style: tmp10, accessible, accessibilityLabel, fadeDuration: 0, ref };
        const tmp15 = <Image resizeMode={str} source={source} style={tmp10} accessible={accessible} accessibilityLabel={accessibilityLabel} fadeDuration={0} ref={arg1} />;
        cResult[8] = accessibilityLabel;
        cResult[9] = accessible;
        cResult[10] = ref;
        cResult[11] = str;
        cResult[12] = source;
        cResult[13] = tmp10;
        cResult[14] = tmp15;
        tmp12 = tmp15;
      }
    }
    const items = [tmp8, undefined, style];
    cResult[4] = style;
    cResult[5] = tmp8;
    cResult[6] = undefined;
    cResult[7] = items;
    tmp10 = items;
  } else {
    if (null == color) {
      const iconColor = tmp4.iconColor;
    }
    if (cResult[0] !== color) {
      const obj3 = { tintColor: color };
      cResult[0] = color;
      cResult[1] = obj3;
    }
  }
}) : ((size, ref) => {
  ({ color, disableColor } = size);
  if (disableColor === undefined) {
    disableColor = false;
  }
  let MEDIUM = size.size;
  if (MEDIUM === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  ({ resizeMode, style } = size);
  if (resizeMode === undefined) {
    resizeMode = "cover";
  }
  ({ accessible, accessibilityLabel } = size);
  if (disableColor) {
    const obj2 = { resizeMode, source: size.source, style: null, accessible: null, accessibilityLabel: null, fadeDuration: 0, ref: null };
    let num = 10;
    if (obj.EXTRA_SMALL_10 !== MEDIUM) {
      num = 12;
      if (tmp7.EXTRA_SMALL !== MEDIUM) {
        num = 18;
        if (tmp7.SMALL !== MEDIUM) {
          num = 14;
          if (tmp7.SMALL_14 !== MEDIUM) {
            num = 20;
            if (tmp7.SMALL_20 !== MEDIUM) {
              num = 24;
              if (tmp7.MEDIUM !== MEDIUM) {
                num = 32;
                if (tmp7.LARGE !== MEDIUM) {
                  num = 16;
                  if (tmp7.REFRESH_SMALL_16 !== MEDIUM) {
                    const CUSTOM = tmp7.CUSTOM;
                  }
                }
              }
            }
          }
        }
      }
    }
    size = { width: num, height: num };
    const items = [size, undefined, style];
    obj2.style = items;
    obj2.accessible = accessible;
    obj2.accessibilityLabel = accessibilityLabel;
    obj2.ref = ref;
    return <Image resizeMode={resizeMode} source={arg0.source} style={null} accessible={null} accessibilityLabel={null} fadeDuration={0} ref={null} />;
  } else if (null != color) {
    obj = { tintColor: color };
    let iconColor = obj;
  } else {
    iconColor = tmp2.iconColor;
  }
})));
memoResult.displayName = "Icon";
memoResult.Sizes = IconSizes;
let size = fn(2);
const result = size.fileFinishedImporting("design/void/Icon/native/Icon.tsx");

export default memoResult;
export { IconSizes };
export { getIconSize };
export { getIconStyle };
