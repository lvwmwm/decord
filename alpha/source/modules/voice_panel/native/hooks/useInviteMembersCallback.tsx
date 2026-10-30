// Module ID: 19113
// Function ID: 19114
// Name: useInviteMembersCallback
// Dependencies: [19, 4858, 1072, 11589, 9099, 2]
// Exports: useInviteMembersCallback

// Module 19113 (useInviteMembersCallback)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9099 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11589 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
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
