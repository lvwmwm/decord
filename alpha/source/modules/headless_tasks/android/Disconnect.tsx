// Module ID: 20434
// Function ID: 20435
// Name: Disconnect
// Dependencies: [4990, 20435, 9366, 2]

// Module 20434 (Disconnect)
import CallsUtils from "CallsUtils" /* 9366 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20435 */;
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
