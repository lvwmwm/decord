// Module ID: 20253
// Function ID: 20254
// Name: Disconnect
// Dependencies: [4766, 20254, 8495, 2]

// Module 20253 (Disconnect)
import CallsUtils from "CallsUtils" /* 8495 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20254 */;
import ChannelStore from "ChannelStore" /* 4766 */;
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
