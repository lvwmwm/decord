// Module ID: 15789
// Function ID: 121798
// Name: useInviteMembersCallback
// Dependencies: [31, 1348, 653, 3981, 8526, 2]
// Exports: useInviteMembersCallback

// Module 15789 (useInviteMembersCallback)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ AnalyticsPages: closure_4, InstantInviteSources: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = function useInviteMembersCallback(channelId) {
  let closure_0 = channelId;
  const items = [channelId];
  return React.useCallback(() => {
    let id = outer1_3.getChannel(closure_0);
    if (null == id) {
      return null;
    } else {
      let tmpResult = outer1_1;
      if (id.isPrivate()) {
        tmpResult = tmp(tmpResult[3]);
        id = id.id;
        let navigateToNewGroupDMResult = tmpResult.navigateToNewGroupDM(id, outer1_4.CHANNEL_CALL);
      } else {
        tmpResult = tmp(tmpResult[4]);
        const obj = { source: outer1_5.VOICE_CHANNEL };
        navigateToNewGroupDMResult = tmpResult.showInstantInviteActionSheet(id, obj);
      }
    }
  }, items);
};
