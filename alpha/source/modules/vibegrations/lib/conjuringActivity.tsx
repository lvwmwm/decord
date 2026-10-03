// Module ID: 10621
// Function ID: 10622
// Name: conjuringActivity
// Dependencies: [1085, 2]
// Exports: isConjuringActivity

// Module 10621 (conjuringActivity)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const Conjuring = "Conjuring";
const result = size.fileFinishedImporting("modules/vibegrations/lib/conjuringActivity.tsx");

export const CONJURING_ACTIVITY_NAME = "Conjuring";
export const CONJURING_ACTIVITY_LINES = ["Something magical", "Brewing something new", "Casting spells", "Stirring the cauldron", "Weaving a spell", "Summoning ideas"];
export const isConjuringActivity = function isConjuringActivity(activity) {
  let type;
  if (activity != null) {
    type = activity.type;
  }
  return type === ActivityTypes.PLAYING && activity.name === Conjuring && null == activity.application_id;
};
