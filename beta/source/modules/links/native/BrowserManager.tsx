// Module ID: 4797
// Function ID: 4798
// Name: BrowserManager
// Dependencies: [5, 17, 1364, 4798, 4799, 560, 1094, 4525, 1370, 2]
// Exports: browserManagerClearWebsiteData, browserManagerCloseBrowser, browserManagerOpenUrl, browserManagerSelectBrowser, getBrowserManagerIsChromeInstalled, getBrowserManagerSelectedBrowser, getIsInAppBrowserOpen, openPlayStoreInlineInstall, subscribeToIsInAppBrowserOpen, useBrowserManagerIsChromeInstalled, useBrowserManagerSelectedBrowser, useBrowserManagerSupportsInAppBrowser, useIsInAppBrowserOpen

// Module 4797 (BrowserManager)
import react_native from "react-native" /* 17 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import LinkingDefault from "Linking" /* 4525 */;
import react_native2 from "react-native" /* 4798 */;
import react_nativeDefault2 from "react-native" /* 4799 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react_nativeDefault = react_native2;
let c0, c1, closure_7;

let importDefaultResult;
let tmp2;
const GlobalUtils = tmp2(1370);
let obj = function _browserManagerClearWebsiteData() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj2 = PlatformUtils;
            const tmp5 = dependencyMap;
            if (obj2.isIOS()) {
              c1 = 1;
              c0 = 1;
              const obj6 = { value: obj3.clearWebsiteData(), done: false };
              obj3 = require("react-native");
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
const AppState = react_native.AppState;
if (PlatformUtils.isAndroid()) {
  importDefaultResult = react_nativeDefault;
} else {
  importDefaultResult = react_nativeDefault2;
}
const hasOwnProperty = importDefaultResult;
function getBrowserManagerIsChromeInstalled() {
  return closure_6.getState().isChromeInstalled;
}
function getBrowserManagerSelectedBrowser() {
  return closure_6.getState().selectedBrowser;
}
let closure_6 = module_560.create(() => {
  obj = { isInAppBrowserOpen: false };
  const merged = Object.assign(hasOwnProperty.getConstants());
  return obj;
});
let c7 = null;
let result = size.fileFinishedImporting("modules/links/native/BrowserManager.tsx");

export const useBrowserManagerIsChromeInstalled = function useBrowserManagerIsChromeInstalled() {
  return closure_6((isChromeInstalled) => isChromeInstalled.isChromeInstalled);
};
export { getBrowserManagerIsChromeInstalled };
export const useBrowserManagerSupportsInAppBrowser = function useBrowserManagerSupportsInAppBrowser() {
  return closure_6((supportsInAppBrowser) => supportsInAppBrowser.supportsInAppBrowser);
};
export const useBrowserManagerSelectedBrowser = function useBrowserManagerSelectedBrowser() {
  return closure_6((selectedBrowser) => selectedBrowser.selectedBrowser);
};
export { getBrowserManagerSelectedBrowser };
export const useIsInAppBrowserOpen = function useIsInAppBrowserOpen() {
  return closure_6((isInAppBrowserOpen) => isInAppBrowserOpen.isInAppBrowserOpen);
};
export const getIsInAppBrowserOpen = function getIsInAppBrowserOpen() {
  return closure_6.getState().isInAppBrowserOpen;
};
export const subscribeToIsInAppBrowserOpen = function subscribeToIsInAppBrowserOpen(arg0) {
  let closure_0 = arg0;
  return closure_6.subscribe((isInAppBrowserOpen, isInAppBrowserOpen2) => {
    if (isInAppBrowserOpen.isInAppBrowserOpen !== isInAppBrowserOpen2.isInAppBrowserOpen) {
      closure_0(isInAppBrowserOpen.isInAppBrowserOpen, isInAppBrowserOpen2.isInAppBrowserOpen);
    }
  });
};
export const browserManagerOpenUrl = function browserManagerOpenUrl(tryHandleUniversalLink, CHROME) {
  let selectedBrowser = CHROME;
  if (CHROME === undefined) {
    selectedBrowser = state.getState().selectedBrowser;
  }
  let tmp2 = require;
  if (selectedBrowser !== ConstantsIOS.WebBrowserType.SAFARI) {
    if (selectedBrowser !== ConstantsIOS.WebBrowserType.CHROME) {
      if (selectedBrowser === ConstantsIOS.WebBrowserType.IN_APP) {
        let tmp2Result = PlatformUtils;
      }
      if (ConstantsIOS.WebBrowserType.IN_APP === selectedBrowser) {
        const openInAppURLResult = hasOwnProperty.openInAppURL(tryHandleUniversalLink);
        return openInAppURLResult.then((result) => {
          if (false !== result) {
            state.setState({ isInAppBrowserOpen: true });
            const obj4 = closure_7;
            if (closure_7 != null) {
              obj4.remove();
            }
            closure_7 = null;
            obj = PlatformUtils;
            const tmp2 = require;
            if (obj.isIOS()) {
              const obj3 = react_nativeDefault2;
              closure_7 = obj3.onSafariViewControllerDidFinish(() => {
                state.setState({ isInAppBrowserOpen: false });
                obj = c7;
                if (c7 != null) {
                  obj.remove();
                }
                c7 = null;
              });
            } else {
              const tmp2Result = tmp2(dependencyMap[2]);
              if (tmp2Result.isAndroid()) {
                closure_7 = AppState.addEventListener("change", (event) => {
                  const isInAppBrowserOpen = "active" === event && state.getState().isInAppBrowserOpen;
                  if (isInAppBrowserOpen) {
                    state.setState({ isInAppBrowserOpen: false });
                    obj = c7;
                    if (c7 != null) {
                      obj.remove();
                    }
                    c7 = null;
                  }
                });
              }
            }
          }
        });
      } else if (ConstantsIOS.WebBrowserType.CHROME === selectedBrowser) {
        let openInChromeURLResult;
        const tmp2Result3 = PlatformUtils;
        if (tmp2Result3.isAndroid()) {
          const tmp6Result = react_nativeDefault;
          openInChromeURLResult = tmp6Result.openInChromeURL(tryHandleUniversalLink);
        } else {
          const tmp6Result2 = react_nativeDefault2;
          openInChromeURLResult = tmp6Result2.openInChromeURL(tryHandleUniversalLink, true);
        }
        return openInChromeURLResult;
      } else {
        const tmp2Result4 = GlobalUtils;
        return tmp2Result4.assertNever(selectedBrowser);
      }
    }
  }
  const obj6 = LinkingDefault;
  obj6.performURLNavigation(tryHandleUniversalLink);
  return Promise.resolve();
};
export const browserManagerSelectBrowser = function browserManagerSelectBrowser(selectedBrowser) {
  obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj3 = {};
    obj3[ConstantsIOS.WebBrowserType.SAFARI] = react_native2.BrowserType.SAFARI;
    obj3[ConstantsIOS.WebBrowserType.IN_APP] = react_native2.BrowserType.IN_APP;
    obj3[ConstantsIOS.WebBrowserType.CHROME] = react_native2.BrowserType.CHROME;
    if (null != obj3[selectedBrowser]) {
      const obj4 = react_nativeDefault;
      const browser = obj4.selectBrowser(tmp5);
    }
  } else {
    const obj2 = react_nativeDefault2;
    const browser1 = obj2.selectBrowser(selectedBrowser);
  }
  const obj5 = { selectedBrowser };
  closure_6.setState(obj5);
};
export const browserManagerCloseBrowser = function browserManagerCloseBrowser() {
  closure_6.setState({ isInAppBrowserOpen: false });
  obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj2 = react_nativeDefault2;
    obj2.closeBrowser();
  }
};
export const browserManagerClearWebsiteData = function browserManagerClearWebsiteData() {
  return obj(...arguments);
};
export const openPlayStoreInlineInstall = function openPlayStoreInlineInstall(url, appId, arg2, impressionToken) {
  let openPlayStoreInlineResult;
  let closure_0 = arg2;
  let closure_1 = Date.now();
  const tmp = dependencyMap;
  obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj3 = react_nativeDefault;
    openPlayStoreInlineResult = obj3.openPlayStoreInline(url, appId, function callback() {
      if (closure_0 != null) {
        tmp2(tmp);
      }
    });
  } else {
    const tmp2 = null;
    if (null == appId) {
      openPlayStoreInlineResult = Promise.resolve(false);
    } else {
      if (null != arg2) {
        const obj2 = react_nativeDefault2;
        const result = obj2.setOpenAppStoreDismissCallback(() => {
          closure_0(Date.now() - closure_1);
        });
      }
      impressionToken = undefined;
      const openAppStoreInline = react_nativeDefault2.openAppStoreInline;
      react_nativeDefault2;
      if (impressionToken != null) {
        impressionToken = impressionToken.impressionToken;
      }
      if (impressionToken == null) {
        impressionToken = null;
      }
      openPlayStoreInlineResult = openAppStoreInline(url, appId, impressionToken);
    }
  }
  return openPlayStoreInlineResult;
};
