// Module ID: 8436
// Function ID: 67321
// Name: fetchVanityUrl
// Dependencies: []
// Exports: fetchVanityUrl, resetCode, saveCode, setCode

// Module 8436 (fetchVanityUrl)
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx");

export const fetchVanityUrl = function fetchVanityUrl(id) {
  const HTTP = require(dependencyMap[1]).HTTP;
  const obj = { disabled: null, accessibilityHint: null, legacyCompat_selected: null, url: Endpoints.GUILD_VANITY_URL(id) };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let code;
    let error;
    let uses;
    ({ code, uses, error } = body.body);
    callback(closure_2[2]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses, error });
  });
};
export const resetCode = function resetCode() {
  importDefault(dependencyMap[2]).dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
};
export const setCode = function setCode(code) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_VANITY_URL_SET", code };
  obj.dispatch(obj);
};
export const saveCode = function saveCode(id, code) {
  const require = arg2;
  const HTTP = require(dependencyMap[1]).HTTP;
  let obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true };
  obj = { code, rejectWithError: require(dependencyMap[1]).rejectWithMigratedError() };
  const obj3 = require(dependencyMap[1]);
  return HTTP.patch(obj).then((body) => {
    let code;
    let uses;
    ({ code, uses } = body.body);
    callback(closure_2[2]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
  }, (body) => {
    let obj = callback(closure_2[2]);
    obj = { type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: body.body };
    obj.dispatch(obj);
    if (null != arg2) {
      if (arg2.throwErr) {
        throw body;
      }
    }
    return body;
  });
};
