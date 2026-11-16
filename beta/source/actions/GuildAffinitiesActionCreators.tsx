// Module ID: 10208
// Function ID: 10209
// Name: GuildAffinitiesActionCreators
// Dependencies: [1072, 1285, 572, 2]
// Exports: fetchGuildAffinities

// Module 10208 (GuildAffinitiesActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export function fetchGuildAffinities() {
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
}
