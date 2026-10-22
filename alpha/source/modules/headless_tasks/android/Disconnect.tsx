// Module ID: 19383
// Function ID: 19384
// Name: Disconnect
// Dependencies: [4821, 19384, 9129, 2]

// Module 19383 (Disconnect)
import CallsUtils from "CallsUtils" /* 9129 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19384 */;
import ChannelStore from "ChannelStore" /* 4821 */;
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
