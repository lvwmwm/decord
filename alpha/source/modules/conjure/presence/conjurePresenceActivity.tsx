// Module ID: 10649
// Function ID: 10650
// Name: conjurePresenceActivity
// Dependencies: [1084, 2]
// Exports: isConjurePresenceActivity

// Module 10649 (conjurePresenceActivity)
import Constants from "Constants" /* 1084 */;
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
