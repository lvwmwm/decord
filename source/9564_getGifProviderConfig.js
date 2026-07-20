// Module ID: 9564
// Function ID: 74551
// Name: getGifProviderConfig
// Dependencies: []
// Exports: getExperimentContext, getProviderForAPIRequest

// Module 9564 (getGifProviderConfig)
function getGifProviderConfig() {
  const GifProvidersExperiment = arg1(dependencyMap[1]).GifProvidersExperiment;
  const config = GifProvidersExperiment.getConfig({ location: "gif_picker" });
  return { enabled: config.enableMetrics, userProvider: config.provider, sendProviderToAPI: true, fallbackProvider: config.fallbackProvider };
}
let importDefaultResult = importDefault(dependencyMap[0]);
importDefaultResult = new importDefaultResult("GifProviderConfig");
let closure_3 = "tenor";
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/gif_picker/experiments/GifProviderConfig.tsx");

export { getGifProviderConfig };
export const getProviderForAPIRequest = function getProviderForAPIRequest() {
  const GifProvidersExperiment = arg1(dependencyMap[1]).GifProvidersExperiment;
  return GifProvidersExperiment.getConfig({ location: "gif_picker" }).provider;
};
export const getExperimentContext = function getExperimentContext() {
  const tmp = getGifProviderConfig();
  const obj = { bucket: null };
  if (null != tmp.userProvider) {
    let userProvider = tmp2.userProvider;
  } else {
    userProvider = closure_3;
  }
  obj.provider = userProvider;
  obj.enabled = tmp.enabled;
  return obj;
};
