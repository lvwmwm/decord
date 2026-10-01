// Module ID: 17756
// Function ID: 17757
// Name: Disconnect
// Dependencies: [2045, 17757, 9097, 2]

// Module 17756 (Disconnect)
import CallsUtils from "CallsUtils" /* 9097 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17757 */;
import ChannelStore from "ChannelStore" /* 2045 */;
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
