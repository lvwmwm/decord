// Module ID: 1377
// Function ID: 1378
// Name: BuildOverrideUtils
// Dependencies: [1378, 1072, 1379, 1380, 1381, 1285, 1383, 1385, 1386, 2]
// Exports: getAPIEndpoint, getBuildOverride, getBuildOverrideExperiments, getBuildOverrideMeta, isBuildOverrideLink, isManualBuildOverrideLink, manualOverrideLinkMeta, probablyHasBuildOverride, validateURL

// Module 1377 (BuildOverrideUtils)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import BuildOverrideConstants from "BuildOverrideConstants" /* 1378 */;
import URLUtilsDefault from "URLUtils" /* 1381 */;
import urlParseAll from "urlParse" /* 1383 */;
import AdsManagerBuildOverrideUtils from "AdsManagerBuildOverrideUtils" /* 1385 */;
import _modDef1386 from "module_1386" /* 1386 */;
import react_native_mod from "react-native" /* 1379 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let Version;
let closure_4 = BuildOverrideConstants.BUILD_OVERRIDE_COOKIE_NAME;
const PRIMARY_DOMAIN = Constants.PRIMARY_DOMAIN;
let react_native = react_native_mod;
react_native = react_native.getConstants();
if (PlatformUtils.isAndroid()) {
  const str = react_native.Version;
  Version = str.split(" - ")[0];
} else {
  const _module2 = PlatformUtils;
  if (_module2.isIOS()) {
    Version = react_native.Version;
  }
}
function getAPIEndpoint(arg0) {
  return "" + location.protocol + "//" + location.host + arg0;
}
function isManualBuildOverrideLink(iter) {
  const isMatch = null != iter && regExp1.test(iter);
  return isMatch;
}
function manualOverrideLinkMeta(str) {
  let obj3;
  const match = str.match(regExp1);
  if (null != match) {
    if (2 === match.length) {
      const obj2 = { targetBuildOverride: obj3, validForUserIds: [], expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT" };
      obj3 = {};
      const _HermesInternal = HermesInternal;
      const obj4 = { type: "branch", id: match[1] };
      obj3["discord_" + PlatformUtils.getNativePlatform()] = obj4;
      PlatformUtils;
      return obj2;
    }
  }
  return null;
}
const regExp = new RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link/?\\?[\\S]+$", "i");
const regExp1 = new RegExp("^dev://branch/([\\w-./]+)$", "i");
let closure_8 = "s";
const set = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]);
const set1 = new Set(["/__development/link", "/__development/link/"]);
const result = size.fileFinishedImporting("modules/build_overrides/BuildOverrideUtils.tsx");

export const APP_VERSION = Version;
export { getAPIEndpoint };
export function getBuildOverride() {
  let obj3;
  let resolved;
  const obj = URLUtilsDefault;
  const safeParseWithQueryResult = obj.safeParseWithQuery("" + location.protocol + "//" + location.host + "/__development/build_overrides");
  if (null == safeParseWithQueryResult) {
    resolved = Promise.resolve(null);
  } else {
    safeParseWithQueryResult.search = null;
    if (Version) {
      safeParseWithQueryResult.query.version = tmp3;
    }
    const HTTP = HTTPUtils.HTTP;
    const get = HTTP.get;
    const obj2 = { url: obj3.format(safeParseWithQueryResult), oldFormErrors: true, rejectWithError: false };
    obj3 = urlParseAll;
    const value = get(obj2);
    resolved = value.then((body) => body.body || null, () => null);
  }
  return resolved;
}
export function getBuildOverrideMeta(url) {
  let obj4;
  let obj5;
  const obj = AdsManagerBuildOverrideUtils;
  if (obj.isAdsManagerBuildOverrideLink(url)) {
    const resolve2 = Promise.resolve;
    const tmpResult = AdsManagerBuildOverrideUtils;
    return resolve2(tmpResult.adsManagerOverrideLinkMeta(url));
  } else {
    const isMatch = null != url && regExp1.test(url);
    if (isMatch) {
      const match = url.match(regExp1);
      let tmp14 = null;
      if (null != match) {
        tmp14 = null;
        if (2 === match.length) {
          const obj3 = { targetBuildOverride: obj5, validForUserIds: [], expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT" };
          obj5 = {};
          const _HermesInternal = HermesInternal;
          const obj6 = { type: "branch", id: match[1] };
          obj5["discord_" + PlatformUtils.getNativePlatform()] = obj6;
          tmp14 = obj3;
          PlatformUtils;
        }
      }
      return resolve(tmp14);
    } else {
      let resolved;
      const obj2 = URLUtilsDefault;
      const safeParseWithQueryResult = obj2.safeParseWithQuery(url);
      if (null == safeParseWithQueryResult) {
        resolved = Promise.resolve(null);
      } else {
        safeParseWithQueryResult.search = null;
        safeParseWithQueryResult.query.meta = "true";
        if (Version) {
          safeParseWithQueryResult.query.version = tmp16;
        }
        const _window = window;
        safeParseWithQueryResult.host = window.location.host;
        const HTTP = tmp(1285).HTTP;
        const get = HTTP.get;
        const obj7 = { url: obj4.format(safeParseWithQueryResult), oldFormErrors: true, rejectWithError: false };
        obj4 = urlParseAll;
        const value = get(obj7);
        resolved = value.then((body) => body.body || null, () => null);
      }
      return resolved;
    }
  }
}
export function probablyHasBuildOverride() {
  return -1 !== cookie.indexOf("" + closure_4 + "=");
}
export function getBuildOverrideExperiments() {
  try {
    let obj2;
    const _window = window;
    const obj = _modDef1386;
    const tmp5 = obj.parse(window.document.cookie)[closure_4];
    if (null == tmp5) {
      obj2 = {};
    } else {
      const _JSON = JSON;
      const _atob = atob;
      obj2 = JSON.parse(atob(str.substring(str.indexOf(".") + 1))).$meta.experiments ?? {};
    }
    return obj2;
  } catch (err) {
    return {};
  }
}
export function isBuildOverrideLink(target) {
  let tmp = null != target;
  if (tmp) {
    tmp = regExp.test(target) || false;
    regExp.test(target) || false;
  }
  return tmp;
}
export { isManualBuildOverrideLink };
export { manualOverrideLinkMeta };
export function validateURL(url) {
  let obj4;
  let searchParams;
  const obj = AdsManagerBuildOverrideUtils;
  if (obj.isAdsManagerBuildOverrideLink(url)) {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const obj3 = { payload: searchParams.get(closure_8), url };
    const uRL = new URL(url);
    searchParams = uRL.searchParams;
    return obj3;
  } else {
    const isMatch = null != url && regExp1.test(url);
    if (isMatch) {
      return { payload: null, url };
    } else {
      const obj2 = URLUtilsDefault;
      url = obj2.safeParseWithQuery(url);
      if (null == url) {
        return null;
      } else {
        if (set.has(url.hostname)) {
          if (closure_8 in url.query) {
            if (set1.has(url.pathname)) {
              for (const key10026 in url.query) {
                if (key10026 === closure_8) {
                  continue;
                } else {
                  delete url.query[tmp17];
                  continue;
                }
                continue;
              }
              const obj6 = { payload: url.query[closure_8], url: obj4.format(url) };
              obj4 = urlParseAll;
              return obj6;
            }
          }
        }
        return null;
      }
    }
  }
}
