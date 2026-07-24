// Module ID: 10432
// Function ID: 80360
// Name: useStrangerDangerWarning
// Dependencies: [1849, 9139, 566, 10433, 10434, 10435, 7705, 10140, 2]
// Exports: useStrangerDangerWarning

// Module 10432 (useStrangerDangerWarning)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getCurrentUser());
  const obj = require(566) /* initialize */;
  const isSpamMessageRequest = require(10433) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10433) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10434) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10434) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10435) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10435) /* useChannelSafetyWarning */;
  const userIsTeen = require(7705) /* useUserIsTeen */.useUserIsTeen();
  if (null != stateFromStores) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(7705) /* useUserIsTeen */;
  if (userIsTeen) {
    if (!isSpamMessageRequest) {
      if (!isMessageRequest) {
        if (obj7.useInappropriateConversationWarningsForChannel(id).length <= 0) {
          return channelSafetyWarning;
        }
      }
    }
  }
};
