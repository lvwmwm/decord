// Module ID: 14390
// Function ID: 108564
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [7655, 14397, 13604]
// Exports: useSecureFramesVerifiedUserIds

// Module 14390 (useSecureFramesVerifiedUserIds)
import MobileSetting from "MobileSetting";
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings";

const result = useParentalControlledExplicitContentSettings.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [MobileSetting];
  return arg1(dependencyMap[1]).useStateFromStoresArray(items, () => userIds.getUserIds());
};
