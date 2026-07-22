// Module ID: 8311
// Function ID: 65793
// Name: fetchGuildAffinities
// Dependencies: []
// Exports: fetchGuildAffinities

// Module 8311 (fetchGuildAffinities)
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export const fetchGuildAffinities = function fetchGuildAffinities() {
  const HTTP = require(dependencyMap[1]).HTTP;
  const obj = { url: Endpoints.GUILD_AFFINITIES, oldFormErrors: true, rejectWithError: require(dependencyMap[1]).rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then((guildAffinities) => {
    callback(closure_2[2]).dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: guildAffinities.body.guild_affinities });
  }, () => {
    callback(closure_2[2]).dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
  });
};
