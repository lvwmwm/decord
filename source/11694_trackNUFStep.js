// Module ID: 11694
// Function ID: 90835
// Name: trackNUFStep
// Dependencies: [670, 2, 6]
// Exports: trackNUFStep

// Module 11694 (trackNUFStep)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

let closure_3 = 0;
const result = _classCallCheck.fileFinishedImporting("modules/nuf/native/NewUserAnalyticsUtils.tsx");

export const trackNUFStep = function trackNUFStep(STEP_GUILD_TEMPLATE, STEP_FRIEND_LIST, arg2) {
  const timestamp = Date.now();
  const result = (timestamp - closure_3) / 1000;
  let obj = importDefault(dependencyMap[1]);
  obj = {};
  const merged = Object.assign(arg2);
  obj["flow_type"] = "Mobile NUX Post Reg";
  obj["from_step"] = STEP_GUILD_TEMPLATE;
  obj["to_step"] = STEP_FRIEND_LIST;
  obj["seconds_on_from_step"] = result;
  obj.track(AnalyticEvents.NUO_TRANSITION, obj);
  closure_3 = timestamp;
};
