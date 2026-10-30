// Module ID: 10737
// Function ID: 10738
// Name: conjurePresenceActivity
// Dependencies: [5757, 2]
// Exports: isConjurePresenceActivity

// Module 10737 (conjurePresenceActivity)
import ActivityTypes from "ActivityTypes" /* 5757 */;
import size from "module_2" /* 2 */;

const Conjuring = "Conjuring";
const result = size.fileFinishedImporting("modules/conjure/presence/conjurePresenceActivity.tsx");

export const CONJURE_PRESENCE_ACTIVITY_NAME = "Conjuring";
export const CONJURE_PRESENCE_ACTIVITY_LINES = ["Something magical", "Brewing something new", "Casting spells", "Stirring the cauldron", "Weaving a spell", "Summoning ideas"];
export function isConjurePresenceActivity(activity) {
  let type;
  if (activity != null) {
    type = activity.type;
  }
  const tmp2 = type === ActivityTypes.ActivityTypes.PLAYING && activity.name === Conjuring && null == activity.application_id;
  return tmp2;
}
