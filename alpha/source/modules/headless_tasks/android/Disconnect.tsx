// Module ID: 19802
// Function ID: 19803
// Name: Disconnect
// Dependencies: [4856, 19803, 9186, 2]

// Module 19802 (Disconnect)
import CallsUtils from "CallsUtils" /* 9186 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19803 */;
import ChannelStore from "ChannelStore" /* 4856 */;
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
