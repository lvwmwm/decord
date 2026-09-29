// Module ID: 18399
// Function ID: 18400
// Name: GenerateInvite
// Dependencies: [17, 18391, 8681, 8033, 2]

// Module 18399 (GenerateInvite)
import _mod17 from "module_17" /* 17 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8681 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    channelId(18391).awaitStorage(() => {
      const invite = InstantInviteActionCreatorsDefault.createInvite(channelId, {}, "Mobile Voice Overlay");
      invite.then((code) => {
        RNCClipboard = RNCClipboard.RNCClipboard;
        RNCClipboard.setString(channelId(8033)(code.code));
        closure_1_0(true);
      });
    });
  });
};
