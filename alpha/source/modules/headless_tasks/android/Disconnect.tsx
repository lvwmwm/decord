// Module ID: 20469
// Function ID: 20470
// Name: Disconnect
// Dependencies: [4992, 20470, 9373, 2]

// Module 20469 (Disconnect)
import CallsUtils from "CallsUtils" /* 9373 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20470 */;
import ChannelStore from "ChannelStore" /* 4992 */;
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
