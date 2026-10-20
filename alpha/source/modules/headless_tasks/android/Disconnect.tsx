// Module ID: 19218
// Function ID: 19219
// Name: Disconnect
// Dependencies: [4800, 19219, 9086, 2]

// Module 19218 (Disconnect)
import CallsUtils from "CallsUtils" /* 9086 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19219 */;
import ChannelStore from "ChannelStore" /* 4800 */;
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
