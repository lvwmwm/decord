// Module ID: 12066
// Function ID: 12067
// Name: useWidgetGamePress
// Dependencies: [10597, 10219, 2]
// Exports: default

// Module 12066 (useWidgetGamePress)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10219 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 10597 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useWidgetGamePress.tsx");

export default function useWidgetGamePress(sourceUserId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp = useOpenGameProfileModalDefault;
  return tmp(obj);
};
