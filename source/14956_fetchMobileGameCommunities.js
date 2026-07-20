// Module ID: 14956
// Function ID: 112595
// Name: fetchMobileGameCommunities
// Dependencies: []
// Exports: dismissGuild, fetchMobileGameCommunities

// Module 14956 (fetchMobileGameCommunities)
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx");

export const fetchMobileGameCommunities = function fetchMobileGameCommunities(arr, arr2, arg2) {
  let items = arr2;
  let num = arg2;
  const require = arr;
  if (arr2 === undefined) {
    items = [];
  }
  if (num === undefined) {
    num = 20;
  }
  const HTTP = require(dependencyMap[1]).HTTP;
  let obj = { url: Endpoints.MOBILE_GAME_COMMUNITIES };
  obj = { game_ids: arr, limit: num, ignored_guild_ids: items };
  obj.query = importDefault(dependencyMap[2]).stringify(obj);
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = callback(closure_2[3]);
    obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: body };
    obj.dispatch(obj);
  }, () => {
    callback(closure_2[3]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
  });
};
export const dismissGuild = function dismissGuild(guildId) {
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "MOBILE_GAME_COMMUNITIES_DISMISS_GUILD", guildId };
  obj.dispatch(obj);
};
