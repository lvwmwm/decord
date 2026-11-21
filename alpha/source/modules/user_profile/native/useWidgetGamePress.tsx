// Module ID: 10237
// Function ID: 10238
// Name: useWidgetGamePress
// Dependencies: [9765, 9774, 2]
// Exports: default

// Module 10237 (useWidgetGamePress)
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9765 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9774 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useWidgetGamePress.tsx");

export default function useWidgetGamePress(sourceUserId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp = useOpenGameProfileModalDefault;
  return tmp(obj);
};
