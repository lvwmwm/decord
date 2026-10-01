// Module ID: 7252
// Function ID: 7253
// Name: trackPoggermodeSettingsUpdated
// Dependencies: [7092, 1074, 12, 1241, 2]

// Module 7252 (trackPoggermodeSettingsUpdated)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PoggermodeConstants from "PoggermodeConstants" /* 7092 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
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
({ ShakeLocation: c2, ConfettiLocation: c3 } = PoggermodeConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const throttleResult = module_12.throttle((arg0) => {
  let combosEnabled;
  let combosRequiredCount;
  let confettiCount;
  let confettiEnabled;
  let confettiEnabledLocations;
  let confettiSize;
  let enabled;
  let found;
  let found1;
  let screenshakeEnabled;
  let screenshakeEnabledLocations;
  let shakeIntensity;
  const f84163 = (item) => {
    let tmp;
    [, tmp] = item;
    return tmp;
  };
  const f84164 = (item) => {
    let tmp;
    [tmp] = item;
    return closure_0(Number.parseInt(tmp));
  };
  ({ enabled, combosEnabled, combosRequiredCount, screenshakeEnabled, shakeIntensity, screenshakeEnabledLocations, confettiEnabled, confettiSize, confettiCount, confettiEnabledLocations } = arg0);
  const tmp = AnalyticsUtilsDefault;
  const track = tmp.track;
  const POGGERMODE_SETTINGS_UPDATED = AnalyticEvents.POGGERMODE_SETTINGS_UPDATED;
  const obj = { enabled, combos_enabled: combosEnabled, combos_required_count: combosRequiredCount, screenshake_enabled: screenshakeEnabled, shake_intensity: shakeIntensity, screenshake_enabled_locations: found.map(f84164), confetti_enabled: confettiEnabled, confetti_size: confettiSize, confetti_count: confettiCount, confetti_enabled_locations: found1.map(f84164) };
  const entries = Object.entries(screenshakeEnabledLocations);
  found = entries.filter(f84163);
  let closure_0 = getConfettiLocationName;
  const entries1 = Object.entries(confettiEnabledLocations);
  found1 = entries1.filter(f84163);
  track(POGGERMODE_SETTINGS_UPDATED, obj);
}, 5000);
const result = size.fileFinishedImporting("modules/poggermode/trackPoggermodeSettingsUpdated.tsx");

export default throttleResult;
