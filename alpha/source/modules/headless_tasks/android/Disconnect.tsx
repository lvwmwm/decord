// Module ID: 18457
// Function ID: 18458
// Name: Disconnect
// Dependencies: [2063, 18458, 8759, 2]

// Module 18457 (Disconnect)
import CallsUtils from "CallsUtils" /* 8759 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18458 */;
import ChannelStore from "ChannelStore" /* 2063 */;
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
