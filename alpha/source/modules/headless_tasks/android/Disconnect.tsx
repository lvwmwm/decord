// Module ID: 18490
// Function ID: 18491
// Name: Disconnect
// Dependencies: [2044, 18491, 9988, 2]

// Module 18490 (Disconnect)
import CallsUtils from "CallsUtils" /* 9988 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18491 */;
import ChannelStore from "ChannelStore" /* 2044 */;

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
