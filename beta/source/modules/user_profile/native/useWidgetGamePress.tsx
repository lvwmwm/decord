// Module ID: 15255
// Function ID: 15256
// Name: useWidgetGamePress
// Dependencies: [9430, 9454, 2]
// Exports: default

// Module 15255 (useWidgetGamePress)
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9430 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9454 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useWidgetGamePress.tsx");

export default function useWidgetGamePress(sourceUserId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp = useOpenGameProfileModalDefault;
  return tmp(obj);
};
