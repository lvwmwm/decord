// Module ID: 11874
// Function ID: 91920
// Name: detectableCDNUrl
// Dependencies: [653, 2]

// Module 11874 (detectableCDNUrl)
import { Endpoints } from "ME";

function detectableCDNUrl(arg0, GAMES_DETECTABLE) {
  let combined = GAMES_DETECTABLE;
  if (null != CDN_HOST) {
    const _HermesInternal = HermesInternal;
    combined = "https://" + CDN_HOST + arg0;
  }
  return combined;
}
const detectableCDNUrlResult = detectableCDNUrl("/detectables/games.json", Endpoints.GAMES_DETECTABLE);
const detectableCDNUrlResult1 = detectableCDNUrl("/detectables/non-games.json", Endpoints.NON_GAMES_DETECTABLE);
const result = require("set").fileFinishedImporting("modules/game_detection/Constants.tsx");

export const DETECTABLE_GAMES_CDN_URL = detectableCDNUrlResult;
export const DETECTABLE_NON_GAMES_CDN_URL = detectableCDNUrlResult1;
