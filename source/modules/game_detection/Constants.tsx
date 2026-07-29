// Module ID: 11945
// Function ID: 11946
// Name: GAMES_DETECTABLE
// Dependencies: [676, 2]

// Module 11945 (GAMES_DETECTABLE)
import { Endpoints } from "ME";

let GAMES_DETECTABLE = Endpoints.GAMES_DETECTABLE;
if (null != CDN_HOST) {
  const _HermesInternal = HermesInternal;
  GAMES_DETECTABLE = "https://" + CDN_HOST + "/detectables/games.json";
}
let NON_GAMES_DETECTABLE = Endpoints.NON_GAMES_DETECTABLE;
if (null != CDN_HOST) {
  const _HermesInternal2 = HermesInternal;
  NON_GAMES_DETECTABLE = "https://" + CDN_HOST + "/detectables/non-games.json";
}
const result = require("set").fileFinishedImporting("modules/game_detection/Constants.tsx");

export const DETECTABLE_GAMES_CDN_URL = GAMES_DETECTABLE;
export const DETECTABLE_NON_GAMES_CDN_URL = NON_GAMES_DETECTABLE;
