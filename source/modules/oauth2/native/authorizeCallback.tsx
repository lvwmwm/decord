// Module ID: 10833
// Function ID: 84099
// Name: authorizeCallback
// Dependencies: [10621, 4337, 8965, 1934, 1443, 10834, 4096, 668, 3827, 2]
// Exports: default

// Module 10833 (authorizeCallback)
import OAUTH2_AUTHORIZE_MODAL_KEY from "OAUTH2_AUTHORIZE_MODAL_KEY";

let closure_3;
let closure_4;
({ OAUTH2_SUCCESS_RESULT_MODAL_KEY: closure_3, OAUTH2_ERROR_RESULT_MODAL_KEY: closure_4 } = OAUTH2_AUTHORIZE_MODAL_KEY);
const re5 = /oauth2\/authorized/;
const re6 = /oauth2\/error/;
const result = require("error").fileFinishedImporting("modules/oauth2/native/authorizeCallback.tsx");

export default function authorizeCallback(arg0) {
  let _location;
  let canceled;
  let host;
  let pathname;
  let searchParams;
  let wasDeepLink;
  ({ location: _location, canceled, wasDeepLink } = arg0);
  if (null != _location) {
    let toURLSafeResult = importDefault(1443).toURLSafe(_location);
    if (null == toURLSafeResult) {
      toURLSafeResult = {};
    }
    ({ host, pathname, searchParams } = toURLSafeResult);
    if (null != host) {
      if (obj4.isDiscordHostname(host)) {
        if (null != pathname) {
          if (null != pathname.match(closure_5)) {
            let obj = { application: tmp, guild: tmp2 };
            importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(10834, dependencyMap.paths), obj, closure_3);
          } else if (null != pathname.match(closure_6)) {
            if (!canceled) {
              obj = {};
              let str;
              const obj7 = importDefault(4337);
              if (null != searchParams) {
                str = "error_description";
                const str2 = searchParams.get("error_description");
                if (null != str2) {
                  str = str2.toString();
                }
              }
              if (null == str) {
                let str1;
                if (null != searchParams) {
                  const str4 = searchParams.get("error");
                  if (null != str4) {
                    str1 = str4.toString();
                  }
                }
                str = str1;
              }
              obj.error = str;
              obj7.pushLazy(require(1934) /* maybeLoadBundle */(8965, dependencyMap.paths), obj, closure_4);
              const tmp25 = require(1934) /* maybeLoadBundle */(8965, dependencyMap.paths);
            }
          }
        }
      }
      obj4 = importDefault(1443);
    }
    if (wasDeepLink) {
      const browserManagerSelectedBrowser = require(4096) /* removeInAppBrowserCloseSubscription */.getBrowserManagerSelectedBrowser();
      wasDeepLink = browserManagerSelectedBrowser === require(668) /* keys */.WebBrowserType.IN_APP;
      const obj5 = require(4096) /* removeInAppBrowserCloseSubscription */;
    }
    const obj2 = importDefault(1443);
    let SAFARI;
    if (wasDeepLink) {
      SAFARI = require(668) /* keys */.WebBrowserType.SAFARI;
    }
    importDefault(3827).openURL(_location, SAFARI);
    const obj6 = importDefault(3827);
  } else if (!canceled) {
    obj = importDefault(4337);
    obj.pushLazy(require(1934) /* maybeLoadBundle */(8965, dependencyMap.paths), undefined, closure_4);
  }
};
