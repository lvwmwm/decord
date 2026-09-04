// Module ID: 16979
// Function ID: 16980
// Name: useInviteMembersCallback
// Dependencies: [19, 1386, 673, 11522, 9749, 2]
// Exports: useInviteMembersCallback

// Module 16979 (useInviteMembersCallback)
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import ME from "ME" /* 673 */;

const require = arg1;
({ AnalyticsPages: c5, InstantInviteSources: closure_6 } = ME);
let result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = function useInviteMembersCallback(channelId) {
  closure_0 = channelId;
  const items = [channelId];
  return React.useCallback(() => {
    let id = closure_1_4.getChannel(channelId);
    if (null == id) {
      return null;
    } else if (id.isPrivate()) {
      id = id.id;
      let result = closure_1_1(closure_1_2[3])(id, closure_1_5.CHANNEL_CALL);
    } else {
      let obj = channelId(closure_1_2[4]);
      obj = { source: null };
      obj[0] = closure_1_6.VOICE_CHANNEL;
      result = obj.showInstantInviteActionSheet(id, obj);
    }
  }, items);
};
