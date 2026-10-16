// Module ID: 19089
// Function ID: 19090
// Name: Disconnect
// Dependencies: [2068, 19090, 9012, 2]

// Module 19089 (Disconnect)
import CallsUtils from "CallsUtils" /* 9012 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19090 */;
import ChannelStore from "ChannelStore" /* 2068 */;
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
