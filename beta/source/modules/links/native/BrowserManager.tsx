// Module ID: 4754
// Function ID: 4755
// Name: BrowserManager
// Dependencies: [5, 17, 1368, 4755, 4756, 562, 558, 568, 1098, 4487, 1374, 2]
// Exports: browserManagerClearWebsiteData, browserManagerCloseBrowser, browserManagerOpenUrl, browserManagerSelectBrowser, getBrowserManagerIsChromeInstalled, getBrowserManagerSelectedBrowser, getIsInAppBrowserOpen, openPlayStoreInlineInstall, subscribeToIsInAppBrowserOpen

// Module 4754 (BrowserManager)
import c from "c" /* 568 */;
import ConstantsIOS from "ConstantsIOS" /* 1098 */;
import PlatformUtils2 from "PlatformUtils" /* 1368 */;
import LinkingDefault from "Linking" /* 4487 */;
import NativeBrowserManagerModuleDefault from "NativeBrowserManagerModule" /* 4755 */;
import NativeBrowserManagerModuleIOSDefault from "NativeBrowserManagerModuleIOS" /* 4756 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

require = fn;
let closure_8 = async function _browserManagerClearWebsiteData(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "IconComponent", done: null };
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
          if (obj2.isIOS()) {
            c1 = 1;
            c0 = 1;
            const obj6 = { value: require("NativeBrowserManagerModuleIOS").clearWebsiteData(), done: false };
            return obj6;
          }
          obj2 = PlatformUtils2;
          tmp6 = dependencyMap;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c0 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
};
const AppState = fn(17).AppState;
const PlatformUtils = fn(1368);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = NativeBrowserManagerModuleDefault;
} else {
  importDefaultResult = NativeBrowserManagerModuleIOSDefault;
}
const hasOwnProperty = importDefaultResult;
const module_562 = fn(562);
let closure_6 = module_562.create(() => {
  const obj = {};
  const merged = Object.assign(importDefaultResult.getConstants());
  obj.isInAppBrowserOpen = false;
  return obj;
});
let c7 = null;
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isChromeInstalled) {
      return isChromeInstalled.isChromeInstalled;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first);
}) : (() => closure_6((isChromeInstalled) => isChromeInstalled.isChromeInstalled));
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(supportsInAppBrowser) {
      return supportsInAppBrowser.supportsInAppBrowser;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first);
}) : (() => closure_6((supportsInAppBrowser) => supportsInAppBrowser.supportsInAppBrowser));
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(selectedBrowser) {
      return selectedBrowser.selectedBrowser;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first);
}) : (() => closure_6((selectedBrowser) => selectedBrowser.selectedBrowser));
function getBrowserManagerIsChromeInstalled() {
  return closure_6.getState().isChromeInstalled;
}
function getBrowserManagerSelectedBrowser() {
  return closure_6.getState().selectedBrowser;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/links/native/BrowserManager.tsx");

export const useBrowserManagerIsChromeInstalled = tmp3;
export { getBrowserManagerIsChromeInstalled };
export const useBrowserManagerSupportsInAppBrowser = tmp4;
export const useBrowserManagerSelectedBrowser = tmp5;
export { getBrowserManagerSelectedBrowser };
export const useIsInAppBrowserOpen = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isInAppBrowserOpen) {
      return isInAppBrowserOpen.isInAppBrowserOpen;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first);
}) : (() => closure_6((isInAppBrowserOpen) => isInAppBrowserOpen.isInAppBrowserOpen));
export const getIsInAppBrowserOpen = function getIsInAppBrowserOpen() {
  return closure_6.getState().isInAppBrowserOpen;
};
export const subscribeToIsInAppBrowserOpen = function subscribeToIsInAppBrowserOpen(arg0) {
  closure_0 = arg0;
  return closure_6.subscribe((isInAppBrowserOpen, isInAppBrowserOpen2) => {
    if (isInAppBrowserOpen.isInAppBrowserOpen !== isInAppBrowserOpen2.isInAppBrowserOpen) {
      closure_0(isInAppBrowserOpen.isInAppBrowserOpen, isInAppBrowserOpen2.isInAppBrowserOpen);
    }
  });
};
export const browserManagerOpenUrl = function browserManagerOpenUrl(href, CHROME) {
  let selectedBrowser = CHROME;
  if (CHROME === undefined) {
    selectedBrowser = state.getState().selectedBrowser;
  }
  if (selectedBrowser !== ConstantsIOS.WebBrowserType.SAFARI) {
    if (selectedBrowser !== tmp2(1098).WebBrowserType.CHROME) {
      if (selectedBrowser === tmp2(1098).WebBrowserType.IN_APP) {
        let tmp2Result = tmp2(1368);
      }
      if (tmp2(1098).WebBrowserType.IN_APP === selectedBrowser) {
        return importDefaultResult.openInAppURL(href).then((result) => {
          if (false !== result) {
            state.setState({ isInAppBrowserOpen: true });
            if (_null != null) {
              obj4.remove();
            }
            _null = null;
            if (obj.isIOS()) {
              _null = require("NativeBrowserManagerModuleIOS").onSafariViewControllerDidFinish(() => {
                state.setState({ isInAppBrowserOpen: false });
                if (_null != null) {
                  _null.remove();
                }
                _null = null;
              });
              const obj3 = require("NativeBrowserManagerModuleIOS");
            } else {
              if (tmp2Result.isAndroid()) {
                _null = AppState.addEventListener("change", (event) => {
                  let isInAppBrowserOpen = "active" === event;
                  if (isInAppBrowserOpen) {
                    isInAppBrowserOpen = state.getState().isInAppBrowserOpen;
                  }
                  if (isInAppBrowserOpen) {
                    state.setState({ isInAppBrowserOpen: false });
                    if (c7 != null) {
                      obj.remove();
                    }
                    c7 = null;
                    obj = c7;
                  }
                });
              }
              tmp2Result = tmp2(tmp3[2]);
            }
            obj = PlatformUtils2;
            obj4 = _null;
            tmp2 = require;
          }
        });
      } else if (tmp2(1098).WebBrowserType.CHROME === selectedBrowser) {
        if (tmp2Result3.isAndroid()) {
          let openInChromeURLResult = tmp6(4755).openInChromeURL(href);
          const tmp6Result = tmp6(4755);
        } else {
          openInChromeURLResult = tmp6(4756).openInChromeURL(href, true);
          const tmp6Result2 = tmp6(4756);
        }
        return openInChromeURLResult;
      } else {
        return tmp2(1374).assertNever(selectedBrowser);
      }
    }
  }
  LinkingDefault.performURLNavigation(href);
  return Promise.resolve();
};
export const browserManagerSelectBrowser = function browserManagerSelectBrowser(selectedBrowser) {
  if (obj.isAndroid()) {
    const obj3 = {};
    obj3[tmp(1098).WebBrowserType.SAFARI] = tmp(4755).BrowserType.SAFARI;
    obj3[tmp(1098).WebBrowserType.IN_APP] = tmp(4755).BrowserType.IN_APP;
    obj3[tmp(1098).WebBrowserType.CHROME] = tmp(4755).BrowserType.CHROME;
    if (null != obj3[selectedBrowser]) {
      const browser = NativeBrowserManagerModuleDefault.selectBrowser(tmp5);
    }
  } else {
    const browser1 = NativeBrowserManagerModuleIOSDefault.selectBrowser(selectedBrowser);
  }
  closure_6.setState({ selectedBrowser });
};
export const browserManagerCloseBrowser = function browserManagerCloseBrowser() {
  closure_6.setState({ isInAppBrowserOpen: false });
  if (obj.isIOS()) {
    NativeBrowserManagerModuleIOSDefault.closeBrowser();
  }
};
export const browserManagerClearWebsiteData = function browserManagerClearWebsiteData() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const openPlayStoreInlineInstall = function openPlayStoreInlineInstall(url, appId, arg2, impressionToken) {
  closure_0 = arg2;
  closure_1 = Date.now();
  if (obj.isAndroid()) {
    let openPlayStoreInlineResult = NativeBrowserManagerModuleDefault.openPlayStoreInline(url, appId, function callback() {
      if (closure_0 != null) {
        tmp2(tmp);
      }
    });
  } else if (null == appId) {
    openPlayStoreInlineResult = Promise.resolve(false);
  } else {
    if (null != arg2) {
      const result = NativeBrowserManagerModuleIOSDefault.setOpenAppStoreDismissCallback(() => {
        closure_0(Date.now() - closure_1);
      });
    }
    impressionToken = undefined;
    if (impressionToken != null) {
      impressionToken = impressionToken.impressionToken;
    }
    if (impressionToken == null) {
      impressionToken = null;
    }
    openPlayStoreInlineResult = NativeBrowserManagerModuleIOSDefault.openAppStoreInline(url, appId, impressionToken);
  }
  return openPlayStoreInlineResult;
};
