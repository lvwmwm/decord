// Module ID: 20087
// Function ID: 20088
// Name: Disconnect
// Dependencies: [4858, 20088, 9202, 2]

// Module 20087 (Disconnect)
import CallsUtils from "CallsUtils" /* 9202 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20088 */;
import ChannelStore from "ChannelStore" /* 4858 */;
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
