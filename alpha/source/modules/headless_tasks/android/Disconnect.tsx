// Module ID: 20781
// Function ID: 20782
// Name: Disconnect
// Dependencies: [5092, 20782, 10516, 2]

// Module 20781 (Disconnect)
import CallsUtils from "CallsUtils" /* 10516 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20782 */;
import ChannelStore from "ChannelStore" /* 5092 */;
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
