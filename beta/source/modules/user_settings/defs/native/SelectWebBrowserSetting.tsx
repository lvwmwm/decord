// Module ID: 15740
// Function ID: 15741
// Name: SelectWebBrowserSetting
// Dependencies: [8238, 558, 4722, 568, 1119, 1098, 1368, 11594, 2]

// Module 15740 (SelectWebBrowserSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import BrowserManager from "BrowserManager" /* 4722 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let CHROME = dependencyMap;
  const cResult = c.c(6);
  const browserManagerIsChromeInstalled = BrowserManager.useBrowserManagerIsChromeInstalled();
  const browserManagerSupportsInAppBrowser = BrowserManager.useBrowserManagerSupportsInAppBrowser();
  if (cResult[0] === browserManagerIsChromeInstalled) {
    if (cResult[1] === browserManagerSupportsInAppBrowser) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const items = [];
  if (!browserManagerSupportsInAppBrowser) {
    if (tmpResult.isAndroid()) {
      if (!browserManagerIsChromeInstalled) {
        cResult[0] = browserManagerIsChromeInstalled;
        cResult[1] = browserManagerSupportsInAppBrowser;
        cResult[2] = items;
        tmp5 = items;
      } else {
        const _Symbol3 = Symbol;
        if (cResult[5] !== Symbol.for("react.memo_cache_sentinel")) {
          items.push(cResult[5]);
        }
        const tmpResult2 = tmp(1368);
        const intl3 = tmp(1119).intl;
        const string = intl3.string;
        let t = tmp(1119).t;
        if (isAndroidResult) {
          let stringResult = string(t.kEfv89);
        } else {
          stringResult = string(t.FfjVVt);
        }
        t = { label: stringResult, value: null };
        CHROME = tmp(1098).WebBrowserType.CHROME;
        t.value = CHROME;
        cResult[5] = t;
        isAndroidResult = tmp(1368).isAndroid();
      }
    } else {
      const _Symbol2 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { label: null, value: null };
        const intl2 = tmp(1119).intl;
        obj4.label = intl2.string(tmp(1119).t.kEfv89);
        obj4.value = tmp(1098).WebBrowserType.SAFARI;
        cResult[4] = obj4;
        let tmp10 = obj4;
      } else {
        tmp10 = cResult[4];
      }
      items.push(tmp10);
    }
    tmpResult = tmp(1368);
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { label: null, value: null };
      const intl = tmp(1119).intl;
      obj5.label = intl.string(tmp(1119).t.YayR6P);
      obj5.value = tmp(1098).WebBrowserType.IN_APP;
      cResult[3] = obj5;
      let tmp7 = obj5;
    } else {
      tmp7 = cResult[3];
    }
    items.push(tmp7);
  }
}) : (() => {
  let CHROME = dependencyMap;
  const items = [];
  const browserManagerIsChromeInstalled = BrowserManager.useBrowserManagerIsChromeInstalled();
  if (obj2.useBrowserManagerSupportsInAppBrowser()) {
    const obj3 = { label: null, value: null };
    const intl = tmp(1119).intl;
    obj3.label = intl.string(tmp(1119).t.YayR6P);
    obj3.value = tmp(1098).WebBrowserType.IN_APP;
    items.push(obj3);
  }
  obj2 = BrowserManager;
  if (!tmpResult.isAndroid()) {
    const obj4 = { label: null, value: null };
    const intl2 = tmp(1119).intl;
    obj4.label = intl2.string(tmp(1119).t.kEfv89);
    obj4.value = tmp(1098).WebBrowserType.SAFARI;
    items.push(obj4);
  }
  if (!browserManagerIsChromeInstalled) {
    return items;
  } else {
    const tmpResult2 = tmp(1368);
    const intl3 = tmp(1119).intl;
    const string = intl3.string;
    let t = tmp(1119).t;
    if (isAndroidResult) {
      let stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    const obj5 = { label: stringResult, value: null };
    CHROME = tmp(1098).WebBrowserType.CHROME;
    obj5.value = CHROME;
    t = items.push(obj5);
    isAndroidResult = tmp(1368).isAndroid();
  }
});
const fn = () => BrowserManager.useBrowserManagerSelectedBrowser();
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["C+DkPu"]);
  },
  parent: SettingsConstants.MobileUserSettings.WEB_BROWSER,
  useValue: fn,
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const result = BrowserManager.browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: tmp3
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export const useWebBrowserSettingOptions = tmp3;
