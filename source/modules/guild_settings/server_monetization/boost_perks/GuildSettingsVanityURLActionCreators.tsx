// Module ID: 8443
// Function ID: 67370
// Name: fetchVanityUrl
// Dependencies: [653, 507, 686, 2]
// Exports: fetchVanityUrl, resetCode, saveCode, setCode

// Module 8443 (fetchVanityUrl)
import { Endpoints } from "ME";

const result = require("dispatcher").fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx");

export const fetchVanityUrl = function fetchVanityUrl(id) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: Endpoints.GUILD_VANITY_URL(id), oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let code;
    let error;
    let uses;
    ({ code, uses, error } = body.body);
    outer1_1(outer1_2[2]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses, error });
  });
};
export const resetCode = function resetCode() {
  importDefault(686).dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
};
export const setCode = function setCode(code) {
  let obj = importDefault(686);
  obj = { type: "GUILD_SETTINGS_VANITY_URL_SET", code };
  obj.dispatch(obj);
};
export const saveCode = function saveCode(id, code) {
  const _require = arg2;
  const HTTP = _require(507).HTTP;
  obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true };
  obj = { code, rejectWithError: _require(507).rejectWithMigratedError() };
  const obj3 = _require(507);
  return HTTP.patch(obj).then((body) => {
    let code;
    let uses;
    ({ code, uses } = body.body);
    outer1_1(outer1_2[2]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
  }, (body) => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: body.body };
    obj.dispatch(obj);
    if (null != throwErr) {
      if (throwErr.throwErr) {
        throw body;
      }
    }
    return body;
  });
};
