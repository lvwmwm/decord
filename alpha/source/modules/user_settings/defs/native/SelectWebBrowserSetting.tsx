// Module ID: 17398
// Function ID: 17399
// Name: SelectWebBrowserSetting
// Dependencies: [8424, 5737, 1114, 1093, 1376, 11505, 2]
// Exports: useWebBrowserSettingOptions

// Module 17398 (SelectWebBrowserSetting)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import intl4 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import BrowserManager from "BrowserManager" /* 5737 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

function useWebBrowserSettingOptions() {
  let intl;
  let intl2;
  const items = [];
  const obj = BrowserManager;
  const browserManagerIsChromeInstalled = obj.useBrowserManagerIsChromeInstalled();
  const obj2 = BrowserManager;
  if (obj2.useBrowserManagerSupportsInAppBrowser()) {
    const push = items.push;
    const obj3 = { label: intl.string(intl4.t.YayR6P), value: ConstantsIOS.WebBrowserType.IN_APP };
    intl = tmp(1114).intl;
    push(obj3);
  }
  const tmpResult = PlatformUtils;
  if (!tmpResult.isAndroid()) {
    const push2 = items.push;
    const obj4 = { label: intl2.string(intl4.t.kEfv89), value: ConstantsIOS.WebBrowserType.SAFARI };
    intl2 = tmp(1114).intl;
    push2(obj4);
  }
  if (browserManagerIsChromeInstalled) {
    let stringResult;
    const push3 = items.push;
    const tmpResult2 = PlatformUtils;
    const isAndroidResult = tmpResult2.isAndroid();
    const intl3 = tmp(1114).intl;
    const string = intl3.string;
    const t = tmp(1114).t;
    if (isAndroidResult) {
      stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    const obj5 = { label: stringResult, value: ConstantsIOS.WebBrowserType.CHROME };
    push3(obj5);
  }
  return items;
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["C+DkPu"]);
  },
  parent: MobileUserSettings.WEB_BROWSER,
  useValue: function useWebBrowserSettingValue() {
    const obj = BrowserManager;
    return obj.useBrowserManagerSelectedBrowser();
  },
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const obj = BrowserManager;
    const result = obj.browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: useWebBrowserSettingOptions
};
const radio = SettingBuilders.createRadio(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export { useWebBrowserSettingOptions };
