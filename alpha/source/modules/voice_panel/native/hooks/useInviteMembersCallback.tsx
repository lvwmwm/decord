// Module ID: 18206
// Function ID: 18207
// Name: useInviteMembersCallback
// Dependencies: [19, 4892, 1071, 12106, 10429, 2]
// Exports: useInviteMembersCallback

// Module 18206 (useInviteMembersCallback)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10429 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 12106 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import Constants from "Constants" /* 1071 */;
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
