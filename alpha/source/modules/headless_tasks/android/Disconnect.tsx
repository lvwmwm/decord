// Module ID: 20930
// Function ID: 20931
// Name: Disconnect
// Dependencies: [5155, 20931, 10583, 2]

// Module 20930 (Disconnect)
import CallsUtils from "CallsUtils" /* 10583 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20931 */;
import ChannelStore from "ChannelStore" /* 5155 */;
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
