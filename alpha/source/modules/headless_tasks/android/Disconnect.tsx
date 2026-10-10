// Module ID: 18695
// Function ID: 18696
// Name: Disconnect
// Dependencies: [2065, 18696, 8785, 2]

// Module 18695 (Disconnect)
import CallsUtils from "CallsUtils" /* 8785 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18696 */;
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
