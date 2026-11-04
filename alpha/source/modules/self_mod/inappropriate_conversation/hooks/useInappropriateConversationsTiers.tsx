// Module ID: 14611
// Function ID: 14612
// Name: useInappropriateConversationsTiers
// Dependencies: [1385, 10982, 11450, 504, 11449, 2]
// Exports: useInappropriateConversationsTiers

// Module 14611 (useInappropriateConversationsTiers)
import get_initialized from "get initialized" /* 504 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10982 */;
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 11449 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11450 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx");

export function useInappropriateConversationsTiers(channel) {
  let currentUser;
  let tmp6;
  let type1;
  const obj = SelfModInappropriateConversationExperiment;
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({ location: "context-menu-item" });
  const items = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj4 = useInappropriateConversationBannerForChannel;
  const inappropriateConversationBannerForChannel = obj4.useInappropriateConversationBannerForChannel(channel.id, "context-menu-item");
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
        const obj3 = { isTier1: type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1, isTier2: type1 === tmp6.INAPPROPRIATE_CONVERSATION_TIER_2 };
        type1 = undefined;
        tmp6 = SafetyWarningTypes;
        if (inappropriateConversationBannerForChannel != null) {
          type1 = inappropriateConversationBannerForChannel.type;
        }
        tmp4 = obj3;
      }
    }
  }
  return tmp4;
}
