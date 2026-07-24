// Module ID: 7074
// Function ID: 56573
// Name: getScreenshakeLocationName
// Dependencies: [6920, 653, 22, 675, 2]

// Module 7074 (getScreenshakeLocationName)
import ConfettiLocation from "ConfettiLocation";
import { AnalyticEvents } from "ME";
import importDefaultResult from "apply";

let closure_2;
let closure_3;
function getScreenshakeLocationName(arg0) {
  if (constants.CHAT_INPUT === arg0) {
    return "chat_input";
  } else if (constants.MENTION === arg0) {
    return "mention";
  } else if (constants.VOICE_USER === arg0) {
    return "voice_user";
  }
}
function getConfettiLocationName(arg0) {
  if (constants2.CHAT_INPUT === arg0) {
    return "chat_input";
  } else if (constants2.MEMBER_USER === arg0) {
    return "member_user";
  } else if (constants2.REACTION === arg0) {
    return "reaction";
  } else if (constants2.CALL_TILE === arg0) {
    return "call_tile";
  }
}
function getListOfEnabledLocations(confettiEnabledLocations, getConfettiLocationName) {
  let closure_0 = getConfettiLocationName;
  const entries = Object.entries(confettiEnabledLocations);
  const found = entries.filter((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return tmp;
  });
  return found.map((arg0) => {
    let tmp;
    [tmp] = arg0;
    return getConfettiLocationName(Number.parseInt(tmp));
  });
}
({ ShakeLocation: closure_2, ConfettiLocation: closure_3 } = ConfettiLocation);
const throttleResult = require("apply").throttle((arg0) => {
  let combosEnabled;
  let combosRequiredCount;
  let confettiCount;
  let confettiEnabled;
  let confettiEnabledLocations;
  let confettiSize;
  let enabled;
  let screenshakeEnabled;
  let screenshakeEnabledLocations;
  let shakeIntensity;
  ({ enabled, combosEnabled, combosRequiredCount, screenshakeEnabled, shakeIntensity, screenshakeEnabledLocations, confettiEnabled, confettiSize, confettiCount, confettiEnabledLocations } = arg0);
  let obj = importDefault(675);
  obj = { enabled, combos_enabled: combosEnabled, combos_required_count: combosRequiredCount, screenshake_enabled: screenshakeEnabled, shake_intensity: shakeIntensity, screenshake_enabled_locations: getListOfEnabledLocations(screenshakeEnabledLocations, getScreenshakeLocationName), confetti_enabled: confettiEnabled, confetti_size: confettiSize, confetti_count: confettiCount, confetti_enabled_locations: getListOfEnabledLocations(confettiEnabledLocations, getConfettiLocationName) };
  obj.track(AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, obj);
}, 5000);
const result = require("apply").fileFinishedImporting("modules/poggermode/trackPoggermodeSettingsUpdated.tsx");

export default throttleResult;
