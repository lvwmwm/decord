// Module ID: 18621
// Function ID: 18622
// Name: Disconnect
// Dependencies: [2064, 18622, 8768, 2]

// Module 18621 (Disconnect)
import CallsUtils from "CallsUtils" /* 8768 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18622 */;
import ChannelStore from "ChannelStore" /* 2064 */;
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
