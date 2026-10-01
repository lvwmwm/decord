// Module ID: 8516
// Function ID: 8517
// Name: Authorize
// Dependencies: [2045, 4655, 1074, 8517, 7787, 5768, 4474, 1086, 2]
// Exports: filterScopes, parseOAuth2AuthorizeProps

// Module 8516 (Authorize)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import _mod5768 from "module_5768" /* 5768 */;
import OAuth2Scopes from "OAuth2Scopes" /* 7787 */;
import scopes from "scopes" /* 8517 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ EMPTY_NUX_SERVER: hasOwnProperty, FAVORITES: metroRequire, ME: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("modules/oauth2/Authorize.tsx");

export const filterScopes = function filterScopes(items) {
  const found = items.filter((item) => {
    const RemovedScopes = scopes.RemovedScopes;
    return !RemovedScopes.includes(item);
  });
  const hasItem = found.includes(OAuth2Scopes.OAuth2Scopes.BOT) && !found.includes(tmp(7787).OAuth2Scopes.APPLICATIONS_COMMANDS);
  if (hasItem) {
    found.push(OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  return found;
};
export const parseOAuth2AuthorizeProps = function parseOAuth2AuthorizeProps(query) {
  let NumberResult;
  let channel_id;
  let guild_id;
  let parts;
  function sanitizeOAuthGuild(guild_id) {
    const items = [closure_1_7, closure_1_6, closure_1_5];
    if (!items.includes(guild_id)) {
      return guild_id;
    }
  }
  const obj = _mod5768;
  const parsed = obj.parse(query, { arrayFormat: "bracket" });
  let NONE = PermissionUtilsAll.NONE;
  try {
    let str2 = "0";
    const deserialize = tmp3(1086).deserialize;
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
  let str4 = parsed.client_id;
  const tmp10 = sanitizeOAuthGuild(guild_id);
  if (str4 == null) {
    str4 = "";
  }
  let str5 = parsed.scope;
  const obj3 = { clientId: str4, scopes: parts.filter((item) => item.length > 0), responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, permissions: NONE, channelId: channel_id, guildId: tmp10, prompt: parsed.prompt, disableGuildSelect: "true" === parsed.disable_guild_select, integrationType: NumberResult, nonce: parsed.nonce };
  if (str5 == null) {
    str5 = "";
  }
  const str6 = str5.replace(/\+/g, " ");
  parts = str6.split(" ");
  ({ response_type: obj2.responseType, redirect_uri: obj2.redirectUri, code_challenge: obj2.codeChallenge, code_challenge_method: obj2.codeChallengeMethod, state: obj2.state } = parsed);
  NumberResult = undefined;
  if (null != parsed.integration_type) {
    const _Number = Number;
    NumberResult = Number(parsed.integration_type);
  }
  return obj3;
};
