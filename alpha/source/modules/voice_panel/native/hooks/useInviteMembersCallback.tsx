// Module ID: 17679
// Function ID: 17680
// Name: useInviteMembersCallback
// Dependencies: [19, 2064, 1085, 558, 576, 10713, 8667, 2]

// Module 17679 (useInviteMembersCallback)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8667 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 10713 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
({ AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInviteMembersCallback(arg0) {
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
}) : (function useInviteMembersCallback(arg0) {
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
