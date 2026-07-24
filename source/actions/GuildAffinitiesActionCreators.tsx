// Module ID: 8361
// Function ID: 66058
// Name: fetchGuildAffinities
// Dependencies: [653, 507, 686, 2]
// Exports: fetchGuildAffinities

// Module 8361 (fetchGuildAffinities)
import { Endpoints } from "ME";

const result = require("dispatcher").fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export const fetchGuildAffinities = function fetchGuildAffinities() {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: Endpoints.GUILD_AFFINITIES, oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then((guildAffinities) => {
    outer1_1(outer1_2[2]).dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: guildAffinities.body.guild_affinities });
  }, () => {
    outer1_1(outer1_2[2]).dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
  });
};
