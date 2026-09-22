// Module ID: 8464
// Function ID: 8465
// Name: GuildAffinitiesActionCreators
// Dependencies: [1074, 1270, 573, 2]
// Exports: fetchGuildAffinities

// Module 8464 (GuildAffinitiesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1270 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export const fetchGuildAffinities = function fetchGuildAffinities() {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.GUILD_AFFINITIES, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  value = HTTP.get(obj);
  return value.then((guildAffinities) => {
    DispatcherDefault.dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: guildAffinities.body.guild_affinities });
  }, () => {
    DispatcherDefault.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
  });
};
