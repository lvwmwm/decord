// Module ID: 5104
// Function ID: 5105
// Name: preloadChannel
// Dependencies: [1085, 584, 2]
// Exports: default

// Module 5104 (preloadChannel)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ ME: c2, CURRENT_APP_CONTEXT: c3 } = Constants);
const result = size.fileFinishedImporting("modules/channel/preloadChannel.tsx");

export default function preloadChannel(arg0, channelId) {
  let tmp2 = null;
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (arg0 !== React2) {
    tmp2 = arg0;
  }
  const obj = { type: "CHANNEL_PRELOAD", guildId: tmp2, channelId, context };
  dispatch(obj);
};
