// Module ID: 20083
// Function ID: 20084
// Name: Disconnect
// Dependencies: [4643, 20084, 9543, 2]

// Module 20083 (Disconnect)
import CallsUtils from "CallsUtils" /* 9543 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20084 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/headless_tasks/android/Disconnect.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = HeadlessTaskUtilsDefault;
    obj.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        const obj = CallsUtils;
        obj.handleDisconnect(channel);
      }
      closure_0(true);
    });
  });
  return promise;
};
