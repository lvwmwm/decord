// Module ID: 17758
// Function ID: 17759
// Name: Disconnect
// Dependencies: [2051, 17759, 9074, 2]

// Module 17758 (Disconnect)
import CallsUtils from "CallsUtils" /* 9074 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17759 */;
import ChannelStore from "ChannelStore" /* 2051 */;
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
