// Module ID: 19327
// Function ID: 19328
// Name: useInviteMembersCallback
// Dependencies: [19, 4990, 1072, 11763, 9246, 2]
// Exports: useInviteMembersCallback

// Module 19327 (useInviteMembersCallback)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9246 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11763 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;
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
