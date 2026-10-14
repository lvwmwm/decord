// Module ID: 14802
// Function ID: 14803
// Name: fetchExperiments
// Dependencies: [1085, 1295, 2]
// Exports: fetchExperiments

// Module 14802 (fetchExperiments)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
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
