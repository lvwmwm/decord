// Module ID: 4094
// Function ID: 33908
// Name: removeInAppBrowserCloseSubscription
// Dependencies: []
// Exports: browserManagerCloseBrowser, browserManagerOpenUrl, browserManagerSelectBrowser, getIsInAppBrowserOpen, openPlayStoreInlineInstall, subscribeToIsInAppBrowserOpen, useBrowserManagerIsChromeInstalled, useBrowserManagerSelectedBrowser, useBrowserManagerSupportsInAppBrowser, useIsInAppBrowserOpen

// Module 4094 (removeInAppBrowserCloseSubscription)
let NativeModules;
function removeInAppBrowserCloseSubscription() {
  if (null != closure_8) {
    closure_8.remove();
  }
  closure_8 = null;
}
function getBrowserManagerIsChromeInstalled() {
  return store.getState().isChromeInstalled;
}
function getBrowserManagerSelectedBrowser() {
  return store.getState().selectedBrowser;
}
const _module = require(dependencyMap[0]);
({ AppState: closure_3, NativeEventEmitter: closure_4, NativeModules } = _module);
const BrowserManager = NativeModules.BrowserManager;
const _module1 = require(dependencyMap[1]);
let closure_7 = _module1.create(() => {
  const obj = {};
  if (obj2.isAndroid()) {
    let isChromeInstalled = importDefault(dependencyMap[3]).getConstants().isChromeInstalled;
    const obj3 = importDefault(dependencyMap[3]);
  } else {
    isChromeInstalled = BrowserManager.isChromeInstalled;
  }
  obj.isChromeInstalled = isChromeInstalled;
  const obj2 = require(dependencyMap[2]);
  if (obj4.isAndroid()) {
    let selectedBrowser = importDefault(dependencyMap[3]).getConstants().selectedBrowser;
    const obj5 = importDefault(dependencyMap[3]);
  } else {
    selectedBrowser = BrowserManager.selectedBrowser;
  }
  obj.selectedBrowser = selectedBrowser;
  const obj4 = require(dependencyMap[2]);
  if (obj6.isAndroid()) {
    let supportsInAppBrowser = importDefault(dependencyMap[3]).getConstants().supportsInAppBrowser;
    const obj7 = importDefault(dependencyMap[3]);
  } else {
    supportsInAppBrowser = BrowserManager.supportsInAppBrowser;
  }
  obj.supportsInAppBrowser = supportsInAppBrowser;
  obj.isInAppBrowserOpen = false;
  return obj;
});
let closure_8 = null;
const _module2 = require(dependencyMap[7]);
const result = _module2.fileFinishedImporting("modules/links/native/BrowserManager.tsx");

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
  const require = arg0;
  return store.subscribe((isInAppBrowserOpen, isInAppBrowserOpen2) => {
    if (isInAppBrowserOpen.isInAppBrowserOpen !== isInAppBrowserOpen2.isInAppBrowserOpen) {
      isInAppBrowserOpen(isInAppBrowserOpen.isInAppBrowserOpen, isInAppBrowserOpen2.isInAppBrowserOpen);
    }
  });
};
export const browserManagerOpenUrl = function browserManagerOpenUrl(formatResult, CHROME) {
  let tmp = CHROME;
  if (CHROME === undefined) {
    tmp = getBrowserManagerSelectedBrowser();
  }
  if (tmp !== require(dependencyMap[4]).WebBrowserType.SAFARI) {
    if (tmp !== require(dependencyMap[4]).WebBrowserType.CHROME) {
      if (tmp === require(dependencyMap[4]).WebBrowserType.IN_APP) {
        const obj = require(dependencyMap[2]);
      }
      if (require(dependencyMap[4]).WebBrowserType.IN_APP === tmp) {
        if (obj5.isAndroid()) {
          let openInAppURLResult = importDefault(dependencyMap[3]).openInAppURL(formatResult);
          const obj6 = importDefault(dependencyMap[3]);
        } else {
          openInAppURLResult = BrowserManager.openInAppURL(formatResult);
        }
        return openInAppURLResult.then((arg0) => {
          if (false !== arg0) {
            const obj = { isInAppBrowserOpen: true };
            state.setState(obj);
            function subscribeToInAppBrowserClose() {
              callback2();
              if (obj.isIOS()) {
                const prototype = ctor.prototype;
                const obj3 = new ctor(closure_6);
                let closure_8 = obj3.addListener("safariViewControllerDidFinish", () => {
                  store.setState({ isInAppBrowserOpen: false });
                  callback();
                });
              } else {
                if (obj2.isAndroid()) {
                  closure_8 = closure_3.addEventListener("change", (arg0) => {
                    let isInAppBrowserOpen = "active" === arg0;
                    if (isInAppBrowserOpen) {
                      isInAppBrowserOpen = store.getState().isInAppBrowserOpen;
                    }
                    if (isInAppBrowserOpen) {
                      const obj = { isInAppBrowserOpen: false };
                      store.setState(obj);
                      callback();
                    }
                  });
                }
                const obj2 = callback(closure_2[2]);
              }
            }();
          }
        });
      } else if (require(dependencyMap[4]).WebBrowserType.CHROME === tmp) {
        if (obj3.isAndroid()) {
          let openInChromeURLResult = importDefault(dependencyMap[3]).openInChromeURL(formatResult);
          const obj4 = importDefault(dependencyMap[3]);
        } else {
          openInChromeURLResult = BrowserManager.openInChromeURL(formatResult, true);
        }
        return openInChromeURLResult;
      } else {
        return require(dependencyMap[6]).assertNever(tmp);
      }
    }
  }
  importDefault(dependencyMap[5]).performURLNavigation(formatResult);
  return Promise.resolve();
};
export const browserManagerSelectBrowser = function browserManagerSelectBrowser(selectedBrowser) {
  let obj = require(dependencyMap[2]);
  if (obj.isAndroid()) {
    if (require(dependencyMap[4]).WebBrowserType.SAFARI === selectedBrowser) {
      const browser = importDefault(dependencyMap[3]).selectBrowser(require(dependencyMap[3]).BrowserType.SAFARI);
      const obj3 = importDefault(dependencyMap[3]);
    } else if (require(dependencyMap[4]).WebBrowserType.IN_APP === selectedBrowser) {
      const browser1 = importDefault(dependencyMap[3]).selectBrowser(require(dependencyMap[3]).BrowserType.IN_APP);
      const obj2 = importDefault(dependencyMap[3]);
    } else if (require(dependencyMap[4]).WebBrowserType.CHROME === selectedBrowser) {
      const browser2 = importDefault(dependencyMap[3]).selectBrowser(require(dependencyMap[3]).BrowserType.CHROME);
      const obj5 = importDefault(dependencyMap[3]);
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
  const require = arg2;
  const importDefault = Date.now();
  if (obj.isAndroid()) {
    let openPlayStoreInlineResult = importDefault(dependencyMap[3]).openPlayStoreInline(url, appId, function callback() {
      if (null != arg2) {
        arg2(tmp);
      }
    });
    const obj2 = importDefault(dependencyMap[3]);
  } else if (null == appId) {
    openPlayStoreInlineResult = Promise.resolve(false);
  } else {
    if (null != arg2) {
      const result = BrowserManager.setOpenAppStoreDismissCallback(() => {
        arg2(Date.now() - closure_1);
      });
    }
    openPlayStoreInlineResult = BrowserManager.openAppStoreInline(url, appId);
  }
  return openPlayStoreInlineResult;
};
