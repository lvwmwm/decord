// Module ID: 20024
// Function ID: 20025
// Name: Disconnect
// Dependencies: [4857, 20025, 9189, 2]

// Module 20024 (Disconnect)
import CallsUtils from "CallsUtils" /* 9189 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20025 */;
import ChannelStore from "ChannelStore" /* 4857 */;
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
