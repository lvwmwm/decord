// Module ID: 17507
// Function ID: 17508
// Name: useInviteMembersCallback
// Dependencies: [19, 2045, 1078, 558, 568, 11746, 10094, 2]

// Module 17507 (useInviteMembersCallback)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10094 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11746 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1078);
({ AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(2);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      let id = ChannelStore.getChannel(closure_0);
      if (null == id) {
        return null;
      } else if (id.isPrivate()) {
        id = id.id;
        let result = openGroupDMAddMembersDefault(id, constants.CHANNEL_CALL);
      } else {
        const obj2 = { source: constants2.VOICE_CHANNEL };
        result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(id, obj2);
      }
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useCallback(() => {
    let id = ChannelStore.getChannel(closure_0);
    if (null == id) {
      return null;
    } else if (id.isPrivate()) {
      id = id.id;
      let result = openGroupDMAddMembersDefault(id, constants.CHANNEL_CALL);
    } else {
      const obj2 = { source: constants2.VOICE_CHANNEL };
      result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(id, obj2);
    }
  }, items);
});
