// Module ID: 12060
// Function ID: 12061
// Name: useWidgetGamePress
// Dependencies: [10595, 10217, 2]
// Exports: default

// Module 12060 (useWidgetGamePress)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10217 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 10595 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useWidgetGamePress.tsx");

export default function useWidgetGamePress(sourceUserId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp = useOpenGameProfileModalDefault;
  return tmp(obj);
};
