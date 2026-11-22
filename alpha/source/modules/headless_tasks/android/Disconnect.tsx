// Module ID: 20208
// Function ID: 20209
// Name: Disconnect
// Dependencies: [4762, 20209, 9663, 2]

// Module 20208 (Disconnect)
import CallsUtils from "CallsUtils" /* 9663 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20209 */;
import ChannelStore from "ChannelStore" /* 4762 */;
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
