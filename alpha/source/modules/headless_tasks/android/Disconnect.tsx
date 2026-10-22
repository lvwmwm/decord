// Module ID: 19360
// Function ID: 19361
// Name: Disconnect
// Dependencies: [4821, 19361, 9122, 2]

// Module 19360 (Disconnect)
import CallsUtils from "CallsUtils" /* 9122 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19361 */;
import ChannelStore from "ChannelStore" /* 4821 */;
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
