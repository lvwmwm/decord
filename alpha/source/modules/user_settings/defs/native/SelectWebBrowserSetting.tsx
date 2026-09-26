// Module ID: 15029
// Function ID: 15030
// Name: SelectWebBrowserSetting
// Dependencies: [7417, 4797, 1115, 1094, 1364, 11006, 2]
// Exports: useWebBrowserSettingOptions

// Module 15029 (SelectWebBrowserSetting)
import util from "util" /* 1115 */;
import BrowserManager from "BrowserManager" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

function useWebBrowserSettingOptions() {
  let CHROME = dependencyMap;
  const items = [];
  const browserManagerIsChromeInstalled = BrowserManager.useBrowserManagerIsChromeInstalled();
  if (obj2.useBrowserManagerSupportsInAppBrowser()) {
    const obj3 = { label: null, value: null };
    const intl = tmp(1115).intl;
    obj3.label = intl.string(tmp(1115).t.YayR6P);
    obj3.value = tmp(1094).WebBrowserType.IN_APP;
    items.push(obj3);
  }
  obj2 = BrowserManager;
  if (!tmpResult.isAndroid()) {
    const obj4 = { label: null, value: null };
    const intl2 = tmp(1115).intl;
    obj4.label = intl2.string(tmp(1115).t.kEfv89);
    obj4.value = tmp(1094).WebBrowserType.SAFARI;
    items.push(obj4);
  }
  if (!browserManagerIsChromeInstalled) {
    return items;
  } else {
    const tmpResult2 = tmp(1364);
    const intl3 = tmp(1115).intl;
    const string = intl3.string;
    let t = tmp(1115).t;
    if (isAndroidResult) {
      let stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    const obj5 = { label: stringResult, value: null };
    CHROME = tmp(1094).WebBrowserType.CHROME;
    obj5.value = CHROME;
    t = items.push(obj5);
    isAndroidResult = tmp(1364).isAndroid();
  }
}
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["C+DkPu"]);
  },
  parent: SettingsConstants.MobileUserSettings.WEB_BROWSER,
  useValue: function useWebBrowserSettingValue() {
    return BrowserManager.useBrowserManagerSelectedBrowser();
  },
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const result = BrowserManager.browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: useWebBrowserSettingOptions
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export { useWebBrowserSettingOptions };
