// Module ID: 10918
// Function ID: 10919
// Name: ConjurePublishTypes
// Dependencies: [2]
// Exports: canPublish, isConjureLive

// Module 10918 (ConjurePublishTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/ConjurePublishTypes.tsx");

export function isConjureLive(publishState) {
  return "live_outdated" === publishState || "live_current" === publishState || "live_auto_synced" === publishState;
}
export function canPublish(publishState) {
  return "nothing_built" !== publishState && "live_auto_synced" !== publishState;
}
export const CONJURE_PUBLISH_PROGRESS_STAGES = ["preparing", "approval", "setup", "build", "deploy", "discord", "activating"];
