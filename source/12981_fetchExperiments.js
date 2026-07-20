// Module ID: 12981
// Function ID: 98818
// Name: fetchExperiments
// Dependencies: []
// Exports: fetchExperiments

// Module 12981 (fetchExperiments)
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export const fetchExperiments = function fetchExperiments(arg0) {
  let context;
  let headers;
  let withGuildExperiments;
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = require(dependencyMap[1]).HTTP;
  return HTTP.get({ url: Endpoints.EXPERIMENTS, query: { with_guild_experiments: withGuildExperiments }, headers, context, retries: 3, oldFormErrors: true, rejectWithError: false });
};
