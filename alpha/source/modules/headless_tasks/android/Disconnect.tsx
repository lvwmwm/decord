// Module ID: 20776
// Function ID: 20777
// Name: Disconnect
// Dependencies: [5092, 20777, 10514, 2]

// Module 20776 (Disconnect)
import CallsUtils from "CallsUtils" /* 10514 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20777 */;
import ChannelStore from "ChannelStore" /* 5092 */;
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
