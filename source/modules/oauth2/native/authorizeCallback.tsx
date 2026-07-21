// Module ID: 10822
// Function ID: 84037
// Name: authorizeCallback
// Dependencies: []
// Exports: default

// Module 10822 (authorizeCallback)
const _module = require(dependencyMap[0]);
({ OAUTH2_SUCCESS_RESULT_MODAL_KEY: closure_3, OAUTH2_ERROR_RESULT_MODAL_KEY: closure_4 } = _module);
let closure_5 = /oauth2\/authorized/;
let closure_6 = /oauth2\/error/;
const _module1 = require(dependencyMap[9]);
const result = _module1.fileFinishedImporting("modules/oauth2/native/authorizeCallback.tsx");

export default function authorizeCallback(arg0) {
  let _location;
  let canceled;
  let host;
  let pathname;
  let searchParams;
  let wasDeepLink;
  ({ location: _location, canceled, wasDeepLink } = arg0);
  if (null != _location) {
    let toURLSafeResult = importDefault(dependencyMap[4]).toURLSafe(_location);
    if (null == toURLSafeResult) {
      toURLSafeResult = {};
    }
    ({ host, pathname, searchParams } = toURLSafeResult);
    if (null != host) {
      if (obj4.isDiscordHostname(host)) {
        if (null != pathname) {
          if (null != pathname.match(closure_5)) {
            let obj = { application: tmp, guild: tmp2 };
            importDefault(dependencyMap[1]).pushLazy(require(dependencyMap[3])(dependencyMap[5], dependencyMap.paths), obj, closure_3);
          } else if (null != pathname.match(closure_6)) {
            if (!canceled) {
              obj = {};
              let str;
              const obj7 = importDefault(dependencyMap[1]);
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
              obj7.pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), obj, closure_4);
              const tmp25 = require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths);
            }
          }
        }
      }
      const obj4 = importDefault(dependencyMap[4]);
    }
    if (wasDeepLink) {
      const browserManagerSelectedBrowser = require(dependencyMap[6]).getBrowserManagerSelectedBrowser();
      wasDeepLink = browserManagerSelectedBrowser === require(dependencyMap[7]).WebBrowserType.IN_APP;
      const obj5 = require(dependencyMap[6]);
    }
    const obj2 = importDefault(dependencyMap[4]);
    let SAFARI;
    if (wasDeepLink) {
      SAFARI = require(dependencyMap[7]).WebBrowserType.SAFARI;
    }
    importDefault(dependencyMap[8]).openURL(_location, SAFARI);
    const obj6 = importDefault(dependencyMap[8]);
  } else if (!canceled) {
    obj = importDefault(dependencyMap[1]);
    obj.pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), undefined, closure_4);
  }
};
