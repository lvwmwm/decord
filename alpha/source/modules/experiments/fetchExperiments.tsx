// Module ID: 14270
// Function ID: 14271
// Name: fetchExperiments
// Dependencies: [1085, 1294, 2]
// Exports: fetchExperiments

// Module 14270 (fetchExperiments)
import Constants from "Constants" /* 1085 */;
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
