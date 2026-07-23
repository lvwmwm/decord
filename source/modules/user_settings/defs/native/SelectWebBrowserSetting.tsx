// Module ID: 14308
// Function ID: 109581
// Name: useWebBrowserSettingOptions
// Dependencies: [7662, 4096, 1212, 668, 477, 10095, 2]
// Exports: useWebBrowserSettingOptions

// Module 14308 (useWebBrowserSettingOptions)
import createToggle from "createToggle";

function useWebBrowserSettingOptions() {
  let obj = require(4096) /* removeInAppBrowserCloseSubscription */;
  const items = [];
  const browserManagerIsChromeInstalled = obj.useBrowserManagerIsChromeInstalled();
  let obj1 = require(4096) /* removeInAppBrowserCloseSubscription */;
  if (obj1.useBrowserManagerSupportsInAppBrowser()) {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.YayR6P);
    obj.value = require(668) /* keys */.WebBrowserType.IN_APP;
    items.push(obj);
  }
  if (!obj4.isAndroid()) {
    obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl2.string(require(1212) /* getSystemLocale */.t.kEfv89);
    obj.value = require(668) /* keys */.WebBrowserType.SAFARI;
    items.push(obj);
  }
  if (!browserManagerIsChromeInstalled) {
    return items;
  } else {
    obj1 = {};
    const obj7 = require(477) /* set */;
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const string = intl3.string;
    let t = require(1212) /* getSystemLocale */.t;
    if (isAndroidResult) {
      let stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    obj1.label = stringResult;
    t = dependencyMap;
    obj1.value = require(668) /* keys */.WebBrowserType.CHROME;
    obj1 = items.push(obj1);
    isAndroidResult = require(477) /* set */.isAndroid();
  }
}
const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["C+DkPu"]);
  },
  parent: require("MobileSetting").MobileSetting.WEB_BROWSER,
  useValue: function useWebBrowserSettingValue() {
    return require(4096) /* removeInAppBrowserCloseSubscription */.useBrowserManagerSelectedBrowser();
  },
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const result = require(4096) /* removeInAppBrowserCloseSubscription */.browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: useWebBrowserSettingOptions
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["C+DkPu"]);
  },
  parent: require("MobileSetting").MobileSetting.WEB_BROWSER,
  useValue: function useWebBrowserSettingValue() {
    return require(4096) /* removeInAppBrowserCloseSubscription */.useBrowserManagerSelectedBrowser();
  },
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const result = require(4096) /* removeInAppBrowserCloseSubscription */.browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: useWebBrowserSettingOptions
};
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export { useWebBrowserSettingOptions };
