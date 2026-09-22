// Module ID: 15563
// Function ID: 15564
// Name: SelectWebBrowserSetting
// Dependencies: [8079, 4601, 1114, 1093, 1363, 11605, 2]
// Exports: useWebBrowserSettingOptions

// Module 15563 (SelectWebBrowserSetting)
import util from "util" /* 1114 */;
import BrowserManager from "BrowserManager" /* 4601 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

function useWebBrowserSettingOptions() {
  let CHROME = dependencyMap;
  const items = [];
  const browserManagerIsChromeInstalled = BrowserManager.useBrowserManagerIsChromeInstalled();
  if (obj2.useBrowserManagerSupportsInAppBrowser()) {
    const obj3 = { label: null, value: null };
    const intl = tmp(1114).intl;
    obj3.label = intl.string(tmp(1114).t.YayR6P);
    obj3.value = tmp(1093).WebBrowserType.IN_APP;
    items.push(obj3);
  }
  obj2 = BrowserManager;
  if (!tmpResult.isAndroid()) {
    const obj4 = { label: null, value: null };
    const intl2 = tmp(1114).intl;
    obj4.label = intl2.string(tmp(1114).t.kEfv89);
    obj4.value = tmp(1093).WebBrowserType.SAFARI;
    items.push(obj4);
  }
  if (!browserManagerIsChromeInstalled) {
    return items;
  } else {
    const tmpResult2 = tmp(1363);
    const intl3 = tmp(1114).intl;
    const string = intl3.string;
    let t = tmp(1114).t;
    if (isAndroidResult) {
      let stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    const obj5 = { label: stringResult, value: null };
    CHROME = tmp(1093).WebBrowserType.CHROME;
    obj5.value = CHROME;
    t = items.push(obj5);
    isAndroidResult = tmp(1363).isAndroid();
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
