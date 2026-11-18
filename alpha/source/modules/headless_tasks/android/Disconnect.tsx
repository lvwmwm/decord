// Module ID: 20252
// Function ID: 20253
// Name: Disconnect
// Dependencies: [4672, 20253, 9564, 2]

// Module 20252 (Disconnect)
import CallsUtils from "CallsUtils" /* 9564 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20253 */;
import ChannelStore from "ChannelStore" /* 4672 */;
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
