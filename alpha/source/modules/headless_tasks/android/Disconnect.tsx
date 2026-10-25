// Module ID: 19492
// Function ID: 19493
// Name: Disconnect
// Dependencies: [4823, 19493, 9153, 2]

// Module 19492 (Disconnect)
import CallsUtils from "CallsUtils" /* 9153 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19493 */;
import ChannelStore from "ChannelStore" /* 4823 */;
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
