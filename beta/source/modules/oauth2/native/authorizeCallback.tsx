// Module ID: 9351
// Function ID: 9352
// Name: authorizeCallback
// Dependencies: [9350, 4993, 9352, 1984, 1370, 9354, 4754, 1098, 4487, 2]
// Exports: default

// Module 9351 (authorizeCallback)
import ConstantsIOS from "ConstantsIOS" /* 1098 */;
import URLUtilsDefault from "URLUtils" /* 1370 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import LinkingDefault from "Linking" /* 4487 */;
import BrowserManager from "BrowserManager" /* 4754 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import Constants from "Constants" /* 9350 */;
import size from "module_2" /* 2 */;

({ OAUTH2_SUCCESS_RESULT_MODAL_KEY: c3, OAUTH2_ERROR_RESULT_MODAL_KEY: closure_4 } = Constants);
const re5 = /oauth2\/authorized/;
const re6 = /oauth2\/error/;
const result = size.fileFinishedImporting("modules/oauth2/native/authorizeCallback.tsx");

export default function authorizeCallback(arg0) {
  ({ location: _location, canceled, wasDeepLink } = arg0);
  if (null != _location) {
    let toURLSafeResult = URLUtilsDefault.toURLSafe(_location);
    if (toURLSafeResult == null) {
      toURLSafeResult = {};
    }
    ({ host, pathname, searchParams } = toURLSafeResult);
    if (null != host) {
      if (tmp8Result.isDiscordHostname(host)) {
        if (null != pathname) {
          if (null != pathname.match(re5)) {
            const obj3 = { application: tmp, guild: tmp2 };
            tmp8(4993).pushLazy(asyncRequireImpl(9354, tmp9.paths), obj3, React3);
          } else if (null != pathname.match(re6)) {
            if (!canceled) {
              let str1;
              const tmp8Result5 = tmp8(4993);
              if (searchParams != null) {
                const str2 = searchParams.get("error_description");
                if (str2 != null) {
                  str1 = str2.toString();
                }
              }
              if (str1 == null) {
                let str5;
                if (searchParams != null) {
                  const str4 = searchParams.get("error");
                  if (str4 != null) {
                    str5 = str4.toString();
                  }
                }
                str1 = str5;
              }
              const obj4 = { error: str1 };
              tmp8Result5.pushLazy(asyncRequireImpl(9352, tmp9.paths), obj4, React4);
              const tmp17 = asyncRequireImpl(9352, tmp9.paths);
            }
          }
        }
      }
      tmp8Result = tmp8(1370);
    }
    if (wasDeepLink) {
      const browserManagerSelectedBrowser = BrowserManager.getBrowserManagerSelectedBrowser();
      wasDeepLink = browserManagerSelectedBrowser === ConstantsIOS.WebBrowserType.IN_APP;
    }
    let SAFARI;
    if (wasDeepLink) {
      SAFARI = ConstantsIOS.WebBrowserType.SAFARI;
    }
    LinkingDefault.openURL(_location, SAFARI);
    const tmp8Result6 = LinkingDefault;
  } else if (!canceled) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9352, dependencyMap.paths), undefined, React4);
  }
};
