// Module ID: 11900
// Function ID: 92153
// Name: _fetchDetectableGames
// Dependencies: [5, 4162, 11901, 507, 2]
// Exports: fetchDetectableGames

// Module 11900 (_fetchDetectableGames)
import asyncGeneratorStep from "asyncGeneratorStep";
import { gameFromServer } from "_isNativeReflectConstruct";
import { DETECTABLE_GAMES_CDN_URL } from "detectableCDNUrl";

const require = arg1;
function _fetchDetectableGames() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("detectableCDNUrl").fileFinishedImporting("modules/game_profile/native/GameDetectionReportActionCreators.tsx");

export const fetchDetectableGames = function fetchDetectableGames() {
  return _fetchDetectableGames(...arguments);
};
