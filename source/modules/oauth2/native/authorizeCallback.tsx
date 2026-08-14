// Module ID: 10612
// Function ID: 10613
// Name: authorizeCallback
// Dependencies: [10611, 4572, 10499, 2007, 1486, 10613, 4308, 691, 4058, 2]
// Exports: default

// Module 10612 (authorizeCallback)
import OAUTH2_AUTHORIZE_MODAL_KEY from "OAUTH2_AUTHORIZE_MODAL_KEY";

let c3;
let c4;
({ OAUTH2_SUCCESS_RESULT_MODAL_KEY: c3, OAUTH2_ERROR_RESULT_MODAL_KEY: c4 } = OAUTH2_AUTHORIZE_MODAL_KEY);
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
    let toURLSafeResult = importDefault(1486).toURLSafe(_location);
    if (toURLSafeResult == null) {
      toURLSafeResult = {};
    }
    ({ host, pathname, searchParams } = toURLSafeResult);
    if (null != host) {
      let tmp8Result = tmp8(1486);
      if (tmp8Result.isDiscordHostname(host)) {
        if (null != pathname) {
          if (null != pathname.match(closure_5)) {
            tmp8Result = tmp8(4572);
            let obj = { application: null, guild: null };
            obj[0] = tmp;
            obj[1] = tmp2;
            tmp8Result.pushLazy(require(2007) /* asyncRequireImpl */(10613, tmp9.paths), obj, closure_3);
          } else if (null != pathname.match(closure_6)) {
            if (!canceled) {
              let str;
              const tmp8Result1 = tmp8(4572);
              if (searchParams != null) {
                str = "error_description";
                const str2 = searchParams.get("error_description");
                if (str2 != null) {
                  str = str2.toString();
                }
              }
              if (str == null) {
                let str1;
                if (searchParams != null) {
                  const str4 = searchParams.get("error");
                  if (str4 != null) {
                    str1 = str4.toString();
                  }
                }
                str = str1;
              }
              obj = { error: null };
              obj[0] = str;
              tmp8Result1.pushLazy(require(2007) /* asyncRequireImpl */(10499, tmp9.paths), obj, closure_4);
              const tmp17 = require(2007) /* asyncRequireImpl */(10499, tmp9.paths);
            }
          }
        }
      }
    }
    if (wasDeepLink) {
      const browserManagerSelectedBrowser = require(4308) /* NativeModules */.getBrowserManagerSelectedBrowser();
      wasDeepLink = browserManagerSelectedBrowser === require(691) /* keys */.WebBrowserType.IN_APP;
      const obj5 = require(4308) /* NativeModules */;
    }
    const obj2 = importDefault(1486);
    let SAFARI;
    if (wasDeepLink) {
      SAFARI = require(691) /* keys */.WebBrowserType.SAFARI;
    }
    importDefault(4058).openURL(_location, SAFARI);
    const tmp8Result2 = importDefault(4058);
  } else if (!canceled) {
    obj = importDefault(4572);
    obj.pushLazy(require(2007) /* asyncRequireImpl */(10499, dependencyMap.paths), undefined, closure_4);
  }
};
