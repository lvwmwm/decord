// Module ID: 11656
// Function ID: 11657
// Name: useStrangerDangerWarning
// Dependencies: [1372, 11208, 504, 11657, 11658, 11268, 8954, 11267, 2]
// Exports: useStrangerDangerWarning

// Module 11656 (useStrangerDangerWarning)
import initialize from "initialize" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 8954 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11268 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11657 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11658 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SafetyWarningTypes = fn(11208).SafetyWarningTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(id);
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(id);
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  if (userIsTeen) {
    if (!isSpamMessageRequest) {
      if (!isMessageRequest) {
        if (tmpResult.useInappropriateConversationWarningsForChannel(id).length <= 0) {
          return channelSafetyWarning;
        }
      }
    }
  }
};
