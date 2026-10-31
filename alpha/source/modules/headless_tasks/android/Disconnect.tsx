// Module ID: 20148
// Function ID: 20149
// Name: Disconnect
// Dependencies: [4863, 20149, 9221, 2]

// Module 20148 (Disconnect)
import CallsUtils from "CallsUtils" /* 9221 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20149 */;
import ChannelStore from "ChannelStore" /* 4863 */;
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
