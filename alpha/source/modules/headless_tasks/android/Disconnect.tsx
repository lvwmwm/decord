// Module ID: 20421
// Function ID: 20422
// Name: Disconnect
// Dependencies: [4990, 20422, 9366, 2]

// Module 20421 (Disconnect)
import CallsUtils from "CallsUtils" /* 9366 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20422 */;
import ChannelStore from "ChannelStore" /* 4990 */;
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
