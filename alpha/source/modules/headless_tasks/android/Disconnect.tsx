// Module ID: 19194
// Function ID: 19195
// Name: Disconnect
// Dependencies: [4800, 19195, 9074, 2]

// Module 19194 (Disconnect)
import CallsUtils from "CallsUtils" /* 9074 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19195 */;
import ChannelStore from "ChannelStore" /* 4800 */;
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
