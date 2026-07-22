// Module ID: 10393
// Function ID: 80118
// Name: useStrangerDangerWarning
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: useStrangerDangerWarning

// Module 10393 (useStrangerDangerWarning)
import __exportStarResult1 from "__exportStarResult1";
import { SafetyWarningTypes } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [__exportStarResult1];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = arg1(dependencyMap[2]);
  const isSpamMessageRequest = arg1(dependencyMap[3]).useIsSpamMessageRequest(id);
  const obj3 = arg1(dependencyMap[3]);
  const isMessageRequest = arg1(dependencyMap[4]).useIsMessageRequest(id);
  const obj4 = arg1(dependencyMap[4]);
  const channelSafetyWarning = arg1(dependencyMap[5]).useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = arg1(dependencyMap[5]);
  const userIsTeen = arg1(dependencyMap[6]).useUserIsTeen();
  if (null != stateFromStores) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = arg1(dependencyMap[6]);
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
