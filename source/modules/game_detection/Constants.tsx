// Module ID: 11861
// Function ID: 91853
// Name: detectableCDNUrl
// Dependencies: []

// Module 11861 (detectableCDNUrl)
function detectableCDNUrl(arg0, GAMES_DETECTABLE) {
  let combined = GAMES_DETECTABLE;
  if (null != CDN_HOST) {
    const _HermesInternal = HermesInternal;
    combined = "https://" + CDN_HOST + arg0;
  }
  return combined;
}
const Endpoints = require(dependencyMap[0]).Endpoints;
const detectableCDNUrlResult = detectableCDNUrl("/detectables/games.json", Endpoints.GAMES_DETECTABLE);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/game_detection/Constants.tsx");

export const DETECTABLE_GAMES_CDN_URL = detectableCDNUrlResult;
export const DETECTABLE_NON_GAMES_CDN_URL = detectableCDNUrl("/detectables/non-games.json", Endpoints.NON_GAMES_DETECTABLE);
