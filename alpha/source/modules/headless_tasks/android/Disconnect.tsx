// Module ID: 19151
// Function ID: 19152
// Name: Disconnect
// Dependencies: [2068, 19152, 9058, 2]

// Module 19151 (Disconnect)
import CallsUtils from "CallsUtils" /* 9058 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19152 */;
import ChannelStore from "ChannelStore" /* 2068 */;
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
