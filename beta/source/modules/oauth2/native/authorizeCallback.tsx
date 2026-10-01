// Module ID: 8508
// Function ID: 8509
// Name: authorizeCallback
// Dependencies: [8507, 5039, 8509, 1981, 1366, 8511, 4797, 1094, 4525, 2]
// Exports: default

// Module 8508 (authorizeCallback)
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import LinkingDefault from "Linking" /* 4525 */;
import BrowserManager from "BrowserManager" /* 4797 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import Constants from "Constants" /* 8507 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ OAUTH2_SUCCESS_RESULT_MODAL_KEY: c3, OAUTH2_ERROR_RESULT_MODAL_KEY: closure_4 } = Constants);
const re5 = /oauth2\/authorized/;
const re6 = /oauth2\/error/;
const result = size.fileFinishedImporting("modules/oauth2/native/authorizeCallback.tsx");

export default function authorizeCallback(arg0) {
  let _location;
  let canceled;
  let host;
  let pathname;
  let searchParams;
  let wasDeepLink;
  ({ location: _location, canceled, wasDeepLink } = arg0);
  if (null != _location) {
    const obj2 = URLUtilsDefault;
    let toURLSafeResult = obj2.toURLSafe(_location);
    if (toURLSafeResult == null) {
      toURLSafeResult = {};
    }
    ({ host, pathname, searchParams } = toURLSafeResult);
    if (null != host) {
      const tmp8Result = URLUtilsDefault;
      if (tmp8Result.isDiscordHostname(host)) {
        if (null != pathname) {
          if (null != pathname.match(re5)) {
            const obj3 = { application: tmp, guild: tmp2 };
            const tmp8Result4 = ModalActionCreatorsDefault;
            tmp8Result4.pushLazy(asyncRequire(8511, dependencyMap.paths), obj3, _false);
          } else if (null != pathname.match(re6)) {
            if (!canceled) {
              const pushLazy = ModalActionCreatorsDefault.pushLazy;
              let str1;
              ModalActionCreatorsDefault;
              const tmp19 = asyncRequire(8509, dependencyMap.paths);
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
              pushLazy(tmp19, obj4, React3);
            }
          }
        }
      }
    }
    if (wasDeepLink) {
      const obj5 = BrowserManager;
      const browserManagerSelectedBrowser = obj5.getBrowserManagerSelectedBrowser();
      wasDeepLink = browserManagerSelectedBrowser === ConstantsIOS.WebBrowserType.IN_APP;
    }
    let SAFARI;
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    if (wasDeepLink) {
      SAFARI = ConstantsIOS.WebBrowserType.SAFARI;
    }
    openURL(_location, SAFARI);
  } else if (!canceled) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(8509, dependencyMap.paths), undefined, React3);
  }
};
