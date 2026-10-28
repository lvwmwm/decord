// Module ID: 19529
// Function ID: 19530
// Name: Disconnect
// Dependencies: [4855, 19530, 9185, 2]

// Module 19529 (Disconnect)
import CallsUtils from "CallsUtils" /* 9185 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19530 */;
import ChannelStore from "ChannelStore" /* 4855 */;
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
