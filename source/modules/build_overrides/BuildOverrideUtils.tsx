// Module ID: 4046
// Function ID: 33738
// Name: getAPIEndpoint
// Dependencies: [4047, 653, 1554, 477, 1443, 507, 1445, 4048, 2]
// Exports: getBuildOverride, getBuildOverrideExperiments, getBuildOverrideMeta, isBuildOverrideLink, probablyHasBuildOverride, validateURL

// Module 4046 (getAPIEndpoint)
import { BUILD_OVERRIDE_COOKIE_NAME as closure_4 } from "BUILD_OVERRIDE_TARGET_NAMES";
import { PRIMARY_DOMAIN } from "ME";
import getConstants from "getConstants";
import set from "set";
import set from "getConstants";

function getAPIEndpoint(arg0) {
  return "" + location.protocol + "//" + location.host + arg0;
}
function isManualBuildOverrideLink(value) {
  let isMatch = null != value;
  if (isMatch) {
    isMatch = regExp1.test(value);
  }
  return isMatch;
}
function manualOverrideLinkMeta(url) {
  const match = url.match(regExp1);
  if (null != match) {
    if (2 === match.length) {
      let obj = require(477) /* set */;
      obj = {};
      obj = {};
      const _HermesInternal = HermesInternal;
      const obj1 = { type: "branch", id: match[1] };
      obj["discord_" + obj.getNativePlatform()] = obj1;
      obj.targetBuildOverride = obj;
      obj.validForUserIds = [];
      obj.expiresAt = "Mon, 1 Jan 2038 00:00:00 GMT";
      return obj;
    }
  }
  return null;
}
getConstants = getConstants.getConstants();
if (set.isAndroid()) {
  let Version = getConstants.Version.split(" - ")[0];
  const str = getConstants.Version;
} else {
  const _module2 = require("set");
  if (_module2.isIOS()) {
    Version = getConstants.Version;
  }
}
const regExp = new RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");
const regExp1 = new RegExp("^dev://branch/([\\w-./]+)$", "i");
set = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]);
const set1 = new Set(["/__development/link", "/__development/link/"]);
const result = set.fileFinishedImporting("modules/build_overrides/BuildOverrideUtils.tsx");

export const APP_VERSION = Version;
export { getAPIEndpoint };
export const getBuildOverride = function getBuildOverride(code) {
  let obj = importDefault(1443);
  const safeParseWithQueryResult = obj.safeParseWithQuery(getAPIEndpoint("/__development/build_overrides"));
  if (null == safeParseWithQueryResult) {
    let resolved = Promise.resolve(null);
  } else {
    safeParseWithQueryResult.search = null;
    if (Version) {
      safeParseWithQueryResult.query.version = Version;
    }
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: importAll(1445).format(safeParseWithQueryResult), oldFormErrors: true, rejectWithError: false };
    const value = HTTP.get(obj);
    resolved = value.then((body) => body.body || null, () => null);
    const obj3 = importAll(1445);
  }
  return resolved;
};
export const getBuildOverrideMeta = function getBuildOverrideMeta(url) {
  if (isManualBuildOverrideLink(url)) {
    return Promise.resolve(manualOverrideLinkMeta(url));
  } else {
    let obj = importDefault(1443);
    const safeParseWithQueryResult = obj.safeParseWithQuery(url);
    if (null == safeParseWithQueryResult) {
      let resolved = Promise.resolve(null);
    } else {
      safeParseWithQueryResult.search = null;
      safeParseWithQueryResult.query.meta = "true";
      if (Version) {
        safeParseWithQueryResult.query.version = Version;
      }
      const _window = window;
      safeParseWithQueryResult.host = window.location.host;
      const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
      obj = { url: importAll(1445).format(safeParseWithQueryResult), oldFormErrors: true, rejectWithError: false };
      const value = HTTP.get(obj);
      resolved = value.then((body) => body.body || null, () => null);
      const obj3 = importAll(1445);
    }
    return resolved;
  }
};
export const probablyHasBuildOverride = function probablyHasBuildOverride() {
  return -1 !== cookie.indexOf("" + closure_4 + "=");
};
export const getBuildOverrideExperiments = function getBuildOverrideExperiments() {
  let obj = importDefault(4048);
  const tmp = obj.parse(window.document.cookie)[closure_4];
  if (null == tmp) {
    obj = {};
  } else {
    const _JSON = JSON;
    const _atob = atob;
    const experiments = JSON.parse(atob(str.substring(str.indexOf(".") + 1))).$meta.experiments;
    obj = null != experiments ? experiments : {};
  }
  return obj;
};
export const isBuildOverrideLink = function isBuildOverrideLink(target) {
  let isMatch = null != target;
  if (isMatch) {
    isMatch = regExp.test(target);
  }
  return isMatch;
};
export { isManualBuildOverrideLink };
export { manualOverrideLinkMeta };
export const validateURL = function validateURL(url) {
  if (isManualBuildOverrideLink(url)) {
    let obj = { payload: null, url };
    return obj;
  } else {
    obj = importDefault(1443);
    url = obj.safeParseWithQuery(url);
    if (null == url) {
      return null;
    } else {
      if (set.has(url.hostname)) {
        if ("s" in url.query) {
          if (set1.has(url.pathname)) {
            for (const key10021 in url.query) {
              let tmp11 = key10021;
              if ("s" === key10021) {
                continue;
              } else {
                let query = url.query;
                delete tmp[tmp2];
                continue;
              }
              continue;
            }
            obj = { payload: url.query.s, url: importAll(1445).format(url) };
            return obj;
          }
        }
      }
      return null;
    }
  }
};
