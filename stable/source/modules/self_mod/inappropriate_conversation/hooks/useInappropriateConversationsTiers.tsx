// Module ID: 11103
// Function ID: 11104
// Name: useInappropriateConversationsTiers
// Dependencies: [1371, 11050, 11104, 504, 11105, 2]
// Exports: useInappropriateConversationsTiers

// Module 11103 (useInappropriateConversationsTiers)
import initialize from "initialize" /* 504 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11104 */;
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 11105 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const SafetyWarningTypes = fn(11050).SafetyWarningTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx");

export const useInappropriateConversationsTiers = function useInappropriateConversationsTiers(channel) {
  const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: "context-menu-item" });
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const inappropriateConversationBannerForChannel = useInappropriateConversationBannerForChannel.useInappropriateConversationBannerForChannel(channel.id, "context-menu-item");
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  let tmp4 = null;
  if (true === isStaffResult) {
    tmp4 = null;
    if (isEligibleForInappropriateConversationWarning) {
      tmp4 = null;
      if (channel.isDM()) {
        let type;
        if (inappropriateConversationBannerForChannel != null) {
          type = inappropriateConversationBannerForChannel.type;
        }
        const obj3 = { isTier1: type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1, isTier2: null };
        let type1;
        if (inappropriateConversationBannerForChannel != null) {
          type1 = inappropriateConversationBannerForChannel.type;
        }
        obj3.isTier2 = type1 === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2;
        tmp4 = obj3;
      }
    }
  }
  return tmp4;
};
