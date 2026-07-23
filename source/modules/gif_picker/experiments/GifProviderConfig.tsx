// Module ID: 9577
// Function ID: 74633
// Name: getGifProviderConfig
// Dependencies: [3, 9578, 9579, 2]
// Exports: getExperimentContext, getProviderForAPIRequest

// Module 9577 (getGifProviderConfig)
import importDefaultResult from "set";

const require = arg1;
function getGifProviderConfig() {
  const GifProvidersExperiment = require(9578) /* apexExperiment */.GifProvidersExperiment;
  const config = GifProvidersExperiment.getConfig({ location: "gif_picker" });
  return { enabled: config.enableMetrics, userProvider: config.provider, sendProviderToAPI: true, fallbackProvider: config.fallbackProvider };
}
importDefaultResult = new importDefaultResult("GifProviderConfig");
const tenor = "tenor";
const result = require("items").fileFinishedImporting("modules/gif_picker/experiments/GifProviderConfig.tsx");

export { getGifProviderConfig };
export const getProviderForAPIRequest = function getProviderForAPIRequest() {
  const GifProvidersExperiment = require(9578) /* apexExperiment */.GifProvidersExperiment;
  return GifProvidersExperiment.getConfig({ location: "gif_picker" }).provider;
};
export const getExperimentContext = function getExperimentContext() {
  const tmp = getGifProviderConfig();
  const obj = { bucket: null };
  if (null != tmp.userProvider) {
    let userProvider = tmp2.userProvider;
  } else {
    userProvider = tenor;
  }
  obj.provider = userProvider;
  obj.enabled = tmp.enabled;
  return obj;
};
