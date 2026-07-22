// Module ID: 14401
// Function ID: 108639
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [7656, 14408, 13613]
// Exports: useSecureFramesVerifiedUserIds

// Module 14401 (useSecureFramesVerifiedUserIds)
import MobileSetting from "MobileSetting";
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings";

const result = useParentalControlledExplicitContentSettings.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [MobileSetting];
  return arg1(dependencyMap[1]).useStateFromStoresArray(items, () => userIds.getUserIds());
};
