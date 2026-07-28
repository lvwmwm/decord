// Module ID: 10407
// Function ID: 80163
// Name: useStrangerDangerWarning
// Dependencies: [1850, 9075, 566, 10408, 10409, 10410, 7685, 10112, 2]
// Exports: useStrangerDangerWarning

// Module 10407 (useStrangerDangerWarning)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getCurrentUser());
  const obj = require(566) /* initialize */;
  const isSpamMessageRequest = require(10408) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10408) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10409) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10409) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10410) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10410) /* useChannelSafetyWarning */;
  const userIsTeen = require(7685) /* useUserIsTeen */.useUserIsTeen();
  if (null != stateFromStores) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(7685) /* useUserIsTeen */;
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
