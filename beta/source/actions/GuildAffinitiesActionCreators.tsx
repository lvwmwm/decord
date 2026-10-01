// Module ID: 7794
// Function ID: 7795
// Name: GuildAffinitiesActionCreators
// Dependencies: [1074, 1271, 573, 2]
// Exports: fetchGuildAffinities

// Module 7794 (GuildAffinitiesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export const fetchGuildAffinities = function fetchGuildAffinities() {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  let obj = { url: Endpoints.GUILD_AFFINITIES, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
  const get = HTTP.get;
  obj2 = HTTPUtils;
  const value = get(obj);
  return value.then((body) => {
    const guild_affinities = body.body.guild_affinities;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: guild_affinities });
  }, () => {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
  });
};
