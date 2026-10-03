// Module ID: 18102
// Function ID: 18103
// Name: Disconnect
// Dependencies: [2051, 18103, 9299, 2]

// Module 18102 (Disconnect)
import CallsUtils from "CallsUtils" /* 9299 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18103 */;
import ChannelStore from "ChannelStore" /* 2051 */;
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
