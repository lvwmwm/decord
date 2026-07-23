// Module ID: 13111
// Function ID: 101052
// Name: fetchExperiments
// Dependencies: [653, 507, 2]
// Exports: fetchExperiments

// Module 13111 (fetchExperiments)
import { Endpoints } from "ME";

const result = require("set").fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export const fetchExperiments = function fetchExperiments(arg0) {
  let context;
  let headers;
  let withGuildExperiments;
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  return HTTP.get({ url: Endpoints.EXPERIMENTS, query: { with_guild_experiments: withGuildExperiments }, headers, context, retries: 3, oldFormErrors: true, rejectWithError: false });
};
