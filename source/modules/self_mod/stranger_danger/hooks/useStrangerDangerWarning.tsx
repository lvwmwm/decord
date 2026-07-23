// Module ID: 10403
// Function ID: 80168
// Name: useStrangerDangerWarning
// Dependencies: [1849, 9101, 566, 10404, 10405, 10406, 7616, 10108, 2]
// Exports: useStrangerDangerWarning

// Module 10403 (useStrangerDangerWarning)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getCurrentUser());
  const obj = require(566) /* initialize */;
  const isSpamMessageRequest = require(10404) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10404) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10405) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10405) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10406) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10406) /* useChannelSafetyWarning */;
  const userIsTeen = require(7616) /* useUserIsTeen */.useUserIsTeen();
  if (null != stateFromStores) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(7616) /* useUserIsTeen */;
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
