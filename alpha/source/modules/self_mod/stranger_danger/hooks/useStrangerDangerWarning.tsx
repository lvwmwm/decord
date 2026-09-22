// Module ID: 11631
// Function ID: 11632
// Name: useStrangerDangerWarning
// Dependencies: [1372, 11185, 504, 11632, 11633, 11245, 8927, 11244, 2]
// Exports: useStrangerDangerWarning

// Module 11631 (useStrangerDangerWarning)
import initialize from "initialize" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 8927 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11245 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11632 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11633 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SafetyWarningTypes = fn(11185).SafetyWarningTypes;
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
