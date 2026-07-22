// Module ID: 14194
// Function ID: 107425
// Name: useWebBrowserSettingOptions
// Dependencies: []
// Exports: useWebBrowserSettingOptions

// Module 14194 (useWebBrowserSettingOptions)
function useWebBrowserSettingOptions() {
  let obj = require(dependencyMap[1]);
  const items = [];
  const browserManagerIsChromeInstalled = obj.useBrowserManagerIsChromeInstalled();
  let obj1 = require(dependencyMap[1]);
  if (obj1.useBrowserManagerSupportsInAppBrowser()) {
    obj = {};
    const intl = require(dependencyMap[2]).intl;
    obj.label = intl.string(require(dependencyMap[2]).t.YayR6P);
    obj.value = require(dependencyMap[3]).WebBrowserType.IN_APP;
    items.push(obj);
  }
  if (!obj4.isAndroid()) {
    obj = {};
    const intl2 = require(dependencyMap[2]).intl;
    obj.label = intl2.string(require(dependencyMap[2]).t.kEfv89);
    obj.value = require(dependencyMap[3]).WebBrowserType.SAFARI;
    items.push(obj);
  }
  if (!browserManagerIsChromeInstalled) {
    return items;
  } else {
    obj1 = {};
    const obj7 = require(dependencyMap[4]);
    const intl3 = require(dependencyMap[2]).intl;
    const string = intl3.string;
    let t = require(dependencyMap[2]).t;
    if (isAndroidResult) {
      let stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    obj1.label = stringResult;
    t = dependencyMap;
    obj1.value = require(dependencyMap[3]).WebBrowserType.CHROME;
    obj1 = items.push(obj1);
    const isAndroidResult = require(dependencyMap[4]).isAndroid();
  }
}
const _module = require(dependencyMap[5]);
const radio = _module.createRadio({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.C+DkPu);
  },
  parent: require(dependencyMap[0]).MobileSetting.WEB_BROWSER,
  useValue: function useWebBrowserSettingValue() {
    return require(dependencyMap[1]).useBrowserManagerSelectedBrowser();
  },
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const result = require(dependencyMap[1]).browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: useWebBrowserSettingOptions
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export { useWebBrowserSettingOptions };
