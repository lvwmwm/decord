// Module ID: 12114
// Function ID: 12115
// Name: useWidgetGamePress
// Dependencies: [10664, 10286, 2]
// Exports: default

// Module 12114 (useWidgetGamePress)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10286 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 10664 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useWidgetGamePress.tsx");

export default function useWidgetGamePress(sourceUserId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp = useOpenGameProfileModalDefault;
  return tmp(obj);
};
