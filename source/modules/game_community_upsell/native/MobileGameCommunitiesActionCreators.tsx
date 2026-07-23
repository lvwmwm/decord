// Module ID: 15090
// Function ID: 114864
// Name: fetchMobileGameCommunities
// Dependencies: [653, 507, 1440, 686, 2]
// Exports: dismissGuild, fetchMobileGameCommunities

// Module 15090 (fetchMobileGameCommunities)
import { Endpoints } from "ME";

const result = require("parse").fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx");

export const fetchMobileGameCommunities = function fetchMobileGameCommunities(arr, arr2, arg2) {
  let items = arr2;
  let num = arg2;
  const _require = arr;
  if (arr2 === undefined) {
    items = [];
  }
  if (num === undefined) {
    num = 20;
  }
  const HTTP = _require(507).HTTP;
  let obj = { url: Endpoints.MOBILE_GAME_COMMUNITIES };
  obj = { game_ids: arr, limit: num, ignored_guild_ids: items };
  obj.query = importDefault(1440).stringify(obj);
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = outer1_1(outer1_2[3]);
    obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: closure_0 };
    obj.dispatch(obj);
  }, () => {
    outer1_1(outer1_2[3]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
  });
};
export const dismissGuild = function dismissGuild(guildId) {
  let obj = importDefault(686);
  obj = { type: "MOBILE_GAME_COMMUNITIES_DISMISS_GUILD", guildId };
  obj.dispatch(obj);
};
