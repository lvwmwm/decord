// Module ID: 8393
// Function ID: 66797
// Name: getTheme
// Dependencies: [31, 27, 33, 8394, 8398]

// Module 8393 (getTheme)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { DatePickerAndroid } from "getStyle";

let Platform;
let Text;
let closure_2;
const require = arg1;
({ Appearance: closure_2, Platform, Text } = get_ActivityIndicator);
function getTheme(theme) {
  if (theme.theme) {
    return theme.theme;
  } else if (colorScheme) {
    colorScheme = colorScheme.getColorScheme();
    let tmp5;
    if (null !== colorScheme) {
      tmp5 = colorScheme;
    }
    return tmp5;
  } else {
    return "auto";
  }
}
function getDividerColor(dividerColor) {
  if (dividerColor.dividerColor) {
    return dividerColor.dividerColor;
  } else {
    const tmp2 = getTheme(dividerColor);
    let str = "white";
    if ("dark" !== tmp2) {
      let str4;
      if ("light" === tmp2) {
        str4 = "black";
      }
      str = str4;
    }
    return str;
  }
}
function getTextColor(arg0) {
  const tmp = getTheme(arg0);
  let str = "white";
  if ("dark" !== tmp) {
    let str3;
    if ("light" === tmp) {
      str3 = "black";
    }
    str = str3;
  }
  return str;
}
function getButtonColor(buttonColor) {
  if (buttonColor.buttonColor) {
    return buttonColor.buttonColor;
  } else {
    const tmp2 = getTheme(buttonColor);
    let str = "white";
    if ("dark" !== tmp2) {
      let str4;
      if ("light" === tmp2) {
        str4 = "black";
      }
      str = str4;
    }
    return str;
  }
}
function getTitle(title) {
  title = title.title;
  let str = "";
  if (null !== title) {
    if (!title) {
      let str2 = "Select date";
      if ("time" === tmp) {
        str2 = "Select time";
      }
      title = str2;
    }
    str = title;
  }
  return str;
}

export default require("result").memo(function DatePickerWrapper(confirmText) {
  const obj = { textColor: require(8398) /* rgb2hex */.colorToHex(getTextColor(confirmText)) };
  const obj2 = require(8398) /* rgb2hex */;
  const tmp = jsx;
  const tmp2 = DatePickerAndroid;
  obj.dividerColor = require(8398) /* rgb2hex */.colorToHex(getDividerColor(confirmText));
  const obj3 = require(8398) /* rgb2hex */;
  obj.buttonColor = require(8398) /* rgb2hex */.colorToHex(getButtonColor(confirmText));
  obj.theme = getTheme(confirmText);
  obj.title = getTitle(confirmText);
  let str = "Confirm";
  if (confirmText.confirmText) {
    str = confirmText.confirmText;
  }
  obj.confirmText = str;
  let str2 = "Cancel";
  if (confirmText.cancelText) {
    str2 = confirmText.cancelText;
  }
  obj.cancelText = str2;
  let num = 1;
  if (confirmText.minuteInterval) {
    num = confirmText.minuteInterval;
  }
  obj.minuteInterval = num;
  let str3 = "datetime";
  if (confirmText.mode) {
    str3 = confirmText.mode;
  }
  obj.mode = str3;
  let str4 = "";
  if (null != confirmText.timeZoneOffsetInMinutes) {
    str4 = confirmText.timeZoneOffsetInMinutes.toString();
    const str5 = confirmText.timeZoneOffsetInMinutes;
  }
  obj.timeZoneOffsetInMinutes = str4;
  return tmp(tmp2, Object.assign({}, confirmText, obj));
});
