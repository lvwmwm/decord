// Module ID: 11839
// Function ID: 91875
// Name: useInappropriateConversationsTiers
// Dependencies: [1849, 9139, 10137, 566, 10436, 2]
// Exports: useInappropriateConversationsTiers

// Module 11839 (useInappropriateConversationsTiers)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("InappropriateConversationExperiment").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx");

export const useInappropriateConversationsTiers = function useInappropriateConversationsTiers(channel) {
  let obj = require(10137) /* InappropriateConversationExperiment */;
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({ location: "context-menu-item" });
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getCurrentUser());
  const obj2 = require(566) /* initialize */;
  const inappropriateConversationBannerForChannel = require(10436) /* useInappropriateConversationBannerForChannel */.useInappropriateConversationBannerForChannel(channel.id, "context-menu-item");
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
