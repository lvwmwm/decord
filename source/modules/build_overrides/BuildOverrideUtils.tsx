// Module ID: 4044
// Function ID: 33729
// Name: getAPIEndpoint
// Dependencies: []
// Exports: getBuildOverride, getBuildOverrideExperiments, getBuildOverrideMeta, isBuildOverrideLink, probablyHasBuildOverride, validateURL

// Module 4044 (getAPIEndpoint)
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
      let obj = require(dependencyMap[3]);
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
let closure_4 = require(dependencyMap[0]).BUILD_OVERRIDE_COOKIE_NAME;
const PRIMARY_DOMAIN = require(dependencyMap[1]).PRIMARY_DOMAIN;
const _module = require(dependencyMap[2]);
const constants = _module.getConstants();
const _module1 = require(dependencyMap[3]);
if (_module1.isAndroid()) {
  let Version = constants.Version.split(" - ")[0];
  const str = constants.Version;
} else {
  const _module2 = require(dependencyMap[3]);
  if (_module2.isIOS()) {
    Version = constants.Version;
  }
}
const regExp = new RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");
const regExp1 = new RegExp("^dev://branch/([\\w-./]+)$", "i");
const set = new Set([]);
const set1 = new Set([]);
const _module3 = require(dependencyMap[8]);
const result = _module3.fileFinishedImporting("modules/build_overrides/BuildOverrideUtils.tsx");

export const APP_VERSION = Version;
export { getAPIEndpoint };
export const getBuildOverride = function getBuildOverride(code) {
  let obj = importDefault(dependencyMap[4]);
  const safeParseWithQueryResult = obj.safeParseWithQuery(getAPIEndpoint("/__development/build_overrides"));
  if (null == safeParseWithQueryResult) {
    let resolved = Promise.resolve(null);
  } else {
    safeParseWithQueryResult.search = null;
    if (Version) {
      safeParseWithQueryResult.query.version = Version;
    }
    const HTTP = require(dependencyMap[5]).HTTP;
    obj = { y: 1567300603, isArray: 221342020, accessible: 822948183, url: importAll(dependencyMap[6]).format(safeParseWithQueryResult) };
    const value = HTTP.get(obj);
    resolved = value.then((body) => body.body || null, () => null);
    const obj3 = importAll(dependencyMap[6]);
  }
  return resolved;
};
export const getBuildOverrideMeta = function getBuildOverrideMeta(url) {
  if (isManualBuildOverrideLink(url)) {
    return Promise.resolve(manualOverrideLinkMeta(url));
  } else {
    let obj = importDefault(dependencyMap[4]);
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
      const HTTP = require(dependencyMap[5]).HTTP;
      obj = { y: 1567300603, isArray: 221342020, accessible: 822948183, url: importAll(dependencyMap[6]).format(safeParseWithQueryResult) };
      const value = HTTP.get(obj);
      resolved = value.then((body) => body.body || null, () => null);
      const obj3 = importAll(dependencyMap[6]);
    }
    return resolved;
  }
};
export const probablyHasBuildOverride = function probablyHasBuildOverride() {
  return -1 !== cookie.indexOf("" + closure_4 + "=");
};
export const getBuildOverrideExperiments = function getBuildOverrideExperiments() {
  let obj = importDefault(dependencyMap[7]);
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
    obj = importDefault(dependencyMap[4]);
    url = obj.safeParseWithQuery(url);
    if (null == url) {
      return null;
    } else {
      if (set.has(url.hostname)) {
        if ("s" in url.query) {
          if (set1.has(url.pathname)) {
            for (const key10021 in url.query) {
              let tmp9 = key10021;
              if ("s" === key10021) {
                continue;
              } else {
                let query = url.query;
                delete r11[r12];
                // continue
              }
              continue;
            }
            obj = { payload: url.query.s, url: importAll(dependencyMap[6]).format(url) };
            return obj;
          }
        }
      }
      return null;
    }
  }
};
