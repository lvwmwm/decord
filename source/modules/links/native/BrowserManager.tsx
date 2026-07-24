// Module ID: 4096
// Function ID: 33918
// Name: removeInAppBrowserCloseSubscription
// Dependencies: [27, 621, 477, 4097, 668, 3827, 1327, 2]
// Exports: browserManagerCloseBrowser, browserManagerOpenUrl, browserManagerSelectBrowser, getIsInAppBrowserOpen, openPlayStoreInlineInstall, subscribeToIsInAppBrowserOpen, useBrowserManagerIsChromeInstalled, useBrowserManagerSelectedBrowser, useBrowserManagerSupportsInAppBrowser, useIsInAppBrowserOpen

// Module 4096 (removeInAppBrowserCloseSubscription)
import get_ActivityIndicator from "get ActivityIndicator";
import keys from "keys";

let NativeModules;
let closure_3;
let closure_4;
function removeInAppBrowserCloseSubscription() {
  if (null != c8) {
    c8.remove();
  }
  c8 = null;
}
function getBrowserManagerIsChromeInstalled() {
  return store.getState().isChromeInstalled;
}
function getBrowserManagerSelectedBrowser() {
  return store.getState().selectedBrowser;
}
({ AppState: closure_3, NativeEventEmitter: closure_4, NativeModules } = get_ActivityIndicator);
let BrowserManager = NativeModules.BrowserManager;
let closure_7 = keys.create(() => {
  const obj = {};
  if (obj2.isAndroid()) {
    let isChromeInstalled = importDefault(4097).getConstants().isChromeInstalled;
    const obj3 = importDefault(4097);
  } else {
    isChromeInstalled = BrowserManager.isChromeInstalled;
  }
  obj.isChromeInstalled = isChromeInstalled;
  obj2 = require(477) /* set */;
  if (obj4.isAndroid()) {
    let selectedBrowser = importDefault(4097).getConstants().selectedBrowser;
    const obj5 = importDefault(4097);
  } else {
    selectedBrowser = BrowserManager.selectedBrowser;
  }
  obj.selectedBrowser = selectedBrowser;
  obj4 = require(477) /* set */;
  if (obj6.isAndroid()) {
    let supportsInAppBrowser = importDefault(4097).getConstants().supportsInAppBrowser;
    const obj7 = importDefault(4097);
  } else {
    supportsInAppBrowser = BrowserManager.supportsInAppBrowser;
  }
  obj.supportsInAppBrowser = supportsInAppBrowser;
  obj.isInAppBrowserOpen = false;
  return obj;
});
let c8 = null;
let result = require("set").fileFinishedImporting("modules/links/native/BrowserManager.tsx");

