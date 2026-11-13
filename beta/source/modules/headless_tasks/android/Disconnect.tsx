// Module ID: 20599
// Function ID: 20600
// Name: Disconnect
// Dependencies: [5019, 20600, 9334, 2]

// Module 20599 (Disconnect)
import CallsUtils from "CallsUtils" /* 9334 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20600 */;
import ChannelStore from "ChannelStore" /* 5019 */;
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
