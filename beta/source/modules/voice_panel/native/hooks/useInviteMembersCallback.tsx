// Module ID: 16857
// Function ID: 16858
// Name: useInviteMembersCallback
// Dependencies: [19, 2051, 1086, 558, 576, 10953, 9253, 2]

// Module 16857 (useInviteMembersCallback)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9253 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 10953 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
({ AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      const channel = ChannelStore.getChannel(closure_0);
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
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useCallback(() => {
    const channel = ChannelStore.getChannel(closure_0);
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
});
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = tmp3;