export const useBrowserManagerIsChromeInstalled = function useBrowserManagerIsChromeInstalled() {
  return store((isChromeInstalled) => isChromeInstalled.isChromeInstalled);
};
export { getBrowserManagerIsChromeInstalled };
export const useBrowserManagerSupportsInAppBrowser = function useBrowserManagerSupportsInAppBrowser() {
  return store((supportsInAppBrowser) => supportsInAppBrowser.supportsInAppBrowser);
};
export const useBrowserManagerSelectedBrowser = function useBrowserManagerSelectedBrowser() {
  return store((selectedBrowser) => selectedBrowser.selectedBrowser);
};
export { getBrowserManagerSelectedBrowser };
export const useIsInAppBrowserOpen = function useIsInAppBrowserOpen() {
  return store((isInAppBrowserOpen) => isInAppBrowserOpen.isInAppBrowserOpen);
};
export const getIsInAppBrowserOpen = function getIsInAppBrowserOpen() {
  return store.getState().isInAppBrowserOpen;
};
export const subscribeToIsInAppBrowserOpen = function subscribeToIsInAppBrowserOpen(arg0) {
  let closure_0 = arg0;
  return store.subscribe((isInAppBrowserOpen, isInAppBrowserOpen2) => {
    if (isInAppBrowserOpen.isInAppBrowserOpen !== isInAppBrowserOpen2.isInAppBrowserOpen) {
      callback(isInAppBrowserOpen.isInAppBrowserOpen, isInAppBrowserOpen2.isInAppBrowserOpen);
    }
  });
};
export const browserManagerOpenUrl = function browserManagerOpenUrl(closure_0, CHROME) {
  let tmp = CHROME;
  if (CHROME === undefined) {
    tmp = getBrowserManagerSelectedBrowser();
  }
  if (tmp !== require(668) /* keys */.WebBrowserType.SAFARI) {
    if (tmp !== require(668) /* keys */.WebBrowserType.CHROME) {
      if (tmp === require(668) /* keys */.WebBrowserType.IN_APP) {
        let obj = require(477) /* set */;
      }
      if (require(668) /* keys */.WebBrowserType.IN_APP === tmp) {
        if (obj5.isAndroid()) {
          let openInAppURLResult = importDefault(4097).openInAppURL(closure_0);
          const obj6 = importDefault(4097);
        } else {
          openInAppURLResult = BrowserManager.openInAppURL(closure_0);
        }
        return openInAppURLResult.then((arg0) => {
          if (false !== arg0) {
            let obj = { isInAppBrowserOpen: true };
            outer1_7.setState(obj);
            (function subscribeToInAppBrowserClose() {
              outer2_9();
              if (obj.isIOS()) {
                const prototype = outer2_4.prototype;
                const obj3 = new outer2_4(outer2_6);
                let outer2_8 = obj3.addListener("safariViewControllerDidFinish", () => {
                  outer3_7.setState({ isInAppBrowserOpen: false });
                  outer3_9();
                });
              } else {
                if (obj2.isAndroid()) {
                  outer2_8 = outer2_3.addEventListener("change", (arg0) => {
                    let isInAppBrowserOpen = "active" === arg0;
                    if (isInAppBrowserOpen) {
                      isInAppBrowserOpen = outer3_7.getState().isInAppBrowserOpen;
                    }
                    if (isInAppBrowserOpen) {
                      const obj = { isInAppBrowserOpen: false };
                      outer3_7.setState(obj);
                      outer3_9();
                    }
                  });
                }
                obj2 = outer2_0(outer2_2[2]);
              }
            })();
          }
        });
      } else if (require(668) /* keys */.WebBrowserType.CHROME === tmp) {
        if (obj3.isAndroid()) {
          let openInChromeURLResult = importDefault(4097).openInChromeURL(closure_0);
          const obj4 = importDefault(4097);
        } else {
          openInChromeURLResult = BrowserManager.openInChromeURL(closure_0, true);
        }
        return openInChromeURLResult;
      } else {
        return require(1327) /* isDiscordFrontendDevelopment */.assertNever(tmp);
      }
    }
  }
  importDefault(3827).performURLNavigation(closure_0);
  return Promise.resolve();
};
export const browserManagerSelectBrowser = function browserManagerSelectBrowser(selectedBrowser) {
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    if (require(668) /* keys */.WebBrowserType.SAFARI === selectedBrowser) {
      const browser = importDefault(4097).selectBrowser(require(4097) /* enforcing */.BrowserType.SAFARI);
      const obj3 = importDefault(4097);
    } else if (require(668) /* keys */.WebBrowserType.IN_APP === selectedBrowser) {
      const browser1 = importDefault(4097).selectBrowser(require(4097) /* enforcing */.BrowserType.IN_APP);
      const obj2 = importDefault(4097);
    } else if (require(668) /* keys */.WebBrowserType.CHROME === selectedBrowser) {
      const browser2 = importDefault(4097).selectBrowser(require(4097) /* enforcing */.BrowserType.CHROME);
      const obj5 = importDefault(4097);
    }
  } else {
    const BrowserManager = NativeModules.BrowserManager;
    const browser3 = BrowserManager.selectBrowser(selectedBrowser);
  }
  obj = { selectedBrowser };
  store.setState(obj);
};
export const browserManagerCloseBrowser = function browserManagerCloseBrowser() {
  store.setState({ isInAppBrowserOpen: false });
  if (!obj.isAndroid()) {
    const BrowserManager = NativeModules.BrowserManager;
    BrowserManager.closeBrowser();
  }
};
export const openPlayStoreInlineInstall = function openPlayStoreInlineInstall(url, appId, arg2) {
  const _require = arg2;
  const importDefault = Date.now();
  if (obj.isAndroid()) {
    let openPlayStoreInlineResult = importDefault(4097).openPlayStoreInline(url, appId, function callback() {
      if (null != callback) {
        callback(tmp);
      }
    });
    const obj2 = importDefault(4097);
  } else if (null == appId) {
    openPlayStoreInlineResult = Promise.resolve(false);
  } else {
    if (null != arg2) {
      const result = BrowserManager.setOpenAppStoreDismissCallback(() => {
        callback(Date.now() - closure_1);
      });
    }
    openPlayStoreInlineResult = BrowserManager.openAppStoreInline(url, appId);
  }
  return openPlayStoreInlineResult;
};
