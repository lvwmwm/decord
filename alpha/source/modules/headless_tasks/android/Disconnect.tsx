// Module ID: 19032
// Function ID: 19033
// Name: Disconnect
// Dependencies: [2065, 19033, 9003, 2]

// Module 19032 (Disconnect)
import CallsUtils from "CallsUtils" /* 9003 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19033 */;
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
