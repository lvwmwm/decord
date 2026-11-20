// Module ID: 6884
// Function ID: 6885
// Name: Authorize
// Dependencies: [4643, 4827, 1071, 6885, 6794, 6451, 4731, 1083, 5515, 2]
// Exports: filterScopes, parseOAuth2AuthorizeProps

// Module 6884 (Authorize)
import BigFlagUtilsAll from "BigFlagUtils" /* 1083 */;
import PermissionUtilsAll from "PermissionUtils" /* 4731 */;
import QueryStringUtils from "QueryStringUtils" /* 5515 */;
import _mod6451 from "module_6451" /* 6451 */;
import OAuth2Scopes from "OAuth2Scopes" /* 6794 */;
import scopes from "scopes" /* 6885 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ EMPTY_NUX_SERVER: hasOwnProperty, FAVORITES: metroRequire, ME: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("modules/oauth2/Authorize.tsx");

export function filterScopes(items) {
  const found = items.filter((item) => {
    const RemovedScopes = scopes.RemovedScopes;
    return !RemovedScopes.includes(item);
  });
  const hasItem = found.includes(OAuth2Scopes.OAuth2Scopes.BOT) && !found.includes(tmp(6794).OAuth2Scopes.APPLICATIONS_COMMANDS);
  if (hasItem) {
    found.push(OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  return found;
}
export function parseOAuth2AuthorizeProps(query) {
  let NumberResult;
  let channel_id;
  let guild_id;
  function sanitizeOAuthGuild(guild_id) {
    const items = [closure_1_7, closure_1_6, closure_1_5];
    if (!items.includes(guild_id)) {
      return guild_id;
    }
  }
  const obj = _mod6451;
  const parsed = obj.parse(query, { arrayFormat: "bracket" });
  let NONE = PermissionUtilsAll.NONE;
  try {
    let str2 = "0";
    const deserialize = tmp4(1083).deserialize;
    BigFlagUtilsAll;
    if (null != parsed.permissions) {
      str2 = "0";
      if ("" !== parsed.permissions) {
        str2 = parsed.permissions;
      }
    }
    NONE = deserialize(str2);
  } catch (err) {
  }
  ({ channel_id, guild_id } = parsed);
  if (guild_id == null) {
    const channel = ChannelStore.getChannel(channel_id);
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    guild_id = guild_id1;
  }
  if (guild_id == null) {
    guild_id = SelectedGuildStore.getGuildId();
  }
  const scope = parsed.scope;
  const tmp11 = sanitizeOAuthGuild(guild_id);
  const getFirstQueryStringValue = tmp(5515).getFirstQueryStringValue;
  QueryStringUtils;
  let str4 = getFirstQueryStringValue(scope);
  if (str4 == null) {
    str4 = "";
  }
  const str5 = str4.replace(/\+/g, " ");
  const parts = str5.split(" ");
  let str6 = parsed.client_id;
  const found = parts.filter((item) => item.length > 0);
  if (str6 == null) {
    str6 = "";
  }
  const obj2 = { clientId: str6, scopes: found, responseType: parsed.response_type, redirectUri: parsed.redirect_uri, codeChallenge: parsed.code_challenge, codeChallengeMethod: parsed.code_challenge_method, state: parsed.state, permissions: NONE, channelId: channel_id, guildId: tmp11, prompt: parsed.prompt, disableGuildSelect: "true" === parsed.disable_guild_select, integrationType: NumberResult, nonce: parsed.nonce };
  NumberResult = undefined;
  if (null != parsed.integration_type) {
    const _Number = Number;
    NumberResult = Number(parsed.integration_type);
  }
  return obj2;
}
