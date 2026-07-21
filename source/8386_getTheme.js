// Module ID: 8386
// Function ID: 66748
// Name: getTheme
// Dependencies: []

// Module 8386 (getTheme)
let Platform;
let Text;
const importDefaultResult = importDefault(dependencyMap[0]);
({ Appearance: closure_2, Platform, Text } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const DatePickerAndroid = arg1(dependencyMap[3]).DatePickerAndroid;
function getTheme(theme) {
  if (theme.theme) {
    return theme.theme;
  } else if (colorScheme) {
    const colorScheme = colorScheme.getColorScheme();
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

export default importDefaultResult.memo(function DatePickerWrapper(confirmText) {
  const obj = { textColor: arg1(dependencyMap[4]).colorToHex(getTextColor(confirmText)) };
  const obj2 = arg1(dependencyMap[4]);
  const tmp = jsx;
  const tmp2 = DatePickerAndroid;
  obj.dividerColor = arg1(dependencyMap[4]).colorToHex(getDividerColor(confirmText));
  const obj3 = arg1(dependencyMap[4]);
  obj.buttonColor = arg1(dependencyMap[4]).colorToHex(getButtonColor(confirmText));
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
