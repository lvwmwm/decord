// Module ID: 10217
// Function ID: 10218
// Name: conjurePresenceActivity
// Dependencies: [1085, 2]
// Exports: isConjurePresenceActivity

// Module 10217 (conjurePresenceActivity)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const Conjuring = "Conjuring";
const result = size.fileFinishedImporting("modules/conjure/presence/conjurePresenceActivity.tsx");

export const CONJURE_PRESENCE_ACTIVITY_NAME = "Conjuring";
export const CONJURE_PRESENCE_ACTIVITY_LINES = ["Something magical", "Brewing something new", "Casting spells", "Stirring the cauldron", "Weaving a spell", "Summoning ideas"];
export const isConjurePresenceActivity = function isConjurePresenceActivity(activity) {
  let type;
  if (activity != null) {
    type = activity.type;
  }
  return type === ActivityTypes.PLAYING && activity.name === Conjuring && null == activity.application_id;
};
