// Module ID: 12180
// Function ID: 12181
// Name: NewUserAnalyticsUtils
// Dependencies: [1074, 1241, 2]
// Exports: trackNUFStep

// Module 12180 (NewUserAnalyticsUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let timestamp = 0;
let result = size.fileFinishedImporting("modules/nuf/native/NewUserAnalyticsUtils.tsx");

export const trackNUFStep = function trackNUFStep(STEP_GUILD_TEMPLATE, key2, arg2) {
  timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  const obj = { flow_type: "Mobile NUX Post Reg", from_step: STEP_GUILD_TEMPLATE, to_step: key2, seconds_on_from_step: result };
  const track = AnalyticsUtilsDefault.track;
  const NUO_TRANSITION = AnalyticEvents.NUO_TRANSITION;
  AnalyticsUtilsDefault;
  const merged = Object.assign(arg2);
  track(NUO_TRANSITION, obj);
};
