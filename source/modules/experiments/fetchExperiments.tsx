// Module ID: 13833
// Function ID: 13834
// Name: fetchExperiments
// Dependencies: [676, 530, 2]
// Exports: fetchExperiments

// Module 13833 (fetchExperiments)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export const fetchExperiments = function fetchExperiments(arg0) {
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = sendRequest.HTTP;
  return HTTP.get({ url: Endpoints.EXPERIMENTS, query: { with_guild_experiments: withGuildExperiments }, headers, context, retries: 3, oldFormErrors: true, rejectWithError: false });
};
