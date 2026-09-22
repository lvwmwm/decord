// Module ID: 18391
// Function ID: 18392
// Name: Disconnect
// Dependencies: [2045, 18392, 9882, 2]

// Module 18391 (Disconnect)
import CallsUtils from "CallsUtils" /* 9882 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18392 */;
import ChannelStore from "ChannelStore" /* 2045 */;

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
