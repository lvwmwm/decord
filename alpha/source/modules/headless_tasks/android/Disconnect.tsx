// Module ID: 17752
// Function ID: 17753
// Name: Disconnect
// Dependencies: [2045, 17753, 9097, 2]

// Module 17752 (Disconnect)
import CallsUtils from "CallsUtils" /* 9097 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17753 */;
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
