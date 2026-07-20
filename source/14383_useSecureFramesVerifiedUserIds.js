// Module ID: 14383
// Function ID: 108541
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [7656, 14390, 13597]
// Exports: useSecureFramesVerifiedUserIds

// Module 14383 (useSecureFramesVerifiedUserIds)
import MobileSetting from "MobileSetting";
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings";

const result = useParentalControlledExplicitContentSettings.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [MobileSetting];
  return arg1(dependencyMap[1]).useStateFromStoresArray(items, () => userIds.getUserIds());
};
