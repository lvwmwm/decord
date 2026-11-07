// Module ID: 20545
// Function ID: 20546
// Name: Disconnect
// Dependencies: [4989, 20546, 9301, 2]

// Module 20545 (Disconnect)
import CallsUtils from "CallsUtils" /* 9301 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20546 */;
import ChannelStore from "ChannelStore" /* 4989 */;
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
