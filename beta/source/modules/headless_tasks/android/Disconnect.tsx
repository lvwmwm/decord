// Module ID: 20596
// Function ID: 20597
// Name: Disconnect
// Dependencies: [5019, 20597, 9334, 2]

// Module 20596 (Disconnect)
import CallsUtils from "CallsUtils" /* 9334 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20597 */;
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
