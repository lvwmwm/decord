// Module ID: 20586
// Function ID: 20587
// Name: Disconnect
// Dependencies: [4991, 20587, 9307, 2]

// Module 20586 (Disconnect)
import CallsUtils from "CallsUtils" /* 9307 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20587 */;
import ChannelStore from "ChannelStore" /* 4991 */;
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
