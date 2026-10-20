// Module ID: 18766
// Function ID: 18767
// Name: GenerateInvite
// Dependencies: [17, 18758, 8492, 8689, 2]

// Module 18766 (GenerateInvite)
import react_native from "react-native" /* 17 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8492 */;
import size from "module_2" /* 2 */;

let RNCClipboard;

const NativeModules = react_native.NativeModules;
const result = size.fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = channelId(dependencyMap[1]);
    obj.awaitStorage(() => {
      const obj = InstantInviteActionCreatorsDefault;
      const invite = obj.createInvite(channelId, {}, "Mobile Voice Overlay");
      invite.then((code) => {
        RNCClipboard = RNCClipboard.RNCClipboard;
        RNCClipboard.setString(channelId(dependencyMap[3])(code.code));
        closure_1_0(true);
      });
    });
  });
  return promise;
};
