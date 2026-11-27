// Module ID: 20480
// Function ID: 20481
// Name: Disconnect
// Dependencies: [4892, 20481, 8637, 2]

// Module 20480 (Disconnect)
import CallsUtils from "CallsUtils" /* 8637 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20481 */;
import ChannelStore from "ChannelStore" /* 4892 */;
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
