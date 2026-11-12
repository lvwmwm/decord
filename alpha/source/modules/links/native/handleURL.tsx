// Module ID: 5946
// Function ID: 5947
// Name: handleURL
// Dependencies: [5, 17, 5490, 1072, 3, 5947, 5948, 5949, 5950, 2067, 5951, 1113, 5981, 1377, 5489, 5984, 1381, 5985, 15873, 16164, 2]
// Exports: default

// Module 5946 (handleURL)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ActionSheetStore from "ActionSheetStore" /* 5490 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let constants;

let metroImportDefault;
let metroRequire;
function sanitizeURLPart(str) {
  let replaced = str;
  if (null != str) {
    replaced = str.replace(/[^\x00-\x7F]+/g, (arg0) => encodeURIComponent(arg0));
  }
  return replaced;
}
let obj = function _handleURL() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_4;
    let closure_5;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    let iter = (async (arg0, value) => {
      let flag;
      let flag2;
      let open;
      let openInBrowser;
      let tmp4;
      let tmp62;
      function tryHandleCustomScheme(tryHandleUniversalLink) {
        let protocol;
        let regex;
        let arr = tryHandleUniversalLink;
        closure_0 = tryHandleUniversalLink;
        const iter = closure_0(closure_2[6]).LINKING_SCHEMAS_VALUES[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          ({ regex, protocol } = nextResult);
          let match = regex.exec(arr);
          let tmp4;
          if (match != null) {
            tmp4 = match[1];
          }
          if (null != tmp4) {
            let sum = protocol + tmp5;
            arr = sum;
            closure_0 = sum;
          }
          continue;
        }
        let first = null;
        if (-1 !== arr.indexOf("://")) {
          first = arr.split("://")[0];
        }
        if ("http" !== first) {
          let promise;
          if ("https" !== first) {
            logger.info("tryHandleCustomScheme", arr);
            const self = this;
            const self2 = this;
            promise = new Promise((arg0) => {
              closure_0 = arg0;
              obj = closure_2_1(closure_2_2[5]);
              const tryOpenSchemeResult = obj.tryOpenScheme(closure_0);
              const nextPromise = tryOpenSchemeResult.then(() => {
                logger.info("Custom scheme opened successfully.");
                closure_0(true);
              });
              nextPromise.catch(() => {
                logger.info("Custom scheme failed to open.");
                closure_0(false);
              });
            });
          }
          return promise;
        }
        promise = new Promise((fn) => {
          logger.info("URL is not a custom scheme.");
          fn(false);
        });
      }
      function tryHandleWhitelistedURL(tryHandleUniversalLink) {
        closure_0 = tryHandleUniversalLink;
        function _loop(protocol) {
          let promise;
          closure_0 = protocol;
          let num = 0;
          if (null !== regex.exec(closure_0)) {
            obj = { v: promise };
            let tmp = globalThis;
            const self = this;
            const self2 = this;
            num = obj;
            promise = new Promise((url) => {
              closure_0 = url;
              const canOpenURLResult = closure_3_4.canOpenURL(closure_0);
              const nextPromise = canOpenURLResult.then((result) => {
                const tmp = result;
                if (tmp) {
                  obj = regex(closure_3_2[7]);
                  obj.performURLNavigation(protocol);
                  closure_0(true);
                } else {
                  logger.info("Whitelisted URL, but cannot be opened (app likely not installed).");
                  closure_0(false);
                }
              });
              nextPromise.catch((error) => {
                obj = { error };
                logger.info("Whitelisted URL encountered an error.", obj);
                closure_0(false);
              });
            });
          }
          return num;
        }
        const iter = closure_0(closure_2[8]).LINKING_WHITELIST_VALUES[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let regex = nextResult.regex;
          let _loopResult = _loop(nextResult.protocol);
          if (0 !== _loopResult) {
            if (tmp3) {
              let v = _loopResult.v;
              iter.return();
              return v;
            }
          }
          continue;
        }
        let promise = new Promise((fn) => {
          logger.info("URL is not whitelisted.");
          fn(false);
        });
        return promise;
      }
      if (1 === tmp4) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else {
          tryHandleUniversalLink = flag2;
          if (tryHandleUniversalLink) {
            if (tryHandleUniversalLink.startsWith("//")) {
              tryHandleUniversalLink = closure_132_1(closure_132_2[15])(tryHandleUniversalLink);
            }
            openInBrowser();
            c8 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            tryHandleUniversalLink = closure_132_1(closure_132_2[15])(tryHandleUniversalLink);
            let obj6 = /^https?:/i;
            tryHandleUniversalLink = obj6.test(tryHandleUniversalLink);
            if (tryHandleUniversalLink) {
              let obj7 = closure_132_1(closure_132_2[16]);
              tmp62 = obj7.parse(tryHandleUniversalLink);
              tmp62.pathname = closure_132_9(tmp62.pathname);
              tmp62.search = closure_132_9(tmp62.search);
              tmp62.hash = closure_132_9(tmp62.hash);
              const obj8 = closure_132_1(closure_132_2[16]);
              tryHandleUniversalLink = obj8.format(tmp62);
              c6 = 0;
            }
            const payload = closure_132_1(closure_132_2[17])(tryHandleUniversalLink).payload;
            tryHandleUniversalLink = payload.type === closure_132_6.CHANNEL && null != payload.channelId;
            if (tryHandleUniversalLink) {
              const obj9 = closure_132_0(closure_132_2[18]);
              tryHandleUniversalLink = obj9.queueFrameDeepLinkFromUrl(payload.channelId, tryHandleUniversalLink);
            }
            const obj10 = { payload, safe: true };
            tryHandleUniversalLink = closure_132_1(closure_132_2[19])(obj10);
            if (!tryHandleUniversalLink) {
              const tmp53 = flag;
              if (tmp53) {
                tryHandleUniversalLink = function tryHandleUniversalLink(flag) {
                  closure_0 = flag;
                  const promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    obj = closure_2_1(closure_2_2[5]);
                    const result = obj.tryOpenUrlAsUniversalLink(closure_0);
                    const nextPromise = result.then(() => {
                      logger.info("Universal link opened successfully.");
                      closure_0(true);
                    });
                    nextPromise.catch(() => {
                      logger.info("URL is not a handled universal link.");
                      closure_0(false);
                    });
                  });
                  return promise;
                };
                c7 = 3;
                c8 = 1;
                const obj11 = { value: tryHandleUniversalLink(tryHandleUniversalLink), done: false };
                return obj11;
              }
            }
          }
        }
      } else if (2 === tmp4) {
        let tmp12 = tmp62;
        c6 = 0;
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } else if (3 === tmp4) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          return { value, done: true };
        } else {
          constants = value;
          tryHandleUniversalLink = constants;
          if (!tryHandleUniversalLink) {
            let tmp11 = tryHandleUniversalLink;
            tryHandleUniversalLink = tryHandleCustomScheme(tryHandleUniversalLink);
            c7 = 4;
            c8 = 1;
            return { value: tryHandleUniversalLink, done: false };
          }
        }
      } else if (4 === tmp4) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          return { value, done: true };
        } else {
          const logger = value;
          tryHandleUniversalLink = logger;
          if (!tryHandleUniversalLink) {
            let tmp9 = tryHandleUniversalLink;
            tryHandleUniversalLink = tryHandleWhitelistedURL(tryHandleUniversalLink);
            c7 = 5;
            c8 = 1;
            return { value: tryHandleUniversalLink, done: false };
          }
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        let tmp5 = tryHandleUniversalLink;
        let closure_9 = value;
        tryHandleUniversalLink = closure_9;
        if (!tryHandleUniversalLink) {
          let tmp6 = openInBrowser;
          let tmp7 = openInBrowser();
        }
      }
      await "HermesInternal";
      tryHandleUniversalLink = closure_0;
      let obj4 = closure_2;
      if (closure_2 === undefined) {
        obj4 = {};
      }
      flag = obj4.allowExternal ?? true;
      flag2 = obj4.forceExternalBrowser ?? false;
      openInBrowser = function openInBrowser() {
        const tmp = closure_2_1;
        obj = closure_2_1(closure_2_2[9]);
        if (null != obj.sanitizeUrl(tryHandleUniversalLink)) {
          let SAFARI = constants.SAFARI;
          if (tryHandleUniversalLink.startsWith("https:")) {
            const obj2 = closure_2_0(closure_2_2[12]);
            let browserManagerSelectedBrowser = obj2.getBrowserManagerSelectedBrowser();
            let tmp11 = closure_1;
            const tmp9 = closure_2_0;
            if (closure_1 == null) {
              tmp11 = browserManagerSelectedBrowser;
            }
            SAFARI = tmp11;
            const tmp12 = flag2 && tmp11 === constants.IN_APP;
            if (tmp12) {
              if (browserManagerSelectedBrowser === constants.IN_APP) {
                const tmp9Result = tmp9(closure_2_2[13]);
                browserManagerSelectedBrowser = tmp9Result.isIOS() ? tmp6.SAFARI : tmp6.CHROME;
              }
              SAFARI = browserManagerSelectedBrowser;
            }
          }
          if (constants.IN_APP === SAFARI) {
            const obj6 = closure_2_0(closure_2_2[12]);
            const result = obj6.browserManagerOpenUrl(tryHandleUniversalLink, tmp6.IN_APP);
            result.catch(() => {
              const presentFailedToast = tryHandleUniversalLink(flag[10]).presentFailedToast;
              tryHandleUniversalLink(flag[10]);
              const intl = tryHandleUniversalLink(flag[11]).intl;
              presentFailedToast("" + intl.string(tryHandleUniversalLink(flag[11]).t.HryVrx) + " " + closure_1_0);
            });
            const obj7 = closure_2_0(closure_2_2[13]);
            const isIOSResult = obj7.isIOS() && open.isOpen();
            if (isIOSResult) {
              const tmpResult = tmp(closure_2_2[14]);
              tmpResult.hideAllActionSheets();
            }
          } else if (constants.CHROME === SAFARI) {
            const obj5 = closure_2_0(closure_2_2[12]);
            const result1 = obj5.browserManagerOpenUrl(tryHandleUniversalLink, tmp6.CHROME);
            result1.catch(() => {
              const presentFailedToast = tryHandleUniversalLink(flag[10]).presentFailedToast;
              tryHandleUniversalLink(flag[10]);
              const intl = tryHandleUniversalLink(flag[11]).intl;
              presentFailedToast("" + intl.string(tryHandleUniversalLink(flag[11]).t.HryVrx) + " " + closure_1_0);
            });
          } else {
            const SAFARI2 = tmp6.SAFARI;
            const obj4 = closure_2_0(closure_2_2[12]);
            const result2 = obj4.browserManagerOpenUrl(tryHandleUniversalLink, tmp6.SAFARI);
          }
        } else {
          let presentFailedToast = closure_2_0(closure_2_2[10]).presentFailedToast;
          closure_2_0(closure_2_2[10]);
          let intl = closure_2_0(tmp2[11]).intl;
          presentFailedToast(intl.string(closure_2_0(tmp2[11]).t.XiqzAp));
        }
      };
      return "flexDirection";
    })();
    let nextResult = iter.next();
    return iter;
  });
  return obj(...arguments);
};
const Linking = react_native.Linking;
({ LinkingTypes: metroRequire, WebBrowserType: metroImportDefault } = Constants);
const tmp3 = new LoggerDefault("handleURL");
let closure_8 = tmp3;
let result = size.fileFinishedImporting("modules/links/native/handleURL.tsx");

export default function handleURL(arg0, arg1) {
  return obj(...arguments);
};
