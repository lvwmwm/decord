// Module ID: 12073
// Function ID: 12074
// Name: NewUserAnalyticsUtils
// Dependencies: [1086, 1253, 2]
// Exports: trackNUFStep

// Module 12073 (NewUserAnalyticsUtils)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let timestamp = 0;
let result = size.fileFinishedImporting("modules/nuf/native/NewUserAnalyticsUtils.tsx");

export const trackNUFStep = function trackNUFStep(STEP_GUILD_TEMPLATE, STEP_FRIEND_LIST, arg2) {
  timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  const obj = { flow_type: "Mobile NUX Post Reg", from_step: STEP_GUILD_TEMPLATE, to_step: STEP_FRIEND_LIST, seconds_on_from_step: result };
  const track = AnalyticsUtilsDefault.track;
  const NUO_TRANSITION = AnalyticEvents.NUO_TRANSITION;
  AnalyticsUtilsDefault;
  const merged = Object.assign(arg2);
  track(NUO_TRANSITION, obj);
};
