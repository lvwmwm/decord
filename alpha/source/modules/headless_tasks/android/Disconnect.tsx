// Module ID: 20334
// Function ID: 20335
// Name: Disconnect
// Dependencies: [4990, 20335, 9349, 2]

// Module 20334 (Disconnect)
import CallsUtils from "CallsUtils" /* 9349 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20335 */;
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
