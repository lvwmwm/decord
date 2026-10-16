// Module ID: 18753
// Function ID: 18754
// Name: Disconnect
// Dependencies: [2065, 18754, 8781, 2]

// Module 18753 (Disconnect)
import CallsUtils from "CallsUtils" /* 8781 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18754 */;
import ChannelStore from "ChannelStore" /* 2065 */;
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
