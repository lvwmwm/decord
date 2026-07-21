// Module ID: 1109
// Function ID: 12640
// Name: _getClientIntegration
// Dependencies: []

// Module 1109 (_getClientIntegration)
let fn = this;
if (this) {
  fn = this.__rest;
}
if (!fn) {
  fn = (obj, arr) => {
    obj = {};
    for (const key10007 in arg0) {
      let tmp3 = key10007;
      let _Object3 = Object;
      let callResult = hasOwnProperty.call(arg0, key10007);
      if (callResult) {
        callResult = arg1.indexOf(key10007) < 0;
      }
      if (!callResult) {
        continue;
      } else {
        obj[key10007] = arg0[key10007];
        // continue
      }
      continue;
    }
    if (null != obj) {
      const _Object4 = Object;
      if ("function" === typeof Object.getOwnPropertySymbols) {
        const _Object = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        for (let num = 0; num < ownPropertySymbols.length; num = num + 1) {
          let callResult1 = arr.indexOf(ownPropertySymbols[num]) < 0;
          if (callResult1) {
            let _Object2 = Object;
            callResult1 = propertyIsEnumerable.call(obj, ownPropertySymbols[num]);
          }
          if (callResult1) {
            obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
          }
        }
      }
    }
    return obj;
  };
}
let closure_3 = "MobileFeedback";
function _getClientIntegration() {
  const client = arg1(arg6[0]).getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(closure_3);
    }
  }
  return integrationByName;
}
arg5.MOBILE_FEEDBACK_INTEGRATION_NAME = "MobileFeedback";
arg5.feedbackIntegration = function feedbackIntegration() {
  let buttonOptions;
  let colorScheme;
  let screenshotButtonOptions;
  let themeDark;
  let themeLight;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    ({ buttonOptions, screenshotButtonOptions, colorScheme, themeLight, themeDark } = first);
    const obj = { name: closure_3, options: fn(first, [false, false, false, false, false]) };
    if (!buttonOptions) {
      buttonOptions = {};
    }
    obj.buttonOptions = buttonOptions;
    if (!screenshotButtonOptions) {
      screenshotButtonOptions = {};
    }
    obj.screenshotButtonOptions = screenshotButtonOptions;
    if (!colorScheme) {
      colorScheme = "system";
    }
    obj.colorScheme = colorScheme;
    if (!themeLight) {
      themeLight = {};
    }
    obj.themeLight = themeLight;
    if (!themeDark) {
      themeDark = {};
    }
    obj.themeDark = themeDark;
    return obj;
  }
  first = {};
};
arg5.getFeedbackOptions = function getFeedbackOptions() {
  const tmp = _getClientIntegration();
  return tmp ? tmp.options : {};
};
arg5.getFeedbackButtonOptions = function getFeedbackButtonOptions() {
  const tmp = _getClientIntegration();
  return tmp ? tmp.buttonOptions : {};
};
arg5.getScreenshotButtonOptions = function getScreenshotButtonOptions() {
  const tmp = _getClientIntegration();
  return tmp ? tmp.screenshotButtonOptions : {};
};
arg5.getColorScheme = function getColorScheme() {
  let colorScheme;
  const tmp2 = _getClientIntegration();
  if (null != tmp2) {
    colorScheme = tmp2.colorScheme;
  }
  let str = "system";
  if (colorScheme) {
    str = tmp2.colorScheme;
  }
  return str;
};
arg5.getFeedbackLightTheme = function getFeedbackLightTheme() {
  const tmp = _getClientIntegration();
  return tmp ? tmp.themeLight : {};
};
arg5.getFeedbackDarkTheme = function getFeedbackDarkTheme() {
  const tmp = _getClientIntegration();
  return tmp ? tmp.themeDark : {};
};
