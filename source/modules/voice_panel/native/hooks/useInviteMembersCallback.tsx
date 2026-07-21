// Module ID: 15614
// Function ID: 119221
// Name: useInviteMembersCallback
// Dependencies: []
// Exports: useInviteMembersCallback

// Module 15614 (useInviteMembersCallback)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ AnalyticsPages: closure_4, InstantInviteSources: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = function useInviteMembersCallback(channelId) {
  const arg1 = channelId;
  const items = [channelId];
  return React.useCallback(() => {
    let id = channel.getChannel(arg0);
    if (null == id) {
      return null;
    } else {
      let tmpResult = closure_1;
      if (id.isPrivate()) {
        tmpResult = tmp(tmpResult[3]);
        id = id.id;
        let navigateToNewGroupDMResult = tmpResult.navigateToNewGroupDM(id, constants.CHANNEL_CALL);
      } else {
        tmpResult = tmp(tmpResult[4]);
        const obj = { source: constants2.VOICE_CHANNEL };
        navigateToNewGroupDMResult = tmpResult.showInstantInviteActionSheet(id, obj);
      }
    }
  }, items);
};
