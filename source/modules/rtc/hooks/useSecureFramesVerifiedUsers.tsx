// Module ID: 14393
// Function ID: 108596
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [7656, 14400, 13606]
// Exports: useSecureFramesVerifiedUserIds

// Module 14393 (useSecureFramesVerifiedUserIds)
import MobileSetting from "MobileSetting";
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings";

const result = useParentalControlledExplicitContentSettings.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [MobileSetting];
  return arg1(dependencyMap[1]).useStateFromStoresArray(items, () => userIds.getUserIds());
};
