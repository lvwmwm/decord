// Module ID: 19578
// Function ID: 19579
// Name: useInviteMembersCallback
// Dependencies: [19, 5019, 1072, 11817, 9231, 2]
// Exports: useInviteMembersCallback

// Module 19578 (useInviteMembersCallback)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9231 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11817 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire } = Constants);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export function useInviteMembersCallback(channelId) {
  let closure_0 = channelId;
  const items = [channelId];
  return react.useCallback(() => {
    const channel = ChannelStore.getChannel(channelId);
    let tmp = null;
    if (null != channel) {
      let result;
      if (channel.isPrivate()) {
        result = openGroupDMAddMembersDefault(channel.id, hasOwnProperty.CHANNEL_CALL);
      } else {
        const obj = { source: metroRequire.VOICE_CHANNEL };
        const obj2 = instant_invite_InstantInviteUtils;
        result = obj2.showInstantInviteActionSheet(channel, obj);
      }
      tmp = result;
    }
    return tmp;
  }, items);
}
