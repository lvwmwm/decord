// Module ID: 20355
// Function ID: 20356
// Name: Disconnect
// Dependencies: [4861, 20356, 8594, 2]

// Module 20355 (Disconnect)
import CallsUtils from "CallsUtils" /* 8594 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20356 */;
import ChannelStore from "ChannelStore" /* 4861 */;
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
