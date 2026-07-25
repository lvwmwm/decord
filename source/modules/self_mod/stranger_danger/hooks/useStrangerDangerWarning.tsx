// Module ID: 10366
// Function ID: 80029
// Name: useStrangerDangerWarning
// Dependencies: [1850, 9031, 566, 10367, 10368, 10369, 7649, 10072, 2]
// Exports: useStrangerDangerWarning

// Module 10366 (useStrangerDangerWarning)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getCurrentUser());
  const obj = require(566) /* initialize */;
  const isSpamMessageRequest = require(10367) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10367) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10368) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10368) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10369) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10369) /* useChannelSafetyWarning */;
  const userIsTeen = require(7649) /* useUserIsTeen */.useUserIsTeen();
  if (null != stateFromStores) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(7649) /* useUserIsTeen */;
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
