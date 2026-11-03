// Module ID: 7074
// Function ID: 7075
// Name: useAuthBackgroundVariant
// Dependencies: [32, 19, 1493, 2]
// Exports: default, getInitialAuthBackgroundVariant, getNextAuthBackgroundVariant

// Module 7074 (useAuthBackgroundVariant)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/auth/native/useAuthBackgroundVariant.tsx");

export default function useAuthBackgroundVariant() {
  let first;
  let height;
  let tmp5;
  let width;
  const tmp = useWindowDimensionsDefault({ ignoreKeyboard: true });
  ({ width, height } = tmp);
  let result = null;
  if (width > 0) {
    result = null;
    if (height > 0) {
      result = width / height;
    }
  }
  [first, tmp5] = react.useState(() => {
    let str = "tall";
    if (null != result) {
      str = "tall";
      if (tmp >= 0.72) {
        str = "square";
      }
    }
    return str;
  });
  let tmp6 = first;
  if (null != result) {
    let str2;
    let str = "square";
    if ("square" === first) {
      if (result < 0.68) {
        str = "tall";
      }
      str2 = str;
    } else {
      str2 = "tall";
      if (result > 0.78) {
        str2 = str;
      }
    }
    tmp6 = str2;
  }
  if (tmp6 !== first) {
    tmp5(tmp6);
  }
  return tmp6;
};
export const AUTH_BACKGROUND_SQUARE_ASPECT_RATIO = 0.72;
export const AUTH_BACKGROUND_ENTER_SQUARE_ASPECT_RATIO = 0.78;
export const AUTH_BACKGROUND_EXIT_SQUARE_ASPECT_RATIO = 0.68;
export function getInitialAuthBackgroundVariant(arg0) {
  let str = "tall";
  if (null != arg0) {
    str = "tall";
    if (arg0 >= 0.72) {
      str = "square";
    }
  }
  return str;
}
export function getNextAuthBackgroundVariant(arg0, arg1) {
  let tmp = arg0;
  if (null != arg1) {
    let str2;
    let str = "square";
    if ("square" === arg0) {
      if (arg1 < 0.68) {
        str = "tall";
      }
      str2 = str;
    } else {
      str2 = "tall";
      if (arg1 > 0.78) {
        str2 = str;
      }
    }
    tmp = str2;
  }
  return tmp;
}
