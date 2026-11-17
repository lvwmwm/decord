// Module ID: 16674
// Function ID: 16675
// Name: fetchExperiments
// Dependencies: [1072, 1285, 2]
// Exports: fetchExperiments

// Module 16674 (fetchExperiments)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export function fetchExperiments(arg0) {
  let context;
  let headers;
  let withGuildExperiments;
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPERIMENTS, query: { with_guild_experiments: withGuildExperiments }, headers, context, retries: 3, oldFormErrors: true, rejectWithError: false };
  return HTTP.get(request);
}
