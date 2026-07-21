// Module ID: 8946
// Function ID: 70516
// Name: filterScopes
// Dependencies: []
// Exports: filterScopes, parseOAuth2AuthorizeProps

// Module 8946 (filterScopes)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ EMPTY_NUX_SERVER: closure_5, FAVORITES: closure_6, ME: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/oauth2/Authorize.tsx");

export const filterScopes = function filterScopes(items) {
  const found = items.filter((arg0) => {
    const RemovedScopes = callback(closure_2[3]).RemovedScopes;
    return !RemovedScopes.includes(arg0);
  });
  let hasItem = found.includes(arg1(dependencyMap[4]).OAuth2Scopes.BOT);
  if (hasItem) {
    hasItem = !found.includes(arg1(dependencyMap[4]).OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  if (hasItem) {
    found.push(arg1(dependencyMap[4]).OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  return found;
};
export const parseOAuth2AuthorizeProps = function parseOAuth2AuthorizeProps(query) {
  let channel_id;
  let guild_id;
  let obj = arg1(dependencyMap[5]);
  const parsed = obj.parse(query, { arrayFormat: "bracket" });
  const NONE = importAll(dependencyMap[6]).NONE;
  importAll(dependencyMap[7]);
  while (true) {
    let tmp6 = parsed;
    ({ channel_id, guild_id } = parsed);
    let tmp7 = guild_id;
    let tmp8 = null;
    if (null != guild_id) {
      let guild_id2 = guild_id;
    } else {
      let tmp9 = channel;
      let tmp10 = channel_id;
      let channel = channel.getChannel(channel_id);
      let tmp12 = channel;
      if (null != channel) {
        guild_id2 = channel.guild_id;
      }
    }
    let tmp13 = guild_id2;
    if (null != guild_id2) {
      let guildId = guild_id2;
    } else {
      let tmp14 = guildId;
      guildId = guildId.getGuildId();
    }
    let tmp16 = closure_7;
    let items = [closure_7, , ];
    let tmp17 = closure_6;
    items[1] = closure_6;
    let tmp18 = closure_5;
    items[2] = closure_5;
    let tmp19 = guildId;
    let tmp20;
    if (!items.includes(guildId)) {
      let tmp21;
      if (null != guildId) {
        tmp21 = guildId;
      }
      tmp20 = tmp21;
    }
    let tmp22 = tmp20;
    obj = {};
    let tmp23 = parsed;
    let client_id = parsed.client_id;
    let tmp24 = client_id;
    let str3 = "";
    let str4 = "";
    if (null != client_id) {
      str4 = client_id;
    }
    obj.clientId = str4;
    let tmp25 = parsed;
    let scope = parsed.scope;
    let tmp26 = scope;
    if (null != scope) {
      str3 = scope;
    }
    let str5 = " ";
    let str6 = str3.replace(/\+/g, " ");
    let parts = str6.split(" ");
    obj.scopes = parts.filter((arg0) => arg0.length > 0);
    let tmp27 = parsed;
    ({ response_type: obj2.responseType, redirect_uri: obj2.redirectUri, code_challenge: obj2.codeChallenge, code_challenge_method: obj2.codeChallengeMethod, state: obj2.state } = parsed);
    obj.permissions = tmp5;
    obj.channelId = channel_id;
    obj.guildId = tmp20;
    obj.prompt = parsed.prompt;
    let str7 = "true";
    obj.disableGuildSelect = "true" === parsed.disable_guild_select;
    let NumberResult;
    if (null != parsed.integration_type) {
      let tmp29 = globalThis;
      let _Number = Number;
      let tmp30 = parsed;
      NumberResult = Number(parsed.integration_type);
    }
    obj.integrationType = NumberResult;
    obj.nonce = parsed.nonce;
    return obj;
  }
};
