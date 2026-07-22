// Module ID: 11802
// Function ID: 91588
// Name: useInappropriateConversationsTiers
// Dependencies: []
// Exports: useInappropriateConversationsTiers

// Module 11802 (useInappropriateConversationsTiers)
let closure_2 = importDefault(dependencyMap[0]);
const SafetyWarningTypes = arg1(dependencyMap[1]).SafetyWarningTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx");

export const useInappropriateConversationsTiers = function useInappropriateConversationsTiers(channel) {
  let obj = arg1(dependencyMap[2]);
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({ location: "context-menu-item" });
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = arg1(dependencyMap[3]);
  const inappropriateConversationBannerForChannel = arg1(dependencyMap[4]).useInappropriateConversationBannerForChannel(channel.id, "context-menu-item");
  let isStaffResult;
  if (null != stateFromStores) {
    isStaffResult = stateFromStores.isStaff();
  }
  let tmp4 = null;
  if (true === isStaffResult) {
    tmp4 = null;
    if (isEligibleForInappropriateConversationWarning) {
      tmp4 = null;
      if (channel.isDM()) {
        obj = {};
        let type;
        if (null != inappropriateConversationBannerForChannel) {
          type = inappropriateConversationBannerForChannel.type;
        }
        obj.isTier1 = type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
        let type1;
        if (null != inappropriateConversationBannerForChannel) {
          type1 = inappropriateConversationBannerForChannel.type;
        }
        obj.isTier2 = type1 === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2;
        tmp4 = obj;
      }
    }
  }
  return tmp4;
};
