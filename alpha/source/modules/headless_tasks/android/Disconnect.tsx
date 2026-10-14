// Module ID: 18793
// Function ID: 18794
// Name: Disconnect
// Dependencies: [2065, 18794, 8790, 2]

// Module 18793 (Disconnect)
import CallsUtils from "CallsUtils" /* 8790 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18794 */;
import ChannelStore from "ChannelStore" /* 2065 */;
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
