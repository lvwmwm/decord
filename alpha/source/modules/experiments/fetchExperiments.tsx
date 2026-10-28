// Module ID: 15699
// Function ID: 15700
// Name: fetchExperiments
// Dependencies: [1084, 1294, 2]
// Exports: fetchExperiments

// Module 15699 (fetchExperiments)
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export const fetchExperiments = function fetchExperiments(arg0) {
  let context;
  let headers;
  let withGuildExperiments;
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPERIMENTS, query: { with_guild_experiments: withGuildExperiments }, headers, context, retries: 3, oldFormErrors: true, rejectWithError: false };
  return HTTP.get(request);
};
