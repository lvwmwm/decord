// Module ID: 20604
// Function ID: 20605
// Name: Disconnect
// Dependencies: [5019, 20605, 9334, 2]

// Module 20604 (Disconnect)
import CallsUtils from "CallsUtils" /* 9334 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20605 */;
import ChannelStore from "ChannelStore" /* 5019 */;
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
