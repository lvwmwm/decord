// Module ID: 18390
// Function ID: 18391
// Name: Disconnect
// Dependencies: [2041, 18391, 9936, 2]

// Module 18390 (Disconnect)
import CallsUtils from "CallsUtils" /* 9936 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18391 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/headless_tasks/android/Disconnect.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        CallsUtils.handleDisconnect(channel);
      }
      closure_0(true);
    });
  });
};
